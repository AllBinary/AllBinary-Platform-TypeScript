
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AndroidHardware } from "../../../../../org/allbinary/logic/system/hardware/android/AndroidHardware.js";

    
import { GenericOperatingSystem } from "../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystems } from "../../../../../org/allbinary/logic/system/os/OperatingSystems.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class HardwareFactory
            extends Object
         {
        

    private static readonly instance: HardwareFactory = new HardwareFactory();
        
        

    public static getInstance(): HardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getInstance(os: GenericOperatingSystem): HardwareInterface{
var os = os

        try {
            
                        if(os.getName()!.compareTo(OperatingSystems.getInstance()!.ANDROID) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AndroidHardware();
    

                                    }
                                



                            throw Error("No Hardware Imp for: " +os.getName())

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put("Ignoring Exception Returning NoHardware", this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoHardware();
    
}

}


}
                
            

