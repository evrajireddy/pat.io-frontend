import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Sketch from "react-p5";
import "./Welcome.css";

export default function Welcome() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [lights, setLights] = useState([]);
  const navigate = useNavigate(); // useNavigate for navigation

  // Hide the splash screen after 15 seconds and navigate to the languages page
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
      navigate("/language"); // Navigate to the language page after 15 seconds
    }, 2500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  const setup = (p5, canvasParentRef) => {
    // Set canvas width and height based on the window size
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.pixelDensity(1);
    p5.noStroke();

    // Initialize floating lights
    let tempLights = [];
    for (let i = 0; i < 10; i++) {
      tempLights.push(
        new FloatingLight(
          p5.random(-200, 200),
          p5.random(-200, 200),
          p5.random(-200, 200),
          p5
        )
      );
    }
    setLights(tempLights);
  };

  const draw = (p5) => {
    p5.background(255, 251, 235);
    p5.directionalLight(255, 255, 255, 0, 0, -1);
    p5.ambientLight(50);

    // Floating and rotating chip
    p5.rotateY(p5.millis() / 2000);
    p5.rotateX(p5.millis() / 4000);
    p5.rotateZ(p5.millis() / 4000);

    drawChip(p5);

    lights.forEach((light) => {
      light.move();
      light.display(p5);
    });
  };

  const drawChip = (p5) => {
    p5.push();
    p5.specularMaterial(210, 210, 210);
    p5.shininess(100);
    p5.box(40, 40, 5);
    p5.pop();

    const pinOffset = 30;
    const pinSize = 10;

    // Drawing the pins
    for (let i = -15; i <= 15; i += pinSize) {
      p5.push();
      p5.specularMaterial(255);
      p5.shininess(100);
      p5.box(5, 10, 5);
      p5.pop();
    }
  };

  class FloatingLight {
    constructor(x, y, z, p5) {
      this.pos = p5.createVector(x, y, z);
      this.vel = p5.createVector(
        p5.random(-1, 1),
        p5.random(-1, 1),
        p5.random(-1, 1)
      );
      this.size = p5.random(2, 15);
    }

    move() {
      this.pos.add(this.vel);
      if (this.pos.x > 200 || this.pos.x < -200) this.vel.x *= -1;
      if (this.pos.y > 200 || this.pos.y < -200) this.vel.y *= -1;
      if (this.pos.z > 200 || this.pos.z < -200) this.vel.z *= -1;
    }

    display(p5) {
      p5.push();
      p5.translate(this.pos.x, this.pos.y, this.pos.z);
      p5.specularMaterial(0, 200, 200);
      p5.shininess(100);
      p5.sphere(this.size);
      p5.pop();
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
      {isSplashVisible ? <Sketch setup={setup} draw={draw} /> : null}
    </div>
  );
}
