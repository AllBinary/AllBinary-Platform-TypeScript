
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
            import { Double } from '../../../../../../java/lang/Double.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { VectorCenterGenerator } from '../../../../../../org/allbinary/animation/vector/VectorCenterGenerator.js';
//not GWT import const VectorCenterGenerator

import { DomHelper } from '../../../../../../org/allbinary/dom/DomHelper.js';
//not GWT import const DomHelper

import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { GraphicsStrings } from '../../../../../../org/allbinary/graphics/GraphicsStrings.js';
//not GWT import const GraphicsStrings

import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { WorkAreaJPanel } from '../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js';
//not GWT import const WorkAreaJPanel

import { GraphicItemFactory } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemFactory.js';
//not GWT import const GraphicItemFactory

import { GraphicItemInterface } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/GraphicItemInterface.js';
//not GWT import const GraphicItemInterface

import { LinesGraphicItem } from '../../../../../../org/allbinary/graphics/j2me/workarea/tools/LinesGraphicItem.js';
//not GWT import const LinesGraphicItem

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IntegerDimension } from './IntegerDimension.js';
//not GWT import - same folder const IntegerDimension
import { Grid } from './Grid.js';
//not GWT import - same folder const Grid
import { CanvasJPanel } from './CanvasJPanel.js';
//not GWT import - same folder const CanvasJPanel
import { Document } from './Document.js';
//not GWT import - same folder const Document

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

    private readonly graphicsStrings: GraphicsStrings = GraphicsStrings.getInstance()!;

    private graphicItemHashMap: HashMap<any, any>;

    private angle: number;

    private dimension: IntegerDimension;

    private readonly grid: Grid;

