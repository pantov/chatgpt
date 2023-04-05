export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b578af73.js","imports":["_app/immutable/entry/start.b578af73.js","_app/immutable/chunks/index.accb6135.js","_app/immutable/chunks/singletons.e92d05bd.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.eeff6384.js","imports":["_app/immutable/entry/app.eeff6384.js","_app/immutable/chunks/index.accb6135.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
