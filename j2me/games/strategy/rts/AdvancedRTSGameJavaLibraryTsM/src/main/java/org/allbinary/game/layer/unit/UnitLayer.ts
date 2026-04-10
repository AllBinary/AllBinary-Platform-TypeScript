
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { IndexedAnimation } from "../../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { NullIndexedAnimationFactory } from "../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js";

    
import { NullRotationAnimationFactory } from "../../../../../org/allbinary/animation/NullRotationAnimationFactory.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { RotationAnimation } from "../../../../../org/allbinary/animation/RotationAnimation.js";

    
import { CaptionAnimationHelper } from "../../../../../org/allbinary/animation/caption/CaptionAnimationHelper.js";

    
import { CaptionAnimationHelperBase } from "../../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js";

    
import { AdjustedCircleAnimation } from "../../../../../org/allbinary/animation/vector/AdjustedCircleAnimation.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DamageFloaters } from "../../../../../org/allbinary/game/combat/damage/DamageFloaters.js";

    
import { PtsDamageFloaters } from "../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js";

    
import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { BasicHudFactory } from "../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { Health } from "../../../../../org/allbinary/game/health/Health.js";

    
import { HealthBar } from "../../../../../org/allbinary/game/health/HealthBar.js";

    
import { HealthBarTwodAnimation } from "../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { GameKeyEventUtil } from "../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js";

    
import { VisibleCellPositionsSingleton } from "../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js";

    
import { WaypointRTSFormInput } from "../../../../../org/allbinary/game/input/form/WaypointRTSFormInput.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { CaptionResources } from "../../../../../org/allbinary/game/layer/CaptionResources.js";

    
import { LinePathRelativeAnimation } from "../../../../../org/allbinary/game/layer/LinePathRelativeAnimation.js";

    
import { PathAnimation } from "../../../../../org/allbinary/game/layer/PathAnimation.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { RTSLayer2LogHelper } from "../../../../../org/allbinary/game/layer/RTSLayer2LogHelper.js";

    
import { RTSLayer2SelectedLogHelper } from "../../../../../org/allbinary/game/layer/RTSLayer2SelectedLogHelper.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { RTSLayerHudPaintable } from "../../../../../org/allbinary/game/layer/RTSLayerHudPaintable.js";

    
import { RTSLayerLogHelper } from "../../../../../org/allbinary/game/layer/RTSLayerLogHelper.js";

    
import { RTSLayerSelectedLogHelper } from "../../../../../org/allbinary/game/layer/RTSLayerSelectedLogHelper.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { SelectionHudPaintable } from "../../../../../org/allbinary/game/layer/SelectionHudPaintable.js";

    
import { SensorActionFactory } from "../../../../../org/allbinary/game/layer/SensorActionFactory.js";

    
import { SteeringVisitor } from "../../../../../org/allbinary/game/layer/SteeringVisitor.js";

    
import { TiledLayerUtil } from "../../../../../org/allbinary/game/layer/TiledLayerUtil.js";

    
import { VehicleFrictionProperties } from "../../../../../org/allbinary/game/layer/VehicleFrictionProperties.js";

    
import { VehicleProperties } from "../../../../../org/allbinary/game/layer/VehicleProperties.js";

    
import { WaypointBehaviorBase } from "../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js";

    
import { BuildingLayer } from "../../../../../org/allbinary/game/layer/building/BuildingLayer.js";

    
import { BuildingEventHandler } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js";

    
import { BuildingEventListenerInterface } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js";

    
import { CapitalEvent } from "../../../../../org/allbinary/game/layer/capital/event/CapitalEvent.js";

    
import { CapitalEventHandlerFactory } from "../../../../../org/allbinary/game/layer/capital/event/CapitalEventHandlerFactory.js";

    
import { LayerPartialCellPositionsUtil } from "../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js";

    
import { SpecialDownGameInputProcessor } from "../../../../../org/allbinary/game/layer/special/SpecialDownGameInputProcessor.js";

    
import { SpecialFireGameInputProcessor } from "../../../../../org/allbinary/game/layer/special/SpecialFireGameInputProcessor.js";

    
import { SpecialLeftGameInputProcessor } from "../../../../../org/allbinary/game/layer/special/SpecialLeftGameInputProcessor.js";

    
import { SpecialRightGameInputProcessor } from "../../../../../org/allbinary/game/layer/special/SpecialRightGameInputProcessor.js";

    
import { SpecialUpGameInputProcessor } from "../../../../../org/allbinary/game/layer/special/SpecialUpGameInputProcessor.js";

    
import { MultipassNoCacheWaypoint } from "../../../../../org/allbinary/game/layer/waypoint/MultipassNoCacheWaypoint.js";

    
import { NoCacheWaypoint } from "../../../../../org/allbinary/game/layer/waypoint/NoCacheWaypoint.js";

    
import { WaypointBase } from "../../../../../org/allbinary/game/layer/waypoint/WaypointBase.js";

    
import { WaypointEventHandlerFactory } from "../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { BasicWeaponPart } from "../../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js";

    
import { SalvoInterface } from "../../../../../org/allbinary/game/part/weapon/SalvoInterface.js";

    
import { VelocityProperties } from "../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { TrackingEventHandler } from "../../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { TrackingEventListenerInterface } from "../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js";

    
import { TileLayerPositionIntoViewPosition } from "../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js";

    
import { CellPositionFactory } from "../../../../../org/allbinary/graphics/CellPositionFactory.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { Layer } from "../../../../../org/allbinary/layer/Layer.js";

    
import { LayerInterfaceFactoryInterface } from "../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    
import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { AngleFactory } from "../../../../../org/allbinary/math/AngleFactory.js";

    
import { AngleInfo } from "../../../../../org/allbinary/math/AngleInfo.js";

    
import { FrameUtil } from "../../../../../org/allbinary/math/FrameUtil.js";

    
import { LayerDistanceUtil } from "../../../../../org/allbinary/math/LayerDistanceUtil.js";

    
import { NamedAngle } from "../../../../../org/allbinary/math/NamedAngle.js";

    
import { AttackSound } from "../../../../../org/allbinary/media/audio/AttackSound.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellHistory } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    
import { RaceTrackGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js";

    
import { CommonPhoneStrings } from "../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    
import { ExplosionBasicSound } from "../../../../../org/allbinary/weapon/media/audio/ExplosionBasicSound.js";

    

export class UnitLayer extends AdvancedRTSGameLayer
                , BuildingEventListenerInterface
                , TrackingEventListenerInterface {
        

    private static readonly partialPositionList: BasicArrayList = new BasicArrayList(4);
        
        

    private static readonly SENSOR_RANGE_MULTIPLIER: number = 6;
        
        

    private static readonly MOVE: string = "Moving";
        
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


    public static getPartialpositionlist(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return partialPositionList;
    
}


    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    private readonly layerPartialCellPositionsUtil: LayerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance()!;
        
        

    private readonly layerDistanceUtil: LayerDistanceUtil = LayerDistanceUtil.getInstance()!;
        
        

    private readonly angleFactory: AngleFactory = AngleFactory.getInstance()!;
        
        

    private readonly cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;
        
        

    private readonly maxResourceLoad: number

    private readonly vehicleProperties: VehicleProperties

    accelerationBasicDecimal: BasicDecimal = new BasicDecimal(1600);
        
        

    decelerationBasicDecimal: BasicDecimal = new BasicDecimal( -1000);
        
        

    private readonly trackingEvent: TrackingEvent

    private readonly damageFloaters: DamageFloaters

    private readonly damageFloatersPaintableInterface: Paintable

    private readonly healthBar: Paintable

    private readonly moveSoundInterface: Sound

    private readonly initResourceAnimation: RotationAnimation

    private resourceAnimation: IndexedAnimation = NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation;
        
        

    private readonly initPathAnimation: PathAnimation

    private pathAnimation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        

    private readonly captionAnimationHelper: CaptionAnimationHelperBase = new CaptionAnimationHelper(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(CaptionResources.getInstance()!.RESOURCE)!.getInstance(0),  -23,  -25, 6, 0);
        
        

    private readonly decalAnimation: RotationAnimation

    private readonly waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface

    private resourceLoad: number = 0;
        
        

    private weaponRange: number= 0

    rtsLogHelper: RTSLayerLogHelper = RTSLayerLogHelper.getInstance()!;
        
        

    rotationAnimationInterfaceP: RotationAnimation

    private movementAngle: NamedAngle = this.angleFactory!.NOT_ANGLE;
        
        

    private steeringInsideGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        
protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, vehicleProperties: VehicleProperties, healthInterface: Health, maxLoad: Integer, moveSoundInterface: Sound, waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, direction: Direction, x: number, y: number, z: number)                        

                            : this(remoteInfo, parentLayer, groupInterface, rootName, name, vehicleProperties, healthInterface, maxLoad, moveSoundInterface, waypointLayerInterfaceFactoryInterface, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, direction, x, y, z, TileLayerPositionIntoViewPosition()){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var vehicleProperties = vehicleProperties
    //var healthInterface = healthInterface
    //var maxLoad = maxLoad
    //var moveSoundInterface = moveSoundInterface
    //var waypointLayerInterfaceFactoryInterface = waypointLayerInterfaceFactoryInterface
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var decalAnimationInterfaceFactoryInterface = decalAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var direction = direction
    //var x = x
    //var y = y
    //var z = z


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, vehicleProperties: VehicleProperties, healthInterface: Health, maxLoad: Integer, moveSoundInterface: Sound, waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, direction: Direction, x: number, y: number, z: number, viewPosition: ViewPosition)                        

                            : this(remoteInfo, parentLayer, groupInterface, rootName, name, vehicleProperties, healthInterface, maxLoad, moveSoundInterface, waypointLayerInterfaceFactoryInterface, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface, NullRotationAnimationFactory.getFactoryInstance(), proceduralAnimationInterfaceFactoryInterface, rectangle, direction, x, y, z, viewPosition){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var vehicleProperties = vehicleProperties
    //var healthInterface = healthInterface
    //var maxLoad = maxLoad
    //var moveSoundInterface = moveSoundInterface
    //var waypointLayerInterfaceFactoryInterface = waypointLayerInterfaceFactoryInterface
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var decalAnimationInterfaceFactoryInterface = decalAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var direction = direction
    //var x = x
    //var y = y
    //var z = z
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, vehicleProperties: VehicleProperties, healthInterface: Health, maxLoad: Integer, moveSoundInterface: Sound, waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, resourceAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, direction: Direction, x: number, y: number, z: number)                        

                            : this(remoteInfo, parentLayer, groupInterface, rootName, name, vehicleProperties, healthInterface, maxLoad, moveSoundInterface, waypointLayerInterfaceFactoryInterface, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface, resourceAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, direction, x, y, z, TileLayerPositionIntoViewPosition()){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var vehicleProperties = vehicleProperties
    //var healthInterface = healthInterface
    //var maxLoad = maxLoad
    //var moveSoundInterface = moveSoundInterface
    //var waypointLayerInterfaceFactoryInterface = waypointLayerInterfaceFactoryInterface
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var decalAnimationInterfaceFactoryInterface = decalAnimationInterfaceFactoryInterface
    //var resourceAnimationInterfaceFactoryInterface = resourceAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var direction = direction
    //var x = x
    //var y = y
    //var z = z


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, groupInterface: Group[], rootName: string, name: string, vehicleProperties: VehicleProperties, healthInterface: Health, maxResourceLoad: Integer, moveSoundInterface: Sound, waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, resourceAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, direction: Direction, x: number, y: number, z: number, viewPosition: ViewPosition)                        

                            : super(remoteInfo, parentLayer, groupInterface, rootName, name, healthInterface, WaypointRTSFormInput(groupInterface, true), animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition){

            super();
                //var remoteInfo = remoteInfo
    //var parentLayer = parentLayer
    //var groupInterface = groupInterface
    //var rootName = rootName
    //var name = name
    //var vehicleProperties = vehicleProperties
    //var healthInterface = healthInterface
    //var maxResourceLoad = maxResourceLoad
    //var moveSoundInterface = moveSoundInterface
    //var waypointLayerInterfaceFactoryInterface = waypointLayerInterfaceFactoryInterface
    //var animationInterfaceFactoryInterface = animationInterfaceFactoryInterface
    //var emptyAnimationInterfaceFactoryInterface = emptyAnimationInterfaceFactoryInterface
    //var baseAnimationInterfaceFactoryInterface = baseAnimationInterfaceFactoryInterface
    //var buildAnimationInterfaceFactoryInterface = buildAnimationInterfaceFactoryInterface
    //var verticleBuildAnimationInterfaceFactoryInterface = verticleBuildAnimationInterfaceFactoryInterface
    //var decalAnimationInterfaceFactoryInterface = decalAnimationInterfaceFactoryInterface
    //var resourceAnimationInterfaceFactoryInterface = resourceAnimationInterfaceFactoryInterface
    //var proceduralAnimationInterfaceFactoryInterface = proceduralAnimationInterfaceFactoryInterface
    //var rectangle = rectangle
    //var direction = direction
    //var x = x
    //var y = y
    //var z = z
    //var viewPosition = viewPosition


                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(CollidableUnitBehavior(this, true))
this.waypointLayerInterfaceFactoryInterface= waypointLayerInterfaceFactoryInterface
this.maxResourceLoad= maxResourceLoad!.toShort()
this.moveSoundInterface= moveSoundInterface

    
                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.DAMAGE_FLOATERS))
                        
                                    {
                                    this.damageFloaters= PtsDamageFloaters(this)
this.damageFloatersPaintableInterface= this.damageFloaters

                                    }
                                
                        else {
                            this.damageFloatersPaintableInterface= NullPaintable.getInstance()
this.damageFloaters= DamageFloaters()

                        }
                            

    
                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.HEALTH_BARS))
                        
                                    {
                                    this.healthBar= HealthBar(this, this.getHealthInterface(), HealthBarTwodAnimation(this as AllBinaryLayer, BasicHudFactory.getInstance()!.BOTTOMLEFT),  -1)

                                    }
                                
                        else {
                            this.healthBar= NullPaintable.getInstance()

                        }
                            
