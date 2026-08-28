
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
//not game specific package import { LicenseServerInitFileUtil } from '../../../../org/allbinary/logic/system/security/licensing/LicenseServerInitFileUtil.js';
      const LicenseServerInitFileUtil = globalThis.org.allbinary.logic.system.security.licensing.LicenseServerInitFileUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DemoGameMidlet } from './DemoGameMidlet.js';
import { LicenseLoadingType } from './LicenseLoadingType.js';
import { LicensedDemoSetupFactory } from './LicensedDemoSetupFactory.js';
import { LicenseCheckRunnableFactory } from './LicenseCheckRunnableFactory.js';

export class SpecialDemoGameMidlet extends DemoGameMidlet {
        

public constructor (clientInformationFactory: ClientInformationFactory, licenseLoadingType: LicenseLoadingType, demoSetupFactory: LicensedDemoSetupFactory, licenseCheckRunnableFactory: LicenseCheckRunnableFactory){
            super(clientInformationFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public initView(){
}


    public preInit(){
new LicenseServerInitFileUtil().init();
    
}


}



