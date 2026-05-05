import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/base.css';
import '../styles/components.css';
import '../styles/layout.css';
import '../styles/main.css';
import '../styles/sections.css';
import '../styles/tokens.css';
import '../styles/utilities.css';

import Link from './components/common/Link/Link';
import Button from './components/common/Button/Button';
import PrimaryButton from './components/common/Button/PrimaryButton';
import SecondaryButton from './components/common/Button/SecondaryButton';
import SectionHeading from './components/common/SectionHeading/SectionHeading';

import { navigationData } from '../data/navigation';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import ContactSection from './components/sections/ContactSection/ContactSection';
import EducationSection from './components/sections/EducationSection/EducationSection';

function App() {
  return (
    <div>
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
      <EducationSection />
    </div>
  );
}

const root = document.getElementById('react-root');

if (root) {
  createRoot(root).render(<App />);
}