this.decalAnimation= decalAnimationInterfaceFactoryInterface!.getInstance(0) as RotationAnimation
this.initResourceAnimation= resourceAnimationInterfaceFactoryInterface!.getInstance(0) as RotationAnimation
setFrame(direction)
setFrame(direction)
this.rotationAnimationInterfaceP= this.indexedButShouldBeRotationAnimationInterface as RotationAnimation
setFrame(direction)
this.setMaxLevel(12)
this.vehicleProperties= vehicleProperties
this.trackingEvent= TrackingEvent(this)
this.initPathAnimation= PathAnimation(this, LinePathRelativeAnimation.getInstance())
}


                @Throws(Exception::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
setAllBinaryGameLayerManager(allBinaryGameLayerManager)
setAllBinaryGameLayerManager(allBinaryGameLayerManager)
}


                @Throws(Exception::class)
            
    public updateWaypointBehavior(geographicMapInterface: BasicGeographicMap){
    //var geographicMapInterface = geographicMapInterface

    var hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

put(Group.ID, this.getGroupInterface())
put(Layer.ID, this)
put(AllBinaryGameLayerManager.ID, allBinaryGameLayerManagerP)
this.setWaypointBehavior(UnitWaypointBehavior2(this, waypointLayerInterfaceFactoryInterface!.getInstance(hashtable, x, y, z) as AdvancedRTSGameLayer))

    var features: Features = Features.getInstance()!;
        
        


    var waypoint: WaypointBase = J2MEUtil.isHTML()
                        ?       
                                MultipassNoCacheWaypoint(this, AttackSound.getInstance())
                                :

                            NoCacheWaypoint(this, AttackSound.getInstance());

    ;
        
        

setWaypoint(waypoint)
updateWaypointBehavior(geographicMapInterface)
this.initRangeHack()
}


                @Throws(Exception::class)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
