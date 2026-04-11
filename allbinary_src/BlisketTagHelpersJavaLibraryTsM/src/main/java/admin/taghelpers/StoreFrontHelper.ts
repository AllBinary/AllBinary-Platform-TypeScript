
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { StoreFront } from "../../org/allbinary/business/context/modules/storefront/StoreFront.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    
import { Replace } from "../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { CommonSeps } from "../../org/allbinary/string/CommonSeps.js";

    

export class StoreFrontHelper extends TagHelper {
        

    private readonly storeFrontInterface: StoreFrontInterface

    private readonly currentLocation: string

    private readonly currentHomeLocation: string
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext

    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
        
        
;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.currentLocation= Replace(CommonSeps.getInstance()!.SPACE, "%20").
                            all(storeFrontInterface!.getCurrentHostName() +storeFrontInterface!.getCurrentHostNamePath());
    
this.currentHomeLocation= Replace(CommonSeps.getInstance()!.SPACE, "%20").
                            all(storeFrontInterface!.getCurrentHomeHostName() +storeFrontInterface!.getCurrentHomeHostNamePath());
    

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.storeFrontInterface= StoreFront();
    
this.currentLocation= stringUtil!.EMPTY_STRING;
    
this.currentHomeLocation= stringUtil!.EMPTY_STRING;
    

                        }
                            
}


    public getCurrentLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentLocation;
    
}


    public getCurrentHomeLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentHomeLocation;
    
}


}
                
            

