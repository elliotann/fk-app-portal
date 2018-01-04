__webpack_public_path__ = window["__pub_fk-app-portal__"];

const data = require('./data')
const config = require('./config')
require('./mock.js')
require('./style.less')

export default {
    name: "fk-app-portal",
    version: "1.0.0",
    description: "fk-app-portal",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}