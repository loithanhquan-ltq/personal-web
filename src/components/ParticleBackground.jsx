import { useEffect, useRef } from "react";
import * as THREE from "three";

const REPEL_RADIUS = 130;
const REPEL_STRENGTH = 1.4;
const RETURN_SPRING = 0.022;
const DAMPING = 0.84;
const DRIFT = 0.012;

function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null);
  const materialRef = useRef(null);

  // Update color when theme changes without recreating the WebGL context
  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.color.setHex(isDark ? 0x4da6ff : 0x0072bd);
    materialRef.current.opacity = isDark ? 0.5 : 0.28;
  }, [isDark]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const COUNT = window.innerWidth < 768 ? 700 : 3000;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    let W = window.innerWidth;
    let H = window.innerHeight;

    const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, -500, 500);
    camera.position.z = 100;

    const positions = new Float32Array(COUNT * 3);
    const origins   = new Float32Array(COUNT * 3);
    const vels      = new Float32Array(COUNT * 2);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * W;
      const y = (Math.random() - 0.5) * H;
      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
      origins[i * 3]       = x;
      origins[i * 3 + 1]   = y;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const isDarkNow = document.documentElement.classList.contains("dark");
    const mat = new THREE.PointsMaterial({
      color: isDarkNow ? 0x4da6ff : 0x0072bd,
      size: 1.6,
      transparent: true,
      opacity: isDarkNow ? 0.5 : 0.28,
      sizeAttenuation: false,
      depthWrite: false,
    });
    materialRef.current = mat;

    scene.add(new THREE.Points(geo, mat));

    const mouse = { x: 1e9, y: 1e9 };
    const onMouseMove = (e) => {
      mouse.x =  e.clientX - W / 2;
      mouse.y = -(e.clientY - H / 2);
    };
    const onMouseLeave = () => { mouse.x = 1e9; mouse.y = 1e9; };
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      if (!prefersReduced) {
        for (let i = 0; i < COUNT; i++) {
          const px = i * 3, py = i * 3 + 1;
          const vx = i * 2, vy = i * 2 + 1;

          const dx = positions[px] - mouse.x;
          const dy = positions[py] - mouse.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < REPEL_RADIUS * REPEL_RADIUS && d2 > 0.01) {
            const dist  = Math.sqrt(d2);
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
            vels[vx] += (dx / dist) * force * REPEL_STRENGTH;
            vels[vy] += (dy / dist) * force * REPEL_STRENGTH;
          }

          // Spring back to origin
          vels[vx] += (origins[px] - positions[px]) * RETURN_SPRING;
          vels[vy] += (origins[py] - positions[py]) * RETURN_SPRING;

          // Gentle ambient drift
          vels[vx] += (Math.random() - 0.5) * DRIFT;
          vels[vy] += (Math.random() - 0.5) * DRIFT;

          vels[vx] *= DAMPING;
          vels[vy] *= DAMPING;

          positions[px] += vels[vx];
          positions[py] += vels[vy];
        }
        geo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      camera.left   = -W / 2;
      camera.right  =  W / 2;
      camera.top    =  H / 2;
      camera.bottom = -H / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

export default ParticleBackground;
