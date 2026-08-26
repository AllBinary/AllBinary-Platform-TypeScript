
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2019 AllBinary 
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
        



            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { List } from '../../../java/util/List.js';
      const List = globalThis.java.util.List;

      
//not game specific package import { ActivityManager } from '../../../android/app/ActivityManager.js';
      const ActivityManager = globalThis.android.app.ActivityManager;

      
//not game specific package import { RunningServiceInfo } from '../../../android/app/ActivityManager/RunningServiceInfo.js';
      const RunningServiceInfo = globalThis.android.app.ActivityManager.RunningServiceInfo;

      
//not game specific package import { ComponentName } from '../../../android/content/ComponentName.js';
      const ComponentName = globalThis.android.content.ComponentName;

      
//not game specific package import { Context } from '../../../android/content/Context.js';
      const Context = globalThis.android.content.Context;

      
//not game specific package import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidServicesUtil
            extends Object
         {
        

    public static getInstance(): AndroidServicesUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidServicesUtil.instance;
    
}


    private static readonly instance: AndroidServicesUtil = new AndroidServicesUtil();

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;

    private readonly SERVICE_LIMIT_MAX: number = 1000;

    private readonly IS_SERVICE_RUNNING: string = "isServiceRunning";

    private readonly SERVICE_NOT_FOUND_RUNNING: string = "Service not found Running: ";

    public isServiceRunning(name: string): boolean{

    var activityManager: ActivityManager = this.resourceUtil!.getContext()!.getSystemService(Context.ACTIVITY_SERVICE) as unknown as ActivityManager;;
    

    var runningServicesList: List<RunningServiceInfo> = activityManager!.getRunningServices(this.SERVICE_LIMIT_MAX)!;;
    

    var runningServiceInfo: RunningServiceInfo;;
    

    var serviceComponent: ComponentName;;
    

    var serviceName: string;;
    

    var size: number = runningServicesList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
runningServiceInfo= runningServicesList!.get(index);
    
serviceComponent= runningServiceInfo!.service;
    
serviceName= serviceComponent!.toString();
    

                        if(serviceName!.indexOf(name) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}

this.logUtil!.putF(this.SERVICE_NOT_FOUND_RUNNING +name, this, this.IS_SERVICE_RUNNING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

