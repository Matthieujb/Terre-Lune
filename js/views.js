

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerHeight, window.innerWidth, 1, 1000);
camera.position.set(0, 0, 0);
scene.add(camera);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(0, 0, 0)


var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );




const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);

  new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('asset/texture_earth-5400x2700.jpg'),
      bumpMap: THREE.ImageUtils.loadTexture('asset/texture_earth-5400x2700.jpg'),
      bumpScale:   0.005,
      specularMap: THREE.ImageUtils.loadTexture('asset/texture_earth-5400x2700.jpg'),
      specular: new THREE.Color('grey')      })
  );

  new THREE.Mesh(
    new THREE.SphereGeometry(90, 64, 64), 
    new THREE.MeshBasicMaterial({
      map: THREE.ImageUtils.loadTexture('asset/stars-1920x1080.jpg'), 
      side: THREE.BackSide
    })
  );
}
render(camera, scene);



