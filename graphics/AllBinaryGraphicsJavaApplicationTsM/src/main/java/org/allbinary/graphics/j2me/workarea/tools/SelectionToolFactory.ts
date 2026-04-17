
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
        



import { CanvasJPanel } from "../../../../../../org/allbinary/graphics/j2me/workarea/canvas/CanvasJPanel.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GraphicItemInterface } from "./GraphicItemInterface.js";

export class SelectionToolFactory
            extends Object
         implements GraphicsItemInterfaceFactoryInterface {
        

    public getInstance(canvasJPanel: CanvasJPanel): GraphicItemInterface{
var canvasJPanel = canvasJPanel



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new SelectionTool(canvasJPanel);
    
}


}
                
            

