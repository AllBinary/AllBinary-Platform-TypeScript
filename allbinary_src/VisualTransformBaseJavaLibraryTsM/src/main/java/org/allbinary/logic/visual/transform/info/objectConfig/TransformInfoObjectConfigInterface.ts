
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { DomDocumentMappingInterface } from '../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
//not GWT import const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoObjectConfigInterface extends DomDocumentMappingInterface {
        

    containsView(transformInfoInterface: TransformInfoInterface): boolean

                //@Throws(Exception.constructor)
            
    getName(): string

                //@Throws(Exception.constructor)
            
    getTransformsGroup(group: string): BasicArrayList

                //@Throws(Exception.constructor)
            
    getTransforms(): BasicArrayList

                //@Throws(Exception.constructor)
            
    getParentTransforms(): BasicArrayList

                //@Throws(Exception.constructor)
            
    getGroupTransforms(): BasicArrayList

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



