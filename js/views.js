

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerHeight, innerWidth, 1, 1000);
  camera.position.set(0, 10, 0) 
  scene.add(camera);
  var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );
  
  const renderer = new THREE.WebGLRenderer(true);
  
  function render(){
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    
  }
  render();



