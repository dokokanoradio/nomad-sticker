# ノマドステッカーばくりっこ！

## これはなに？
ノマドステッカーをばくりっこするための文章を作るWebアプリだよ！
Xに簡単にポスト出来るよ！
スマホのホーム画面にインストールできるよ！
※個人作の非公式ツールです。

ここからアクセスできるよ！
https://nomad-sticker.pages.dev

## コンセプト
ノマドっぽさを意識しました。
* 古き良きWebサイトっぽさ
  * シンプルな画面デザイン(レトロっぽい楽しさ)
* 新しさ
  * Astro等の現代のWeb技術による構成
    * キレイさ、速さなど。
* 楽しさ・便利さ
  * PWA対応(スマホのホーム画面にインストールできる)
  * Xのアプリ連携不要(Webインテント)

## 細かい技術的な話
* Astro製(HTML / TypeScript)
  * 古典的なDOM操作
* CSSはdaisyUI(+Tailwind CSS)
* PWA対応はnode用ライブラリで実現
  * astro-webmanifest
  * astrojs-service-worker

## 更新履歴
https://github.com/dokokanoradio/nomad-sticker/releases 参照。
