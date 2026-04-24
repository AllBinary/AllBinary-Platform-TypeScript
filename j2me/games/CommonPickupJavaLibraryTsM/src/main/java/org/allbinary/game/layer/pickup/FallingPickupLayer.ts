
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { CollidableAlwaysPickupNeverCollideBehaviorFactory } from "../../../../../org/allbinary/game/collision/CollidableAlwaysPickupNeverCollideBehaviorFactory.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { TickableInterface } from "../../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PickupLayer } from "./PickupLayer.js";

import { CountedPickedUpLayerInterfaceFactory } from "./CountedPickedUpLayerInterfaceFactory.js";

export class FallingPickupLayer extends PickupLayer implements TickableInterface {
        

    private static readonly NAME: string = "FallingPickupLayer";
        
        
public constructor (remoteInfo: RemoteInfo){
            super(NAME, remoteInfo, 0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY, NullAnimationFactory.getFactoryInstance()!.getInstance(0), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition.getInstanceD());
                        //var remoteInfo = remoteInfo


                            //For kotlin this is before the body of the constructor.
                    
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
this.setPosition(this.x, this.y +1, this.z);
    
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

