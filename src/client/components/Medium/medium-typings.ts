export interface IMediumPost {
	title: string
	pubDate: string
	link: string
	guid: string
	author: string
	thumbnail: string
	description: string
	content: string
	enclosure: object
	categories: string[]
}

export interface IMediumAuthorMetadata {
	url: string
	title: string
	link: string
	author: string
	description: string
	image: string
}
