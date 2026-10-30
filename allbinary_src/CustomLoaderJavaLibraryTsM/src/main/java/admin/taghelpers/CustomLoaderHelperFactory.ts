
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

        


            import { Object } from '../../java/lang/Object.js';
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { AbeClientInformationInterface } from '../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
//not GWT import const LicensingException

import { ServiceClientInformationInterfaceFactory } from '../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperFactoryInterface } from './TagHelperFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const TagHelperFactoryInterface
import { HelperFactory } from './HelperFactory.js';
//sameFolderImports - not GWT import - same folder const HelperFactory

export class CustomLoaderHelperFactory
            extends Object
         implements TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "admin.taghelpers.CustomLoaderHelper";

    private static readonly FACTORYNAME: string = "CustomLoaderHelperFactory";

public constructor (){

            super();
        }

getInstance(...args: any[]): any {
   
    if (args.length === 2) return this.getInstance$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(LicensingException.constructor)
            
    public getInstance$overload1(hashMap: HashMap<any, any>, pageContext: PageContext): any{

    let abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(abeClientInformation, FACTORYNAME, CLASSNAME, hashMap, pageContext);;
    
}


                //@Throws(LicensingException.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(abeClientInformation, FACTORYNAME, CustomLoaderHelperFactory.CLASSNAME);;
    
}


}

