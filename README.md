500px-streamer
==============

A 500px real time streamer with [Nodejs](http://nodejs.org), [socket.io](http://socket.io) and the [500px API](https://github.com/500px/api-documentation).

Online demo at [http://pics-stream.ap01.aws.af.cm/stream](http://pics-stream.ap01.aws.af.cm/stream)

## Modules

* [Express 4](http://expressjs.com)
* [socket.io](http://socket.io)
* [500px API wrapper](http://ro-ka.github.io/node-500px/)

## Usage

	git clone https://github.com/guilleliss/500px-streamer.git path/to/proyect/
	cd path/to/proyect/
	npm install
	npm start

Then just point the browser to [http://localhost:3000](http://localhost:3000).

## TODO

* Orgnanize socket.io calls in routes in a better way. 
* Extend to more functionalities (maps, realtime statistics)