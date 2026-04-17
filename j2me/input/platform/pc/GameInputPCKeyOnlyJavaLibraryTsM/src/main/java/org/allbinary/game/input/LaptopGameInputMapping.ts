
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
        



import { InputToGameKeyMapping } from "../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PCGameInputMapping } from "./PCGameInputMapping.js";

export class LaptopGameInputMapping extends PCGameInputMapping {
        

    getDefault(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LaptopDefaultGameInputMapping().
                            getInputMapping();

                        ;
    
}


}
                
            

