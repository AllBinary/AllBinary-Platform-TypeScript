
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { System } from '../../../java/lang/System.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Context } from './Context.js';
//not GWT import - same folder const Context = globalThis.org.allbinary.content.Context;

                import { NotificationManager } from './NotificationManager.js';
//not GWT import - same folder const NotificationManager = globalThis.org.allbinary.content.NotificationManager;

                import { CommandUriAction } from './CommandUriAction.js';
//not GWT import - same folder const CommandUriAction = globalThis.org.allbinary.content.CommandUriAction;

                import { Intent } from './Intent.js';
//not GWT import - same folder const Intent = globalThis.org.allbinary.content.Intent;

                import { Notification } from './Notification.js';
//not GWT import - same folder const Notification = globalThis.org.allbinary.content.Notification;

                import { PendingIntent } from './PendingIntent.js';
//not GWT import - same folder const PendingIntent = globalThis.org.allbinary.content.PendingIntent;

                
export class NotificationUtil
            extends Object
         {
        

    private static readonly SINGLETON: NotificationUtil = new NotificationUtil();

    public static getInstance(): NotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NotificationUtil.SINGLETON;
    
}


    private notificationManager: NotificationManager = ResourceUtil.getInstance()!.getContext()!.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager;

    public notify(command: Command, resource: string, message: string){

    var context: Context = ResourceUtil.getInstance()!.getContext()!;;
    

    var intent: Intent = CommandUriAction.getInstance()!.getIntent(command)!;;
    

    var integer: Integer = ResourceUtil.getInstance()!.getResourceId(resource)!;;
    

    var notification: Notification = new Notification(integer.intValue(), message, Date.now());;
    

    var pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, 0)!;;
    
notification.setLatestEventInfo(context, command.getLabel(), message, pendingIntent);
    
this.notificationManager!.notify(TsUtil.getInstance()!.hashCode(command), notification);
    
}


}



