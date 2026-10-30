
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
        
import { AllBinaryGameCanvas } from '../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas

import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCompositeInterface } from './GeographicMapCompositeInterface.js';
//sameFolderImports - not GWT import - same folder const GeographicMapCompositeInterface
import { BasicGeographicMap } from './BasicGeographicMap.js';
//sameFolderImports - not GWT import - same folder const BasicGeographicMap

export class ColorFromEventUtil
            extends Object
         {
        

    private static readonly instance: ColorFromEventUtil = new ColorFromEventUtil();

    public static getInstance(): ColorFromEventUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ColorFromEventUtil.instance;
    
}


    private readonly YELLOW: BasicColor = BasicColorFactory.getInstance()!.YELLOW;

    public readonly COLOR_INT: number = this.YELLOW.intValue()!;

    public getForegroundColor(gameCanvasInterface: AllBinaryGameCanvas): BasicColor{

    let color: BasicColor = this.YELLOW;;
    

    let geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvasInterface!.getLayerManager() as GeographicMapCompositeInterface;;
    

    let geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

                        if(geographicMapInterface != 
                                    null
                                )
                        
                                    {
                                    
    let foregroundBasicColor: BasicColor = geographicMapInterface!.getForegroundBasicColor()!;;
    
color= foregroundBasicColor;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


}

