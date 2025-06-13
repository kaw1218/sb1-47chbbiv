import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineItems } from '../data/timelineItems';
import { MessageSquare, FileText, GraduationCap, Users, BarChart, ArrowRight, Clock } from 'lucide-react';

const TrainingFlow: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-white" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-white" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-white" />;
      case 'Users':
        return <Users className="w-6 h-6 text-white" />;
      case 'BarChart':
        return <BarChart className="w-6 h-6 text-white" />;
      default:
        return <MessageSquare className="w-6 h-6 text-white" />;
    }
  };

  const getStepGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-blue-500 to-green-500',
      'from-green-500 to-blue-500',
      'from-cyan-500 to-blue-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="flow" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6">
            <Clock className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-semibold text-green-800">導入フロー</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            研修実施の流れ
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            初回相談から効果測定まで、全てのプロセスをサポートします。<br />
            助成金申請のサポートも含め、スムーズな導入をお約束します。
          </p>
        </div>

        {/* Hero Image - AIネットワーク */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&dpr=2" 
                alt="AIの流動的なネットワークとデータフロー"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-cyan-900/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">スムーズな導入フロー</h3>
                  <p className="text-xl opacity-90">初回相談から効果測定まで完全サポート</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${getStepGradient(index)} flex items-center justify-center shadow-xl mb-4`}>
                    {getIcon(item.icon)}
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="text-sm font-bold text-slate-500">STEP</span>
                    <div className="text-2xl font-bold text-slate-900">{index + 1}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Conditional Additional Content */}
                    {index === 0 && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                        <h4 className="font-bold text-blue-900 mb-2">無料ヒアリングの詳細</h4>
                        <p className="text-sm text-blue-800">
                          ヒアリングは無料で実施。Web会議または訪問にて約30分。
                          現状の課題や目標をお聞きし、最適なプランをご提案します。
                        </p>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                        <h4 className="font-bold text-green-900 mb-2">助成金申請サポート</h4>
                        <p className="text-sm text-green-800">
                          助成金申請に必要な書類は全て当社が作成をサポート。
                          申請の手続きもお任せいただけます。
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < timelineItems.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-32 transform translate-y-8">
                    <ArrowRight className="w-8 h-8 text-slate-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              今すぐ始めませんか？
            </h3>
            <p className="text-lg opacity-90 mb-8">
              最短翌営業日に対応可能です
            </p>
            <a
              href="#cta"
              className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              無料ヒアリングを予約する
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingFlow;