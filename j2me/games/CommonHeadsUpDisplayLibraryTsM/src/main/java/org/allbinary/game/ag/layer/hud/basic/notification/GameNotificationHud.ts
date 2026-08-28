
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
//not game specific package import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
//not game specific package import { BasicHudFactory } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;

      
//not game specific package import { GameNotificationEvent } from '../../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationListenerInterface } from '../../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationListenerInterface.js';
      const GameNotificationListenerInterface = globalThis.org.allbinary.game.layer.hud.event.GameNotificationListenerInterface;

      
//not game specific package import { BasicColor } from '../../../../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameNotification } from './GameNotification.js';

export class GameNotificationHud extends BasicHud implements GameNotificationListenerInterface {
        

    public static readonly NULL_GAME_NOTIFICATION: GameNotificationHud = new GameNotificationHud(BasicHudFactory.getInstance()!.TOPCENTER, BasicHudFactory.getInstance()!.HORIZONTAL, 0, BasicColorFactory.getInstance()!.RED);

public constructor (location: number, direction: number, bufferZone: number, basicColor: BasicColor){
            super(location, direction, bufferZone, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    private readonly METHOD_NAME: string = "onGameNotificationEvent";

    private lastGameNotificationEvent: GameNotificationEvent = GameNotification.NULL_GAME_NOTIFICATION_EVENT;

                //@Throws(Exception.constructor)
            
    public onGameNotificationEvent(gameNotificationEvent: GameNotificationEvent){

                        if(this.lastGameNotificationEvent != gameNotificationEvent)
                        
                                    {
                                    this.lastGameNotificationEvent= gameNotificationEvent;
    
this.logUtil!.putF(gameNotificationEvent!.getString(), this, this.METHOD_NAME);
    

                                    }
                                
this.add(gameNotificationEvent!.getString(), gameNotificationEvent!.getSeconds(), gameNotificationEvent!.getBasicColorP(), gameNotificationEvent!.getPermanent());
    
}


    add(string: string, seconds: Integer, basicColor: BasicColor, permanent: Boolean){
}


                //@Throws(Exception.constructor)
            
    public processTick(){
}


    public paint(graphics: Graphics){
}


    public clear(){
}


}



