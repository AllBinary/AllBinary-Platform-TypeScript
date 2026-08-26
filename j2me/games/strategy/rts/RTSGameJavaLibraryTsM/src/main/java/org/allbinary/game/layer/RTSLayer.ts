
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
      const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
//not game specific package import { MultiPlayerGameLayer } from '../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
      const MultiPlayerGameLayer = globalThis.org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer;

      
//not game specific package import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not game specific package import { NullIndexedAnimationFactory } from '../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
      const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
//not game specific package import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
//not game specific package import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
      const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
//not game specific package import { CaptionAnimationHelperBase } from '../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
      const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
//not game specific package import { DestroyedLayerProcessor } from '../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
      const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
//not game specific package import { Health } from '../../../../org/allbinary/game/health/Health.js';
      const Health = globalThis.org.allbinary.game.health.Health;

      
//not game specific package import { Group } from '../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { GroupFactory } from '../../../../org/allbinary/game/identification/GroupFactory.js';
      const GroupFactory = globalThis.org.allbinary.game.identification.GroupFactory;

      
//not game specific package import { GameInputInterface } from '../../../../org/allbinary/game/input/GameInputInterface.js';
      const GameInputInterface = globalThis.org.allbinary.game.input.GameInputInterface;

      
//not game specific package import { GameInputProcessor } from '../../../../org/allbinary/game/input/GameInputProcessor.js';
      const GameInputProcessor = globalThis.org.allbinary.game.input.GameInputProcessor;

      
//not game specific package import { GameInputProcessorUtil } from '../../../../org/allbinary/game/input/GameInputProcessorUtil.js';
      const GameInputProcessorUtil = globalThis.org.allbinary.game.input.GameInputProcessorUtil;

      
//not game specific package import { GameKeyEventSourceInterface } from '../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
//not game specific package import { InputFactory } from '../../../../org/allbinary/game/input/InputFactory.js';
      const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not game specific package import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
      const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
//not game specific package import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
      const Waypoint2LogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2LogHelper;

      
//not game specific package import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
      const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

      
//not game specific package import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
      const WaypointRunnableLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableLogHelper;

      
//not game specific package import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
      const TickableInterface = globalThis.org.allbinary.game.tick.TickableInterface;

      
//not game specific package import { TrackingEvent } from '../../../../org/allbinary/game/tracking/TrackingEvent.js';
      const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
//not game specific package import { TileLayerPositionIntoViewPosition } from '../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
      const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { ViewPositionEventHandler } from '../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
      const ViewPositionEventHandler = globalThis.org.allbinary.view.event.ViewPositionEventHandler;

      
//not game specific package import { RemoteInfo } from '../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { LayerDistanceUtil } from '../../../../org/allbinary/math/LayerDistanceUtil.js';
      const LayerDistanceUtil = globalThis.org.allbinary.math.LayerDistanceUtil;

      
//not game specific package import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSInterface } from './RTSInterface.js';
import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
import { GeographicMapCellPositionArea } from './GeographicMapCellPositionArea.js';
import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
import { RTSLayerUtil } from './RTSLayerUtil.js';
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
import { SelectionHudPaintable } from './SelectionHudPaintable.js';

export class RTSLayer extends MultiPlayerGameLayer implements TickableInterface, GameInputInterface, GameKeyEventSourceInterface, RTSInterface, PathFindingLayerInterface {
        

                //@Throws(Exception.constructor)
            
    public static createSimulatedInstance(remoteInfo: RemoteInfo): RTSLayer{

    var nullAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance()!;;
    

    var nullIndexedAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new RTSLayer(RemoteInfo.REMOTE_INFO, GroupFactory.getInstance()!.NULL_GROUP_ARRAY, StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0, new TileLayerPositionIntoViewPosition());
    
}


    private static readonly id: number = 0;

    static readonly MAIN_INDEX: number = 0;

    static readonly SECONDARY_INDEX: number = 1;

    public static getMinStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


