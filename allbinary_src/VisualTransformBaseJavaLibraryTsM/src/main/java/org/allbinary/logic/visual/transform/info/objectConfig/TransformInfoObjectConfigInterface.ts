
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DomDocumentMappingInterface } from '../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
      const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
//not game specific package import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoObjectConfigInterface extends DomDocumentMappingInterface {
        

    containsView(transformInfoInterface: TransformInfoInterface): boolean

                //@Throws(Exception.constructor)
            
    getName(): string

                //@Throws(Exception.constructor)
            
    getTransformsGroup(group: string): Vector

                //@Throws(Exception.constructor)
            
    getTransforms(): Vector

                //@Throws(Exception.constructor)
            
    getParentTransforms(): Vector

                //@Throws(Exception.constructor)
            
    getGroupTransforms(): Vector

                //@Throws(Exception.constructor)
            
    getOutputTypeName(): string

    setOutputTypeName(value: string)

                //@Throws(Exception.constructor)
            
    getInputOutputTypeName(): string

                //@Throws(Exception.constructor)
            
    getInputOutputTypeFile(): string

                //@Throws(Exception.constructor)
            
    getImportUriPath(): string

    toString(): string

}
                
            

