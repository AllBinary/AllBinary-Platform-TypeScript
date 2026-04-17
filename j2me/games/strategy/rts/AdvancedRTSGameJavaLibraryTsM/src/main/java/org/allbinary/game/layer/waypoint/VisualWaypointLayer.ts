
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { SelectionHudPaintable } from "../../../../../org/allbinary/game/layer/SelectionHudPaintable.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { WaypointLayer } from "./WaypointLayer.js";

import { WaypointInfoHudPaintableSingleton } from "./WaypointInfoHudPaintableSingleton.js";

export class VisualWaypointLayer extends WaypointLayer {
        
public constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number)                        

                            : super(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var x = x
    //var y = y


                            //For kotlin this is before the body of the constructor.
                    
}


    public createHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: WaypointInfoHudPaintable = WaypointInfoHudPaintableSingleton.getInstance()!;
        
        
;
    
rtsLayerHudPaintable!.setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor());
    
rtsLayerHudPaintable!.setRtsLayer(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: WaypointInfoHudPaintable = WaypointInfoHudPaintableSingleton.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


}
                
            

