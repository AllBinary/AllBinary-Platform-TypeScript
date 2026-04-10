
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
        



import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { DomDocumentMappingInterface } from "../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

interface TransformInfoObjectConfigInterface extends DomDocumentMappingInterface {
        

    containsView(transformInfoInterface: TransformInfoInterface): boolean

                @Throws(Exception::class)
            
    getName(): string

                @Throws(Exception::class)
            
    getTransformsGroup(group: string): Vector

                @Throws(Exception::class)
            
    getTransforms(): Vector

                @Throws(Exception::class)
            
    getParentTransforms(): Vector

                @Throws(Exception::class)
            
    getGroupTransforms(): Vector

                @Throws(Exception::class)
            
    getOutputTypeName(): string

    setOutputTypeName(value: string)

                @Throws(Exception::class)
            
    getInputOutputTypeName(): string

                @Throws(Exception::class)
            
    getInputOutputTypeFile(): string

                @Throws(Exception::class)
            
    getImportUriPath(): string

    toString(): string

}
                
            

