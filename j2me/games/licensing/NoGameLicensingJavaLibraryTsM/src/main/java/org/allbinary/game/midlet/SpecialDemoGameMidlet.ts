
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
        



import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { ClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      //not GWT import const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
import { LicenseServerInitFileUtil } from '../../../../org/allbinary/logic/system/security/licensing/LicenseServerInitFileUtil.js';
      //not GWT import const LicenseServerInitFileUtil = globalThis.org.allbinary.logic.system.security.licensing.LicenseServerInitFileUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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



