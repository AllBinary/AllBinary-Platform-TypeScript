
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
        



import { Command } from "../../../javax/microedition/lcdui/Command.js";

    
import { Notification } from "../../../android/app/Notification.js";

    
import { NotificationManager } from "../../../android/app/NotificationManager.js";

    
import { PendingIntent } from "../../../android/app/PendingIntent.js";

    
import { Context } from "../../../android/content/Context.js";

    
import { Intent } from "../../../android/content/Intent.js";

    
import { AndroidInfoFactory } from "../../../org/allbinary/android/AndroidInfoFactory.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class NotificationUtil
            extends Object
         {
        

    private static readonly SINGLETON: NotificationUtil = new NotificationUtil();
        
        

    public static getInstance(): NotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private notificationManager: NotificationManager = ResourceUtil.getInstance()!.getContext()!.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager;
        
        

    private readonly notificationBuilder: NotificationBuilder
private constructor (){

            super();
            
    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        


    
                        if(SDK_VERSION > 22)
                        
                                    {
                                    notificationBuilder= NotificationBuilderAPI23()

                                    }
                                
                        else {
                            notificationBuilder= NotificationBuilder.NULL_NOTIFICATION_BUILDER

                        }
                            
}


    public notify(command: Command, resource: string, message: string){
    //var command = command
    //var resource = resource
    //var message = message

    var context: Context = ResourceUtil.getInstance()!.getContext()!;
        
        


    var intent: Intent = CommandUriAction.getInstance()!.getIntent(command)!;
        
        


    var integer: Integer = ResourceUtil.getInstance()!.getResourceId(resource)!;
        
        


    var FLAG_IMMUTABLE: number = 1 shl 26;
        
        


    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;
        
        


    var pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, SDK_VERSION > 22
                        ?       
                                FLAG_IMMUTABLE
                                :

                            0;

    )!;
        
        


    
                        if(notificationBuilder == 
                                    null
                                )
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.NOT_IMPLEMENTED)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
build(context, command, message, integer, pendingIntent)
}


}
                
            

