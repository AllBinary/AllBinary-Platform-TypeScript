
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
        



import { AppletUtil } from "../../../org/allbinary/AppletUtil.js";

    
import { J2MEUtil } from "../../../org/allbinary/J2MEUtil.js";

    
import { GameCommandsFactory } from "../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { MyCanvas } from "../../../org/allbinary/graphics/displayable/MyCanvas.js";

    

export class CustomGameMenuUtil
            extends Object
         {
        

    public static add(canvas: MyCanvas){
    //var canvas = canvas

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        


    
                        if(AppletUtil.isAppletLoader(canvas))
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                        else {
                            addCommand(gameCommandsFactory!.EXIT_COMMAND)

                        }
                            
}


}
                
            

