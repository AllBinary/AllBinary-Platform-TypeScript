
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { StoreFrontOrdersHistoryStatisticsInterface } from "./StoreFrontOrdersHistoryStatisticsInterface.js";

import { StoreFrontOrdersHistoryStatisticsData } from "./StoreFrontOrdersHistoryStatisticsData.js";

export class StoreFrontOrdersHistoryStatisticsView
            extends Object
         implements DomNodeInterface {
        

    private storeFrontOrdersHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface
public constructor (storeFrontOrdersHistoryStatisticsInterface: StoreFrontOrdersHistoryStatisticsInterface){

            super();
        var storeFrontOrdersHistoryStatisticsInterface = storeFrontOrdersHistoryStatisticsInterface
this.storeFrontOrdersHistoryStatisticsInterface= storeFrontOrdersHistoryStatisticsInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.storeFrontOrdersHistoryStatisticsInterface!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, StoreFrontOrdersHistoryStatisticsData.getInstance()!.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

