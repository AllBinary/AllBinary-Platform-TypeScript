
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
        



import { HashMap } from "../../../java/util/HashMap.js";

    
import { PageContext } from "../../../javax/servlet/jsp/PageContext.js";

    
import { LicensingException } from "../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { TagHelperFactoryInterface } from "../../../admin/taghelpers/TagHelperFactoryInterface.js";

    
import { HelperFactory } from "../../../admin/taghelpers/HelperFactory.js";

    

export class TransformInfoHelperFactory
            extends Object
        
                , TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "taghelpers.transform.info.TransformInfoHelper";
        
        

    private static readonly FACTORYNAME: string = "TransformInfoHelperFactory";
        
        
public constructor (){

            super();
            }


                //@Throws(LicensingException::class)
            
    public getInstance(hashMap: HashMap<any, any>, pageContext: PageContext): any = {}{
var hashMap = hashMap
var pageContext = pageContext



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(FACTORYNAME, CLASSNAME, hashMap, pageContext);

                        ;
    
}


}
                
            

