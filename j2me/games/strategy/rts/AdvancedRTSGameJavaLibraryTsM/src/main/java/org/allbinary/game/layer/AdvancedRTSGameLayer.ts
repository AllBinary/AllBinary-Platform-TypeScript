
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { NoShakeAnimationListener } from "../../../../org/allbinary/animation/transition/shake/NoShakeAnimationListener.js";

    
import { ShakeAnimationListener } from "../../../../org/allbinary/animation/transition/shake/ShakeAnimationListener.js";

    
import { ShakeAnimationListenerFactory } from "../../../../org/allbinary/animation/transition/shake/ShakeAnimationListenerFactory.js";

    
import { Direction } from "../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../org/allbinary/direction/DirectionFactory.js";

    
import { GameTypeFactory } from "../../../../org/allbinary/game/GameTypeFactory.js";

    
import { DestroyedEvent } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js";

    
import { DestroyedEventHandler } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js";

    
import { DestroyedEventListenerInterface } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js";

    
import { GameConfigurationCentral } from "../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { Health } from "../../../../org/allbinary/game/health/Health.js";

    
import { Group } from "../../../../org/allbinary/game/identification/Group.js";

    
import { GameKeyEventFactory } from "../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { RTSFormInput } from "../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { BuildingEventHandler } from "../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js";

    
import { UnitLayer } from "../../../../org/allbinary/game/layer/unit/UnitLayer.js";

    
import { Waypoint2LogHelper } from "../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js";

    
import { Waypoint2SelectedLogHelper } from "../../../../org/allbinary/game/layer/waypoint/Waypoint2SelectedLogHelper.js";

    
import { WaypointBase } from "../../../../org/allbinary/game/layer/waypoint/WaypointBase.js";

    
import { WaypointLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js";

    
import { WaypointRunnableLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js";

    
import { WaypointRunnableSelectedLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointRunnableSelectedLogHelper.js";

    
import { WaypointSelectedLogHelper } from "../../../../org/allbinary/game/layer/waypoint/WaypointSelectedLogHelper.js";

    
import { RemoteInfo } from "../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { NullTickable } from "../../../../org/allbinary/game/tick/NullTickable.js";

    
import { TickableInterface } from "../../../../org/allbinary/game/tick/TickableInterface.js";

    
import { TileLayerPositionIntoViewPosition } from "../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AngleInfo } from "../../../../org/allbinary/math/AngleInfo.js";

    
import { FrameUtil } from "../../../../org/allbinary/math/FrameUtil.js";

    
import { AllBinaryNoVibration } from "../../../../org/allbinary/media/AllBinaryNoVibration.js";

    
import { AllBinaryVibration } from "../../../../org/allbinary/media/AllBinaryVibration.js";

    
import { AllBinaryVibrationME } from "../../../../org/allbinary/media/AllBinaryVibrationME.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { GeographicMapDirectionUtil } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { ViewPosition } from "../../../../org/allbinary/view/ViewPosition.js";

    

export class AdvancedRTSGameLayer extends RTSLayer
                , DestroyedEventListenerInterface {
        

    readonly shakeListener: ShakeAnimationListener

    readonly vibration: AllBinaryVibrationME

    readonly duration: number

    private parentLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        

    waypointBehaviorBase: TickableInterface = NullTickable.getInstance()!;
        
        
public constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number)                        

                            : this(remoteInfo, parentLayer, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, new TileLayerPositionIntoViewPosition()){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var healthInterface = healthInterface
    //var rtsFormInput = rtsFormInput
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var x = x
    //var y = y


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number, viewPosition: ViewPosition)                        

                            : super(remoteInfo, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var healthInterface = healthInterface
    //var rtsFormInput = rtsFormInput
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var x = x
    //var y = y
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setVisible(false);
    
this.setWaypointBehavior(new WaypointBehaviorBase());
    
this.shakeListener= ShakeAnimationListenerFactory.getInstance();
    
this.vibration= AllBinaryVibration.getInstance();
    
this.duration= GameConfigurationCentral.getInstance()!.VIBRATION.getValue()!.toInt() *100;
    
this.setParentLayer(parentLayer);
    
}

public constructor ()                        

                            : super(RemoteInfo.REMOTE_INFO){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setWaypointBehavior(new WaypointBehaviorBase());
    
this.shakeListener= NoShakeAnimationListener.NO_SHAKE_ANIMATION_LISTENER;
    
this.vibration= AllBinaryNoVibration.NO_VIBRATION;
    
this.duration= 0;
    
this.setParentLayer(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);
    
}


                //@Throws(Error::class)
            
    public updateWaypointBehavior(geographicMapInterface: BasicGeographicMap){
    //var geographicMapInterface = geographicMapInterface
super.updateWaypointBehavior(geographicMapInterface);
    
this.getWaypointBehavior()!.getWaypoint()!.setAllBinaryGameLayerManager(this.allBinaryGameLayerManagerP);
    
}


    initVisibility(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
var rtsPlayerLayerInterface = rtsPlayerLayerInterface

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;
        
        
;
    

                        if(advancedRTSPlayerLayerInterface!.isLocalPlayer() || advancedRTSPlayerLayerInterface!.getGameType() == GameTypeFactory.getInstance()!.BOT)
                        
                                    {
                                    this.setVisible(true);
    

                                    }
                                
                        else {
                            this.setVisible(false);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
super.construct(rtsPlayerLayerInterface);
    
this.initVisibility(rtsPlayerLayerInterface);
    
BuildingEventHandler.getInstance()!.addListener(this.getWaypointBehavior()!.getWaypoint());
    
}


                //@Throws(Error::class)
            
    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    BuildingEventHandler.getInstance()!.removeListener(this.getWaypointBehavior()!.getWaypoint());
    
BuildingEventHandler.getInstance()!.removeListener(this);
    
DestroyedEventHandler.getInstance()!.addListener(this);
    
RTSLayerUtil.getInstance()!.destroyAndClear(this.getWaypointBehavior()!.getOwnedWaypointList());
    

                                    }
                                
}


    public getParentLayer(): PathFindingLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return parentLayer;
    
}


    public setParentLayer(parentLayer: PathFindingLayerInterface){
var parentLayer = parentLayer
this.parentLayer= parentLayer;
    
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointBehaviorBase as WaypointBehaviorBase;
    
}


    setWaypointBehavior(unitWaypointHelper: WaypointBehaviorBase){
var unitWaypointHelper = unitWaypointHelper
this.waypointBehaviorBase= unitWaypointHelper;
    
}


    public getWaypointLogHelper(): WaypointLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointLogHelperP;
    
}


    public getWaypoint2LogHelper(): Waypoint2LogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypoint2LogHelperP;
    
}


    public getWaypointRunnableLogHelper(): WaypointRunnableLogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointRunnableLogHelperP;
    
}


    public shouldAddWaypointFromBuilding(): boolean{

                        if(this.parentLayer != NullPathFindingLayer.NULL_PATH_FINDING_LAYER)
                        
                                    {
                                    
    var parentAdvancedRTSGameLayer: AdvancedRTSGameLayer = this.parentLayer as AdvancedRTSGameLayer;
        
        
;
    

                        if(parentAdvancedRTSGameLayer!.getType() != UnitLayer.getStaticType())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{

                        if(this.getType() != UnitLayer.getStaticType())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{
    //var allbinaryLayer = allbinaryLayer
    //var cellPosition = cellPosition

    var geographicMapCellPosition: GeographicMapCellPosition = this.getCurrentGeographicMapCellPosition()!;
        
        
;
    

    var buildingDirection: Direction = GeographicMapDirectionUtil.getInstance()!.getDirectionFromCellPositionToAdjacentCellPosition(geographicMapCellPosition, cellPosition)!;
        
        
;
    

    var angleInfo: AngleInfo = this.getRotationAnimationInterface()!.getAngleInfoP()!;
        
        
;
    

    var angle: number = FrameUtil.getInstance()!.adjustAngleToFrameAngle(angleInfo!.getAngle() +90)!;
        
        
;
    

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        
;
    

                        if(buildingDirection == DirectionFactory.getInstance()!.UP)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingAbove(this);
    

                        if(angle > 180 && angle < 360)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingChaseLeft(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.LEFT));
    

                        if(angle <= 190)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseRight(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.RIGHT));
    

                        if(angle >= 170)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(buildingDirection == DirectionFactory.getInstance()!.DOWN)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingDown(this);
    

                        if(angle > 180 && angle < 360)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingChaseLeft(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.RIGHT));
    

                        if(angle > 315)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseRight(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.LEFT));
    

                        if(angle < 45)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(buildingDirection == DirectionFactory.getInstance()!.LEFT)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingLeft();
    

                        if(angle > 90 && angle < 270)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingChaseDown(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.LEFT));
    

                        if(angle < 135)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseUp(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.RIGHT));
    

                        if(angle > 45)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(buildingDirection == DirectionFactory.getInstance()!.RIGHT)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingRight();
    

                        if(angle > 90 && angle < 270)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingChaseDown(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.RIGHT));
    

                        if(angle > 225)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseUp(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstance(this, Canvas.LEFT));
    

                        if(angle < 315 && angle > 180)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
