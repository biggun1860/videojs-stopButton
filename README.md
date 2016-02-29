# videojs-stop-button

A video.js plugin that displays a stop button in the control bar

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save videojs-stop-button
```

## Usage

To include videojs-stop-button on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-stop-button.min.js"></script>
<script>
  var player = videojs('my-video');

  player.stopButton();
</script>
```

### Browserify

When using with Browserify, install videojs-stop-button via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-stop-button');

var player = videojs('my-video');

player.stopButton();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-stop-button'], function(videojs) {
  var player = videojs('my-video');

  player.stopButton();
});
```

## License

Apache-2.0. Copyright (c) 


[videojs]: http://videojs.com/
