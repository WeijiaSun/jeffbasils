import React, { Component } from 'react';

class Chase extends Component {

  componentDidMount() {

    var bee = document.getElementById("bee");
    document.addEventListener("mousemove", getCoordinatesMouse); 
    document.addEventListener("touchstart", getCoordinatesTouch); 
    document.addEventListener("touchmove", getCoordinatesTouch); 

    bee.style.position = "absolute"; //css		
    var beepos = {x: 0, y: 0};

    setInterval(followMouse, 25);
    
    var mouse = {x: 0, y: 0}; //mouse.x, mouse.y
    
    var dir = "right";
    function getCoordinatesMouse(e){
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > beepos.x){
            dir = "right";
        } else {
            dir = "left";
        }
    }

    function getCoordinatesTouch(e){
        var touch = e.changedTouches[0]
        mouse.x = touch.pageX;
        mouse.y = touch.pageY;
        //Checking directional change
        if(mouse.x > beepos.x){
            dir = "right";
        } else {
            dir = "left";
        }
    }
    
    function followMouse(){
        //1. find distance X , distance Y
        var distX = mouse.x - beepos.x;
        var distY = mouse.y - beepos.y;
        //Easing motion
        //Progressive reduction of distance 
        beepos.x += distX/5;
        beepos.y += distY/2;
        
        bee.style.left = beepos.x + "px";
        bee.style.top = beepos.y + "px";
  
        //Apply css class 
        if (dir === "right"){
            bee.setAttribute("class", "right");
        } else {
            bee.setAttribute("class", "left");        
        }
        
    }
  }

  render() {
    return (
        <div id="bee"> 
            <img src="/images/basilJ30.png" alt="the Jeff basil"/>
        </div>
    );
  }
}

export default Chase;
