import './styles/style.css'
import * as THREE from 'three'
// Canvas

const canvas = document.querySelector("canvas.webgl")

console.log(THREE)
// Scene
const scene = new THREE.Scene();

// Sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', ()=>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize( sizes.width, sizes.height );
})


// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.z = 5
scene.add(camera)

// Geometry

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshNormalMaterial(); 
const mesh = new THREE.Mesh( geometry, material ); 
scene.add( mesh );

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize( sizes.width, sizes.height );



// document.body.appendChild( renderer.domElement );


// Animate
function animate() {
    requestAnimationFrame( animate )

    mesh.rotation.x +=0.01
    mesh.rotation.y +=0.01

    renderer.render(scene, camera)
    
}
animate()