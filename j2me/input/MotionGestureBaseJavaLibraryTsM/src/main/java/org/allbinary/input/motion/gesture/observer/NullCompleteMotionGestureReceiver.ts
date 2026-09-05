
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CompleteMotionGestureListenerInterface } from './CompleteMotionGestureListenerInterface.js';
//not GWT import - same folder const CompleteMotionGestureListenerInterface = globalThis.org.allbinary.input.motion.gesture.observer.CompleteMotionGestureListenerInterface;

                
export class NullCompleteMotionGestureReceiver
            extends Object
         implements CompleteMotionGestureListenerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("Null Gesture Reciever", this, commonStrings!.CONSTRUCTOR);
    
}


                //@Throws(Exception.constructor)
            
    public onMotionGestureCompleted(list: BasicArrayList){
}


}



