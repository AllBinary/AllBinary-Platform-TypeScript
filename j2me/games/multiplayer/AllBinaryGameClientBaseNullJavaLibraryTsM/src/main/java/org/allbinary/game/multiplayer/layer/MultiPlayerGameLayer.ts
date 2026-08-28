
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MultiPlayerGameLayerInterface } from './MultiPlayerGameLayerInterface.js';
import { RemoteInfo } from './RemoteInfo.js';
import { MultiplayerBehavior } from './MultiplayerBehavior.js';

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



