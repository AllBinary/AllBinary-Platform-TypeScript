
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
        
import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
//not GWT import const LicenseInitInfo

import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ClientInformation } from './ClientInformation.js';
//not GWT import - same folder const ClientInformation
// This is the information sent to the license server
export class AbeClientInformation extends ClientInformation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (name: string, version: string, specialName: string, shortName: string){
            super(name, version, specialName, shortName);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(){

 try { this.setOperatingSystemInterface(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance());
    

    let licenseInitInfo: LicenseInitInfo = LicenseInitInfoUtil.getInstance()!.read()!;;
    
this.setLicenseId(licenseInitInfo!.getLicenseId());
    
this.setLicenseServers(licenseInitInfo!.getServerList());
    

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(this.getLicenseId()))
                        
                                    {
                                    
    let NONE: string = "No License Id";;
    
this.setLicenseId(NONE);
    

                                    }
                                

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put(new StringMaker().append("Special Name: ")!.append(this.getSpecialName())!.toString(), this, commonStrings!.CONSTRUCTOR);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


}

