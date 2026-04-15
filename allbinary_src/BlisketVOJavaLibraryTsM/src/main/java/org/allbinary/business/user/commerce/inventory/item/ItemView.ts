
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
        



            import Vector from "@ohos.util.Vector";
        
            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { StreetAddressData } from "../../../../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class ItemView
            extends Object
         {
        

    private readonly itemInterface: OrderItemInterface

    private readonly vector: Vector
public constructor (itemInterface: OrderItemInterface, vector: Vector){

            super();
            var itemInterface = itemInterface
var vector = vector
this.itemInterface= itemInterface;
    
this.vector= vector;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.itemInterface!.toHashMap()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var node: Node = document.createElement(ItemData.ITEM)!;
        
        
;
    

    var basicItemView: BasicItemView = new BasicItemView(this.itemInterface, vector);
        
        
;
    
node.appendChild(basicItemView!.toXmlNode(document));
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var nameArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var name: string = nameArray[index]! as String;
        
        
;
    

    var value: string = hashMap!.get(name as Object);

                         as String;
        
        
;
    
value= stringUtil!.getInstance(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}


    var shippingAddressNode: Node = document.createElement(StreetAddressData.NAME)!;
        
        
;
    
shippingAddressNode!.appendChild(this.itemInterface!.getShippingAddress()!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

