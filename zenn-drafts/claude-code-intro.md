---
title: "Claude Code入門：ターミナルで動くAIコーディングエージェントの実力"
emoji: "🔧"
type: "tech"
topics: ["claude", "ai", "nextjs", "生産性", "claudecode"]
published: false
---

## このページは要約版です

本記事は [AI仕事術 / Claude Code完全ガイド](https://ai-shigotojutsu.com/blog/claude-code-guide) の要約版です。料金比較・つまずきポイント・Cursor / GitHub Copilot との違いまで含めた完全版は、本家サイトで読めます。

## Claude Code とは

Claude Code は Anthropic が提供する AI コーディングエージェントです。VS Code プラグインのような IDE 常駐型ではなく、**ターミナルから `claude` と打つと起動する独立ツール**という形をとっています。

起動すると、Claude Code は現在のフォルダ内のファイルを自分で読み、`package.json` や `git log` から技術スタックと履歴を把握し、ユーザーの日本語指示に従ってファイル編集・シェルコマンド実行・Git 操作までを自律的に進めます。

## ChatGPT / GitHub Copilot とのポジション差

| 比較軸 | ChatGPT | GitHub Copilot | Claude Code |
|---|---|---|---|
| コード貼り付け | 必要 | 不要 | 不要 |
| 複数ファイル横断 | 苦手 | 苦手 | 得意 |
| シェル実行 | 不可 | 不可 | 可 |
| Git 操作 | 不可 | 不可 | 可 |

ChatGPT はコピペ往復、Copilot は現在ファイルしか見ない。Claude Code はその両方のギャップを埋める位置づけで、「人間が大まかに指示 → AI が具体的な作業を実行する」分業が自然に成立します。

## 主な特徴（ピックアップ）

### ファイルを直接読み書きする

「`src/components` の既存の命名規則に合わせてヘッダーを追加して」と頼めば、既存コンポーネントを読んだうえで同じスタイルで新規ファイルを作ります。

### シェルコマンドを実行する

`npm install`、`git commit`、`npm run build`、Vercel デプロイまで一括で任せられます。GitHub リポジトリ作成から本番反映まで、コマンドを1行も打たずに進められます。

### CLAUDE.md でプロジェクトルールを共有

プロジェクトルートに `CLAUDE.md` を置いておくと起動時に読み込まれ、技術スタック・規約・禁止事項などを毎回指示せずに済みます。

### Todo リストで段階的に進む

「EC サイトを丸ごと作って」のような大きな依頼を、内部で Todo 分解して段階的に進めます。途中で方針変更すると計画もその場で組み直してくれます。

## 料金の考え方

料金は2系統。

- **API 従量課金**: Anthropic Console でクレジット購入 → 使用量に応じて消費
- **Claude Pro / Max プラン**: 月20ドル〜100ドル前後の定額の中に Claude Code 利用枠が含まれる

毎日フル稼働するなら定額プランの方が安く済むケースが多いです。具体的な損益分岐ラインの試算は本家記事にまとめています。

## 完全版はこちら

つまずきポイント、`CLAUDE.md` の書き方、Cursor との棲み分け、無料で始める最小構成などは [本家記事](https://ai-shigotojutsu.com/blog/claude-code-guide) で解説しています。

:::message
このサイト「AI仕事術」は Claude Code との対話だけで構築されました。Next.js のセットアップ、OGP 動的生成、Cloudflare/ConoHa でのドメイン設定、A8.net のリンク埋め込みまで、エディタを開いて手で書いたコードは1行もありません。
:::
