import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Zap, TrendingUp, Users, CheckCircle2, ArrowRight, Lightbulb, BarChart3, Cog } from 'lucide-react';

const AIConsultingPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI戦略策定',
      description: '企業の現状分析から始まり、AI導入の優先順位と具体的なロードマップを策定します。',
      features: [
        '現状業務プロセス分析',
        'AI導入可能性評価',
        '投資対効果シミュレーション',
        '段階的導入計画の立案'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'AI実装支援',
      description: '戦略に基づいた具体的なAIソリューションの実装をトータルサポートします。',
      features: [
        'AIツール選定・導入',
        'カスタムAIソリューション開発',
        'システム統合・連携',
        '運用体制構築'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: '効果測定・改善',
      description: 'AI導入後の効果を定量的に測定し、継続的な改善をサポートします。',
      features: [
        'KPI設定・モニタリング',
        '効果測定レポート',
        '改善提案・実装',
        '長期的な最適化'
      ],
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const caseStudies = [
    {
      industry: '製造業',
      challenge: '品質検査の自動化',
      solution: 'AI画像認識による不良品検出システム',
      result: '検査時間70%削減、検出精度99.2%達成',
      roi: '投資回収期間8ヶ月'
    },
    {
      industry: '小売業',
      challenge: '需要予測の精度向上',
      solution: 'AI需要予測システム',
      result: '在庫コスト30%削減、売上機会損失50%減',
      roi: '年間利益2,000万円向上'
    },
    {
      industry: 'サービス業',
      challenge: '顧客対応の効率化',
      solution: 'AIチャットボット・音声認識システム',
      result: '対応時間60%短縮、顧客満足度15%向上',
      roi: '人件費年間1,500万円削減'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Gemini_Generated_Image_4agecm4agecm4age.jpg" 
            alt="AI技術を活用する日本人ビジネスパーソン"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/60"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white flex flex-col justify-center min-h-screen pt-40 pb-24">
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white mb-6">企業のAI活用を</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] text-4xl md:text-6xl lg:text-7xl font-black">
                戦略から実装まで
              </span>
              <span className="block text-white mt-6">トータルサポート</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI戦略策定から実装、効果測定まで。<br />
              企業の競争力を飛躍的に向上させる
              <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-X コンサルティング
              </span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-12 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#cta"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Brain className="w-5 h-5" />
                  無料AI診断を受ける
                </span>
                <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            className="text-center mb-20"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6"
              variants={itemVariants}
            >
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">サービス内容</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              AI-X コンサルティング
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                3つのサービス
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              戦略策定から実装、効果測定まで、企業のAI活用を包括的にサポートします
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 md:p-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6">
              <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-800">導入実績</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              AI導入成功イメージ
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              様々な業界でAI活用による劇的な業務改善を実現するイメージをご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl inline-block mb-6">
                  <span className="font-semibold">{study.industry}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{study.challenge}</h3>
                <p className="text-slate-600 mb-4">{study.solution}</p>
                
                <div className="bg-white p-4 rounded-xl mb-4">
                  <p className="text-blue-700 font-semibold">{study.result}</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl">
                  <p className="text-blue-800 font-bold">{study.roi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <Lightbulb className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-white/90">AI活用診断</span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              あなたの会社の
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI活用可能性を診断
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              無料診断で、御社に最適なAI活用戦略をご提案します
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#cta"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  無料AI診断を申し込む
                </span>
                <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultingPage;