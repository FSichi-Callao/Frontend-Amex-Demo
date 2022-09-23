export const getRoutesOrderForMenu = (id, routes) => {

    var updateValue = routes.map((resValue, idx) => idx === id
        ? { ...resValue, open: !resValue.open }
        : { ...resValue, open: false }
    );

    return updateValue;
}


export const getRoutesOrderForSubMenu = (idMenu, idSubMenu, routes) => {

    var updateValue = routes.map((resValue, idx) => idx === idMenu
        ? orderRouteWithSubMenu(resValue, idSubMenu)
        : { ...resValue, open: false }
    );

    return updateValue;
}


const orderRouteWithSubMenu = (route, idSubMenu) => {

    var routeEdit = route;

    var subRouteEdit = route.submenu.map((subRoute, idx) => idx === idSubMenu
        ? { ...subRoute, open: !subRoute.open }
        : { ...subRoute, open: false }
    );

    routeEdit.submenu = subRouteEdit;

    return routeEdit;
}