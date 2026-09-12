import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy, Zap, Flame, ShieldAlert, Sparkles, Filter, ChevronRight } from 'lucide-react';

export const QuizTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(() => {
    return parseInt(localStorage.getItem('sf6_quiz_max_streak') || '0', 10);
  });
  const [answeredCount, setAnsweredCount] = useState<number>(0);

  // フィルタリングされた問題リスト
  const filteredQuestions = selectedCategory === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.category === selectedCategory);

  const currentQuestion: QuizQuestion = filteredQuestions[currentIndex] || QUIZ_QUESTIONS[0];

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
  }, [selectedCategory]);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    setAnsweredCount(prev => prev + 1);

    const isCorrect = currentQuestion.options[index].isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
        localStorage.setItem('sf6_quiz_max_streak', newStreak.toString());
      }
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // 最後の問題が終わったら最初に戻る（またはシャッフル）
      setCurrentIndex(0);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setAnsweredCount(0);
  };

  const categories = [
    { id: 'all', label: 'すべて', count: QUIZ_QUESTIONS.length },
    { id: '確反', label: '確定反撃', count: QUIZ_QUESTIONS.filter(q => q.category === '確反').length },
    { id: '対空', label: '対空判断', count: QUIZ_QUESTIONS.filter(q => q.category === '対空').length },
    { id: '暴れ・割り込み', label: '暴れ・割り込み', count: QUIZ_QUESTIONS.filter(q => q.category === '暴れ・割り込み').length },
    { id: 'ジャストパリィ・インパクト', label: 'パリィ・インパクト', count: QUIZ_QUESTIONS.filter(q => q.category === 'ジャストパリィ・インパクト').length },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* ヒーローバナー＆成績 */}
      <div className="rounded-2xl bg-gradient-to-r from-orange-600/20 via-amber-600/10 to-purple-600/20 border border-orange-500/30 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>実戦判断力トレーニング</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2 justify-center sm:justify-start">
            <span>確反・対空シチュエーション判断クイズ</span>
          </h2>
          <p className="text-xs text-slate-300">
            実戦で誰もが迷う相手の危険技・連携。一瞬の判断をクイズ形式でマスター！
          </p>
        </div>

        {/* 成績ステータス */}
        <div className="flex items-center gap-4 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 block font-semibold">正解数</span>
            <span className="text-lg font-black text-emerald-400 font-['Chakra_Petch']">
              {score}/{answeredCount}
            </span>
          </div>
          <div className="w-[1px] h-7 bg-slate-800" />
          <div className="text-center">
            <span className="text-[10px] text-slate-400 block font-semibold flex items-center gap-0.5 justify-center">
              <Flame className="w-3 h-3 text-orange-500" />
              連勝
            </span>
            <span className="text-lg font-black text-orange-400 font-['Chakra_Petch']">
              {streak}
            </span>
          </div>
          <div className="w-[1px] h-7 bg-slate-800" />
          <div className="text-center">
            <span className="text-[10px] text-slate-400 block font-semibold flex items-center gap-0.5 justify-center">
              <Trophy className="w-3 h-3 text-amber-400" />
              最高
            </span>
            <span className="text-lg font-black text-amber-300 font-['Chakra_Petch']">
              {maxStreak}
            </span>
          </div>
        </div>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <Filter className="w-4 h-4 text-slate-500 shrink-0 ml-1" />
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-orange-500 text-slate-950 font-black shadow-md shadow-orange-500/20 scale-[1.02]'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <span>{cat.label}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/30 opacity-80">
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* クイズカード */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-5 sm:p-6 shadow-md space-y-5 relative">
        {/* 問題番号 & カテゴリ */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-400 font-mono">
              第 {currentIndex + 1} 問 / 全 {filteredQuestions.length} 問
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
              相手: {currentQuestion.opponentName}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-semibold">
              {currentQuestion.category}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>リセット</span>
          </button>
        </div>

        {/* 状況・シチュエーション */}
        <div className="space-y-2">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>状況: {currentQuestion.situation}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentQuestion.question}
          </h3>
          <div className="inline-block p-2 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-orange-300">
            相手の行動: <span className="text-white font-bold">{currentQuestion.opponentMove}</span>
          </div>
        </div>

        {/* 選択肢ボタン一覧 */}
        <div className="space-y-2.5 pt-2">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            let btnStyle = 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200';

            if (isAnswered) {
              if (option.isCorrect) {
                btnStyle = 'bg-emerald-950/70 border-emerald-500/80 text-emerald-200 font-bold';
              } else if (isSelected && !option.isCorrect) {
                btnStyle = 'bg-red-950/70 border-red-500/80 text-red-200 line-through';
              } else {
                btnStyle = 'bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-3 ${btnStyle}`}
              >
                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="flex-1 leading-relaxed">
                  {option.text}
                </span>
                {isAnswered && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {isAnswered && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* 回答後の解説アコーディオン / パネル */}
        {isAnswered && (
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* 結果メッセージ */}
            <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${
              currentQuestion.options[selectedOption!].isCorrect
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-red-950/40 border-red-500/40 text-red-300'
            }`}>
              {currentQuestion.options[selectedOption!].isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">正解！その通りです。</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">
                    不正解！正解は「選択肢 {currentQuestion.options.findIndex(o => o.isCorrect) + 1}」でした。
                  </span>
                </>
              )}
            </div>

            {/* 詳しいフレーム・仕様解説 */}
            <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-amber-400 font-bold">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  解説＆フレーム情報
                </span>
                <span className="font-mono bg-amber-500/10 px-2 py-0.5 rounded text-[11px] border border-amber-500/20">
                  {currentQuestion.frameInfo}
                </span>
              </div>
              <p className="leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-400 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span><strong>プロのワンポイント:</strong> {currentQuestion.proTip}</span>
              </div>
            </div>

            {/* 次の問題へボタン */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition"
              >
                <span>次の問題へ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
