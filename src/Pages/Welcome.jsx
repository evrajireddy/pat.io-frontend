import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sketch from "react-p5";
import "./Welcome.css";

export default function Welcome() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const navigate = useNavigate(); // useNavigate for navigation

  // Hide the splash screen after 2.5 seconds and navigate to the languages page
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
      navigate("/language");
    }, 5500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const preload = (p5) => {
    // Preload assets (replace the paths with the correct ones)
    p5.svgImage = p5.loadImage('/assets/Logo.svg');
    p5.textSvg = p5.loadImage('/assets/Text.svg');
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.planeSize = Math.min(p5.windowWidth, p5.windowHeight) * 0.5;
    p5.frameRate(60);
    p5.pixelDensity(3);

    p5.particles = [];
    for (let i = 0; i < 900; i++) {
      p5.particles.push(new Particle(p5));
    }
  };

  const draw = (p5) => {
    p5.background(250);
    p5.translate(0, 0, 0);
    let pulse = p5.map(p5.sin(p5.frameCount * 0.02), -1, 1, 0.95, 1.05);
    p5.scale(pulse);

    p5.push();
    let zMovement = p5.sin(p5.frameCount * 0.01) * 300;
    p5.translate(0, -p5.planeSize / 1.5 + 50, zMovement);
    p5.texture(p5.textSvg);
    p5.noStroke();
    p5.plane(p5.planeSize * 0.8, p5.planeSize * 0.25);
    p5.pop();

    p5.push();
    p5.translate(0, 0, zMovement);
    p5.texture(p5.svgImage);
    p5.noStroke();
    p5.plane(p5.planeSize * 0.75, p5.planeSize * 0.75);
    p5.pop();

    let shading = p5.map(p5.mouseX, 0, p5.width, 150, 255);
    p5.ambientLight(shading);
    p5.directionalLight(255, 255, 255, 0, 1, 0);

    for (let i = p5.particles.length - 1; i >= 0; i--) {
      p5.particles[i].update();
      p5.particles[i].display(p5);
      if (p5.particles[i].isOffScreen()) {
        p5.particles.splice(i, 1);
        p5.particles.push(new Particle(p5));
      }
    }
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.planeSize = Math.min(p5.windowWidth, p5.windowHeight) * 0.5;
  };

  class Particle {
    constructor(p5) {
      this.p5 = p5; // Store the p5 instance
      this.x = this.p5.random(p5.width);
      this.y = this.p5.random(p5.height);
      this.z = this.p5.random(-500, 500); 
      this.size = this.p5.random(3, 6);  
      this.speedY = this.p5.random(1, 3); 
      this.speedX = this.p5.random(-0.5, 0.5); 
      this.alpha = this.p5.random(200, 255);  
      this.color = [this.p5.random(100, 255), this.p5.random(100, 255), this.p5.random(255)];
    }

    update() {
      this.y -= this.speedY; 
      this.x += this.speedX; 
      this.z += this.p5.random(-0.5, 0.5); 
      this.alpha -= 0.9;  

      if (this.isOffScreen()) {
        this.reset();
      }
    }

    display(p5) {
      p5.push();
      p5.noStroke();
      p5.emissiveMaterial(this.color[2], this.color[1], this.color[2], this.alpha); 
      p5.translate(this.x - p5.width / 2, this.y - p5.height / 2, this.z);
      p5.sphere(this.size);
      p5.pop();
    }

    isOffScreen() {
      return this.y < -100 || this.alpha <= 0;  
    }

    reset() {
      this.x = this.p5.random(this.p5.width);
      this.y = this.p5.random(this.p5.height);  
      this.z = this.p5.random(-500, 500);
      this.alpha = this.p5.random(200, 255); 
      this.size = this.p5.random(3, 6);  
      this.speedY = this.p5.random(1, 3);
      this.speedX = this.p5.random(-0.5, 0.5);  
      this.color = [this.p5.random(100, 255), this.p5.random(100, 255), this.p5.random(255)];  
    }
  }

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
    >
      {isSplashVisible ? (
        <Sketch
          preload={preload}
          setup={setup}
          draw={draw}
          windowResized={windowResized}
        />
      ) : null}
    </div>
  );
}
