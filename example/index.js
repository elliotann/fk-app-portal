import { config, start, componentFactory } from 'fk-meta-engine'
import * as mkComponents from 'fk-component'
import myConfig  from './config'

import fk_app_portal_about from './apps/fk-app-portal/apps/fk-app-portal-about/index.js'
import fk_app_portal_app1 from './apps/fk-app-portal/apps/fk-app-portal-app1/index.js'
import fk_app_portal_app2 from './apps/fk-app-portal/apps/fk-app-portal-app2/index.js'
import fk_app_portal from './apps/fk-app-portal/index.js'

const apps = {
		
	[fk_app_portal_about.name]: fk_app_portal_about,
	[fk_app_portal_app1.name]: fk_app_portal_app1,
	[fk_app_portal_app2.name]: fk_app_portal_app2,
	[fk_app_portal.name]: fk_app_portal,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()