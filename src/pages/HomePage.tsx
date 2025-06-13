import React from 'react';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Solutions from '../components/Solutions';
import SubsidyGuide from '../components/SubsidyGuide';
import TrainingFlow from '../components/TrainingFlow';
import CaseStudies from '../components/CaseStudies';
import FaqSection from '../components/FaqSection';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Solutions />
      <SubsidyGuide />
      <TrainingFlow />
      <CaseStudies />
      <FaqSection />
      <ContactForm />
    </>
  );
};

export default HomePage;