
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../java/lang/Exception.js";
        
            import { Integer } from "../../../../java/lang/Integer.js";
        
import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















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


                //@Throws(Exception::class)
            
    public processEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Exception::class)
            
    public processReleasedEvent(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Exception::class)
            
    public processAnalog(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, analogValue: number){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
    //var analogValue = analogValue
}


                //@Throws(Exception::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: number){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var keyAsInteger = keyAsInteger
}


                //@Throws(Exception::class)
            
    public processReleased(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: number){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var keyAsInteger = keyAsInteger
}


}
                
            

