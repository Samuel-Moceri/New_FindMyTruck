import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';import Header from './components/Header';


const rootReactElement = (
    <BrowserRouter>
      <App />
    </BrowserRouter>

);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

