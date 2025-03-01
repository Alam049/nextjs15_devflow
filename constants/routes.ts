const ROUTES = {
    HOME: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    NOT_FOUND: '/not-found',
    PROFILE: (id:string) => `/profile/${id}`,
    TAGS:(id:string) => `/tags/${id}`
};

export default ROUTES;