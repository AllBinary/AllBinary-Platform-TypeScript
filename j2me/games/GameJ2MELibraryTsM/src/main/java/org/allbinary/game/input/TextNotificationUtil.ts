
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { GameNotificationEvent } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { ErrorSound } from "../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { PrimaryPlayerQueueFactory } from "../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../org/allbinary/media/audio/SelectSound.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TextNotificationUtil
            extends Object
         {
        

    private static readonly instance: TextNotificationUtil = new TextNotificationUtil();
        
        

    public static getInstance(): TextNotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public fireError(message: string){
var message = message
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
this.fire(message);
    
}


                //@Throws(Error::class)
            
    public fireNew(message: string){
var message = message
PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.fire(message);
    
}


                //@Throws(Error::class)
            
    public fireSuccess(message: string){
var message = message
PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.fire(message);
    
}


    private readonly TWO: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(2)!;
        
        

    private readonly FALSE: Boolean = BooleanFactory.getInstance()!.FALSE;
        
        

    private readonly gameNotificationEventHandler: GameNotificationEventHandler = GameNotificationEventHandler.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public fire(message: string){
var message = message

    var gameNotificationEvent: GameNotificationEvent = new GameNotificationEvent(this, message, TWO, BasicColorFactory.getInstance()!.RED, FALSE);
        
        
;
    
gameNotificationEventHandler!.fireEvent(gameNotificationEvent);
    
}


}
                
            

