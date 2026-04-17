
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

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AbeLicenseInterfaceFactory } from "../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterfaceFactory.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbKeys
            extends Object
         {
        

    private static readonly instance: AbKeys = new AbKeys();
        
        

    public static getInstance(): AbKeys{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(LicensingException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getKey(abeClientInformation: AbeClientInformationInterface, keyName: string): string{
    //var abeClientInformation = abeClientInformation
    //var keyName = keyName

        try {
            this.logUtil!.putF("Getting Key: " +keyName, this, "getKey");
    

                        if(keyName!.compareTo("DirectX 8") == 0 || keyName!.compareTo("DirectX") == 0 || keyName!.compareTo("Low Level") == 0 || keyName!.compareTo("System Drivers") == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Temp For Input Library";
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeLicenseInterfaceFactory.getInstance()!.getLicenseInstance(abeClientInformation)!.getKey(keyName);

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

                //: 
 catch(e) 
            {
this.logUtil!.put("Licensing Failure", this, "getKey()", e);
    



                            throw new LicensingException("Unknown License Failure")
}

}


}
                
            

