import { Character } from '../../types';

export const aki: Character = {
  id: 'aki',
  name: 'A.K.I.',
  englishName: 'A.K.I.',
  epithet: '毒手の狂信者',
  archetype: '設置・トリッキー',
  difficulty: '★★★★☆',
  themeColor: 'from-purple-950 via-teal-900 to-slate-900',
  accentColor: '#14b8a6',
  avatarIcon: 'AKI',
  stats: {
    power: 4,
    range: 4,
    mobility: 4,
    defense: 2,
    antiAir: 4,
    easeOfUse: 2,
  },
  summary: '蛇のように地を這い、相手を「毒状態」に陥れる暗殺者。毒状態の相手に攻撃を当てると「毒破裂（ポイズンバースト）」が発生し、大ダメージと追撃が可能になる。',
  strengths: [
    '「毒状態」付与時のコンボ火力と追撃性能が凄まじい',
    '「悪鬼蛇行（スライディング潜り）」による弾抜けと下段急襲',
    '設置技「紫煙砲」を盾にした起き攻めと固め',
  ],
  weaknesses: ['無敵対空技を持たず、切り返しはSAに依存する', '毒が付与されていない時の基本火力が控えめ'],
  modernEvaluation: {
    rating: 'B',
    comment: '毒付与と毒破裂のコンボレシピが非常に繊細で、通常技の使い分けが多いためクラシック推奨。ただしワンボタンSAは切り返しとして頼りになる。',
    pros: ['ワンボタンSA3による切り返し'],
    cons: ['悪鬼蛇行からの派生技や毒破裂ルートで手動入力が必須'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ強P（アシスト併用）'],
  },
  keyMoves: [
    {
      name: '紫煙砲（毒弾）',
      commandC: '236 + P',
      commandM: 'SP または 236+P',
      usage: '弾速の遅い毒泡を放つ。触れた相手を毒状態にする。',
      frame: { startup: '18F〜', onBlock: '-2F〜+2F', onHit: '毒付与' },
    },
    {
      name: '悪鬼蛇行（潜り）',
      commandC: '214 + P',
      commandM: '4 + SP',
      usage: '地面を這うように前進。弾を潜り抜け、猛毒牙（打撃）や蛇頭鉤（中段）へ派生。',
      frame: { startup: '潜り動作', onBlock: '派生依存', onHit: '追撃可能' },
    },
  ],
  gameplan: {
    farRange: '紫煙砲を盾にして前進し、相手の弾は悪鬼蛇行で潜り抜けて急襲。',
    midRange: '長射程の立ち強Pや蛇連咬で毒を付与し、プレッシャーをかける。',
    closeRange: '毒状態の相手に打撃を当てて毒破裂を起こし、一気に大ダメージを奪う。',
    breakStalemate: [
      {
        title: '悪鬼蛇行からの猛毒牙急襲',
        description: '相手が地上で構えている足元を潜り抜けて奇襲し、毒を付与する。',
      },
    ],
    burnoutOffense: ['毒泡設置からの削りと固め。'],
    burnoutDefense: ['SA1またはSA3の完全無敵で切り返す。'],
  },
  combos: [
    {
      id: 'aki_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認蛇連咬（毒付与）',
      classicRecipe: '2弱P > 2弱P > 236弱P',
      modernRecipe: '2弱 > 2弱 > SP',
      damageApprox: '約1,350',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れから確実に毒を付与する基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'aki_drill_1',
      title: '毒状態からの毒破裂コンボ',
      category: 'コンボ確認',
      importance: '必修',
      description: '毒状態のダミーに中攻撃を当て、毒破裂からフルコンボを繋ぐ練習。',
      practiceGoal: '毒破裂時の浮きを見て確実に追撃する。',
      dummySettings: { guardSetting: 'ガードしない' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳を悪鬼蛇行で潜り抜け、電刃練気中に毒泡を撃ち込む。',
      keyThreats: ['強昇龍拳対空', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカン毒破裂フルコンボ',
        },
      ],
      practicalTips: ['リュウの波動拳モーションを見てから悪鬼蛇行で潜ればパニカンを取れる。'],
    },
  ],
};
