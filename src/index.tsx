import ReactDOM from 'react-dom/client';
import App from './App';

import './services/firebase';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />
)