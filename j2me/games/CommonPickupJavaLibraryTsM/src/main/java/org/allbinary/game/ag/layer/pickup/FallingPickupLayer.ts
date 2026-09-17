
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { NullAnimationFactory } from '../../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory

import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory

import { PickupLayer } from '../../../../../../org/allbinary/game/layer/pickup/PickupLayer.js';
//not GWT import const PickupLayer

import { RemoteInfo } from '../../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo

import { TickableInterface } from '../../../../../../org/allbinary/game/tick/TickableInterface.js';
//not GWT import const TickableInterface

import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory

import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle

import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { ViewPosition } from '../../../../../../org/allbinary/view/ViewPosition.js';
//not GWT import const ViewPosition

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FallingPickupLayer extends PickupLayer implements TickableInterface {
        

    private static readonly NAME: string = "FallingPickupLayer";

public constructor (remoteInfo: RemoteInfo){
            super(FallingPickupLayer.NAME, remoteInfo, 0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY, NullAnimationFactory.getFactoryInstance()!.getInstance(0), new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
this.setPosition(this.x, this.y +1, this.z);
    
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}



