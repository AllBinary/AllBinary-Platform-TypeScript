
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { RTSFormInput } from '../../../../org/allbinary/game/input/form/RTSFormInput.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
import { MultiPlayerGameLayer } from '../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
//not GWT import const MultiPlayerGameLayer = globalThis.org.allbinary.game.multiplayer.layer.MultiPlayerGameLayer;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { NullIndexedAnimationFactory } from '../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;

      
import { CaptionAnimationHelperBase } from '../../../../org/allbinary/animation/caption/CaptionAnimationHelperBase.js';
//not GWT import const CaptionAnimationHelperBase = globalThis.org.allbinary.animation.caption.CaptionAnimationHelperBase;

      
import { DestroyedLayerProcessor } from '../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
//not GWT import const DestroyedLayerProcessor = globalThis.org.allbinary.game.combat.destroy.DestroyedLayerProcessor;

      
import { Health } from '../../../../org/allbinary/game/health/Health.js';
//not GWT import const Health = globalThis.org.allbinary.game.health.Health;

      
import { Group } from '../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { GroupFactory } from '../../../../org/allbinary/game/identification/GroupFactory.js';
//not GWT import const GroupFactory = globalThis.org.allbinary.game.identification.GroupFactory;

      
import { GameInputInterface } from '../../../../org/allbinary/game/input/GameInputInterface.js';
//not GWT import const GameInputInterface = globalThis.org.allbinary.game.input.GameInputInterface;

      
import { GameInputProcessor } from '../../../../org/allbinary/game/input/GameInputProcessor.js';
//not GWT import const GameInputProcessor = globalThis.org.allbinary.game.input.GameInputProcessor;

      
import { GameInputProcessorUtil } from '../../../../org/allbinary/game/input/GameInputProcessorUtil.js';
//not GWT import const GameInputProcessorUtil = globalThis.org.allbinary.game.input.GameInputProcessorUtil;

      
import { GameKeyEventSourceInterface } from '../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
//not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { InputFactory } from '../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
//not GWT import const Waypoint2LogHelper = globalThis.org.allbinary.game.layer.waypoint.Waypoint2LogHelper;

      
import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
//not GWT import const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;

      
import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
//not GWT import const WaypointRunnableLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointRunnableLogHelper;

      
import { TickableInterface } from '../../../../org/allbinary/game/tick/TickableInterface.js';
//not GWT import const TickableInterface = globalThis.org?.allbinary?.game?.tick?.TickableInterface;

      
import { TrackingEvent } from '../../../../org/allbinary/game/tracking/TrackingEvent.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { TileLayerPositionIntoViewPosition } from '../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
import { ViewPositionEventHandler } from '../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
//not GWT import const ViewPositionEventHandler = globalThis.org.allbinary.view.event.ViewPositionEventHandler;

      
import { RemoteInfo } from '../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { LayerDistanceUtil } from '../../../../org/allbinary/math/LayerDistanceUtil.js';
//not GWT import const LayerDistanceUtil = globalThis.org.allbinary.math.LayerDistanceUtil;

      
import { GeographicMapCellHistory } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCompositeInterface } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSInterface } from './RTSInterface.js';
//not GWT import - same folder const RTSInterface = globalThis.org.allbinary.game.layer.RTSInterface;

                import { PathFindingLayerInterface } from './PathFindingLayerInterface.js';
//not GWT import - same folder const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

                import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import - same folder const RTSLayer2LogHelper = globalThis.org.allbinary.game.layer.RTSLayer2LogHelper;

                import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
//not GWT import - same folder const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

                import { GeographicMapCellPositionArea } from './GeographicMapCellPositionArea.js';
//not GWT import - same folder const GeographicMapCellPositionArea = globalThis.org.allbinary.game.layer.GeographicMapCellPositionArea;

                import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
//not GWT import - same folder const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

                import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import - same folder const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

                import { RTSPlayerLayerInterface } from './RTSPlayerLayerInterface.js';
//not GWT import - same folder const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

                import { RTSLayerUtil } from './RTSLayerUtil.js';
//not GWT import - same folder const RTSLayerUtil = globalThis.org.allbinary.game.layer.RTSLayerUtil;

                import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

                import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import - same folder const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

                
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

    readonly hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

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



