
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
        
import { Command } from '../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command

import { Notification } from '../../../android/app/Notification.js';
//not GWT import const Notification

import { NotificationManager } from '../../../android/app/NotificationManager.js';
//not GWT import const NotificationManager

import { PendingIntent } from '../../../android/app/PendingIntent.js';
//not GWT import const PendingIntent

import { Context } from '../../../android/content/Context.js';
//not GWT import const Context

import { Intent } from '../../../android/content/Intent.js';
//not GWT import const Intent

import { AndroidInfoFactory } from '../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NotificationBuilder } from './NotificationBuilder.js';
//not GWT import - same folder const NotificationBuilder
import { NotificationBuilderAPI23 } from './NotificationBuilderAPI23.js';
//not GWT import - same folder const NotificationBuilderAPI23
import { CommandUriAction } from './CommandUriAction.js';
//not GWT import - same folder const CommandUriAction

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
        
    let SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

                        if(SDK_VERSION > 22)
                        
                                    {
                                    this.notificationBuilder= new NotificationBuilderAPI23();
    

                                    }
                                
                        else {
                            this.notificationBuilder= NotificationBuilder.NULL_NOTIFICATION_BUILDER;
    

                        }
                            
}


    public notify(command: Command, resource: string, message: string){

    let context: Context = ResourceUtil.getInstance()!.getContext()!;;
    

    let intent: Intent = CommandUriAction.getInstance()!.getIntent(command)!;;
    

    let integer: Integer = ResourceUtil.getInstance()!.getResourceId(resource)!;;
    

    let FLAG_IMMUTABLE: number = 1<<26;;
    

    let SDK_VERSION: number = AndroidInfoFactory.getInstance()!.getVersion()!;;
    

    let pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, (SDK_VERSION > 22 ? FLAG_IMMUTABLE : 0))!;;
    

                        if(this.notificationBuilder == 
                                    null
                                )
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.NOT_IMPLEMENTED);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.notificationBuilder!.build(context, command, message, integer, pendingIntent);
    
}


}

