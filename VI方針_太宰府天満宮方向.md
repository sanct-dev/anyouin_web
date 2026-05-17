# VI方針 ── 太宰府天満宮方向（デザイン依頼プロンプト）

> 安養院ウェブサイト 3方向案のうち「①太宰府天満宮（dazaifutenmangu.or.jp）参考」のVI定義。  
> 参考サイト：https://www.dazaifutenmangu.or.jp

---

## このデザインの核心

**「意味を伝えてから、方法を示す」構造。**  
神事・行事の背景や意味をテキストと写真で丁寧に語り、その流れの中で申込方法・時間・作法といった実用情報に自然につながっていく。説明と機能が分断されていない。

---

## カラーパレット

- **ベースカラー**：ほぼ純白（`#FFFFFF` / `#FAFAFA`）。テクスチャなし、フラットで清潔な白。
- **テキスト**：深みのある濃茶〜黒（`#1A1A1A` / `#333333`）。純黒ではなくわずかに茶みを帯びる。
- **補助テキスト**：ミディアムグレー（`#666666` / `#888888`）
- **アクセントカラー**：深みのある赤〜えんじ（`#8B0000` / `#A0222A` 推定）。ロゴ・強調・リンクに使用。点的に使い、面積は小さく。
- **ボーダー・区切り線**：淡いグレー（`#DDDDDD` / `#E8E8E8`）。主張しない細線。
- **カードや下層背景**：ごく薄いウォームグレー（`#F5F3F0` 推定）でコンテンツブロックを分ける。

全体に「色を使わない」設計。写真の色彩がページに色を与える。

---

## タイポグラフィ

- **基本フォント**：游明朝体（Yu Mincho）またはそれに近い日本語明朝系Webフォント。細いウェイト（Regular / Light）を基本とする。
- **英字・数字**：細めのセリフ体（Garamond系）またはゴシック系の細ウェイト。和文の繊細さに合わせる。
- **見出し（大）**：`28〜36px`、letter-spacing `0.2〜0.3em`、縦書きまたは横書き
- **見出し（中）**：`18〜22px`、letter-spacing `0.15em`
- **本文**：`15〜16px`、letter-spacing `0.1em`、line-height `2.0〜2.2`
- **キャプション・補足**：`13〜14px`、letter-spacing `0.05em`、color `#888888`

**原則：文字は少なく、間は広く。** テキスト量を絞り、1文で意味が完結するように書く。

---

## 余白・スペーシング

- セクション上下パディング：`80〜120px`
- コンテンツ幅（max-width）：`1000〜1100px`。これ以上は広げない。中央寄せ固定。
- 画像とテキスト間の余白：`40〜60px`
- 見出しと本文の間：`20〜30px`
- セクション内の要素間：`40〜60px`

**コンテンツ幅が常に固定されていることで、どのセクションでも「落ち着き」が保たれる。**

---

## レイアウトアーキテクチャ

- **基本構造**：1カラム縦積み。各セクションは全幅ブロック、コンテンツはmax-width内でセンタリング。
- **画像×テキスト**：左右2カラム（50:50 または 55:45）。画像とテキストが横に並ぶ。上下セクションで左右を交互に入れ替える（ジグザグ）。
- **カードグリッド**：3カラムまたは4カラムのフレキシブルグリッド。行数は内容に応じて変動。
- **ヒーロー画像**：フルブリードの高品質写真。テキストオーバーレイは最小限か使わない。
- **ナビゲーション**：上部固定ヘッダー。ロゴ左寄せ、メニュー右寄せまたは中央。階層は浅く（2層まで）。

厳格なグリッドに従い、要素が「浮く」「はみ出す」ようなレイアウトは使わない。

---

## 写真・ビジュアル要素の扱い

- **写真はそのまま、高品質で**。加工・脱色・オーバーレイなし。写真の美しさを最大限に活かす。
- クロップは**正方形・長方形のみ**。有機的なマスクは使わない。
- 写真はコンテンツの「説明」として機能する。テキストが言葉で伝えることを、写真が視覚で補完する。
- 画像のアスペクト比は統一する（カードグリッド内は同一比率で揃える）。
- **写真の選定基準**：光が入っている、人の気配がある、季節感がある、静けさの中に生気がある。

---

## コンテンツの流れ（最重要）

各セクションは必ず以下の順序で構成する：

```
① 意味・背景の説明（なぜこの行事・祈願があるのか）
② 体験・雰囲気の描写（どんな空気感か）
③ 具体的な方法・手順・申込（どうすればいいか）
```

「申込はこちら」だけのページを作らない。  
「なぜお参りするのか」から始まり、「どうすればいいか」で終わる。  
情報と意味が一体になっている設計。

---

## 装飾・グラフィック要素

- 装飾は**極めて少なく**。使うとすれば細い罫線（`1px solid #DDDDDD`）のみ。
- セクション区切りは余白のみ。ウェーブラインや図形は使わない。
- イラストは使わない。写真だけで世界観を作る。
- アイコンは必要な箇所のみ。細いラインアイコン（SVG）を使い、塗りつぶしアイコンは使わない。
- 矢印（→ / ›）をリンクやCTAに使う。シンプルな誘導サイン。

---

## 見出しデザイン

- 見出しの背後にシェイプや色はつけない。テキストのみで成立させる。
- 英語のサブタイトルを見出しの上または下に小さく添える（例：「お参り / Worship」）。
- 縦書きを使う場合は、セクションの左端または右端に縦長で配置。横書きの本文との余白を十分にとる。
- 見出しの前後に余白を多くとり、「間」で重みを作る。

---

