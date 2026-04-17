---
title: "Claude Code だけで Next.js 16 のアフィリエイトサイトを1人で作った実録"
emoji: "🏗️"
type: "tech"
topics: ["claude", "claudecode", "nextjs", "tailwindcss", "ai"]
published: false
---

## この記事は要約版です

本記事は [AI仕事術 / このアフィリエイトサイトをClaude Codeだけで作った実録](https://ai-shigotojutsu.com/blog/building-this-site-with-claude-code) の Zenn 配信版です。`sanitize: false` にした理由・FAQ 抽出コード・JSON-LD の設計判断など、実装寄りの詳細は本家に全部あります。

## 何をした話か

`https://ai-shigotojutsu.com` というアフィリエイトサイトを、**Claude Code との対話だけ** で立ち上げた記録です。エディタを開いて手で書いたコードは 0 行。

## 採用した技術スタック

```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "16.2.3",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

MDX は使わず純粋な Markdown を remark で変換するだけの構成。記事は `src/content/posts/*.md` に Git 管理で置いています。

## 立ち上げで効いた `CLAUDE.md`

プロジェクトルートに `CLAUDE.md` を置くと、Claude Code は起動時に自動で読みます。ここに次のようなルールを書いておくと、以降のセッションで毎回説明し直す必要がなくなります。

- プロジェクトの目的（アフィリエイトサイト、Next.js + Tailwind 4）
- MDX 不使用、Markdown + remark
- 装飾の禁止事項（記号・絵文字・テーブル・水平線の乱用NG）
- 記事のフロントマター形式

## 記事レンダリングのコア

`src/lib/posts.ts` の中身はシンプル。

```typescript
const postsDir = path.join(process.cwd(), "src/content/posts");

export async function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  const result = await remark()
    .use(html, { sanitize: false })
    .process(content);
  return {
    meta: { slug, ...data } as PostMeta,
    contentHtml: result.toString(),
    faq: extractFaq(content),
  };
}
```

`sanitize: false` が肝です。アフィリエイトリンクの HTML（A8.net のトラッキングピクセル `<img>` など）をそのまま通すためで、入力源は自分のフロントマターだけなので XSS の経路は存在しません。

## SEO 一式を Claude Code に任せる

「SEO を本気で最適化して」と指示を出すと、以下を自動で実装してくれます。

- `sitemap.ts` → `sitemap.xml` を動的生成
- `robots.ts`
- ルートの `layout.tsx` に `WebSite` + `Organization` JSON-LD（`sameAs` にプロフィールリンクも含める）
- 記事ページに `Article` + `BreadcrumbList` + `FAQPage` の JSON-LD
- `generateMetadata` で canonical / OG / Twitter Card
- `/blog/[slug]/opengraph-image.tsx` で OG 画像を動的生成

`FAQPage` は `### Q1. xxx` / `**A:** yyy` を Markdown 側に書いておくと自動抽出される作りにしました。パースは正規表現ではなく、es2018 の `s` フラグを避けたかったので行単位のステートマシンで実装しています（本家記事に実コードあり）。

## Lighthouse を走らせて詰まったところ

初回計測：

```
Performance: 98
Accessibility: 96  ← 落ちた
Best Practices: 100
SEO: 100
```

Accessibility の原因はコントラスト不足。コーラル `#da7756` を 10px の小文字ラベルに使ったため、クリーム背景（`#faf7f2`）に対して **2.9 しか出ていませんでした**。WCAG AA は通常テキスト4.5 必要です。

Claude Code に Lighthouse のレポートを渡して「コントラストを4.5 以上に、エディトリアル調は崩さずに」と依頼。結果:

- 新変数 `--accent-deep: #9c3d1d` を CSS に追加
- 小文字ラベルとアフィリエイトボタンを全部 `--accent-deep` 参照に一括置換
- フッターのミュート文字色を 1 段明るく（黒背景上の `#6b6459` が 2.97 だったため）

再計測で **Accessibility 100** を達成。

## 開発の進め方で個人的に効いたコツ

- **3サイト以上の参照を添える** — デザイン指示の時「Stripe Blog、Linear、Anthropic Newsroom、SANGO、SWELL の中間」と 5 サイト指定。1 つだけだとコピーになり、抽象的に頼むと無難になります。
- **`CLAUDE.md` にNG リストを書く** — やりたいことより「やってほしくないこと」を書くほうが効きます（記号の乱用、紫グラデ、丸ピルボタン、絵文字の連打など）。
- **Lighthouse レポートをそのまま渡す** — 「要素と contrast ratio を見て対応して」と言うと、該当箇所を全 .tsx ファイルから引っ張ってきて一括置換まで進みます。

## 詳細は本家へ

- 実際の指示プロンプト例
- 手戻り 3 回分のデザイン変遷
- `extractFaq` の全コード
- アフィリエイトボタンを `.aff-btn` クラスに統一した作業の全容

このあたりは [本家記事 - AI仕事術](https://ai-shigotojutsu.com/blog/building-this-site-with-claude-code) にまとめています。
