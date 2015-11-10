book: learning-three-js-the-javascript-3d-library-for-webgl  
use python server: $python -m SimpleHTTPServer  
clone examples:  git clone https://github.com/josdirksen/learning-threejs  

```
  function render() {
   stats.update();
    scene.traverse(function(obj) {
    if (obj instanceof THREE.Mesh && obj != plane ) {
      obj.rotation.x+=controls.rotationSpeed;
      obj.rotation.y+=controls.rotationSpeed;
      obj.rotation.z+=controls.rotationSpeed;
    }
    });
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
```
 
Here, we see the THREE.Scene.traverse() function being used. We can pass a function to the traverse() function that will be called for each child of the scene. If a child itself has children, remember that a THREE.Scene object can contain a tree of objects. The traverse() function will also be called for all the children of that object. You traverse through the complete scene graph    

add(object)                                                 
  This is used to add an object to the scene. You can also use this function, as we will see later on, to create groups of objects.
  
children                                                      
  This returns a list of all the objects that have been added to the scene, including the camera and lights.  

getObjectByName(name,recursive)   
  When you create an object, you can give it a distinct name. The scene object has a function that you can use to directly return an object with a specific name. If you set the recursive argument to true, Three.js will also search through the complete tree of objects to find the object with the specified name.    

remove(object)  
  If you have a reference to an object in the scene, you can also remove it from the scene using this function.  

traverse(function)   
  The children property returns a list of all the children in the scene. With the traverse function, we can also access these children. With traverse, all the children are passed in to the supplied function one by one. fog This property allows you to set the fog for the scene. The fog will render a haze that hides faraway objects.  

overrideMaterial   
  With this property, you can force all the objects in the scene to use the same material.  


-- 
### Some properties ans function for a Geometry
05-custom-geometry , you can see a clone button at the top of the control GUI
Three.js, of course, supports using multiple materials when creating a mesh. You can use the SceneUtils.createMultiMaterialObject function for this, as shown in the following code:
```
var materials = [
new THREE.MeshLambertMaterial( { opacity:0.6, color: 0x44ff44, transparent:true } ),
new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } )
];
var mesh = THREE.SceneUtils.createMultiMaterialObject( geom,
materials);
```
What Three.js does in this function is that it doesn't create one THREE.Mesh object, but it creates one for each material you specified and puts these meshes in a group (a THREE.Object3D object). This group can be used in the same manner as you've used the scene object. You can add meshes, get objects by name, and so on. For instance, to make sure all the children of the group cast shadows, you do the following:  
```
 mesh.children.forEach(function(e) {e.castShadow=true});
```
Three.js also provides an alternative way of adding a wireframe using THREE.WireFrameHelper. To use this helper, first instantiate the helper like this:    
```
var helper = new THREE.WireframeHelper(mesh, 0x000000);  
```
You provide the mesh you want to show the wireframe for and the color  of the wireframe. Three.js will now create a helper object that you can  add to the scene, **scene.add(helper)**.  


### Some functions and attributes from mesh
Position   
  This determines the position of this object relative to the  position of its parent. Most often, the parent of an object is a THREE.Scene object or a THREE.Object3D object.  
rotation  
  With this property, you can set the rotation of an object around any of its axes. Three.js also provides specific functions for rotations around an axis: rotateX(), rotateY(), and rotateZ()   
scale  
  This property allows you to scale the object around its x, y, and z axes.  
translateX(amount)  
  This property moves the object the specified amount over the x axis. The same for y and z axis.  

For the translate functions, you could also use the translateOnAxis(axis, distance) function, which allows you to translate the mesh a distance along a specific axis.    

visible
  If you set this property to false, THREE.Mesh wont be rendered by Three.js. 
Chapter 2, example 06-mesh-properties.html

### Orthographic and perspective cameras

Example of switch function
```
this.switchCamera = function() {
if (camera instanceof THREE.PerspectiveCamera) {
camera = new THREE.OrthographicCamera( window.innerWidth / -
16, window.innerWidth / 16, window.innerHeight / 16,
window.innerHeight / - 16, -200, 500 );
camera.position.x = 120;
camera.position.y = 60;
camera.position.z = 180;
camera.lookAt(scene.position);
this.perspective = "Orthographic";
} else {
camera = new THREE.PerspectiveCamera(45, window.innerWidth /
window.innerHeight, 0.1, 1000);
camera.position.x = 120;
camera.position.y = 60;
camera.position.z = 180;
camera.lookAt(scene.position);
this.perspective = "Perspective";
}
};
```

####THREE.PerspectiveCamera:
**FOV**    
  stands for Field Of View. This is the part of the scene that can be seen from the position of the camera. Humans, for instance, have an almost 180-degree FOV, while some birds might even have a complete 360-degree FOV. But since a normal computer screen doesnt completely fill our vision, normally a smaller value is chosen. Most often, for games, a FOV between 60 and 90 degrees is chosen.  
  Good default: 50  
**Aspect**  
  This is the aspect ratio between the horizontal and vertical sizes of the area where we are to render the output. In our case, since we use the entire window, we just use that ratio. The aspect ratio determines the difference between the horizontal FOV and the vertical FOV, as you can see in the following image.   
Good default: window.innerWidth / window.innerHeight  
**near**  
  The near property defines from how close to the camera Three.js should render the scene. Normally, we set this to a very small value to directly render everything from the position of the camera. Good default: 0.1  
**far**  
  The far property defines how far the camera can see from the position of the camera. If we set this too low, a part of our scene might not be rendered, and if we set it too high, in some cases, it might affect the rendering performance. Good default: 1000  
**zoom**  
  The zoom property allows you to zoom in and out of the scene. When you use a number lower than 1, you zoom out of the scene, and if you use a number higher than 1, you zoom in. Note that if you specify a negative value, the scene will be rendered upside down. Good default value: 1
 
![Perspective_scheme](imgs/threejs/camIm0.jpg)   

####THREE.OrthographicCamera:
**left**  
  This is described in the Three.js documentation as Camera frustum left plane. You should see this as what is the left-hand border of what will be rendered. If you set this value to -100, you wont see any objects that are farther to the left-hand side.   
**right**  
  The right property works in a way similar to the left property, but this time, to the other side of the screen. Anything farther to the right won`t be rendered.  
**top**  
  This is the top position to be rendered.  
**bottom**   
  This is the bottom position to be rendered.  
**near**   
  From this point, based on the position of the camera, the scene will be rendered.    
**far**   
  To this point, based on the position of the camera, the scene will be rendered.    
**zoom**    
  This allows you to zoom in and out of the scene. When you use a number lower than 1, you'll zoom out of the scene; if you use a number higher than 1, you'll zoom in. Note that if you specify a negative value, the scene will be rendered upside down. The default value is 1.   

![Orthographic_scheme](imgs/threejs/camOr0.jpg)   

When you use the **lookAt** function, you point the camera at a specific position. You can also use this to make the camera follow an object around the scene. Since every **THREE.Mesh** object has a position that is a **THREE.Vector3** object, you can use the lookAt function to point to a specific mesh in the scene. All you need to do is this: **camera.lookAt(mesh.position)**. If you call this in the render loop, you`ll make the camera follow an object as it moves through the scene. 





