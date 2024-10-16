import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Sketch from "react-p5";
import myChipSvg from "../assets/patio.svg"; // Import your SVG file
import "./Welcome.css";

export default function Welcome() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [lights, setLights] = useState([]);
  const [chipImage, setChipImage] = useState(null); // State to hold the SVG image
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

    // Load the SVG chip image
    const img = p5.loadImage(myChipSvg, () => {
      setChipImage(img); // Once the image is loaded, set it to state
    });

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

    // Rotate the floating SVG
    p5.rotateY(p5.millis() / 2000);
    p5.rotateX(p5.millis() / 4000);
    p5.rotateZ(p5.millis() / 4000);

    // If the chip image (SVG) is loaded, display it
    if (chipImage) {
      p5.imageMode(p5.CENTER);
      p5.image(chipImage, 0, 0, 100, 100); // Adjust the size and position as needed
    }

    lights.forEach((light) => {
      light.move();
      light.display(p5);
    });
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
