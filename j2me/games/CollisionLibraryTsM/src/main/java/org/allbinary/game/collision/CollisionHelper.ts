
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

    

export class CollisionHelper
            extends Object
         {
        

    sourceLayerInterface: AllBinaryLayer
public constructor (sourceLayerInterface: AllBinaryLayer){

            super();
            var sourceLayerInterface = sourceLayerInterface
this.sourceLayerInterface= sourceLayerInterface;
    
}


    public isCollidable(layerInterface: CollidableCompositeLayer): boolean{
var layerInterface = layerInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getOwnerLayerInterface(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sourceLayerInterface;
    
}


    public setOwnerLayerInterface(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface
this.sourceLayerInterface= sourceLayerInterface;
    
}


}
                
            

