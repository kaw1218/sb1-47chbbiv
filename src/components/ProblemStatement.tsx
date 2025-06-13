import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingDown, Clock, Users, AlertTriangle, XCircle, Zap } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full border border-red-300 mb-8">
            <AlertTriangle className="w-4 h-4 text-red-700 mr-2" />
            <span className="text-sm font-semibold text-red-800">危機的状況</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-relaxed space-y-4">
            <div className="mb-6 text-red-700">「AIを導入したが現場が活用できない…」</div>
            <div className="mb-6 text-red-700">「人材不足でDXが進まない…」</div>
            <div className="text-red-700">「教育コストが見合わない…」</div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 font-light">
            ──その課題、助成金を活用した"実務直結型"研修で解決できます。
          </p>
        </motion.div>

        {/* Problem Illustration */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2" 
                alt="AI導入に困っている日本人ビジネスマン"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">現状のAI導入課題</h3>
                <p className="text-lg opacity-90">座学止まりで現場定着率わずか18%</p>
              </div>
            </div>
            
            {/* Floating Problem Stats */}
            <div className="absolute -top-6 -right-6 bg-red-600 text-white rounded-2xl p-4 shadow-xl border-2 border-red-500">
              <div className="flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-2xl font-bold">18%</p>
                  <p className="text-sm opacity-90">定着率</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <TrendingDown className="w-8 h-8" />,
              title: "業務効率化が遅れると？",
              color: "from-red-500 to-red-600",
              bgColor: "from-red-50 to-red-100",
              borderColor: "border-red-300",
              textColor: "text-slate-800",
              items: [
                "競合はAI自動化で工数30〜50％削減を実現",
                "人件費高騰と採用難のダブルパンチで経営圧迫",
                "企画・顧客価値向上の時間を確保できず売上機会を逸失"
              ]
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "研修を外部依存した結果",
              color: "from-red-500 to-red-600",
              bgColor: "from-red-50 to-red-100",
              borderColor: "border-red-300",
              textColor: "text-slate-800",
              items: [
                "座学止まりで現場定着率わずか18％（当社調査）",
                "高額な導入コンサルを入れても半年で棚ざらしに",
                "研修内容と実務のギャップで導入効果が得られない"
              ]
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "組織的な取り組みが必要",
              color: "from-red-500 to-red-600",
              bgColor: "from-red-50 to-red-100",
              borderColor: "border-red-300",
              textColor: "text-slate-800",
              items: [
                "経営層〜現場まで全社横断的なAI理解が不可欠",
                "部門別の業務特性に合わせたカスタマイズが必要",
                "研修後の定着フォローなしでは効果が持続しない"
              ]
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${problem.bgColor} rounded-3xl p-8 shadow-lg border-2 ${problem.borderColor} hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Warning Pattern Background */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.3'%3E%3Cpath d='M20 0L30 20L20 40L10 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}></div>
              </div>

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${problem.color} text-white mb-6 shadow-lg relative z-10`}>
                {problem.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-6 ${problem.textColor} relative z-10`}>{problem.title}</h3>
              
              <ul className="space-y-4 relative z-10">
                {problem.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span className={`${problem.textColor} leading-relaxed`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-slate-200 relative overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  これらの課題を解決する方法があります
                </h3>
              </div>
              <p className="text-lg text-slate-700 mb-8">
                実務直結型AI研修で、確実に成果を出しませんか？
              </p>
              <a
                href="#solutions"
                className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                解決策を見る
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;