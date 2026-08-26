
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
      const Attr = globalThis.org.w3c.dom.Attr;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
      const NamedNodeMap = globalThis.org.w3c.dom.NamedNodeMap;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoDomNode } from './TransformInfoDomNode.js';
import { TransformInfoInterface } from './TransformInfoInterface.js';
import { TransformInfoData } from './TransformInfoData.js';

export class TransformInfoDomNodeView extends TransformInfoDomNode implements DomNodeInterface {
        

public constructor (transformInfoInterface: TransformInfoInterface, mapping: string){
            super(transformInfoInterface, mapping);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (name: string, mappedName: string){
            super(name, mappedName);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (name: string){
            super(name, 
                            null);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var subViewNode: Node = document.createElement(transformInfoData!.NAME)!;;
    

    var viewNameAttr: Attr = document.createAttribute(transformInfoData!.NAME)!;;
    
viewNameAttr!.setValue(this.getTransformInfoInterface()!.getName());
    

    var componentNodeAttributes: NamedNodeMap = subViewNode!.getAttributes()!;;
    
componentNodeAttributes!.setNamedItem(viewNameAttr);
    

                        if(this.getMappedName() != 
                                    null
                                )
                        
                                    {
                                    
    var mappedNameAttr: Attr = document.createAttribute(transformInfoData!.MAPPED)!;;
    
mappedNameAttr!.setValue(this.getMappedName());
    
componentNodeAttributes!.setNamedItem(mappedNameAttr);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subViewNode;
    
}


}
                
            

