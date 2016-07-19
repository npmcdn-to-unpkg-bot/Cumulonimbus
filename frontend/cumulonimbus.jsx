const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//components
const App = require('./components/app.jsx');
const LoginForm = require('./components/login_form');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="login" component={LoginForm}/>

    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
