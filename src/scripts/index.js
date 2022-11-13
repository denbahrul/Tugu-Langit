import 'regenerator-runtime';
import '../styles/detail.css';
import '../styles/detail-responsive.css';
import '../styles/style.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  content: document.querySelector('#contentPage'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
