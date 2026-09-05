
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
        
import { SelectionHudPaintable } from '../../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
//not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

      
import { WaypointLayer } from '../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
//not GWT import const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;

      
import { AnimationInterfaceFactoryInterface } from '../../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
import { Group } from '../../../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { PathFindingLayerInterface } from '../../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { Rectangle } from '../../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RemoteInfo } from '../../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeologicalResourceInfoHudPaintableSingleton } from './GeologicalResourceInfoHudPaintableSingleton.js';
//not GWT import - same folder const GeologicalResourceInfoHudPaintableSingleton = globalThis.org.allbinary.game.layer.geological.resources.GeologicalResourceInfoHudPaintableSingleton;

                import { GeologicalResourceInfoHudPaintable } from './GeologicalResourceInfoHudPaintable.js';
//not GWT import - same folder const GeologicalResourceInfoHudPaintable = globalThis.org.allbinary.game.layer.geological.resources.GeologicalResourceInfoHudPaintable;

                
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



