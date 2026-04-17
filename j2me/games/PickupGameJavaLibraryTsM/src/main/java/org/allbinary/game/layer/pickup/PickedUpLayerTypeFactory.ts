
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
        



import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PickedUpLayerTypeFactory
            extends Object
         {
        

    private static readonly instance: PickedUpLayerTypeFactory = new PickedUpLayerTypeFactory();
        
        

    public static getInstance(): PickedUpLayerTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public NONE: PickedUpLayerType = new PickedUpLayerType(StringUtil.getInstance()!.NULL_STRING);
        
        

    public BEAM: PickedUpLayerType = new PickedUpLayerType("BEAM");
        
        

    public MINE: PickedUpLayerType = new PickedUpLayerType("MINE");
        
        

    public PROJECTILE: PickedUpLayerType = new PickedUpLayerType("PROJECTILE");
        
        

    public ENHANCEMENT: PickedUpLayerType = new PickedUpLayerType("Enhancement");
        
        

    public MORPH: PickedUpLayerType = new PickedUpLayerType("Morph");
        
        

    public PART: PickedUpLayerType = new PickedUpLayerType("Part");
        
        

    public HEAL: PickedUpLayerType = new PickedUpLayerType("Heal");
        
        

    public LIFE: PickedUpLayerType = new PickedUpLayerType("Life");
        
        

    public POINTS: PickedUpLayerType = new PickedUpLayerType("Points");
        
        

}
                
            

