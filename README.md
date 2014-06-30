500px-streamer
==============

A 500px real time streamer with [Nodejs](http://nodejs.org), [socket.io](http://socket.io) and the [500px API](https://github.com/500px/api-documentation).

## Modules

* [Express 4](http://expressjs.com)
* [socket.io](http://socket.io)
* [500px API wrapper](http://ro-ka.github.io/node-500px/)

## Usage

	git clone https://github.com/guilleliss/500px-streamer.git
	cd path/to/proyect/
	curl -s http://getcomposer.org/installer | php
	php composer.phar install
	php -S localhost:8080 -t web web/index.php

Then just point the browser to [http://localhost:3000](http://localhost:3000).