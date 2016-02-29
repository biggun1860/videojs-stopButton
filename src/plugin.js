import videojs from 'video.js';

const defaults = {};
const Button = videojs.getComponent('Button');

export class StopButtonToggle extends Button {

  constructor(player, options) {
    super(player, options);
  }

  buildCSSClass() {
    return 'vjs-stop-button vjs-icon-square vjs-button vjs-control ${super.buildCSSClass()}';
  }

  handleClick() {
    let player = this.player();
    player.pause();
    player.currentTime(0);
    player.bigPlayButton.show();
    player.posterImage.show();
    this.trigger('stopped');
  }

}

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
const onPlayerReady = (player, options) => {
  player.stopButton(player);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function stopButton
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const stopButton = function(options) {
  let player = this;
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
    let stopButtonToggle = this.controlBar.addChild('StopButton', options);
    let volumeMenuButton = document.getElementsByClassName('vjs-volume-menu-button')[0];
    player.controlBar.el().insertBefore(StopButtonToggle.el(), volumeMenuButton);
  });
};

// Register the plugin with video.js.
videojs.plugin('stopButton', stopButton);

// Include the version number.
stopButton.VERSION = '__VERSION__';

export default stopButton;
