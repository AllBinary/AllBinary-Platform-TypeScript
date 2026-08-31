
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { PlayerGameInputCompositeInterface } from '../../../../org/allbinary/game/input/PlayerGameInputCompositeInterface.js';
      //not GWT import const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputProcessor extends Processor {
        

    private readonly playerGameInputCompositeInterface: PlayerGameInputCompositeInterface;

public constructor (playerGameInputCompositeInterface: PlayerGameInputCompositeInterface){

            super();
        this.playerGameInputCompositeInterface= playerGameInputCompositeInterface;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.playerGameInputCompositeInterface!.getPlayerGameInput()!.update();
    
}


}



