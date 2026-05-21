
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseMenuBehavior } from './BaseMenuBehavior.js';
import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';
import { GameCanvasNonBotPaintable } from './GameCanvasNonBotPaintable.js';

export class InGameMenuBehavior extends BaseMenuBehavior {
        

    private static readonly instance: InGameMenuBehavior = new InGameMenuBehavior();

    public static getInstance(): InGameMenuBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InGameMenuBehavior.instance;
    
}


                //@Throws(Exception.constructor)
            
    public onDisplayChangeEvent(allBinaryGameCanvas: AllBinaryGameCanvas, displayChangeEvent: DisplayChangeEvent){
allBinaryGameCanvas!.updateMenuFromEvent(displayChangeEvent);
    
}


    public initSpecialPaint(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.setNonBotPaintableP(new GameCanvasNonBotPaintable(allBinaryGameCanvas));
    
}


                //@Throws(Exception.constructor)
            
    public initMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.initMenu2();
    
}


                //@Throws(Exception.constructor)
            
    public updateMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.initMenu2();
    
}


                //@Throws(Exception.constructor)
            
    public popupMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.popupMenu2();
    
}


    public closeMenu(allBinaryGameCanvas: AllBinaryGameCanvas){
allBinaryGameCanvas!.closeMenu2();
    
}


}
                
            

