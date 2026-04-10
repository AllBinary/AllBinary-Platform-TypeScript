
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

                //@Throws(Error::class)
            
    getName(): string

                //@Throws(Error::class)
            
    getTransformsGroup(group: string): Vector

                //@Throws(Error::class)
            
    getTransforms(): Vector

                //@Throws(Error::class)
            
    getParentTransforms(): Vector

                //@Throws(Error::class)
            
    getGroupTransforms(): Vector

                //@Throws(Error::class)
            
    getOutputTypeName(): string

    setOutputTypeName(value: string)

                //@Throws(Error::class)
            
    getInputOutputTypeName(): string

                //@Throws(Error::class)
            
    getInputOutputTypeFile(): string

                //@Throws(Error::class)
            
    getImportUriPath(): string

    toString(): string

}
                
            

