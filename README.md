# README #

cordova-phaser is a cordova-cli template aimed to help create [Phaser.io](http://www.phaser.io/) games as android native apps.


 This README assumes that you are already familiar with [cordova-cli](https://cordova.apache.org/docs/en/latest/guide/cli/) and [Phaser.io](http://www.phaser.io/)


## STEPS ##
```
cordova create hello com.example.hello HelloWorld --template cordova-phaser

cd hello

cordova prepare
```



# NOTES #

This template is based on the *Responsive* template of Phaser project, and uses crosswalk webview plugin, installs *android* and *browser* cordova platforms.
Includes a .gitignore file.

This template works with iOS, if the requirements for cordova-cli are previously fulfilled, and iOS platform is added. Optionally you could remove android platform and crosswalk plugin.

Add iOS Platform:

 `cordova platform add iOS`

 Remove Android Platform:

 `cordova platform remove android`

 