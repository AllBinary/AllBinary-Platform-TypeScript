
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
        
            import { Integer } from "../../../../../java/lang/Integer.js";
        

//import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { RegistrationConfiguration } from "../../../../../../org/allbinary/logic/system/security/licensing/registration/RegistrationConfiguration.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class MobileClientInformation extends AbeClientInformation {
        

    static readonly DESC: string = "Mobile";
        
        

    static readonly ANDROID_DESC: string = "Android" +DESC;
        
        
public constructor (name: string, version: string, specialName: string, shortName: string)                        

                            : super(name, version, new StringMaker().
                            append(specialName)!.append(CommonSeps.getInstance()!.SPACE)!.append(PartnerIdentifierFileUtil.getInstance()!.get())!.toString(), shortName){

            super();
                //var name = name
    //var version = version
    //var specialName = specialName
    //var shortName = shortName


                            //For kotlin this is before the body of the constructor.
                    

    var string: string = this.getSpecialName()!;
        
        
;
    

    var number: string = string.substring(string.length -1)!;
        
        
;
    

                        if(Integer.getInteger(number) == 
                                    null
                                )
                        
                                    {
                                    this.setHardSale(false);
    

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(this.isHardSale())
                        
                                    {
                                    this.logUtil!.putF("Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Don't Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                        }
                            
}


    public toHashtable(): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = super.toHashtable()!;
        
        
;
    

    var registrationConfiguration: RegistrationConfiguration = RegistrationConfiguration.getInstance()!;
        
        
;
    
hashtable.put(registrationConfiguration!.NAME, registrationConfiguration!.getRegistrationCode());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

