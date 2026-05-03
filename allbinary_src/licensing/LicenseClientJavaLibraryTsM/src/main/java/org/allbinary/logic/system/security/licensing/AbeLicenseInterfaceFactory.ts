
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
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
import { IOException } from "../../../../../../java/io/IOException.js";

    
import { Calendar } from "../../../../../../java/util/Calendar.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeLicenseClient } from "../../../../../../org/allbinary/logic/system/security/licensing/client/AbeLicenseClient.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeLicenseInterface } from "./AbeLicenseInterface.js";
import { AbeClientInformationInterface } from "./AbeClientInformationInterface.js";
import { AbeNoLicense } from "./AbeNoLicense.js";
import { AbeClientInformationData } from "./AbeClientInformationData.js";
import { LicensingException } from "./LicensingException.js";

export class AbeLicenseInterfaceFactory
            extends Object
         {
        

    private static readonly SINGLETON: AbeLicenseInterfaceFactory = new AbeLicenseInterfaceFactory();

    public static getInstance(): AbeLicenseInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeLicenseInterfaceFactory.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private time: number = 0;

    private check: boolean = false;

    private checkPeriod: number = 36000000;

    private abeLicenseInterface: AbeLicenseInterface = 
                null
            ;
private constructor (){

            super();
        }


                //@Throws(LicensingException.constructor)
            
    public getLicenseInstance(abeClientInformation: AbeClientInformationInterface): AbeLicenseInterface{
    //var abeClientInformation = abeClientInformation

                        if(isTimeToGetKey())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(abeClientInformation);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abeLicenseInterface;
    

                        }
                            
}


                //@Throws(LicensingException.constructor)
            
    get(abeClientInformation: AbeClientInformationInterface): AbeLicenseInterface{
    //var abeClientInformation = abeClientInformation

        try {
            this.logUtil!.putF("Getting Keys", this, commonStrings!.GET);
    
this.abeLicenseInterface= AbeNoLicense.getInstance();
    

    var licenseClient: AbeLicenseClient = new AbeLicenseClient();
;
    
this.abeLicenseInterface= licenseClient!.get(abeClientInformation);
    

                        if(this.abeLicenseInterface != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("Default Key: " +this.abeLicenseInterface!.getKey(AbeClientInformationData.getInstance()!.KEY), this, commonStrings!.GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.abeLicenseInterface;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Licensing IO Error", this, commonStrings!.GET, e);
    



                            throw new LicensingException("License Server Connection Error");
                    
}

                //: 
 catch(e) 
            {
this.logUtil!.put("Licensing Failure", this, commonStrings!.GET, e);
    



                            throw new LicensingException("Unknown License Failure: " +thisconstructor.name.toString()!);
                    
}

}


    isTimeToGetKey(): boolean{

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var currentTime: number = calendar.getTimeInMillis()!;
;
    

                        if(this.abeLicenseInterface == 
                                    null
                                 || this.abeLicenseInterface == AbeNoLicense.getInstance() || !this.abeLicenseInterface!.hasKey() || isCheck() || currentTime -checkPeriod > time)
                        
                                    {
                                    this.abeLicenseInterface= 
                                        null
                                    ;
    
this.time= currentTime;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if()
                        
}


    public setCheck(check: boolean){
var check = check
this.check= check;
    
}


    isCheck(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.check;
    
}


}
                
            

