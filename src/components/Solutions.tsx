import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Award, Crown, Zap, Users, Brain, Star, TrendingUp } from 'lucide-react';
import { trainingPackages } from '../data/trainingPackages';

const Solutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString('ja-JP');
  };

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'elearning':
        return <Users className="w-8 h-8" />;
      case 'reskilling':
        return <Brain className="w-8 h-8" />;
      case 'oneday':
        return <Crown className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
    }
  };

  const getPackageGradient = (id: string, isPopular: boolean = false) => {
    if (isPopular) return 'from-blue-500 to-blue-600';
    switch (id) {
      case 'elearning':
        return 'from-blue-500 to-cyan-500';
      case 'reskilling':
        return 'from-blue-500 to-blue-600';
      case 'oneday':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <section id="solutions" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-8 shadow-lg">
            <Zap className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-bold text-blue-800">ソリューション</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            3つの
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              プレミアム研修パッケージ
            </span>
          </h2>
          
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            全社×現場×経営層の三層を網羅する唯一のAI研修プログラム。<br />
            短期間でAIを実務に直結させ、劇的な業務効率化を実現します。
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 text-center">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/Gemini_Generated_Image_wqb6irwqb6irwqb6.jpg" 
                alt="日本人チームがAI研修を受けている様子"
                className="w-full h-96 object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-blue-900/60"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    実務直結型AI研修
                  </h3>
                  <p className="text-xl opacity-90">
                    座学で終わらない、現場で使えるスキルを習得
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="text-2xl font-bold text-green-600">95%</p>
                  <p className="text-xs text-slate-600">満足度</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {trainingPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                pkg.isPopular 
                  ? 'border-blue-300 ring-4 ring-blue-100' 
                  : 'border-slate-200 hover:border-blue-200'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 text-center relative overflow-hidden">
                    <div className="flex items-center justify-center">
                      <Crown className="w-5 h-5 mr-2" />
                      <span className="font-bold">最も選ばれています</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              )}
              
              <div className={`p-8 md:p-10 ${pkg.isPopular ? 'pt-20' : ''}`}>
                {/* Package Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-xl ${
                  pkg.isPopular 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : `bg-gradient-to-r ${getPackageGradient(pkg.id)} text-white`
                }`}>
                  {getPackageIcon(pkg.id)}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{pkg.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    {pkg.hours}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-2 text-lg">{pkg.description}</p>
                <p className="text-sm text-slate-500 mb-8">対象：{pkg.targetAudience}</p>
                
                {/* Pricing */}
                <div className="mb-8">
                  {pkg.discountedPrice ? (
                    <>
                      <div className="flex items-center mb-2">
                        <p className="text-slate-400 line-through text-lg">{formatPrice(pkg.price)}円/人</p>
                        <span className="ml-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold">
                          助成金適用
                        </span>
                      </div>
                      <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {formatPrice(pkg.discountedPrice)}円
                        <span className="text-lg text-slate-500 font-normal">/人</span>
                      </p>
                    </>
                  ) : (
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {formatPrice(pkg.price)}円
                      <span className="text-lg text-slate-500 font-normal">/3名</span>
                    </p>
                  )}
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {pkg.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                      <p className="text-xs text-slate-500 mb-2">{benefit.title}</p>
                      <p className="text-blue-700 font-bold text-lg">{benefit.value}</p>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-blue-500/25'
                }`}>
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              どのコースが最適かわからない？
            </h3>
            <p className="text-lg opacity-90 mb-8">
              無料相談で、御社に最適なプランをご提案します
            </p>
            <a
              href="#cta"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              無料相談を予約する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;