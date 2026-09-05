
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
        
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { ExplosionBasicSound } from '../../../../../org/allbinary/ag/weapon/media/audio/ExplosionBasicSound.js';
      //not GWT import const ExplosionBasicSound = globalThis.org.allbinary.ag.weapon.media.audio.ExplosionBasicSound;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
      //not GWT import const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;

      
import { GroupFactory } from '../../../../../org/allbinary/game/identification/GroupFactory.js';
      //not GWT import const GroupFactory = globalThis.org.allbinary.game.identification.GroupFactory;

      
import { NullRTSFormInputFactory } from '../../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
      //not GWT import const NullRTSFormInputFactory = globalThis.org.allbinary.game.input.form.NullRTSFormInputFactory;

      
import { RTSFormInput } from '../../../../../org/allbinary/game/input/form/RTSFormInput.js';
      //not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

      
import { VisibleCellPositionsSingleton } from '../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js';
      //not GWT import const VisibleCellPositionsSingleton = globalThis.org.allbinary.game.input.form.VisibleCellPositionsSingleton;

      
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { AdvancedRTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js';
      //not GWT import const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;

      
import { AdvancedRTSProperties } from '../../../../../org/allbinary/game/layer/AdvancedRTSProperties.js';
      //not GWT import const AdvancedRTSProperties = globalThis.org.allbinary.game.layer.AdvancedRTSProperties;

      
import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
      //not GWT import const CollidableRTSBehavior = globalThis.org.allbinary.game.layer.CollidableRTSBehavior;

      
import { RTSLayerUtil } from '../../../../../org/allbinary/game/layer/RTSLayerUtil.js';
      //not GWT import const RTSLayerUtil = globalThis.org.allbinary.game.layer.RTSLayerUtil;

      
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { SelectionHudPaintable } from '../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
      //not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;

      
import { Waypoint } from '../../../../../org/allbinary/game/layer/waypoint/Waypoint.js';
      //not GWT import const Waypoint = globalThis.org.allbinary.game.layer.waypoint.Waypoint;

      
import { TileLayerPositionIntoViewPosition } from '../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
      //not GWT import const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;

      
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
      //not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { AnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      //not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { ProceduralAnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js';
      //not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;

      
import { RotationAnimationInterfaceCompositeInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
      //not GWT import const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;

      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
      //not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
      //not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;

      
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
      //not GWT import const Health = globalThis.org.allbinary.game.health.Health;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { GeographicMapCellPositionAreaBase } from '../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js';
      //not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

      
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
      //not GWT import const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;

      
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      //not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      //not GWT import const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
import { TrackingEventListenerInterface } from '../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js';
      //not GWT import const TrackingEventListenerInterface = globalThis.org.allbinary.game.tracking.TrackingEventListenerInterface;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
      //not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;

      
import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
      //not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapDirectionUtil } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
      //not GWT import const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;

      
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      //not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayListS } from '../../../../../org/allbinary/util/BasicArrayListS.js';
      const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;

      
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
      //not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;

      
//not plain js import { ABHashtable } from '../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimulatedBuildingPropertiesFactory } from './SimulatedBuildingPropertiesFactory.js';
//not GWT import const SimulatedBuildingPropertiesFactory = globalThis.org.allbinary.game.layer.building.SimulatedBuildingPropertiesFactory;

                import { BuildingPropertiesFactory } from './BuildingPropertiesFactory.js';
//not GWT import const BuildingPropertiesFactory = globalThis.org.allbinary.game.layer.building.BuildingPropertiesFactory;

                import { BuildingInfoHudPaintable } from './BuildingInfoHudPaintable.js';
//not GWT import const BuildingInfoHudPaintable = globalThis.org.allbinary.game.layer.building.BuildingInfoHudPaintable;

                
export class BuildingLayer extends AdvancedRTSGameLayer implements RotationAnimationInterfaceCompositeInterface, TrackingEventListenerInterface {
        

                //@Throws(Exception.constructor)
            
    public static createSimulated(): BuildingLayer{

    var nullAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance()!;;
    

    var nullIndexedAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BuildingLayer(RemoteInfo.REMOTE_INFO, SimulatedBuildingPropertiesFactory.getInstance(), AdvancedRTSProperties.createPropertiesSimulated(), GroupFactory.getInstance()!.NULL_GROUP_ARRAY, StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0);
    
}


    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 2;
    
}


    private buildingLevelCost: number= 0;

    private productivity: number= 0;

    private efficiency: number;

    private efficiencyPerLevel: number;

    private readonly trackingEvent: TrackingEvent;

    private readonly damageFloaters: DamageFloaters;

    private readonly damageFloatersPaintableInterface: Paintable;

    private readonly healthBar: Paintable;

    private readonly pathsHashtable: ABHashtable;

public constructor (remoteInfo: RemoteInfo, buildingPropertiesFactory: BuildingPropertiesFactory, advancedRTSProperties: AdvancedRTSProperties, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number){
            super(remoteInfo, NullPathFindingLayer.NULL_PATH_FINDING_LAYER, advancedRTSProperties, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, new TileLayerPositionIntoViewPosition());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableRTSBehavior(true));
    
this.getWaypointBehavior()!.setWaypoint(new Waypoint(this, SelectSound.getInstance()));
    
this.damageFloaters= buildingPropertiesFactory!.getDamageFloaters(this);
    
this.damageFloatersPaintableInterface= buildingPropertiesFactory!.damageFloatersPaintableInterface;
    
this.healthBar= buildingPropertiesFactory!.getHealthBar(this);
    
this.pathsHashtable= buildingPropertiesFactory!.getHashtable();
    
this.setMaxLevel(30);
    
this.setProductivity(1);
    
this.setEfficiency(this.calculateEfficiency());
    
this.efficiencyPerLevel= buildingPropertiesFactory!.getEfficiencyPerLevel(this);
    
this.efficiency= this.efficiencyPerLevel;
    
this.generateMoveOutOfBuildAreaPaths();
    
this.trackingEvent= buildingPropertiesFactory!.getTrackingEvent(this);
    
}


    local: boolean= false;

    initVisibility(rtsPlayerLayerInterface: RTSPlayerLayerInterface){

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;;
    

                        if(advancedRTSPlayerLayerInterface!.isLocalPlayer())
                        
                                    {
                                    this.local= true;
    
this.addVisibility();
    

                                    }
                                
                        else {
                            this.local= false;
    

                        }
                            
super.initVisibility(rtsPlayerLayerInterface);
    
}


                //@Throws(Exception.constructor)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
super.construct(rtsPlayerLayerInterface);
    
TrackingEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public onMovement(trackingEvent: TrackingEvent){

        try {
            
    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface() as AdvancedRTSGameLayer;;
    

                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    layerInterface!.onMovementFound(this.trackingEvent);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onMovement", e);
    
}

}


    readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(3000);

                //@Throws(Exception.constructor)
            
    public processBuiltTick(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.getHealthInterface()!.isDamaged())
                        
                                    {
                                    this.setAnimationInterface(this.destroyAnimationInterface);
    

                                    }
                                

                        if(!this.getHealthInterface()!.isAlive())
                        
                                    {
                                    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var currentFrame: number = this.destroyAnimationInterface!.getFrame()!;;
    

    var size: number = this.destroyAnimationInterface!.getSize() -1;;
    

                        if(currentFrame == size && !this.timeDelayHelper!.isTimeTNT())
                        
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
    
this.timeDelayHelper!.setStartTimeTNT();
    
this.setReadyForExplosion(true);
    

                        }
                            

                                    }
                                
                        else {
                            super.processBuiltTick(allBinaryLayerManager);
    

                        }
                            
