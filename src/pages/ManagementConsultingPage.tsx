import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, TrendingUp, Users, Lightbulb, BarChart3, Zap, CheckCircle2, ArrowRight, Building, Compass, Rocket, Crown, Star, Award, Clock, DollarSign, FileText, Briefcase, Factory, Laptop, ChevronRight, Gauge, Shield, Sparkles } from 'lucide-react';

const ManagementConsultingPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [subsidyRef, subsidyInView] = useInView({
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
      icon: <Compass className="w-12 h-12" />,
      title: '経営戦略策定',
      subtitle: '迷いのない成長への道筋を描く',
      description: '「どこに向かえばいいかわからない」そんな経営の迷いを解消し、明確な成長戦略を策定します。',
      painPoints: [
        '競合に後れを取っている',
        '新規事業の方向性が見えない',
        '投資判断に迷いがある'
      ],
      solutions: [
        '市場・競合分析で勝てるポジションを発見',
        'SWOT分析で御社の真の強みを可視化',
        '実現可能な中長期経営計画を共同策定'
      ],
      outcomes: [
        { metric: '売上成長率', value: '平均35%向上', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: '市場シェア', value: '平均1.8倍拡大', icon: <Target className="w-5 h-5" /> },
        { metric: '投資効率', value: 'ROI 250%達成', icon: <DollarSign className="w-5 h-5" /> }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: '業務改善・DX推進',
      subtitle: 'アナログ業務を一気にデジタル化',
      description: '「まだ手作業でやってるの？」そんな非効率な業務を最新技術で劇的に改善します。',
      painPoints: [
        '手作業が多く時間がかかる',
        'システムが古くて使いにくい',
        'データ活用ができていない'
      ],
      solutions: [
        '業務プロセスを徹底分析し、ムダを特定・排除',
        '最適なDX戦略を策定し、段階的に実行',
        '現場に合ったシステム導入と運用をサポート'
      ],
      outcomes: [
        { metric: '業務効率', value: '平均60%向上', icon: <BarChart3 className="w-5 h-5" /> },
        { metric: '処理時間', value: '平均70%短縮', icon: <Clock className="w-5 h-5" /> },
        { metric: 'コスト削減', value: '年間2,000万円', icon: <DollarSign className="w-5 h-5" /> }
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: '組織・人材開発',
      subtitle: '人が育つ、組織が強くなる',
      description: '「優秀な人材が育たない」「組織がバラバラ」そんな人の問題を根本から解決します。',
      painPoints: [
        '優秀な人材が定着しない',
        'リーダーが育たない',
        '組織の一体感がない'
      ],
      solutions: [
        '成長を促進する組織設計と人事制度を構築',
        '次世代リーダーを育成する体系的プログラム',
        '社員のモチベーションを高める人材育成システム'
      ],
      outcomes: [
        { metric: '離職率', value: '平均50%改善', icon: <Users className="w-5 h-5" /> },
        { metric: '社員満足度', value: '平均40%向上', icon: <Star className="w-5 h-5" /> },
        { metric: '生産性', value: '平均45%向上', icon: <Award className="w-5 h-5" /> }
      ],
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    }
  ];

  const subsidyPrograms = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: '新事業進出補助金',
      description: '新分野展開・業態転換・事業再編等の取組を支援',
      maxAmount: '7,000万円（特例9,000万円）',
      coverage: '1/2',
      details: '新設・上限大幅拡大、賃上げ特例',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        '新市場進出・新商品開発',
        '業態転換・事業再編',
        '設備投資・システム導入',
        '専門家活用・マーケティング'
      ]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'ものづくり補助金',
      description: '革新的サービス開発・試作品開発・生産プロセス改善を支援',
      maxAmount: '4,000万円',
      coverage: '1/2（小規模2/3）',
      details: '上限＋収益納付撤廃',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        '革新的な製品・サービス開発',
        '生産性向上のための設備投資',
        'デジタル化・自動化推進',
        '試作品開発・実証実験'
      ]
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'IT導入補助金',
      description: 'ITツール導入による業務効率化・売上向上を支援',
      maxAmount: '450万円（通常枠）3,000万円（連携枠）',
      coverage: '1/2〜4/5',
      details: '連携枠補助率を明確化、3/4→4/5追加',
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'ソフトウェア導入・クラウド利用',
        'セキュリティ対策強化',
        'EC・デジタル化推進',
        'テレワーク環境整備'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '小規模事業者持続化補助金',
      description: '小規模事業者の販路開拓・生産性向上の取組を支援',
      maxAmount: '200万円（創業型）50万円（通常）',
      coverage: '2/3（条件で3/4）',
      details: '枠を４類型に再編、50万円枠を明記',
      gradient: 'from-orange-500 to-red-500',
      features: [
        '販路開拓・マーケティング',
        'ホームページ・EC構築',
        '店舗改装・設備導入',
        '広告宣伝・展示会出展'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Gemini_Generated_Image_fdx5bzfdx5bzfdx5.jpg" 
            alt="経営コンサルティングの相談風景"
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
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white mb-6">企業の成長を</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] text-4xl md:text-6xl lg:text-7xl font-black">
                戦略的に加速
              </span>
              <span className="block text-white mt-6">させる経営コンサルティング</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              戦略策定から実行まで、企業の持続的成長を実現する<br />
              <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                トータル経営支援
              </span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-12 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Building className="w-5 h-5" />
                  無料経営診断を受ける
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
              経営の課題を
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                根本から解決する3つのアプローチ
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              「どこに向かえばいいかわからない」「業務が非効率すぎる」「人が育たない」<br />
              そんな経営の悩みを、戦略・業務・組織の3つの観点から解決します
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
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-slate-700 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <div className="p-8">
                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Pain Points */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      こんなお悩みありませんか？
                    </h4>
                    <div className="space-y-2">
                      {service.painPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start text-sm">
                          <ChevronRight className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      私たちの解決策
                    </h4>
                    <div className="space-y-2">
                      {service.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                      期待できる成果
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className={`bg-gradient-to-r ${service.bgGradient} p-3 rounded-xl border ${service.borderColor} flex items-center justify-between`}>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center mr-3">
                              {outcome.icon}
                            </div>
                            <span className="text-sm font-medium text-slate-700">{outcome.metric}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900">{outcome.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <span>このサービスについて相談する</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subsidy Support Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            ref={subsidyRef}
            className="text-center mb-20"
            initial="hidden"
            animate={subsidyInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6"
              variants={itemVariants}
            >
              <FileText className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-800">補助金活用</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              補助金申請支援で
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                投資負担を大幅軽減
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              各種補助金の申請から採択まで、豊富な実績を持つ専門家が完全サポート。<br />
              設備投資・システム導入・新事業展開の費用負担を大幅に軽減します。
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={subsidyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000&h=400&dpr=2" 
                  alt="補助金申請書類と電卓"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-blue-900/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">補助金申請支援</h3>
                    <p className="text-xl opacity-90">申請から採択まで完全サポート</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16"
            initial="hidden"
            animate={subsidyInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {subsidyPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} text-white mb-6 shadow-lg`}>
                    {program.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-xl mb-4 border border-slate-200">
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-600">上限額（最大）</span>
                        <span className="font-bold text-blue-700 text-sm">{program.maxAmount}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-600">補助率</span>
                        <span className="font-bold text-green-700 text-sm">{program.coverage}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-2 p-2 bg-white/50 rounded">
                        <span className="font-medium">主な修正点:</span> {program.details}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Support Process */}
          <motion.div
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={subsidyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                申請サポートの流れ
              </h3>
              <p className="text-lg text-slate-700">
                申請から採択まで、経験豊富な専門家が完全サポートします
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: '補助金診断', detail: '最適な補助金制度の選定・申請可能性の評価' },
                { step: '2', title: '申請書作成', detail: '事業計画書・申請書類の作成支援' },
                { step: '3', title: '申請・審査', detail: '申請手続き代行・審査対応サポート' },
                { step: '4', title: '採択・実行', detail: '採択後の手続き・実績報告まで完全サポート' }
              ].map((process, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-600">{process.detail}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                補助金申請について相談する
              </a>
            </div>
          </motion.div>
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
              <span className="text-sm font-medium text-white/90">経営診断</span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              あなたの会社の
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                成長可能性を診断
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              無料診断で、御社の課題と成長戦略をご提案します
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <ArrowRight className="w-5 h-5" />
                  無料経営診断を申し込む
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

export default ManagementConsultingPage;