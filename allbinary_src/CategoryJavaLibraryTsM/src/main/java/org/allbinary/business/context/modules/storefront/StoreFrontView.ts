
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { BasketData } from "../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreFrontInterface } from "./StoreFrontInterface.js";

import { StoreFrontData } from "./StoreFrontData.js";

export class StoreFrontView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private storeFrontInterface: StoreFrontInterface
public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        var storeFrontInterface = storeFrontInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF("Constructing: StoreFrontView for: " +storeFrontInterface!.getName(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                
this.storeFrontInterface= storeFrontInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.storeFrontInterface!.toHashMap()!;
        
        
;
    

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        
;
    
hashMap!.put(storeFrontData!.CURRENTHOMEHOSTNAME, this.storeFrontInterface!.getCurrentHomeHostName());
    
hashMap!.put(storeFrontData!.CURRENTHOMEHOSTNAMEPATH, this.storeFrontInterface!.getCurrentHomeHostNamePath());
    
hashMap!.put(storeFrontData!.CURRENTHOSTNAME, this.storeFrontInterface!.getCurrentHostName());
    
hashMap!.put(storeFrontData!.CURRENTHOSTNAMEPATH, this.storeFrontInterface!.getCurrentHostNamePath());
    
hashMap!.put(BasketData.NAME, this.storeFrontInterface!.getBasketName());
    

    var node: Node = ModDomHelper.createNameValueNodes(document, storeFrontData!.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