this.indexedButShouldBeRotationAnimationInterface!.nextFrame();
    
}


    calculateEfficiency(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.efficiencyPerLevel;
    
}


    public getCost(): number{

    var total: number = RTSLayerUtil.getInstance()!.getCostExponential((this.getLevel() *this.getBuildingLevelCost()))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(total);
    
}


    public getDowngradeCost(): number{

    var downgradeCost: number = RTSLayerUtil.getInstance()!.getCostExponential(((this.getLevel() -1) *this.getBuildingLevelCost()))!;;
    
this.logUtil!.putF("Cost: " +downgradeCost, this, "getDowngradeCost");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(downgradeCost) *9 /10;
    
}


    public getUpgradeCost(): number{

    var upgradeCost: number = RTSLayerUtil.getInstance()!.getCostExponential(((this.getLevel() +1) *this.getBuildingLevelCost()))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(upgradeCost);
    
}


    public downgrade(){
super.downgrade();
    
this.setProductivity(this.getProductivity() -1);
    
this.setEfficiency(this.getEfficiency() -this.calculateEfficiency());
    
this.getHealthInterface()!.setMaxHealth(this.getHealthInterface()!.getMaxHealth() -((this.getLevel() +1) *100));
    
}


    public upgrade(){
super.upgrade();
    
this.setProductivity(this.getProductivity() +1);
    
this.setEfficiency(this.getEfficiency() +this.calculateEfficiency());
    
this.getHealthInterface()!.setMaxHealth(this.getHealthInterface()!.getMaxHealth() +(this.getLevel() *100));
    
}


    getBuildingLevelCost(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.buildingLevelCost;
    
}


    setBuildingLevelCost(buildingLevelCost: number){
this.buildingLevelCost= buildingLevelCost;
    
}


    public getProductivity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.productivity;
    
}


    public setProductivity(productivity: number){
this.productivity= productivity;
    
}


    public getEfficiency(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.efficiency;
    
}


    public setEfficiency(efficiency: number){
this.efficiency= efficiency;
    
}


                //@Throws(Exception.constructor)
            
    generateMoveOutOfBuildAreaPaths(){

    var occupyList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;;
    

    var surroundList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList()!;;
    

    var NO_DIRECTION: Direction = DirectionFactory.getInstance()!.NO_DIRECTION;;
    

    var geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;;
    

    var pathsList: BasicArrayList;;
    

    var occupyGeographicMapCellPosition: GeographicMapCellPosition;;
    

    var surroundGeographicMapCellPosition: GeographicMapCellPosition;;
    

    var list: BasicArrayList;;
    




                        for (
    var index2: number = occupyList!.size() -1;index2 >= 0; index2--)
        {
pathsList= new BasicArrayListD();
    
occupyGeographicMapCellPosition= occupyList!.get(index2) as GeographicMapCellPosition;
    




                        for (
    var index: number = surroundList!.size() -1;index >= 0; index--)
        {
surroundGeographicMapCellPosition= surroundList!.get(index) as GeographicMapCellPosition;
    

                        if(geographicMapDirectionUtil!.getEightDirectionFromCellPositionToAdjacentCellPosition(surroundGeographicMapCellPosition, occupyGeographicMapCellPosition) != NO_DIRECTION)
                        
                                    {
                                    list= new BasicArrayListS(1);
    
list.add(surroundGeographicMapCellPosition);
    
pathsList!.add(list);
    

                                    }
                                
}

this.pathsHashtable!.put(occupyGeographicMapCellPosition, pathsList);
    
}

}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{

    var pathsList: BasicArrayList = this.pathsHashtable!.get(geographicMapCellPosition) as BasicArrayList;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathsList;
    
}


    public getEndGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList();;
    
}


    public shouldHandleStartSameAsEnd(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public paint(graphics: Graphics){

                        if(this.isVisible())
                        
                                    {
                                    super.paint(graphics);
    
this.damageFloatersPaintableInterface!.paint(graphics);
    
this.healthBar!.paint(graphics);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public damage(damage: number, damageType: number){
super.damage(damage, damageType);
    
this.damageFloaters!.add(damage);
    

                        if(damage > 0)
                        this.getHealthInterface()!.damage(damage)
}


                //@Throws(Exception.constructor)
            
    public getDamage(damageType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public addVisibility(){

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = this.geographicMapCellPositionAreaBase;;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    
VisibleCellPositionsSingleton.getInstance()!.addStationaryCellPositions(occupyList);
    

    var surroundList: BasicArrayList = geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()!;;
    
VisibleCellPositionsSingleton.getInstance()!.addStationaryCellPositions(surroundList);
    
}


    public removeVisibility(){

    var occupyList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;;
    
VisibleCellPositionsSingleton.getInstance()!.removeStationaryCellPositions(occupyList);
    

    var surroundList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList()!;;
    
VisibleCellPositionsSingleton.getInstance()!.removeStationaryCellPositions(surroundList);
    
}


                //@Throws(Exception.constructor)
            
    public setDestroyed(destroyed: boolean){
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    DropCellPositionHistory.getInstance()!.removeAll(this);
    
TrackingEventHandler.getInstance()!.removeListener(this);
    

                        if(this.local)
                        
                                    {
                                    this.removeVisibility();
    

                                    }
                                

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


    public createHudPaintable(): SelectionHudPaintable{

    var buildingInfoHudPaintable: BuildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance()!;;
    
buildingInfoHudPaintable!.setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor());
    
buildingInfoHudPaintable!.setRtsLayer(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingInfoHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var buildingInfoHudPaintable: BuildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingInfoHudPaintable;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BuildingLayer.getStaticType();;
    
}


}



