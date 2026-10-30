
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
//not GWT import const HashMap

import { Set } from '../../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StreetAddressData } from '../../../../../../../org/allbinary/business/user/address/StreetAddressData.js';
//not GWT import const StreetAddressData

import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderItemInterface } from './OrderItemInterface.js';
//sameFolderImports - not GWT import - same folder const OrderItemInterface
import { ItemData } from './ItemData.js';
//sameFolderImports - not GWT import - same folder const ItemData
import { BasicItemView } from './BasicItemView.js';
//sameFolderImports - not GWT import - same folder const BasicItemView

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

    let hashMap: HashMap<any, any> = this.itemInterface!.toHashMap()!;;
    

    let keySet: Set = hashMap!.keys()!;;
    

    let node: Node = document.createElement(ItemData.ITEM)!;;
    

    let basicItemView: BasicItemView = new BasicItemView(this.itemInterface, this.vector);;
    
node.appendChild(basicItemView!.toXmlNode(document));
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let nameArray: any[] = keySet!.()!;;
    

    let size: number = nameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let name: string = nameArray[index]! as string;;
    

    let value: string = hashMap!.get(name) as string;;
    
value= stringUtil!.getNonNull(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}


    let shippingAddressNode: Node = document.createElement(StreetAddressData.NAME)!;;
    
shippingAddressNode!.appendChild(this.itemInterface!.getShippingAddress()!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

