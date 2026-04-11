
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
        



import { TransformInfoHttpStoreFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreFactory.js";

    
import { TransformInfoObjectConfigAndManipulatorFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactory.js";

    
import { TransformInfoObjectConfigGeneratorFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactory.js";

    

export class TransformInfoEntityBuilder
            extends Object
         {
        

    public static getInstance(): TransformInfoEntity{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TransformInfoEntityFactory.getInstance(TransformInfoObjectConfigGeneratorFactory.getInstance(), TransformInfoObjectConfigAndManipulatorFactory.getInstance(), TransformInfoHttpStoreFactory.getInstance());

                        ;
    
}


}
                
            

