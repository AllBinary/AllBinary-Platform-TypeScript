
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
        
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { Attr } from '../../../../../../org/w3c/dom/Attr.js';
//not GWT import const Attr

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { NamedNodeMap } from '../../../../../../org/w3c/dom/NamedNodeMap.js';
//not GWT import const NamedNodeMap

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoDomNode } from './TransformInfoDomNode.js';
//sameFolderImports - not GWT import - same folder const TransformInfoDomNode
import { TransformInfoInterface } from './TransformInfoInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoInterface
import { TransformInfoData } from './TransformInfoData.js';
//sameFolderImports - not GWT import - same folder const TransformInfoData

export class TransformInfoDomNodeView extends TransformInfoDomNode implements DomNodeInterface {
        

    public constructor(...args: any[]) {
        if(args.length === 2 && args[0] instanceof TransformInfoInterface && typeof args[1] === 'string') {
            const transformInfoInterface = args[0];
            const mapping = args[1];
            super(transformInfoInterface, mapping);
            this.constructor$0(transformInfoInterface, mapping);
            
        }
        else if(args.length === 1 && args[0] instanceof TransformInfoInterface) {
            const transformInfoInterface = args[0];
            super(transformInfoInterface);
            this.constructor$1(transformInfoInterface);
            
        }
        else if(args.length === 2) {
            const name = args[0];
            const mappedName = args[1];
            super(name, mappedName);
            this.constructor$2(name, mappedName);
            
        }
        else if(args.length === 1) {
            const name = args[0];
            super(name, 
                            null);
            this.constructor$3(name);
            
        }
        
    }
    
    private constructor$0(transformInfoInterface: TransformInfoInterface, mapping: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(transformInfoInterface: TransformInfoInterface): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$2(name: string, mappedName: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$3(name: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    let subViewNode: Node = document.createElement(transformInfoData!.NAME)!;;
    

    let viewNameAttr: Attr = document.createAttribute(transformInfoData!.NAME)!;;
    
viewNameAttr!.setValue(this.getTransformInfoInterface()!.getName());
    

    let componentNodeAttributes: NamedNodeMap = subViewNode!.getAttributes()!;;
    
componentNodeAttributes!.setNamedItem(viewNameAttr);
    

                        if(this.getMappedName() != 
                                    null
                                )
                        
                                    {
                                    
    let mappedNameAttr: Attr = document.createAttribute(transformInfoData!.MAPPED)!;;
    
mappedNameAttr!.setValue(this.getMappedName());
    
componentNodeAttributes!.setNamedItem(mappedNameAttr);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subViewNode;
    
}


}

