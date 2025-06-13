import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-16 pb-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            最新の<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI情報</span>をお届け
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            AI技術の最新動向や活用事例、セミナー情報などを定期的にお送りします
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <label className="inline-flex items-center mt-4 text-sm text-white/70">
            <input type="checkbox" className="mr-2 rounded" />
            <Link to="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</Link>に同意します
          </label>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-bold text-lg xl:text-xl leading-tight whitespace-nowrap">
                セムAIソリューション株式会社
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              AIと共に価値の創造へ
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 text-white">サービス</h3>
            <ul className="space-y-4">
              {[
                { name: 'AI eラーニングコース', href: '/#solutions' },
                { name: 'AIリスキリングコース', href: '/#solutions' },
                { name: '生成AI 1DAYマスター講座', href: '/#solutions' },
                { name: 'AI-X コンサルティング', href: '/ai-consulting' },
                { name: '経営コンサルティング', href: '/management-consulting' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-block group"
                  >
                    <span className="group-hover:text-blue-400">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 text-white">会社情報</h3>
            <ul className="space-y-4">
              {[
                { name: '会社概要', href: '/company#company-info' },
                { name: 'ビジョン・ミッション', href: '/company#vision-mission' },
                { name: '代表メッセージ', href: '/company#ceo-message' },
                { name: 'よくあるご質問', href: '/#faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-block group"
                  >
                    <span className="group-hover:text-blue-400">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 text-white">お問い合わせ</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white/90 block font-medium">s-ai-s@sehm.co.jp</span>
                  <span className="text-white/60 text-sm">24時間受付</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-white/90 block font-medium">092-622-2050</span>
                  <span className="text-white/60 text-sm">平日 9:00-18:00</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/90">
                  <span className="block font-medium">〒813-0034</span>
                  <span className="block">福岡県福岡市東区多の津一丁目10番8号</span>
                  <span className="block text-sm text-white/70 mt-1">FAX: 092-622-3794</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 space-y-2 md:space-y-0">
              {[
                { name: 'セムグループについて', href: 'https://www.sehmgroup.jp/' },
                { name: 'プライバシーポリシー', href: '/privacy-policy' },
                { name: '特定商取引法に基づく表記', href: '/commercial-transaction' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white/60 hover:text-white/80 transition-colors duration-300 text-sm flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-1 group-hover:text-blue-400" />
                  <span className="group-hover:text-blue-400">{link.name}</span>
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2025 セムAIソリューション株式会社. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;