
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
        
            //import { Double } from '../../../../../../java/lang/Double.js';
            const Double = globalThis.java.lang.Double;
        
import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { WorkAreaJPanel } from '../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js';
//not GWT import const WorkAreaJPanel

import { CanvasDom } from '../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js';
//not GWT import const CanvasDom

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PointsUtil } from './PointsUtil.js';
//sameFolderImports - not GWT import - same folder const PointsUtil
import { Document } from './Document.js';
//sameFolderImports - not GWT import - same folder const Document

export class PointsDomUtil
            extends Object
         {
        

    private static readonly instance: PointsDomUtil = new PointsDomUtil();

    public static getInstance(): PointsDomUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointsDomUtil.instance;
    
}


    public readonly LINES: string = "lines";

    public readonly POINTONE: string = "pointOne";

    public readonly POINTTWO: string = "pointTwo";

    private readonly ROTATEDPOINTONE: string = "rotatedPointOne";

    private readonly ROTATEDPOINTTWO: string = "rotatedPointTwo";

    private readonly LINE: string = "line";

                //@Throws(Exception.constructor)
            
    public toDom(canvasDom: CanvasDom, pointVector: BasicArrayList): Node{

    let tempPointVector: BasicArrayList = PointsUtil.getInstance()!.doTransforms(pointVector, new number(canvasDom!.getAngle()), PointFactory.getInstance()!.createXY(canvasDom!.getDimension()!.getWidth(), canvasDom!.getDimension()!.getHeight()))!;;
    

    let document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;;
    

    let linesNode: Node = document.createElement(this.LINES) as Node;;
    

    let size2: number = tempPointVector!.size()!;;
    

    let size: number = pointVector!.size()!;;
    

    let firstPoint: GPoint = 
                null
            ;;
    

    let rotatedFirstPoint: GPoint = 
                null
            ;;
    

    let index: number = 0;;
    

                        if(index < size && index < size2)
                        
                                    {
                                    rotatedFirstPoint= tempPointVector!.get(index) as GPoint;
    
firstPoint= pointVector!.get(index) as GPoint;
    
index++;
    

                                    }
                                

        while(index < size && index < size2)
        {

    let lineNode: Node = document.createElement(this.LINE) as Node;;
    

    let rotatedSecondPoint: GPoint = tempPointVector!.get(index) as GPoint;;
    

    let secondPoint: GPoint = pointVector!.get(index) as GPoint;;
    

    let pointOneNode: Node = this.getPointNode(firstPoint, this.POINTONE)!;;
    

    let pointTwoNode: Node = this.getPointNode(secondPoint, this.POINTTWO)!;;
    

    let rotatedPointOneNode: Node = this.getPointNode(rotatedFirstPoint, this.ROTATEDPOINTONE)!;;
    

    let rotatedPointTwoNode: Node = this.getPointNode(rotatedSecondPoint, this.ROTATEDPOINTTWO)!;;
    
lineNode!.appendChild(pointOneNode);
    
lineNode!.appendChild(pointTwoNode);
    
lineNode!.appendChild(rotatedPointOneNode);
    
lineNode!.appendChild(rotatedPointTwoNode);
    
firstPoint= secondPoint;
    
rotatedFirstPoint= rotatedSecondPoint;
    
linesNode!.appendChild(lineNode);
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return linesNode;
    
}


    getPointNode(point: GPoint, pointName: string): Node{

    let document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;;
    

    let pointNode: Node = document.createElement(pointName) as Node;;
    

    let xNode: Node = document.createElement(PositionStrings.getInstance()!.X) as Node;;
    

    let xTextNode: Node = document.createTextNode(Integer.toString(point.getX())) as Node;;
    
xNode!.appendChild(xTextNode);
    

    let yNode: Node = document.createElement(PositionStrings.getInstance()!.Y) as Node;;
    

    let yTextNode: Node = document.createTextNode(Integer.toString(point.getY())) as Node;;
    
yNode!.appendChild(yTextNode);
    
pointNode!.appendChild(xNode);
    
pointNode!.appendChild(yNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointNode;
    
}


}

