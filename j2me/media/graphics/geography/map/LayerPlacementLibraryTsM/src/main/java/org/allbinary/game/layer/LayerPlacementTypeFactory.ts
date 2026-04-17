
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { DirectionFactory } from "../../../../org/allbinary/direction/DirectionFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerPlacementTypeFactory
            extends Object
         {
        

    private static readonly instance: LayerPlacementTypeFactory = new LayerPlacementTypeFactory();
        
        

    public static getInstance(): LayerPlacementTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly MAP: LayerPlacementType = new LayerPlacementType(Integer.MAX_VALUE);
        
        

    public readonly LEFT: LayerPlacementType = new LayerPlacementType(DirectionFactory.getInstance()!.LEFT.getValue());
        
        

    public readonly DOWN: LayerPlacementType = new LayerPlacementType(DirectionFactory.getInstance()!.DOWN.getValue());
        
        

    public readonly UP: LayerPlacementType = new LayerPlacementType(DirectionFactory.getInstance()!.UP.getValue());
        
        

    public readonly RIGHT: LayerPlacementType = new LayerPlacementType(DirectionFactory.getInstance()!.RIGHT.getValue());
        
        

}
                
            

