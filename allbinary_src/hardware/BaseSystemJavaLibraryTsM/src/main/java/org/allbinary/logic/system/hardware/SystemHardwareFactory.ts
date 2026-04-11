
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

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { GenericOperatingSystem } from "../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class SystemHardwareFactory
            extends Object
         {
        

    private static readonly instance: SystemHardwareFactory = new SystemHardwareFactory();
        
        

    public static getInstance(): SystemHardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private hardwareInterface: HardwareInterface = NoHardware.getInstance()!;
        
        

    public static static_toString(): string{

    var osBuffer: StringMaker = new StringMaker();
        
        
;
    
osBuffer!.append("Hardware Info: \n");
    

                        if(hardwareInterface != 
                                    null
                                )
                        
                                    {
                                    osBuffer!.append(hardwareInterface!.toString());
    

                                    }
                                
                        else {
                            osBuffer!.append(StringUtil.getInstance()!.NULL_STRING);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();

                        ;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
private constructor (){

            super();
            }


    public getInstance(operatingSystemInterface: GenericOperatingSystem): HardwareInterface{
var operatingSystemInterface = operatingSystemInterface

        try {
            
                        if(hardwareInterface == NoHardware.getInstance())
                        
                                    {
                                    hardwareInterface= HardwareFactory.getInstance()!.getInstance(operatingSystemInterface);
    

                                    }
                                
logUtil!.put("Found Hardware", this, commonStrings!.CONSTRUCTOR);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardwareInterface;
    
}


}
                
            

