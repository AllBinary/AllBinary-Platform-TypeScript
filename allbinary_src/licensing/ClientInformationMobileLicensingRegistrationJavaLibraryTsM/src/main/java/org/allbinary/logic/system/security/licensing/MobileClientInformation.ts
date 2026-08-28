
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
        
//not game specific package import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { RegistrationConfiguration } from '../../../../../../org/allbinary/logic/system/security/licensing/registration/RegistrationConfiguration.js';
      const RegistrationConfiguration = globalThis.org.allbinary.logic.system.security.licensing.registration.RegistrationConfiguration;

      
//not game specific package import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeClientInformation } from './AbeClientInformation.js';
import { PartnerIdentifierFileUtil } from './PartnerIdentifierFileUtil.js';

export class MobileClientInformation extends AbeClientInformation {
        

    static readonly DESC: string = "Mobile";

    static readonly ANDROID_DESC: string = "Android" +MobileClientInformation.DESC;

public constructor (name: string, version: string, specialName: string, shortName: string){
            super(name, version, new StringMaker().append(specialName)!.append(CommonSeps.getInstance()!.SPACE)!.append(PartnerIdentifierFileUtil.getInstance()!.get())!.toString(), shortName);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var string: string = this.getSpecialName()!;;
    

    var number: string = string.substring(string.length -1)!;;
    

                        if(Integer.getInteger(number) == 
                                    null
                                )
                        
                                    {
                                    this.setHardSale(false);
    

                                    }
                                

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(this.isHardSale())
                        
                                    {
                                    this.logUtil!.putF("Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Don't Use Hard Coded Selling", this, commonStrings!.CONSTRUCTOR);
    

                        }
                            
}


    public toHashtable(): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = super.toHashtable()!;;
    

    var registrationConfiguration: RegistrationConfiguration = RegistrationConfiguration.getInstance()!;;
    
hashtable.put(registrationConfiguration!.NAME, registrationConfiguration!.getRegistrationCode());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}



