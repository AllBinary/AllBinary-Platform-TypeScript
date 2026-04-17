
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { Command } from "../../../javax/microedition/lcdui/Command.js";

    
import { Notification } from "../../../android/app/Notification.js";

    
import { Builder } from "../../../android/app/Notification/Builder.js";

    
import { PendingIntent } from "../../../android/app/PendingIntent.js";

    
import { Context } from "../../../android/content/Context.js";

    
import { Parcelable } from "../../../android/os/Parcelable.js";

    

export class NotificationBuilderAPI23 extends NotificationBuilder {
        

    public build(context: Context, command: Command, message: string, integer: Integer, pendingIntent: PendingIntent): Parcelable{
var context = context
var command = command
var message = message
var integer = integer
var pendingIntent = pendingIntent

    var notification: Notification = new Builder(context).
                            setSmallIcon(integer.toInt())!.setTicker(message)!.setWhen(System.currentTimeMillis())!.setContentTitle(command.getLabel())!.setContentText(message)!.setContentIntent(pendingIntent)!.build()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return notification;
    
}


}
                
            

