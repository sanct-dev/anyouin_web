# VI方針 ── 善称寺方向（デザイン依頼プロンプト）

> 安養院ウェブサイト 3方向案のうち「②善称寺参考」のVI定義。  
> FigmaやAdobe XDの依頼書への添付、AIデザインツールへの指示として使用可。

---

## カラーパレット

- **ベースカラー**：ウォームグレージュ（`#EEEBE7` / `#FAF9F5`）。ほぼ白に近い温かみのあるオフホワイト。背景に微粒子ノイズ（ペーパーテクスチャ）を重ねる。
- **メインアクセント**：くすんだコーラルオレンジ（`#FFA353` / サーモンオレンジ）
- **サブアクセント**：ミストグレーブルー（`#7DBDCB`）
- **テキスト**：ほぼ純黒（`#1F1E1D`）
- **補助テキスト**：チャコールグレー（`#707070`）
- **セクション区切り**：半透明ウォームベージュ（`rgba(234,230,225,0.5)`）

---

## タイポグラフィ

- **本文・UI**：Hannari（はんなり明朝）
- **見出し・固有名詞**：游明朝体
- **英字混在時**：明朝系ウェイトに合わせた細めのセリフフォント。ゴシック体・サンセリフ体は原則使用しない。
- **字間（letter-spacing）**：本文 `0.2em`、見出し `0.3〜0.5em`
- **行間（line-height）**：本文 `2.1em`（ゆっくり読ませる空気感）
- **文字サイズ目安**：本文 `14px`、h2 `28〜30px`、h3 `15〜18px`
- **縦書き**：状況に応じて `writing-mode: vertical-rl` を使用

---

## 余白・スペーシング

- セクション上下パディング：最低 `100px〜150px`
- メインコンテンツ幅：`700〜800px`（左右に大きな余白）
- 要素間に意図的な「間」を設ける。詰め込まない設計を徹底。
- コンテンツが「呼吸している」状態を目指す。

---

## 写真・ビジュアル要素の扱い

- 写真はそのまま使わない。ホワイトまたはウォームベージュのオーバーレイを重ねて彩度・明度を大幅に落とし、淡くフェードさせる（opacity `0.5〜0.7`）。
- クロップ形状は正方形・長方形ではなく、有機的な不整形（アメーバ型・しずく型・ゆるい楕円）のクリッピングマスクを使用。
- 写真は「情報」ではなく「空気感・質感の補足素材」として扱う。

---

## イラスト・装飾要素

- 手描き風の細い線画イラスト（人物・鳥・植物・点線の軌跡など）をページ随所に配置。
- 白または薄いグレー単色で、写真やテキストに重ねて使用。
- イラストは「情報伝達」ではなく、余白に温かみと物語感を添える装飾として機能させる。
- セクション区切りは波形SVGセパレーター（ゆるいウェーブライン）を使用。硬い直線区切りは使わない。

---

## 見出しデザイン（セクションタイトル）

- 見出しテキストの背後に、淡いピーチ色の有機的な円形・楕円形ぼかしシェイプを配置（`background: rgba(255,163,83,0.25)` 程度）。
- シェイプは完全な円ではなく、わずかに歪んだ手描き感のある形にする。
- 見出し文字自体への装飾は加えない。シンプルな明朝体のみで成立させる。

---

## レイアウトアーキテクチャ

- 基本レイアウト：**1カラム縦積み**
- 各セクションは画面幅いっぱい使用。コンテンツはセンタリングまたは左右どちらかに寄せた非対称構成。
- 写真とテキストの組み合わせは左右交互（ジグザグ）レイアウト。
- 写真エリアとテキストエリアはほぼ同比率（50:50）。ただしテキスト側の周囲余白を多めにとる。
- 厳格なカラムグリッドは使わず、自由なポジショニングで有機的に配置。

---

## 全体のトーン・世界観

「和の静寂」と「現代的な親しみやすさ」の両立。

- 伝統的な日本の美意識（間・余白・わびさびの感覚）を持ちながら、威圧感・重厚感は出さない。
- 線は細く、色は淡く、余白は広く。
- デジタルでありながら「紙に印刷された品の良いパンフレット」のような質感を目指す。
- 高齢者からはじめてお寺を訪れる若い世代まで、誰にとっても「怖くない、入りやすい」印象。

---

## English Version

**Please design according to the following visual identity guidelines.**

**Color Palette:** Warm greige base (`#EEEBE7` / `#FAF9F5`) — an almost-white off-white with subtle warmth. Apply a fine-grain paper texture over the background. Two accent colors: a muted coral orange (`#FFA353`) as the primary accent and a misty gray-blue (`#7DBDCB`) as the secondary. Text is near-black (`#1F1E1D`); supporting text uses charcoal gray (`#707070`). Section dividers use a semi-transparent warm beige overlay.

**Typography:** Use "Hannari" (a Japanese Mincho / serif typeface) for body and UI text, paired with "Yu Mincho" for headings. Apply generous letter-spacing throughout — `0.2em` for body, `0.3–0.5em` for headings. Line-height for body text should be approximately `2.1em` to create a slow, breath-like reading rhythm. Font size: body `14px`, h2 `28–30px`, h3 `15–18px`. No sans-serif or gothic fonts. Vertical writing mode (`writing-mode: vertical-rl`) may be used for certain headlines.

**Spacing:** Extremely generous. Section padding minimum `100–150px` top and bottom. Main content width constrained to `700–800px` with wide margins. Intentional "breathing room" between all elements — never cramped.

**Photography:** Always apply a warm-white overlay to reduce saturation and brightness (`opacity 0.5–0.7`). Crop photos using organic, irregular shapes (amorphous blob masks, soft ellipses) — never hard rectangles. Photos function as atmospheric texture, not primary information.

**Illustration:** Thin, hand-drawn line illustrations (people, birds, plants, dotted path lines) placed throughout as decorative elements in white or very light gray. These overlay photos and text areas to add warmth. Use SVG wave separators between sections — no hard line dividers.

**Section Titles:** Place a soft, slightly irregular peach-colored blob shape behind heading text (`rgba(255,163,83,0.25)`). The shape should feel hand-drawn, not geometric. The heading text itself remains plain Mincho — no other decoration.

**Layout Architecture:** Single-column, vertically-stacked sections. Full-width sections with centered or asymmetrically-offset content blocks. Photo + text pairs alternate left-right (zigzag layout) at roughly 50:50 ratio, with more whitespace on the text side. No strict grid columns — organic, free-positioned layout.

**Overall Tone:** The harmony of "Japanese stillness" and "modern approachability." Think: a beautifully printed, high-quality brochure that feels neither old-fashioned nor intimidating — welcoming to elderly visitors and first-time temple visitors alike. Thin lines, pale colors, wide margins, warmth without formality.
