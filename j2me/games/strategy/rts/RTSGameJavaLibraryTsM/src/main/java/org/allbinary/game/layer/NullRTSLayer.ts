
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

    

export class NullRTSLayer extends NullPathFindingLayer
                , RTSPlayerLayerInterface {
        

    public static readonly NULL_RTS_LAYER: NullRTSLayer = new NullRTSLayer();
        
        

    public getName(): string{



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager



                            throw RuntimeException()
}


    public initInputProcessors(){



                            throw RuntimeException()
}


    public getGameNotificationHud(): GameNotificationHud{



                            throw RuntimeException()
}


    public getCurrentScrollSelectionForm(): ScrollSelectionForm{



                            throw RuntimeException()
}


    public setCurrentScrollSelectionForm(currentScrollSelectionForm: ScrollSelectionForm){
var currentScrollSelectionForm = currentScrollSelectionForm



                            throw RuntimeException()
}


    public getBuildingScrollSelectionForm(): ScrollSelectionForm{



                            throw RuntimeException()
}


    public getPlayerGameInput(): PlayerGameInput{



                            throw RuntimeException()
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    public onDestroyed(destroyedEvent: DestroyedEvent){
var destroyedEvent = destroyedEvent



                            throw RuntimeException()
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager



                            throw RuntimeException()
}


    public getCapital(): Capital{



                            throw RuntimeException()
}


    public getRTSFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRTSFormInputFactory.getInstance();

                        ;
    
}


    public add(sound: Sound){
var sound = sound



                            throw RuntimeException()
}


    public getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers{



                            throw RuntimeException()
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw RuntimeException()
}


}
                
            