construct(rtsPlayerLayerInterface)
addListener(this)
addListener(this.getUnitWaypointBehavior())
addListener(this)
setCurrentPathGeographicMapCellPosition(this.getCurrentGeographicMapCellPosition())
this.updateSensorGeographicMapCellPositionList()
setLastPathGeographicMapCellPosition(this.getUnitWaypointBehavior()!.getCurrentPathGeographicMapCellPosition())
}


    private readonly sensorGeographicMapCellPositionList: BasicArrayList = new BasicArrayList();
        
        

                @Throws(Exception::class)
            
    public updateSensorGeographicMapCellPositionList(){

    
                        if(VisibleCellPositionsSingleton.getInstance()!.shouldProcess())
                        
                                    {
                                    
    var currentGeographicMapCellPosition: GeographicMapCellPosition = this.getCurrentGeographicMapCellPosition()!;
        
        

clear()
add(currentGeographicMapCellPosition)

    var sensorRange: number = weaponRange *SENSOR_RANGE_MULTIPLIER;
        
        


    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var totalCells: number = (sensorRange /tiledLayer!.getCellHeight()) /2;
        
        


    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        


    var column: number = currentGeographicMapCellPosition!.getColumn()!;
        
        


    var row: number = currentGeographicMapCellPosition!.getRow()!;
        
        


    var lastColumn: number = column +totalCells;
        
        


    var lastRow: number = row +totalCells;
        
        


    
                        if(lastColumn > tiledLayer!.getColumns())
                        
                                    {
                                    lastColumn= tiledLayer!.getColumns()

                                    }
                                

    
                        if(lastRow > tiledLayer!.getRows())
                        
                                    {
                                    lastRow= tiledLayer!.getRows()

                                    }
                                

    var firstColumn: number = column -totalCells;
        
        


    var firstRow: number = row -totalCells;
        
        


    
                        if(firstColumn < 0)
                        
                                    {
                                    firstColumn= 0

                                    }
                                

    
                        if(firstRow < 0)
                        
                                    {
                                    firstRow= 0

                                    }
                                




                        for (
    var index: number = lastColumn -1;
        
        
index >= firstColumn; index--)
        {




                        for (
    var index2: number = lastRow -1;
        
        
index2 >= firstRow; index2--)
        {

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getInstance(index, index2)!;
        
        


    
                        if(!this.sensorGeographicMapCellPositionList!.contains(geographicMapCellPosition))
                        
                                    {
                                    add(geographicMapCellPosition)

                                    }
                                
}

}


                                    }
                                
}


    public getSensorGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sensorGeographicMapCellPositionList;
    
}


    public select(){
this.pathAnimation= this.initPathAnimation
select()
}


    public deselect(){
this.pathAnimation= NullAnimationFactory.getFactoryInstance()!.getInstance(0)
deselect()
}


    setSelected(selected: boolean){
var selected = selected
setSelected(selected)

    
                        if(selected)
                        
                                    {
                                    
    
                        if(this.debug)
                        
                                    {
                                    this.rtsLogHelper= RTSLayerSelectedLogHelper.getInstance()

                                    }
                                
this.rtsLayer2LogHelper= RTSLayer2SelectedLogHelper.getInstance()

                                    }
                                
                        else {
                            
    
                        if(this.debug)
                        
                                    {
                                    this.rtsLogHelper= RTSLayerLogHelper.getInstance()

                                    }
                                
this.rtsLayer2LogHelper= RTSLayer2LogHelper.getInstance()

                        }
                            
}


                @Throws(Exception::class)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){
    //var pathsList = pathsList
setClosestGeographicMapCellHistory(this, pathsList)

    var closestIndex: number =  -1;
        
        


    var shortestDistance: number = Integer.MAX_VALUE;
        
        


    var currentDistance: number = Integer.MAX_VALUE;
        
        





                        for (
    var index: number = pathsList!.size() -1;
        
        
index >= 0; index--)
        {

    var geographicMapCellPositionBasicArrayList: BasicArrayList = pathsList!.get(index) as BasicArrayList;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionBasicArrayList!.get(geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition;
        
        

currentDistance= layerDistanceUtil!.getDistance(this, geographicMapCellPosition!.getMidPoint())

    
                        if(currentDistance < shortestDistance)
                        
                                    {
                                    shortestDistance= currentDistance
closestIndex= index

                                    }
                                
}


    
                        if(closestIndex >= 0)
                        
                                    {
                                    
    var geographicMapCellPositionBasicArrayList: BasicArrayList = pathsList!.get(closestIndex) as BasicArrayList;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionBasicArrayList!.get(0) as GeographicMapCellPosition;
        
        

this.teleportTo(geographicMapCellPosition)

                                    }
                                
}


                @Throws(Exception::class)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){
    //var geographicMapCellHistory = geographicMapCellHistory
    //var geographicMapCellPositionBasicArrayList = geographicMapCellPositionBasicArrayList
track(geographicMapCellPositionBasicArrayList)
}


    public onMovement(trackingEvent: TrackingEvent){
    //var trackingEvent = trackingEvent

        try {
            
    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface() as AdvancedRTSGameLayer;
        
        


    
                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    add(layerInterface)
onMovementFound(this.getTrackingEvent())

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "onMovement", e)
}

}


                @Throws(Exception::class)
            
    public onMovementFound(trackingEvent: TrackingEvent){
    //var trackingEvent = trackingEvent

    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface() as AdvancedRTSGameLayer;
        
        


    
                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    add(layerInterface)

                                    }
                                
}


    public initRangeHack(){

    var basicWeaponPart: BasicWeaponPart = this.getPartInterfaceArray()[0]! as BasicWeaponPart;
        
        


    var weaponProperties: WeaponProperties = basicWeaponPart!.getWeaponProperties()!;
        
        

this.weaponRange= weaponProperties!.getRange()
this.initRangeAnimation= AdjustedCircleAnimation(weaponRange, weaponRange, this.getWidth(), this.basicColorFactory!.GREEN)

    var sensorRange: number = weaponRange *SENSOR_RANGE_MULTIPLIER;
        
        

this.initSensorRangeAnimation= AdjustedCircleAnimation(sensorRange, sensorRange, this.getWidth(), this.basicColorFactory!.RED)
initRange(weaponRange)
this.fireTimeHelper!.delay= (weaponProperties!.getReloadTime().toInt())
}


                @Throws(Exception::class)
            
    public processBuiltTick(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager

    
                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    
    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var currentFrame: number = this.destroyAnimationInterface!.getFrame()!;
        
        


    var size: number = this.destroyAnimationInterface!.getSize() -1;
        
        


    
                        if(currentFrame == size)
                        
                                    {
                                    
    
                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    this.setDestroyed(true)

                                    }
                                

                                    }
                                
                        else {
                            nextFrame()

                        }
                            

                                    }
                                
                        else {
                            this.setAnimationInterface(this.destroyAnimationInterface)
add(ExplosionBasicSound.getInstance())
onSmallShakeEvent()
vibrate(duration, 0, 0)
this.setReadyForExplosion(true)

                        }
                            

                                    }
                                
                        else {
                            processBuiltTick(allBinaryLayerManager)

                        }
                            
