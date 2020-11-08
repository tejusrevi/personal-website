import * as THREE from 'three';
import React from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {lookAt} from './lookAt'

var scene = new THREE.Scene();
var light;
var ambientLight;
var camera;
var renderer;
var loader;

function getLights(){
    light = new THREE.PointLight(0x131c25,5,10,0);
    light.position.z = 4;
    light.name = 'pointLight';
    scene.add(light)
    ambientLight = new THREE.AmbientLight(0xb3c1ff,1);
    scene.add(ambientLight);
}

function getCamera(){
    camera = new THREE.PerspectiveCamera(
        45, 
        window.innerWidth / window.innerHeight,
        0.1, 
        1000 
    );
    camera.position.x = 0;
    camera.position.y = -0.08;
    camera.position.z = 2;
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
        camera.position.y = -0.1;
        camera.position.z = 2.4;
    }
    scene.add(camera);
}

function getRenderer(){
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('rgb(19,28,36)');
}

function loadModel(){
    loader = new GLTFLoader();
    var headMaterial = new THREE.MeshPhongMaterial({
        color: 0x2a3c4f,
        wireframe: true,
        skinning: true
    });
    loader.load(
        'models/head.gltf',
        function ( object ) {
            object.scene.traverse( function ( child ) {
                if ( child.isMesh ) {
                    child.material = headMaterial;
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.geometry.center()
                }  
            } );
            scene.add(object.scene)
        },
        function ( xhr ) {
        },
        function ( error ) {
        }
    );
}

var trueonce = true;

function update(){
    if (!(scene.getObjectByName('jaw') === undefined)){
        if(scene.getObjectByName('Sam') !== undefined && trueonce){
            trueonce=false;
        }
    }
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio( window.devicePixelRatio + 0.5 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    renderer.render(scene, camera);
    requestAnimationFrame(update);
}

var initial = true;
function init(){
    if(initial){
        getLights();
        getCamera();
        getRenderer();
        loadModel();
        
        var canvas = document.getElementById('root').appendChild(renderer.domElement);
        canvas.id = "canvas";
        lookAt(scene);
        update();
        initial = false
        renderer.setClearColor('rgb(255, 255, 255)');
    }
}


const Head = (props) => {
    return(
        <div >
            {init()}
        </div>
    )
}

export default Head;