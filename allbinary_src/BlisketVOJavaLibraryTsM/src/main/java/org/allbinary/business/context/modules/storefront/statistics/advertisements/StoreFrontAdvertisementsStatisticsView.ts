
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

    

export class StoreFrontAdvertisementsStatisticsView
            extends Object
        
                , DomNodeInterface {
        

    private storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface
public constructor (storeFrontAdvertisementsStatisticsInterface: StoreFrontAdvertisementsStatisticsInterface){

            super();
            var storeFrontAdvertisementsStatisticsInterface = storeFrontAdvertisementsStatisticsInterface
this.storeFrontAdvertisementsStatisticsInterface= storeFrontAdvertisementsStatisticsInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.storeFrontAdvertisementsStatisticsInterface!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, StoreFrontAdvertisementsStatisticsData.getInstance()!.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

