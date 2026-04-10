
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
        



import { List } from "../../../java/util/List.js";

    
import { ActivityManager } from "../../../android/app/ActivityManager.js";

    
import { RunningServiceInfo } from "../../../android/app/ActivityManager/RunningServiceInfo.js";

    
import { ComponentName } from "../../../android/content/ComponentName.js";

    
import { Context } from "../../../android/content/Context.js";

    
import { ResourceUtil } from "../../../org/allbinary/data/resource/ResourceUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

export class AndroidServicesUtil
            extends Object
         {
        

    public static getInstance(): AndroidServicesUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly instance: AndroidServicesUtil = new AndroidServicesUtil();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        

    private readonly SERVICE_LIMIT_MAX: number = 1000;
        
        

    private readonly IS_SERVICE_RUNNING: string = "isServiceRunning";
        
        

    private readonly SERVICE_NOT_FOUND_RUNNING: string = "Service not found Running: ";
        
        

    public isServiceRunning(name: string): boolean{
var name = name

    var activityManager: ActivityManager = resourceUtil!.getContext()!.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager;
        
        


    var runningServicesList: List<RunningServiceInfo> = activityManager!.getRunningServices(SERVICE_LIMIT_MAX)!;
        
        


    var runningServiceInfo: ActivityManager.RunningServiceInfo


    var serviceComponent: ComponentName


    var serviceName: string


    var size: number = runningServicesList!.size!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
runningServiceInfo= runningServicesList!.get(index)
serviceComponent= runningServiceInfo!.service
serviceName= serviceComponent!.toString()

    
                        if(serviceName!.indexOf(name) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}

put(SERVICE_NOT_FOUND_RUNNING +name, this, IS_SERVICE_RUNNING)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

