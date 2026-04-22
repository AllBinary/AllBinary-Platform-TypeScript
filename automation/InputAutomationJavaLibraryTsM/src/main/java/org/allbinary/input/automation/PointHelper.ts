
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
        



import { awt } from "../../../../java/awt.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PointFactory } from "./PointFactory.js";

import { Point } from "./Point.js";

import { Rectangle } from "./Rectangle.js";

export class PointHelper
            extends Object
         {
        

    private static readonly two: number = 2;
        
        

    public static getCenterPoint(rectangle: Rectangle): Point{
var rectangle = rectangle

    var x: number = rectangle.getX() +rectangle.getWidth() /two;
        
        
;
    

    var y: number = rectangle.getY() +rectangle.getHeight() /two;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.getInstance(x, y);

                        ;
    
}

public constructor (){

            super();
        }


}
                
            

