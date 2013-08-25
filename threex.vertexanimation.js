/**
 * declare THREEx namespace
 * @type {[type]}
 */
var THREEx	= THREEx	|| {};

/**
 * THREEx extension
 * 
 * @constructor
 */
THREEx.VertexAnimation 	= function(opts){
	var transformFct	= opts.transformFct || function(originPosition, actualPosition, now){
		var angle	= now*2 + actualPosition.y * 10;
		actualPosition.x= originPosition.x + Math.cos(angle)*0.1;
	}
	var geometry	= opts.geometry || console.assert(false);
	console.assert(opts.geometry instanceof THREE.Geometry);

	// backup original vertices
	var nVertices	= geometry.vertices.length;
	var origVertices= new Array(nVertices)
	for(var i = 0; i < nVertices; i++){
		var origin	= geometry.vertices[i].clone();
		origVertices[i]	= geometry.vertices[i].clone();
	}
	geometry._origVertices	= origVertices
		
	// do the actual animation
	this.update	= function(delta, now){
		for(var i = 0; i < geometry.vertices.length; i++) {
			var originPos	= geometry._origVertices[i];
			var actualPos	= geometry.vertices[i];
			opts.transform(originPos, actualPos, now);
		}
		// mark the vertices as dirty
		geometry.verticesNeedUpdate = true;		
	}
}
