import home from '../pages/home';
import todos from '../pages/todos';
import notFound from '../pages/pageNotFound';
const routes = {
  '/': home,
  '/todos': todos,
};
const Router = function (pathname) {
  const isValidRoute = Object.keys(routes).find((key) => key === pathname);
  //   console.log(isValidRoute);
  // loading and unloading pages into the div app
  const app = document.querySelector('#app');
  app.innerHTML = '';

  window.history.pushState({}, pathname, window.location.origin + pathname);
  if (isValidRoute === undefined) {
    app.appendChild(notFound());
  } else {
    app.appendChild(routes[window.location.pathname]());
  }
};

export { Router };
