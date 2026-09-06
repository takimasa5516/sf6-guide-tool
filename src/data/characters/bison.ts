import { Character } from '../../types';

export const bison: Character = {
  id: 'bison',
  name: 'ベガ',
  englishName: 'M. Bison',
  epithet: '蘇りしサイコパワーの帝王',
  archetype: '突進・攪乱',
  difficulty: '★★☆☆☆',
  themeColor: 'from-red-900 via-purple-900 to-slate-900',
  accentColor: '#7c3aed',
  avatarIcon: 'BISON',
  stats: {
    power: 5,
    range: 5,
    mobility: 4,
    defense: 3,
    antiAir: 4,
    easeOfUse: 5,
  },
  summary: 'Year 2で電撃参戦したサイコパワーの帝王。高速突進「サイコクラッシャー」、判定の強い「ダブルニープレス」、相手に爆弾を埋め込む「サイコマイン」による爆発的火力が最大の武器。',
  strengths: [
    '「サイコマイン」埋め込み後のコンボ火力が全キャラ屈指（体力の6〜7割を瞬時に奪う）',
    '「ダブルニープレス」の先端当てがガードされて-4F〜-2Fで反撃を受けにくい',
    '「シャドウライズ」による上空からの奇襲と対空ずらし',
    '立ち強Kなどの通常技リーチが非常に長く、中距離の地上戦が凶悪',
  ],
  weaknesses: [
    '無敵対空技を持たず、切り返しはSAに依存する（防御面がやや脆い）',
    '相手に触られると脱出が難しいため、常に先手を取って攻め続ける必要がある',
  ],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタンサイコクラッシャーによる奇襲・弾抜け、ワンボタンSA3が強力。アシストコンボもサイコマイン起爆ルートが組み込まれており、初心者から即座に高火力を出せる。',
    pros: [
      'ワンボタンサイコクラッシャーで相手の弾を見てから抜ける',
      'アシスト強コンボで簡単にサイコマイン起爆大ダメージ',
    ],
    cons: [
      '立ち強Pや一部の牽制技がアシスト経由になる',
    ],
    lostImportantMoves: ['立ち強P（通常出し）', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'ダブルニープレス',
      commandC: '4タメ6 + K',
      commandM: '4 + SP または 4タメ6+K',
      usage: '連続蹴り突進。強版は先端ガードで-3F〜-2Fとなり確反なし。地上戦の主軸。',
      frame: { startup: '12F〜', onBlock: '-4F〜-2F', onHit: '+2F' },
    },
    {
      name: 'サイコクラッシャーアタック',
      commandC: '4タメ6 + P',
      commandM: 'SP または 4タメ6+P',
      usage: 'サイコパワーを纏った超高速突進。OD版は弾無敵があり、ヒット時にサイコマインを埋め込む。',
      frame: { startup: '14F〜', onBlock: '-12F〜', onHit: 'ダウン/マイン付与' },
    },
    {
      name: 'バックフィストコンボ（立ち強K）',
      commandC: '強K',
      commandM: '強',
      usage: 'リーチが超長大な回し蹴り。パニカン時に相手を吹き飛ばし、サイコマインを起爆する。',
      frame: { startup: '12F', onBlock: '-5F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: 'ダブルニープレス先端当てで相手の技振りを抑制。相手が弾を撃ったらODサイコクラッシャーで弾抜け。',
    midRange: '長大な立ち強Kやしゃがみ中Pを振り、相手が手を出せないところにシャドウライズや生ラッシュで突っ込む。',
    closeRange: 'サイコマインを埋め込んだら、相手はガードしても爆発で削られるため、強気な打撃と投げの二択で即死させる。',
    breakStalemate: [
      {
        title: 'シャドウライズによる空からの奇襲',
        description: '相手が地上で構えている頭上へワープ跳躍し、ヘッドプレスやソマルトでガードを揺さぶる。',
      },
      {
        title: '先端ダブルニープレス連打',
        description: '相手の技の届かない位置からダブルニープレスを押し付け、ジリジリと画面端へ追い込む。',
      },
    ],
    burnoutOffense: ['画面端でのサイコクラッシャー連射と、立ち強Kのガードゲージ削り。'],
    burnoutDefense: ['無敵対空がないため、SA1またはSA3の完全無敵で強引に切り返す。'],
  },
  combos: [
    {
      id: 'bison_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ダブルニープレス',
      classicRecipe: '2弱P > 2弱P > 4タメ6弱K',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,400',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '4F暴れからのノーゲージ基本。',
    },
    {
      id: 'bison_c2',
      category: 'パニカン始動（無敵技ガード後等）',
      name: 'サイコマイン起爆大ダメージルート',
      classicRecipe: '5強P(パニカン) > ODサイコクラッシャー > 5強K(起爆) > 2タメ8強P',
      modernRecipe: 'アシスト強(パニカン) > OD+SP > 強(起爆) > 2+SP',
      damageApprox: '約4,500',
      driveCost: 2,
      superArtCost: 0,
      difficulty: 3,
      purpose: 'サイコマインを付与して起爆するベガの爆発的コンボ。',
    },
  ],
  trainingDrills: [
    {
      id: 'bison_drill_1',
      title: 'ダブルニープレスの先端当て間合い確認',
      category: 'キャラ固有対策',
      importance: '必修',
      description: 'ガード復帰時に4F小技暴れを設定したダミーに対し、強ダブルニープレスを先端当てして反撃をもらわない間合いを覚える。',
      practiceGoal: '相手の反撃小技が届かず、こちらのターンを維持できる距離感を掴む。',
      dummySettings: {
        guardSetting: 'すべてガード',
        reversalAction: 'ガード復帰時: 立ち弱P',
      },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '微有利',
      coreStrategy: 'リュウの波動拳に対してODサイコクラッシャーで弾抜けを狙い、中距離はダブルニープレスと立ち強Kでリュウの中足を封殺する。',
      keyThreats: ['強昇龍拳（シャドウライズを落とされる）', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '5強Pパニカン始動サイコマインコンボ',
        },
      ],
      practicalTips: ['シャドウライズはリュウの昇龍拳で迎撃されやすいため、地上戦をメインにする。'],
    },
  ],
};
