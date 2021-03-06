import { observable, action } from 'mobx'
import { menuItems, MenuItemData } from './MenuItemData'

export class MenuStore {
	@observable menuItems: MenuItemData[] = []
	@observable selectedMenuItem = {}
	@observable open = false

	@action setItems = (items) => (this.menuItems = items)
	@action selectItem = (item) => {
		this.selectedMenuItem = item
	}
	@action getItems = () => this.menuItems
	@action toggleOpen = () => (this.open = !this.open)
	@action isOpen = () => this.open

	constructor(items) {
		this.setItems(items)
	}
}

const menuStore = new MenuStore(menuItems)
export { menuStore }
