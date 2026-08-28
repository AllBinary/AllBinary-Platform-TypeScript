
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Set } from '../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StreetAddressData } from '../../../../../../../org/allbinary/business/user/address/StreetAddressData.js';
      const StreetAddressData = globalThis.org.allbinary.business.user.address.StreetAddressData;

      
//not game specific package import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderItemInterface } from './OrderItemInterface.js';
import { ItemData } from './ItemData.js';
import { BasicItemView } from './BasicItemView.js';

export class ItemView
            extends Object
         {
        

    private readonly itemInterface: OrderItemInterface;

    private readonly vector: Vector;

public constructor (itemInterface: OrderItemInterface, vector: Vector){

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



