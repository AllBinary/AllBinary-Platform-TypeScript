
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { GameInputProcessor } from '../../../../../org/allbinary/game/input/GameInputProcessor.js';
//not GWT import const GameInputProcessor
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialUpGameInputProcessor } from './SpecialUpGameInputProcessor.js';
//not GWT import - same folder const SpecialUpGameInputProcessorimport { SpecialDownGameInputProcessor } from './SpecialDownGameInputProcessor.js';
//not GWT import - same folder const SpecialDownGameInputProcessorimport { SpecialRightGameInputProcessor } from './SpecialRightGameInputProcessor.js';
//not GWT import - same folder const SpecialRightGameInputProcessorimport { SpecialLeftGameInputProcessor } from './SpecialLeftGameInputProcessor.js';
//not GWT import - same folder const SpecialLeftGameInputProcessorimport { Special1GameInputProcessor } from './Special1GameInputProcessor.js';
//not GWT import - same folder const Special1GameInputProcessorimport { Special3GameInputProcessor } from './Special3GameInputProcessor.js';
//not GWT import - same folder const Special3GameInputProcessorimport { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';
//not GWT import - same folder const CollidableDestroyableDamageableLayerimport { SpecialAnalogUpGameInputProcessor } from './SpecialAnalogUpGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogUpGameInputProcessorimport { SpecialAnalogDownGameInputProcessor } from './SpecialAnalogDownGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogDownGameInputProcessorimport { SpecialAnalogRightGameInputProcessor } from './SpecialAnalogRightGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogRightGameInputProcessorimport { SpecialAnalogLeftGameInputProcessor } from './SpecialAnalogLeftGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogLeftGameInputProcessorimport { SpecialAnalogLeftTriggerGameInputProcessor } from './SpecialAnalogLeftTriggerGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogLeftTriggerGameInputProcessorimport { SpecialAnalogRightTriggerGameInputProcessor } from './SpecialAnalogRightTriggerGameInputProcessor.js';
//not GWT import - same folder const SpecialAnalogRightTriggerGameInputProcessor
export class AnalogInputBuilder
            extends Object
         {
        

    private static readonly instance: AnalogInputBuilder = new AnalogInputBuilder();

    public static getInstance(): AnalogInputBuilder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AnalogInputBuilder.instance;
    
}


    public disable(inputProcessorArray: GameInputProcessor[], collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer){
inputProcessorArray[Canvas.UP]= new SpecialUpGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.DOWN]= new SpecialDownGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.RIGHT]= new SpecialRightGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.LEFT]= new SpecialLeftGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.KEY_NUM0]= new Special1GameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.KEY_NUM5]= new Special3GameInputProcessor(collidableDestroyableDamageableLayer);
    
}


    public enable(inputProcessorArray: GameInputProcessor[], collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer){
inputProcessorArray[Canvas.UP]= new SpecialAnalogUpGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.DOWN]= new SpecialAnalogDownGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.RIGHT]= new SpecialAnalogRightGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.LEFT]= new SpecialAnalogLeftGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.KEY_NUM0]= new SpecialAnalogLeftTriggerGameInputProcessor(collidableDestroyableDamageableLayer);
    
inputProcessorArray[Canvas.KEY_NUM5]= new SpecialAnalogRightTriggerGameInputProcessor(collidableDestroyableDamageableLayer);
    
}


}



