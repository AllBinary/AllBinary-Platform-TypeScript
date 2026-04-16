
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
        



import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { PaintableInterface } from "../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

export interface SpecialGameInputInterface extends PaintableInterface {
        

                //@Throws(Error::class)
            
    up()

                //@Throws(Error::class)
            
    down()

                //@Throws(Error::class)
            
    right()

                //@Throws(Error::class)
            
    left()

                //@Throws(Error::class)
            
    strafeLeft()

                //@Throws(Error::class)
            
    strafeRight()

                //@Throws(Error::class)
            
    fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Error::class)
            
    special1(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Error::class)
            
    special2(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Error::class)
            
    special3(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Error::class)
            
    special4(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

                //@Throws(Error::class)
            
    special5(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent)

}
                
            

