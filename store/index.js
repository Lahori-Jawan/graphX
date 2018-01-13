export const state = () => ({
	route: ''
});

export const mutations = {
	ADD_ROUTE(state, route) {
		state.route = route.path
	}
};
