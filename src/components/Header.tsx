import React from 'react';
import { ControlType } from '../types';
import { Gamepad2, Search, Timer } from 'lucide-react';

interface HeaderProps {
  controlType: ControlType;
  setControlType: (type: ControlType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  openTimerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  controlType,
  setControlType,
  searchQuery,
  setSearchQuery,
  openTimerModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0f17]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
        {/* ロゴとタイトル */}
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black tracking-wider text-base sm:text-lg bg-gradient-to-r from-orange-400 via-amber-200 to-purple-400 bg-clip-text text-transparent font-['Chakra_Petch']">
                SF6 NAVI
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">
                YEAR 2
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              ストリートファイター6 実戦攻略＆トレモ設定ナビ
            </p>
          </div>
        </div>

        {/* コントロール・アクション部分 */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 sm:flex-initial justify-end">
          {/* 操作タイプ切替トグル */}
          <div className="flex items-center bg-slate-900/90 p-0.5 rounded-lg border border-slate-700 text-[11px] sm:text-xs shadow-inner shrink-0">
            <button
              onClick={() => setControlType('classic')}
              className={`px-2 sm:px-2.5 py-1 rounded-md font-bold transition-all whitespace-nowrap ${
                controlType === 'classic'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              クラシック
            </button>
            <button
              onClick={() => setControlType('modern')}
              className={`px-2 sm:px-2.5 py-1 rounded-md font-bold transition-all whitespace-nowrap ${
                controlType === 'modern'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              モダン
            </button>
          </div>

          {/* トレモタイマー起動ボタン */}
          <button
            onClick={openTimerModal}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition"
            title="トレモ集中タイマー"
          >
            <Timer className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden xs:inline">タイマー</span>
          </button>
        </div>
      </div>

      {/* 検索バー（モバイルでも押しやすい位置） */}
      <div className="px-3 sm:px-6 pb-2 max-w-7xl mx-auto">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="技名、コンボレシピ、立ち回り、トレモ設定を検索..."
            className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-900/80 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
