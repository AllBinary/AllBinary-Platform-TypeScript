
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyCompleteMotionGestureInputEvent } from './GameKeyCompleteMotionGestureInputEvent.js';
//not GWT import - same folder const GameKeyCompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent;

                
export class GameKeyCompleteMotionGestureInputEventFactory
            extends Object
         {
        

    private static readonly SINGLETON: GameKeyCompleteMotionGestureInputEventFactory = new GameKeyCompleteMotionGestureInputEventFactory();

    public static getInstance(): GameKeyCompleteMotionGestureInputEventFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameKeyCompleteMotionGestureInputEventFactory.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly eventList: BasicArrayList = new BasicArrayListD();

    public add(gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent){
this.eventList!.add(gameKeyCompleteMotionGestureInputEvent);
    
}


    public updateAll(){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.appendint(this.eventList!.size())!.toString(), this, "updateAll");
    




                        for (
    var index: number = this.eventList!.size() -1;index >= 0; index--)
        {

    var gameKeyCompleteMotionGestureInputEvent: GameKeyCompleteMotionGestureInputEvent = this.eventList!.objectArray[index]! as GameKeyCompleteMotionGestureInputEvent;;
    
gameKeyCompleteMotionGestureInputEvent!.update();
    
}

}


}



