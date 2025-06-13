import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building, Clock } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:s-ai-s@sehm.co.jp?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `お名前: ${formData.name}\n会社名: ${formData.company}\nメールアドレス: ${formData.email}\n電話番号: ${formData.phone}\n\nお問い合わせ内容:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

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
    <section id="cta" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
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
            <Mail className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">お問い合わせ</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            variants={itemVariants}
          >
            まずは
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              無料相談
            </span>
            から始めませんか？
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            御社の課題をお聞かせください。最適なAI研修プランをご提案いたします。
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-200"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">お問い合わせフォーム</h3>
              <p className="text-slate-600">
                下記フォームにご記入いただくか、直接メールでお問い合わせください。
              </p>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="山田 太郎"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    電話番号
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="092-622-2050"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                >
                  <option value="">選択してください</option>
                  <option value="AI研修について">AI研修について</option>
                  <option value="AI-Xコンサルティングについて">AI-Xコンサルティングについて</option>
                  <option value="経営コンサルティングについて">経営コンサルティングについて</option>
                  <option value="助成金について">助成金について</option>
                  <option value="資料請求">資料請求</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="ご質問やご相談内容をお聞かせください。現在の課題や目標などもお書きいただけると、より具体的なご提案が可能です。"
                  />
                </div>
              </div>

              <a
                href={`mailto:s-ai-s@sehm.co.jp?subject=${encodeURIComponent(formData.subject || 'お問い合わせ')}&body=${encodeURIComponent(
                  `お名前: ${formData.name}\n会社名: ${formData.company}\nメールアドレス: ${formData.email}\n電話番号: ${formData.phone}\n\nお問い合わせ内容:\n${formData.message}`
                )}`}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                メールで送信
              </a>

              <p className="text-sm text-slate-500 text-center">
                送信ボタンを押すと、メールアプリが起動します
              </p>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">お問い合わせ先</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">メール</h4>
                    <a 
                      href="mailto:s-ai-s@sehm.co.jp" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      s-ai-s@sehm.co.jp
                    </a>
                    <p className="text-sm text-slate-500 mt-1">24時間受付</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">電話</h4>
                    <a 
                      href="tel:092-622-2050" 
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      092-622-2050
                    </a>
                    <p className="text-sm text-slate-500 mt-1">平日 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">所在地</h4>
                    <p className="text-slate-700">
                      〒813-0034<br />
                      福岡県福岡市東区多の津一丁目10番8号
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-900">対応時間</h3>
              </div>
              
              <div className="space-y-3 text-blue-800">
                <div className="flex justify-between">
                  <span>メール対応</span>
                  <span className="font-semibold">24時間受付</span>
                </div>
                <div className="flex justify-between">
                  <span>電話対応</span>
                  <span className="font-semibold">平日 9:00-18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>返信目安</span>
                  <span className="font-semibold">1営業日以内</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;