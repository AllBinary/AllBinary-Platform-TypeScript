
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
        



import { CompleteMotionGestureInputEventHandler } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js";

    
import { GameKeyCompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js";

    
import { GameKeyFromMotionGestureEventListener } from "../../../../../../org/allbinary/game/input/motion/action/GameKeyFromMotionGestureEventListener.js";

    
import { MotionGestureToMotionGestureActionAssociation } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureToMotionGestureActionAssociation.js";

    
import { MotionGestureConfiguration } from "../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfiguration.js";

    
import { MotionGestureConfigurationFactory } from "../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CompleteMotionGestureListenerInterface } from "./CompleteMotionGestureListenerInterface.js";

export class ResolveCompleteMotionGestureListener
            extends Object
         implements CompleteMotionGestureListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
        
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF("MotionGesture to CompleteMotionGesture Reciever", this, commonStrings!.CONSTRUCTOR);
    
CompleteMotionGestureInputEventHandler.getInstance()!.addListener(new GameKeyFromMotionGestureEventListener());
    
}


                //@Throws(Error::class)
            
    public onMotionGestureCompleted(list: BasicArrayList){
var list = list

    var configuration: MotionGestureConfiguration = MotionGestureConfigurationFactory.getInstance()!;
        
        
;
    

    var commandActionsList: BasicArrayList = configuration.getAssociateCommandActionsList()!;
        
        
;
    

    var size: number = commandActionsList!.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {

    var association: MotionGestureToMotionGestureActionAssociation = commandActionsList!.objectArray[index]! as MotionGestureToMotionGestureActionAssociation;
        
        
;
    

                        if(association.isMotionGestureArrayEquals(list) == true)
                        
                                    {
                                    
    var completeMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = association.getCommandAction();

                         as GameKeyCompleteMotionGestureInputEvent;
        
        
;
    
CompleteMotionGestureInputEventHandler.getInstance()!.fireEvent(completeMotionGestureInputEvent);
    
break;

                    

                                    }
                                
}

}


}
                
            

