
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

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { TsUtil } from "../../../org/allbinary/logic/TsUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Context } from "./Context.js";

import { CommandUriAction } from "./CommandUriAction.js";

import { PendingIntent } from "./PendingIntent.js";

export class NotificationUtil
            extends Object
         {
        

    private static readonly SINGLETON: NotificationUtil = new NotificationUtil();
        
        

    public static getInstance(): NotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private notificationManager: NotificationManager = ResourceUtil.getInstance()!.getContext()!.getSystemService(Context.NOTIFICATION_SERVICE); as NotificationManager;
        
        

    public notify(command: Command, resource: string, message: string){
var command = command
var resource = resource
var message = message

    var context: Context = ResourceUtil.getInstance()!.getContext()!;
        
        
;
    

    var intent: Intent = CommandUriAction.getInstance()!.getIntent(command)!;
        
        
;
    

    var integer: Integer = ResourceUtil.getInstance()!.getResourceId(resource)!;
        
        
;
    

    var notification: Notification = new Notification(integer.toInt(), message, System.currentTimeMillis());
        
        
;
    

    var pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, 0)!;
        
        
;
    
notification.setLatestEventInfo(context, command.getLabel(), message, pendingIntent);
    
notificationManager!.notify(TsUtil.getInstance()!.hashCode(command), notification);
    
}


}
                
            

