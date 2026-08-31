
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoInterface } from './TransformInfoInterface.js';
//not GWT import const  = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

                import { TransformInfoData } from './TransformInfoData.js';
//not GWT import const  = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

                
export class TransformInfoInterfaceView
            extends Object
         implements DomNodeInterface {
        

    private transformInfoInterface: TransformInfoInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        this.transformInfoInterface= transformInfoInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, TransformInfoData.getInstance()!.NAME, this.transformInfoInterface!.toHashMap());;
    
}


}



