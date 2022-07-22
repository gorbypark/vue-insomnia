import { reactive, readonly } from 'vue';
import { generatePlayer }     from './insomnia';

const state = reactive({
	insomnia: generatePlayer()
});

const getters = {
};

const actions = {
	enableVueInsomnia: () => state.insomnia.play(),
	disableVueInsomnia: () => state.insomnia.pause(),
}

export const useVueInsomnia = () => ({
	state: readonly(state),
	...getters,
	...actions
});