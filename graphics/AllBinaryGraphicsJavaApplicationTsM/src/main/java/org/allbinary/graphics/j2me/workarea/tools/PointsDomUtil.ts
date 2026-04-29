
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
        
import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { WorkAreaJPanel } from "../../../../../../org/allbinary/graphics/j2me/workarea/WorkAreaJPanel.js";

    
import { CanvasDom } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasDom.js";

    
import { PositionStrings } from "../../../../../../org/allbinary/math/PositionStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PointsUtil } from "./PointsUtil.js";

export class PointsDomUtil
            extends Object
         {
        

    private static readonly instance: PointsDomUtil = new PointsDomUtil();

    public static getInstance(): PointsDomUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly LINES: string = "lines";

    public readonly POINTONE: string = "pointOne";

    public readonly POINTTWO: string = "pointTwo";

    private readonly ROTATEDPOINTONE: string = "rotatedPointOne";

    private readonly ROTATEDPOINTTWO: string = "rotatedPointTwo";

    private readonly LINE: string = "line";

                //@Throws(Error::class)
            
    public toDom(canvasDom: CanvasDom, pointVector: BasicArrayList): Node{
var canvasDom = canvasDom
var pointVector = pointVector

    var tempPointVector: BasicArrayList = PointsUtil.getInstance()!.doTransforms(pointVector, new number(canvasDom!.getAngle()), PointFactory.getInstance()!.createXY(canvasDom!.getDimension()!.getWidth(), canvasDom!.getDimension()!.getHeight()))!;
;
    

    var document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;
;
    

    var linesNode: Node =  as Nodedocument.createElement(this.LINES);;
;
    

    var size2: number = tempPointVector!.size()!;
;
    

    var size: number = pointVector!.size()!;
;
    

    var firstPoint: GPoint = 
                null
            ;
;
    

    var rotatedFirstPoint: GPoint = 
                null
            ;
;
    

    var index: number = 0;
;
    

                        if(index < size && index < size2)
                        
                                    {
                                    rotatedFirstPoint=  as GPointtempPointVector!.get(index);;
    
firstPoint=  as GPointpointVector!.get(index);;
    
index++;
    

                                    }
                                

        while(index < size && index < size2)
        {

    var lineNode: Node =  as Nodedocument.createElement(this.LINE);;
;
    

    var rotatedSecondPoint: GPoint =  as GPointtempPointVector!.get(index);;
;
    

    var secondPoint: GPoint =  as GPointpointVector!.get(index);;
;
    

    var pointOneNode: Node = this.getPointNode(firstPoint, this.POINTONE)!;
;
    

    var pointTwoNode: Node = this.getPointNode(secondPoint, this.POINTTWO)!;
;
    

    var rotatedPointOneNode: Node = this.getPointNode(rotatedFirstPoint, this.ROTATEDPOINTONE)!;
;
    

    var rotatedPointTwoNode: Node = this.getPointNode(rotatedSecondPoint, this.ROTATEDPOINTTWO)!;
;
    
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
var point = point
var pointName = pointName

    var document: org.w3c.dom.Document = WorkAreaJPanel.getDocument()!;
;
    

    var pointNode: Node =  as Nodedocument.createElement(pointName);;
;
    

    var xNode: Node =  as Nodedocument.createElement(PositionStrings.getInstance()!.X);;
;
    

    var xTextNode: Node =  as Nodedocument.createTextNode(Integer.toString(point.getX()));;
;
    
xNode!.appendChild(xTextNode);
    

    var yNode: Node =  as Nodedocument.createElement(PositionStrings.getInstance()!.Y);;
;
    

    var yTextNode: Node =  as Nodedocument.createTextNode(Integer.toString(point.getY()));;
;
    
yNode!.appendChild(yTextNode);
    
pointNode!.appendChild(xNode);
    
pointNode!.appendChild(yNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pointNode;
    
}


}
                
            

