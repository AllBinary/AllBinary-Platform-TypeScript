
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { BasketData } from '../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
//not GWT import const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontInterface } from './StoreFrontInterface.js';
//not GWT import - same folder const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

                import { StoreFrontData } from './StoreFrontData.js';
//not GWT import - same folder const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

                
export class StoreFrontView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private storeFrontInterface: StoreFrontInterface;

public constructor (storeFrontInterface: StoreFrontInterface){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("Constructing: StoreFrontView for: " +storeFrontInterface!.getName(), this, commonStrings!.GET_INSTANCE);
    

                                    }
                                
this.storeFrontInterface= storeFrontInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = this.storeFrontInterface!.toHashMap()!;;
    

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;;
    
hashMap!.put(storeFrontData!.CURRENTHOMEHOSTNAME, this.storeFrontInterface!.getCurrentHomeHostName());
    
hashMap!.put(storeFrontData!.CURRENTHOMEHOSTNAMEPATH, this.storeFrontInterface!.getCurrentHomeHostNamePath());
    
hashMap!.put(storeFrontData!.CURRENTHOSTNAME, this.storeFrontInterface!.getCurrentHostName());
    
hashMap!.put(storeFrontData!.CURRENTHOSTNAMEPATH, this.storeFrontInterface!.getCurrentHostNamePath());
    
hashMap!.put(BasketData.NAME, this.storeFrontInterface!.getBasketName());
    

    var node: Node = ModDomHelper.createNameValueNodes(document, storeFrontData!.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



