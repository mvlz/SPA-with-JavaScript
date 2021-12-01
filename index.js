import Dashboard from "./pages/Dashboard.js";
import Store from "./pages/Store.js";
import Posts from "./pages/Posts.js";
import NotFound from "./pages/NotFound.js";
function router() {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Store },
    { path: "/store", view: Posts },
  ];
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: NotFound },
      isMatch: true,
    };
  }
  document.querySelector(".container").innerHTML = match.route.view();
  // console.log(match.route.view());
}

function navigateTo(URL) {
  history.pushState(null, null, URL);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
