export interface MenuItem {
    index: number,
    text: string,
    route?: string
}

const menuItems = [
    {
        index: 0,
        text: 'HOME',
        route: '/'
    }, {
        index: 1,
        text: 'ABOUT',
        route: '/contact'
    }
];

export { menuItems };