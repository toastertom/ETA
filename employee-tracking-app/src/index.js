import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

//Styles
import './css/index.css';

//components
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ App }/>
        <Match exactly pattern="/store/:storeId" component={ App }/>
        <Miss component={ NotFound }/>
      </div>
    </BrowserRouter>
  );
};

render(<Root/>, document.querySelector('#main'));
