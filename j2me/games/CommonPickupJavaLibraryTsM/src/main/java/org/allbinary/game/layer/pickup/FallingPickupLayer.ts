
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
        



import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { TickableInterface } from "../../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class FallingPickupLayer extends PickupLayer
                , TickableInterface {
        

    private static readonly NAME: string = "FallingPickupLayer";
        
        
public constructor (remoteInfo: RemoteInfo)                        

                            : super(NAME, remoteInfo, ViewPosition()){

            super();
            var remoteInfo = remoteInfo


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor ()                        

                            : super(NAME, ViewPosition()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
this.this.setPosition(this.x, this.y +1, this.z)
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

