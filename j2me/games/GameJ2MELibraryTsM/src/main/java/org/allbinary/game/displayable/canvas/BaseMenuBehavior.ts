
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { DisplayChangeEvent } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class BaseMenuBehavior
            extends Object
         {
        

    private static readonly instance: BaseMenuBehavior = new BaseMenuBehavior();
        
        

    public static getInstance(): BaseMenuBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public onDisplayChangeEvent(allBinaryGameCanvas: AllBinaryGameCanvas, displayChangeEvent: DisplayChangeEvent){
    //var allBinaryGameCanvas = allBinaryGameCanvas
    //var displayChangeEvent = displayChangeEvent
}


    public initSpecialPaint(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.setNonBotPaintableP(NullPaintable.getInstance());
    
}


                //@Throws(Error::class)
            
    public initMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public updateMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


                //@Throws(Error::class)
            
    public popupMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


    public closeMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
}


}
                
            

