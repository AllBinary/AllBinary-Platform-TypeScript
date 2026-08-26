
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { AllBinaryEventObjectFactoryInterface } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObjectFactoryInterface.js';
      const AllBinaryEventObjectFactoryInterface = globalThis.org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TerrainEvent } from './TerrainEvent.js';

export class TerrainEventFactory
            extends Object
         implements AllBinaryEventObjectFactoryInterface {
        

public constructor (){

            super();
        }


    public getInstance(): AllBinaryEventObject{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TerrainEvent(NullUtil.getInstance()!.NULL_OBJECT);
    
}


}
                
            

