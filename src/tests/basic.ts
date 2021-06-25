import { Canvas } from '../canvas';

const canvasElem = (document.getElementById('basic-canvas-1') as HTMLCanvasElement);
const c = new Canvas(canvasElem);
c.setStatic();
c.draw();