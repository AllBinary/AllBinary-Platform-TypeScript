
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
        



import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class MultiPlayerGameLayer extends CollidableDestroyableDamageableLayer
                , MultiPlayerGameLayerInterface {
        
public constructor (remoteInfo: RemoteInfo, groupInterface: Group[], layerInfo: Rectangle, viewPosition: ViewPosition)                        

                            : super(groupInterface, layerInfo, viewPosition){

            super();
                //var remoteInfo = remoteInfo
    //var groupInterface = groupInterface
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (remoteInfo: RemoteInfo, groupInterface: Group[], name: string, layerInfo: Rectangle, viewPosition: ViewPosition)                        

                            : super(groupInterface, name, layerInfo, viewPosition){

            super();
                //var remoteInfo = remoteInfo
    //var groupInterface = groupInterface
    //var name = name
    //var layerInfo = layerInfo
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}


    public getMultiplayerBehavior(): MultiplayerBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MultiplayerBehavior.NULL_MULTIPLAYER_BEHAVIOR;
    
}


    public setPingInfo(show: boolean){
var show = show
}


    setFiring(firing: number){
var firing = firing
}


    getFiring(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

