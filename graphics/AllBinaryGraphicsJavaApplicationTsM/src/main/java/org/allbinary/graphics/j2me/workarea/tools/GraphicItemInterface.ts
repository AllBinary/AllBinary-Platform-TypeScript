
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
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { MutableTreeNode } from '../../../../../../javax/swing/tree/MutableTreeNode.js';
      const MutableTreeNode = globalThis.javax.swing.tree.MutableTreeNode;

      
//not game specific package import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { CanvasDom } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js';
      const CanvasDom = globalThis.org.allbinary.graphics.j2me.workarea.canvas.CanvasDom;

      
//not game specific package import { IntegerDimension } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js';
      const IntegerDimension = globalThis.org.allbinary.graphics.j2me.workarea.canvas.IntegerDimension;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Color } from './Color.js';
import { Points } from './Points.js';
import { Graphics } from './Graphics.js';
import { MouseEvent } from './MouseEvent.js';
import { KeyEvent } from './KeyEvent.js';

export interface GraphicItemInterface {
        

    getName(): string

    setColor(color: Color)

    getTreeNode(): MutableTreeNode

    getPointsInterface(): Points

    setPointsInterface(points: Points)

    isValid(): boolean

    isActive(): boolean

    deactivate()

    activate()

    setFulcrumPoint(point: GPoint)

                //@Throws(Exception.constructor)
            
    translate(x: number, y: number)

    setRotate(theta: number)

    addRotate(theta: number)

    setAngle(angle: number)

    addAngle(angle: number)

    getAngle(): number

    paint(g: Graphics, canvasAngle: number, dimension: IntegerDimension, x: number, y: number)

                //@Throws(Exception.constructor)
            
    toDom(canvasDom: CanvasDom): Node

    removePoint(): GPoint

    addPoint(point: GPoint)

    mouseClicked(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number)

    mouseEntered(mouseEvent: java.awt.event.MouseEvent)

    mouseExited(mouseEvent: java.awt.event.MouseEvent)

    mousePressed(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number)

    mouseReleased(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number)

    mouseDragged(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number)

    mouseMoved(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number)

    keyPressed(keyEvent: java.awt.event.KeyEvent)

    keyReleased(keyEvent: java.awt.event.KeyEvent)

    keyTyped(keyEvent: java.awt.event.KeyEvent)

                //@Throws(Exception.constructor)
            
    duplicate(): GraphicItemInterface

}
                
            

