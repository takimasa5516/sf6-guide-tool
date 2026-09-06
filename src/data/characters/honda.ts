import { Character } from '../../types';

export const honda: Character = {
  id: 'honda',
  name: 'E.本田',
  englishName: 'E. Honda',
  epithet: '土俵を揺るがす熱血力士',
  archetype: '突進・攪乱',
  difficulty: '★☆☆☆☆',
  themeColor: 'from-red-800 via-stone-800 to-amber-700',
  accentColor: '#b91c1c',
  avatarIcon: 'HONDA',
  stats: {
    power: 5,
    range: 4,
    mobility: 2,
    defense: 4,
    antiAir: 4,
    easeOfUse: 5,
  },
  summary: 'スーパー頭突きとスーパー百貫落としによる圧倒的な突進・上空プレッシャーを誇る重量級力士。相手の対策が甘ければ頭突きと百貫を繰り返すだけで勝てる初心者キラーにして地上戦の重戦車。',
  strengths: [
    '「スーパー頭突き」の突進判定とスピードが凄まじく、相手の地上技を粉砕',
    '「スーパー百貫落とし」で相手の頭上から落下し、ガードされても有利が取れる',
    'コマンド投げ「大銀杏投げ」によるガード崩し',
    '百裂張り手による固めとコンボ火力',
  ],
  weaknesses: ['ジャストパリィを取られると大幅不利から大ダメージを受ける', 'タメ技コマンドの維持が必要'],
  modernEvaluation: {
    rating: 'S',
    comment: 'ワンボタン頭突き、ワンボタン百貫、ワンボタン大銀杏投げ（コマンド投げ）、ワンボタンSA3が揃っており、操作の簡単さと勝率の高さが屈指のキャラクター。',
    pros: ['ワンボタン頭突き＆百貫落とし', 'ワンボタン大銀杏投げ'],
    cons: ['立ち強Kなどの通常技が制限される'],
    lostImportantMoves: ['立ち強K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'スーパー頭突き',
      commandC: '4タメ6 + P',
      commandM: '4 + SP または 4タメ6+P',
      usage: '本田の代名詞。強版は高速突進。ガードされても反撃を受けにくい。',
      frame: { startup: '10F〜', onBlock: '-4F〜', onHit: 'ダウン' },
    },
    {
      name: 'スーパー百貫落とし',
      commandC: '2タメ8 + K',
      commandM: '2 + SP',
      usage: '跳び上がって相手の真上からヒップアタック。ガードされて+1F有利。',
      frame: { startup: '20F〜', onBlock: '+1F', onHit: 'ダウン' },
    },
    {
      name: '大銀杏投げ',
      commandC: '63214 + P',
      commandM: 'SP または 63214+P',
      usage: '相手を掴んで叩きつけるコマンド投げ。百貫ガード後の二択に最適。',
      frame: { startup: '5F', onBlock: 'ガード不能', onHit: '大ダメージ' },
    },
  ],
  gameplan: {
    farRange: 'スーパー頭突きで突進し、相手の技振りを抑制。',
    midRange: 'スーパー百貫落としで相手のガードの上から落下し、ガードさせて+1F有利を作る。',
    closeRange: '百貫ガード後の+1Fから、打撃（百裂張り手）と大銀杏投げの二択。',
    breakStalemate: [
      {
        title: 'スーパー百貫落とし落下攻め',
        description: '相手が地上で構えている頭上へ百貫を落とし、ガードさせて密着有利から投げを仕掛ける。',
      },
    ],
    burnoutOffense: ['スーパー頭突き連打によるガードゲージ圧殺と壁スタン。'],
    burnoutDefense: ['ODスーパー頭突き（アーマー）やSA3で切り返す。'],
  },
  combos: [
    {
      id: 'honda_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認スーパー頭突き',
      classicRecipe: '2弱P > 2弱P > 4タメ6弱P',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,480',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'honda_drill_1',
      title: '百貫落としガード後の大銀杏投げ二択',
      category: 'シミー/遅らせグラップ狩り',
      importance: '必修',
      description: '百貫落としを当てた直後の+1F有利から、相手の暴れを潰す小技とコマ投げを散らす練習。',
      practiceGoal: '相手の固まりを見てから大銀杏投げで吸い込む。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳にOD頭突き（アーマー）を合わせ、百貫で対空のタイミングをずらす。',
      keyThreats: ['強昇龍拳（百貫を落とされる）', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '大銀杏投げ または 立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが対空昇龍拳を構えている時は、百貫ではなく地上頭突きで差し合う。'],
    },
  ],
};
