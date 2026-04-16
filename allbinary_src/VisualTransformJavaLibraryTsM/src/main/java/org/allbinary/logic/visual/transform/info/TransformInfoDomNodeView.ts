
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

    
import { Attr } from "../../../../../../org/w3c/dom/Attr.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { NamedNodeMap } from "../../../../../../org/w3c/dom/NamedNodeMap.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

import { TransformInfoData } from "./TransformInfoData.js";

export class TransformInfoDomNodeView extends TransformInfoDomNode
                , DomNodeInterface {
        
public constructor (transformInfoInterface: TransformInfoInterface, mapping: string)                        

                            : super(transformInfoInterface, mapping){

            super();
            var transformInfoInterface = transformInfoInterface
var mapping = mapping


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string, mappedName: string)                        

                            : super(name, mappedName){

            super();
            var name = name
var mappedName = mappedName


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string)                        

                            : super(name, 
                            null){

            super();
            var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        
;
    

    var subViewNode: Node = document.createElement(transformInfoData!.NAME)!;
        
        
;
    

    var viewNameAttr: Attr = document.createAttribute(transformInfoData!.NAME)!;
        
        
;
    
viewNameAttr!.setValue(this.getTransformInfoInterface()!.getName());
    

    var componentNodeAttributes: NamedNodeMap = subViewNode!.getAttributes()!;
        
        
;
    
componentNodeAttributes!.setNamedItem(viewNameAttr);
    

                        if(this.getMappedName() != 
                                    null
                                )
                        
                                    {
                                    
    var mappedNameAttr: Attr = document.createAttribute(transformInfoData!.MAPPED)!;
        
        
;
    
mappedNameAttr!.setValue(this.getMappedName());
    
componentNodeAttributes!.setNamedItem(mappedNameAttr);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subViewNode;
    
}


}
                
            

