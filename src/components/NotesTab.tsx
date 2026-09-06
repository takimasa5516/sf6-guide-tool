import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { Edit3, Save, Trash2, CheckCircle } from 'lucide-react';

interface NotesTabProps {
  character: Character;
}

export const NotesTab: React.FC<NotesTabProps> = ({ character }) => {
  const storageKey = `sf6_notes_${character.id}`;
  const [noteContent, setNoteContent] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNoteContent(saved);
    } else {
      setNoteContent('');
    }
  }, [character.id]);

  const handleSave = () => {
    localStorage.setItem(storageKey, noteContent);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm(`${character.name}のメモをすべて削除しますか？`)) {
      localStorage.removeItem(storageKey);
      setNoteContent('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-orange-400" />
              {character.name} 個人対策・課題ノート
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              対戦で気づいた癖、苦手な技の対策、自分専用のセットプレイなどを自由にメモできます（ブラウザに自動保存）。
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleClear}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-red-950/60 text-slate-400 hover:text-red-300 text-xs transition border border-slate-700"
              title="メモを全消去"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>クリア</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition shadow-md shadow-orange-500/20"
            >
              {isSaved ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                  <span>保存完了</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>保存する</span>
                </>
              )}
            </button>
          </div>
        </div>

        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder={`例：
・○○使いに対しては中足ラッシュを意識してガードを固める
・相手の端インパクトに対して生昇龍を打ってしまいパニカン取られたので、端ではインパクトボタンに親指を添える
・端のシミーで立ち強Pを押すタイミングが早くて相手の投げに負けたので、1歩しっかり下がる`}
          className="w-full h-64 sm:h-80 p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs sm:text-sm leading-relaxed focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-y font-mono"
        />
      </div>
    </div>
  );
};
