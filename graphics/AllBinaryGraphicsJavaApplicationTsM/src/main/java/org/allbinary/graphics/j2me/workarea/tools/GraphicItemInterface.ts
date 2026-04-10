
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
        



import { awt } from "../../../../../../java/awt.js";

    
import { MutableTreeNode } from "../../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { CanvasDom } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js";

    
import { IntegerDimension } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

interface GraphicItemInterface {
        

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

                @Throws(Exception::class)
            
    translate(x: number, y: number)

    setRotate(theta: number)

    addRotate(theta: number)

    setAngle(angle: number)

    addAngle(angle: number)

    getAngle(): number

    paint(g: Graphics, canvasAngle: Double, dimension: IntegerDimension, x: number, y: number)

                @Throws(Exception::class)
            
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

                @Throws(Exception::class)
            
    duplicate(): GraphicItemInterface

}
                
            

