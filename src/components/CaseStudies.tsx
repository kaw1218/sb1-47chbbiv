import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { caseStudies } from '../data/caseStudies';
import { Building, Clock, Quote, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            導入イメージ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            業種業態別
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            生成AIの活用は様々な業種・規模に関わらず、さまざまな企業で成果が出せます。<br />
            AI研修による業務効率化・コスト削減の活用例をご紹介します。
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-700 text-white p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">{caseStudy.industry}</h3>
                  </div>
                  <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                    {caseStudy.company.split('（')[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-slate-500 text-sm mb-2">
                  <span className="mr-4">
                    <span className="font-medium">コース:</span> {caseStudy.course}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {caseStudy.period}
                  </span>
                </div>
                
                <p className="font-medium text-slate-900 mb-4">
                  {caseStudy.results}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="bg-slate-50 p-3 rounded text-center">
                      <p className="text-xs text-slate-500 mb-1">{metric.label}</p>
                      <p className="text-blue-700 font-semibold text-sm">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {caseStudy.testimonial && (
                  <div className="bg-slate-50 p-4 rounded-lg relative">
                    <Quote className="w-5 h-5 text-blue-300 absolute top-2 left-2 opacity-50" />
                    <p className="text-sm text-slate-700 italic pl-6">
                      {caseStudy.testimonial.quote}
                    </p>
                    <div className="mt-2 text-right">
                      <p className="text-xs font-semibold text-slate-900">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-xs text-slate-500">
                        {caseStudy.testimonial.position}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-slate-700 mb-6">
            各業種業態への活用方法があります。
          </p>
          <a
            href="#cta"
            className="inline-block px-6 py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            類似事例について相談する
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;