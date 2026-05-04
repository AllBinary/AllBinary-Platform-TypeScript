
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../../../../java/util/Vector.js';

    
import { DomDocumentMappingInterface } from '../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';

    
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';

    

















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
                
            

