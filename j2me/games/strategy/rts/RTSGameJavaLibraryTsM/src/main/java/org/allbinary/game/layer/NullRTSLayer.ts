
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { DestroyedEvent } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js";

    
import { PlayerGameInput } from "../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { NullRTSFormInputFactory } from "../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js";

    
import { RTSFormInput } from "../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { Capital } from "../../../../org/allbinary/game/layer/capital/Capital.js";

    
import { GameNotificationHud } from "../../../../org/allbinary/game/layer/hud/basic/notification/GameNotificationHud.js";

    
import { ScrollSelectionForm } from "../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { Sound } from "../../../../org/allbinary/media/audio/Sound.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NullPathFindingLayer } from "./NullPathFindingLayer.js";

import { PlayerOwnedRTSLayers } from "./PlayerOwnedRTSLayers.js";

export class NullRTSLayer extends NullPathFindingLayer implements RTSPlayerLayerInterface {
        

    public static readonly NULL_RTS_LAYER: NullRTSLayer = new NullRTSLayer();
        
        

    public getName(): string{



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager



                            throw new RuntimeException()
}


    public initInputProcessors(){



                            throw new RuntimeException()
}


    public getGameNotificationHud(): GameNotificationHud{



                            throw new RuntimeException()
}


    public getCurrentScrollSelectionForm(): ScrollSelectionForm{



                            throw new RuntimeException()
}


    public setCurrentScrollSelectionForm(currentScrollSelectionForm: ScrollSelectionForm){
var currentScrollSelectionForm = currentScrollSelectionForm



                            throw new RuntimeException()
}


    public getBuildingScrollSelectionForm(): ScrollSelectionForm{



                            throw new RuntimeException()
}


    public getPlayerGameInput(): PlayerGameInput{



                            throw new RuntimeException()
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public onDestroyed(destroyedEvent: DestroyedEvent){
var destroyedEvent = destroyedEvent



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager



                            throw new RuntimeException()
}


    public getCapital(): Capital{



                            throw new RuntimeException()
}


    public getRTSFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRTSFormInputFactory.getInstance();

                        ;
    
}


    public add(sound: Sound){
var sound = sound



                            throw new RuntimeException()
}


    public getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers{



                            throw new RuntimeException()
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw new RuntimeException()
}


}
                
            

