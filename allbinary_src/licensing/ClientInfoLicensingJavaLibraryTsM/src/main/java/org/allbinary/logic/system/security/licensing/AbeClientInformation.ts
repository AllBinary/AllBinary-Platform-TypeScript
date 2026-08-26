
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
      const LicenseInitInfo = globalThis.org.allbinary.business.init.LicenseInitInfo;

      
//not game specific package import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
      const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ClientInformation } from './ClientInformation.js';
// This is the information sent to the license server
export class AbeClientInformation extends ClientInformation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (name: string, version: string, specialName: string, shortName: string){
            super(name, version, specialName, shortName);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(){

        try {
            this.setOperatingSystemInterface(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance());
    

    var licenseInitInfo: LicenseInitInfo = LicenseInitInfoUtil.getInstance()!.read()!;;
    
this.setLicenseId(licenseInitInfo!.getLicenseId());
    
this.setLicenseServers(licenseInitInfo!.getServerList());
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(this.getLicenseId()))
                        
                                    {
                                    
    var NONE: string = "No License Id";;
    
this.setLicenseId(NONE);
    

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put(new StringMaker().append("Special Name: ")!.append(this.getSpecialName())!.toString(), this, commonStrings!.CONSTRUCTOR);
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


}
                
            

