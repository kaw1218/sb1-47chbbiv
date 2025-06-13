import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Calendar, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/Gemini_Generated_Image_1amlnd1amlnd1aml (1).jpg" 
          alt="日本人ビジネスパーソンがAI技術を活用している様子"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-900/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-white flex flex-col justify-center min-h-screen pt-40 pb-24">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
              🚀 AI技術で企業変革を実現
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block text-white mb-4">最短1日で</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-black">
              "AIが使える組織"へ
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            補助金活用で実質負担
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              最大75％OFF
            </span>
            。<br />
            導入〜定着までフル伴走する"ワンストップAIリスキリング"で<br className="hidden lg:block" />
            生産性を劇的に向上。
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mt-12 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6" />
                無料相談を予約
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="mailto:s-ai-s@sehm.co.jp?subject=資料ダウンロード希望"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-3">
                <FileDown className="w-6 h-6" />
                資料ダウンロード
              </span>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,20 C300,120 800,0 1440,80 L1440,100 L0,100 Z" fill="currentColor"/>
      </svg>
    </section>
  );
};

export default Hero;