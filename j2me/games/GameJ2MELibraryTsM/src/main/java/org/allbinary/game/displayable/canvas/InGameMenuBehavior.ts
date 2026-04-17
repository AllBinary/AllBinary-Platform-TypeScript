
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

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseMenuBehavior } from "./BaseMenuBehavior.js";

import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class InGameMenuBehavior extends BaseMenuBehavior {
        

    private static readonly instance: InGameMenuBehavior = new InGameMenuBehavior();
        
        

    public static getInstance(): InGameMenuBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public onDisplayChangeEvent(allBinaryGameCanvas: AllBinaryGameCanvas, displayChangeEvent: DisplayChangeEvent){
    //var allBinaryGameCanvas = allBinaryGameCanvas
    //var displayChangeEvent = displayChangeEvent
allBinaryGameCanvas!.updateMenu(displayChangeEvent);
    
}


    public initSpecialPaint(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.setNonBotPaintableP(new GameCanvasNonBotPaintable(allBinaryGameCanvas));
    
}


                //@Throws(Error::class)
            
    public initMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.initMenu2();
    
}


                //@Throws(Error::class)
            
    public updateMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.initMenu2();
    
}


                //@Throws(Error::class)
            
    public popupMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.popupMenu2();
    
}


    public closeMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
    //var allBinaryGameCanvas = allBinaryGameCanvas
allBinaryGameCanvas!.closeMenu2();
    
}


}
                
            

