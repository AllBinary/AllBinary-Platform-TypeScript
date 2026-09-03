
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StreetAddressData } from '../../../../../../../org/allbinary/business/user/address/StreetAddressData.js';
      //not GWT import const StreetAddressData = globalThis.org.allbinary.business.user.address.StreetAddressData;

      
import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderItemInterface } from './OrderItemInterface.js';
//not GWT import const OrderItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.OrderItemInterface;

                import { ItemData } from './ItemData.js';
//not GWT import const ItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemData;

                import { BasicItemView } from './BasicItemView.js';
//not GWT import const BasicItemView = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemView;

                
export class ItemView
            extends Object
         {
        

    private readonly itemInterface: OrderItemInterface;

    private readonly vector: BasicArrayList;

public constructor (itemInterface: OrderItemInterface, vector: BasicArrayList){

            super();
        this.itemInterface= itemInterface;
    
this.vector= vector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = this.itemInterface!.toHashMap()!;;
    

    var keySet: Set = hashMap!.keys()!;;
    

    var node: Node = document.createElement(ItemData.ITEM)!;;
    

    var basicItemView: BasicItemView = new BasicItemView(this.itemInterface, this.vector);;
    
node.appendChild(basicItemView!.toXmlNode(document));
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    var nameArray: any[] = keySet!.()!;;
    

    var size: number = nameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var name: string = nameArray[index]! as string;;
    

    var value: string = hashMap!.get(name) as string;;
    
value= stringUtil!.getNonNull(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}


    var shippingAddressNode: Node = document.createElement(StreetAddressData.NAME)!;;
    
shippingAddressNode!.appendChild(this.itemInterface!.getShippingAddress()!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



