
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
        
            import { Integer } from '../../../java/lang/Integer.js';
        
//not plain js import { Command } from '../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
import { Notification } from '../../../android/app/Notification.js';
      //not GWT import const Notification = globalThis.android.app.Notification;

      
import { NotificationManager } from '../../../android/app/NotificationManager.js';
      //not GWT import const NotificationManager = globalThis.android.app.NotificationManager;

      
import { PendingIntent } from '../../../android/app/PendingIntent.js';
      //not GWT import const PendingIntent = globalThis.android.app.PendingIntent;

      
import { Context } from '../../../android/content/Context.js';
      //not GWT import const Context = globalThis.android.content.Context;

      
import { Intent } from '../../../android/content/Intent.js';
      //not GWT import const Intent = globalThis.android.content.Intent;

      
import { AndroidInfoFactory } from '../../../org/allbinary/android/AndroidInfoFactory.js';
      //not GWT import const AndroidInfoFactory = globalThis.org.allbinary.android.AndroidInfoFactory;

      
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      //not GWT import const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NotificationBuilder } from './NotificationBuilder.js';
//not GWT import const NotificationBuilder = globalThis.org.allbinary.content.NotificationBuilder;

                import { NotificationBuilderAPI23 } from './NotificationBuilderAPI23.js';
//not GWT import const NotificationBuilderAPI23 = globalThis.org.allbinary.content.NotificationBuilderAPI23;

                import { CommandUriAction } from './CommandUriAction.js';
//not GWT import const CommandUriAction = globalThis.org.allbinary.content.CommandUriAction;

                
export class NotificationUtil
            extends Object
         {
        

    private static readonly SINGLETON: NotificationUtil = new NotificationUtil();

    public static getInstance(): NotificationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NotificationUtil.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private notificationManager: NotificationManager = ResourceUtil.getInstance()!.getContext()!.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager;

    private readonly notificationBuilder: NotificationBuilder;

private constructor (){

            super();
        
    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

                        if(SDK_VERSION > 22)
                        
                                    {
                                    this.notificationBuilder= new NotificationBuilderAPI23();
    

                                    }
                                
                        else {
                            this.notificationBuilder= NotificationBuilder.NULL_NOTIFICATION_BUILDER;
    

                        }
                            
}


    public notify(command: Command, resource: string, message: string){

    var context: Context = ResourceUtil.getInstance()!.getContext()!;;
    

    var intent: Intent = CommandUriAction.getInstance()!.getIntent(command)!;;
    

    var integer: Integer = ResourceUtil.getInstance()!.getResourceId(resource)!;;
    

    var FLAG_IMMUTABLE: number = 1<<26;;
    

    var SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

    var pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, SDK_VERSION > 22
                        ?       
                                FLAG_IMMUTABLE
                                :

                            0;

    )!;;
    

                        if(this.notificationBuilder == 
                                    null
                                )
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.NOT_IMPLEMENTED);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.notificationBuilder!.build(context, command, message, integer, pendingIntent);
    
}


}



