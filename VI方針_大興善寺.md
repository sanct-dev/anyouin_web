# VI方針 ── 大興善寺方向（デザイン依頼プロンプト）

> 安養院ウェブサイト 4方向案のうち「④大興善寺参考」のVI定義。  
> 観光寺院としての個性が強く出ており、前3サイトとは全く異なるアプローチ。

---

## デザイン依頼プロンプト（日本語版）

---

**以下のVI方針に基づいてデザインを制作してください。**

### カラーパレット

ベースは白（`#FFFFFF`）と淡いグレー（`#F4F4F4`）の組み合わせで、コンテンツエリアに清潔感を持たせます。ページ全体に「和紙のようなクリーム色」（`#F5F1E1`）をセクション背景として使い、白との対比でリズムを作ります。アクセントカラーは鮮やかな紫・マゼンタ系（`#AA4C8F` / `rgb(170, 76, 143)`）を主役に据えます。これはつつじの花の色を直接参照した、このサイト固有のブランドカラーです。テキストカラーは暗いチャコール（`#444444`）を使い、純黒は避けます。セクション区切りにはゴールドの横線（`footer_bg.jpg`に見られる金色のライン）を使います。紫のナビゲーションドット（`●`）が各メニュー項目の間に挿入され、リズムを作ります。

### タイポグラフィ

**最大の特徴：3種類のフォントを目的別に使い分ける設計です。**

本文・ナビゲーション・一般テキストには「Meiryo」（メイリオ）を使います。ゴシック体で可読性重視、`14〜15px`、letter-spacing はノーマル（詰め）です。大見出し・セクションタイトル・コピーには「MaruminOld StdN R」（まるみん老人体 / 丸みのある明朝系）を使います。`15〜16px` ですが line-height を `50px` と極端に広くとり、「ゆったりした縦の空気感」を演出します。ロゴ・装飾的な見出しには「TsukuARdGothicStd」（筑紫Aアンティーク丸ゴシック）を使い、格調ある和風タイポグラフィを表現します。英字の補助ラベル（"Places to Visit"、"About Daikozenji"）にはセリフ系の欧文フォントを細めのウェイトで使い、日本語との対比を作ります。letter-spacing は全体的に「normal」（詰め）で、3サイトの中で最も引き締まった印象のタイポグラフィです。

### 縦書きタイポグラフィ

セクション見出しを縦書き（`writing-mode: vertical-rl`）で配置します。「お知らせ」「大興善寺について」などのセクションラベルを縦書きにし、ページ左端に大きなサイズで配置します。テキストは紫色（`#AA4C8F`）の先頭一文字（「見」「お」「大」）だけ色を変え、残りを通常色にする「一文字アクセント」技法を使います。横に細い英字 "Places to Visit" などの副題を並列させます。

### 余白・スペーシング

余白は中程度で、前2サイトほど大きくとりません。セクション間のパディングは `60〜100px` 程度を基準にし、コンテンツを詰め込みすぎない程度に抑えます。コンテンツ幅は `870〜900px`（センタリング）で、画面幅が広くてもコンテンツが中央に集まるように設計します。写真カードは2カラムグリッドで均等に並べます。セクション間の区切りには「和紙テクスチャ背景」への切り替えを使い、余白の代わりに色の変化でリズムを作ります。

### 写真・ビジュアル要素の扱い

写真はマスクやクリッピングを一切せず、正方形に近いシンプルな長方形でそのまま使います。鮮やかなつつじの花の写真（マゼンタ・ピンク・白・紫の色調）が主役で、写真自体のインパクトに依存するデザインです。ヒーローエリアはフルスクリーン幅の写真スライダーで構成し、複数の季節写真（つつじ・新緑・紅葉）を自動再生します。ヒーロー写真の右端に「縦書きの紫テキストパネル」（`観音ご開帳` 等）を大きく重ねて配置します。背景には白い花（つつじ）のシルエットグラフィックをゴーストイメージ（透明度を落とした白）として全面に敷き、ページに奥行きと和風の雰囲気を添えます。

