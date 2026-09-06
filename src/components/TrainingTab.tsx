import React, { useState } from 'react';
import { Character, GeneralTrainingRoutine, ProTrainingLesson } from '../types';
import { Target, CheckSquare, Square, Sliders, Clock, CheckCircle2, ChevronDown, ChevronUp, Video, Sparkles } from 'lucide-react';

interface TrainingTabProps {
  character: Character;
  generalRoutines: GeneralTrainingRoutine[];
  proLessons: ProTrainingLesson[];
  completedDrillIds: string[];
  toggleCompleteDrill: (id: string) => void;
}

export const TrainingTab: React.FC<TrainingTabProps> = ({
  character,
  generalRoutines,
  proLessons,
  completedDrillIds,
  toggleCompleteDrill,
}) => {
  const [isGuideExpanded, setIsGuideExpanded] = useState<boolean>(true);
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    proLessons.length > 0 ? proLessons[0].id : ''
  );

  // 達成率計算
  const totalItems = generalRoutines.length + character.trainingDrills.length;
  const completedCount = completedDrillIds.length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const currentLesson = proLessons.find((l) => l.id === selectedLessonId) || proLessons[0];

  return (
    <div className="space-y-6">
      {/* 練習進捗・チェックリストサマリー */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#141b2b] to-slate-900 border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="w-full sm:w-auto">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              本日のトレモ達成度
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            日課ルーティンとキャラ別メニューを毎日こなして実戦の反射神経をキープしましょう。
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right">
            <span className="text-2xl font-black text-amber-400 font-['Chakra_Petch']">
              {progressPercent}%
            </span>
            <span className="text-xs text-slate-400 ml-1.5">
              ({completedCount}/{totalItems} 完了)
            </span>
          </div>

          <div className="w-32 bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* プロ直伝！トレモ完全活用ガイド（動画ベース解説） */}
      <div className="rounded-2xl bg-[#121724] border border-amber-500/30 p-4 sm:p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>プロ直伝！トレーニングモード完全活用講座</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold hidden sm:inline">
                  あくあ氏・どぐら氏・五郎氏 推奨
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                ショートカット、フレームメーター、リバーサル、確反リサーチの手順
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsGuideExpanded(!isGuideExpanded)}
            className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 px-2 py-1 rounded-lg bg-slate-900 border border-slate-800"
          >
            {isGuideExpanded ? (
              <>
                <span>閉じる</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>詳細を見る</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {isGuideExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-4">
            {/* レッスン選択タブ */}
            <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {proLessons.map((lesson) => {
                const isSelected = lesson.id === selectedLessonId;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLessonId(lesson.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {lesson.category}
                  </button>
                );
              })}
            </div>

            {/* 選択中のレッスンカード */}
            {currentLesson && (
              <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold">
                      {currentLesson.source}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {currentLesson.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLesson.summary}
                </p>

                {/* 具体的な手順 */}
                <div className="space-y-1.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800/60">
                  <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1 mb-1">
                    <Sliders className="w-3 h-3" />
                    設定＆実践ステップ:
                  </div>
                  {currentLesson.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* プロのコツ */}
                <div className="text-xs text-amber-300 bg-amber-950/30 p-2.5 rounded-lg border border-amber-800/30 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>プロ直伝の秘訣:</strong> {currentLesson.proTip}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* セクション1: 共通・デイリートレモルーティン */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm sm:text-base font-bold text-amber-400 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            全キャラ共通：毎日の基礎トレモルーティン（日課）
          </h3>
          <span className="text-xs text-slate-400">対戦前の5〜15分に最適</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {generalRoutines.map((routine) => {
            const isDone = completedDrillIds.includes(routine.id);
            return (
              <div
                key={routine.id}
                className={`rounded-2xl border p-4 transition shadow-sm ${
                  isDone
                    ? 'bg-slate-900/40 border-emerald-500/40 opacity-80'
                    : 'bg-[#121724] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCompleteDrill(routine.id)}
                      className="text-slate-400 hover:text-emerald-400 transition shrink-0 mt-0.5"
                    >
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 font-semibold border border-slate-700">
                          目安 {routine.timeEstimate}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {routine.recommendedFrequency}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                        {routine.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-3 pl-7 leading-relaxed">
                  {routine.description}
                </p>

                {/* 具体的な設定手順 */}
                <div className="ml-7 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1 font-bold text-amber-400 mb-1">
                    <Sliders className="w-3.5 h-3.5" />
                    トレモ設定の具体的手順
                  </div>
                  <div className="text-slate-300 leading-relaxed font-mono">
                    {routine.howToSet}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* セクション2: キャラ固有の課題トレモメニュー */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm sm:text-base font-bold text-orange-400 flex items-center gap-2">
            <Target className="w-4 h-4" />
            {character.name} 特化トレモ課題メニュー
          </h3>
          <span className="text-xs text-slate-400">キャラ性能を引き出す独自練習</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {character.trainingDrills.map((drill) => {
            const isDone = completedDrillIds.includes(drill.id);
            return (
              <div
                key={drill.id}
                className={`rounded-2xl border p-4 sm:p-5 transition shadow-sm ${
                  isDone
                    ? 'bg-slate-900/40 border-emerald-500/40 opacity-80'
                    : 'bg-[#121724] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCompleteDrill(drill.id)}
                      className="text-slate-400 hover:text-emerald-400 transition shrink-0 mt-0.5"
                    >
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold border border-orange-500/30">
                          {drill.category}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
                          {drill.importance}
                        </span>
                      </div>
                      <h4 className={`text-sm sm:text-base font-bold mt-0.5 ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                        {drill.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-2 pl-7 leading-relaxed">
                  {drill.description}
                </p>

                <div className="ml-7 mb-3 text-xs text-emerald-400 font-medium">
                  🎯 習得目標: {drill.practiceGoal}
                </div>

                {/* ダミー設定ボックス */}
                <div className="ml-7 rounded-xl bg-slate-950/90 border border-slate-800/80 p-3 sm:p-4 text-xs">
                  <div className="font-bold text-amber-300 mb-2 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    ゲーム内ダミー設定値
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 min-w-[70px]">ガード設定:</span>
                      <span className="font-semibold text-white">{drill.dummySettings.guardSetting}</span>
                    </div>

                    {drill.dummySettings.reversalAction && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 min-w-[70px]">リバーサル:</span>
                        <span className="font-semibold text-orange-300">{drill.dummySettings.reversalAction}</span>
                      </div>
                    )}

                    {drill.dummySettings.recordSlots && (
                      <div className="mt-2 pt-2 border-t border-slate-800/60">
                        <span className="text-slate-400 font-semibold block mb-1.5">
                          ダミーへのレコードスロット登録:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {drill.dummySettings.recordSlots.map((slot) => (
                            <div key={slot.slotNumber} className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px]">
                              <div className="flex justify-between text-amber-400 font-mono font-bold mb-0.5">
                                <span>スロット {slot.slotNumber}</span>
                                <span>{slot.playbackWeight}</span>
                              </div>
                              <div className="text-white font-semibold">{slot.label}</div>
                              <div className="text-slate-400 text-[10px] mt-0.5">{slot.action}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {drill.dummySettings.tips && (
                      <div className="mt-2 text-[11px] text-slate-400 italic">
                        💡 コツ: {drill.dummySettings.tips}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
