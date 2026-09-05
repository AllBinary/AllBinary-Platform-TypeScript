
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface SpecialGameInputInterface extends PaintableInterface {
        

                //@Throws(Exception.constructor)
            
    up()

                //@Throws(Exception.constructor)
            
    down()

                //@Throws(Exception.constructor)
            
    right()

                //@Throws(Exception.constructor)
            
    left()

                //@Throws(Exception.constructor)
            
    strafeLeft()

                //@Throws(Exception.constructor)
            
    strafeRight()

                //@Throws(Exception.constructor)
            
    fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Exception.constructor)
            
    special1(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Exception.constructor)
            
    special2(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Exception.constructor)
            
    special3(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Exception.constructor)
            
    special4(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Exception.constructor)
            
    special5(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

}



