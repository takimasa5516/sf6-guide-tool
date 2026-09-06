import React from 'react';
import { Character } from '../types';

interface CharacterBarProps {
  characters: Character[];
  selectedCharacterId: string;
  onSelectCharacter: (id: string) => void;
}

export const CharacterBar: React.FC<CharacterBarProps> = ({
  characters,
  selectedCharacterId,
  onSelectCharacter,
}) => {
  return (
    <div className="bg-[#101420] border-b border-slate-800/80 sticky top-[93px] sm:top-[98px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 overflow-x-auto no-scrollbar flex items-center gap-2">
        {characters.map((char) => {
          const isSelected = char.id === selectedCharacterId;
          return (
            <button
              key={char.id}
              onClick={() => onSelectCharacter(char.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all shrink-0 select-none ${
                isSelected
                  ? 'bg-gradient-to-r from-slate-800 to-slate-750 border-orange-500/80 shadow-md shadow-orange-500/10 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {/* アイコン風バッジ */}
              <div
                className={`w-7 h-7 rounded-lg bg-gradient-to-br ${char.themeColor} flex items-center justify-center font-black text-white text-[10px] tracking-tighter shadow-sm font-['Chakra_Petch']`}
              >
                {char.avatarIcon.substring(0, 3)}
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {char.name}
                  </span>
                  <span
                    className={`text-[9px] px-1 rounded font-black font-['Chakra_Petch'] ${
                      char.modernEvaluation.rating === 'S'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    M:{char.modernEvaluation.rating}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 leading-none block">
                  {char.englishName}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
