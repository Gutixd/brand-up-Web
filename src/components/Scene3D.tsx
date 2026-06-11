import { useEffect, useRef } from 'react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  TextureLoader,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  Group,
  SphereGeometry,
  MeshStandardMaterial,
  PointLight,
  AmbientLight,
  AdditiveBlending,
  Color,
} from 'three';

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Renderer ──────────────────────────────────────────────────────
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';

    // ── Scene & Camera ─────────────────────────────────────────────────
    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    // ── Lights ─────────────────────────────────────────────────────────
    scene.add(new AmbientLight(0xffffff, 0.8));
    const keyLight = new PointLight(0xf05e23, 3, 12);
    keyLight.position.set(3, 3, 4);
    scene.add(keyLight);
    const fillLight = new PointLight(0xffd580, 1.5, 10);
    fillLight.position.set(-3, -2, 3);
    scene.add(fillLight);

    // ── Main group ────────────────────────────────────────────────────
    const group = new Group();
    scene.add(group);

    // ── Load main image — strip checkerboard background ───────────────
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Draw to offscreen canvas and punch out near-white/near-gray pixels
      const cvs = document.createElement('canvas');
      cvs.width = img.naturalWidth;
      cvs.height = img.naturalHeight;
      const ctx = cvs.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, cvs.width, cvs.height);
      const px = data.data;
      for (let i = 0; i < px.length; i += 4) {
        const r = px[i], g = px[i + 1], b = px[i + 2];
        // Remove checkerboard: light gray (#cccccc) and near-white (#eeeeee+)
        const isChecker = r > 190 && g > 190 && b > 190 && Math.abs(r - g) < 18 && Math.abs(g - b) < 18;
        if (isChecker) px[i + 3] = 0;
      }
      ctx.putImageData(data, 0, 0);

      const tex = new TextureLoader().load(cvs.toDataURL());
      const aspect = img.naturalWidth / img.naturalHeight;
      const geo = new PlaneGeometry(3.2 * aspect, 3.2);
      const mat = new MeshBasicMaterial({
        map: tex,
        transparent: true,
        alphaTest: 0.1,
        depthWrite: false,
      });
      group.add(new Mesh(geo, mat));
    };
    img.src = '/img/3d-objects.webp';

    // ── Accent spheres (brand orange dots) ────────────────────────────
    const accentColor = new Color(0xf05e23);
    const dotPositions = [
      [2.2, 1.4, 0.3],
      [-2.0, -1.2, 0.5],
      [1.6, -1.8, 0.2],
      [-1.4, 1.6, 0.4],
      [2.6, -0.4, -0.2],
      [-2.4, 0.6, 0.1],
    ] as const;

    const dotMeshes: Mesh[] = [];
    dotPositions.forEach(([x, y, z]) => {
      const size = 0.05 + Math.random() * 0.07;
      const geo = new SphereGeometry(size, 12, 12);
      const mat = new MeshStandardMaterial({
        color: accentColor,
        emissive: accentColor,
        emissiveIntensity: 0.9,
        blending: AdditiveBlending,
        transparent: true,
        opacity: 0.75,
      });
      const mesh = new Mesh(geo, mat);
      mesh.position.set(x, y, z);
      group.add(mesh);
      dotMeshes.push(mesh);
    });

    // ── Mouse tracking ────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const isMobile = () => window.matchMedia('(pointer: coarse)').matches;

    const onMouseMove = (e: MouseEvent) => {
      if (isMobile()) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────
    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // ── Animation loop ────────────────────────────────────────────────
    let t = 0;
    let curX = 0;
    let curY = 0;
    let raf: number;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.012;

      // Target rotation: gentle oscillation + mouse influence
      const targetX = mouseY * 0.22 + Math.sin(t * 0.6) * 0.07;
      const targetY = mouseX * 0.28 + Math.sin(t * 0.35) * 0.14;

      // Smooth lerp
      curX += (targetX - curX) * 0.045;
      curY += (targetY - curY) * 0.045;

      group.rotation.x = curX;
      group.rotation.y = curY;
      group.position.y = Math.sin(t * 0.7) * 0.1;

      // Dots pulse
      dotMeshes.forEach((d, i) => {
        d.position.y += Math.sin(t * 0.9 + i * 1.2) * 0.002;
        (d.material as MeshStandardMaterial).opacity =
          0.5 + Math.sin(t * 1.1 + i) * 0.25;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      ro.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position: 'relative', width: '100%', height: '100%' }}
    />
  );
}
