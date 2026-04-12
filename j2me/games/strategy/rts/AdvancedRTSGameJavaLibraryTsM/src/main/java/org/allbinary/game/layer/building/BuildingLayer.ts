
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { RTSFormInput } from "../../../../../org/allbinary/game/input/form/RTSFormInput.js";

    
import { VisibleCellPositionsSingleton } from "../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js";

    
import { AdvancedRTSGameLayer } from "../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { AdvancedRTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js";

    
import { CollidableRTSBehavior } from "../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js";

    
import { RTSLayerUtil } from "../../../../../org/allbinary/game/layer/RTSLayerUtil.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { SelectionHudPaintable } from "../../../../../org/allbinary/game/layer/SelectionHudPaintable.js";

    
import { Waypoint } from "../../../../../org/allbinary/game/layer/waypoint/Waypoint.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { ProceduralAnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/ProceduralAnimationInterfaceFactoryInterface.js";

    
import { RotationAnimationInterfaceCompositeInterface } from "../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { DamageFloaters } from "../../../../../org/allbinary/game/combat/damage/DamageFloaters.js";

    
import { PtsDamageFloaters } from "../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { BasicHudFactory } from "../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js";

    
import { Health } from "../../../../../org/allbinary/game/health/Health.js";

    
import { HealthBar } from "../../../../../org/allbinary/game/health/HealthBar.js";

    
import { HealthBarTwodAnimation } from "../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { GeographicMapCellPositionAreaBase } from "../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { TrackingEventHandler } from "../../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { TrackingEventListenerInterface } from "../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../../org/allbinary/media/audio/SelectSound.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapDirectionUtil } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { ExplosionBasicSound } from "../../../../../org/allbinary/weapon/media/audio/ExplosionBasicSound.js";

    
import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { NullUtil } from "../../../../../org/allbinary/logic/NullUtil.js";

    

export class BuildingLayer extends AdvancedRTSGameLayer
                , RotationAnimationInterfaceCompositeInterface
                , TrackingEventListenerInterface {
        

    public static getStaticType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 2;
    
}


    private buildingLevelCost: number= 0

    private productivity: number= 0

    private efficiency: number

    private efficiencyPerLevel: number

    private readonly trackingEvent: TrackingEvent

    private readonly damageFloaters: DamageFloaters

    private readonly damageFloatersPaintableInterface: Paintable

    private readonly healthBar: Paintable

    private readonly pathsHashtable: Hashtable<any, any>
public constructor (remoteInfo: RemoteInfo, groupInterface: Group[], rootName: string, name: string, healthInterface: Health, rtsFormInput: RTSFormInput, animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface: ProceduralAnimationInterfaceFactoryInterface, rectangle: Rectangle, x: number, y: number)                        

                            : super(remoteInfo, NullPathFindingLayer.NULL_PATH_FINDING_LAYER, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y){

            super();
                //var remoteInfo = remoteInfo
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
                    
this.setCollidableInferface(new CollidableRTSBehavior(this, true));
    
this.getWaypointBehavior()!.setWaypoint(new Waypoint(this, SelectSound.getInstance()));
    

    var damageFloaters: DamageFloaters = DamageFloaters.getInstance()!;
        
        
;
    

    var damageFloatersPaintableInterface: Paintable = NullPaintable.getInstance()!;
        
        
;
    

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.DAMAGE_FLOATERS))
                        
                                    {
                                    damageFloaters= new PtsDamageFloaters(this);
    
damageFloatersPaintableInterface= damageFloaters;
    

                                    }
                                
                        else {
                            damageFloaters= new DamageFloaters();
    

                        }
                            
this.damageFloaters= damageFloaters;
    
this.damageFloatersPaintableInterface= damageFloatersPaintableInterface;
    

    var healthBar: Paintable = NullPaintable.getInstance()!;
        
        
;
    

                        if(Features.getInstance()!.isFeature(GameFeatureFactory.getInstance()!.HEALTH_BARS))
                        
                                    {
                                    healthBar= new HealthBar(this, this.getHealthInterface(), new HealthBarTwodAnimation(this as AllBinaryLayer, BasicHudFactory.getInstance()!.BOTTOMLEFT),  -1);
    

                                    }
                                
this.healthBar= healthBar;
    
this.pathsHashtable= new Hashtable<any, any>();
    
this.setMaxLevel(30);
    
this.setProductivity(1);
    
this.setEfficiency(this.calculateEfficiency());
    
this.efficiencyPerLevel= 10000 /this.getMaxLevel() +10000 % this.getMaxLevel();
    
