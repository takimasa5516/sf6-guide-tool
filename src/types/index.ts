export type ControlType = 'classic' | 'modern';

export type CharacterArchetype = 
  | '道着・スタンダード'
  | 'インファイター・スピード'
  | 'コマンド投げ・重量級'
  | '突進・攪乱'
  | '設置・トリッキー'
  | 'リーチ・中距離制圧';

export interface FrameInfo {
  startup: string;
  onBlock: string;
  onHit: string;
}

export interface KeyMove {
  name: string;
  commandC: string;
  commandM?: string;
  usage: string;
  frame?: FrameInfo;
}

export type ComboCategory = 
  | '基礎（小技始動・暴れ・確反）'
  | '中攻撃・差し返し確認'
  | '生ドライブラッシュ始動'
  | 'キャンセルラッシュ伸長'
  | 'パニカン始動（無敵技ガード後等）'
  | '画面端インパクト・スタン最大'
  | 'SA3 / CA リーサル';

export interface Combo {
  id: string;
  category: ComboCategory;
  name: string;
  classicRecipe: string;
  modernRecipe: string;
  damageApprox: string;
  driveCost: number; // 0~6
  superArtCost: number; // 0, 1, 2, 3
  difficulty: 1 | 2 | 3 | 4 | 5;
  purpose: string;
  note?: string;
}

export interface DummyRecordSlot {
  slotNumber: number;
  label: string;
  action: string;
  playbackWeight?: string;
}

export interface DummySetting {
  guardSetting: string;
  reversalAction?: string;
  counterAttack?: string;
  recordSlots?: DummyRecordSlot[];
  tips?: string;
}

export interface TrainingDrill {
  id: string;
  title: string;
  category: '対空' | 'インパクト返し' | '確反' | 'シミー/遅らせグラップ狩り' | '起き攻め・詐欺飛び' | 'キャラ固有対策' | 'コンボ確認' | 'セットプレイ';
  importance: '必修' | '推奨' | '応用';
  description: string;
  practiceGoal: string;
  dummySettings: DummySetting;
}

export interface ModernEvaluation {
  rating: 'S' | 'A' | 'B' | 'C';
  comment: string;
  pros: string[];
  cons: string[];
  lostImportantMoves: string[];
}

export interface GameplanStrategy {
  farRange: string;
  midRange: string;
  closeRange: string;
  breakStalemate: {
    title: string;
    description: string;
  }[];
  burnoutOffense: string[];
  burnoutDefense: string[];
}

export interface PunishPoint {
  opponentMove: string;
  frameAdvantage: string;
  recommendedPunish: string;
  note?: string;
}

export interface MatchupAdvice {
  opponentId: string;
  opponentName: string;
  advantageLevel: '有利' | '微有利' | '五分' | '微不利' | '不利';
  coreStrategy: string;
  keyThreats: string[];
  punishList: PunishPoint[];
  practicalTips: string[];
}

export interface Character {
  id: string;
  name: string;
  englishName: string;
  epithet: string;
  archetype: CharacterArchetype;
  difficulty: string;
  themeColor: string;
  accentColor: string;
  avatarIcon: string;
  stats: {
    power: number;
    range: number;
    mobility: number;
    defense: number;
    antiAir: number;
    easeOfUse: number;
  };
  summary: string;
  strengths: string[];
  weaknesses: string[];
  modernEvaluation: ModernEvaluation;
  keyMoves: KeyMove[];
  gameplan: GameplanStrategy;
  combos: Combo[];
  trainingDrills: TrainingDrill[];
  matchups: MatchupAdvice[];
}

export interface GeneralTrainingRoutine {
  id: string;
  title: string;
  timeEstimate: string;
  category: 'ウォーミングアップ' | '反応・防御' | 'コンボ確認' | 'セットプレイ';
  description: string;
  howToSet: string;
  recommendedFrequency: '毎日' | '対戦前' | '週2〜3回';
}

export interface ProTrainingLesson {
  id: string;
  source: string; // 提唱プロ名（例: 'あくあ氏', 'どぐら氏', 'Rush Gorou (五郎) 氏'）
  title: string;
  category: 'ショートカット＆基本設定' | 'フレームメーター活用' | '実戦レコード術' | '確反＆対策リサーチ';
  summary: string;
  steps: string[];
  proTip: string;
}
