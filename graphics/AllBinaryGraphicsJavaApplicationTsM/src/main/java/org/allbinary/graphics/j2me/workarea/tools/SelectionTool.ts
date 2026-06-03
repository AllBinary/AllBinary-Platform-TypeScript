
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Math } from '../../../../../../java/lang/Math.js';
        
            import { Double } from '../../../../../../java/lang/Double.js';
        
import { awt } from '../../../../../../java/awt.js';
      
import { HashMap } from '../../../../../../java/util/HashMap.js';
      
import { MutableTreeNode } from '../../../../../../javax/swing/tree/MutableTreeNode.js';
      
import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      
import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
      
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { CanvasDom } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js';
      
import { CanvasJPanel } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasJPanel.js';
      
import { IntegerDimension } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js';
      
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { RectangleCollisionPointUtil } from '../../../../../../org/allbinary/math/RectangleCollisionPointUtil.js';
      
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GraphicItemInterface } from './GraphicItemInterface.js';
import { Color } from './Color.js';
import { Points } from './Points.js';
import { LinesGraphicItem } from './LinesGraphicItem.js';
import { Graphics } from './Graphics.js';
import { MouseEvent } from './MouseEvent.js';
import { MouseStrings } from './MouseStrings.js';
import { KeyEvent } from './KeyEvent.js';

export class SelectionTool
            extends Object
         implements GraphicItemInterface {
        

    private static readonly NAME: string = "Selection Tool";

    public static getStaticName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SelectionTool.NAME;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly canvasJPanel: CanvasJPanel;

    private active: boolean = true;

public constructor (canvasJPanel: CanvasJPanel){

            super();
        this.canvasJPanel= canvasJPanel;
    
}


    public setColor(color: Color){
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
}


                //@Throws(Exception.constructor)
            
    public translate(x: number, y: number){
}


    public setRotate(theta: number){
}


    public addRotate(theta: number){
}


    public setAngle(angle: number){
}


    public addAngle(angle: number){
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    private controlIdDown: boolean= false;

    makeSelection(){

    var xRect: number = this.getXRect()!;;
    

    var xRect2: number = Math.abs(this.endPoint!.getX() -this.startPoint!.getX()) +xRect;;
    

    var yRect: number = this.getYRect()!;;
    

    var yRect2: number = Math.abs(this.endPoint!.getY() -this.startPoint!.getY()) +yRect;;
    

    var hashMap: HashMap<any, any> = this.canvasJPanel!.getGraphicItemHashMap()!;;
    

    var graphicItemArray: any[] = hashMap!.keys().()!;;
    

    var size: number = graphicItemArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var item: GraphicItemInterface = hashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
                        if(RectangleCollisionPointUtil.allPointsInsideCell(xRect, yRect, xRect2, yRect2, item.getPointsInterface()!.getPoints(), this.canvasJPanel!.getXPixelsPerWorkAreaPixel(), this.canvasJPanel!.getYPixelsPerWorkAreaPixel()))
                        
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


    private readonly rectColor: Color = new Color(BasicColorFactory.getInstance()!.RED.intValue());

    public getXRect(): number{

    var xDiff: number = this.endPoint!.getX() -this.startPoint!.getX();;
    

    var xRect: number = this.startPoint!.getX()!;;
    

                        if(xDiff < 0)
                        
                                    {
                                    xRect= this.endPoint!.getX();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xRect;
    
}


    public getYRect(): number{

    var yDiff: number = this.endPoint!.getY() -this.startPoint!.getY();;
    

    var yRect: number = this.startPoint!.getY()!;;
    

                        if(yDiff < 0)
                        
                                    {
                                    yRect= this.endPoint!.getY();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return yRect;
    
}


    public paint(g: Graphics, canvasAngle: number, dimension: IntegerDimension, x: number, y: number){
g.setColor(this.rectColor);
    

    var xRect: number = this.getXRect()!;;
    

    var width: number = Math.abs(this.endPoint!.getX() -this.startPoint!.getX())!;;
    

    var yRect: number = this.getYRect()!;;
    

    var height: number = Math.abs(this.endPoint!.getY() -this.startPoint!.getY())!;;
    
g.drawRect(xRect, yRect, width, height);
    
}


                //@Throws(Exception.constructor)
            
    public toDom(canvasDom: CanvasDom): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public removePoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public addPoint(point: GPoint){
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SelectionTool.NAME;
    
}


    private startPoint: GPoint = PointFactory.getInstance()!.ZERO_ZERO;

    private endPoint: GPoint = this.startPoint;

    public mouseClicked(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
}


    public mouseMoved(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
}


    public mouseEntered(mouseEvent: java.awt.event.MouseEvent){
}


    public mouseExited(mouseEvent: java.awt.event.MouseEvent){
}


    public mousePressed(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
this.logUtil!.putF(this.commonStrings!.START, this, MouseStrings.getInstance()!.MOUSE_PRESSED);
    
this.startPoint= PointFactory.getInstance()!.createXY(mouseEvent!.getX(), mouseEvent!.getY());
    
this.endPoint= this.startPoint;
    
}


    public mouseReleased(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
this.logUtil!.putF(this.commonStrings!.START, this, MouseStrings.getInstance()!.MOUSE_RELEASED);
    
this.endPoint= PointFactory.getInstance()!.createXY(mouseEvent!.getX(), mouseEvent!.getY());
    
this.active= false;
    
this.makeSelection();
    
}


    public mouseDragged(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
this.endPoint= PointFactory.getInstance()!.createXY(mouseEvent!.getX(), mouseEvent!.getY());
    
}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){

                        if(keyEvent!.getKeyCode() == keyEvent!.VK_CONTROL)
                        
                                    {
                                    this.controlIdDown= true;
    

                                    }
                                
}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){

                        if(keyEvent!.getKeyCode() == keyEvent!.VK_CONTROL)
                        
                                    {
                                    this.controlIdDown= false;
    

                                    }
                                
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
}


                //@Throws(Exception.constructor)
            
    public duplicate(): GraphicItemInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

