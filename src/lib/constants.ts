import pkg from "../../package.json"; // package.json

// 公開型定義
// ステッカー配列(対象の数も決まる:8種類)
export type StickerArray = [string, string, string, string, string, string, string, string];


// 公開定数定義
// バージョン情報
export const APP_VERSION: string = pkg.version; // package.jsonの内容を参照

// ステッカーの文字と対象
export const STICKERS = ["◖", "ラ", "ジ", "オ", "ノ", "マ", "ド", "🪟"] as const satisfies StickerArray;

// ステッカーの種類
export const TYPES_OF_STICKERS = STICKERS.length;