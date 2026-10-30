
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

        


            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { RegistrationConfiguration } from '../../../../../../org/allbinary/logic/system/security/licensing/registration/RegistrationConfiguration.js';
//not GWT import const RegistrationConfiguration

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeClientInformation } from './AbeClientInformation.js';
//sameFolderImports - not GWT import - same folder const AbeClientInformation
import { PartnerIdentifierFileUtil } from './PartnerIdentifierFileUtil.js';
//sameFolderImports - not GWT import - same folder const PartnerIdentifierFileUtil

export class MobileClientInformation extends AbeClientInformation {
        

    static readonly DESC: string = "Mobile";

    static readonly ANDROID_DESC: string = "Android" +MobileClientInformation.DESC;

public constructor (name: string, version: string, specialName: string, shortName: string){
            super(name, version, new StringMaker().append(specialName)!.append(CommonSeps.getInstance()!.SPACE)!.append(PartnerIdentifierFileUtil.getInstance()!.get())!.toString(), shortName);
                    

                            //For kotlin this is before the body of the constructor.
                    

    let string: string = this.getSpecialName()!;;
    

    let number: string = string.substring(string.length -1)!;;
    

                        if(Integer.getInteger(number) == 
                                    null
                                )
                        
                                    {
                                    this.setHardSale(false);
    

                                    }
                                

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(this.isHardSale())
                        
                                    {
                                    this.logUtil!.putF("Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Don't Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                        }
                            
}


    public toHashtable(): ABHashtable<any, any>{

    let hashtable: ABHashtable<any, any> = super.toHashtable()!;;
    

    let registrationConfiguration: RegistrationConfiguration = RegistrationConfiguration.getInstance()!;;
    
hashtable.put(registrationConfiguration!.NAME, registrationConfiguration!.getRegistrationCode());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}

