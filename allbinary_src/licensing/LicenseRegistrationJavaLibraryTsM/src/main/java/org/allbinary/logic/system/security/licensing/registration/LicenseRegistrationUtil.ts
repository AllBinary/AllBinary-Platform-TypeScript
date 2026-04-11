
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../../../java/util/Hashtable.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { SpecialMessageUtil } from "../../../../../../../org/allbinary/canvas/SpecialMessageUtil.js";

    
import { CommonLabels } from "../../../../../../../org/allbinary/string/CommonLabels.js";

    

export class LicenseRegistrationUtil
            extends Object
         {
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static process(abeClientInformation: AbeClientInformationInterface, registrationId: string){
    //var abeClientInformation = abeClientInformation
    //var registrationId = registrationId

        try {
            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.put(CommonLabels.getInstance()!.START_LABEL +"License Registration", "LicenseRegistrationUtil", commonStrings!.PROCESS);
    
RegistrationConfiguration.getInstance()!.setRegistrationCode(registrationId);
    
RegistrationConfiguration.getInstance()!.write();
    

    var hashtable: Hashtable<any, any> = abeClientInformation!.toHashtable()!;
        
        
;
    
hashtable.put(RegistrationConfiguration.getInstance()!.NAME, registrationId);
    
hashtable.put("message", SpecialMessageUtil.getInstance()!.get());
    
new XmlRpcRemoteLicenseRegistrationClient(abeClientInformation).
                            get(hashtable);
    

                //: 
} catch(e) 
            {
PreLogUtil.put("License Registration Exception", "LicenseRegistrationUtil", "License Registration", e);
    
}

}

private constructor (){

            super();
            }


}
                
            

