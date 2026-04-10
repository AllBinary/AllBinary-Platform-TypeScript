
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
        



import { Graphics } from "../../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicHud } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js";

    
import { BasicHudFactory } from "../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { GameNotificationEvent } from "../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationListenerInterface } from "../../../../../../../org/allbinary/game/layer/hud/event/GameNotificationListenerInterface.js";

    
import { BasicColor } from "../../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ForcedLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class GameNotificationHud extends BasicHud
                , GameNotificationListenerInterface {
        

    public static readonly NULL_GAME_NOTIFICATION: GameNotificationHud = new GameNotificationHud(BasicHudFactory.getInstance()!.TOPCENTER, BasicHudFactory.getInstance()!.HORIZONTAL, 0, 0, 0, BasicColorFactory.getInstance()!.RED);
        
        
public constructor (location: number, direction: number, maxHeight: number, maxWidth: number, bufferZone: number, basicColor: BasicColor)                        

                            : super(location, direction, maxHeight, maxWidth, bufferZone, basicColor){

            super();
            var location = location
var direction = direction
var maxHeight = maxHeight
var maxWidth = maxWidth
var bufferZone = bufferZone
var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    private readonly METHOD_NAME: string = "onGameNotificationEvent";
        
        

    private lastGameNotificationEvent: GameNotificationEvent = GameNotification.NULL_GAME_NOTIFICATION_EVENT;
        
        

                @Throws(Exception::class)
            
    public onGameNotificationEvent(gameNotificationEvent: GameNotificationEvent){
    //var gameNotificationEvent = gameNotificationEvent

    
                        if(lastGameNotificationEvent != gameNotificationEvent)
                        
                                    {
                                    lastGameNotificationEvent= gameNotificationEvent
put(gameNotificationEvent!.getString(), this, METHOD_NAME)

                                    }
                                
this.add(gameNotificationEvent!.getString(), gameNotificationEvent!.getSeconds(), gameNotificationEvent!.getBasicColorP(), gameNotificationEvent!.getPermanent())
}


    add(string: string, seconds: Integer, basicColor: BasicColor, permanent: Boolean){
var string = string
var seconds = seconds
var basicColor = basicColor
var permanent = permanent
}


                @Throws(Exception::class)
            
    public processTick(){
}


    public paint(graphics: Graphics){
var graphics = graphics
}


    public clear(){
}


}
                
            

