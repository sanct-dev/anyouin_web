# VI方針 ── 安養寺方向（デザイン依頼プロンプト）

> 安養院ウェブサイト 3方向案のうち「③安養寺（anyoji.info）参考」のVI定義。  
> FigmaやAdobe XDの依頼書への添付、AIデザインツールへの指示として使用可。

---

## カラーパレット

- **ベースカラー**：温かみのある淡いピーチ（`#FFF5EC`）を全面の背景に使用。善称寺のグレージュよりも明確にオレンジ寄りのクリーム色。
- **メインアクセント**：ビビッドなオレンジ（`#FF9D45`）
- **サブアクセント**：自然系の明るいグリーン（`#74BE5A`）
- **テキスト**：ミディアムダーク（`#333333`）。純黒は使わない。
- **コンテンツブロック背景**：純白（`#FFFFFF`）でセクション間の白抜きエリアに軽さをもたせる。

---

## タイポグラフィ

- **基本フォント**：Noto Serif JP（Webフォント）で統一。明朝系でありながらスクリーン可読性が高く、伝統と現代の中間に位置する。
- **大見出し（セクションタイトル）**：`34px`、letter-spacing `0.175em`（約5.95px）
- **本文**：`16px`、letter-spacing `0.1em`（1.6px）、line-height `1.8〜2.0`
- **縦書き段落テキスト**：`26px`、letter-spacing `3.25px`、line-height `39px`
- **英数字**：ArialまたはシステムフォントLを使用。和文との混在は最小限に。
- ゴシック体・サンセリフ体は使用しない。

---

## 縦書きタイポグラフィ

サイトの重要な特徴として、セクション見出しとナビゲーションラベルに縦書き（`writing-mode: vertical-rl`）を積極的に採用する。

- 縦書き部分は大きなフォントサイズ（`34px`以上）でページ右端または左端に縦長に配置し、横書きコンテンツとの対比を作る。
- 補助ラベル（「〔墓地・供養〕」「私たちの想い」「お寺の活動」など）も小さめの縦書きで添える。

---

## 余白・スペーシング

- セクション上下パディング：`120〜144px`
- コンテンツ幅：`1000〜1100px`
- セクション内要素間：`40〜80px`
- 写真とテキストは画面を左右に大きく二分割（おおよそ55:45の比率）

---

## 写真・ビジュアル要素の扱い

- クロッピングはすべてSVGの `clip-path` を使った有機的な不整形マスク（縦長の丸みを帯びた長方形、またはアメーバ状のブロブ形）で処理。
- **写真は彩度を落とさずそのままの色で使用**（善称寺と異なる点）。鮮やかな現実感のある写真をビジュアルの主役に置く。
- 写真エリアとコンテンツエリアは互いに重なり合う配置にし、クリッピングマスクが背景の上に浮かんでいるように見えるよう設計する。

---

## 装飾イラスト・グラフィック要素

- 手書き風の線画イラスト（お墓・灯篭・合掌する人物・蓮の花などの仏教モチーフ）をオレンジ色のアウトラインのみ（塗りつぶしなし）で各セクションに添える。
- オレンジ色の細い点線（`・・・・・・`形式）を縦方向の装飾ラインとして使用。セクションの始まりを示す丸いドット（`●`）と組み合わせる。

---

## 見出しデザイン（セクションタイトル）

- 縦書きの大文字テキスト＋小さな補足ラベルの組み合わせで構成。
- 装飾要素は手書き風のオレンジ色の幾何学図形（同心円状の四角形 / ロゴマーク的な枠線）。善称寺のような「背後に色のあるblob」ではなく**アウトライン（枠線のみ）の装飾図形**を使う。
- セクションナンバリングは使わない。

---

## キーワードバッジ（カテゴリタグ）

- サービスカテゴリ（「墓地」「合同墓」「納骨」「永代供養」など）をオレンジ色（`#FF9D45`）の塗りつぶし丸型バッジ（`border-radius: 50%`）＋白テキストで表示。
- 複数個をランダムな位置に散りばめて「クラスター」のように配置。
- バッジはコンテンツの説明ではなく「キーワードの視覚的な集合体」として機能させる。

---

## ボタンデザイン

- 形状：完全な角丸（`border-radius: 999px`）のピル型
- **メインボタン**：グリーン（`#74BE5A`）塗りつぶし＋白テキスト
- **サブボタン**：白塗りつぶし＋オレンジテキスト
- ボタンの右端に白い円形の「>」アイコンを組み込む（「見る」系のボタン）
- フォント：Noto Serif JP `18px`、padding `18px 27px`

---

## ナビゲーション

- ハンバーガーメニュー型のフルスクリーンオーバーレイナビゲーション
- トグルボタン（MENU）：グリーン（`#74BE5A`）の正方形ボタン、右上に固定配置
- ページ上部にYouTube・Facebook・LINEのSNSボタンを横一列で配置。各SNSのブランドカラーをそのまま使用。

---

## セクション区切り

