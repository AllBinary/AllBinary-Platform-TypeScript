
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../java/util/HashMap.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class CustomLoaderHelperFactory
            extends Object
        
                , TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "admin.taghelpers.CustomLoaderHelper";
        
        

    private static readonly FACTORYNAME: string = "CustomLoaderHelperFactory";
        
        
public constructor (){

            super();
            }


                //@Throws(LicensingException::class)
            
    public getInstance(hashMap: HashMap<any, any>, pageContext: PageContext): any{
    //var hashMap = hashMap
    //var pageContext = pageContext

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(abeClientInformation, FACTORYNAME, CLASSNAME, hashMap, pageContext);

                        ;
    
}


                //@Throws(LicensingException::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface): any{
    //var abeClientInformation = abeClientInformation



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(abeClientInformation, FACTORYNAME, CLASSNAME);

                        ;
    
}


}
                
            

