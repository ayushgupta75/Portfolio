import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/main.css';

import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import ContactSection from './components/sections/ContactSection/ContactSection';
import EducationSection from './components/sections/EducationSection/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection/ExperienceSection';
import HeroSection from './components/sections/HeroSection/HeroSection';
import AboutSection from './components/sections/AboutSection/AboutSection';
import PageShell from './components/layout/PageShell/PageShell';
import Footer from './components/layout/Footer/Footer';
import Main from './components/layout/Main/Main';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <PageShell>
      <Header />

      <Main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </Main>

      <Footer />
    </PageShell>
  );
}

const root = document.getElementById('react-root');

if (root) {
  createRoot(root).render(<App />);
}
