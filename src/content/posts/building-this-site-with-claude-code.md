---
title: "このアフィリエイトサイトをClaude Codeだけで作った実録：構成・コマンド・つまずき全公開"
description: "Next.js 16 + Tailwind 4で立ち上げた本サイトの構築ログ。Claude Codeに依頼した指示、出てきたコード、手戻り、デザインの試行回数まで全て公開。"
category: "AIツール比較"
categorySlug: "ai-tools"
date: "2026-04-15"
updated: "2026-04-15"
readTime: "15分"
emoji: "🏗️"
---

## この記事の前提

本記事を読んでいるサイト「AI仕事術」そのものが、Claude Codeとの対話だけで構築されています。本記事はそのビルドログです。エディタでコードを手書きした部分は 0 行。すべての実装・設定・デプロイを Claude Code が実行しました。

読んでいる方のブラウザの URL バーを見てもらえば `https://ai-shigotojutsu.com` で動いていることが確認できます。本記事で書く構成は実際にこのサイトで動いている技術スタックそのものです。脚色なし、推定なしの一次情報として参考にしてもらえます。

## 最終的な技術スタック

`package.json` にそのまま入っている内容です。

- **Next.js 16.2.3**（App Router、Turbopack）
- **React 19.2.4**
- **Tailwind CSS 4**（新しい CSS-first のコンフィグ）
- **TypeScript 5**
- **gray-matter** — Markdownフロントマターのパース
- **remark / remark-html** — Markdown → HTML 変換
- デプロイ先: **Vercel**
- ドメイン: ConoHa でレジストラ登録 → DNS は Vercel 側

追加ツールは一切入れていません。MDX も使わず、純粋な Markdown ファイルを `src/content/posts/*.md` に置いて remark で HTML 化しているだけです。

## プロジェクトを Claude Code に任せる前の準備

ターミナルを開いて Claude Code を起動しました。起動したら最初にやったのは、プロジェクトルートに `CLAUDE.md` を置くことです。ここには次のような内容を書きました。

- プロジェクトの目的（アフィリエイトサイトであること）
- 技術スタックの希望（Next.js + Tailwind、WordPressは使わない）
- 使ってはいけない定型句や装飾（記号の乱用、テーブル、水平線）
- 記事は Markdown で書き、フロントマターで管理する方針

`CLAUDE.md` はプロジェクト起動時に Claude Code が自動で読んでくれるので、毎回同じ前提を打ち直す必要がなくなります。これが後のセッションで一番効きました。

## 初期立ち上げ：1日目

最初の指示は実質1行です。

> Next.js 16 と Tailwind CSS 4 でアフィリエイトサイトを立ち上げて。ブログ記事は Markdown ファイルで管理する。デザインは後で直すので、今はミニマムで動くものを作って。

Claude Code はこの指示を受けると、内部で Todo リストを組んで段階的に実装していきました。実際に行われた操作は次のような流れです。

1. `create-next-app` でプロジェクトを初期化
2. Tailwind CSS 4 を導入、`globals.css` に基本スタイルを記述
3. `src/app/layout.tsx`、`src/app/page.tsx` を作成してトップページを表示
4. `src/content/posts/` フォルダに仮のサンプル Markdown を配置
5. `src/lib/posts.ts` にフロントマターをパースして一覧・詳細を返すユーティリティを実装
6. 動的ルーティング `src/app/blog/[slug]/page.tsx` で記事ページを生成
7. `npm run dev` を実行してローカル確認

ここまでの作業時間はおよそ 30 分。体感ではほとんどがビルド待ちで、Claude Code 自身の出力時間は数分程度でした。

## ヘッダー・フッター・デザインの試行

デザインは 3 回やり直しました。最初の 2 回は Claude Code の提案をそのまま採用したのですが、実際に見ると「AI SaaSのテンプレ顔」で気に入らなかった。紫グラデーションのヒーロー、白カード、紫アクセント。どこかで見たことがある顔でした。

2 回目はモノクロのエディトリアル調にしましたが、今度は味気なさ過ぎた。3 回目で「Stripe Blog、Linear、Anthropic Newsroom、SANGO、SWELL の 5 サイトを参考に」と具体的な参照を添えて依頼し直したところ、クリーム系のオフホワイト（#faf7f2）と Anthropic コーラル（#da7756）を組み合わせたエディトリアル風のレイアウトに落ち着きました。

指示のポイントは「参照サイトを 5 つ挙げて、そのどれでもない中間を作って」と伝えたことです。1 つだけ挙げるとコピーになり、抽象的に頼むと無難になります。

## 記事レンダリングパイプライン

`src/lib/posts.ts` の中身は本当にシンプルです。

```typescript
const postsDir = path.join(process.cwd(), "src/content/posts");

export async function getPostBySlug(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  const result = await remark().use(html, { sanitize: false }).process(content);
  return {
    meta: { slug, ...data } as PostMeta,
    contentHtml: result.toString(),
    faq: extractFaq(content),
  };
}
```

