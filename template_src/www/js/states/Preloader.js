
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	init: function () {
		this.preloadBar = null;
		this.ready = false;
	},

	preload: function () {

		//	These are the assets we loaded in Boot.js				
		this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloaderBar');		
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	You can find all of these assets in the Phaser Examples repository

		this.load.image('starfield', 'assets/images/starfield.png');

		// Audio track Attribution (menu sci-fi 1.ogg, CC 3.0)
		// Alexandr-Zhelanov: https://soundcloud.com/alexandr-zhelanov 
		this.load.audio('bgm', ['assets/audio/menusci-fi1.ogg', 'assets/audio/menusci-fi1.mp3']);

	},

	create: function () {


		//this.state.start('MainMenu');


	},
	update: function () {

		if (this.cache.isSoundDecoded('bgm') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');

		}
	}

};