tick()
processTick(allBinaryLayerManager)
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){
    //var geographicMapCellPosition = geographicMapCellPosition

    var point: GPoint = geographicMapCellPosition!.getMidPoint()!;
        
        

this.setPosition(point.getX() -this.getHalfWidth(), point.getY() -this.getHalfHeight(), this.z)
}


                @Throws(Exception::class)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAt(this.x +this.getHalfWidth(), this.y +this.getHalfHeight())!;
        
        


    var raceTrackGeographicMap: RaceTrackGeographicMap = geographicMapInterface as RaceTrackGeographicMap;
        
        


    
                        if(!raceTrackGeographicMap!.isValid(geographicMapCellPosition))
                        
                                    {
                                    


                            throw Exception("Position is not really on the map: " +geographicMapCellPosition)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


                @Throws(Exception::class)
            
    public fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
    //var layerManager = layerManager
    //var gameKeyEvent = gameKeyEvent

    
                        if(this.fireTimeHelper!.isTime())
                        
                                    {
                                    this.fireAll(layerManager)

                                    }
                                
                        else {
                            this.reload()

                        }
                            
}


                @Throws(Exception::class)
            
    public left(){
previousRotation()
previousRotation()
previousRotation()
}


                @Throws(Exception::class)
            
    public right(){
nextRotation()
nextRotation()
nextRotation()
}


    public down(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;
        
        


    
                        if(!velocityProperties!.isOverXYMaxForwardVelocity())
                        
                                    {
                                    this.accelerate(this.decelerationBasicDecimal)

                                    }
                                
}


    public up(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;
        
        


    
                        if(!velocityProperties!.isOverXYMaxForwardVelocity())
                        
                                    {
                                    this.accelerate(this.accelerationBasicDecimal)

                                    }
                                
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.RIGHT]= SpecialRightGameInputProcessor(this)
this.inputProcessorArray[Canvas.LEFT]= SpecialLeftGameInputProcessor(this)
this.inputProcessorArray[Canvas.KEY_NUM0]= SpecialFireGameInputProcessor(this)
this.inputProcessorArray[Canvas.KEY_POUND]= this.inputProcessorArray[Canvas.KEY_NUM0]!
this.inputProcessorArray[Canvas.DOWN]= SpecialDownGameInputProcessor(this)
this.inputProcessorArray[Canvas.UP]= SpecialUpGameInputProcessor(this)
initInputProcessors()
}


                @Throws(Exception::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager

    var list: BasicArrayList = this.getGameKeyEventList()!;
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = {} = list.get(index)!;
        
        


    var key: number = GameKeyEventUtil.getKey(anyType)!;
        
        

process(layerManager, GameKeyEvent.NONE)
}

