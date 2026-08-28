
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
        
//not game specific package import { DestroyedEvent } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
      const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;

      
//not game specific package import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
      const PlayerGameInput = globalThis.org.allbinary.game.input.PlayerGameInput;

      
//not game specific package import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
      const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
//not game specific package import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
      const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
//not game specific package import { Capital } from '../../../../org/allbinary/game/layer/capital/Capital.js';
      const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
//not game specific package import { GameNotificationHud } from '../../../../org/allbinary/game/layer/hud/basic/notification/GameNotificationHud.js';
      const GameNotificationHud = globalThis.org.allbinary.game.layer.hud.basic.notification.GameNotificationHud;

      
//not game specific package import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { Sound } from '../../../../org/allbinary/media/audio/Sound.js';
      const Sound = globalThis.org.allbinary.media.audio.Sound;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NullPathFindingLayer } from './NullPathFindingLayer.js';
import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
import { PlayerOwnedRTSLayers } from './PlayerOwnedRTSLayers.js';

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



