import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Target, Users, Award, MapPin, Phone, Mail, Heart, Lightbulb, TrendingUp } from 'lucide-react';

const CompanyInfoPage: React.FC = () => {
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

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'イノベーション',
      description: '最新技術と創造的思考で、お客様の課題に革新的なソリューションを提供します。',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'パートナーシップ',
      description: 'お客様と共に歩み、長期的な成功を実現するパートナーとして信頼関係を築きます。',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '成果へのコミット',
      description: '確実な成果を出すことにコミットし、お客様の期待を上回る価値を提供します。',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const companyInfo = {
    name: 'セムAIソリューション株式会社',
    address: '〒813-0034 福岡県福岡市東区多の津一丁目10番8号',
    phone: '092-622-2050',
    fax: '092-622-3794',
    email: 's-ai-s@sehm.co.jp',
    capital: '1,000万円',
    business: 'AI技術研修・経営コンサルティング・DX支援'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2" 
            alt="現代的なオフィスビル"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white flex flex-col justify-center min-h-screen pt-40 pb-24">
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-black">
                  会社情報
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section id="vision-mission" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
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
              <Target className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">企業理念</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              ビジョン・ミッション
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              私たちは、AI技術を通じて企業の可能性を最大化し、<br />
              持続可能な成長と社会の発展に貢献します。
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-200"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6 shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ビジョン</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                AI技術を活用して、すべての企業が持続可能な成長を実現できる社会を創造する。
                技術の民主化を通じて、企業規模に関わらず誰もがAIの恩恵を受けられる未来を目指します。
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-200"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6 shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ミッション</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                実務に直結するAI研修と戦略的コンサルティングを通じて、企業の競争力向上と人材育成を支援する。
                お客様と共に歩み、確実な成果を実現するパートナーとして貢献します。
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 md:p-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-6 shadow-lg`}>
                    {value.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo-message" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6">
                <Users className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-semibold text-green-800">代表メッセージ</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                代表メッセージ
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2" 
                    alt="代表取締役"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
                  <blockquote className="text-lg text-slate-700 leading-relaxed mb-6">
                    私たちセム AI ソリューション株式会社は、セムグループの一員として誕生しました。
                    
                    <br /><br />
                    
                    いま、AI の急速な進化は産業構造そのものを塗り替え、企業を取り巻く環境を日々刷新しています。
                    しかし――技術そのものは目的ではなく、あくまで価値創出の手段です。
                    
                    <br /><br />
                    
                    当社は 「AI 技術 × 経営戦略」 の融合を核に、
                    
                    <br /><br />
                    
                    <strong>人材育成</strong> ―― 現場で使いこなせる人を育てる<br />
                    <strong>組織変革</strong> ―― 仕組み・文化をアップデートする<br />
                    <strong>事業成長</strong> ―― データと洞察で新たな収益源を拓く
                    
                    <br /><br />
                    
                    という三位一体の支援を通じて、お客様の「真の課題解決」にコミットいたします。
                    
                    <br /><br />
                    
                    単なるシステム導入にとどまらず、伴走型パートナーとして 持続可能な成長 をともに実現し、
                    その成果を 世のため、人のため に還元していく――それが私たちの使命です。
                    
                    <br /><br />
                    
                    お客様とともに歩み、ともに学び、ともに成長する。<br />
                    私たちは、未来への共創をここから始めます。
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-slate-600 text-sm mb-2">2025年4月</p>
                    <p className="font-bold text-slate-900 text-lg">代表取締役　牛島 博臣</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section id="company-info" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
              <Building className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">会社概要</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              会社情報
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">会社名</h3>
                    <p className="text-slate-700">{companyInfo.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">資本金</h3>
                    <p className="text-slate-700">{companyInfo.capital}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">事業内容</h3>
                    <p className="text-slate-700">{companyInfo.business}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      所在地
                    </h3>
                    <p className="text-slate-700">{companyInfo.address}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-600" />
                      電話・FAX
                    </h3>
                    <p className="text-slate-700">TEL: {companyInfo.phone}</p>
                    <p className="text-slate-700">FAX: {companyInfo.fax}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      メール
                    </h3>
                    <p className="text-slate-700">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfoPage;