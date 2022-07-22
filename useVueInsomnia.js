import { ref }            from 'vue';
import { generatePlayer } from './insomnia';

const insomnia = ref(generatePlayer());

const actions = {
	enableVueInsomnia: () => insomnia.play(),
	disableVueInsomnia: () => insomnia.pause(),
}

export const useVueInsomnia = () => ({
	...actions
});