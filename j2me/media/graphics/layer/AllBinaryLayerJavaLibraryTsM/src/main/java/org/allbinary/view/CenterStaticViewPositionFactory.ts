
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
        



import { DisplayInfoSingleton } from "../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    

export class CenterStaticViewPositionFactory
            extends Object
         {
        
public constructor (){

            super();
            }


    public getInstance(z: number): ViewPosition{
var z = z

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StaticViewPosition((displayInfoSingleton!.getLastWidth() shr 1), (displayInfoSingleton!.getLastHeight() shr 1), z);
    
}


}
                
            

