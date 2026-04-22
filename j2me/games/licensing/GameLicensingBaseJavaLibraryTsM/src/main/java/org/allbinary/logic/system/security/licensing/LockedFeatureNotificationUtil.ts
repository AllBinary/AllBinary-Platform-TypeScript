
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
        



import { GameNotificationEvent } from "../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { ErrorSound } from "../../../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { PrimaryPlayerQueueFactory } from "../../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LicenseStrings } from "./LicenseStrings.js";

export class LockedFeatureNotificationUtil
            extends Object
         {
        

    private static readonly instance: LockedFeatureNotificationUtil = new LockedFeatureNotificationUtil();
        
        

    public static getInstance(): LockedFeatureNotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly gameNotificationEvent: GameNotificationEvent = new GameNotificationEvent(this, LicenseStrings.getInstance()!.LOCKED, SmallIntegerSingletonFactory.getInstance()!.getInstance(3), BasicColorFactory.getInstance()!.RED, BooleanFactory.getInstance()!.FALSE);
        
        

                //@Throws(Error::class)
            
    public fire(){
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
GameNotificationEventHandler.getInstance()!.fireEvent(gameNotificationEvent);
    
}


                //@Throws(Error::class)
            
    public fire(basicColor: BasicColor){
var basicColor = basicColor
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
gameNotificationEvent!.setBasicColorP(basicColor);
    
GameNotificationEventHandler.getInstance()!.fireEvent(gameNotificationEvent);
    
}


}
                
            

