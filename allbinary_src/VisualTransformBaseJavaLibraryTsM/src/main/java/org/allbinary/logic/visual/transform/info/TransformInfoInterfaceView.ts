
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
        



import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoInterface } from "./TransformInfoInterface.js";

import { TransformInfoData } from "./TransformInfoData.js";

export class TransformInfoInterfaceView
            extends Object
         implements DomNodeInterface {
        

    private transformInfoInterface: TransformInfoInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        var transformInfoInterface = transformInfoInterface
this.transformInfoInterface= transformInfoInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, TransformInfoData.getInstance()!.NAME, transformInfoInterface!.toHashMap());

                        ;
    
}


}
                
            