- 波形のSVGセパレーターを使用。善称寺より「広がりのある緩やかな波」を使う。
- 背景のピーチ色と写真の間に波形を重ね、セクション間がシームレスにつながる「流れるような」視覚効果を作る。

---

## フッター

- 背景色：グリーン（`#74BE5A`）で全面を塗りつぶし
- テキスト・ボタン：白で統一
- ピーチ×オレンジ×グリーンの3色が収束するエリアとして機能させる。

---

## 全体のトーン・世界観

「明るく、開かれた、街のお寺」という世界観。

- 重厚さや格式よりも**可愛らしさ・親近感・ポップな和風**を前面に出す。
- オレンジ×グリーンの組み合わせで「温かさ」と「いのち」を表現。
- 縦書きを効果的に使うことで「和」の文脈を残しつつ、デジタルメディアとして読みやすい構成にする。
- 善称寺の「静寂と余白の美学」とは対照的な、**活気ある地域密着型のお寺サイト**のデザイン。

---

## English Version

**Please design according to the following visual identity guidelines.**

**Color Palette:** Warm peach (`#FFF5EC`) as the global background — notably warmer and more saturated than typical off-white. Primary accent is a vivid orange (`#FF9D45`) and secondary accent is a natural, bright green (`#74BE5A`). Text color is medium-dark charcoal (`#333333`), not pure black. Clean white (`#FFFFFF`) is used for content card backgrounds to create visual contrast against the peach base.

**Typography:** Use "Noto Serif JP" (Web font) throughout. A Japanese serif font that bridges traditional and modern. Large section titles at `34px` with `0.175em` letter-spacing. Body text at `16px` with `0.1em` letter-spacing and `1.8–2.0` line-height. Larger typographic elements may use `26px` with `3.25px` letter-spacing in vertical writing contexts. No western-style sans-serif.

**Vertical Typography:** Vertical writing mode (`writing-mode: vertical-rl`) is a key design feature. Section headings, navigation labels, and category sub-labels are set vertically at large sizes (34px+), positioned at page edges to create dynamic tension with horizontally-flowing content.

**Spacing:** Section padding: `120–144px` top and bottom. Content width: approximately `1000–1100px`. Generous internal spacing between elements (`40–80px`). Left-right two-column splits at approximately 55:45 ratio for photo+text pairs.

**Photography:** Crop all photos using SVG `clip-path` with organic blob shapes (irregular rounded rectangles, amoeba forms). Photos retain full saturation — they serve as vivid visual anchors, not atmospheric overlays. Photo shapes overlap their surrounding background to create a floating, layered effect.

**Decorative Illustrations:** Hand-drawn line illustrations of Buddhist motifs (gravestones, stone lanterns, praying figures, lotus flowers) in orange outline-only style. Orange dotted vertical lines with circular dot accents serve as section dividers and positional markers.

**Section Titles:** Vertical Japanese text in large Noto Serif JP, paired with small supplementary labels. Decorative element is a hand-drawn concentric rectangle/square outline in orange — NOT a filled blob. No numbering system.

**Keyword Badges:** Service categories displayed as filled orange (`#FF9D45`) circular badges (`border-radius: 50%`) with white text. Multiple badges scattered in a clustered arrangement — they function as a visual word cloud, not an ordered list.

**Buttons:** Fully pill-shaped (`border-radius: 999px`). Two variants: green-fill + white text (primary), white-fill + orange text (secondary). Right-side circular ">" arrow icon integrated into button. `18px` Noto Serif JP, `18px 27px` padding.

**Navigation:** Fullscreen overlay hamburger menu. Toggle button is a green square (`#74BE5A`) fixed at top-right. SNS buttons (YouTube/Facebook/LINE) in brand colors displayed as a horizontal row at top of page.

**Section Separators:** Gently undulating SVG wave dividers between sections, creating seamless flow between the peach background and photo areas.

**Footer:** Solid green (`#74BE5A`) background with white text and white buttons — the color story resolves here.

**Overall Tone:** "A bright, welcoming neighborhood temple." Warm, approachable, and gently pop-cute in character. Contrasts with the quiet minimalism of traditional Japanese web design — this is lively, community-centered, and visually energetic while remaining rooted in Japanese typographic tradition through vertical text and serif fonts.

---

## 善称寺との比較

| 項目 | 善称寺（zensho-ji.com） | 安養寺（anyoji.info） |
|---|---|---|
| 背景色 | グレージュ（`#EEEBE7`） | ピーチ（`#FFF5EC`） |
| アクセントカラー | サーモンオレンジ＋スチールブルー | ビビッドオレンジ＋グリーン |
| フォント | Hannari＋游明朝体 | Noto Serif JP統一 |
| 写真処理 | 脱色・ぼかし・オーバーレイ | 鮮やかそのまま＋SVGブロブマスク |
| イラスト | 白・薄グレーの手描き線画 | オレンジのアウトライン線画 |
| タイポ方向 | 主に横書き（一部縦書き） | 縦書きを積極的に多用 |
| 雰囲気 | 静寂・余白・わびさび | 活気・親しみ・明るさ |
| ボタン形状 | 角丸長方形（大きめradius） | 完全ピル型（999px） |
