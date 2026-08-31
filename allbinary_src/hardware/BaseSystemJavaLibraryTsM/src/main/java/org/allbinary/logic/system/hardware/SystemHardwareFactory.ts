
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
        
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      //not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoHardware } from './NoHardware.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.hardware.NoHardware;

                import { HardwareInterface } from './HardwareInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

                import { HardwareFactory } from './HardwareFactory.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.hardware.HardwareFactory;

                
export class SystemHardwareFactory
            extends Object
         {
        

    private static readonly instance: SystemHardwareFactory = new SystemHardwareFactory();

    public static getInstance(): SystemHardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SystemHardwareFactory.instance;
    
}


    public static static_toString(): string{

    var systemHardwareFactory: SystemHardwareFactory = SystemHardwareFactory.getInstance()!;;
    

    var osBuffer: StringMaker = new StringMaker();;
    
osBuffer!.append("Hardware Info: \n");
    

                        if(systemHardwareFactory!.hardwareInterface != 
                                    null
                                )
                        
                                    {
                                    osBuffer!.append(systemHardwareFactory!.hardwareInterface!.toString());
    

                                    }
                                
                        else {
                            osBuffer!.append(StringUtil.getInstance()!.NULL_STRING);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private hardwareInterface: HardwareInterface = NoHardware.getInstance()!;

private constructor (){

            super();
        }


    public getInstance(operatingSystemInterface: GenericOperatingSystem): HardwareInterface{

        try {
            
                        if(this.hardwareInterface == NoHardware.getInstance())
                        
                                    {
                                    this.hardwareInterface= HardwareFactory.getInstance()!.getInstance(operatingSystemInterface);
    

                                    }
                                
this.logUtil!.putF("Found Hardware", this, this.commonStrings!.CONSTRUCTOR);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardwareInterface;
    
}


}



