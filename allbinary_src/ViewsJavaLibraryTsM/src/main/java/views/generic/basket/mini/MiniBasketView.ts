
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { BasketData } from '../../../../org/allbinary/business/user/commerce/inventory/basket/BasketData.js';
      //not GWT import const BasketData = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketData;

      
import { BasketInterface } from '../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
      //not GWT import const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchData } from '../../../../org/allbinary/logic/control/search/SearchData.js';
      //not GWT import const SearchData = globalThis.org.allbinary.logic.control.search.SearchData;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { HttpStoreComponentView } from '../../../../views/business/context/modules/storefront/HttpStoreComponentView.js';
      //not GWT import const HttpStoreComponentView = globalThis.views.business.context.modules.storefront.HttpStoreComponentView;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MiniBasketView extends HttpStoreComponentView implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

        try {
            
    var basketInterface: BasketInterface = this.getWeblisketSession()!.getOrder()!.getBasket()!;;
    

    var basketNode: Node = document.createElement(BasketData.BASKET)!;;
    

    var totalNumberNode: Node = document.createElement(SearchData.TOTAL_NUMBER_ITEMS)!;;
    

    var totalNumberTextNode: Node = document.createTextNode(basketInterface!.getNumberOfItems()!.toString())!;;
    
totalNumberNode!.appendChild(totalNumberTextNode);
    

    var totalWeightNode: Node = document.createElement(BasketData.TOTALWEIGHT)!;;
    

    var totalWeightTextNode: Node = document.createTextNode(basketInterface!.getTotalWeight()!.toString())!;;
    
totalWeightNode!.appendChild(totalWeightTextNode);
    

    var subTotalNode: Node = document.createElement(BasketData.SUBTOTAL)!;;
    

    var subTotalTextNode: Node = document.createTextNode(basketInterface!.getSubTotal()!.toString())!;;
    
subTotalNode!.appendChild(subTotalTextNode);
    
basketNode!.appendChild(totalNumberNode);
    
basketNode!.appendChild(totalWeightNode);
    
basketNode!.appendChild(subTotalNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basketNode;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGINGERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                            throw e;
                    
}

}


    public addDomNodeInterfaces(){
this.addDomNodeInterface(this as DomNodeInterface);
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{

        try {
            this.addDomNodeInterfaces();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.view();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "view()", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