clear()
this.groundFriction()
this.move()
}


    public accelerate(accelerate: BasicDecimal){
    //var accelerate = accelerate
addVelocity(accelerate.getUnscaled(), this.rotationAnimationInterfaceP!.getAngleInfoP()!.getAngle().toInt(), 90)
}


                @Throws(Exception::class)
            
    fireAll(layerManager: AllBinaryLayerManager){
    //var layerManager = layerManager

    var angleInfo: AngleInfo = this.rotationAnimationInterfaceP!.getAngleInfoP()!;
        
        


    var angle: number = (angleInfo!.getAngle() +this.slightAngle).toInt();
        
        

put(SmallIntegerSingletonFactory.getInstance()!.getInstance(1), SmallIntegerSingletonFactory.getInstance()!.getInstance(AngleFactory.getInstance()!.getInstance(angle)!.getValue().toInt()))

    var salvoInterface: SalvoInterface = this.getPartInterfaceArray()[0]! as SalvoInterface;
        
        

process(layerManager, angle.toShort(), 90.toShort())
}


    public downgrade(){

    
                        if(getLevel() > 1)
                        
                                    {
                                    downgrade()

                                    }
                                
}


    public upgrade(){
upgrade()
this.initRangeHack()
}


    groundFriction(){

    var vehicleFrictionProperties: VehicleFrictionProperties = this.getVehicleProperties()!.getVehicleFrictionProperties()!;
        
        

friction(this.getVehicleProperties()!.getVelocityProperties(), vehicleFrictionProperties!.getTireFrictionNominator())
}


                @Throws(Exception::class)
            
    public trackTo(reason: string){
    //var reason = reason

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;
        
        


    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;
        
        


    var point: GPoint = nextUnvisitedPathGeographicMapCellPosition!.getMidPoint()!;
        
        


    var dx: number = (this.getXP() +this.getHalfWidth()) -point.getX();
        
        


    var dy: number = (this.getYP() +this.getHalfHeight()) -point.getY();
        
        

trackTo(this, nextUnvisitedPathGeographicMapCellPosition, dx, dy, reason)
this.trackTo(dx, dy)
}


                @Throws(Exception::class)
            
    public trackTo(dx: number, dy: number){
    //var dx = dx
    //var dy = dy

    var angleOfTarget: number = 0;
        
        

this.trackTo(dx, dy, angleOfTarget)
}


                @Throws(Exception::class)
            
    turnTo(dx: number, dy: number, targetAngle: number): boolean{
    //var dx = dx
    //var dy = dy
var targetAngle = targetAngle

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;
        
        


    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;
        
        


    var evading: boolean = false;
        
        


    
                        if(this.getUnitWaypointBehavior()!.getSensorAction() == SensorActionFactory.getInstance()!.EVADE)
                        
                                    {
                                    evade(this)
evading= true
targetAngle += 180

                                    }
                                

    var angleInfo: AngleInfo = this.rotationAnimationInterfaceP!.getAngleInfoP()!;
        
        


    var angle: number = FrameUtil.getInstance()!.adjustAngleToFrameAngle(angleInfo!.getAngle() -270)!;
        
        

turnTo(this, dx, dy, angleInfo, angle, movementAngle, evading, targetAngle)

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        


    
                        if(dx == 0 && dy == 0)
                        
                                    {
                                    doneMoving(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
    
                        if((this.movementAngle!.getValue().toInt()) == angle)
                        
                                    {
                                    
    
                        if(dx > 0 && this.movementAngle == this.angleFactory!.LEFT)
                        
                                    {
                                    movingLeft(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    
                        if(dx < 0 && this.movementAngle == this.angleFactory!.RIGHT)
                        
                                    {
                                    movingRight(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    
                        if(dy > 0 && this.movementAngle == this.angleFactory!.UP)
                        
                                    {
                                    movingUp(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    
                        if(dy < 0 && this.movementAngle == this.angleFactory!.DOWN)
                        
                                    {
                                    movingDown(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
currentMoveEnded(this)

    
                        if(this.movementAngle == this.angleFactory!.LEFT || this.movementAngle == this.angleFactory!.RIGHT)
                        
                                    {
                                    this.handleDeltalY(dx, dy)

                                    }
                                
                             else 
    
                        if(this.movementAngle == this.angleFactory!.UP || this.movementAngle == this.angleFactory!.DOWN)
                        
                                    {
                                    this.handleDeltalX(dx, dy)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
    
                        if(nextUnvisitedPathGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    
                        if(this.steeringInsideGeographicMapCellPosition != nextUnvisitedPathGeographicMapCellPosition)
                        
                                    {
                                    
    
                        if(Math.abs(dx) > Math.abs(dy) && dy != 0)
                        
                                    {
                                    this.handleDeltalY(dx, dy)

                                    }
                                
                             else 
    
                        if(dx != 0)
                        
                                    {
                                    this.handleDeltalX(dx, dy)

                                    }
                                
                        else {
                            this.handleDeltalY(dx, dy)

                        }
                            

                                    }
                                

    var deltaAngle2: number = this.movementAngle!.getValue() -angle;
        
        


    
                        if(deltaAngle2 > 0)
                        
                                    {
                                    rotateRight(this)
add(gameKeyEventFactory!.getInstance(this, Canvas.RIGHT))

                                    }
                                
                        else {
                            rotateLeft(this)
add(gameKeyEventFactory!.getInstance(this, Canvas.LEFT))

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            noRotation(this)

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    handleDeltalX(dx: number, dy: number){
    //var dx = dx
    //var dy = dy

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;
        
        


    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;
        
        


    
                        if(dx > 0)
                        
                                    {
                                    this.movementAngle= this.angleFactory!.LEFT
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition

                                    }
                                
                        else {
                            this.movementAngle= this.angleFactory!.RIGHT
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition

                        }
                            
handle(this, this.movementAngle)
}


    handleDeltalY(dx: number, dy: number){
    //var dx = dx
    //var dy = dy

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;
        
        


    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;
        
        


    
                        if(dy > 0)
                        
                                    {
                                    this.movementAngle= this.angleFactory!.UP
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition

                                    }
                                
                        else {
                            this.movementAngle= this.angleFactory!.DOWN
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition

                        }
                            
handle(this, this.movementAngle)
}


                @Throws(Exception::class)
            
    trackTo(dx: number, dy: number, targetAngle: number){
    //var dx = dx
    //var dy = dy
    //var targetAngle = targetAngle

    var list: BasicArrayList = this.getUnitWaypointBehavior()!.getSteeringVisitorList()!;
        
        


    
                        if(list.size() > 0)
                        
                                    {
                                    



                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var steeringVisitor: SteeringVisitor = list.get(index) as SteeringVisitor;
        
        


    var anyType: any = {} = steeringVisitor!.visit(NullUtil.getInstance()!.NULL_OBJECT)!;
        
        


    
                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    remove(index)

                                    }
                                
}

this.fireOrMove()

                                    }
                                
                             else 
    
                        if(!this.turnTo(dx, dy, targetAngle))
                        
                                    {
                                    this.fireOrMove()

                                    }
                                
}


                @Throws(Exception::class)
            
    fireOrMove(){

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        


    
                        if(this.getUnitWaypointBehavior()!.needToMove())
                        
                                    {
                                    steeringUp(this)

    
                        if(this.showMoreCaptionStates && !this.captionAnimationHelper!.isShowing())
                        
                                    {
                                    update(MOVE, this.basicColorFactory!.GREEN)

                                    }
                                
add(gameKeyEventFactory!.getInstance(this, Canvas.UP))

                                    }
                                
                        else {
                            update(CommonPhoneStrings.getInstance()!.FIRE, this.basicColorFactory!.RED)
steeringFireOrStop(this)
this.allStop()
add(gameKeyEventFactory!.getInstance(this, Canvas.KEY_NUM0))
fireEvent(this.getTrackingEvent())

                        }
                            
}


    public move(){

        try {
            
    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;
        
        


    var velocityXScaled: number = velocityProperties!.getVelocityXBasicDecimalP()!.getScaled().toLong();
        
        


    var velocityYScaled: number = velocityProperties!.getVelocityYBasicDecimalP()!.getScaled().toLong();
        
        

move()

    
                        if(velocityXScaled != 0L || velocityYScaled != 0L)
                        
                                    {
                                    setMoving(true)

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

getAll(geographicMapInterface, this, velocityXScaled.toInt(), velocityYScaled.toInt(), getPartialpositionlist())

    var cellPosition: GeographicMapCellPosition = DropCellPositionHistory.getInstance()!.getCellPositionWithDrop(getPartialpositionlist()) as GeographicMapCellPosition;
        
        


    
                        if(cellPosition == cellPositionFactory!.NONE)
                        
                                    {
                                    
    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        


    var tiledLayerUtil: TiledLayerUtil = TiledLayerUtil.getInstance()!;
        
        


    var x: number = this.x +velocityXScaled.toInt();
        
        


    var y: number = this.y +velocityYScaled.toInt();
        
        

x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, this.getWidth())
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, this.getHeight())
this.setPosition(x, y, this.z)

                                    }
                                
                        else {
                            
    var allbinaryLayer: AllBinaryLayer = DropCellPositionHistory.getInstance()!.getLayerInterface(cellPosition)!;
        
        

setMovingFromStopped(false)
addBuildingChase(allbinaryLayer, cellPosition)

                        }
                            

                                    }
                                

    
                        if(this.getUnitWaypointBehavior()!.isMoving())
                        
                                    {
                                    fireEvent(this.getTrackingEvent())

                                    }
                                
                        else {
                            setMovingFromStopped(false)

                        }
                            

    
                        if(this.getUnitWaypointBehavior()!.isMovingFromStopped() && this.isVisible())
                        
                                    {
                                    add(this.moveSoundInterface)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "move", e)
}

}


    public allStop(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;
        
        

set(0)
set(0)
}


    public paint(graphics: Graphics){
var graphics = graphics

    
                        if(this.isVisible())
                        
                                    {
                                    paint(graphics)

    var viewPosition: ViewPosition = this.getViewPosition()!;
        
        


    var viewX: number = viewPosition!.getX()!;
        
        


    var viewY: number = viewPosition!.getY()!;
        
        

paint(graphics, viewX, viewY)
paint(graphics, viewX, viewY)
paint(graphics, viewX, viewY)
paint(graphics)
paint(graphics)
paint(graphics, viewX, viewY)
paint(graphics, viewX, viewY)
paint(graphics, viewX, viewY)

                                    }
                                
}


                @Throws(Exception::class)
            
    public onBuildingEvent(event: RTSLayerEvent){
var event = event

    var buildingLayer: BuildingLayer = event.getRtsLayer() as BuildingLayer;
        
        

moveAwayFromBuilding(buildingLayer)
}


    public getVehicleProperties(): VehicleProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vehicleProperties;
    
}


                @Throws(Exception::class)
            
    public damage(damage: number, damageType: number){
    //var damage = damage
    //var damageType = damageType
damage(damage, damageType)
add(damage)

    
                        if(damage > 0)
                        
                                    {
                                    damage(damage)

                                    }
                                
}


                @Throws(Exception::class)
            
    public getDamage(damageType: number): number{
    //var damageType = damageType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                @Throws(Exception::class)
            
    public setDestroyed(destroyed: boolean){
    //var destroyed = destroyed
put(commonStrings!.START, this, "setDestroyed")
setDestroyed(destroyed)

    
                        if(this.isDestroyed())
                        
                                    {
                                    removeListener(this.getUnitWaypointBehavior())
removeListener(this)
removeListener(this)

    
                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    
    var damage: number = this.getHealthInterface()!.getMaxHealth()!;
        
        


    
                        if(damage > 10)
                        
                                    {
                                    add(ExplosionBasicSound.getInstance())

    
                        if(damage < 100)
                        
                                    {
                                    onSmallShakeEvent()
vibrate(duration, 0, 0)

                                    }
                                
                             else 
    
                        if(damage < 1000)
                        
                                    {
                                    onMediumShakeEvent()
vibrate(duration *2, 0, 0)

                                    }
                                
                             else 
    
                        if(damage < 3000)
                        
                                    {
                                    onLargeShakeEvent()
vibrate(duration *4, 0, 0)

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}


    public getLoad(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resourceLoad;
    
}


                @Throws(Exception::class)
            
    public clearResourceAnimation(){
this.resourceAnimation= NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation
}


                @Throws(Exception::class)
            
    public setLoad(resource: number){
var resource = resource

    
                        if(resource > 0)
                        
                                    {
                                    this.resourceAnimation= this.initResourceAnimation

                                    }
                                
                        else {
                            this.clearResourceAnimation()

                        }
                            
this.resourceLoad= resource
}


    public addLoad(resource: number){
var resource = resource
this.resourceLoad += resource
}


    private readonly CAPITAL_EVENT: CapitalEvent = new CapitalEvent(this);
        
        

                @Throws(Exception::class)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){
var ownerLayer = ownerLayer

    
                        if(this.getLoad() > 0)
                        
                                    {
                                    setValue(this.getLoad())
fireEvent(CAPITAL_EVENT)
this.setLoad(0)

                                    }
                                
}


    public createHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: RTSLayerHudPaintable = RTSLayerHudPaintable.getInstance()!;
        
        

setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor())
setRtsLayer(this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: RTSLayerHudPaintable = RTSLayerHudPaintable.getInstance()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getStaticType();
    
}


    getUnitWaypointBehavior(): UnitWaypointBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWaypointBehavior() as UnitWaypointBehavior;
    
}


    public getTrackingEvent(): TrackingEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackingEvent;
    
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return captionAnimationHelper;
    
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getMaxResourceLoad(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxResourceLoad;
    
}


}
                
            

