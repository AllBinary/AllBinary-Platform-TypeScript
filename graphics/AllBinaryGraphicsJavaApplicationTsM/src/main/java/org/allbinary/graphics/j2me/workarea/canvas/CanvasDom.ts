
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { VectorCenterGenerator } from "../../../../../../org/allbinary/animation/vector/VectorCenterGenerator.js";

    
import { DomHelper } from "../../../../../../org/allbinary/dom/DomHelper.js";

    
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { WorkAreaJPanel } from "../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js";

    
import { GraphicItemFactory } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemFactory.js";

    
import { GraphicItemInterface } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js";

    
import { LinesGraphicItem } from "../../../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class CanvasDom
            extends Object
         {
        

    public static readonly FRAME: string = "frame";
        
        

    public static readonly ROTATE: string = "rotate";
        
        

    public static readonly SIZE: string = "size";
        
        

    public static readonly X: string = "X";
        
        

    public static readonly Y: string = "Y";
        
        

    public static readonly ZOOM: string = "zoom";
        
        

    public static readonly GRID: string = "grid";
        
        

    public static readonly ENABLED: string = "enabled";
        
        

    public static readonly POSSIBLE: string = "possible";
        
        

    public static readonly GRAPHICITEMS: string = "graphicItems";
        
        

    public static readonly REAL_SIZE: string = "realSize";
        
        

    public static readonly WIDTH: string = "width";
        
        

    public static readonly HEIGHT: string = "height";
        
        

    private graphicItemHashMap: HashMap<Any, Any>

    private angle: number

    private dimension: IntegerDimension

    private readonly grid: Grid
public constructor (canvasNode: Node){

            super();
            var canvasNode = canvasNode
this.grid= Grid()
this.grid.grid= PointFactory.getInstance()!.getInstance(0, 0)
this.dimension= IntegerDimension(0, 0)

    var name: string = canvasNode!.getNodeName()!;
        
        


    
                        if(name.compareTo(FRAME) == 0)
                        
                                    {
                                    this.graphicItemHashMap= HashMap<Any, Any>()

    var angleNode: Node = DomHelper.getInstance()!.searchNodeList(this.ROTATE, canvasNode!.getChildNodes())!;
        
        


    var angleTextNode: Node = angleNode!.getFirstChild()!;
        
        


    var angle: number = Double(angleTextNode!.getNodeValue()).
                            doubleValue()!;
        
        

this.setAngle(angle)

    var sizeNode: Node = DomHelper.getInstance()!.searchNodeList(this.SIZE, canvasNode!.getChildNodes())!;
        
        


    var xNode: Node = DomHelper.getInstance()!.searchNodeList(this.X, sizeNode!.getChildNodes())!;
        
        


    var xTextNode: Node = xNode!.getFirstChild()!;
        
        


    var x: number = Integer(xTextNode!.getNodeValue()).
                            toInt()!;
        
        


    var yNode: Node = DomHelper.getInstance()!.searchNodeList(this.Y, sizeNode!.getChildNodes())!;
        
        


    var yTextNode: Node = yNode!.getFirstChild()!;
        
        


    var y: number = Integer(yTextNode!.getNodeValue()).
                            toInt()!;
        
        

this.setWorkArea(x, y)

    var zoomNode: Node = DomHelper.getInstance()!.searchNodeList(this.ZOOM, canvasNode!.getChildNodes())!;
        
        


    var zoomTextNode: Node = zoomNode!.getFirstChild()!;
        
        

setZoom(Integer(zoomTextNode!.getNodeValue()).
                            toInt())

    var gridNode: Node = DomHelper.getInstance()!.searchNodeList(this.GRID, canvasNode!.getChildNodes())!;
        
        


    var gridSizeNode: Node = DomHelper.getInstance()!.searchNodeList(this.SIZE, gridNode!.getChildNodes())!;
        
        


    var gridXNode: Node = DomHelper.getInstance()!.searchNodeList(this.X, gridSizeNode!.getChildNodes())!;
        
        


    var gridXTextNode: Node = gridXNode!.getFirstChild()!;
        
        


    var gridX: number = Integer(gridXTextNode!.getNodeValue()).
                            toInt()!;
        
        


    var gridYNode: Node = DomHelper.getInstance()!.searchNodeList(this.Y, gridSizeNode!.getChildNodes())!;
        
        


    var gridYTextNode: Node = gridYNode!.getFirstChild()!;
        
        


    var gridY: number = Integer(gridYTextNode!.getNodeValue()).
                            toInt()!;
        
        

this.setGrid(gridX, gridY)

    var enableNode: Node = DomHelper.getInstance()!.searchNodeList(this.ENABLED, gridNode!.getChildNodes())!;
        
        


    var enableTextNode: Node = enableNode!.getFirstChild()!;
        
        

showGrid(.
                            )

    var possibleNode: Node = DomHelper.getInstance()!.searchNodeList(this.POSSIBLE, gridNode!.getChildNodes())!;
        
        


    var possibleTextNode: Node = possibleNode!.getFirstChild()!;
        
        

this.grid.isGridPossible= .
                            

    var graphicItemNodeList: BasicArrayList = DomHelper.getInstance()!.getChildrenWithoutTextNodes(this.GRAPHICITEMS, canvasNode!.getChildNodes())!;
        
        


    
                        if(graphicItemNodeList != 
                                    null
                                )
                        
                                    {
                                    this.graphicItemHashMap= GraphicItemFactory.getInstance()!.getInstance(graphicItemNodeList)

                                    }
                                

                                    }
                                
                        else {
                            


                            throw Exception("Frame Element Not Found but Found: " +name)

                        }
                            
}

public constructor (canvasJPanel: CanvasJPanel){

            super();
            var canvasJPanel = canvasJPanel
this.angle= canvasJPanel!.getAngle()
this.graphicItemHashMap= canvasJPanel!.getGraphicItemHashMap()
this.dimension= canvasJPanel!.getCanvasDimension()
this.grid= Grid(canvasJPanel!.getGrid())
this.angle= canvasJPanel!.getAngle()
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public getGraphicItemHashMap(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.graphicItemHashMap;
    
}


    public setAngle(angle: number){
var angle = angle
this.angle= angle
}


                @Throws(Exception::class)
            
    public setWorkArea(x: number, y: number){
var x = x
var y = y
this.setDimension(IntegerDimension(x, y))
}


                @Throws(Exception::class)
            
    public setGrid(gridX: number, gridY: number){
var gridX = gridX
var gridY = gridY
this.grid.grid= PointFactory.getInstance()!.getInstance(gridX, gridY)
}


    getPointNode(point: GPoint, pointName: string): Node{
var point = point
var pointName = pointName

    var document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;
        
        


    var pointNode: Node = document.createElement(pointName) as Node;
        
        


    var xNode: Node = document.createElement(this.X) as Node;
        
        


    var xTextNode: Node = document.createTextNode(Integer.toString(point.getX())) as Node;
        
        

appendChild(xTextNode)

    var yNode: Node = document.createElement(this.Y) as Node;
        
        


    var yTextNode: Node = document.createTextNode(Integer.toString(point.getY())) as Node;
        
        

appendChild(yTextNode)
appendChild(xNode)
appendChild(yNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointNode;
    
}


                @Throws(Exception::class)
            
    public toDom(): Node{

    var document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;
        
        


    var frameNode: Node = document.createElement(this.FRAME) as Node;
        
        


    var angleNode: Node = document.createElement(this.ROTATE) as Node;
        
        


    var angleTextNode: Node = document.createTextNode(Double(this.getAngle()).
                            toString()) as Node;
        
        

appendChild(angleTextNode)

    var sizeNode: Node = this.getPointNode(PointFactory.getInstance()!.getInstance(this.getDimension()!.getWidth(), this.getDimension()!.getHeight()), this.SIZE) as Node;
        
        


    var zoomNode: Node = document.createElement(this.ZOOM) as Node;
        
        


    var zoomTextNode: Node = document.createTextNode(Integer(this.getGrid()!.getZoom()).
                            toString()) as Node;
        
        

appendChild(zoomTextNode)

    var gridNode: Node = document.createElement(this.GRID) as Node;
        
        


    var gridSizeNode: Node = this.getPointNode(this.getGrid()!.grid, this.SIZE) as Node;
        
        

appendChild(gridSizeNode)

    var enableNode: Node = document.createElement(this.ENABLED) as Node;
        
        


    var enableTextNode: Node = document.createTextNode(.
                            toString()) as Node;
        
        

appendChild(enableTextNode)
appendChild(enableNode)

    var possibleNode: Node = document.createElement(this.POSSIBLE) as Node;
        
        


    var possibleTextNode: Node = document.createTextNode(.
                            toString()) as Node;
        
        

appendChild(possibleTextNode)
appendChild(possibleNode)

    var realSizeNode: Node = document.createElement(REAL_SIZE) as Node;
        
        


    var vectorCenterGenerator: VectorCenterGenerator = new VectorCenterGenerator();
        
        

calculate(this.getGraphicItemHashMap())

    var widthNode: Node = document.createElement(WIDTH) as Node;
        
        


    var widthTextNode: Node = document.createTextNode(Integer.toString(vectorCenterGenerator!.getWidth())) as Node;
        
        

appendChild(widthTextNode)
appendChild(widthNode)

    var heightNode: Node = document.createElement(HEIGHT) as Node;
        
        


    var heightTextNode: Node = document.createTextNode(Integer.toString(vectorCenterGenerator!.getHeight())) as Node;
        
        

appendChild(heightTextNode)
appendChild(heightNode)
appendChild(angleNode)
appendChild(sizeNode)
appendChild(zoomNode)
appendChild(gridNode)
appendChild(realSizeNode)

    var graphicItemNode: Node = document.createElement(this.GRAPHICITEMS) as Node;
        
        


    var graphicItemArray: any = {}[] = this.getGraphicItemHashMap()!.keys.toTypedArray()!;
        
        


    var size: number = graphicItemArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: GraphicItemInterface = this.graphicItemHashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;
        
        


    
                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
    
                        if(item.isValid())
                        
                                    {
                                    appendChild(item.toDom(this))

                                    }
                                

                                    }
                                
}

appendChild(graphicItemNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameNode;
    
}


    public getDimension(): IntegerDimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dimension;
    
}


    public setDimension(dimension: IntegerDimension){
var dimension = dimension
this.dimension= dimension
}


    public getGrid(): Grid{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return grid;
    
}


}
                
            

