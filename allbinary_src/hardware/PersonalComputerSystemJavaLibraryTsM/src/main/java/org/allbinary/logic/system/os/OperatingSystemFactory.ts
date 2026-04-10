
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
        



import { Log } from "../../../../../org/allbinary/logic/communication/log/Log.js";

    
import { LogFactory } from "../../../../../org/allbinary/logic/communication/log/LogFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { LinuxOperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/linux/LinuxOperatingSystemFactory.js";

    
import { SolarisOperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/solaris/SolarisOperatingSystemFactory.js";

    
import { WindowsOperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/windows/WindowsOperatingSystemFactory.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class OperatingSystemFactory
            extends Object
         {
        

    private static readonly instance: OperatingSystemFactory = new OperatingSystemFactory();
        
        

    public static getInstance(): OperatingSystemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private genericOperatingSystem: GenericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
        
        

    private hasDetected: boolean = false;
        
        
private constructor (){

            super();
            }

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getOperatingSystemInstance(): GenericOperatingSystem{

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;
        
        


    var systemProperties: SystemProperties = SystemProperties.getInstance()!;
        
        


    var osName: string = systemProperties!.getName()!;
        
        


    var osArch: string = systemProperties!.getArch()!;
        
        


    var osVersion: string = systemProperties!.getVersion()!;
        
        


    
                        if(!this.hasDetected)
                        
                                    {
                                    put("osName: " +osName, this, commonStrings!.GET_INSTANCE)
this.hasDetected= true

    
                        if(osName!.indexOf(operatingSystems!.LINUX) >= 0)
                        
                                    {
                                    
    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    put("Found a Linux OS", this, commonStrings!.GET_INSTANCE)

                                    }
                                
this.genericOperatingSystem= LinuxOperatingSystemFactory.getInstance()!.getOperatingSystemInstance()

                                    }
                                
                             else 
    
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    
    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    put("Found a Windows OS", this, commonStrings!.GET_INSTANCE)

                                    }
                                
this.genericOperatingSystem= WindowsOperatingSystemFactory.getInstance()!.getOperatingSystemInstance()

                                    }
                                
                             else 
    
                        if(osName!.indexOf(operatingSystems!.SOLARIS) >= 0)
                        
                                    {
                                    
    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    put("Found a Solaris OS", this, commonStrings!.GET_INSTANCE)

                                    }
                                
this.genericOperatingSystem= SolarisOperatingSystemFactory.getInstance()!.getOperatingSystemInstance()

                                    }
                                
                        else {
                            


                            throw Exception(StringMaker().
                            append("OS Not Supported: ")!.append(osName)!.toString())

                        }
                            

    var log: Log = LogFactory.getInstance(StringMaker().
                            append("OperatingSystem Info: ")!.append(StringUtil.getInstance()!.toString(this.genericOperatingSystem))!.toString(), this, commonStrings!.GET_INSTANCE)!;
        
        

println(log.toString())
put(log)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericOperatingSystem;
    
} catch(e: Exception)
            {

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoOperatingSystem.NO_OPERATING_SYSTEM;
    
}

}


}
                
            