### 装飾・パターン要素

大輪のつつじの花をモチーフにした半透明の白いシルエット（`bg.png`）を、各セクションの背景全体に大きく敷き詰めます。これはロゴとも呼応する形で、サイト全体の統一モチーフです。ロゴの菊花紋様と呼応する「放射状のつつじ花型」シルエットを左右に配置し、コンテンツを挟み込む構図を作ります。セクション区切りには `hmp_m_sep.png` のような横線パターン（金色の細い装飾ライン）を使います。

### ナビゲーション

ヘッダーはロゴ中央配置のフラットナビです。ロゴを中央に大きく置き、その左右上下に住所・電話番号を配置します（センタリング型ヘッダー）。ナビゲーションリンクは横1列に並べ、各リンクの間に紫の丸ドット（`●`）を挿入します。ヘッダー右端には紫背景のメールフォームボタンを固定配置します。スクロール追従型の固定ヘッダーを採用し、常時表示します。

### ボタンデザイン

「詳しく見る」ボタンは角丸なしの四角形枠線ボタン（`border` のみ、塗りなし）を使います。シンプルな四角の枠だけで存在感を作るミニマルなボタンデザインです。色は枠線・テキストともにチャコール（`#444444`）で統一し、ホバー時に紫（`#AA4C8F`）に変化させます。ボタンは右向き矢印（`›`）を前置して「詳しく見る」と表示します。

### 観光コンテンツのカード設計

見どころページは2カラムの「写真＋タイトル＋説明文＋ボタン」カードを繰り返します。写真は固定アスペクト比（横長）で表示し、下にタイトルと説明を中央揃えで配置します。カード間の区切りはなく、写真を上下左右に余白なく配置します（ギャラリー的な密度）。

### フッター

フッター背景は暖かいクリーム色（`#F5F1E1`）に金の横線装飾を入れます。ロゴ・住所・著作権表記をシンプルに並べ、フッターナビゲーションを複数列で配置します。フッターの上にInstagram・Facebookのアイコンをブランドカラーで表示します。

### 全体のトーン・世界観

「観光名所としての花のお寺」です。お葬式・お墓の相談よりも、**四季の自然を楽しむ観光体験**を前面に出したデザインです。紫（つつじ）・クリーム（和紙）・白という3色の組み合わせは、日本の伝統的な雅（みやび）の世界観を体現します。重厚さよりも「美しさと清らかさ」を優先し、写真の鮮やかさをそのまま活かした「写真主役型」のデザインです。前2サイトと比べると最もシンプル・クラシカルで、デジタルよりも「印刷物的な整然とした構成」に近い印象です。

---

## Design Brief Prompt（English version）

---

**Please design according to the following visual identity guidelines.**

**Color Palette:** White (`#FFFFFF`) and light gray (`#F4F4F4`) as base, with warm cream (`#F5F1E1`) for section backgrounds. Primary accent is a vivid purple-magenta (`#AA4C8F`) — directly referencing the color of azalea flowers, the temple's signature. Body text in dark charcoal (`#444444`). Gold horizontal lines separate major sections. Purple bullet dots (`●`) inserted between navigation items.

**Typography:** Three-font system: "Meiryo" (sans-serif, Gothic) for body text, navigation, and UI at `14–15px` with normal letter-spacing; "MaruminOld StdN R" (soft, rounded Mincho) for section titles with extremely generous line-height (`50px`); "TsukuARdGothicStd" (Tsukushi Antique Gothic) for the logo and decorative headings. A fine Western serif is used for English sub-labels in light weight. No letter-spacing adjustment — text is set tightly throughout.

