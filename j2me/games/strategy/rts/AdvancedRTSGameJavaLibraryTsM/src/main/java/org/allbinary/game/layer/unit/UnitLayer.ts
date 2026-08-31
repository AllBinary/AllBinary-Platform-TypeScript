
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
        
            import { Math } from '../../../../../java/lang/Math.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { ExplosionBasicSound } from '../../../../../org/allbinary/ag/weapon/media/audio/ExplosionBasicSound.js';
      //not GWT import const ExplosionBasicSound = globalThis.org.allbinary.ag.weapon.media.audio.ExplosionBasicSound;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      //not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      //not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      //not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
      //not GWT import const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      //not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
import { RotationAnimation } from '../../../../../org/allbinary/animation/RotationAnimation.js';
      //not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { CaptionAnimationHelper } from '../../../../../org/allbinary/animation/caption/CaptionAnimationHelper.js';
      //not GWT import const CaptionAnimationHelper = globalThis.org.allbinary.animation.caption.CaptionAnimationHelper;

      
import { CaptionAnimationHelperBase } from '../../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
      //not GWT import const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
import { AdjustedCircleAnimation } from '../../../../../org/allbinary/animation/vector/AdjustedCircleAnimation.js';
      //not GWT import const AdjustedCircleAnimation = globalThis.org.allbinary.animation.vector.AdjustedCircleAnimation;

      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
      //not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;

      
import { PtsDamageFloaters } from '../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js';
      //not GWT import const PtsDamageFloaters = globalThis.org.allbinary.game.combat.damage.PtsDamageFloaters;

      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      //not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
import { BasicHudFactory } from '../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
      //not GWT import const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;

      
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
      //not GWT import const Health = globalThis.org.allbinary.game.health.Health;

      
import { HealthBar } from '../../../../../org/allbinary/game/health/HealthBar.js';
      //not GWT import const HealthBar = globalThis.org.allbinary.game.health.HealthBar;

      
import { HealthBarTwodAnimation } from '../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js';
      //not GWT import const HealthBarTwodAnimation = globalThis.org.allbinary.game.health.HealthBarTwodAnimation;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { GroupCommonFactory } from '../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
      //not GWT import const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      //not GWT import const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
import { GameKeyEventUtil } from '../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
      //not GWT import const GameKeyEventUtil = globalThis.org.allbinary.game.input.event.GameKeyEventUtil;

      
import { VisibleCellPositionsSingleton } from '../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js';
      //not GWT import const VisibleCellPositionsSingleton = globalThis.org.allbinary.game.input.form.VisibleCellPositionsSingleton;

      
import { WaypointRTSFormInput } from '../../../../../org/allbinary/game/input/form/WaypointRTSFormInput.js';
      //not GWT import const WaypointRTSFormInput = globalThis.org.allbinary.game.input.form.WaypointRTSFormInput;

      
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { AdvancedRTSProperties } from '../../../../../org/allbinary/game/layer/AdvancedRTSProperties.js';
      //not GWT import const AdvancedRTSProperties = globalThis.org.allbinary.game.layer.AdvancedRTSProperties;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { CaptionResources } from '../../../../../org/allbinary/game/layer/CaptionResources.js';
      //not GWT import const CaptionResources = globalThis.org.allbinary.game.layer.CaptionResources;

      
import { LinePathRelativeAnimation } from '../../../../../org/allbinary/game/layer/LinePathRelativeAnimation.js';
      //not GWT import const LinePathRelativeAnimation = globalThis.org.allbinary.game.layer.LinePathRelativeAnimation;

      
import { PathAnimation } from '../../../../../org/allbinary/game/layer/PathAnimation.js';
      //not GWT import const PathAnimation = globalThis.org.allbinary.game.layer.PathAnimation;

      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { RTSLayer2LogHelper } from '../../../../../org/allbinary/game/layer/RTSLayer2LogHelper.js';
      //not GWT import const RTSLayer2LogHelper = globalThis.org.allbinary.game.layer.RTSLayer2LogHelper;

      
