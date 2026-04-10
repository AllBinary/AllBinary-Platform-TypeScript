
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { GameInputProcessor } from "../../../../../org/allbinary/game/input/GameInputProcessor.js";

    

export class AnalogInputBuilder
            extends Object
         {
        

    private static readonly instance: AnalogInputBuilder = new AnalogInputBuilder();
        
        

    public static getInstance(): AnalogInputBuilder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public disable(inputProcessorArray: GameInputProcessor[], collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer){
    //var inputProcessorArray = inputProcessorArray
    //var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
inputProcessorArray[Canvas.UP]= SpecialUpGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.DOWN]= SpecialDownGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.RIGHT]= SpecialRightGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.LEFT]= SpecialLeftGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.KEY_NUM0]= Special1GameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.KEY_NUM5]= Special3GameInputProcessor(collidableDestroyableDamageableLayer)
}


    public enable(inputProcessorArray: GameInputProcessor[], collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer){
    //var inputProcessorArray = inputProcessorArray
    //var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
inputProcessorArray[Canvas.UP]= SpecialAnalogUpGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.DOWN]= SpecialAnalogDownGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.RIGHT]= SpecialAnalogRightGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.LEFT]= SpecialAnalogLeftGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.KEY_NUM0]= SpecialAnalogLeftTriggerGameInputProcessor(collidableDestroyableDamageableLayer)
inputProcessorArray[Canvas.KEY_NUM5]= SpecialAnalogRightTriggerGameInputProcessor(collidableDestroyableDamageableLayer)
}


}
                
            

