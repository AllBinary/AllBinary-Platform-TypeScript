
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../../../java/awt.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { DefaultMutableTreeNode } from "../../../../../../javax/swing/tree/DefaultMutableTreeNode.js";

    
import { MutableTreeNode } from "../../../../../../javax/swing/tree/MutableTreeNode.js";

    
import { DomHelper } from "../../../../../../org/allbinary/dom/DomHelper.js";

    
import { GameInputStrings } from "../../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { StatusFactory } from "../../../../../../org/allbinary/graphics/j2me/StatusFactory.js";

    
import { CanvasDom } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js";

    
import { IntegerDimension } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/IntegerDimension.js";

    
import { BasicGraphicsPipeline } from "../../../../../../org/allbinary/graphics/pipeline/BasicGraphicsPipeline.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PositionStrings } from "../../../../../../org/allbinary/math/PositionStrings.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

import { PointsDomUtil } from "./PointsDomUtil.js";

import { PointsDomUtil } from "./PointsDomUtil.js";

import { PointsDomUtil } from "./PointsDomUtil.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

import { Math } from "./Math.js";

import { PointsUtil } from "./PointsUtil.js";

import { PointsDomUtil } from "./PointsDomUtil.js";

export class LinesGraphicItem
            extends Object
        
                , GraphicItemInterface {
        

    private static readonly RECT: string = "rect";
        
        

    private static readonly ARC: string = "arc";
        
        

    private static readonly STRING: string = "string";
        
        

    private static readonly CHAR: string = "char";
        
        

    private static readonly IMAGE: string = "image";
        
        

    private item: number = 0;
        
        

    private static readonly NAME: string = "Line Tool";
        
        

    public static getStaticName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    private treeNode: DefaultMutableTreeNode

    private pointTreeNodeVector: Vector

    private currentMousePoint: GPoint

    private fulcrumPoint: GPoint

    private active: boolean = false;
        
        

    private theta: number = 0;
        
        

    private color: Color = new Color(BasicColorFactory.getInstance()!.WHITE.toInt());
        
        

    private points: Points
public constructor (){

            super();
            this.points= new Points();
    

        try {
            init();
    
this.active= true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}

public constructor (linesNode: Node){

            super();
            var linesNode = linesNode
this.points= new Points();
    
init();
    
this.active= false;
    

    var lineNodes: BasicArrayList = DomHelper.getInstance()!.getWithoutTextNodes(linesNode!.getChildNodes())!;
        
        
;
    

    var numberOfLines: number = lineNodes!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfLines; index++)
        {

    var lineNode: Node = lineNodes!.get(index);

                         as Node;
        
        
;
    

    var pointNodes: BasicArrayList = DomHelper.getInstance()!.getWithoutTextNodes(lineNode!.getChildNodes())!;
        
        
;
    

    var pointOneNode: Node = DomHelper.getInstance()!.searchNodeList(PointsDomUtil.getInstance()!.POINTONE, pointNodes)!;
        
        
;
    
this.addPoint(pointOneNode!.getChildNodes());
    

                        if(index == numberOfLines -1)
                        
                                    {
                                    
    var pointTwoNode: Node = DomHelper.getInstance()!.searchNodeList(PointsDomUtil.getInstance()!.POINTTWO, pointNodes)!;
        
        
;
    
this.addPoint(pointTwoNode!.getChildNodes());
    

                                    }
                                
}


                        if(numberOfLines == 0)
                        
                                    {
                                    


                            throw new Error("Lines node does not contain a line")

                                    }
                                
}


                //@Throws(Error::class)
            
    public init(){
this.treeNode= new DefaultMutableTreeNode(PointsDomUtil.getInstance()!.LINES +item);
    
item++;
    
this.points.init();
    
this.pointTreeNodeVector= new Vector();
    
this.fulcrumPoint= PointFactory.getInstance()!.getInstance(0, 0);
    
}


                //@Throws(Error::class)
            
    public translate(x: number, y: number){
var x = x
var y = y
StatusFactory.getInstance()!.setStatus("Translating: " +this.points.getPoints());
    

    var basicGraphicsPipeline: BasicGraphicsPipeline = new BasicGraphicsPipeline(this.points.getPoints());
        
        
;
    
basicGraphicsPipeline!.translate(x, y);
    
this.points= new Points();
    
this.points.addPoints(basicGraphicsPipeline!.getMatrix());
    
}


    public setRotate(theta: number){
var theta = theta

        while(theta > 2 *Math.PI)
        {
theta -= 2 *Math.PI;
    
}


        while(theta < 0)
        {
theta += 2 *Math.PI;
    
}

this.theta= theta;
    
}


    public addRotate(theta: number){
var theta = theta
this.setRotate(this.theta +theta);
    
}


    public setAngle(angle: number){
var angle = angle
this.setRotate(Math.toRadians(angle));
    
}


    public addAngle(angle: number){
var angle = angle
this.setRotate(this.theta +Math.toRadians(angle));
    
}


    public getTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.treeNode as MutableTreeNode;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    addPoint(pointNodes: NodeList){
var pointNodes = pointNodes

    var list: BasicArrayList = DomHelper.getInstance()!.getWithoutTextNodes(pointNodes)!;
        
        
;
    

    var xNode: Node = DomHelper.getInstance()!.searchNodeList(PositionStrings.getInstance()!.X, list)!;
        
        
;
    

    var xTextNode: Node = xNode!.getFirstChild()!;
        
        
;
    

    var xInteger: Integer = new Integer(xTextNode!.getNodeValue());
        
        
;
    

    var yNode: Node = DomHelper.getInstance()!.searchNodeList(PositionStrings.getInstance()!.Y, list)!;
        
        
;
    

    var yTextNode: Node = yNode!.getFirstChild()!;
        
        
;
    

    var yInteger: Integer = new Integer(yTextNode!.getNodeValue());
        
        
;
    

    var point: GPoint = PointFactory.getInstance()!.getInstance(xInteger!.toInt(), yInteger!.toInt())!;
        
        
;
    
this.addPoint(point);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public addPoint(point: GPoint){
var point = point
this.points.getPoints()!.add(point);
    
this.logUtil!.putF(point.toString(), this, "addPoint");
    
this.pointTreeNodeVector!.add(new DefaultMutableTreeNode(point.toString()));
    
this.treeNode!.add(this.pointTreeNodeVector!.get(this.pointTreeNodeVector!.length -1);

                         as DefaultMutableTreeNode);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public removePoint(): GPoint{

    var point: GPoint = 
                null
            ;
        
        
;
    

                        if(this.points.getSize() > 0)
                        
                                    {
                                    
    var lastPoint: number = this.points.getSize() -1;
        
        
;
    
point= this.points.getPoints()!.remove(lastPoint);

                         as GPoint;
    

    var index: number = this.pointTreeNodeVector!.length -1;
        
        
;
    

                        if(index > 0)
                        
                                    {
                                    this.treeNode!.remove(this.pointTreeNodeVector!.get(index);

                         as DefaultMutableTreeNode);
    
this.pointTreeNodeVector!.remove(index);
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public isActive(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.active;
    
}


    public deactivate(){
this.active= false;
    
}


    public activate(){
this.active= true;
    
}


                //@Throws(Error::class)
            
    public duplicatePoints(list: BasicArrayList){
var list = list

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var point: GPoint = list.get(index);

                         as GPoint;
        
        
;
    

                        if(point != 
                                    null
                                )
                        
                                    {
                                    this.points.getPoints()!.add(PointFactory.getInstance()!.getInstance(point.getX(), point.getY()));
    
this.pointTreeNodeVector!.add(new DefaultMutableTreeNode(point.toString()));
    
this.treeNode!.add(this.pointTreeNodeVector!.get(this.pointTreeNodeVector!.length -1);

                         as DefaultMutableTreeNode);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public duplicate(): GraphicItemInterface{

    var linesGraphicItem: LinesGraphicItem = new LinesGraphicItem();
        
        
;
    
linesGraphicItem!.duplicatePoints(this.points.getPoints());
    
linesGraphicItem!.deactivate();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return linesGraphicItem;
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.toDegrees(this.theta);

                        ;
    
}


    public setFulcrumPoint(point: GPoint){
var point = point
this.fulcrumPoint= point;
    
}


    public paint(g: Graphics, canvasAngle: Double, dimension: IntegerDimension, x: number, y: number){
var g = g
var canvasAngle = canvasAngle
var dimension = dimension
var x = x
var y = y

        try {
            
    var graphics: Graphics2D = g as Graphics2D;
        
        
;
    
graphics.setColor(getColor());
    
graphics.setStroke(new BasicStroke(x));
    

                        if(this.isActive() && this.currentMousePoint != 
                                    null
                                )
                        
                                    {
                                    this.points.getPoints()!.add(this.currentMousePoint);
    

                                    }
                                

    var tempPointVector: BasicArrayList = PointsUtil.getInstance()!.doTransforms(this.points.getPoints(), canvasAngle, PointFactory.getInstance()!.getInstance(dimension.getWidth(), dimension.getHeight()))!;
        
        
;
    

                        if(this.isActive() && this.currentMousePoint != 
                                    null
                                )
                        
                                    {
                                    this.currentMousePoint= this.points.getPoints()!.remove(this.points.getSize() -1);

                         as GPoint;
    

                                    }
                                

    var size: number = tempPointVector!.size()!;
        
        
;
    

    var firstPoint: GPoint = 
                null
            ;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    firstPoint= tempPointVector!.get(0);

                         as GPoint;
    

                                    }
                                




                        for (
    var index: number = 1;
        
        
index < size; index++)
        {

    var secondPoint: GPoint = tempPointVector!.get(index);

                         as GPoint;
        
        
;
    
graphics.drawLine((firstPoint!.getX() *x) -(x /4), (firstPoint!.getY() *y) -(y /4), (secondPoint!.getX() *x) -(x /4), (secondPoint!.getY() *y) -(y /4));
    
firstPoint= secondPoint;
    
}


                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "mouseMoved", e);
    
}

}


                //@Throws(Error::class)
            
    public toDom(canvasDom: CanvasDom): Node{
var canvasDom = canvasDom



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointsDomUtil.getInstance()!.toDom(canvasDom, this.points.getPoints());

                        ;
    
}


    public isValid(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.points.isValid();

                        ;
    
}


    public getPointsInterface(): Points{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.points;
    
}


    public setPointsInterface(points: Points){
var points = points
this.points= points;
    
}


    public getColor(): Color{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


    public setColor(color: Color){
var color = color
this.color= color;
    
}


    public mouseClicked(mouseEvent: java.awt.event.MouseEvent, x: number, y: number){
var mouseEvent = mouseEvent
var x = x
var y = y

        try {
            
    var mousePoint: GPoint = PointFactory.getInstance()!.getInstance(mouseEvent!.getPoint()!.x, mouseEvent!.getPoint()!.y)!;
        
        
;
    

                        if((mouseEvent!.getModifiers() and mouseEvent!.BUTTON1_MASK) == mouseEvent!.BUTTON1_MASK)
                        
                                    {
                                    
    var point: GPoint = PointFactory.getInstance()!.getInstance(mousePoint!.getX() /x, mousePoint!.getY() /y)!;
        
        
;
    
StatusFactory.getInstance()!.setStatus("Line Point Added: " +point.toString());
    
this.addPoint(point);
    

                                    }
                                
                             else 
                        if((mouseEvent!.getModifiers() and mouseEvent!.BUTTON3_MASK) == mouseEvent!.BUTTON3_MASK)
                        
                                    {
                                    StatusFactory.getInstance()!.setStatus("Line Point Removed");
    
this.removePoint();
    

                                    }
                                
this.currentMousePoint= mousePoint;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "mouseMoved", e);
    
}

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
}


    public mouseReleased(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
}


    public mouseDragged(mouseEvent: java.awt.event.MouseEvent, xPixelsPerCell: number, yPixelsPerCell: number){
var mouseEvent = mouseEvent
var xPixelsPerCell = xPixelsPerCell
var yPixelsPerCell = yPixelsPerCell
}


    public mouseMoved(mouseEvent: java.awt.event.MouseEvent, x: number, y: number){
var mouseEvent = mouseEvent
var x = x
var y = y

        try {
            
    var mousePoint: GPoint = PointFactory.getInstance()!.getInstance(mouseEvent!.getPoint()!.x, mouseEvent!.getPoint()!.y)!;
        
        
;
    

    var point: GPoint = PointFactory.getInstance()!.getInstance(mousePoint!.getX() /x, mousePoint!.getY() /y)!;
        
        
;
    
this.currentMousePoint= point;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "mouseMoved", e);
    
}

}


    public keyPressed(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent

        try {
            
    var keyCode: number = keyEvent!.getKeyCode()!;
        
        
;
    

                        if(keyCode == keyEvent!.VK_ESCAPE)
                        
                                    {
                                    StatusFactory.getInstance()!.setStatus("Deactivated");
    
this.deactivate();
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_UP)
                        
                                    {
                                    this.translate(0,  -1);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_DOWN)
                        
                                    {
                                    this.translate(0, 1);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_LEFT)
                        
                                    {
                                    this.translate( -1, 0);
    

                                    }
                                
                             else 
                        if(keyCode == keyEvent!.VK_RIGHT)
                        
                                    {
                                    this.translate(1, 0);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.KEY_PRESSED, e);
    
}

}


    public keyReleased(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


    public keyTyped(keyEvent: java.awt.event.KeyEvent){
var keyEvent = keyEvent
}


}
                
            

