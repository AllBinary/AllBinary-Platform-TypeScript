
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
import { AnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
//not GWT import const Health
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group
import { NullRTSFormInputFactory } from '../../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSGameLayer
import { AdvancedRTSProperties } from '../../../../../org/allbinary/game/layer/AdvancedRTSProperties.js';
//not GWT import const AdvancedRTSProperties
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
//not GWT import const PathFindingLayerInterface
import { TileLayerPositionIntoViewPosition } from '../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const TileLayerPositionIntoViewPosition
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
//not GWT import const RTSPlayerLayerInterface
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo
import { AttackSound } from '../../../../../org/allbinary/media/audio/AttackSound.js';
//not GWT import const AttackSound
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableWaypointBehavior } from './CollidableWaypointBehavior.js';
//not GWT import - same folder const CollidableWaypointBehaviorimport { Waypoint } from './Waypoint.js';
//not GWT import - same folder const Waypointimport { WaypointCellPositionHistory } from './WaypointCellPositionHistory.js';
//not GWT import - same folder const WaypointCellPositionHistory
export class WaypointLayer extends AdvancedRTSGameLayer {
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 4;
    
}


protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number){
            super(remoteInfo, parentLayer, AdvancedRTSProperties.createProperties(), groupInterface, rootName, name, new Health(1000), NullRTSFormInputFactory.getInstance(), animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, new TileLayerPositionIntoViewPosition());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableWaypointBehavior(true));
    
this.getWaypointBehavior()!.setWaypoint(new Waypoint(this, AttackSound.getInstance()));
    
this.setAnimationInterface(this.indexedButShouldBeRotationAnimationInterface);
    
}


    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
this.percentCompleteP= 100;
    
this.initVisibility(rtsPlayerLayerInterface);
    
}


    public paint(graphics: Graphics){

                        if(this.isVisible())
                        
                                    {
                                    super.paint(graphics);
    

                                    }
                                
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){

        try {
            this.indexedButShouldBeRotationAnimationInterface!.nextFrame();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processTick", e);
    
}

}


    public damage(damage: number, damageType: number){
}


                //@Throws(Exception.constructor)
            
    public getDamage(damageType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public setDestroyed(destroyed: boolean){
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    WaypointCellPositionHistory.getInstance()!.removeLayer(this);
    

                                    }
                                
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WaypointLayer.getStaticType();;
    
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



