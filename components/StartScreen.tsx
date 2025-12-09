import React from 'react';
import { Sparkles, MessageCircleHeart, ArrowRight, Flame } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-10 animate-fade-in p-6 relative">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      {/* Main Content */}
      <div className="z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:scale-105 transition-transform cursor-default">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-bold text-gray-700 tracking-wide">AM I COOKED?</span>
        </div>

        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 drop-shadow-sm">
            The Ultimate<br />
            <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Vibe Check</span>
          </h1>
          <MessageCircleHeart className="absolute -top-6 -right-2 w-10 h-10 md:w-14 md:h-14 text-pink-500 rotate-12 animate-bounce" />
        </div>

        <p className="text-gray-600 text-lg md:text-xl font-medium break-keep leading-relaxed px-4">
          Are you a <span className="text-indigo-600 font-bold">Vibe Curator</span> or just <span className="text-gray-500 font-bold">NPC Energy</span>?<br className="hidden md:block"/>
          Find out your dating archetype in 10 questions.
        </p>
      </div>

      {/* Stats Card (Fake) */}
      <div className="glass p-5 md:p-6 rounded-2xl w-full max-w-xs mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300 border border-white/60 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs text-gray-400 font-mono">checking_aura.exe</span>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-gray-500">
              <span>Red Flags</span>
              <span>0%</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[5%] bg-red-400"></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-gray-500">
              <span>Main Character Energy</span>
              <span>100%</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onStart}
        className="group relative w-full max-w-xs mx-auto py-4 bg-black text-white rounded-2xl font-bold text-xl shadow-2xl hover:bg-gray-900 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
      >
        Get Roasted
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <p className="text-xs text-gray-400 font-medium opacity-70">※ Warning: Emotional damage is guaranteed.</p>
    </div>
  );
};

export default StartScreen;