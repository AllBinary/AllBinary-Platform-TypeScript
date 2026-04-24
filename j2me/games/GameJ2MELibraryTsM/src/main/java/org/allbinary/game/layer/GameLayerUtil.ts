
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
        



import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameLayerUtil
            extends Object
         {
        

    public static isOnScreen(layer: AllBinaryLayer): boolean{
var layer = layer

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var viewPosition: ViewPosition = layer.getViewPosition()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isInside(viewPosition!.getX(), viewPosition!.getY(), viewPosition!.getX2(), viewPosition!.getY2(), 0, 0, displayInfo!.getLastWidth(), displayInfo!.getLastHeight());;
    
}


    public static isInside(rectX1: number, rectY1: number, rectX2: number, rectY2: number, rect2X1: number, rect2Y1: number, rect2X2: number, rect2Y2: number): boolean{
var rectX1 = rectX1
var rectY1 = rectY1
var rectX2 = rectX2
var rectY2 = rectY2
var rect2X1 = rect2X1
var rect2Y1 = rect2Y1
var rect2X2 = rect2X2
var rect2Y2 = rect2Y2

                        if(rectX1 > rect2X1 && rectX2 < rect2X2 && rectY1 > rect2Y1 && rectY2 < rect2Y2)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}

private constructor (){

            super();
        }


}
                
            

