# AstroneerAstropedia

## About this repository

**AstroneerAstropedia** is the out-of-box *Astropedia* of the [Astroneer](https://astroneer.space/) game and is focused on keeping things clear and easy to use and learn. All content here is findable inside the game, in [Xbox Live Account](https://account.xbox.com/en-us/Profile), and/or the official [Atroneer Wiki](https://astroneer.fandom.com/wiki).

The main objective to use this APP is to help in-game avoid the action of opening the *Astropedia* in-game all time and/or research for content on the internet. With this APP you will have the *Astropedia* content in your hand as an "extra" screen to see only content not related to the gameplay itself.

## Stack

The app is creating using the following technologies

- React Native
- Expo
- Yarn
- VSCode
- TypeScript

## Prototype

The prototype of the app was created at this [Figma](https://www.figma.com/file/NDuwttYiIcqmzR14iiwiFk/Astropedia?node-id=0%3A1) project

## App information

The app privacy policy can be found here: [Astropedia APP Privacy Policy](https://middlewaredev.home.blog/2021/11/20/astropedia-app-privacy-policy/)

The app is available in the Google Play Store here: [Astropedia](https://play.google.com/store/apps/details?id=com.middlewaredev.astropedia)

Trello of this project: [Astropedia Trello](https://trello.com/b/9738AS16)

## Run on your machine (for Windows)

### Install NPX

1. Go to [https://nodejs.org/en](https://nodejs.org/en) and download the latest version of Node
2. Install the Node
3. Open the terminal and test the command

~~~shell
$ npx -v
9.5.0
~~~

### Install yarn

1. Use the NPM to install yarn

~~~shell
$ npm install --global yarn
added 1 package in 306ms
~~~

2. Use the yarn to install the expo module

~~~shell
$ yarn add expo
yarn add v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
info There appears to be trouble with your network connection. Retrying...
[3/4] Linking dependencies...
.
.
.
└─ regenerator-transform@0.15.1
Done in 202.09s.
~~~

### Use the Expo CLI with NPX 

1. Use the NPX command in terminal to run and install the Expo CLI

~~~shell
$ npx expo -h
Need to install the following packages:
  expo@48.0.9
Ok to proceed? (y) y
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

  Usage
    $ npx expo <command>

  Commands
    start, export, export:web
    run:ios, run:android, prebuild
    install, customize, config
    login, logout, whoami, register

  Options
    --version, -v   Version number
    --help, -h      Usage info

  For more info run a command with the --help flag
    $ npx expo start --help
~~~

2. 