**Vertical Typography:** Section labels set in `writing-mode: vertical-rl`, aligned to the left edge of content areas. Use "one-character accent" technique: the first character of a heading (e.g., 「見」) is colored purple, with the remaining characters in standard charcoal. English subtitles ("Places to Visit") run alongside in fine horizontal type.

**Spacing:** Moderate — section padding `60–100px`. Content width constrained to `870–900px`, centered. 2-column photo grid for attraction cards. Rhythm created by alternating white and cream section backgrounds, rather than large white space.

**Photography:** No masking or clipping — standard rectangular crops. The vivid azalea photos (magentas, pinks, whites, purples) are the visual heroes. Full-width hero slider with multiple seasonal shots. Large vertical purple text panel overlaid on the right side of the hero image. Ghost-white azalea silhouettes tiled across section backgrounds at low opacity.

**Decorative Elements:** Full-page azalea flower silhouettes (`bg.png`) in translucent white beneath content, creating depth. Radiating flower-petal forms flanking content areas mirror the logo's chrysanthemum crest. Gold thin-line decorative horizontal separators between sections.

**Navigation:** Center-logo flat header with address and phone number flanking the logo. Horizontal nav links with purple dots (`●`) as separators. Fixed purple "mail form" button at header right. Sticky scroll-following header.

**Buttons:** Minimal outlined square buttons (border only, no fill) in charcoal. On hover, border and text turn purple. Prefix with `›` arrow.

**Overall Tone:** "A scenic flower temple." The dominant message is seasonal natural beauty and tourism — not funeral services or memorial arrangements. Purple × cream × white evokes Japanese classical elegance (雅/miyabi). Simpler and more traditionally structured than the other two sites — feels closer to a print brochure: photo-first, grid-orderly, unhurried.

---

## 4サイト比較表

| 項目 | 太宰府天満宮 | 善称寺 | 安養寺 | 大興善寺 |
|---|---|---|---|---|
| **背景色** | 純白（#FFFFFF） | グレージュ（#EEEBE7） | ピーチ（#FFF5EC） | 白＋クリーム（#F5F1E1） |
| **アクセントカラー** | えんじ（#A0222A）・点的 | サーモンオレンジ＋スチールブルー | ビビッドオレンジ＋グリーン | つつじ紫（#AA4C8F）＋ゴールド |
| **メインフォント** | 游明朝体（細め） | Hannari＋游明朝体 | Noto Serif JP | MaruminOld＋Meiryo＋筑紫 |
| **letter-spacing** | 広め（0.2〜0.3em） | 広め（0.2〜0.5em） | 広め（0.1〜0.175em） | 標準（normal） |
| **写真処理** | 高品質そのまま・矩形 | 脱色・オーバーレイ | SVGブロブマスク・鮮やか | 長方形そのまま・鮮やか |
| **装飾要素** | ほぼなし（細い罫線のみ） | 白い手描き線画 | オレンジのアウトラインイラスト | 白い花シルエット |
| **縦書き** | 一部のみ | 一部のみ | 積極的多用 | セクションラベルで使用 |
| **ボタン** | 四角枠線・低radius | 大きな角丸 | 完全ピル型（999px） | 四角枠線のみ（ミニマル） |
| **コンテンツ幅** | 1000〜1100px・固定 | 700〜800px | 1000〜1100px | 870〜900px |
| **情報アクセス** | ◎ 意味→方法の流れが明確 | △ 雰囲気優先 | ○ 構造は明快 | ◎ 印刷物的な整然さ |
| **親しみやすさ** | ○ 品格の中に温度 | ◎ 寄りすぎ感も | ◎ ポップ | ◎ フォントで実現 |
| **ターゲット感** | 参拝・祈願・文化体験 | 納骨・永代供養の相談 | 地域密着・街のお寺 | 観光・四季の自然体験 |
| **デザイン印象** | 清潔・格式・体験への入口 | 静寂・余白・わびさび | 活気・親しみ・ポップ | 雅・格調・印刷物的 |