import React from 'react';
import { Score, ResultType } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { RotateCcw, ClipboardCheck, CheckCircle2, Instagram } from 'lucide-react';

interface ResultScreenProps {
  score: Score;
  resultType: ResultType;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, resultType, onRestart }) => {
  
  // Chart Data
  const chartData = [
    { subject: 'Action', A: Math.max(20, Math.min(100, score.L * 1.2)), fullMark: 100 },
    { subject: 'Sense', A: Math.max(20, Math.min(100, score.E * 1.2)), fullMark: 100 },
    { subject: 'Aura', A: Math.max(20, Math.min(100, (score.L + score.E) / 1.5)), fullMark: 100 },
    { subject: 'Empathy', A: Math.max(20, Math.min(100, score.E * 1.5)), fullMark: 100 },
    { subject: 'Rizz', A: Math.max(20, Math.min(100, (score.L * 0.8 + score.E * 0.5))), fullMark: 100 },
  ];

  const getEmoji = (id: string) => {
    switch (id) {
      case 'FOX': return '🦊';
      case 'RETRIEVER': return '🐶';
      case 'RACCOON': return '🦝';
      case 'CAT': return '🐈';
      case 'BOAR': return '🐗';
      case 'RABBIT': return '🐰';
      case 'SLOTH': return '🦥';
      case 'ROCK': return '🪨';
      default: return '❓';
    }
  };

  const getGradient = (id: string) => {
    switch (id) {
      case 'FOX': return 'from-rose-400 to-pink-500';
      case 'RETRIEVER': return 'from-yellow-400 to-orange-400';
      case 'RACCOON': return 'from-indigo-400 to-blue-500';
      case 'CAT': return 'from-purple-400 to-violet-500';
      case 'BOAR': return 'from-red-500 to-orange-600';
      case 'RABBIT': return 'from-pink-300 to-rose-300';
      case 'SLOTH': return 'from-green-400 to-emerald-500';
      case 'ROCK': return 'from-gray-400 to-slate-500';
      default: return 'from-gray-400 to-slate-500';
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The Ultimate Flirting Vibe Check',
          text: `Am I cooked? 💀\nI got: ${resultType.title}\nAura Score: ${resultType.score}/100\n\nCheck your vibe here:`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied! Go roast your friends.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-6 animate-fade-in pb-10">
      
      {/* ID Card Result */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 relative transform transition-all hover:scale-[1.01]">
        
        {/* Top Banner - Height Increased to 16rem for Safety */}
        <div className={`min-h-[16rem] w-full bg-gradient-to-r ${getGradient(resultType.id)} p-8 flex flex-col items-center justify-start text-white text-center relative`}>
            {/* Texture Overlay */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <p className="text-[10px] md:text-xs font-bold opacity-80 mb-3 uppercase tracking-[0.3em] z-10">
              VIBE CHECK PASSED
            </p>
            
            {/* Title with extra bottom margin */}
            <h1 className="text-3xl md:text-4xl font-black break-keep leading-[1.1] shadow-sm drop-shadow-md z-10 max-w-[95%]">
              {resultType.title}
            </h1>
        </div>

        {/* Content Body */}
        <div className="px-6 pb-8 relative bg-white">
             {/* Profile Image / Avatar - Positioned absolutely */}
             {/* -top-14 means it moves up 3.5rem from the white body start. 
                 Since banner is 16rem, there is plenty of space for text. */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="w-28 h-28 rounded-full border-[6px] border-white bg-white shadow-xl flex items-center justify-center text-6xl overflow-hidden z-20 animate-bounce-slow">
                    {getEmoji(resultType.id)}
                </div>
            </div>

            {/* Spacer for Avatar */}
            <div className="pt-16 text-center space-y-2 mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 ${resultType.color} rounded-full text-xs font-bold border border-gray-200 shadow-sm`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    Aura Score: {resultType.score}
                </span>
                <p className="text-gray-500 text-sm font-semibold tracking-tight">{resultType.subtitle}</p>
            </div>

            {/* Description Box */}
            <div className="bg-slate-50 rounded-2xl p-6 text-sm md:text-base text-slate-700 leading-relaxed text-center break-keep border border-slate-100 mb-8 shadow-inner">
                {resultType.description}
            </div>

            {/* Chart */}
            <div className="h-48 w-full -ml-2">
                <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
                    <PolarGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }} />
                    <Radar
                    name="My Stats"
                    dataKey="A"
                    stroke="#ec4899"
                    strokeWidth={3}
                    fill="#ec4899"
                    fillOpacity={0.4}
                    />
                </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={handleShare}
          className="flex-1 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-500 text-white py-4 rounded-2xl font-bold hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-200 text-sm"
        >
          <Instagram size={20} />
          Share Vibe
        </button>
        <button 
          onClick={onRestart}
          className="flex-1 bg-white text-slate-800 border-2 border-slate-200 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
        >
          <RotateCcw size={20} />
          Try Again
        </button>
      </div>

      {/* Prescription Card */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-6 border border-white shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-5 relative z-10">
             <div className="bg-rose-100 p-2 rounded-lg">
                <ClipboardCheck className="w-5 h-5 text-rose-500" />
             </div>
             <h3 className="font-bold text-slate-800 text-lg">Your Prescription 💊</h3>
        </div>
        
        <div className="space-y-3 relative z-10">
          {resultType.advice.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
               <p className="text-sm text-slate-600 font-medium leading-snug">
                 {tip}
               </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Based on real vibes only
            </p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;