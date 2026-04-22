
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
        



import { LicenseInitInfo } from "../../../../../../../org/allbinary/business/init/LicenseInitInfo.js";

    
import { LicenseInitInfoUtil } from "../../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { XmlRpcAbeClient } from "../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AbeLicenseInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeLicenseInterface.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbeLicenseClient
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly MINSERVERS: number = 3;
        
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public get(abeClientInformation: AbeClientInformationInterface): AbeLicenseInterface{
    //var abeClientInformation = abeClientInformation

        try {
            this.logUtil!.putF(commonStrings!.START, this, commonStrings!.GET);
    

    var xmlRpcAbeLicenseClient: XmlRpcAbeClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);
        
        
;
    

    var abeLicenseInterface: AbeLicenseInterface = xmlRpcAbeLicenseClient!.get(
                            null);

                         as AbeLicenseInterface;
        
        
;
    

    var licenseId: string = abeLicenseInterface!.getLicenseId()!;
        
        
;
    

    var servers: BasicArrayList = abeLicenseInterface!.getServers()!;
        
        
;
    

    var isNewLicenseId: boolean = false;
        
        
;
    

    var isBetterServerList: boolean = false;
        
        
;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(abeClientInformation!.getLicenseId()) && !abeClientInformation!.isSameId(licenseId);

                        )
                        
                                    {
                                    isNewLicenseId= true;
    

                                    }
                                

                        if(servers.size >= this.MINSERVERS && abeClientInformation!.isLargerOrDifferentServerList(servers))
                        
                                    {
                                    isBetterServerList= true;
    

                                    }
                                

                        if(isBetterServerList || isNewLicenseId)
                        
                                    {
                                    
    var initInfo: LicenseInitInfo = LicenseInitInfoUtil.getInstance()!.read()!;
        
        
;
    
initInfo!.setLicenseId(licenseId);
    
initInfo!.setServerList(servers);
    
LicenseInitInfoUtil.getInstance()!.write(initInfo);
    
abeClientInformation!.init();
    

                                    }
                                
this.logUtil!.putF(commonStrings!.END, this, commonStrings!.GET);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abeLicenseInterface;
    

                //: 
} catch(e) 
            {



                            throw e
}

}


}
                
            

