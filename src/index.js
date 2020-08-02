import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryOne from './pages/CategoryOne';
import CategoryTwo from './pages/CategoryTwo';
import CategoryThree from './pages/CategoryThree';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/comeback-trailers" component={CategoryOne} />
      <Route path="/bu-videos" component={CategoryTwo} />
      <Route path="/solo-songs" component={CategoryThree} />
      <Route path="/register/video" component={NewVideo} />
      <Route path="/register/category" component={NewCategory} />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
