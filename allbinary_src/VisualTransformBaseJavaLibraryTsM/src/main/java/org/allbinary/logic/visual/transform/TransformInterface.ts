
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { DomDocumentMappingInterface } from '../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
      const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
//not game specific package import { TransformDocumentInterface } from '../../../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
      const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
//not game specific package import { CompositeTransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
      const CompositeTransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.CompositeTransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInterface extends DomDocumentMappingInterface, CompositeTransformInfoInterface {
        

    getTypeId(): number

    setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface)

    getTransformDocumentInterface(): TransformDocumentInterface

                //@Throws(Exception.constructor)
            
    view(): string

}



