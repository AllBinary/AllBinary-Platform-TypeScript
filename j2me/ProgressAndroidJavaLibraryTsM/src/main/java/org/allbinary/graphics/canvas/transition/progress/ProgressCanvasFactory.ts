
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
        



import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { NullPaintable } from "../../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { PaintableInterface } from "../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProgressCanvas } from "./ProgressCanvas.js";

export class ProgressCanvasFactory
            extends Object
         {
        

    private static readonly instance: ProgressCanvas = new AndroidBasicTitleProgressBar(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    public static getInstance(): ProgressCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public static getLazyInstance(): PaintableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullPaintable.getInstance();;
    
}


}
                
            