import { RTSLayer2SelectedLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayer2SelectedLogHelper.js';
      //not GWT import const RTSLayer2SelectedLogHelper = globalThis.org.allbinary.game.layer.RTSLayer2SelectedLogHelper;

      
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      //not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { RTSLayerHudPaintable } from '../../../../../org/allbinary/game/layer/RTSLayerHudPaintable.js';
      //not GWT import const RTSLayerHudPaintable = globalThis.org.allbinary.game.layer.RTSLayerHudPaintable;

      
import { RTSLayerLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayerLogHelper.js';
      //not GWT import const RTSLayerLogHelper = globalThis.org.allbinary.game.layer.RTSLayerLogHelper;

      
import { RTSLayerSelectedLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayerSelectedLogHelper.js';
      //not GWT import const RTSLayerSelectedLogHelper = globalThis.org.allbinary.game.layer.RTSLayerSelectedLogHelper;

      
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { SelectionHudPaintable } from '../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
      //not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

      
import { SensorActionFactory } from '../../../../../org/allbinary/game/layer/SensorActionFactory.js';
      //not GWT import const SensorActionFactory = globalThis.org.allbinary.game.layer.SensorActionFactory;

      
import { SteeringVisitor } from '../../../../../org/allbinary/game/layer/SteeringVisitor.js';
      //not GWT import const SteeringVisitor = globalThis.org.allbinary.game.layer.SteeringVisitor;

      
import { TiledLayerUtil } from '../../../../../org/allbinary/game/layer/TiledLayerUtil.js';
      //not GWT import const TiledLayerUtil = globalThis.org.allbinary.game.layer.TiledLayerUtil;

      
import { VehicleFrictionProperties } from '../../../../../org/allbinary/game/layer/VehicleFrictionProperties.js';
      //not GWT import const VehicleFrictionProperties = globalThis.org.allbinary.game.layer.VehicleFrictionProperties;

      
import { VehicleProperties } from '../../../../../org/allbinary/game/layer/VehicleProperties.js';
      //not GWT import const VehicleProperties = globalThis.org.allbinary.game.layer.VehicleProperties;

      
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
      //not GWT import const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

      
import { BuildingLayer } from '../../../../../org/allbinary/game/layer/building/BuildingLayer.js';
      //not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;

      
import { BuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
      //not GWT import const BuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.BuildingEventHandler;

      
import { BuildingEventListenerInterface } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventListenerInterface.js';
      //not GWT import const BuildingEventListenerInterface = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;

      
import { CapitalEvent } from '../../../../../org/allbinary/game/layer/capital/event/CapitalEvent.js';
      //not GWT import const CapitalEvent = globalThis.org.allbinary.game.layer.capital.event.CapitalEvent;

      
import { CapitalEventHandlerFactory } from '../../../../../org/allbinary/game/layer/capital/event/CapitalEventHandlerFactory.js';
      //not GWT import const CapitalEventHandlerFactory = globalThis.org.allbinary.game.layer.capital.event.CapitalEventHandlerFactory;

      
import { LayerPartialCellPositionsUtil } from '../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js';
      //not GWT import const LayerPartialCellPositionsUtil = globalThis.org.allbinary.game.layer.geographic.map.LayerPartialCellPositionsUtil;

      
import { SpecialDownGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialDownGameInputProcessor.js';
      //not GWT import const SpecialDownGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialDownGameInputProcessor;

      
import { SpecialFireGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialFireGameInputProcessor.js';
      //not GWT import const SpecialFireGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialFireGameInputProcessor;

      
import { SpecialLeftGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialLeftGameInputProcessor.js';
      //not GWT import const SpecialLeftGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialLeftGameInputProcessor;

      
import { SpecialRightGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialRightGameInputProcessor.js';
      //not GWT import const SpecialRightGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialRightGameInputProcessor;

      
import { SpecialUpGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialUpGameInputProcessor.js';
      //not GWT import const SpecialUpGameInputProcessor = globalThis.org.allbinary.game.layer.special.SpecialUpGameInputProcessor;

      
import { MultipassNoCacheWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/MultipassNoCacheWaypoint.js';
      //not GWT import const MultipassNoCacheWaypoint = globalThis.org.allbinary.game.layer.waypoint.MultipassNoCacheWaypoint;

      
import { NoCacheWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/NoCacheWaypoint.js';
      //not GWT import const NoCacheWaypoint = globalThis.org.allbinary.game.layer.waypoint.NoCacheWaypoint;

      
import { WaypointBase } from '../../../../../org/allbinary/game/layer/waypoint/WaypointBase.js';
      //not GWT import const WaypointBase = globalThis.org.allbinary.game.layer.waypoint.WaypointBase;

      
import { WaypointEventHandlerFactory } from '../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js';
      //not GWT import const WaypointEventHandlerFactory = globalThis.org.allbinary.game.layer.waypoint.event.WaypointEventHandlerFactory;

      
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      //not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
import { BasicWeaponPart } from '../../../../../org/allbinary/game/part/weapon/BasicWeaponPart.js';
      //not GWT import const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;

      
import { SalvoInterface } from '../../../../../org/allbinary/game/part/weapon/SalvoInterface.js';
      //not GWT import const SalvoInterface = globalThis.org?.allbinary?.game?.part?.weapon?.SalvoInterface;

      
import { VelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      //not GWT import const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;

      
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      //not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      //not GWT import const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
import { TrackingEventListenerInterface } from '../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js';
      //not GWT import const TrackingEventListenerInterface = globalThis.org.allbinary.game.tracking.TrackingEventListenerInterface;

      
import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
      //not GWT import const CellPositionFactory = globalThis.org.allbinary.graphics.CellPositionFactory;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
import { LayerInterfaceFactoryInterface } from '../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
      //not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
//not plain js import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not plain js import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
      const AngleInfo = globalThis.org.allbinary.math.AngleInfo;

      
//not plain js import { FrameUtil } from '../../../../../org/allbinary/math/FrameUtil.js';
      const FrameUtil = globalThis.org.allbinary.math.FrameUtil;

      
import { LayerDistanceUtil } from '../../../../../org/allbinary/math/LayerDistanceUtil.js';
      //not GWT import const LayerDistanceUtil = globalThis.org.allbinary.math.LayerDistanceUtil;

      
//not plain js import { NamedAngle } from '../../../../../org/allbinary/math/NamedAngle.js';
      const NamedAngle = globalThis.org.allbinary.math.NamedAngle;

      
import { AttackSound } from '../../../../../org/allbinary/media/audio/AttackSound.js';
      //not GWT import const AttackSound = globalThis.org.allbinary.media.audio.AttackSound;

      
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      //not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      //not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      //not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellHistory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      //not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      //not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      //not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      //not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
import { RaceTrackGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMap.js';
      //not GWT import const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;

      
//not plain js import { CommonPhoneStrings } from '../../../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListS } from '../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      //not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableUnitBehavior } from './CollidableUnitBehavior.js';
import { UnitWaypointBehavior2 } from './UnitWaypointBehavior2.js';
import { UnitWaypointBehavior } from './UnitWaypointBehavior.js';

export class UnitLayer extends AdvancedRTSGameLayer implements BuildingEventListenerInterface, TrackingEventListenerInterface {
        

    private static readonly partialPositionList: BasicArrayList = new BasicArrayListS(4);

    private static readonly SENSOR_RANGE_MULTIPLIER: number = 6;

    private static readonly MOVE: string = "Moving";

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


    public static getPartialpositionlist(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UnitLayer.partialPositionList;
    
}


    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    private readonly groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;

    private readonly layerPartialCellPositionsUtil: LayerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance()!;

    private readonly layerDistanceUtil: LayerDistanceUtil = LayerDistanceUtil.getInstance()!;

    private readonly angleFactory: AngleFactory = AngleFactory.getInstance()!;

    private readonly cellPositionFactory: CellPositionFactory = CellPositionFactory.getInstance()!;

    private readonly maxResourceLoad: number;

    private readonly vehicleProperties: VehicleProperties;

    accelerationBasicDecimal: BasicDecimal = new BasicDecimal(1600);

    decelerationBasicDecimal: BasicDecimal = new BasicDecimal( -1000);

    private readonly trackingEvent: TrackingEvent;

    private readonly damageFloaters: DamageFloaters;

    private readonly damageFloatersPaintableInterface: Paintable;

    private readonly healthBar: Paintable;

    private readonly moveSoundInterface: Sound;

    private readonly initResourceAnimation: RotationAnimation;

    private resourceAnimation: IndexedAnimation = NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation;

    private readonly initPathAnimation: PathAnimation;

    private pathAnimation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

    private readonly captionAnimationHelper: CaptionAnimationHelperBase = new CaptionAnimationHelper(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(CaptionResources.getInstance()!.RESOURCE)!.getInstance(0),  -23,  -25, 6, 0);

    private readonly decalAnimation: RotationAnimation;

    private readonly waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface;

    private resourceLoad: number = 0;

    private weaponRange: number= 0;

    rtsLogHelper: RTSLayerLogHelper = RTSLayerLogHelper.getInstance()!;

    rotationAnimationInterfaceP: RotationAnimation;

    private movementAngle: NamedAngle = this.angleFactory!.NOT_ANGLE;

    private steeringInsideGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

protected constructor (remoteInfo: RemoteInfo, parentLayer: PathFindingLayerInterface, advancedRTSProperties: AdvancedRTSProperties, groupInterface: Group[], rootName: string, name: string, vehicleProperties: VehicleProperties, healthInterface: Health, maxResourceLoad: Integer, moveSoundInterface: Sound, waypointLayerInterfaceFactoryInterface: LayerInterfaceFactoryInterface, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, resourceAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, direction: Direction, x: number, y: number, z: number, viewPosition: ViewPositionBase){
            super(remoteInfo, parentLayer, advancedRTSProperties, groupInterface, rootName, name, healthInterface, new WaypointRTSFormInput(groupInterface, true), animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableUnitBehavior(true));
    
this.waypointLayerInterfaceFactoryInterface= waypointLayerInterfaceFactoryInterface;
    
this.maxResourceLoad= maxResourceLoad!.toShort();
    
this.moveSoundInterface= moveSoundInterface;
    

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.DAMAGE_FLOATERS))
                        
                                    {
                                    this.damageFloaters= new PtsDamageFloaters(this);
    
this.damageFloatersPaintableInterface= this.damageFloaters;
    

                                    }
                                
                        else {
                            this.damageFloatersPaintableInterface= NullPaintable.getInstance();
    
this.damageFloaters= new DamageFloaters();
    

                        }
                            

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.HEALTH_BARS))
                        
                                    {
                                    this.healthBar= new HealthBar(this, this.getHealthInterface(), new HealthBarTwodAnimation(this as AllBinaryLayer, BasicHudFactory.getInstance()!.BOTTOMLEFT),  -1);
    

                                    }
                                
                        else {
                            this.healthBar= NullPaintable.getInstance();
    

                        }
                            
this.decalAnimation= decalAnimationInterfaceFactoryInterface!.getInstance(0) as RotationAnimation;
    
this.initResourceAnimation= resourceAnimationInterfaceFactoryInterface!.getInstance(0) as RotationAnimation;
    
this.initResourceAnimation!.setFrameByDirection(direction);
    
this.decalAnimation!.setFrameByDirection(direction);
    
this.rotationAnimationInterfaceP= this.indexedButShouldBeRotationAnimationInterface as RotationAnimation;
    
this.rotationAnimationInterfaceP!.setFrameByDirection(direction);
    
this.setMaxLevel(12);
    
this.vehicleProperties= vehicleProperties;
    
this.trackingEvent= new TrackingEvent(this);
    
this.initPathAnimation= new PathAnimation(this, LinePathRelativeAnimation.getInstance());
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
this.initPathAnimation!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
}


                //@Throws(Exception.constructor)
            
    public updateWaypointBehavior(geographicMapInterface: BasicGeographicMap){

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();;
    
hashtable.put(this.groupCommonFactory!.ID, this.getGroupInterface());
    
hashtable.put(Layer.ID, this);
    
hashtable.put(AllBinaryGameLayerManager.ID, this.allBinaryGameLayerManagerP);
    
this.setWaypointBehavior(new UnitWaypointBehavior2(this, this.waypointLayerInterfaceFactoryInterface!.getNextInstance(hashtable, this.x, this.y, this.z) as AdvancedRTSGameLayer));
    

    var features: Features = Features.getInstance()!;;
    

    var waypoint: WaypointBase = J2MEUtil.isHTML()
                        ?       
                                new MultipassNoCacheWaypoint(this, AttackSound.getInstance())
                                :

                            new NoCacheWaypoint(this, AttackSound.getInstance());

    ;;
    
this.getWaypointBehavior()!.setWaypoint(waypoint);
    
super.updateWaypointBehavior(geographicMapInterface);
    
this.initRangeHack();
    
}


                //@Throws(Exception.constructor)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
super.construct(rtsPlayerLayerInterface);
    
TrackingEventHandler.getInstance()!.addListenerInterface(this);
    
WaypointEventHandlerFactory.getInstance(this.getGroupInterface()[0]!)!.addListenerInterface(this.getUnitWaypointBehavior());
    
BuildingEventHandler.getInstance()!.addListenerInterface(this);
    
this.getUnitWaypointBehavior()!.setCurrentPathGeographicMapCellPosition(this.getCurrentGeographicMapCellPosition());
    
this.updateSensorGeographicMapCellPositionList();
    
this.getUnitWaypointBehavior()!.setLastPathGeographicMapCellPosition(this.getUnitWaypointBehavior()!.getCurrentPathGeographicMapCellPosition());
    
}


    private readonly sensorGeographicMapCellPositionList: BasicArrayList = new BasicArrayListD();

                //@Throws(Exception.constructor)
            
    public updateSensorGeographicMapCellPositionList(){

                        if(VisibleCellPositionsSingleton.getInstance()!.shouldProcess())
                        
                                    {
                                    
    var currentGeographicMapCellPosition: GeographicMapCellPosition = this.getCurrentGeographicMapCellPosition()!;;
    
this.sensorGeographicMapCellPositionList!.clear();
    
this.sensorGeographicMapCellPositionList!.add(currentGeographicMapCellPosition);
    

    var sensorRange: number = this.weaponRange *UnitLayer.SENSOR_RANGE_MULTIPLIER;;
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var totalCells: number = (sensorRange /tiledLayer!.getCellHeight()) /2;;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var column: number = currentGeographicMapCellPosition!.getColumn()!;;
    

    var row: number = currentGeographicMapCellPosition!.getRow()!;;
    

    var lastColumn: number = column +totalCells;;
    

    var lastRow: number = row +totalCells;;
    

                        if(lastColumn > tiledLayer!.getColumns())
                        
                                    {
                                    lastColumn= tiledLayer!.getColumns();
    

                                    }
                                

                        if(lastRow > tiledLayer!.getRows())
                        
                                    {
                                    lastRow= tiledLayer!.getRows();
    

                                    }
                                

    var firstColumn: number = column -totalCells;;
    

    var firstRow: number = row -totalCells;;
    

                        if(firstColumn < 0)
                        
                                    {
                                    firstColumn= 0;
    

                                    }
                                

                        if(firstRow < 0)
                        
                                    {
                                    firstRow= 0;
    

                                    }
                                




                        for (
    var index: number = lastColumn -1;index >= firstColumn; index--)
        {




                        for (
    var index2: number = lastRow -1;index2 >= firstRow; index2--)
        {

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionFactory!.getAt(index, index2)!;;
    

                        if(!this.sensorGeographicMapCellPositionList!.contains(geographicMapCellPosition))
                        
                                    {
                                    this.sensorGeographicMapCellPositionList!.add(geographicMapCellPosition);
    

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
this.pathAnimation= this.initPathAnimation;
    
super.select();
    
}


    public deselect(){
this.pathAnimation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    
super.deselect();
    
}


    setSelected(selected: boolean){
super.setSelected(selected);
    

                        if(selected)
                        
                                    {
                                    
                        if(this.debug)
                        
                                    {
                                    this.rtsLogHelper= RTSLayerSelectedLogHelper.getInstance();
    

                                    }
                                
this.rtsLayer2LogHelper= RTSLayer2SelectedLogHelper.getInstance();
    

                                    }
                                
                        else {
                            
                        if(this.debug)
                        
                                    {
                                    this.rtsLogHelper= RTSLayerLogHelper.getInstance();
    

                                    }
                                
this.rtsLayer2LogHelper= RTSLayer2LogHelper.getInstance();
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){
this.rtsLogHelper!.setClosestGeographicMapCellHistory(this, pathsList);
    

    var closestIndex: number =  -1;;
    

    var shortestDistance: number = Integer.MAX_VALUE;;
    

    var currentDistance: number = Integer.MAX_VALUE;;
    




                        for (
    var index: number = pathsList!.size() -1;index >= 0; index--)
        {

    var geographicMapCellPositionBasicArrayList: BasicArrayList = pathsList!.get(index) as BasicArrayList;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionBasicArrayList!.get(geographicMapCellPositionBasicArrayList!.size() -1) as GeographicMapCellPosition;;
    
currentDistance= this.layerDistanceUtil!.getDistanceAt(this, geographicMapCellPosition!.getMidPoint());
    

                        if(currentDistance < shortestDistance)
                        
                                    {
                                    shortestDistance= currentDistance;
    
closestIndex= index;
    

                                    }
                                
}


                        if(closestIndex >= 0)
                        
                                    {
                                    
    var geographicMapCellPositionBasicArrayList: BasicArrayList = pathsList!.get(closestIndex) as BasicArrayList;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionBasicArrayList!.get(0) as GeographicMapCellPosition;;
    
this.teleportTo(geographicMapCellPosition);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){
geographicMapCellHistory!.trackAll(geographicMapCellPositionBasicArrayList);
    
}


    public onMovement(trackingEvent: TrackingEvent){

        try {
            
    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface() as AdvancedRTSGameLayer;;
    

                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    this.getUnitWaypointBehavior()!.getPossibleTargetList()!.add(layerInterface);
    
layerInterface!.onMovementFound(this.getTrackingEvent());
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onMovement", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public onMovementFound(trackingEvent: TrackingEvent){

    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface() as AdvancedRTSGameLayer;;
    

                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    this.getUnitWaypointBehavior()!.getPossibleTargetList()!.add(layerInterface);
    

                                    }
                                
}


    public initRangeHack(){

    var basicWeaponPart: BasicWeaponPart = this.getPartInterfaceArray()[0]! as BasicWeaponPart;;
    

    var weaponProperties: WeaponProperties = basicWeaponPart!.getWeaponProperties()!;;
    
this.weaponRange= weaponProperties!.getRange();
    
this.initRangeAnimation= AdjustedCircleAnimation.createW(this.weaponRange, this.weaponRange, this.getWidth(), this.basicColorFactory!.GREEN);
    

    var sensorRange: number = this.weaponRange *UnitLayer.SENSOR_RANGE_MULTIPLIER;;
    
this.initSensorRangeAnimation= AdjustedCircleAnimation.createW(sensorRange, sensorRange, this.getWidth(), this.basicColorFactory!.RED);
    
this.getUnitWaypointBehavior()!.initRange(this.weaponRange);
    
this.fireTimeHelper!.delay= (Math.round(weaponProperties!.getReloadTime()));
    
}


                //@Throws(Exception.constructor)
            
    public processBuiltTick(allBinaryLayerManager: AllBinaryLayerManager){

                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var currentFrame: number = this.destroyAnimationInterface!.getFrame()!;;
    

    var size: number = this.destroyAnimationInterface!.getSize() -1;;
    

                        if(currentFrame == size)
                        
                                    {
                                    
                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    this.setDestroyed(true);
    

                                    }
                                

                                    }
                                
                        else {
                            this.destroyAnimationInterface!.nextFrame();
    

                        }
                            

                                    }
                                
                        else {
                            this.setAnimationInterface(this.destroyAnimationInterface);
    
SecondaryPlayerQueueFactory.getInstance()!.add(ExplosionBasicSound.getInstance());
    
this.shakeListener!.onSmallShakeEvent();
    
this.vibration.vibrate(this.duration, 0, 0);
    
this.setReadyForExplosion(true);
    

                        }
                            

                                    }
                                
                        else {
                            super.processBuiltTick(allBinaryLayerManager);
    

                        }
                            
this.captionAnimationHelper!.tick();
    
this.getUnitWaypointBehavior()!.processTick(allBinaryLayerManager);
    
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){

    var point: GPoint = geographicMapCellPosition!.getMidPoint()!;;
    
this.setPosition(point.getX() -this.getHalfWidth(), point.getY() -this.getHalfHeight(), this.z);
    
}


                //@Throws(Exception.constructor)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtXY(this.x +this.getHalfWidth(), this.y +this.getHalfHeight())!;;
    

    var raceTrackGeographicMap: RaceTrackGeographicMap = geographicMapInterface as RaceTrackGeographicMap;;
    

                        if(!raceTrackGeographicMap!.isValid(geographicMapCellPosition))
                        
                                    {
                                    


                            throw new Exception("Position is not really on the map: " +geographicMapCellPosition);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


                //@Throws(Exception.constructor)
            
    public fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){

                        if(this.fireTimeHelper!.isTimeTNT())
                        
                                    {
                                    this.fireAll(layerManager);
    

                                    }
                                
                        else {
                            this.reload();
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public left(){
this.initResourceAnimation!.previousRotation();
    
this.decalAnimation!.previousRotation();
    
this.rotationAnimationInterfaceP!.previousRotation();
    
}


                //@Throws(Exception.constructor)
            
    public right(){
this.initResourceAnimation!.nextRotation();
    
this.decalAnimation!.nextRotation();
    
this.rotationAnimationInterfaceP!.nextRotation();
    
}


    public down(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;;
    

                        if(!velocityProperties!.isOverXYMaxForwardVelocity())
                        
                                    {
                                    this.accelerate(this.decelerationBasicDecimal);
    

                                    }
                                
}


    public up(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;;
    

                        if(!velocityProperties!.isOverXYMaxForwardVelocity())
                        
                                    {
                                    this.accelerate(this.accelerationBasicDecimal);
    

                                    }
                                
}


    public initInputProcessors(){
this.inputProcessorArray[Canvas.RIGHT]= new SpecialRightGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.LEFT]= new SpecialLeftGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_NUM0]= new SpecialFireGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.KEY_POUND]= this.inputProcessorArray[Canvas.KEY_NUM0]!;
    
this.inputProcessorArray[Canvas.DOWN]= new SpecialDownGameInputProcessor(this);
    
this.inputProcessorArray[Canvas.UP]= new SpecialUpGameInputProcessor(this);
    
super.initInputProcessors();
    
}


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){

    var list: BasicArrayList = this.getGameKeyEventList()!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = list.get(index)!;;
    

    var key: number = GameKeyEventUtil.getKey(anyType)!;;
    
this.inputProcessorArray[key]!.processEvent(layerManager, GameKeyEvent.NONE);
    
}

list.clear();
    
this.groundFriction();
    
this.move();
    
}


    public accelerate(accelerate: BasicDecimal){
this.getVehicleProperties()!.getVelocityProperties()!.addVelocityi(accelerate.getUnscaled(), Math.round(this.rotationAnimationInterfaceP!.getAngleInfoP()!.getAngle()), 90);
    
}


                //@Throws(Exception.constructor)
            
    fireAll(layerManager: AllBinaryLayerManager){

    var angleInfo: AngleInfo = this.rotationAnimationInterfaceP!.getAngleInfoP()!;;
    

    var angle: number = Math.round((angleInfo!.getAngle() +this.slightAngle));;
    
this.hashtable.put(SmallIntegerSingletonFactory.getInstance()!.getAt(1), SmallIntegerSingletonFactory.getInstance()!.getAt(Math.round(AngleFactory.getInstance()!.getAt(angle)!.getValue())));
    

    var salvoInterface: SalvoInterface = this.getPartInterfaceArray()[0]! as SalvoInterface;;
    
salvoInterface!.process(layerManager, angle, 90);
    
}


    public downgrade(){

                        if(this.getLevel() > 1)
                        
                                    {
                                    super.downgrade();
    

                                    }
                                
}


    public upgrade(){
super.upgrade();
    
this.initRangeHack();
    
}


    groundFriction(){

    var vehicleFrictionProperties: VehicleFrictionProperties = this.getVehicleProperties()!.getVehicleFrictionProperties()!;;
    
this.getVehicleProperties()!.getVehicleFrictionProperties()!.friction(this.getVehicleProperties()!.getVelocityProperties(), vehicleFrictionProperties!.getTireFrictionNominator());
    
}


                //@Throws(Exception.constructor)
            
    public trackTo(reason: string){

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;;
    

    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;;
    

    var point: GPoint = nextUnvisitedPathGeographicMapCellPosition!.getMidPoint()!;;
    

    var dx: number = (this.getXP() +this.getHalfWidth()) -point.getX();;
    

    var dy: number = (this.getYP() +this.getHalfHeight()) -point.getY();;
    
this.rtsLogHelper!.trackTo(this, nextUnvisitedPathGeographicMapCellPosition, dx, dy, reason);
    
this.trackToDXY(dx, dy);
    
}


                //@Throws(Exception.constructor)
            
    public trackToDXY(dx: number, dy: number){

    var angleOfTarget: number = 0;;
    
this.trackToDXYTargetAngle(dx, dy, angleOfTarget);
    
}


                //@Throws(Exception.constructor)
            
    turnTo(dx: number, dy: number, targetAngle: number): boolean{

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;;
    

    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;;
    

    var evading: boolean = false;;
    

                        if(this.getUnitWaypointBehavior()!.getSensorAction() == SensorActionFactory.getInstance()!.EVADE)
                        
                                    {
                                    this.rtsLogHelper!.evade(this);
    
evading= true;
    
targetAngle += 180;
    

                                    }
                                

    var angleInfo: AngleInfo = this.rotationAnimationInterfaceP!.getAngleInfoP()!;;
    

    var angle: number = FrameUtil.getInstance()!.adjustAngleToFrameAngle(angleInfo!.getAngle() -270)!;;
    
this.rtsLogHelper!.turnTo(this, dx, dy, angleInfo, angle, this.movementAngle, evading, targetAngle);
    

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;;
    

                        if(dx == 0 && dy == 0)
                        
                                    {
                                    this.rtsLogHelper!.doneMoving(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if((Math.round(this.movementAngle!.getValue())) == angle)
                        
                                    {
                                    
                        if(dx > 0 && this.movementAngle == this.angleFactory!.LEFT)
                        
                                    {
                                    this.rtsLogHelper!.movingLeft(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(dx < 0 && this.movementAngle == this.angleFactory!.RIGHT)
                        
                                    {
                                    this.rtsLogHelper!.movingRight(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(dy > 0 && this.movementAngle == this.angleFactory!.UP)
                        
                                    {
                                    this.rtsLogHelper!.movingUp(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(dy < 0 && this.movementAngle == this.angleFactory!.DOWN)
                        
                                    {
                                    this.rtsLogHelper!.movingDown(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
this.rtsLogHelper!.currentMoveEnded(this);
    

                        if(this.movementAngle == this.angleFactory!.LEFT || this.movementAngle == this.angleFactory!.RIGHT)
                        
                                    {
                                    this.handleDeltalY(dx, dy);
    

                                    }
                                
                             else 
                        if(this.movementAngle == this.angleFactory!.UP || this.movementAngle == this.angleFactory!.DOWN)
                        
                                    {
                                    this.handleDeltalX(dx, dy);
    

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
                                    this.handleDeltalY(dx, dy);
    

                                    }
                                
                             else 
                        if(dx != 0)
                        
                                    {
                                    this.handleDeltalX(dx, dy);
    

                                    }
                                
                        else {
                            this.handleDeltalY(dx, dy);
    

                        }
                            

                                    }
                                

    var deltaAngle2: number = this.movementAngle!.getValue() -angle;;
    

                        if(deltaAngle2 > 0)
                        
                                    {
                                    this.rtsLogHelper!.rotateRight(this);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.RIGHT));
    

                                    }
                                
                        else {
                            this.rtsLogHelper!.rotateLeft(this);
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.LEFT));
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            this.rtsLogHelper!.noRotation(this);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    handleDeltalX(dx: number, dy: number){

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;;
    

    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;;
    

                        if(dx > 0)
                        
                                    {
                                    this.movementAngle= this.angleFactory!.LEFT;
    
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition;
    

                                    }
                                
                        else {
                            this.movementAngle= this.angleFactory!.RIGHT;
    
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition;
    

                        }
                            
this.rtsLogHelper!.handle(this, this.movementAngle);
    
}


    handleDeltalY(dx: number, dy: number){

    var waypointBehaviorBase: WaypointBehaviorBase = this.waypointBehaviorBase as WaypointBehaviorBase;;
    

    var nextUnvisitedPathGeographicMapCellPosition: GeographicMapCellPosition = waypointBehaviorBase!.getNextUnvisitedPathGeographicMapCellPosition()!;;
    

                        if(dy > 0)
                        
                                    {
                                    this.movementAngle= this.angleFactory!.UP;
    
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition;
    

                                    }
                                
                        else {
                            this.movementAngle= this.angleFactory!.DOWN;
    
this.steeringInsideGeographicMapCellPosition= nextUnvisitedPathGeographicMapCellPosition;
    

                        }
                            
this.rtsLogHelper!.handle(this, this.movementAngle);
    
}


                //@Throws(Exception.constructor)
            
    trackToDXYTargetAngle(dx: number, dy: number, targetAngle: number){

    var list: BasicArrayList = this.getUnitWaypointBehavior()!.getSteeringVisitorList()!;;
    

                        if(list.size() > 0)
                        
                                    {
                                    



                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var steeringVisitor: SteeringVisitor = list.get(index) as SteeringVisitor;;
    

    var anyType: any = steeringVisitor!.visit(this)!;;
    

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    list.removeAt(index);
    

                                    }
                                
}

this.fireOrMove();
    

                                    }
                                
                             else 
                        if(!this.turnTo(dx, dy, targetAngle))
                        
                                    {
                                    this.fireOrMove();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    fireOrMove(){

    var gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;;
    

                        if(this.getUnitWaypointBehavior()!.needToMove())
                        
                                    {
                                    this.rtsLayer2LogHelper!.steeringUp(this);
    

                        if(this.showMoreCaptionStates && !this.captionAnimationHelper!.isShowing())
                        
                                    {
                                    this.captionAnimationHelper!.update(UnitLayer.MOVE, this.basicColorFactory!.GREEN);
    

                                    }
                                
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.UP));
    

                                    }
                                
                        else {
                            this.captionAnimationHelper!.update(CommonPhoneStrings.getInstance()!.FIRE, this.basicColorFactory!.RED);
    
this.rtsLayer2LogHelper!.steeringFireOrStop(this);
    
this.allStop();
    
this.getGameKeyEventList()!.add(gameKeyEventFactory!.getInstanceForKey(this, Canvas.KEY_NUM0));
    
TrackingEventHandler.getInstance()!.fireEvent(this.getTrackingEvent());
    

                        }
                            
}


    public move(){

        try {
            
    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;;
    

    var velocityXScaled: number = velocityProperties!.getVelocityXBasicDecimalP()!.getScaled();;
    

    var velocityYScaled: number = velocityProperties!.getVelocityYBasicDecimalP()!.getScaled();;
    
this.getUnitWaypointBehavior()!.move();
    

                        if(velocityXScaled != 0 || velocityYScaled != 0)
                        
                                    {
                                    this.getUnitWaypointBehavior()!.setMoving(true);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.layerPartialCellPositionsUtil!.getAllDXY(geographicMapInterface, this, Math.round(velocityXScaled), Math.round(velocityYScaled), UnitLayer.getPartialpositionlist());
    

    var cellPosition: GeographicMapCellPosition = DropCellPositionHistory.getInstance()!.getCellPositionWithDrop(UnitLayer.getPartialpositionlist()) as GeographicMapCellPosition;;
    

                        if(cellPosition == this.cellPositionFactory!.NONE)
                        
                                    {
                                    
    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var tiledLayerUtil: TiledLayerUtil = TiledLayerUtil.getInstance()!;;
    

    var x: number = this.x +Math.round(velocityXScaled);;
    

    var y: number = this.y +Math.round(velocityYScaled);;
    
x= tiledLayerUtil!.keepOnMapX(tiledLayer, x, this.getWidth());
    
y= tiledLayerUtil!.keepOnMapY(tiledLayer, y, this.getHeight());
    
this.setPosition(x, y, this.z);
    

                                    }
                                
                        else {
                            
    var allbinaryLayer: AllBinaryLayer = DropCellPositionHistory.getInstance()!.getLayerInterface(cellPosition)!;;
    
this.getUnitWaypointBehavior()!.setMovingFromStopped(false);
    
this.getUnitWaypointBehavior()!.addBuildingChase(allbinaryLayer, cellPosition);
    

                        }
                            

                                    }
                                

                        if(this.getUnitWaypointBehavior()!.isMoving())
                        
                                    {
                                    TrackingEventHandler.getInstance()!.fireEvent(this.getTrackingEvent());
    

                                    }
                                
                        else {
                            this.getUnitWaypointBehavior()!.setMovingFromStopped(false);
    

                        }
                            

                        if(this.getUnitWaypointBehavior()!.isMovingFromStopped() && this.isVisible())
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(this.moveSoundInterface);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "move", e);
    
}

}


    public allStop(){

    var velocityProperties: VelocityProperties = this.getVehicleProperties()!.getVelocityProperties()!;;
    
velocityProperties!.getVelocityXBasicDecimalP()!.setint(0);
    
velocityProperties!.getVelocityYBasicDecimalP()!.setint(0);
    
}


    public paint(graphics: Graphics){

                        if(this.isVisible())
                        
                                    {
                                    super.paint(graphics);
    

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.decalAnimation!.paintXY(graphics, viewX, viewY);
    
this.rangeAnimation!.paintXY(graphics, viewX, viewY);
    
this.sensorRangeAnimation!.paintXY(graphics, viewX, viewY);
    
this.damageFloatersPaintableInterface!.paint(graphics);
    
this.healthBar!.paint(graphics);
    
this.captionAnimationHelper!.paintXY(graphics, viewX, viewY);
    
this.pathAnimation!.paintXY(graphics, viewX, viewY);
    
this.resourceAnimation!.paintXY(graphics, viewX, viewY);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public onBuildingEvent(event: RTSLayerEvent){

    var buildingLayer: BuildingLayer = event.getRtsLayer() as BuildingLayer;;
    
this.getUnitWaypointBehavior()!.moveAwayFromBuilding(buildingLayer);
    
}


    public getVehicleProperties(): VehicleProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vehicleProperties;
    
}


                //@Throws(Exception.constructor)
            
    public damage(damage: number, damageType: number){
super.damage(damage, damageType);
    
this.damageFloaters!.add(damage);
    

                        if(damage > 0)
                        
                                    {
                                    this.getHealthInterface()!.damage(damage);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getDamage(damageType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public setDestroyed(destroyed: boolean){
this.logUtil!.putF(this.commonStrings!.START, this, "setDestroyed");
    
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    WaypointEventHandlerFactory.getInstance(this.getGroupInterface()[0]!)!.removeListener(this.getUnitWaypointBehavior());
    
TrackingEventHandler.getInstance()!.removeListener(this);
    
BuildingEventHandler.getInstance()!.removeListener(this);
    

                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    
    var damage: number = this.getHealthInterface()!.getMaxHealth()!;;
    

                        if(damage > 10)
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(ExplosionBasicSound.getInstance());
    

                        if(damage < 100)
                        
                                    {
                                    this.shakeListener!.onSmallShakeEvent();
    
this.vibration.vibrate(this.duration, 0, 0);
    

                                    }
                                
                             else 
                        if(damage < 1000)
                        
                                    {
                                    this.shakeListener!.onMediumShakeEvent();
    
this.vibration.vibrate(this.duration *2, 0, 0);
    

                                    }
                                
                             else 
                        if(damage < 3000)
                        
                                    {
                                    this.shakeListener!.onLargeShakeEvent();
    
this.vibration.vibrate(this.duration *4, 0, 0);
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}


    public getLoad(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.resourceLoad;
    
}


                //@Throws(Exception.constructor)
            
    public clearResourceAnimation(){
this.resourceAnimation= NullIndexedAnimationFactory.getFactoryInstance()!.getInstance(0) as IndexedAnimation;
    
}


                //@Throws(Exception.constructor)
            
    public setLoad(resource: number){

                        if(resource > 0)
                        
                                    {
                                    this.resourceAnimation= this.initResourceAnimation;
    

                                    }
                                
                        else {
                            this.clearResourceAnimation();
    

                        }
                            
this.resourceLoad= resource;
    
}


    public addLoad(resource: number){
this.resourceLoad += resource;
    
}


    private readonly CAPITAL_EVENT: CapitalEvent = new CapitalEvent(this);

                //@Throws(Exception.constructor)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){

                        if(this.getLoad() > 0)
                        
                                    {
                                    this.CAPITAL_EVENT.setValue(this.getLoad());
    
CapitalEventHandlerFactory.getInstance(ownerLayer!.getGroupInterface()[0]!)!.fireEvent(this.CAPITAL_EVENT);
    
this.setLoad(0);
    

                                    }
                                
}


    public createHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: RTSLayerHudPaintable = RTSLayerHudPaintable.getInstance()!;;
    
rtsLayerHudPaintable!.setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor());
    
rtsLayerHudPaintable!.setRtsLayer(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var rtsLayerHudPaintable: RTSLayerHudPaintable = RTSLayerHudPaintable.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rtsLayerHudPaintable;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UnitLayer.getStaticType();;
    
}


    getUnitWaypointBehavior(): UnitWaypointBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getWaypointBehavior() as UnitWaypointBehavior;
    
}


    public getTrackingEvent(): TrackingEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.trackingEvent;
    
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.captionAnimationHelper;
    
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getMaxResourceLoad(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxResourceLoad;
    
}


}



