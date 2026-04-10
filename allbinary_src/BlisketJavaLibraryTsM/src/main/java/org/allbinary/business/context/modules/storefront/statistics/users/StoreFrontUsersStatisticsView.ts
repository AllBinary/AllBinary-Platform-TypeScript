
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

    

export class StoreFrontUsersStatisticsView
            extends Object
        
                , DomNodeInterface {
        

    private storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface
public constructor (storeFrontUsersStatisticsInterface: StoreFrontUsersStatisticsInterface){

            super();
            var storeFrontUsersStatisticsInterface = storeFrontUsersStatisticsInterface
this.storeFrontUsersStatisticsInterface= storeFrontUsersStatisticsInterface
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<Any, Any> = this.storeFrontUsersStatisticsInterface!.toHashMap()!;
        
        


    var node: Node = ModDomHelper.createNameValueNodes(document, StoreFrontUsersStatisticsData.getInstance()!.NAME, hashMap)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

