
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

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasketInterface } from "../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { WeblisketSession } from "../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class BasketHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private storeFrontInterface: StoreFrontInterface

    private propertiesHashMap: HashMap<any, any>

    private pageContext: PageContext

    private readonly MAX: number = 200;
        
        
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.propertiesHashMap= hashMap;
    
this.pageContext= pageContext;
    

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME);

                         as String;
        
        
;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
}


    public isBasketEmpty(): Boolean{

        try {
            
    var basket: BasketInterface = this.weblisketSession!.getOrder()!.getBasket()!;
        
        
;
    

                        if(basket.getNumberOfItems()!.toInt() <= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "isBasketEmpty()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}

}


}
                
            

