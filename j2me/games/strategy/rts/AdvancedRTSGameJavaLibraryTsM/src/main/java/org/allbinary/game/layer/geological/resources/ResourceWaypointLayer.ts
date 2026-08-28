
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        
//not game specific package import { SelectionHudPaintable } from '../../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
      const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

      
//not game specific package import { WaypointLayer } from '../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
      const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
//not game specific package import { Group } from '../../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { PathFindingLayerInterface } from '../../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
//not game specific package import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RemoteInfo } from '../../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeologicalResourceInfoHudPaintableSingleton } from './GeologicalResourceInfoHudPaintableSingleton.js';
import { GeologicalResourceInfoHudPaintable } from './GeologicalResourceInfoHudPaintable.js';

export class ResourceWaypointLayer extends WaypointLayer {
        

public constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number){
            super(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public createHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: GeologicalResourceInfoHudPaintable = GeologicalResourceInfoHudPaintableSingleton.getInstance()!;;
    
rtsLayerHudPaintable!.setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor());
    
rtsLayerHudPaintable!.setRtsLayer(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: GeologicalResourceInfoHudPaintable = GeologicalResourceInfoHudPaintableSingleton.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


}



