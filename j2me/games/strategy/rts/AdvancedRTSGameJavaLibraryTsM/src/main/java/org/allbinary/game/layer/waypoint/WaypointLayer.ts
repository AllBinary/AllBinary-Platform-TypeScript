
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { Health } from "../../../../../org/allbinary/game/health/Health.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { NullRTSFormInputFactory } from "../../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { AttackSound } from "../../../../../org/allbinary/media/audio/AttackSound.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { WaypointCellPositionHistory } from "./WaypointCellPositionHistory.js";

export class WaypointLayer extends AdvancedRTSGameLayer {
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 4;
    
}

protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number)                        

                            : super(remoteInfo, parentLayer, groupInterface, rootName, name, new Health(1000), NullRTSFormInputFactory.getInstance(), animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y){

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
                    
this.setCollidableInferface(new CollidableWaypointBehavior(this, true));
    
this.getWaypointBehavior()!.setWaypoint(new Waypoint(this, AttackSound.getInstance()));
    
this.setAnimationInterface(this.indexedButShouldBeRotationAnimationInterface);
    
}


    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
this.percentCompleteP= 100;
    
this.initVisibility(rtsPlayerLayerInterface);
    
}


    public paint(graphics: Graphics){
var graphics = graphics

                        if(this.isVisible())
                        
                                    {
                                    super.paint(graphics);
    

                                    }
                                
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

        try {
            this.indexedButShouldBeRotationAnimationInterface!.nextFrame();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "processTick", e);
    
}

}


    public damage(damage: number, damageType: number){
var damage = damage
var damageType = damageType
}


                //@Throws(Error::class)
            
    public getDamage(damageType: number): number{
var damageType = damageType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Error::class)
            
    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    WaypointCellPositionHistory.getInstance()!.remove(this);
    

                                    }
                                
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getStaticType();

                        ;
    
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

