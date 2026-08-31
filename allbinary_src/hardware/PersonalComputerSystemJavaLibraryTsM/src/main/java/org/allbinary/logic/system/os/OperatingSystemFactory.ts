
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
//not plain js import { Log } from '../../../../../org/allbinary/logic/communication/log/Log.js';
      const Log = globalThis.org.allbinary.logic.communication.log.Log;

      
//not plain js import { LogFactory } from '../../../../../org/allbinary/logic/communication/log/LogFactory.js';
      const LogFactory = globalThis.org.allbinary.logic.communication.log.LogFactory;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LogConfigTypeFactory } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      //not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
import { LogConfigTypes } from '../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      //not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { LinuxOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/linux/LinuxOperatingSystemFactory.js';
      //not GWT import const LinuxOperatingSystemFactory = globalThis.org.allbinary.logic.system.os.linux.LinuxOperatingSystemFactory;

      
import { SolarisOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/solaris/SolarisOperatingSystemFactory.js';
      //not GWT import const SolarisOperatingSystemFactory = globalThis.org.allbinary.logic.system.os.solaris.SolarisOperatingSystemFactory;

      
import { WindowsOperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/windows/WindowsOperatingSystemFactory.js';
      //not GWT import const WindowsOperatingSystemFactory = globalThis.org.allbinary.logic.system.os.windows.WindowsOperatingSystemFactory;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoOperatingSystem } from './NoOperatingSystem.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.os.NoOperatingSystem;

                import { GenericOperatingSystem } from './GenericOperatingSystem.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

                import { OperatingSystems } from './OperatingSystems.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.os.OperatingSystems;

                //not plain js import { SystemProperties } from './SystemProperties.js';
const  = globalThis.org.allbinary.logic.system.os.SystemProperties;

                
export class OperatingSystemFactory
            extends Object
         {
        

    private static readonly instance: OperatingSystemFactory = new OperatingSystemFactory();

    public static getInstance(): OperatingSystemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OperatingSystemFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private genericOperatingSystem: GenericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;

    private hasDetected: boolean = false;

private constructor (){

            super();
        }

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getOperatingSystemInstance(): GenericOperatingSystem{

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

    var systemProperties: SystemProperties = SystemProperties.getInstance()!;;
    

    var osName: string = systemProperties!.getName()!;;
    

    var osArch: string = systemProperties!.getArch()!;;
    

    var osVersion: string = systemProperties!.getVersion()!;;
    

                        if(!this.hasDetected)
                        
                                    {
                                    this.logUtil!.putF("osName: " +osName, this, this.commonStrings!.GET_INSTANCE);
    
this.hasDetected= true;
    

                        if(osName!.indexOf(operatingSystems!.LINUX) >= 0)
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.putF("Found a Linux OS", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                
this.genericOperatingSystem= LinuxOperatingSystemFactory.getInstance()!.getOperatingSystemInstance();
    

                                    }
                                
                             else 
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.putF("Found a Windows OS", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                
this.genericOperatingSystem= WindowsOperatingSystemFactory.getInstance()!.getOperatingSystemInstance();
    

                                    }
                                
                             else 
                        if(osName!.indexOf(operatingSystems!.SOLARIS) >= 0)
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.putF("Found a Solaris OS", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                
this.genericOperatingSystem= SolarisOperatingSystemFactory.getInstance()!.getOperatingSystemInstance();
    

                                    }
                                
                        else {
                            


                            throw new Exception(new StringMaker().append("OS Not Supported: ")!.append(osName)!.toString());
                    

                        }
                            

    var log: Log = LogFactory.getInstanceF(new StringMaker().append("OperatingSystem Info: ")!.append(StringUtil.getInstance()!.toString(this.genericOperatingSystem))!.toString(), this, this.commonStrings!.GET_INSTANCE)!;;
    
console.log(log.toString());
    
this.logUtil!.putL(log);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericOperatingSystem;
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoOperatingSystem.NO_OPERATING_SYSTEM;
    
}

}


}