ポイントは2つ。

ひとつめは `sanitize: false` を指定していること。アフィリエイトリンクの HTML（A8.net のトラッキングピクセル画像を含む `<a>` タグ）が Markdown の中に混ざっているため、デフォルトの sanitize に弾かれるとリンクが無効化されてしまいます。公開サイトなので入力元は自分のフロントマターだけであり、XSS の経路は存在しません。意図的に sanitize を切っています。

ふたつめは `extractFaq` という自作関数で、Markdown から `### Q1. 〜` / `**A:** 〜` の形式を拾い出して FAQ の配列を返していること。この配列は記事ページで FAQPage の JSON-LD を生成するのに使います。

## SEO 対応

SEO 周りは後から一気に足しました。Claude Code に「このサイトの SEO を本気で最適化して」と頼むと、以下のような作業が自動で進みました。

- `sitemap.ts` で記事一覧から `sitemap.xml` を生成
- `robots.ts` で `/` 全許可と sitemap の宣言
- ルートの `layout.tsx` に WebSite + Organization の JSON-LD を埋め込み、`sameAs` にnoteプロフィールを追加
- 記事ページに Article + BreadcrumbList の JSON-LD、ページ内に FAQ がある場合は FAQPage を追加
- `generateMetadata` で記事ごとの canonical・OG・Twitter Card を生成
- `/blog/[slug]/opengraph-image.tsx` で記事ごとの OG 画像を動的生成
- viewport と themeColor を Next.js 16 の新 API に沿って分離

どれも個別に頼めば 10 分程度の作業ですが、リストを渡せば 30 分くらいで全部入ります。

## アクセシビリティのコントラスト修正

Lighthouse を走らせたら、Accessibility が 96 点でした。原因はコントラスト不足が数か所。コーラル `#da7756` を 10px の細い小文字ラベルに使っていたため、背景のクリーム色に対して 2.9 しか出ていませんでした（WCAG AA は 4.5 必要）。

Claude Code に Lighthouse のレポートを渡して「コントラストを 4.5 以上に上げつつ、エディトリアル調のトーンは崩さないで」と依頼。結果として小文字ラベル用に `--accent-deep: #9c3d1d` という一段深いシェードを新設し、アフィリエイトボタンの背景もそちらに切り替えました。再測定で **Accessibility 100** を獲得しています。

## アフィリエイトリンクの管理

A8.net と もしもアフィリエイト で取得したリンク HTML は、`context/` フォルダの中にマスターファイルとして保管しています。記事側では HTML タグをそのまま貼り付けて、クラス `aff-btn` でスタイリング。ボタンはクラスで統一しているので、後からデザインを変えたいときは `globals.css` の 1 箇所を直すだけです。

ここは最初、インラインスタイル（紫グラデーション）で貼られていました。記事が増えたタイミングで全箇所をクラスに統一する作業をしましたが、Claude Code が `replace_all` で7ファイル分を一括置換してくれたので 5 分で終わっています。

## 料金感

サイト立ち上げから SEO 最適化まで、Claude Code 側で消費したトークンはそれなりの量ですが、費用対効果でいうと「作業時間の圧縮」として圧倒的に元が取れる水準です。定額プランであれば追加課金なしで進められますし、API 従量課金でもプロジェクト 1 本あたり数十ドル〜のレンジに収まります。

月単位で Claude Code を回している人には、**定額プラン（Claude Pro / Max）を先に契約しておく** のが結局コストが読みやすいです。

## この構築方法が向いている人

この記事の方法が向いているのはこういう人です。

- 自分で要件定義できる人（技術スタック、デザインの方向性、SEO の要件を言語化できる）
- 手戻りを許容できる人（1発で完璧を狙わず、何度でも指示し直せる）
- ターミナル操作に抵抗がない人

逆に「何を作りたいか」を言語化できないまま Claude Code に頼むと、いくら賢いエージェントでも迷走します。

Claude Code そのものの機能・料金・他ツールとの比較は [Claude Code完全ガイド](/blog/claude-code-guide) でまとめています。AIエンジニアを目指す方向の学習ルートは [AIエンジニアになるためのスクール3選](/blog/ai-engineer-school) をどうぞ。

## まとめ

- このサイトは Next.js 16 + Tailwind CSS 4 で構築された
- 実装はすべて Claude Code との対話で完結した
- デザインは 3 回やり直した（紫グラデーション → モノクロ → エディトリアル）
- SEO / アクセシビリティ / JSON-LD まで含めて Claude Code が実装した
- Lighthouse は Performance 98 / Accessibility 100 / Best Practices 100 / SEO 100

脚色のない一次情報として、これから Claude Code で何かを作ろうとしている人の参考になれば嬉しいです。
