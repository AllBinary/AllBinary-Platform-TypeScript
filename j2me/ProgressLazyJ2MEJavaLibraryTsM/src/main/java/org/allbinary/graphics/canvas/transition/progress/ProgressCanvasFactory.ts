
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
        



import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { PaintableInterface } from "../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    

export class ProgressCanvasFactory
            extends Object
         {
        

    private PROGRESS_FORM_SCREEN: ProgressCanvas = new LazyProgressCanvas(StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    public static getInstance(): ProgressCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PROGRESS_FORM_SCREEN;
    
}


    public static getLazyInstance(): PaintableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getInstance();
    
}


}
                
            

