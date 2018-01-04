export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'fk-app-portal-about',
		children: 'about'
	}
}

export function getInitState() {
	return { data: {} }
}