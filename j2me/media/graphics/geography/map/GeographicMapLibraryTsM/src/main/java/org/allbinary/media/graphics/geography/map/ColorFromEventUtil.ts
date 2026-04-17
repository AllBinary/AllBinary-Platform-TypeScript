
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
        



import { AllBinaryGameCanvas } from "../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorFromEventUtil
            extends Object
         {
        

    private static readonly instance: ColorFromEventUtil = new ColorFromEventUtil();
        
        

    public static getInstance(): ColorFromEventUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly YELLOW: BasicColor = BasicColorFactory.getInstance()!.YELLOW;
        
        

    public readonly COLOR_INT: number = YELLOW.toInt()!;
        
        

    public getForegroundColor(gameCanvasInterface: AllBinaryGameCanvas): BasicColor{
    //var gameCanvasInterface = gameCanvasInterface

    var color: BasicColor = YELLOW;
        
        
;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvasInterface!.getLayerManager();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

                        if(geographicMapInterface != 
                                    null
                                )
                        
                                    {
                                    
    var foregroundBasicColor: BasicColor = geographicMapInterface!.getForegroundBasicColor()!;
        
        
;
    
color= foregroundBasicColor;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


}
                
            

