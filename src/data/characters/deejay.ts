import { Character } from '../../types';

export const deejay: Character = {
  id: 'deejay',
  name: 'ディージェイ',
  englishName: 'Dee Jay',
  epithet: 'ビートの魔術師',
  archetype: '突進・攪乱',
  difficulty: '★★☆☆☆',
  themeColor: 'from-lime-600 via-emerald-600 to-teal-800',
  accentColor: '#84cc16',
  avatarIcon: 'DEEJAY',
  stats: {
    power: 4,
    range: 4,
    mobility: 5,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '最速ドライブラッシュとフェイント技、そして高火力のコンボを持つダンスファイター。「エアスラッシャー」の緩急と「ジョスクール」による変幻自在のステップで相手の脳を破壊する。',
  strengths: [
    'ドライブラッシュの突進速度が全キャラ最速トップ争い',
    'エアスラッシャー（弾）のフェイントや撃ち分けによるフェイク性能',
    'コンボ火力が非常に高く、一度触れば大ダメージ',
  ],
  weaknesses: ['下段（しゃがみ中K）からキャンセルラッシュができない', 'タメ技コマンドの維持が必要'],
  modernEvaluation: {
    rating: 'A',
    comment: '超高速ラッシュとワンボタン対空ジャックナイフマキシマム、ワンボタンSA3が強力。アシストコンボも実戦的。',
    pros: ['超高速生ラッシュ', 'ワンボタン対空'],
    cons: ['エアスラッシャーのフェイント細工が制限される'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ強P（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'エアスラッシャー',
      commandC: '4タメ6 + P',
      commandM: '4 + SP または 4タメ6+P',
      usage: '飛び道具。弱は遅く、強は2発、OD版は高速。フェイントも可能。',
      frame: { startup: '14F〜', onBlock: '-3F〜', onHit: 'ダウン' },
    },
    {
      name: 'ジャックナイフマキシマム',
      commandC: '2タメ8 + K',
      commandM: '2 + SP',
      usage: '対空サマーソルト蹴り。強版・OD版は完全無敵。',
      frame: { startup: '6F', onBlock: '-26F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: 'エアスラッシャーを撃ち分けつつ、最速生ラッシュで一気に触りに行く。',
    midRange: '立ち強Pの置きや、ジョスクールでのバックステップフェイントで相手の技を空振りさせる。',
    closeRange: '立ち弱P刻みから、生ラッシュ投げ・シミーの猛攻。',
    breakStalemate: [
      {
        title: '生ラッシュしゃがみ弱P',
        description: '超高速ラッシュから下段小技で突っ込み、ガードさせて有利を取り続ける。',
      },
    ],
    burnoutOffense: ['画面端でのエアスラッシャー連射による削り。'],
    burnoutDefense: ['ジャックナイフマキシマムやSA3で切り返す。'],
  },
  combos: [
    {
      id: 'deejay_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ローリングソバット',
      classicRecipe: '2弱P > 2弱P > 214弱K',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,450',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからの基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'deejay_drill_1',
      title: 'ジャックナイフマキシマムの対空反応',
      category: '対空',
      importance: '必修',
      description: 'ダミーの飛びに対して対空蹴りを合わせる練習。',
      practiceGoal: '飛びを見てから100%落とす。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'ラッシュ速度を活かしてリュウの波動拳の硬直に差し込む。',
      keyThreats: ['強昇龍拳', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウの波動拳に生ラッシュを合わせるとパニカンになる。'],
    },
  ],
};
