
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
        
//not plain js import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
      //not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;

      
import { BasicHudFactory } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      //not GWT import const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;

      
import { GameNotificationEvent } from '../../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      //not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
import { GameNotificationListenerInterface } from '../../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationListenerInterface.js';
      //not GWT import const GameNotificationListenerInterface = globalThis.org.allbinary.game.layer.hud.event.GameNotificationListenerInterface;

      
import { BasicColor } from '../../../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not plain js import { ForcedLogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameNotification } from './GameNotification.js';
//not GWT import const GameNotification = globalThis.org.allbinary.game.ag.layer.hud.basic.notification.GameNotification;

                
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



