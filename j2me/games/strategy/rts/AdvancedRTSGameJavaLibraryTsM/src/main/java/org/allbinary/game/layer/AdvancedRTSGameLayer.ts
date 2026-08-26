
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { NullIndexedAnimationFactory } from '../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
      const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
//not game specific package import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
//not game specific package import { ShakeAnimationListener } from '../../../../org/allbinary/animation/transition/shake/ShakeAnimationListener.js';
      const ShakeAnimationListener = globalThis.org.allbinary.animation.transition.shake.ShakeAnimationListener;

      
//not game specific package import { Direction } from '../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
      const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
//not game specific package import { DestroyedEvent } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
      const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;

      
//not game specific package import { DestroyedEventHandler } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
      const DestroyedEventHandler = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventHandler;

      
//not game specific package import { DestroyedEventListenerInterface } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js';
      const DestroyedEventListenerInterface = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventListenerInterface;

      
//not game specific package import { Health } from '../../../../org/allbinary/game/health/Health.js';
      const Health = globalThis.org.allbinary.game.health.Health;

      
//not game specific package import { Group } from '../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { GroupFactory } from '../../../../org/allbinary/game/identification/GroupFactory.js';
      const GroupFactory = globalThis.org.allbinary.game.identification.GroupFactory;

      
//not game specific package import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
      const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
//not game specific package import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
      const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
//not game specific package import { BuildingEventHandler } from '../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
      const BuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.BuildingEventHandler;

      
//not game specific package import { UnitLayer } from '../../../../org/allbinary/game/layer/unit/UnitLayer.js';
      const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;

      
//not game specific package import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
      const Waypoint2LogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2LogHelper;

      
//not game specific package import { Waypoint2SelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2SelectedLogHelper.js';
      const Waypoint2SelectedLogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2SelectedLogHelper;

      
//not game specific package import { WaypointBase } from '../../../../org/allbinary/game/layer/waypoint/WaypointBase.js';
      const WaypointBase = globalThis.org.allbinary.game.layer.waypoint.WaypointBase;

      
//not game specific package import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
      const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

      
//not game specific package import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
      const WaypointRunnableLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableLogHelper;

      
//not game specific package import { WaypointRunnableSelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableSelectedLogHelper.js';
      const WaypointRunnableSelectedLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableSelectedLogHelper;

      
//not game specific package import { WaypointSelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointSelectedLogHelper.js';
      const WaypointSelectedLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointSelectedLogHelper;

      
//not game specific package import { RemoteInfo } from '../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { NullTickable } from '../../../../org/allbinary/game/tick/NullTickable.js';
      const NullTickable = globalThis.org.allbinary.game.tick.NullTickable;

      
//not game specific package import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
      const TickableInterface = globalThis.org.allbinary.game.tick.TickableInterface;

      
//not game specific package import { TileLayerPositionIntoViewPosition } from '../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
      const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not game specific package import { FrameUtil } from '../../../../org/allbinary/math/FrameUtil.js';
      const FrameUtil = globalThis.org.allbinary.math.FrameUtil;

      
//not game specific package import { AllBinaryVibrationME } from '../../../../org/allbinary/media/AllBinaryVibrationME.js';
      const AllBinaryVibrationME = globalThis.org.allbinary.media.AllBinaryVibrationME;

      
//not game specific package import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not game specific package import { GeographicMapDirectionUtil } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
      const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSLayer } from './RTSLayer.js';
import { NullPathFindingLayer } from './NullPathFindingLayer.js';
import { AdvancedRTSProperties } from './AdvancedRTSProperties.js';
import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
import { AdvancedRTSPlayerLayerInterface } from './AdvancedRTSPlayerLayerInterface.js';
import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
import { RTSLayerUtil } from './RTSLayerUtil.js';

export class AdvancedRTSGameLayer extends RTSLayer implements DestroyedEventListenerInterface {
        

                //@Throws(Exception.constructor)
            
    public static createSimulated(): AdvancedRTSGameLayer{

    var nullAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance()!;;
    

    var nullIndexedAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AdvancedRTSGameLayer(RemoteInfo.REMOTE_INFO, NullPathFindingLayer.NULL_PATH_FINDING_LAYER, AdvancedRTSProperties.createPropertiesSimulated(), GroupFactory.getInstance()!.NULL_GROUP_ARRAY, StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0, new TileLayerPositionIntoViewPosition());
    
}


