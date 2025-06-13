import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'ホーム', href: '/' },
  { label: 'AI-Xコンサル', href: '/ai-consulting' },
  { label: '経営コンサル', href: '/management-consulting' },
  { label: '会社情報', href: '/company' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href: string) => {
    // 同じページの場合はトップにスクロール
    if (location.pathname === href) {
      scrollToTop();
    }
    // モバイルメニューを閉じる
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => handleNavClick('/')}>
            <div className="relative">
              <div className={`w-16 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mr-3 shadow-lg ${
                isScrolled ? 'shadow-blue-500/25' : 'shadow-white/25'
              }`}>
                <span className="text-white font-bold text-sm">SAI</span>
              </div>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 whitespace-nowrap ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              セム<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI</span>ソリューション
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg whitespace-nowrap ${
                  location.pathname === item.href
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-blue-300 bg-white/10'
                    : isScrolled 
                      ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group whitespace-nowrap"
            >
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full py-6 px-6 shadow-xl rounded-b-3xl border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 px-4 py-3 rounded-lg ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-slate-200 pt-4">
                <Link
                  to="/contact"
                  className="block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg"
                  onClick={() => handleNavClick('/contact')}
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;