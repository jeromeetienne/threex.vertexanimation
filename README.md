threex.vertexanimation
======================
threex.vertexanimation is a [three.js games extension] (http://www.threejsgames.com/extensions/) which provides easy vertex animation. You can see your object move as if it's got a life of its own! You can use it to make the objects in your game bounce, dance or move in funky ways. You can add it in your games to get a [Flubber](http://en.wikipedia.org/wiki/Flubber_(film)) effect. The best part about it is that you can get creative. You can morph or deform your objects to transform them into other objects. It is really fun to experiment with! 

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.vertexanimation/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.vertexanimation/blob/master/examples/basic.html)\] :
It shows a basic usage of the module.
* [examples/demo.html](http://jeromeetienne.github.io/threex.vertexanimation/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.vertexanimation/blob/master/examples/demo.html)\] :
It simply add a more shiny example using reflexion and environment map.


A Screenshot
============
[![screenshot](https://raw.githubusercontent.com/jeromeetienne/threex.vertexanimation/master/examples/images/screenshot-threex-vertexanimation-512x512.jpg)](http://jeromeetienne.github.io/threex.vertexanimation/examples/demo.html)

How To Install It
=================

You can install it via script tag

```html
<script src='threex.vertexanimation.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.vertexanimation
```

How To Use It
=============

Here is a typical usage

```javascript
// instanciate the animation object
var animation	= new THREEx.VertexAnimation(geometry, function(origin, position, delta, now){
	// here you put your formula, something clever which fit your needs
	var angle	= now*2 + position.y	 * 10;
	position.x	= origin.x + Math.cos(angle)*0.1;	
})
// update the animation at every frame
updateFcts.push(function(delta, now){
	animation.update(delta, now)
})
```
