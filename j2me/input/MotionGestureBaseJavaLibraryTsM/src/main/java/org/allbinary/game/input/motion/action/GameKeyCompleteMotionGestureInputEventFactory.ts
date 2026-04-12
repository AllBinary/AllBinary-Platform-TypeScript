
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameKeyCompleteMotionGestureInputEventFactory
            extends Object
         {
        

    private static readonly SINGLETON: GameKeyCompleteMotionGestureInputEventFactory = new GameKeyCompleteMotionGestureInputEventFactory();
        
        

    public static getInstance(): GameKeyCompleteMotionGestureInputEventFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly eventList: BasicArrayList = new BasicArrayList();
        
        

    public add(gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent){
var gameKeyCompleteMotionGestureInputEvent = gameKeyCompleteMotionGestureInputEvent
eventList!.add(gameKeyCompleteMotionGestureInputEvent);
    
}


    public updateAll(){
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.appendint(eventList!.size())!.toString(), this, "updateAll");
    




                        for (
    var index: number = eventList!.size() -1;
        
        
index >= 0; index--)
        {

    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = eventList!.objectArray[index]! as GameKeyCompleteMotionGestureInputEvent;
        
        
;
    
gameKeyCompleteMotionGestureInputEvent!.update();
    
}

}


}
                
            

