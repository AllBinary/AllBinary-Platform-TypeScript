
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
        



import { GPoint } from "../../../org/allbinary/graphics/GPoint.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RectangleCollisionUtil } from "./RectangleCollisionUtil.js";

export class RectangleCollisionPointUtil
            extends Object
         {
        

    public static allPointsInside(rectX1: number, rectY1: number, rectX2: number, rectY2: number, list: BasicArrayList): boolean{
var rectX1 = rectX1
var rectY1 = rectY1
var rectX2 = rectX2
var rectY2 = rectY2
var list = list

    var rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        
;
    

    var point: GPoint
;
    




                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
point= list.objectArray[index]! as GPoint;
    

                        if(!rectangleCollisionUtil!.isInside(rectX1, rectY1, rectX2, rectY2, point.getX(), point.getY());

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public static allPointsInside(rectX1: number, rectY1: number, rectX2: number, rectY2: number, list: BasicArrayList, xCellSize: number, yCellSize: number): boolean{
var rectX1 = rectX1
var rectY1 = rectY1
var rectX2 = rectX2
var rectY2 = rectY2
var list = list
var xCellSize = xCellSize
var yCellSize = yCellSize

    var rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        
;
    

    var point: GPoint
;
    




                        for (
    var index: number = list.size()!;
        
        
--index >= 0; )
        {
point= list.objectArray[index]! as GPoint;
    

                        if(!rectangleCollisionUtil!.isInside(rectX1, rectY1, rectX2, rectY2, point.getX() *xCellSize, point.getY() *yCellSize);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

private constructor (){

            super();
        }


}
                
            

