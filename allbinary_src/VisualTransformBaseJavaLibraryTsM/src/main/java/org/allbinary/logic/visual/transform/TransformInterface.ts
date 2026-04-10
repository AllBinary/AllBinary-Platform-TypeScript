
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
        



import { DomDocumentMappingInterface } from "../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js";

    
import { TransformDocumentInterface } from "../../../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { CompositeTransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js";

    

interface TransformInterface extends DomDocumentMappingInterface, CompositeTransformInfoInterface {
        

    public getTypeId(): number

    public setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface)

    public getTransformDocumentInterface(): TransformDocumentInterface

                //@Throws(Error::class)
            
    public view(): string

}
                
            

