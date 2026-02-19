const routes = [];
routes.push({
    to: "/",
    text: "home",
    private: false
})
routes.push({
    to: "/blog",
    text: "blog",
    private: false
})
routes.push({
    to: "/profile",
    text: "profile",
    private: true
})
routes.push({
    to: "/login",
    text: "login",
    publicOnly: true,
    private: false
})
routes.push({
    to: "/logout",
    text: "logout",
    private: true
})

export { routes }