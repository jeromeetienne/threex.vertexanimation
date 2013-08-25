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
THREEx.VertexAnimation 	= function(geometry, transformFct){
	transformFct	= transformFct || function(originPosition, actualPosition, now){
		var angle	= now*2 + actualPosition.y * 10;
		actualPosition.x= originPosition.x + Math.cos(angle)*0.1;
	}
	console.assert(geometry instanceof THREE.Geometry);

	// backup original vertices
	var nVertices	= geometry.vertices.length;
	var origVertices= new Array(nVertices)
	for(var i = 0; i < nVertices; i++){
		origVertices[i]	= geometry.vertices[i].clone();
	}
	geometry._origVertices	= origVertices
		
	// do the actual animation
	this.update	= function(delta, now){
		for(var i = 0; i < geometry.vertices.length; i++) {
			var origin	= geometry._origVertices[i];
			var position	= geometry.vertices[i];
			transformFct(origin, position, delta, now);
		}
		// mark the vertices as dirty
		geometry.verticesNeedUpdate = true;		
	}
}
