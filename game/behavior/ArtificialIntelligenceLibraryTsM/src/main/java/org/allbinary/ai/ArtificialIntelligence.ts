
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryLayerManager } from '../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ArtificialIntelligenceInterface } from './ArtificialIntelligenceInterface.js';
//not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

                
export class ArtificialIntelligence
            extends Object
         implements ArtificialIntelligenceInterface {
        

    public static readonly AI_ID: number = 2;

    private static readonly instance: ArtificialIntelligence = new ArtificialIntelligence();

    public static getInstance(): ArtificialIntelligence{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArtificialIntelligence.instance;
    
}


public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public processAI(layerManager: AllBinaryLayerManager){
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


}



