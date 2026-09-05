
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { SpecialMessageUtil } from '../../../../../../../org/allbinary/canvas/SpecialMessageUtil.js';
//not GWT import const SpecialMessageUtil = globalThis.org.allbinary.canvas.SpecialMessageUtil;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RegistrationConfiguration } from './RegistrationConfiguration.js';
//not GWT import - same folder const RegistrationConfiguration = globalThis.org.allbinary.logic.system.security.licensing.registration.RegistrationConfiguration;

                import { XmlRpcRemoteLicenseRegistrationClient } from './XmlRpcRemoteLicenseRegistrationClient.js';
//not GWT import - same folder const XmlRpcRemoteLicenseRegistrationClient = globalThis.org.allbinary.logic.system.security.licensing.registration.XmlRpcRemoteLicenseRegistrationClient;

                
export class LicenseRegistrationUtil
            extends Object
         {
        
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static process(abeClientInformation: AbeClientInformationInterface, registrationId: string){

        try {
            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put(CommonLabels.getInstance()!.START_LABEL +"License Registration", "LicenseRegistrationUtil", commonStrings!.PROCESS);
    

    var registrationConfiguration: RegistrationConfiguration = RegistrationConfiguration.getInstance()!;;
    
registrationConfiguration!.setRegistrationCode(registrationId);
    
registrationConfiguration!.write();
    

    var hashtable: ABHashtable = abeClientInformation!.toHashtable()!;;
    
hashtable.put(RegistrationConfiguration.getInstance()!.NAME, registrationId);
    
hashtable.put("message", SpecialMessageUtil.getInstance()!.get());
    
new XmlRpcRemoteLicenseRegistrationClient(abeClientInformation).get(hashtable);
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("License Registration Exception", "LicenseRegistrationUtil", "License Registration", e);
    
}

}


private constructor (){

            super();
        }


}



