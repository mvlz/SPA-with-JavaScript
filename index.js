function router(){
    const routes = [
        {path: "/", view: ()=> console.log("dashboard page")},
        {path: "/posts", view: ()=> console.log("posts page")},
        {path: "/store", view: ()=> console.log("store page")}
    ];
    const potentialRoutes = routes.map(item=>{
        return{
            route: item,
            isMatch: location.pathname === item.path,
        };
    })
    let match = potentialRoutes.find( route => route.isMatch);
    
    if (!match) {
        match={
            route:{path: "/not-found", view: ()=> console.log("404 page")},
            isMatch: true,
        }
    }
    console.log(match.route.view());
}

document.addEventListener("DOMContentLoaded", router)
