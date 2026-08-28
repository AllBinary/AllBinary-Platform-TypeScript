
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
//not game specific package import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not game specific package import { GenericOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
//not game specific package import { NoOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js';
      const NoOperatingSystem = globalThis.org.allbinary.logic.system.os.NoOperatingSystem;

      
//not game specific package import { OperatingSystems } from '../../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
      const OperatingSystems = globalThis.org.allbinary.logic.system.os.OperatingSystems;

      
//not game specific package import { SystemProperties } from '../../../../../../org/allbinary/logic/system/os/SystemProperties.js';
      const SystemProperties = globalThis.org.allbinary.logic.system.os.SystemProperties;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WindowsOS } from './WindowsOS.js';

export class WindowsOperatingSystemFactory
            extends Object
         {
        

    private static readonly instance: WindowsOperatingSystemFactory = new WindowsOperatingSystemFactory();

    public static getInstance(): WindowsOperatingSystemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WindowsOperatingSystemFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    public getOperatingSystemInstance(): GenericOperatingSystem{

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

    var osName: string = SystemProperties.getInstance()!.getName()!;;
    

    var operatingSystemInterface: GenericOperatingSystem;;
    

                        if(osName!.compareTo(operatingSystems!.WINDOWS_NT) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.WINDOWS_10) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.WINDOWS_11) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.WINDOWS2000) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.WINDOWS_XP) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.WINDOWS_VISTA) == 0)
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                        else {
                            
                        if(operatingSystems!.isUnknownSpecificOSAllowed())
                        
                                    {
                                    operatingSystemInterface= new WindowsOS();
    

                                    }
                                
                        else {
                            


                            throw new Exception("Specific Windows OS Not Supported: " +osName);
                    

                        }
                            

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return operatingSystemInterface;
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoOperatingSystem.NO_OPERATING_SYSTEM;
    
}

}


}



