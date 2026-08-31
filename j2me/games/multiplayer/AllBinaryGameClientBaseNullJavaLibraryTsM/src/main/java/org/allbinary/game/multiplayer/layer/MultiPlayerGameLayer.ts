
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MultiPlayerGameLayerInterface } from './MultiPlayerGameLayerInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.multiplayer.layer.MultiPlayerGameLayerInterface;

                import { RemoteInfo } from './RemoteInfo.js';
//not GWT import const  = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

                import { MultiplayerBehavior } from './MultiplayerBehavior.js';
//not GWT import const  = globalThis.org.allbinary.game.multiplayer.layer.MultiplayerBehavior;

                
export class MultiPlayerGameLayer extends CollidableDestroyableDamageableLayer implements MultiPlayerGameLayerInterface {
        

public constructor (remoteInfo: RemoteInfo, groupInterface: Group[], name: string, layerInfo: Rectangle, viewPosition: ViewPositionBase){
            super(groupInterface, name, layerInfo, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getMultiplayerBehavior(): MultiplayerBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MultiplayerBehavior.NULL_MULTIPLAYER_BEHAVIOR;
    
}


    public setPingInfo(show: boolean){
}


    setFiring(firing: number){
}


    getFiring(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}



