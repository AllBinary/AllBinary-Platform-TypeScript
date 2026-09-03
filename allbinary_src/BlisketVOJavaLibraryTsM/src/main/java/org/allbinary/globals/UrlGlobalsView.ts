
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { HashMap } from '../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeInterface } from '../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { StdUtil } from '../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { Document } from '../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UrlGlobalsData } from './UrlGlobalsData.js';
//not GWT import const UrlGlobalsData = globalThis.org.allbinary.globals.UrlGlobalsData;

                
export class UrlGlobalsView
            extends Object
         implements DomNodeInterface {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(UrlGlobalsData.WEBAPPPATH, org.allbinary.globals.URLGLOBALS.getWebappPath());
    

    var node: Node = ModDomHelper.createNameValueNodes(document, UrlGlobalsData.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



