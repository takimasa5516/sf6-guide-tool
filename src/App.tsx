import React, { useState, useEffect } from 'react';
import { ControlType } from './types';
import { allCharacters, getCharacterById } from './data/characters';
import { generalRoutines } from './data/routines';
import { proTrainingLessons } from './data/trainingGuide';
import { Header } from './components/Header';
import { CharacterBar } from './components/CharacterBar';
import { OverviewTab } from './components/OverviewTab';
import { CombosTab } from './components/CombosTab';
import { StrategyTab } from './components/StrategyTab';
import { MatchupTab } from './components/MatchupTab';
import { TrainingTab } from './components/TrainingTab';
import { NotesTab } from './components/NotesTab';
import { TimerModal } from './components/TimerModal';
import { BookOpen, Flame, Compass, Target, Edit3, Swords } from 'lucide-react';

type TabType = 'overview' | 'combos' | 'strategy' | 'matchup' | 'training' | 'notes';

export const App: React.FC = () => {
  const [controlType, setControlType] = useState<ControlType>(() => {
    return (localStorage.getItem('sf6_control_type') as ControlType) || 'classic';
  });

  // 優先キャラであるリュウを初期値に設定
  const [selectedCharId, setSelectedCharId] = useState<string>(() => {
    return localStorage.getItem('sf6_selected_char') || 'ryu';
  });

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completedDrillIds, setCompletedDrillIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('sf6_completed_drills');
    return saved ? JSON.parse(saved) : [];
  });

  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('sf6_control_type', controlType);
  }, [controlType]);

  useEffect(() => {
    localStorage.setItem('sf6_selected_char', selectedCharId);
  }, [selectedCharId]);

  useEffect(() => {
    localStorage.setItem('sf6_completed_drills', JSON.stringify(completedDrillIds));
  }, [completedDrillIds]);

  const toggleCompleteDrill = (id: string) => {
    setCompletedDrillIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentCharacter = getCharacterById(selectedCharId) || allCharacters[0];

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: '特徴・性能', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'combos', label: '必修コンボ', icon: <Flame className="w-4 h-4" /> },
    { id: 'strategy', label: '立ち回り・打開', icon: <Compass className="w-4 h-4" /> },
    { id: 'matchup', label: 'キャラ対策', icon: <Swords className="w-4 h-4" /> },
    { id: 'training', label: 'トレモ設定', icon: <Target className="w-4 h-4" /> },
    { id: 'notes', label: '課題ノート', icon: <Edit3 className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col pb-16 sm:pb-8">
      {/* ヘッダー */}
      <Header
        controlType={controlType}
        setControlType={setControlType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openTimerModal={() => setIsTimerOpen(true)}
      />

      {/* キャラクター選択バー（リュウ・テリーが最優先） */}
      <CharacterBar
        characters={allCharacters}
        selectedCharacterId={selectedCharId}
        onSelectCharacter={(id) => setSelectedCharId(id)}
      />

      {/* メインコンテンツエリア */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4">
        {/* タブヘッダー（PC/タブレット用） */}
        <div className="hidden sm:flex items-center gap-1.5 border-b border-slate-800/80 mb-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all select-none whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-400 bg-orange-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div>
          {activeTab === 'overview' && (
            <OverviewTab character={currentCharacter} controlType={controlType} />
          )}
          {activeTab === 'combos' && (
            <CombosTab
              character={currentCharacter}
              controlType={controlType}
              searchQuery={searchQuery}
            />
          )}
          {activeTab === 'strategy' && <StrategyTab character={currentCharacter} />}
          {activeTab === 'matchup' && (
            <MatchupTab character={currentCharacter} />
          )}
          {activeTab === 'training' && (
            <TrainingTab
              character={currentCharacter}
              generalRoutines={generalRoutines}
              proLessons={proTrainingLessons}
              completedDrillIds={completedDrillIds}
              toggleCompleteDrill={toggleCompleteDrill}
            />
          )}
          {activeTab === 'notes' && <NotesTab character={currentCharacter} />}
        </div>
      </main>

      {/* モバイル用フッタータブバー */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0f17]/95 backdrop-blur-md border-t border-slate-800 flex justify-around py-1.5 px-1 safe-area-pb">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all ${
              activeTab === tab.id ? 'text-orange-400 font-bold' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {tab.icon}
            <span className="text-[9px] mt-0.5 whitespace-nowrap">{tab.label.split('・')[0]}</span>
          </button>
        ))}
      </div>

      {/* トレモタイマーモーダル */}
      <TimerModal isOpen={isTimerOpen} onClose={() => setIsTimerOpen(false)} />
    </div>
  );
};

export default App;
