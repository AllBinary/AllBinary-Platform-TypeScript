
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
//not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PartInterface } from './PartInterface.js';
//not GWT import - same folder const PartInterface = globalThis.org.allbinary.game.part.PartInterface;

                
export interface PartFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    getInstance(sourceLayerInterface: AllBinaryLayer, relativeRelationship: RelativeRelationship): PartInterface

}



