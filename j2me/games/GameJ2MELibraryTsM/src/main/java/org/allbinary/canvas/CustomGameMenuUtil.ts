
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
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { AppletUtil } from '../../../org/allbinary/AppletUtil.js';
      const AppletUtil = globalThis.org.allbinary.AppletUtil;

      
//not game specific package import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { GameCommandsFactory } from '../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { MyCanvas } from '../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CustomGameMenuUtil
            extends Object
         {
        

    public static add(canvas: MyCanvas){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

                        if(AppletUtil.isAppletLoader(canvas))
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                        else {
                            canvas.addCommand(gameCommandsFactory!.EXIT_COMMAND);
    

                        }
                            
}


}
                
            

