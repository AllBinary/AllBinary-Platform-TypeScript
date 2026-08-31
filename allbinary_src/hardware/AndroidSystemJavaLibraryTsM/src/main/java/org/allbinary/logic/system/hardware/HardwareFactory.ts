
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
        
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AndroidHardware } from '../../../../../org/allbinary/logic/system/hardware/android/AndroidHardware.js';
      //not GWT import const AndroidHardware = globalThis.org.allbinary.logic.system.hardware.android.AndroidHardware;

      
import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      //not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
import { OperatingSystems } from '../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
      //not GWT import const OperatingSystems = globalThis.org.allbinary.logic.system.os.OperatingSystems;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoHardware } from './NoHardware.js';
//not GWT import const NoHardware = globalThis.org.allbinary.logic.system.hardware.NoHardware;

                import { HardwareInterface } from './HardwareInterface.js';
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

                
export class HardwareFactory
            extends Object
         {
        

    private static readonly instance: HardwareFactory = new HardwareFactory();

    public static getInstance(): HardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HardwareFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(os: GenericOperatingSystem): HardwareInterface{

        try {
            
    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

                        if(this.tsUtil!.compareTo(os.getName(), operatingSystems!.ANDROID) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AndroidHardware();
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(os.getName(), operatingSystems!.HARMONY) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AndroidHardware();
    

                                    }
                                



                            throw new Exception("No Hardware Imp for: " +os.getName());
                    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put("Ignoring Exception Returning NoHardware", this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NoHardware();
    
}

}


}



