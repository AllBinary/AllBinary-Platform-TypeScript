
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

    

export class PointFactory
            extends Object
         {
        

    private pointArray: Point[][] = Array(3000) { arrayOfNulls<Point?>(3000) }
                                                            ;
        
        

    public static getInstance(x: number, y: number): Point{
var x = x
var y = y

    var point: Point = pointArray[x]![y]!;
        
        
;
    

                        if(point == 
                                    null
                                )
                        
                                    {
                                    point= pointArray[x]![y]= Point(x, y);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}

private constructor (){

            super();
            }


}
                
            

