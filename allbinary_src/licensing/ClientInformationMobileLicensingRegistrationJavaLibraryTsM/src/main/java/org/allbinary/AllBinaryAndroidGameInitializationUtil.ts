
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
        



            import { Object } from '../../java/lang/Object.js';
        
            import { Integer } from '../../java/lang/Integer.js';
        
//not game specific package import { LicenseInitInfoUtil } from '../../org/allbinary/business/init/LicenseInitInfoUtil.js';
      const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;

      
//not game specific package import { ResourceUtil } from '../../org/allbinary/data/resource/ResourceUtil.js';
      const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;

      
//not game specific package import { PartnerIdentifierFileUtil } from '../../org/allbinary/logic/system/security/licensing/PartnerIdentifierFileUtil.js';
      const PartnerIdentifierFileUtil = globalThis.org.allbinary.logic.system.security.licensing.PartnerIdentifierFileUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AndroidResources } from './AndroidResources.js';

export class AllBinaryAndroidGameInitializationUtil
            extends Object
         {
        

    public static init(){

    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    var androidResources: AndroidResources = AndroidResources.getInstance()!;;
    

    var licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;;
    
resourceUtil!.addResource(licenseInitInfoUtil!.INITFILENAME, Integer.valueOf(androidResources!.raw.licenseinitdata));
    
resourceUtil!.addResource(PartnerIdentifierFileUtil.getInstance()!.FILE_NAME, Integer.valueOf(androidResources!.raw.partner));
    
}


}
                
            

