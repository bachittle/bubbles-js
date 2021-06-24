/**
 * Bubbles library
 * 
 * uses html5 canvas for 2D rendering and three.js for 3D rendering of bubbles
 * 
 * This code contains the interfaces to access bubbles, and specific bubble types will be in separate files. 
 *
 */
 
export interface Bubble {
    // coords
    x: number;
    y: number;

    // physical attributes 
    radius: number;
    
    // color attributes
    color: string; // TODO: make color type, only allow strings that are valid colors
}