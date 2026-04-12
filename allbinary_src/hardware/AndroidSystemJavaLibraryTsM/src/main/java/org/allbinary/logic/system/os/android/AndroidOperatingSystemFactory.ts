
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GenericOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { NoOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js";

    
import { OperatingSystems } from "../../../../../../org/allbinary/logic/system/os/OperatingSystems.js";

    
import { SystemProperties } from "../../../../../../org/allbinary/logic/system/os/SystemProperties.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AndroidOperatingSystemFactory
            extends Object
         {
        

    private static readonly instance: AndroidOperatingSystemFactory = new AndroidOperatingSystemFactory();
        
        

    public static getInstance(): AndroidOperatingSystemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getOperatingSystemInstance(): GenericOperatingSystem{

        try {
            
    var GenericOperatingSystem: GenericOperatingSystem
;
    

    var systemProperties: SystemProperties = SystemProperties.getInstance()!;
        
        
;
    

    var osName: string = systemProperties!.getName()!;
        
        
;
    

                        if(osName!.compareTo(OperatingSystems.getInstance()!.ANDROID) == 0)
                        
                                    {
                                    GenericOperatingSystem= new AndroidOS();
    

                                    }
                                
                        else {
                            
                        if(OperatingSystems.getInstance()!.isUnknownSpecificOSAllowed())
                        
                                    {
                                    GenericOperatingSystem= new AndroidOS();
    

                                    }
                                
                        else {
                            


                            throw new Error("Specific Android OS Not Supported: " +osName)

                        }
                            

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GenericOperatingSystem;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put("Failed to get OperatingSystem returning NoOperatingSystem", this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoOperatingSystem.NO_OPERATING_SYSTEM;
    
}

}


}
                
            

