import { action, observable } from 'mobx'

export class AppStore {
	@observable loaded: boolean

	@observable appIsLoaded = () => this.loaded
	@action toggleLoaded = () => {
		this.loaded = !this.loaded
	}

	constructor() {
		this.loaded = false
	}
}

const appStore = new AppStore()
export { appStore }
