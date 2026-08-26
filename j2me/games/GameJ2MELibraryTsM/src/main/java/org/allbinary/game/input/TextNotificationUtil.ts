
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
//not game specific package import { GameNotificationEvent } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { ErrorSound } from '../../../../org/allbinary/media/audio/ErrorSound.js';
      const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
//not game specific package import { PrimaryPlayerQueueFactory } from '../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
      const PrimaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.PrimaryPlayerQueueFactory;

      
//not game specific package import { SelectSound } from '../../../../org/allbinary/media/audio/SelectSound.js';
      const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TextNotificationUtil
            extends Object
         {
        

    private static readonly instance: TextNotificationUtil = new TextNotificationUtil();

    public static getInstance(): TextNotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TextNotificationUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public fireError(message: string){
PrimaryPlayerQueueFactory.getInstance()!.add(ErrorSound.getInstance());
    
this.fire(message);
    
}


                //@Throws(Exception.constructor)
            
    public fireNew(message: string){
PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.fire(message);
    
}


                //@Throws(Exception.constructor)
            
    public fireSuccess(message: string){
PrimaryPlayerQueueFactory.getInstance()!.add(SelectSound.getInstance());
    
this.fire(message);
    
}


    private readonly TWO: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(2)!;

    private readonly FALSE: Boolean = BooleanFactory.getInstance()!.FALSE;

    private readonly gameNotificationEventHandler: GameNotificationEventHandler = GameNotificationEventHandler.getInstance()!;

                //@Throws(Exception.constructor)
            
    public fire(message: string){

    var gameNotificationEvent: GameNotificationEvent = new GameNotificationEvent(this, message, this.TWO, BasicColorFactory.getInstance()!.RED, this.FALSE);;
    
this.gameNotificationEventHandler!.fireEvent(gameNotificationEvent);
    
}


}
                
            

