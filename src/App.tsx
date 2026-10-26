/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Language } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectEstimator, EstimatorResult } from './components/ProjectEstimator';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [prefillEstimator, setPrefillEstimator] = useState<EstimatorResult | null>(null);

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    scrollToSection('kontak');
  };

  const handleExploreWork = () => {
    scrollToSection('karya');
  };

  const handleOpenEstimator = () => {
    scrollToSection('kalkulator');
  };

  const handleSendToContact = (result: EstimatorResult) => {
    setPrefillEstimator(result);
    scrollToSection('kontak');
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-neutral-100 selection:bg-blue-600 selection:text-white flex flex-col antialiased">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenConsultation={handleOpenConsultation}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onExploreWork={handleExploreWork}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* Services & Capabilities */}
        <Services currentLang={currentLang} />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator
          currentLang={currentLang}
          onSendToContact={handleSendToContact}
        />

        {/* Portfolio & Case Studies */}
        <Portfolio currentLang={currentLang} />

        {/* Client Endorsements & Proof */}
        <Testimonials currentLang={currentLang} />

        {/* FAQ */}
        <FaqSection currentLang={currentLang} />

        {/* Consultation & Lead Capture */}
        <ContactSection
          currentLang={currentLang}
          prefillEstimator={prefillEstimator}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
