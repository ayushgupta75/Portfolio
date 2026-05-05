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

function App() {
  return (
    <div>
      <Link href="https://www.example.com" external>
        Visit Example
      </Link>
    </div>
  );
}

const root = document.getElementById('react-root');

if (root) {
  createRoot(root).render(<App />);
}
