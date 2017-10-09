import { observable, action } from 'mobx';
import { menuStore } from './MenuStore';

export class AppStore {
    @observable loaded: Boolean;
    @observable menuStore;

    @action toggleLoaded = () => { this.loaded = !this.loaded };
    @action appIsLoaded = () => this.loaded;

    constructor() {
        this.loaded = false;
        this.menuStore = menuStore;
    }
}

const appStore =  new AppStore();
export { appStore };