this.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList();

                        ;
    
}


    setSelected(selected: boolean){
var selected = selected
super.setSelected(selected);
    

                        if(this.debug)
                        
                                    {
                                    
                        if(selected)
                        
                                    {
                                    this.waypointLogHelperP= WaypointSelectedLogHelper.getInstance();
    
this.waypoint2LogHelperP= Waypoint2SelectedLogHelper.getInstance();
    
this.waypointRunnableLogHelperP= WaypointRunnableSelectedLogHelper.getInstance();
    

                                    }
                                
                        else {
                            this.waypointLogHelperP= WaypointLogHelper.getInstance();
    
this.waypoint2LogHelperP= Waypoint2LogHelper.getInstance();
    
this.waypointRunnableLogHelperP= WaypointRunnableLogHelper.getInstance();
    

                        }
                            

                                    }
                                
}


    public onDestroyed(destroyedEvent: DestroyedEvent){
var destroyedEvent = destroyedEvent

        try {
            
    var layerInterface: AllBinaryLayer = destroyedEvent!.getLayerInterface()!;
        
        
;
    

                        if(layerInterface == this)
                        
                                    {
                                    DestroyedEventHandler.getInstance()!.removeListener(this);
    

    var waypoint: WaypointBase = this.getWaypointBehavior()!.getWaypoint();

                         as WaypointBase;
        
        
;
    
waypoint.reset();
    

                                    }
                                

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, "onDestroyed", e);
    
}

}


}
                
            

