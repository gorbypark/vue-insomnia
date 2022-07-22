import { generatePlayer } from './insomnia';

const VueInsomnia = {
	install(Vue) {
		// Create the video element with all it's attributes
		const vueInsomnia = generatePlayer();
		
		// Register the vueInsomnia method in all components
		Vue.mixin({
			methods: {
				vueInsomnia() {
					return {
						on() {
							vueInsomnia.play();
						},
						off() {
							vueInsomnia.pause();
						}
					};
				}
			}
		});
	}
};

export default VueInsomnia;