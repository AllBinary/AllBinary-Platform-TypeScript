
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
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { BasketData } from '../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
      const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
//not game specific package import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontInterface } from './StoreFrontInterface.js';
import { StoreFrontData } from './StoreFrontData.js';

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
                
            

