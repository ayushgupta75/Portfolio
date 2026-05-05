import React from 'react';
import { createRoot } from 'react-dom/client';
// TODO Import styles

function App() {
  return <div>React setup</div>;
}

const root = document.getElementById('react-root');

if (root) {
  createRoot(root).render(<App />);
}