this.efficiency= this.efficiencyPerLevel;
    
this.generateMoveOutOfBuildAreaPaths();
    
this.trackingEvent= new TrackingEvent(this);
    
}

public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setCollidableInferface(new CollidableRTSBehavior(this, true));
    
this.getWaypointBehavior()!.setWaypoint(new Waypoint(this, SelectSound.getInstance()));
    
this.efficiencyPerLevel= 0;
    
this.efficiency= 0;
    
this.trackingEvent= new TrackingEvent();
    
this.damageFloaters= DamageFloaters.getInstance();
    
this.damageFloatersPaintableInterface= this.damageFloaters;
    
this.healthBar= NullPaintable.getInstance();
    
this.pathsHashtable= NullUtil.getInstance()!.NULL_TABLE;
    
}


    local: boolean= false

    initVisibility(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;
        
        
;
    

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


                //@Throws(Error::class)
            
    public construct(rtsPlayerLayerInterface: RTSPlayerLayerInterface){
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
super.construct(rtsPlayerLayerInterface);
    
TrackingEventHandler.getInstance()!.addListener(this);
    
}


    public onMovement(trackingEvent: TrackingEvent){
    //var trackingEvent = trackingEvent

        try {
            
    var layerInterface: AdvancedRTSGameLayer = trackingEvent!.getLayerInterface();

                         as AdvancedRTSGameLayer;
        
        
;
    

                        if(layerInterface!.getGroupInterface()[0] != this.getGroupInterface()[0])
                        
                                    {
                                    layerInterface!.onMovementFound(this.trackingEvent);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onMovement", e);
    
}

}


    readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(3000);
        
        

                //@Throws(Error::class)
            
    public processBuiltTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.getHealthInterface()!.isDamaged())
                        
                                    {
                                    this.setAnimationInterface(this.destroyAnimationInterface);
    

                                    }
                                

                        if(!this.getHealthInterface()!.isAlive();

                        )
                        
                                    {
                                    
                        if(this.isReadyForExplosion())
                        
                                    {
                                    
    var currentFrame: number = this.destroyAnimationInterface!.getFrame()!;
        
        
;
    

    var size: number = this.destroyAnimationInterface!.getSize() -1;
        
        
;
    

                        if(currentFrame == size && !this.timeDelayHelper!.isTime();

                        )
                        
                                    {
                                    
                        if(!this.getHealthInterface()!.isAlive();

                        )
                        
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
    
vibration.vibrate(duration, 0, 0);
    
this.timeDelayHelper!.setStartTime();
    
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

    var total: number = RTSLayerUtil.getInstance()!.getCostExponential((this.getLevel() *this.getBuildingLevelCost()).toLong())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total.toInt();
    
}


    public getDowngradeCost(): number{

    var downgradeCost: number = RTSLayerUtil.getInstance()!.getCostExponential(((this.getLevel() -1) *getBuildingLevelCost()).toLong())!;
        
        
;
    
this.logUtil!.putF("Cost: " +downgradeCost, this, "getDowngradeCost");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return downgradeCost.toInt() *9 /10;
    
}


    public getUpgradeCost(): number{

    var upgradeCost: number = RTSLayerUtil.getInstance()!.getCostExponential(((this.getLevel() +1) *getBuildingLevelCost()).toLong())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return upgradeCost.toInt();
    
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
                        return buildingLevelCost;
    
}


    setBuildingLevelCost(buildingLevelCost: number){
var buildingLevelCost = buildingLevelCost
this.buildingLevelCost= buildingLevelCost;
    
}


    public getProductivity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return productivity;
    
}


    public setProductivity(productivity: number){
var productivity = productivity
this.productivity= productivity;
    
}


    public getEfficiency(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return efficiency;
    
}


    public setEfficiency(efficiency: number){
var efficiency = efficiency
this.efficiency= efficiency;
    
}


                //@Throws(Error::class)
            
    generateMoveOutOfBuildAreaPaths(){

    var occupyList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;
        
        
;
    

    var surroundList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList()!;
        
        
;
    

    var NO_DIRECTION: Direction = DirectionFactory.getInstance()!.NO_DIRECTION;
        
        
;
    

    var geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;
        
        
;
    

    var pathsList: BasicArrayList
;
    

    var occupyGeographicMapCellPosition: GeographicMapCellPosition
;
    

    var surroundGeographicMapCellPosition: GeographicMapCellPosition
;
    

    var list: BasicArrayList
;
    




                        for (
    var index2: number = occupyList!.size() -1;
        
        
index2 >= 0; index2--)
        {
pathsList= new BasicArrayList();
    
occupyGeographicMapCellPosition= occupyList!.get(index2);

                         as GeographicMapCellPosition;
    




                        for (
    var index: number = surroundList!.size() -1;
        
        
index >= 0; index--)
        {
surroundGeographicMapCellPosition= surroundList!.get(index);

                         as GeographicMapCellPosition;
    

                        if(geographicMapDirectionUtil!.getEightDirectionFromCellPositionToAdjacentCellPosition(surroundGeographicMapCellPosition, occupyGeographicMapCellPosition) != NO_DIRECTION)
                        
                                    {
                                    list= new BasicArrayList(1);
    
list.add(surroundGeographicMapCellPosition);
    
pathsList!.add(list);
    

                                    }
                                
}

this.pathsHashtable!.put(occupyGeographicMapCellPosition, pathsList);
    
}

}


    public getMoveOutOfBuildAreaPath(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition

    var pathsList: BasicArrayList = this.pathsHashtable!.get(geographicMapCellPosition as Object);

                         as BasicArrayList;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathsList;
    
}


    public getEndGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList();

                        ;
    
}


    public shouldHandleStartSameAsEnd(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics

                        if(this.isVisible())
                        
                                    {
                                    super.paint(graphics);
    
this.damageFloatersPaintableInterface!.paint(graphics);
    
this.healthBar!.paint(graphics);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public damage(damage: number, damageType: number){
    //var damage = damage
    //var damageType = damageType
super.damage(damage, damageType);
    
this.damageFloaters!.add(damage);
    

                        if(damage > 0)
                        this.getHealthInterface()!.damage(damage);

                        
}


                //@Throws(Error::class)
            
    public getDamage(damageType: number): number{
var damageType = damageType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public addVisibility(){

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = this.geographicMapCellPositionAreaBase;
        
        
;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;
        
        
;
    
VisibleCellPositionsSingleton.getInstance()!.addStationaryCellPositions(occupyList);
    

    var surroundList: BasicArrayList = geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()!;
        
        
;
    
VisibleCellPositionsSingleton.getInstance()!.addStationaryCellPositions(surroundList);
    
}


    public removeVisibility(){

    var occupyList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getOccupyingGeographicMapCellPositionList()!;
        
        
;
    
VisibleCellPositionsSingleton.getInstance()!.removeStationaryCellPositions(occupyList);
    

    var surroundList: BasicArrayList = this.geographicMapCellPositionAreaBase!.getSurroundingGeographicMapCellPositionList()!;
        
        
;
    
VisibleCellPositionsSingleton.getInstance()!.removeStationaryCellPositions(surroundList);
    
}


                //@Throws(Error::class)
            
    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
super.setDestroyed(destroyed);
    

                        if(this.isDestroyed())
                        
                                    {
                                    DropCellPositionHistory.getInstance()!.remove(this);
    
TrackingEventHandler.getInstance()!.removeListener(this);
    

                        if(this.local)
                        
                                    {
                                    this.removeVisibility();
    

                                    }
                                

                        if(!this.getHealthInterface()!.isAlive();

                        )
                        
                                    {
                                    
    var damage: number = this.getHealthInterface()!.getMaxHealth()!;
        
        
;
    

                        if(damage > 10)
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.add(ExplosionBasicSound.getInstance());
    

                        if(damage < 100)
                        
                                    {
                                    this.shakeListener!.onSmallShakeEvent();
    
vibration.vibrate(duration, 0, 0);
    

                                    }
                                
                             else 
                        if(damage < 1000)
                        
                                    {
                                    this.shakeListener!.onMediumShakeEvent();
    
vibration.vibrate(duration *2, 0, 0);
    

                                    }
                                
                             else 
                        if(damage < 3000)
                        
                                    {
                                    this.shakeListener!.onLargeShakeEvent();
    
vibration.vibrate(duration *4, 0, 0);
    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                
}


    public createHudPaintable(): SelectionHudPaintable{

    var buildingInfoHudPaintable: BuildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance()!;
        
        
;
    
buildingInfoHudPaintable!.setBasicColorP(this.allBinaryGameLayerManagerP!.getForegroundBasicColor());
    
buildingInfoHudPaintable!.setRtsLayer(this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingInfoHudPaintable;
    
}


    public getHudPaintable(): SelectionHudPaintable{

    var buildingInfoHudPaintable: BuildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buildingInfoHudPaintable;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BuildingLayer.getStaticType();

                        ;
    
}


}
                
            

