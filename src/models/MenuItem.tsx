export interface MenuItem {
    index: number,
    text: string,
    route?: string
}

const menuItems = [
    {
        index: 0,
        text: 'home',
        route: '/'
    }, {
        index: 1,
        text: 'about',
        route: '/contact'
    }, {
        index: 2,
        text: 'Login',
        route: '/login'
    }
];

export { menuItems };