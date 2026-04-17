
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

import { BasicItemData } from "./BasicItemData.js";

export class BasicItemView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly itemInterface: ItemInterface

    private readonly vector: Vector
public constructor (itemInterface: ItemInterface, vector: Vector){

            super();
            var itemInterface = itemInterface
var vector = vector
this.itemInterface= itemInterface;
    
this.vector= vector;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRODUCTSEARCHLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "toXmlNode");
    

                                    }
                                

    var hashMap: HashMap<any, any> = itemInterface!.toHashMap()!;
        
        
;
    

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    
hashMap!.put(BasicItemData.IMAGE, EMPTY_STRING);
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var node: Node = document.createElement(BasicItemData.ITEM)!;
        
        
;
    

    var nameArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size2: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {

    var name: string = nameArray[index]! as String;
        
        
;
    

    var value: string = hashMap!.get(name as Object);

                         as String;
        
        
;
    
value= stringUtil!.getInstance(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}


    var totalNode: Node = ModDomHelper.createNameValueNodes(document, BasicItemData.TOTAL, this.itemInterface!.getTotal()!.toString())!;
        
        
;
    
node.appendChild(totalNode);
    

    var size: number = this.vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var domNodeInterface: DomNodeInterface = this.vector.get(index);

                         as DomNodeInterface;
        
        
;
    

    var customNode: Node = domNodeInterface!.toXmlNode(document)!;
        
        
;
    
node.appendChild(customNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

