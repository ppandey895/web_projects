// document.write("Hello, world from JS!");

import * as THREE from './node_modules/three/build/three.module.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

var scene, renderer, camera;
var cube;
var cameraCenter = new THREE.Vector3();
var cameraHorzLimit = 50;
var cameraVertLimit = 50;
var mouse = new THREE.Vector2();

init();
animate();

function init()
{
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( {antialias:true} );
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
    camera.position.y = 160;
    camera.position.z = 400;
    camera.lookAt(new THREE.Vector3(0,0,0));
    // cameraCenter.x = camera.position.x;
    // cameraCenter.y = camera.position.y;

    let loader = new GLTFLoader();
	loader.load('scene.gltf', function(gltf){
		scene.add(gltf.scene);
		// renderer.render( scene, camera);
	})

	new OrbitControls( camera, renderer.domElement);
    
	//set up mouse stuff
    // document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
}

function animate()
{   
    // updateCamera();
    requestAnimationFrame( animate );  
    renderer.render(scene, camera);
}

// function updateCamera() {
//     //offset the camera x/y based on the mouse's position in the window
//     camera.rotation.y = (cameraCenter.x + (cameraHorzLimit * mouse.x))/10;
//     camera.rotation.x = (cameraCenter.y + (cameraVertLimit * mouse.y))/10;
// }

// function onDocumentMouseMove(event) {
//     event.preventDefault();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// }

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// console.log(dat);















// ---------- Three JS for cube and plane ------------


// let scene, camera, renderer, cube, plane;

// const gui = new dat.GUI();
// const world = {
// 	plane: {
// 		width: 10
// 	}
// }
// gui.add(world.plane, 'width', 1, 20).
// 	onChange(() => {
// 		console.log(world.plane.width);
// 		plane.geometry.dispose();
// 		plane = new THREE.PlaneGeometry(world.plane.width, 10, 10, 10);
// 		// for(var i = 0; i < array.length; i += 3){
// 		// 	array[i+2] = z + Math.random();
// 		// }
// });

// let vel_x = 0.05;
// let vel_z = 0.01;

// let init = () => {

// 	scene = new THREE.Scene();
// 	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	
// 	renderer = new THREE.WebGLRenderer();
// 	renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
// 	renderer.setPixelRatio(devicePixelRatio);
// 	document.body.appendChild( renderer.domElement );

// 	const controls =  new OrbitControls(camera, renderer.domElement);
// 	const color = 0xFFFFFF;
// 	const intensity = 1;

// 	const planeGeo = new THREE.PlaneGeometry(5, 5, 10, 10);
// 	const planeMaterial = new THREE.MeshPhongMaterial({
// 		color: 0xff0000,
// 		side: THREE.DoubleSide,
// 		flatShading: THREE.FlatShading
// 	});
// 	plane = new THREE.Mesh( planeGeo, planeMaterial );

// 	const { array } = plane.geometry.attributes.position;
// 	for(var i = 0; i < array.length; i += 3){
		
// 		const x = array[i];
// 		const y = array[i+1];
// 		const z = array[i+2];
// 		array[i+2] = z + Math.random();
// 	}
// 	const cubeGeo = new THREE.IcosahedronGeometry();
// 	const material = new THREE.MeshPhongMaterial({
// 		color: 0x00ff90,
// 		side: THREE.DoubleSide
// 	})
// 	cube = new THREE.Mesh( cubeGeo, material );
	
// 	// scene.add( cube );
// 	scene.add( plane );

// 	const light = new THREE.DirectionalLight(0xffffff, 1);
// 	light.position.set(0, 0, 1)
// 	scene.add(light);
// 	camera.position.z = 5;
// 	plane.position.z = -2;

// }
// let animate = () => {
// 		requestAnimationFrame( animate );

// 		// cube.rotation.y += 0.05;

// 		// plane.rotation.z += 0.01;
// 		// plane.rotation.y += 0.01;
// 		cube.rotation.x += 0.01;
// 		cube.rotation.z += 0.01;

// 		renderer.render( scene, camera );
// }

// let onWindowRezise = () => {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

// }

// window.addEventListener('resize', onWindowRezise);
// init();
// animate();