
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
        



import { CollidableCompositeLayer } from "../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CollisionHelper } from "./CollisionHelper.js";

export class SourceCollisionHelper extends CollisionHelper {
        
public constructor (layerInterface: AllBinaryLayer)                        

                            : super(layerInterface){

            super();
            var layerInterface = layerInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollidable(layerInterface: CollidableCompositeLayer): boolean{
var layerInterface = layerInterface

                        if(this.sourceLayerInterface != layerInterface)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

