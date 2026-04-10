
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
        



import { LicenseInitInfo } from "../../../../../../org/allbinary/business/init/LicenseInitInfo.js";

    
import { LicenseInitInfoUtil } from "../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { OperatingSystemFactory } from "../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbeClientInformation extends ClientInformation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (name: string, version: string, specialName: string, shortName: string)                        

                            : super(name, version, specialName, shortName){

            super();
                //var name = name
    //var version = version
    //var specialName = specialName
    //var shortName = shortName


                            //For kotlin this is before the body of the constructor.
                    
}


    public init(){

        try {
            this.this.setOperatingSystemInterface(OperatingSystemFactory.getInstance()!.getOperatingSystemInstance())

    var licenseInitInfo: LicenseInitInfo = LicenseInitInfoUtil.getInstance()!.read()!;
        
        

this.this.setLicenseId(licenseInitInfo!.getLicenseId())
this.this.setLicenseServers(licenseInitInfo!.getServerList())

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(stringValidationUtil!.isEmpty(this.getLicenseId()))
                        
                                    {
                                    
    var NONE: string = "No License Id";
        
        

this.this.setLicenseId(NONE)

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

PreLogUtil.put(StringMaker().
                            append("Special Name: ")!.append(this.getSpecialName())!.toString(), this, commonStrings!.CONSTRUCTOR)
} catch(e: Exception)
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        


    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


}
                
            

