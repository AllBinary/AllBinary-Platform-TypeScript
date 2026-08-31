
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
        



import { HashMap } from '../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFront } from '../../org/allbinary/business/context/modules/storefront/StoreFront.js';
      //not GWT import const StoreFront = globalThis.org.allbinary.business.context.modules.storefront.StoreFront;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not plain js import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Replace } from '../../org/allbinary/logic/string/regex/replace/Replace.js';
      //not GWT import const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not plain js import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelper } from './TagHelper.js';

export class StoreFrontHelper extends TagHelper {
        

    private readonly storeFrontInterface: StoreFrontInterface;

    private readonly currentLocation: string;

    private readonly currentHomeLocation: string;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.currentLocation= new Replace(CommonSeps.getInstance()!.SPACE, "%20").all(this.storeFrontInterface!.getCurrentHostName() +this.storeFrontInterface!.getCurrentHostNamePath());
    
this.currentHomeLocation= new Replace(CommonSeps.getInstance()!.SPACE, "%20").all(this.storeFrontInterface!.getCurrentHomeHostName() +this.storeFrontInterface!.getCurrentHomeHostNamePath());
    

                                    }
                                
                        else {
                            
    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
this.storeFrontInterface= new StoreFront();
    
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