    readonly shakeListener: ShakeAnimationListener;

    readonly vibration: AllBinaryVibrationME;

    readonly duration: number;

    private parentLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;

    waypointBehaviorBase: TickableInterface = NullTickable.getInstance()!;

public constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, advancedRTSProperties: AdvancedRTSProperties, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number, viewPosition: ViewPositionBase){
            super(remoteInfo, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setVisible(false);
    
this.setWaypointBehavior(new WaypointBehaviorBase());
    
this.shakeListener= advancedRTSProperties!.shakeListener;
    
this.vibration= advancedRTSProperties!.vibration;
    
this.duration= advancedRTSProperties!.duration;
    
this.setParentLayer(parentLayer);
    
}


                //@Throws(Exception.constructor)
            
    public updateWaypointBehavior(geographicMapInterface: BasicGeographicMap){
super.updateWaypointBehavior(geographicMapInterface);
    
this.getWaypointBehavior()!.getWaypoint()!.setAllBinaryGameLayerManager(this.allBinaryGameLayerManagerP);
    
}


    initVisibility(rtsPlayerLayerInterface: RTSPlayerLayerInterface){

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;;
    

                        if(advancedRTSPlayerLayerInterface!.isLocalPlayer() || advancedRTSPlayerLayerInterface!.getGameType() == GameTypeFactory.getInstance()!.BOT)
                        
                                    {
                                    this.setVisible(true);
    

                                    }
                                
                        else {
                            this.setVisible(false);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
super.construct(rtsPlayerLayerInterface);
    
this.initVisibility(rtsPlayerLayerInterface);
    
BuildingEventHandler.getInstance()!.addListenerInterface(this.getWaypointBehavior()!.getWaypoint());
    
}


                //@Throws(Exception.constructor)
            
    public setDestroyed(destroyed: boolean){
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
                        return this.parentLayer;
    
}


    public setParentLayer(parentLayer: PathFindingLayerInterface){
this.parentLayer= parentLayer;
    
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.waypointBehaviorBase as WaypointBehaviorBase;
    
}


    setWaypointBehavior(unitWaypointHelper: WaypointBehaviorBase){
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
                                    
    var parentAdvancedRTSGameLayer: AdvancedRTSGameLayer = this.parentLayer as AdvancedRTSGameLayer;;
    

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


                //@Throws(Exception.constructor)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{

    var geographicMapCellPosition: GeographicMapCellPosition = this.getCurrentGeographicMapCellPosition()!;;
    

    var buildingDirection: Direction = GeographicMapDirectionUtil.getInstance()!.getDirectionFromCellPositionToAdjacentCellPosition(geographicMapCellPosition, cellPosition)!;;
    

    var angleInfo: AngleInfo = this.getRotationAnimationInterface()!.getAngleInfoP()!;;
    

    var angle: number = FrameUtil.getInstance()!.adjustAngleToFrameAngle(angleInfo!.getAngle() +90)!;;
    

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;;
    

                        if(buildingDirection == DirectionFactory.getInstance()!.UP)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingAbove(this);
    

                        if(angle > 180 && angle < 360)
                        
                                    {
                                    this.rtsLayer2LogHelper!.buildingChaseLeft(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.LEFT));
    

                        if(angle <= 190)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseRight(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.RIGHT));
    

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
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.RIGHT));
    

                        if(angle > 315)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseRight(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.LEFT));
    

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
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.LEFT));
    

                        if(angle < 135)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseUp(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.RIGHT));
    

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
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.RIGHT));
    

                        if(angle > 225)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                
                        else {
                            this.rtsLayer2LogHelper!.buildingChaseUp(this, angle);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.LEFT));
    

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


                //@Throws(Exception.constructor)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList();;
    
}


    setSelected(selected: boolean){
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

        try {
            
    var layerInterface: AllBinaryLayer = destroyedEvent!.getLayerInterface()!;;
    

                        if(layerInterface == this)
                        
                                    {
                                    DestroyedEventHandler.getInstance()!.removeListener(this);
    

    var waypoint: WaypointBase = this.getWaypointBehavior()!.getWaypoint() as WaypointBase;;
    
waypoint.reset();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onDestroyed", e);
    
}

}


}
                
            

