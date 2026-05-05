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
import Navigation from './components/layout/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation items={navigationData} />
      <Link isContact href="https://www.example.com" external>
        Visit Example
      </Link>

      <PrimaryButton>See projects</PrimaryButton>
      <SecondaryButton>Contact me</SecondaryButton>
      <SectionHeading>Section Heading</SectionHeading>
      <SectionHeading compact>Section Heading Compact</SectionHeading>
    </div>
  );
}

const root = document.getElementById('react-root');

if (root) {
  createRoot(root).render(<App />);
}
