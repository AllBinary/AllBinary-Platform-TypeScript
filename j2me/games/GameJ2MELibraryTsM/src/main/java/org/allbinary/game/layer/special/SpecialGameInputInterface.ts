
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
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



