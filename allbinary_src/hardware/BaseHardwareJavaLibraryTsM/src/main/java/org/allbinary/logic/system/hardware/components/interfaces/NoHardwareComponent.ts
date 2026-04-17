
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HardwareComponentInterface } from "./HardwareComponentInterface.js";

export class NoHardwareComponent
            extends Object
         implements HardwareComponentInterface {
        

    private static readonly instance: NoHardwareComponent = new NoHardwareComponent();
        
        

    public static getInstance(): NoHardwareComponent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public compareTo(componentInterface: HardwareComponentInterface): boolean{
var componentInterface = componentInterface

                        if(this == componentInterface)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.NULL_STRING;
    
}


}
                
            

