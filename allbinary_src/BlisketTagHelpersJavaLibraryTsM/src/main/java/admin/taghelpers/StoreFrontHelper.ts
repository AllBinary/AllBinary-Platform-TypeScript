
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
        



//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { StoreFront } from '../../org/allbinary/business/context/modules/storefront/StoreFront.js';
      const StoreFront = globalThis.org.allbinary.business.context.modules.storefront.StoreFront;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Replace } from '../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { CommonSeps } from '../../org/allbinary/string/CommonSeps.js';
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
                
            

