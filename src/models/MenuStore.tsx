import { observable, action } from 'mobx';

export class MenuStore {
    @observable menuItems = [];
    @observable selectedMenuItem = {};

    @action setItems = items => this.menuItems = items;
    @action selectItem = item => { this.selectedMenuItem = item; };
    @action getItems = () => this.menuItems;

    constructor(items) {
        this.setItems(items);
    }
}