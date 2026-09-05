
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

        


import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DestroyableBaseBehavior } from './DestroyableBaseBehavior.js';
//not GWT import - same folder const DestroyableBaseBehavior = globalThis.org.allbinary.game.combat.destroy.DestroyableBaseBehavior;

                import { DestroyedLayerProcessor } from './DestroyedLayerProcessor.js';
//not GWT import - same folder const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

                
export class DestroyableSimpleBehavior extends DestroyableBaseBehavior {
        

    readonly ownerLayer: CollidableCompositeLayer;

    private destroyed: boolean = false;

public constructor (ownerLayer: CollidableCompositeLayer){

            super();
        this.ownerLayer= ownerLayer;
    
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyed;
    
}


    public setDestroyed(destroyed: boolean){
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    DestroyedLayerProcessor.getInstance()!.add(this.ownerLayer);
    

                                    }
                                
}


}



