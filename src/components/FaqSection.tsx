import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleFaq = (index: number) => {
    if (openFaqId === index) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(index);
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200 mb-6">
            <HelpCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-semibold text-green-800">よくあるご質問</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            FAQ
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            AI研修に関するよくあるご質問にお答えします。<br />
            その他のご質問は、お気軽にお問い合わせください。
          </p>
        </div>

        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              transition={{ duration: 0.4 }}
            >
              <button
                className="w-full text-left p-8 focus:outline-none flex justify-between items-center group"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-bold text-slate-900 pr-4 group-hover:text-blue-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center transition-all duration-300 ${
                  openFaqId === index ? 'rotate-180' : ''
                }`}>
                  {openFaqId === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaqId === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-700 border-t border-slate-200 pt-6 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">他にもご質問がございますか？</h3>
            </div>
            <p className="text-lg opacity-90 mb-8">
              専門スタッフが丁寧にお答えいたします。
            </p>
            <a
              href="#cta"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              お問い合わせ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;