
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialGameInputInterfaceProcessor } from './SpecialGameInputInterfaceProcessor.js';
//not GWT import - same folder const SpecialGameInputInterfaceProcessor = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterfaceProcessor;

                import { SpecialGameInputInterface } from './SpecialGameInputInterface.js';
//not GWT import - same folder const SpecialGameInputInterface = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterface;

                
export class SpecialFireGameInputInterfaceProcessor extends SpecialGameInputInterfaceProcessor {
        

public constructor (collidableDestroyableDamageableLayer: SpecialGameInputInterface){
            super(collidableDestroyableDamageableLayer);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
this.specialGameInputInterface!.fire(allbinaryLayerManager, gameKeyEvent);
    
}


}



