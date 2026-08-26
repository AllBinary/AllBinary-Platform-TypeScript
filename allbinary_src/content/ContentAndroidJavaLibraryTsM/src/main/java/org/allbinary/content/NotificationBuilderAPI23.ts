
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
        



            import { System } from '../../../java/lang/System.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
//not game specific package import { Command } from '../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { Notification } from '../../../android/app/Notification.js';
      const Notification = globalThis.android.app.Notification;

      
//not game specific package import { Builder } from '../../../android/app/Notification/Builder.js';
      const Builder = globalThis.android.app.Notification.Builder;

      
//not game specific package import { PendingIntent } from '../../../android/app/PendingIntent.js';
      const PendingIntent = globalThis.android.app.PendingIntent;

      
//not game specific package import { Context } from '../../../android/content/Context.js';
      const Context = globalThis.android.content.Context;

      
//not game specific package import { Parcelable } from '../../../android/os/Parcelable.js';
      const Parcelable = globalThis.android.os.Parcelable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NotificationBuilder } from './NotificationBuilder.js';

export class NotificationBuilderAPI23 extends NotificationBuilder {
        

    public build(context: Context, command: Command, message: string, integer: Integer, pendingIntent: PendingIntent): Parcelable{

    var notification: Notification = new Builder(context).setSmallIcon(integer.intValue())!.setTicker(message)!.setWhen(Date.now())!.setContentTitle(command.getLabel())!.setContentText(message)!.setContentIntent(pendingIntent)!.build()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return notification;
    
}


}
                
            

