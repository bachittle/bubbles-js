/**
 * canvas can be run in 2 different modes:
 * - static mode: runs once, then stops. Is a static image
 * - dynamic mode: runs in a loop, ideally 60 frames per second, for animations.
 *
 * user must define the canvas element to use on the dom, and the mode
 */

export enum Modes {
    static,
    dynamic
}

export class Canvas {
    private ctx: any;     // types don't work with ctx :(
    private mode: Modes;

    constructor(canvasElem: HTMLCanvasElement, mode: Modes = Modes.static) {
        this.mode = mode;
        this.ctx = canvasElem.getContext('2D');
    }
    
    // set static or dynamic, so no need to import modes
    setStatic() {
        this.mode = Modes.static;
    }
    
    setDynamic() {
        this.mode = Modes.dynamic;
    }
    
    // generic draw function, that calls the appropriate private draw function for static or dynamic
    draw() {
        switch(this.mode) {
            case Modes.static: {
                this.staticDraw();
                break;
            }
            case Modes.dynamic:
                this.dynamicDraw();
                break;
        }
    }
    
    private staticDraw() {
        this.ctx.fillRect(10, 10, 100, 100)
    }
    
    private dynamicDraw() {
        this.ctx.fillRect(100, 100, 10, 10)
    }
}