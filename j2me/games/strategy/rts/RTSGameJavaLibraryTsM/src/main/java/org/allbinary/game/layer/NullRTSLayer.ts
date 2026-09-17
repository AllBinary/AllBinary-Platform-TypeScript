
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { GameNotificationHud } from '../../../../org/allbinary/game/ag/layer/hud/basic/notification/GameNotificationHud.js';
//not GWT import const GameNotificationHud

import { DestroyedEvent } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
//not GWT import const DestroyedEvent

import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInput

import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory

import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
//not GWT import const RTSFormInput

import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
//not GWT import const Capital

import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm

import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { Sound } from '../../../../org/allbinary/media/audio/Sound.js';
//not GWT import const Sound

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullPathFindingLayer } from './NullPathFindingLayer.js';
//not GWT import - same folder const NullPathFindingLayer
import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
//not GWT import - same folder const RTSPlayerLayerInterface
import { PlayerOwnedRTSLayers } from './PlayerOwnedRTSLayers.js';
//not GWT import - same folder const PlayerOwnedRTSLayers

export class NullRTSLayer extends NullPathFindingLayer implements RTSPlayerLayerInterface {
        

    public static readonly NULL_RTS_LAYER: NullRTSLayer = new NullRTSLayer();

    public getName(): string{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){



                            throw new RuntimeException();
                    
}


    public initInputProcessors(){



                            throw new RuntimeException();
                    
}


    public getGameNotificationHud(): GameNotificationHud{



                            throw new RuntimeException();
                    
}


    public getCurrentScrollSelectionForm(): ScrollSelectionForm{



                            throw new RuntimeException();
                    
}


    public setCurrentScrollSelectionForm(currentScrollSelectionForm: ScrollSelectionForm){



                            throw new RuntimeException();
                    
}


    public getBuildingScrollSelectionForm(): ScrollSelectionForm{



                            throw new RuntimeException();
                    
}


    public getPlayerGameInput(): PlayerGameInput{



                            throw new RuntimeException();
                    
}


    public onEvent(eventObject: AllBinaryEventObject){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public onDestroyed(destroyedEvent: DestroyedEvent){



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){



                            throw new RuntimeException();
                    
}


    public getCapital(): Capital{



                            throw new RuntimeException();
                    
}


    public getRTSFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullRTSFormInputFactory.getInstance();;
    
}


    public add(sound: Sound){



                            throw new RuntimeException();
                    
}


    public getPlayerOwnedRTSLayers(): PlayerOwnedRTSLayers{



                            throw new RuntimeException();
                    
}


    public implmentsArtificialIntelligenceCompositeInterface(): boolean{



                            throw new RuntimeException();
                    
}


}



