
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

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { MutableTreeNode } from "../../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CanvasDom } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js";

    
import { CanvasJPanel } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasJPanel.js";

    
import { IntegerDimension } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { RectangleCollisionPointUtil } from "../../../../../../org/allbinary/math/RectangleCollisionPointUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class SelectionTool
            extends Object
        
                , GraphicItemInterface {
        

    private static readonly NAME: string = "Selection Tool";
        
        

    public static getStaticName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly canvasJPanel: CanvasJPanel

    private active: boolean = true;
        
        
public constructor (canvasJPanel: CanvasJPanel){

            super();
            var canvasJPanel = canvasJPanel
this.canvasJPanel= canvasJPanel;
    
}


    public setColor(color: Color){
var color = color
}


    public getTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getPointsInterface(): Points{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setPointsInterface(points: Points){
var points = points
}


    public isValid(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isActive(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.active;
    
}


    public deactivate(){
}


    public activate(){
}


    public setFulcrumPoint(point: GPoint){
var point = point
}


                //@Throws(Error::class)
            
    public translate(x: number, y: number){
var x = x
var y = y
}


    public setRotate(theta: number){
var theta = theta
}


    public addRotate(theta: number){
var theta = theta
}


    public setAngle(angle: number){
var angle = angle
}


    public addAngle(angle: number){
var angle = angle
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    private controlIdDown: boolean= false

    makeSelection(){

    var xRect: number = this.getXRect()!;
        
        
;
    

    var xRect2: number = Math.abs(this.endPoint!.getX() -this.startPoint!.getX()) +xRect;
        
        
;
    

    var yRect: number = this.getYRect()!;
        
        
;
    

    var yRect2: number = Math.abs(this.endPoint!.getY() -this.startPoint!.getY()) +yRect;
        
        
;
    

    var hashMap: HashMap<any, any> = this.canvasJPanel!.getGraphicItemHashMap()!;
        
        
;
    

    var graphicItemArray: any[] = hashMap!.keys.toTypedArray()!;
        
        
;
    

    var size: number = graphicItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!);

                         as GraphicItemInterface;
        
        
;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
                        if(RectangleCollisionPointUtil.allPointsInside(xRect, yRect, xRect2, yRect2, item.getPointsInterface()!.getPoints(), this.canvasJPanel!.getXPixelsPerWorkAreaPixel(), this.canvasJPanel!.getYPixelsPerWorkAreaPixel()))
                        
                                    {
                                    item.setColor(Color.YELLOW);
    
item.activate();
    

                                    }
                                
                             else 
                        if(!this.controlIdDown)
                        
                                    {
                                    item.setColor(Color.WHITE);
    
item.deactivate();
    

                                    }
                                

                                    }
                                
}

}


    private readonly rectColor: Color = new Color(BasicColorFactory.getInstance()!.RED.toInt());
        
        

    public getXRect(): number{

    var xDiff: number = this.endPoint!.getX() -this.startPoint!.getX();
        
        
;
    

    var xRect: number = this.startPoint!.getX()!;
        
        
;
    

                        if(xDiff < 0)
                        
                                    {
                                    xRect= this.endPoint!.getX();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xRect;
    
}


    public getYRect(): number{

    var yDiff: number = this.endPoint!.getY() -this.startPoint!.getY();
        
        
;
    

    var yRect: number = this.startPoint!.getY()!;
        
        
;
    

                        if(yDiff < 0)
                        
                                    {
                                    yRect= this.endPoint!.getY();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return yRect;
    
}


    public paint(g: Graphics, canvasAngle: Double, dimension: IntegerDimension, x: number, y: number){
var g = g
var canvasAngle = canvasAngle
var dimension = dimension
var x = x
var y = y
g.setColor(this.rectColor);
    

    var xRect: number = this.getXRect()!;
        
        
;
    

    var width: number = Math.abs(this.endPoint!.getX() -this.startPoint!.getX())!;
        
        
;
    

    var yRect: number = this.getYRect()!;
        
        
;
    

    var height: number = Math.abs(this.endPoint!.getY() -this.startPoint!.getY())!;
        
        
;
    
g.drawRect(xRect, yRect, width, height);
    
}


                //@Throws(Error::class)
            
    public toDom(canvasDom: CanvasDom): Node{
var canvasDom = canvasDom



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public removePoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public addPoint(point: GPoint){
var point = point
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


    private startPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;
        
        

    private endPoint: GPoint = startPoint;
        
        

    public mouseClicked(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
}


    public mouseMoved(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
}


    public mouseEntered(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
}


    public mouseExited(mouseEvent: java.awt.event.MouseEvent){
var mouseEvent = mouseEvent
}


    public mousePressed(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
this.logUtil!.putF(commonStrings!.START, this, MouseStrings.getInstance()!.MOUSE_PRESSED);
    
this.startPoint= PointFactory.getInstance()!.getInstance(mouseEvent!.getX(), mouseEvent!.getY());
    
this.endPoint= this.startPoint;
    
}


    public mouseReleased(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
this.logUtil!.putF(commonStrings!.START, this, MouseStrings.getInstance()!.MOUSE_RELEASED);
    
this.endPoint= PointFactory.getInstance()!.getInstance(mouseEvent!.getX(), mouseEvent!.getY());
    
this.active= false;
    
this.makeSelection();
    
}


    public mouseDragged(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
this.endPoint= PointFactory.getInstance()!.getInstance(mouseEvent!.getX(), mouseEvent!.getY());
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent

                        if(keyEvent!.getKeyCode() == keyEvent!.VK_CONTROL)
                        
                                    {
                                    this.controlIdDown= true;
    

                                    }
                                
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent

                        if(keyEvent!.getKeyCode() == keyEvent!.VK_CONTROL)
                        
                                    {
                                    this.controlIdDown= false;
    

                                    }
                                
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


                //@Throws(Error::class)
            
    public duplicate(): GraphicItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

