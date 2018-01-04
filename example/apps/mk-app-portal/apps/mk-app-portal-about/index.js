import config from './config'
import * as data from './data'

export default {
	name: "fk-app-portal-about",
	version: "1.0.0",
	description: "fk-app-portal-about",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "fk-app-portal-about")
	}
}