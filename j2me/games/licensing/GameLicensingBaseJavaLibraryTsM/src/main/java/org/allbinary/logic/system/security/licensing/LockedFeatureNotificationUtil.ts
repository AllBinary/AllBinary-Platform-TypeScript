
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
        
//not game specific package import { GameNotificationEvent } from '../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { ErrorSound } from '../../../../../../org/allbinary/media/audio/ErrorSound.js';
      const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
//not game specific package import { PrimaryPlayerQueueFactory } from '../../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
      const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LicenseStrings } from './LicenseStrings.js';

export class LockedFeatureNotificationUtil
            extends Object
         {
        

    private static readonly instance: LockedFeatureNotificationUtil = new LockedFeatureNotificationUtil();

    public static getInstance(): LockedFeatureNotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LockedFeatureNotificationUtil.instance;
    
}


    private readonly gameNotificationEvent: GameNotificationEvent = new GameNotificationEvent(this, LicenseStrings.getInstance()!.LOCKED, SmallIntegerSingletonFactory.getInstance()!.getAt(3), BasicColorFactory.getInstance()!.RED, BooleanFactory.getInstance()!.FALSE);

                //@Throws(Exception.constructor)
            
    public fire(){
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
GameNotificationEventHandler.getInstance()!.fireEvent(this.gameNotificationEvent);
    
}


                //@Throws(Exception.constructor)
            
    public fireWithColor(basicColor: BasicColor){
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
this.gameNotificationEvent!.setBasicColorP(basicColor);
    
GameNotificationEventHandler.getInstance()!.fireEvent(this.gameNotificationEvent);
    
}


}
                
            