public constructor (canvasNode: Node){

            super();
        this.grid= new Grid();
    
this.grid.grid= PointFactory.getInstance()!.createXY(0, 0);
    
this.dimension= new IntegerDimension(0, 0);
    

    let name: string = canvasNode!.getNodeName()!;;
    

                        if(name.compareTo(CanvasDom.FRAME) == 0)
                        
                                    {
                                    this.graphicItemHashMap= StdUtil.getInstance()!.createHashMap();
    

    let angleNode: Node = DomHelper.getInstance()!.searchNodeList(this.ROTATE, canvasNode!.getChildNodes())!;;
    

    let angleTextNode: Node = angleNode!.getFirstChild()!;;
    

    let angle: number = new number(angleTextNode!.getNodeValue()).doubleValue()!;;
    
this.setAngle(angle);
    

    let sizeNode: Node = DomHelper.getInstance()!.searchNodeList(this.SIZE, canvasNode!.getChildNodes())!;;
    

    let xNode: Node = DomHelper.getInstance()!.searchNodeList(this.X, sizeNode!.getChildNodes())!;;
    

    let xTextNode: Node = xNode!.getFirstChild()!;;
    

    let x: number = new Integer(xTextNode!.getNodeValue()).intValue()!;;
    

    let yNode: Node = DomHelper.getInstance()!.searchNodeList(this.Y, sizeNode!.getChildNodes())!;;
    

    let yTextNode: Node = yNode!.getFirstChild()!;;
    

    let y: number = new Integer(yTextNode!.getNodeValue()).intValue()!;;
    
this.setWorkArea(x, y);
    

    let zoomNode: Node = DomHelper.getInstance()!.searchNodeList(this.ZOOM, canvasNode!.getChildNodes())!;;
    

    let zoomTextNode: Node = zoomNode!.getFirstChild()!;;
    
this.grid.setZoom(new Integer(zoomTextNode!.getNodeValue()).intValue());
    

    let gridNode: Node = DomHelper.getInstance()!.searchNodeList(this.GRID, canvasNode!.getChildNodes())!;;
    

    let gridSizeNode: Node = DomHelper.getInstance()!.searchNodeList(this.SIZE, gridNode!.getChildNodes())!;;
    

    let gridXNode: Node = DomHelper.getInstance()!.searchNodeList(this.X, gridSizeNode!.getChildNodes())!;;
    

    let gridXTextNode: Node = gridXNode!.getFirstChild()!;;
    

    let gridX: number = new Integer(gridXTextNode!.getNodeValue()).intValue()!;;
    

    let gridYNode: Node = DomHelper.getInstance()!.searchNodeList(this.Y, gridSizeNode!.getChildNodes())!;;
    

    let gridYTextNode: Node = gridYNode!.getFirstChild()!;;
    

    let gridY: number = new Integer(gridYTextNode!.getNodeValue()).intValue()!;;
    
this.setGrid(gridX, gridY);
    

    let enableNode: Node = DomHelper.getInstance()!.searchNodeList(this.ENABLED, gridNode!.getChildNodes())!;;
    

    let enableTextNode: Node = enableNode!.getFirstChild()!;;
    
this.grid.showGrid(.valueOf());
    

    let possibleNode: Node = DomHelper.getInstance()!.searchNodeList(this.POSSIBLE, gridNode!.getChildNodes())!;;
    

    let possibleTextNode: Node = possibleNode!.getFirstChild()!;;
    
this.grid.isGridPossible= .valueOf();
    

    let graphicItemNodeList: BasicArrayList = DomHelper.getInstance()!.getChildrenWithoutTextNodes(this.GRAPHICITEMS, canvasNode!.getChildNodes())!;;
    

                        if(graphicItemNodeList != 
                                    null
                                )
                        
                                    {
                                    this.graphicItemHashMap= GraphicItemFactory.getInstance()!.getInstance(graphicItemNodeList);
    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw new Exception("Frame Element Not Found but Found: " +name);
                    

                        }
                            
}


public constructor (canvasJPanel: CanvasJPanel){

            super();
        this.angle= canvasJPanel!.getAngle();
    
this.graphicItemHashMap= canvasJPanel!.getGraphicItemHashMap();
    
this.dimension= canvasJPanel!.getCanvasDimension();
    
this.grid= new Grid(canvasJPanel!.getGrid());
    
this.angle= canvasJPanel!.getAngle();
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public getGraphicItemHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.graphicItemHashMap;
    
}


    public setAngle(angle: number){
this.angle= angle;
    
}


                //@Throws(Exception.constructor)
            
    public setWorkArea(x: number, y: number){
this.setDimension(new IntegerDimension(x, y));
    
}


                //@Throws(Exception.constructor)
            
    public setGrid(gridX: number, gridY: number){
this.grid.grid= PointFactory.getInstance()!.createXY(gridX, gridY);
    
}


    getPointNode(point: GPoint, pointName: string): Node{

    let document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;;
    

    let pointNode: Node = document.createElement(pointName) as Node;;
    

    let xNode: Node = document.createElement(this.X) as Node;;
    

    let xTextNode: Node = document.createTextNode(Integer.toString(point.getX())) as Node;;
    
xNode!.appendChild(xTextNode);
    

    let yNode: Node = document.createElement(this.Y) as Node;;
    

    let yTextNode: Node = document.createTextNode(Integer.toString(point.getY())) as Node;;
    
yNode!.appendChild(yTextNode);
    
pointNode!.appendChild(xNode);
    
pointNode!.appendChild(yNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointNode;
    
}


                //@Throws(Exception.constructor)
            
    public toDom(): Node{

    let document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;;
    

    let frameNode: Node = document.createElement(this.FRAME) as Node;;
    

    let angleNode: Node = document.createElement(this.ROTATE) as Node;;
    

    let angleTextNode: Node = document.createTextNode(new number(this.getAngle()).toString()) as Node;;
    
angleNode!.appendChild(angleTextNode);
    

    let sizeNode: Node = this.getPointNode(PointFactory.getInstance()!.createXY(this.getDimension()!.getWidth(), this.getDimension()!.getHeight()), this.SIZE) as Node;;
    

    let zoomNode: Node = document.createElement(this.ZOOM) as Node;;
    

    let zoomTextNode: Node = document.createTextNode(new Integer(this.getGrid()!.getZoom()).toString()) as Node;;
    
zoomNode!.appendChild(zoomTextNode);
    

    let gridNode: Node = document.createElement(this.GRID) as Node;;
    

    let gridSizeNode: Node = this.getPointNode(this.getGrid()!.grid, this.SIZE) as Node;;
    
gridNode!.appendChild(gridSizeNode);
    

    let enableNode: Node = document.createElement(this.ENABLED) as Node;;
    

    let enableTextNode: Node = document.createTextNode(.toString()) as Node;;
    
enableNode!.appendChild(enableTextNode);
    
gridNode!.appendChild(enableNode);
    

    let possibleNode: Node = document.createElement(this.POSSIBLE) as Node;;
    

    let possibleTextNode: Node = document.createTextNode(.toString()) as Node;;
    
possibleNode!.appendChild(possibleTextNode);
    
gridNode!.appendChild(possibleNode);
    

    let realSizeNode: Node = document.createElement(REAL_SIZE) as Node;;
    

    let vectorCenterGenerator: VectorCenterGenerator = new VectorCenterGenerator();;
    
vectorCenterGenerator!.calculate(this.getGraphicItemHashMap());
    

    let widthNode: Node = document.createElement(this.graphicsStrings!.WIDTH) as Node;;
    

    let widthTextNode: Node = document.createTextNode(Integer.toString(vectorCenterGenerator!.getWidth())) as Node;;
    
widthNode!.appendChild(widthTextNode);
    
realSizeNode!.appendChild(widthNode);
    

    let heightNode: Node = document.createElement(this.graphicsStrings!.HEIGHT) as Node;;
    

    let heightTextNode: Node = document.createTextNode(Integer.toString(vectorCenterGenerator!.getHeight())) as Node;;
    
heightNode!.appendChild(heightTextNode);
    
realSizeNode!.appendChild(heightNode);
    
frameNode!.appendChild(angleNode);
    
frameNode!.appendChild(sizeNode);
    
frameNode!.appendChild(zoomNode);
    
frameNode!.appendChild(gridNode);
    
frameNode!.appendChild(realSizeNode);
    

    let graphicItemNode: Node = document.createElement(this.GRAPHICITEMS) as Node;;
    

    let graphicItemArray: any[] = this.getGraphicItemHashMap()!.keys().()!;;
    

    let size: number = graphicItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: GraphicItemInterface = this.graphicItemHashMap!.get(graphicItemArray[index]!) as GraphicItemInterface;;
    

                        if(item.getName() == LinesGraphicItem.getStaticName())
                        
                                    {
                                    
                        if(item.isValid())
                        
                                    {
                                    graphicItemNode!.appendChild(item.toDom(this));
    

                                    }
                                

                                    }
                                
}

frameNode!.appendChild(graphicItemNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frameNode;
    
}


    public getDimension(): IntegerDimension{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dimension;
    
}


    public setDimension(dimension: IntegerDimension){
this.dimension= dimension;
    
}


    public getGrid(): Grid{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.grid;
    
}


}

