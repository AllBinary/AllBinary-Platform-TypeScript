
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

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { MotionGestureEvent } from "../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CommandFormInputProcessor } from "./CommandFormInputProcessor.js";

import { GameCommandCanvas } from "./GameCommandCanvas.js";

export class ImmediateCommandFormInputProcessor extends CommandFormInputProcessor {
        

    private readonly timeHelper: TimeDelayHelper = new TimeDelayHelper(25);
        
        

    gameCommandCanvas: GameCommandCanvas
public constructor (gameKeyEventList: BasicArrayList, playerInputId: number, gameCommandCanvas: GameCommandCanvas, form: ScrollSelectionForm){
            super(gameKeyEventList, playerInputId, gameCommandCanvas, form);
                    var gameKeyEventList = gameKeyEventList
var playerInputId = playerInputId
var gameCommandCanvas = gameCommandCanvas
var form = form


                            //For kotlin this is before the body of the constructor.
                    
this.gameCommandCanvas= gameCommandCanvas;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onPressGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent

        try {
            super.onPressGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTime())
                        
                                    {
                                    this.processInput();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.ON_PRESS_GAME_KEY, e);
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onDownGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent

        try {
            super.onDownGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTime())
                        
                                    {
                                    this.processInput();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.ON_DOWN_GAME_KEY, e);
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onUpGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent

        try {
            super.onUpGameKeyEvent(gameKeyEvent);
    

                        if(this.timeHelper!.isTime())
                        
                                    {
                                    this.processInput();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, gameInputStrings!.ON_UP_GAME_KEY, e);
    
}

}


    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
var motionGestureEvent = motionGestureEvent

        try {
            super.onMotionGestureEvent(motionGestureEvent);
    

                        if(this.timeHelper!.isTime())
                        
                                    {
                                    this.processInput();
    
this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onMotionGestureEvent", e);
    
}

}


}
                
            

