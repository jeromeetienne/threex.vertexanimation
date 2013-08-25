threex.vertexanimation
======================

threex.vertexanimation is a three.js extension which provide an vertexanimation for other developpers.
Thus they can copy it and start their own extension.

Show Don't Tell
===============
* [examples/basic.html](http://jeromeetienne.github.io/threex.vertexanimation/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.vertexanimation/blob/master/examples/basic.html)\] :
It shows a basic usage of the module.
* [examples/demo.html](http://jeromeetienne.github.io/threex.vertexanimation/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.vertexanimation/blob/master/examples/demo.html)\] :
It simply add a more shiny example using reflexion and environment map.

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
