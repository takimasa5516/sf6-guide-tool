import { Character } from '../../types';

export const rashid: Character = {
  id: 'rashid',
  name: 'ラシード',
  englishName: 'Rashid',
  epithet: '友誼のパルクール旋風',
  archetype: '突進・攪乱',
  difficulty: '★★★☆☆',
  themeColor: 'from-amber-600 via-orange-500 to-yellow-700',
  accentColor: '#f59e0b',
  avatarIcon: 'RASHID',
  stats: {
    power: 4,
    range: 4,
    mobility: 5,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '竜巻を操るパルクール戦士。「ワールウィンド・ショット」で竜巻を発生させ、それに触れることで自身の機動力や技が大幅に強化される。三角跳びやランからの変幻自在な攻めが強力。',
  strengths: [
    '風に乗ることでドライブラッシュの飛距離と速度が異常なレベルに達する',
    '「イウサール（SA2）」による画面を埋め尽くす巨大竜巻ハメ攻め',
    '三角跳びやアラビアンサイクロンによる多彩な空中・地上攻め',
  ],
  weaknesses: ['単発火力が標準的で、細かいセットプレイの反復が必要', '通常技の判定が道着系よりやや控えめ'],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタン対空スピニング・ミキサーやワンボタンSA2（イウサール）が強力。モダンでもラシードの強力な竜巻連携がほぼそのまま使用可能。',
    pros: ['ワンボタン対空ミキサー', 'ワンボタンSA2イウサール'],
    cons: ['ワールウィンドショットの細かい溜め撃ち分けが一部制限される'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'スピニング・ミキサー',
      commandC: '236 + P',
      commandM: 'SP または 236+P',
      usage: '回転竜巻パンチ。強版は対空、弱版は固め、OD版は完全無敵。連打でヒット数増加。',
      frame: { startup: '6F〜', onBlock: '-12F〜', onHit: 'ダウン' },
    },
    {
      name: 'ワールウィンド・ショット',
      commandC: '214 + K',
      commandM: '4 + SP または 214+K',
      usage: '竜巻を放つ。ホールドで巨大化し、触れるとラシードが強化される。',
      frame: { startup: '18F〜', onBlock: '-3F〜', onHit: '追撃可能' },
    },
  ],
  gameplan: {
    farRange: 'ワールウィンド・ショットを溜めて撃ち、風に乗って超高速生ラッシュで突入。',
    midRange: 'アラビアン・サイクロンからの派生技で相手のガードを揺さぶる。',
    closeRange: 'SA2（イウサール）を撃ち、巨大竜巻と一緒に前進してガード不能に近い多重択を仕掛ける。',
    breakStalemate: [
      {
        title: 'SA2 イウサール設置攻め',
        description: '超巨大竜巻を放ち、相手のパリィを誘って通常投げや中段・下段で崩す。',
      },
    ],
    burnoutOffense: ['イウサールをガードさせてスタン確定連携。'],
    burnoutDefense: ['ODスピニング・ミキサーやSA1で切り返す。'],
  },
  combos: [
    {
      id: 'rashid_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認弱ミキサー',
      classicRecipe: '2弱P > 2弱P > 236弱P',
      modernRecipe: '2弱 > 2弱 > SP',
      damageApprox: '約1,350',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'rashid_drill_1',
      title: 'SA2イウサールからの崩し連携',
      category: 'セットプレイ',
      importance: '必修',
      description: 'イウサールをガードさせてから、前ダッシュ中段・下段・投げの択を練習。',
      practiceGoal: '相手のガードを100%崩す。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳を風に乗ったジャンプやラッシュで飛び越えて画面端に押し込む。',
      keyThreats: ['強昇龍拳対空', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['イウサールをリュウの起き上がりに重ねるとリュウは昇龍を撃てなくなる。'],
    },
  ],
};
