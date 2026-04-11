
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class StoreFrontInventoryStatisticsView
            extends Object
        
                , DomNodeInterface {
        

    private storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface
public constructor (storeFrontInventoryStatisticsInterface: StoreFrontInventoryStatisticsInterface){

            super();
            var storeFrontInventoryStatisticsInterface = storeFrontInventoryStatisticsInterface
this.storeFrontInventoryStatisticsInterface= storeFrontInventoryStatisticsInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.storeFrontInventoryStatisticsInterface!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, StoreFrontInventoryStatisticsData.getInstance()!.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

