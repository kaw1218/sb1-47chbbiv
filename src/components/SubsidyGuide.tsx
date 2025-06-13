import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Calculator, HelpCircle, CheckCircle, DollarSign, TrendingDown } from 'lucide-react';

const SubsidyGuide: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [participantCount, setParticipantCount] = useState(10);
  const [selectedCourse, setSelectedCourse] = useState('reskilling');
  
  const getPricePerPerson = () => {
    switch (selectedCourse) {
      case 'elearning':
        return 69800;
      case 'reskilling':
        return 248000;
      case 'oneday':
        return 79800 / 3;
      default:
        return 0;
    }
  };

  const getDiscountedPrice = () => {
    switch (selectedCourse) {
      case 'elearning':
        return 17450;
      case 'reskilling':
        return 62000;
      case 'oneday':
        return 79800 / 3;
      default:
        return 0;
    }
  };

  const totalOriginal = getPricePerPerson() * participantCount;
  const totalDiscounted = getDiscountedPrice() * participantCount;
  const savings = totalOriginal - totalDiscounted;
  const savingsPercentage = Math.round((savings / totalOriginal) * 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="subsidy" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6"
              variants={itemVariants}
            >
              <DollarSign className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">コスト削減</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              <div className="mb-6">厚生労働省の助成金で</div>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                最大75%OFF
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              厚生労働省の助成金を活用して、AI研修コストを大幅に削減できます。<br />
              申請手続きは社労士の元で作成支援するので、手間も最小限です。
            </motion.p>
          </div>

          {/* Hero Image */}
          <motion.div
            className="mb-20 text-center"
            variants={itemVariants}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=1000&h=400&dpr=2" 
                  alt="助成金について説明する日本人コンサルタント"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">助成金活用で大幅コスト削減</h3>
                    <p className="text-xl opacity-90">申請手続きは社労士が完全サポート</p>
                  </div>
                </div>
              </div>
              
              {/* Cost Reduction Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl px-8 py-4 shadow-xl">
                <div className="flex items-center">
                  <TrendingDown className="w-6 h-6 mr-2" />
                  <span className="font-bold text-2xl">最大75%OFF</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column: Subsidy Information */}
            <motion.div 
              className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-200"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">人材開発支援助成金とは</h3>
              </div>
              
              <div className="space-y-6 text-slate-700 mb-8">
                <p className="text-lg leading-relaxed">
                  雇用保険適用事業所が、従業員に対して職業訓練を行った場合に、
                  訓練経費や訓練期間中の賃金の一部を助成する制度です。
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="font-bold mb-4 text-slate-900 text-lg">助成率</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-2">中小企業</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">最大75%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-2">大企業</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">最大60%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8 mb-8">
                <h4 className="font-bold mb-6 text-slate-900 text-lg">当社のサポート内容</h4>
                <ul className="space-y-4">
                  {[
                    '申請計画書の作成サポート',
                    '必要書類の準備と提出代行',
                    '実績報告書の作成支援',
                    '労働局とのやり取り代行'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-blue-800">よくある質問</h4>
                </div>
                <p className="text-sm text-slate-700">
                  「申請は難しくないの？」「本当に受給できる？」といった疑問も、
                  豊富な申請実績を持つ社労士がサポートするので安心です。
                </p>
              </div>
            </motion.div>

            {/* Right Column: Calculator */}
            <motion.div 
              className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-200"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">費用シミュレーター</h3>
              </div>
              
              <div className="space-y-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    コースを選択
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  >
                    <option value="elearning">AI eラーニングコース</option>
                    <option value="reskilling">AIリスキリングコース</option>
                    <option value="oneday">生成AI 1DAYマスター講座</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    受講人数: {participantCount}名
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={participantCount}
                    onChange={(e) => setParticipantCount(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1名</span>
                    <span>25名</span>
                    <span>50名</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl mb-8 border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-600 font-medium">通常料金:</span>
                  <span className="text-slate-800 font-bold text-lg">
                    {totalOriginal.toLocaleString()}円
                  </span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-600 font-medium">助成金適用後:</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {totalDiscounted.toLocaleString()}円
                  </span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl flex justify-between items-center border border-blue-200">
                  <span className="text-blue-700 font-bold">削減額:</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-700">
                      {savings.toLocaleString()}円
                    </span>
                    <span className="ml-3 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                      {savingsPercentage}% OFF
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="#cta"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  詳細を無料相談で聞く
                </a>
                <p className="mt-4 text-sm text-slate-500">
                  お客様に最適なプランをご提案します
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidyGuide;