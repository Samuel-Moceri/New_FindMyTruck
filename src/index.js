/**
 * Import : NPM (Yarn)
 */
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Import : local
 */
import App from 'src/components/App';

/**
 * REACT element 
 */
const rootReactElement = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

