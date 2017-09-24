// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react'
import { getAsyncInjectors } from 'utils/asyncInjectors'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './containers/App'
import Main from './containers/Main'
import Login from './containers/Login'

const routes = () => (
  <Router history={hashHistory}>
    <Route path="/">
      <Route component={App}>
        <IndexRoute component={Main} />
        <Route path="/?:query?"component={Main} />
        <Route path= "/login" component={Login} />
      </Route>
    </Route>
  </Router>
);

export default routes;


// export default function createRoutes(store) {
//   // Create reusable async injectors using getAsyncInjectors factory
//   const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

//   return [
//     {
//       path: '/',
//       name: 'home',
//       getComponent(nextState, cb) {
//         const importModules = Promise.all([
//           import('containers/HomePage'),
//         ]);

//         const renderRoute = loadModule(cb);

//         importModules.then(([component]) => {
//           renderRoute(component);
//         });

//         importModules.catch(errorLoading);
//       },
//     }, {
//       path: '*',
//       name: 'notfound',
//       getComponent(nextState, cb) {
//         import('containers/NotFoundPage')
//           .then(loadModule(cb))
//           .catch(errorLoading);
//       },
//     },
//   ];
// }
