# Zenn 二次配信用ドラフト

本サイト記事の要約版を Zenn に投稿するためのドラフト置き場。

## 投稿手順

1. Zenn アカウントにログイン → GitHub 連携 or 直接エディタで新規記事作成
2. このフォルダの `.md` をそのままコピペ
3. frontmatter の `published: false` を `true` に変更
4. プレビュー確認 → 公開

## 記事一覧

| ファイル | 元記事 | Zenn type | 状態 |
|---|---|---|---|
| built-with-claude-code.md | /blog/building-this-site-with-claude-code | tech | 下書き（優先度★） |
| claude-code-advanced.md | /blog/claude-code-advanced | tech | 下書き（優先度★） |
| claude-code-intro.md | /blog/claude-code-guide | tech | 下書き |
| claude-api-quickstart.md | /blog/claude-api-guide | tech | 下書き |

## 運用ルール

- **要約版であること** — Zenn の全文コピーは duplicate content 扱いされる可能性があるため、各記事は本家の 30〜50% の分量まで
- **本家へのリンクを必ず記事冒頭と末尾に置く** — これが集客の本体
- **Zenn 公開後、本家記事にも Zenn 版リンクを追記する**（相互参照）
- `published: false` で作成し、プレビュー確認してから `true` に変更
- トピック（topics）は Zenn 内検索に効くので丁寧に選ぶ（最大5つ）

## なぜ Zenn なのか

- 技術系読者のレコメンド流入が期待できる
- 新規ドメインでは難しい「Google検索以外」の流入源になる
- Zenn から本家へのリンクは被リンクとしても機能する
