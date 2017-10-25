import { observable, action } from 'mobx';
import { menuStore } from './MenuStore';

export class AppStore {
    @observable loaded: Boolean;

    @action toggleLoaded = () => { this.loaded = !this.loaded };
    @action appIsLoaded = () => this.loaded;

    constructor() {
        this.loaded = false;
    }
}

const appStore =  new AppStore();
export { appStore };
