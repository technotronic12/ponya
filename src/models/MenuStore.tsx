import { observable, action } from 'mobx';
import { MenuItem, menuItems } from './MenuItem';

export class MenuStore {
    @observable menuItems: MenuItem[] = [];
    @observable selectedMenuItem = {};

    @action setItems = items => this.menuItems = items;
    @action selectItem = item => { this.selectedMenuItem = item; };
    @action getItems = () => this.menuItems;

    constructor(items) {
        this.setItems(items);
    }
}

const menuStore =  new MenuStore(menuItems);
export { menuStore };
