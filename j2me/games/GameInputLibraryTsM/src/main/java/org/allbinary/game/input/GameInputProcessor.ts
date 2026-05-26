
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { GameKeyEvent } from '../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInputProcessor
            extends Object
         {
        

    private static readonly instance: GameInputProcessor = new GameInputProcessor();

    public static getInstance(): GameInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInputProcessor.instance;
    
}


protected constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public processReleasedEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public processAnalog(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, analogValue: number){
}


                //@Throws(Exception.constructor)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: Integer){
}


                //@Throws(Exception.constructor)
            
    public processReleased(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: Integer){
}


}
                
            

