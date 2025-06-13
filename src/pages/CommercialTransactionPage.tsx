import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Building, CreditCard, Truck, RefreshCw, AlertCircle, Mail, Calendar } from 'lucide-react';

const CommercialTransactionPage: React.FC = () => {
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6">
              <FileText className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-800">法的表記</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              特定商取引法に基づく表記
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              特定商取引に関する法律に基づく表示事項
            </p>
          </motion.div>

          {/* Content */}
          <motion.div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200" variants={itemVariants}>
            <div className="space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">販売業者</h2>
                </div>
                <div className="ml-16 space-y-2 text-slate-700">
                  <p><strong>会社名：</strong>セムAIソリューション株式会社</p>
                  <p><strong>代表者：</strong>代表取締役 牛島 博臣</p>
                  <p><strong>所在地：</strong>〒813-0034 福岡県福岡市東区多の津一丁目10番8号</p>
                  <p><strong>電話番号：</strong>092-622-2050</p>
                  <p><strong>FAX番号：</strong>092-622-3794</p>
                  <p><strong>メールアドレス：</strong>s-ai-s@sehm.co.jp</p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">販売商品・サービス</h2>
                </div>
                <div className="ml-16">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                      AI技術研修サービス
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                      AI-X コンサルティングサービス
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                      経営コンサルティングサービス
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 shrink-0"></span>
                      DX推進支援サービス
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">販売価格・支払方法</h2>
                </div>
                <div className="ml-16 space-y-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2">販売価格</h3>
                    <p>各サービスの価格は、お客様のご要望に応じて個別にお見積もりいたします。詳細はお問い合わせください。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">支払方法</h3>
                    <ul className="space-y-1">
                      <li>• 銀行振込（前払い）</li>
                      <li>• 請求書払い（法人のお客様のみ、月末締め翌月末払い）</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">支払時期</h3>
                    <p>契約締結後、請求書発行から30日以内にお支払いください。</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">サービス提供時期</h2>
                </div>
                <div className="ml-16 text-slate-700">
                  <p>契約締結後、お客様との調整により決定いたします。具体的なスケジュールは契約書に明記いたします。</p>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">キャンセル・返金について</h2>
                </div>
                <div className="ml-16 space-y-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2">キャンセルポリシー</h3>
                    <ul className="space-y-2">
                      <li>• サービス開始日の14日前まで：キャンセル料なし</li>
                      <li>• サービス開始日の7日前〜13日前：料金の30%</li>
                      <li>• サービス開始日の3日前〜6日前：料金の50%</li>
                      <li>• サービス開始日の前日〜当日：料金の100%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">返金について</h3>
                    <p>当社の責に帰すべき事由によりサービスを提供できない場合は、お支払いいただいた料金を全額返金いたします。</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">その他の重要事項</h2>
                </div>
                <div className="ml-16 space-y-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-2">個人情報の取り扱い</h3>
                    <p>お客様の個人情報は、当社のプライバシーポリシーに従って適切に管理いたします。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">免責事項</h3>
                    <p>天災地変、戦争、暴動、労働争議等の不可抗力により、サービスの提供が困難となった場合、当社は責任を負いかねます。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">準拠法・管轄裁判所</h3>
                    <p>本取引に関する準拠法は日本法とし、紛争が生じた場合は福岡地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">お問い合わせ先</h3>
              </div>
              <div className="space-y-2 text-slate-700">
                <p><strong>セムAIソリューション株式会社</strong></p>
                <p>〒813-0034 福岡県福岡市東区多の津一丁目10番8号</p>
                <p>電話：092-622-2050（平日 9:00-18:00）</p>
                <p>メール：s-ai-s@sehm.co.jp</p>
              </div>
            </div>

            {/* Effective Date */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
                <Calendar className="w-4 h-4 text-slate-600 mr-2" />
                <span className="text-sm text-slate-600">制定日：2025年1月1日</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommercialTransactionPage;