
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Double } from '../../../../../../java/lang/Double.js';
        
import { awt } from '../../../../../../java/awt.js';
//not GWT import const awt

import { MutableTreeNode } from '../../../../../../javax/swing/tree/MutableTreeNode.js';
//not GWT import const MutableTreeNode

import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { CanvasDom } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js';
//not GWT import const CanvasDom

import { IntegerDimension } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js';
//not GWT import const IntegerDimension

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Color } from './Color.js';
//not GWT import - same folder const Color
import { Points } from './Points.js';
//not GWT import - same folder const Points
import { Graphics } from './Graphics.js';
//not GWT import - same folder const Graphics
import { MouseEvent } from './MouseEvent.js';
//not GWT import - same folder const MouseEvent
import { KeyEvent } from './KeyEvent.js';
//not GWT import - same folder const KeyEvent

export interface GraphicItemInterface {
        

    getName(): string;

    setColor(color: Color): void;

    getTreeNode(): MutableTreeNode;

    getPointsInterface(): Points;

    setPointsInterface(points: Points): void;

    isValid(): boolean;

    isActive(): boolean;

    deactivate(): void;

    activate(): void;

    setFulcrumPoint(point: GPoint): void;

                //@Throws(Exception.constructor)
            
    translate(x: number, y: number): void;

    setRotate(theta: number): void;

    addRotate(theta: number): void;

    setAngle(angle: number): void;

    addAngle(angle: number): void;

    getAngle(): number;

    paint(g: Graphics, canvasAngle: number, dimension: IntegerDimension, x: number, y: number): void;

                //@Throws(Exception.constructor)
            
    toDom(canvasDom: CanvasDom): Node;

    removePoint(): GPoint;

    addPoint(point: GPoint): void;

    mouseClicked(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number): void;

    mouseEntered(mouseEvent: java.awt.event.MouseEvent): void;

    mouseExited(mouseEvent: java.awt.event.MouseEvent): void;

    mousePressed(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number): void;

    mouseReleased(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number): void;

    mouseDragged(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number): void;

    mouseMoved(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number): void;

    keyPressed(keyEvent: java.awt.event.KeyEvent): void;

    keyReleased(keyEvent: java.awt.event.KeyEvent): void;

    keyTyped(keyEvent: java.awt.event.KeyEvent): void;

                //@Throws(Exception.constructor)
            
    duplicate(): GraphicItemInterface;

}

