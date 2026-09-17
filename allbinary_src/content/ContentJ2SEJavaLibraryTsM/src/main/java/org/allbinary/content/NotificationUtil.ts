
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
        
import { Command } from '../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Context } from './Context.js';
//not GWT import - same folder const Contextimport { NotificationManager } from './NotificationManager.js';
//not GWT import - same folder const NotificationManagerimport { CommandUriAction } from './CommandUriAction.js';
//not GWT import - same folder const CommandUriActionimport { Intent } from './Intent.js';
//not GWT import - same folder const Intentimport { Notification } from './Notification.js';
//not GWT import - same folder const Notificationimport { PendingIntent } from './PendingIntent.js';
//not GWT import - same folder const PendingIntent
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



