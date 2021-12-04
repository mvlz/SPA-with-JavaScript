import Dashboard from "./pages/Dashboard.js";
import Swap from "./pages/Swap.js";
import Store from "./pages/Store.js";
import Favorites from "./pages/Favorites.js";
import NFTs from "./pages/NFTs.js";
import NotFound from "./pages/NotFound.js";
function router() {
  const routes = [
    { path: "/" },
    { path: "/swap", view: Swap },
    { path: "/store", view: Store },
    { path: "/favorites", view: Favorites },
    { path: "/nfts", view: NFTs },
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
