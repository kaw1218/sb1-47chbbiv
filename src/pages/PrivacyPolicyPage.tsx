import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, FileText, Calendar, Mail } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-200 mb-6">
              <Shield className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">個人情報保護</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              プライバシーポリシー
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              セムAIソリューション株式会社における個人情報の取り扱いについて
            </p>
          </motion.div>

          {/* Content */}
          <motion.div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200" variants={itemVariants}>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-slate-700 leading-relaxed">
                  セムAIソリューション株式会社（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、
                  個人情報の保護に関する法律、その他の関係法令等を遵守し、お客様の個人情報を適切に取り扱います。
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の定義</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    本プライバシーポリシーにおいて「個人情報」とは、個人情報の保護に関する法律第2条第1項に定義される個人情報を指します。
                    具体的には、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                    特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）をいいます。
                  </p>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の収集</h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      当社は、以下の場合に個人情報を収集することがあります：
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        お問い合わせフォームからのご連絡時
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        サービスのお申し込み時
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        セミナーや研修へのお申し込み時
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        メールマガジンの配信登録時
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の利用目的</h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      当社は、収集した個人情報を以下の目的で利用いたします：
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        お客様からのお問い合わせへの対応
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        サービスの提供・運営
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        セミナーや研修の実施・運営
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        メールマガジンの配信
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        サービス向上のための分析・改善
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        新サービスや重要なお知らせの案内
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の第三者提供</h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        法令に基づく場合
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        人の生命、身体または財産の保護のために必要がある場合
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                        国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の安全管理</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
                    また、個人情報を取り扱う従業者や委託先に対して、必要かつ適切な監督を行います。
                  </p>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">個人情報の開示・訂正等</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    お客様は、当社が保有するお客様の個人情報について、開示、訂正、追加、削除、利用停止、消去および第三者提供の停止を求めることができます。
                    これらのご請求については、下記のお問い合わせ先までご連絡ください。
                  </p>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Cookieの使用について</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    当社のウェブサイトでは、サービスの利便性向上のためCookieを使用する場合があります。
                    Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。
                    ただし、Cookieを無効にした場合、ウェブサイトの一部機能がご利用いただけない場合があります。
                  </p>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">8</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">プライバシーポリシーの変更</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed ml-11">
                    当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。
                    変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                  </p>
                </section>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">お問い合わせ先</h3>
                </div>
                <div className="space-y-2 text-slate-700">
                  <p><strong>会社名：</strong>セムAIソリューション株式会社</p>
                  <p><strong>住所：</strong>〒813-0034 福岡県福岡市東区多の津一丁目10番8号</p>
                  <p><strong>電話：</strong>092-622-2050</p>
                  <p><strong>メール：</strong>s-ai-s@sehm.co.jp</p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
                  <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                  <span className="text-sm text-slate-600">制定日：2025年1月1日</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;