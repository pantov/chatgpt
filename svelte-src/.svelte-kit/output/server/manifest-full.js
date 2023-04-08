export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2fa14955.js","imports":["_app/immutable/entry/start.2fa14955.js","_app/immutable/chunks/index.accb6135.js","_app/immutable/chunks/singletons.f2ed8f80.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d177d9ef.js","imports":["_app/immutable/entry/app.d177d9ef.js","_app/immutable/chunks/index.accb6135.js"],"stylesheets":[],"fonts":[]}},
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
