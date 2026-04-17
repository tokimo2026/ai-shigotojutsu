---
title: "Claude API を30分で使い始める：Python / Node.js コピペ最小構成"
emoji: "🔌"
type: "tech"
topics: ["claude", "anthropic", "api", "python", "nodejs"]
published: false
---

## このページは要約版です

本記事は [AI仕事術 / Claude API完全ガイド](https://ai-shigotojutsu.com/blog/claude-api-guide) の要約版です。料金早見表、プロンプト設計のコツ、エラー対処、実装パターンの完全版は本家サイトに掲載しています。

## Claude API でできること

- 顧客メールの自動分類・返信生成
- 長文資料を要約する Slack ボット
- EC サイトの商品説明の自動生成
- コードレビューツール
- 議事録から要点を抽出するアプリ

ChatGPT API と近い領域を扱いますが、**長文処理・回答の正確性・コーディング能力・日本語の自然さ** で Claude が高く評価されており、和文中心のプロダクトに組み込みやすい API です。

## 料金（2026年4月時点）

| モデル | 入力 / 1M tokens | 出力 / 1M tokens |
|---|---|---|
| Claude Haiku 4.5 | $1 | $5 |
| Claude Sonnet 4.6 | $3 | $15 |
| Claude Opus 4.6 | $15 | $75 |

**トークン目安**: 日本語 1 文字 ≒ 1〜2 トークン、1000 字で約 1500 トークン。

費用感としては、月 1000 回程度の小規模利用なら Haiku で月 $5 前後、Sonnet でも月 $15 前後から回せます。最初は Haiku で試して、精度が足りなければ Sonnet に上げる運用がコスパ的に最適です。

## 30分で API を使い始める

### Step 1: API キー取得（5分）

1. https://console.anthropic.com にアクセス
2. Google アカウントでサインアップ
3. 左メニュー「API Keys」から新規キーを作成
4. `sk-ant-xxxxx` をコピー（**一度しか表示されない**ので注意）

### Step 2: 課金設定（2分）

無料枠 $5 で動作確認はできますが、本番運用には課金設定が必要です。Billing → Add payment method でクレカ登録 → 最初は $10 程度で十分です。

### Step 3: 実装（20分）

#### Python

```bash
pip install anthropic
```

```python
from anthropic import Anthropic

client = Anthropic(api_key="sk-ant-xxxxx")

message = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "日本語で、自己紹介をしてください。"}
    ],
)

print(message.content[0].text)
```

#### Node.js

```bash
npm install @anthropic-ai/sdk
```

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: "sk-ant-xxxxx" });

const message = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "日本語で、自己紹介をしてください。" },
  ],
});

console.log(message.content[0].text);
```

これで Claude API の最小構成は完成です。

:::message alert
API キーは絶対にクライアント側 (ブラウザ JS・モバイルアプリ) に直書きしないこと。必ず自分のサーバーから呼び出す構成にしてください。
:::

## 完全版はこちら

プロンプト設計テンプレート、ストリーミング実装、Tool Use、エラーハンドリング、運用コスト試算は [本家記事](https://ai-shigotojutsu.com/blog/claude-api-guide) にまとめています。
