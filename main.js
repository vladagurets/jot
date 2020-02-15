import App from './src/App.svelte';

String.prototype.uglify = function() {
  return this.replace(/(?:\r\n|\r|\n)/g, '')
}

const app = new App({
	target: document.body,
});

export default app;