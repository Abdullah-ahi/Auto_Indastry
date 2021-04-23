import React, { Component } from 'react';
import './head.css';
import { Header } from 'components/Header';
import Car from './scene.gltf'

export class Head extends Component {

  componentDidMount(){
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 16;
    camera.position.y = 2;
    camera.position.x = 0;

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth - 17, window.innerHeight - 63.4);

    renderer.domElement.setAttribute('id', 'man');
    document.querySelector('main').append(renderer.domElement)

    window.addEventListener('resize', function(){
      const width = window.innerWidth - 17;
      const height = window.innerHeight - 63.4;
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    })

    const aLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(aLight);

    const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
    pLight.position.set(0, -3, 7);
    scene.add(pLight)

    const helper = new THREE.PointLightHelper(pLight);
    scene.add(helper)

    let loader = new THREE.GLTFLoader();
    let obj = null;
    loader.load(Car, function(gltf){
      obj = gltf;
      obj.scene.scale.set(1.3, 1.3, 1.3);

      scene.add(obj.scene)
    });
    function animate(){
      requestAnimationFrame(animate);

      if (obj){
        obj.scene.rotation.y -= 0.003;
      }
      renderer.render(scene, camera)
    }
    animate();
    this.setNews()
  }
  setNews = () => {
    const { news, setNews } = this.props
    let API = `https://newsapi.org/v2/everything?q=auto industry&apiKey=4e016d415a11418d81892362337c0730`
    const imgPlug = "https://techcrunch.com/wp-content/uploads/2019/01/GettyImages-958125096.jpg?w=600";
    !news.length &&
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setNews(data.articles)
    })
  }

  render(){
    const { Login } = this.props
    return(
      <div>
        <Header Login={Login}/>
        <main>
          
        </main>
      </div>
    )
  }
}