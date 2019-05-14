# vue-insomnia

Prevents the display of a mobile device from going to sleep by playing a small (6kb) mp4 video that's positioned off screen on a loop.

## Installation

Import into your project using npm or yarn.

`yarn add vue-insomnia` or `npm install --save vue-insomnia`

In your main.js (or equivalent) import and then use vue-insomnia.

```
import vueInsomnia from "vue-insomnia";

Vue.use(vueInsomnia);
```

## Usage

There are two methods globally available, vueInsomnia().on() and vueInsomnia().off(), to toggle screen wake lock on and off, respectively. For example, to turn on the wake lock when a component is loaded:

```
mounted: {
  this.vueInsomnia().on();
}
```

or to use in a component template:

Add a method

```
methods: {
  wakeLockOn() {
    this.vueInsomnia().on();
  },
  wakeLockOff() {
    this.vueInsomnia().off();
  }
}
```

and then use the method:

```
<button @click="wakeLockOn">Wake Lock on</button>
```
