
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
        



import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DestroyableBaseBehavior } from "./DestroyableBaseBehavior.js";

import { DestroyedLayerProcessor } from "./DestroyedLayerProcessor.js";

export class DestroyableSimpleBehavior extends DestroyableBaseBehavior {
        

    readonly ownerLayer: CollidableCompositeLayer

    private destroyed: boolean = false;
        
        
public constructor (ownerLayer: CollidableCompositeLayer){

            super();
        var ownerLayer = ownerLayer
this.ownerLayer= ownerLayer;
    
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyed;
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    DestroyedLayerProcessor.getInstance()!.add(this.ownerLayer);
    

                                    }
                                
}


}
                
            