## ボタン・CTA

- 形状：角丸が控えめな長方形（`border-radius: 2〜4px`）または完全な直線。ピル型は使わない。
- スタイル：アウトライン（枠線のみ）が基本。背景色なし。ホバーで背景が入る。
- テキスト：「ご祈願の申込はこちら」「詳しく見る」など、具体的な動詞で。
- 右端に細い矢印（›）を添える。
- 色：ボーダーはえんじ（`#A0222A`）または濃グレー。テキストも同色。

---

## ナビゲーション

- 固定ヘッダー。背景は白（スクロールで薄い影が出てもよい）。
- ロゴ（寺紋＋寺名）は左上に配置。
- グローバルナビは横並びのテキストリンク。文字サイズ小さめ（`13〜14px`）。
- スマホではハンバーガーメニュー。
- SNSリンクはヘッダー右端またはフッターに小さく配置。

---

## フッター

- 背景：白または非常に薄いグレー。
- コンテンツ：ナビリンク・住所・電話番号・SNSリンク・コピーライト。
- 装飾なし。情報整理だけで成立させる。

---

## 全体のトーン・世界観

「格式があるのに、敷居は低い」。

- 権威的にならない。しかし軽くもしない。
- 余白と写真の質で「品」を作る。言葉や装飾で作らない。
- 初めてお寺を訪れる人が「ここに行ってみたい」と思える、清潔で温度のあるサイト。
- **「情報サイト」ではなく「体験への入口」として設計する。**

---

## 他の2方向との比較

| 項目 | 太宰府天満宮（本方向） | 善称寺 | 安養寺 |
|---|---|---|---|
| 背景色 | 純白（`#FFFFFF`） | グレージュ（`#EEEBE7`） | ピーチ（`#FFF5EC`） |
| アクセントカラー | えんじ・深赤（点的に使用） | サーモンオレンジ＋スチールブルー | ビビッドオレンジ＋グリーン |
| フォント | 游明朝体（細め） | Hannari＋游明朝体 | Noto Serif JP |
| 写真処理 | 高品質そのまま、加工なし | 脱色・ぼかし・オーバーレイ | 鮮やかそのまま＋SVGブロブマスク |
| 画像クロップ | 正方形・長方形のみ | 有機的な不整形マスク | 有機的な不整形マスク |
| 装飾 | 極めて少ない（罫線のみ） | 手描き線画イラスト | オレンジのアウトライン線画 |
| コンテンツ幅 | 固定（1000〜1100px） | 700〜800px（やや狭め） | 1000〜1100px |
| コンテンツ構造 | 意味→方法の順序が明確 | 余白と空気感で世界観を作る | キーワードバッジで視覚的に整理 |
| 雰囲気 | 清潔・格式・体験への入口 | 静寂・余白・わびさび | 活気・親しみ・明るさ |

---

## English Version

**Please design according to the following visual identity guidelines.**

**Color Palette:** Near-pure white (`#FFFFFF` / `#FAFAFA`) as the base — clean, flat, no texture. Text in deep warm-black (`#1A1A1A` / `#333333`). Accent color is deep crimson/vermillion (`#A0222A`) used only as a point accent — logo, emphasized links, small UI markers. Border lines in light gray (`#DDDDDD`). The design uses almost no color; photography provides all chromatic richness.

**Typography:** Yu Mincho (游明朝体) or equivalent Japanese Mincho web font, in thin/regular weight. Large headings: `28–36px`, letter-spacing `0.2–0.3em`. Body: `15–16px`, letter-spacing `0.1em`, line-height `2.0–2.2`. Captions: `13–14px`, color `#888888`. **Principle: fewer words, more space.** Each sentence should be self-contained and complete.

**Spacing:** Section padding `80–120px`. Content max-width `1000–1100px`, always centered, never wider. Inter-element spacing `40–60px`. The fixed content width creates consistent calm across all sections.

**Layout:** Single-column vertical stacking. Full-width sections with centered content. Photo+text pairs in 50:50 or 55:45 left-right columns, alternating sides per section. Card grids in 3 or 4 columns. No floating, overlapping, or organic positioning.

**Photography:** Full quality, no filters, no overlays, no desaturation. Rectangular crops only — never organic blob shapes. Photos serve as visual complements to text explanation. Selection criteria: natural light, human presence, seasonal atmosphere, quiet vitality.

**Content Flow (most important):** Every section follows this sequence: ① meaning/background (why this ritual or service exists) → ② atmosphere/experience description → ③ practical method/application. Never lead with a form or "apply here" button. Start with meaning, end with method.

**Decoration:** Minimal. Only thin rule lines (`1px solid #DDDDDD`). No wave separators, no illustrations, no background shapes. Icons in thin SVG line style only. Arrows (› / →) for CTAs.

**Section Titles:** Plain Mincho text only — no background shapes or blobs. Small English subtitle above or below. Vertical writing used sparingly, only at section edges with generous margin from body text.

**Buttons:** Low-radius rectangle or sharp rectangle. Outline style (border only, no fill), fill appears on hover. Crimson or dark gray border. Specific action text ("Apply for prayer", "Learn more") with › arrow.

**Navigation:** Fixed white header. Logo (crest + name) top-left. Horizontal text nav links, small font (`13–14px`). Hamburger on mobile.

**Footer:** White or very light gray background. Address, phone, nav links, SNS, copyright. No decoration — information only.

**Overall Tone:** "Dignity without intimidation." Quality comes from whitespace and photography — not from decoration or color. A first-time visitor should feel "I want to go there" — welcoming, clean, grounded. Designed as an entrance to an experience, not an information catalog.
