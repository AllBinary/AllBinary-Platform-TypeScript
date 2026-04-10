
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
        



import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

export class GameInputProcessor
            extends Object
         {
        

    private static readonly instance: GameInputProcessor = new GameInputProcessor();
        
        

    public static getInstance(): GameInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

protected constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public processReleased(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent, analogValue: number){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var gameKeyEvent = gameKeyEvent
    //var analogValue = analogValue
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: Integer){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var keyAsInteger = keyAsInteger
}


                //@Throws(Error::class)
            
    public processReleased(allbinaryLayerManager: AllBinaryLayerManager, keyAsInteger: Integer){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var keyAsInteger = keyAsInteger
}


}
                
            

