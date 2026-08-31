
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSPlayerGameInputProcessor } from './RTSPlayerGameInputProcessor.js';
//not GWT import const RTSPlayerGameInputProcessor = globalThis.org.allbinary.game.input.RTSPlayerGameInputProcessor;

                import { RTSPlayerGameInput } from './RTSPlayerGameInput.js';
//not GWT import const RTSPlayerGameInput = globalThis.org.allbinary.game.input.RTSPlayerGameInput;

                
export class RTSPlayerRightGameInputProcessor extends RTSPlayerGameInputProcessor {
        

public constructor (rtsPlayerGameInput: RTSPlayerGameInput){
            super(rtsPlayerGameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
this.rtsPlayerGameInput!.right();
    
}


}



