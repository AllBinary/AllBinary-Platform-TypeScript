
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
        



import { HardwareComponentInterface } from "../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { MediaInterface } from "../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MediaInterface.js";

    

export class Media
            extends Object
        
                , HardwareComponentInterface
                , MediaInterface {
        

    private data: string
public constructor (data: string){

            super();
            var data = data
this.data= data;
    
}


    public compareTo(componentInterface: HardwareComponentInterface): boolean{
var componentInterface = componentInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return data;
    
}


}
                
            