    public static getMaxStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 4;
    
}


    public static isRTSLayer(layerInterface: AllBinaryLayer): boolean{

                        if(layerInterface!.getType() >= RTSLayer.getMinStaticType() && layerInterface!.getType() <= RTSLayer.getMaxStaticType())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    readonly debug: boolean = true;

    public readonly showMoreCaptionStates: boolean = this.debug;

    readonly inputProcessorArray: GameInputProcessor[] = new Array(InputFactory.getInstance()!.MAX);

    public rtsLayer2LogHelper: RTSLayer2LogHelper = RTSLayer2LogHelper.getInstance()!;

    public waypointLogHelperP: WaypointLogHelper = WaypointLogHelper.getInstance()!;

    public waypoint2LogHelperP: Waypoint2LogHelper = Waypoint2LogHelper.getInstance()!;

    public waypointRunnableLogHelperP: WaypointRunnableLogHelper = WaypointRunnableLogHelper.getInstance()!;

    private readonly rtsFormInput: RTSFormInput;

    private verticleBuildAnimationInterface: IndexedAnimation;

    rangeAnimation: Animation;

    initRangeAnimation: Animation;

    sensorRangeAnimation: Animation;

    initSensorRangeAnimation: Animation;

    readonly baseAnimationInterface: Animation;

    private readonly buildFrameTimeHelper: TimeDelayHelper = new TimeDelayHelper(50);

    private readonly buildAnimationInterface: Animation;

    private animationInterface: Animation;

    readonly initAnimationInterface: IndexedAnimation;

    indexedButShouldBeRotationAnimationInterface: IndexedAnimation;

    readonly emptyAnimationInterface: IndexedAnimation;

    readonly destroyAnimationInterface: IndexedAnimation;

    readonly fireTimeHelper: TimeDelayHelper = new TimeDelayHelper(700);

    private readonly rootName: string;

    readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();

    private readonly BUILD_VALUE: number = 63;

    public readonly geographicMapCellPositionAreaBase: GeographicMapCellPositionAreaBase;

    private healthInterface: Health = Health.NULL_HEALTH;

    private level: number = 1;

    private maxLevel: number = 1;

    private hackVerticleBuild: number = this.BUILD_VALUE;

    slightAngle: number = 0;

    percentCompleteP: number= 0;

    private destroyed: boolean = false;

    private selected: boolean = false;

protected constructor (remoteInfo: RemoteInfo, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number, viewPosition: ViewPositionBase){
            super(remoteInfo, groupInterface, name, rectangle, viewPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initInputProcessors();
    
this.rootName= rootName;
    
this.healthInterface= healthInterface;
    
this.rtsFormInput= rtsFormInput;
    
this.setPosition(x, y, this.z);
    
this.verticleBuildAnimationInterface= verticleBuildAnimationInterfaceFactoryInterface!.getInstance(0) as IndexedAnimation;
    
this.buildAnimationInterface= buildAnimationInterfaceFactoryInterface!.getInstance(0);
    
this.baseAnimationInterface= baseAnimationInterfaceFactoryInterface!.getInstance(0);
    
this.emptyAnimationInterface= emptyAnimationInterfaceFactoryInterface!.getInstance(0) as IndexedAnimation;
    
this.indexedButShouldBeRotationAnimationInterface= animationInterfaceFactoryInterface!.getInstance(0) as IndexedAnimation;
    
this.initAnimationInterface= this.indexedButShouldBeRotationAnimationInterface;
    
this.destroyAnimationInterface= proceduralAnimationInterfaceFactoryInterface!.getInstanceAnimation(this.indexedButShouldBeRotationAnimationInterface) as IndexedAnimation;
    

    var animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;;
    
this.rangeAnimation= animation;
    
this.initRangeAnimation= animation;
    
this.sensorRangeAnimation= animation;
    
this.initSensorRangeAnimation= animation;
    
this.animationInterface= this.initAnimationInterface;
    
this.geographicMapCellPositionAreaBase= new GeographicMapCellPositionArea(this);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = this.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var viewPosition2: TileLayerPositionIntoViewPosition = this.getViewPosition() as TileLayerPositionIntoViewPosition;;
    
viewPosition2!.setTiledLayer(tiledLayer);
    
this.updateWaypointBehavior(geographicMapInterface);
    
}


                //@Throws(Exception.constructor)
            
    public updateWaypointBehavior(geographicMapInterface: BasicGeographicMap){
this.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    
}


                //@Throws(Exception.constructor)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
ViewPositionEventHandler.getInstance()!.addListener(this as AllBinaryLayer);
    
this.animationInterface= this.buildAnimationInterface;
    
this.hackVerticleBuild= 0;
    
}


    public select(){
this.rangeAnimation= this.initRangeAnimation;
    
this.sensorRangeAnimation= this.initSensorRangeAnimation;
    
this.setSelected(true);
    
}


    public deselect(){

    var animation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;;
    
this.rangeAnimation= animation;
    
this.sensorRangeAnimation= animation;
    
this.setSelected(false);
    
}


    setSelected(selected: boolean){
this.selected= selected;
    
}


    public isSelected(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selected;
    
}


    public getPercentComplete(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.percentCompleteP;
    
}


    public getScrollSelectionForm(): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScrollSelectionForm.getNullScrollSelectionForm();;
    
}


    public initInputProcessors(){
GameInputProcessorUtil.init(this.inputProcessorArray);
    
}


                //@Throws(Exception.constructor)
            
    public processBuiltTick(allBinaryLayerManager: AllBinaryLayerManager){
this.animationInterface= this.indexedButShouldBeRotationAnimationInterface;
    
}


    public processTick(allBinaryLayerManager: AllBinaryLayerManager){

        try {
            
                        if(this.isCompleted())
                        
                                    {
                                    this.processBuiltTick(allBinaryLayerManager);
    

                                    }
                                
                        else {
                            this.build();
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "processTick", e);
    
}

}


                //@Throws(Exception.constructor)
            
    public processInput(layerManager: AllBinaryLayerManager){
}


    reload(){
}


    public onMovement(trackingEvent: TrackingEvent){
}


                //@Throws(Exception.constructor)
            
    public onMovementFound(trackingEvent: TrackingEvent){
}


    public paint(graphics: Graphics){
super.paintFirst(graphics);
    

    var viewPosition: ViewPositionBase = this.getViewPosition()!;;
    

    var viewX: number = viewPosition!.getX()!;;
    

    var viewY: number = viewPosition!.getY()!;;
    
this.getAnimationInterface()!.paintXY(graphics, viewX, viewY);
    
}


                //@Throws(Exception.constructor)
            
    public damage(damage: number, damageType: number){
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RTSLayer.id;
    
}


    private readonly rtsLayerUtil: RTSLayerUtil = RTSLayerUtil.getInstance()!;

    public downgrade(){
this.rtsLayerUtil!.downgrade(this);
    
}


    public upgrade(){
this.rtsLayerUtil!.upgrade(this);
    
}


    public isCompleted(): boolean{

                        if(this.hackVerticleBuild < this.BUILD_VALUE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    build(){

                        if(this.buildFrameTimeHelper!.isTimeTNT())
                        
                                    {
                                    this.animationInterface= this.buildAnimationInterface;
    
this.verticleBuildAnimationInterface!.nextFrame();
    
this.hackVerticleBuild++;
    

                                    }
                                
this.percentCompleteP= 100 *this.hackVerticleBuild /this.BUILD_VALUE;
    
this.getHudPaintable()!.updateInfo();
    
}


    public isSelfUpgradeable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayerUtil!.getCost(this);;
    
}


    public getDowngradeCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayerUtil!.getDowngradeCost(this);;
    
}


    public getUpgradeCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayerUtil!.getUpgradeCost(this);;
    
}


    public isUpgradeable(): boolean{

                        if(this.getLevel() < this.getMaxLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isDowngradeable(): boolean{

                        if(this.getLevel() > 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level;
    
}


    public setLevel(level: number){
this.level= level;
    
}


    public getVerticleBuildAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.verticleBuildAnimationInterface;
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    public setAnimationInterface(animationInterface: Animation){
this.animationInterface= animationInterface;
    
}


    private readonly layerDistanceUtil: LayerDistanceUtil = LayerDistanceUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public setTarget(targetGameLayer: PathFindingLayerInterface){

    var anotherTargetDistance: number = this.layerDistanceUtil!.getDistance(this as AllBinaryLayer, targetGameLayer as AllBinaryLayer)!;;
    

    var waypointBehaviorBase: WaypointBehaviorBase = this.getWaypointBehavior()!;;
    
waypointBehaviorBase!.setTargetWithDistance(targetGameLayer as PathFindingLayerInterface, anotherTargetDistance);
    
}


    public createHudPaintable(): SelectionHudPaintable{



                            throw new RuntimeException();
                    
}


    public getHudPaintable(): SelectionHudPaintable{



                            throw new RuntimeException();
                    
}


    public getMaxLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxLevel;
    
}


    public setMaxLevel(maxLevel: number){
this.maxLevel= maxLevel;
    
}


    public getHealthInterface(): Health{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.healthInterface;
    
}


    public setHealthInterface(healthInterface: Health){
this.healthInterface= healthInterface;
    
}


    public getRTSFormInput(): RTSFormInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInput;
    
}


                //@Throws(Exception.constructor)
            
    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.destroyed;
    
}


                //@Throws(Exception.constructor)
            
    public setDestroyed(destroyed: boolean){
this.destroyed= destroyed;
    

                        if(this.isDestroyed())
                        
                                    {
                                    DestroyedLayerProcessor.getInstance()!.add(this);
    
ViewPositionEventHandler.getInstance()!.removeListener(this);
    

                                    }
                                
}


    public getEndGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList();;
    
}


    public getGeographicMapCellPositionArea(): GeographicMapCellPositionAreaBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase;
    
}


    public shouldHandleStartSameAsEnd(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public handleCost(ownerLayer: PathFindingLayerInterface){
}


    public getWaypointBehavior(): WaypointBehaviorBase{



                            throw new RuntimeException();
                    
}


    public getParentLayer(): PathFindingLayerInterface{



                            throw new RuntimeException();
                    
}


    public getRTSLayer2LogHelper(): RTSLayer2LogHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsLayer2LogHelper;
    
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getCaptionAnimationHelper(): CaptionAnimationHelperBase{



                            throw new RuntimeException();
                    
}


    public isShowMoreCaptionStates(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.showMoreCaptionStates;
    
}


                //@Throws(Exception.constructor)
            
    public init(geographicMapCellHistory: GeographicMapCellHistory, geographicMapCellPositionBasicArrayList: BasicArrayList){
}


                //@Throws(Exception.constructor)
            
    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getTopLeftGeographicMapCellPosition(): GeographicMapCellPosition{



                            throw new RuntimeException();
                    
}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public setClosestGeographicMapCellHistory(pathsList: BasicArrayList){
}


    public teleportTo(geographicMapCellPosition: GeographicMapCellPosition){
}


                //@Throws(Exception.constructor)
            
    public setLoad(resource: number){
}


                //@Throws(Exception.constructor)
            
    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public trackTo(reason: string){
}


                //@Throws(Exception.constructor)
            
    public trackToDXY(dx: number, dy: number){
}


    public isWaypointListEmptyOrOnlyTargets(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getTrackingEvent(): TrackingEvent{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public buildingChase(allbinaryLayer: AllBinaryLayer, cellPosition: GeographicMapCellPosition): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public allStop(){
}


    public implmentsTickableInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public implmentsGameInputInterface(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getRootName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rootName;
    
}


    public getRotationAnimationInterface(): RotationAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.indexedButShouldBeRotationAnimationInterface as RotationAnimation;
    
}


    public setFrame(index: number){
this.getRotationAnimationInterface()!.setFrame(index);
    
}


    public setRotationAnimationInterface(rotationAnimationInterface: RotationAnimation){
this.indexedButShouldBeRotationAnimationInterface= rotationAnimationInterface;
    
}


}
                
            

