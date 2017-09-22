import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <dvi>
        <switch>
            <Route path="/" component={App} />
        </switch>
    </dvi>
</BrowserRouter>

, document.querySelector('.root'));
registerServiceWorker();
