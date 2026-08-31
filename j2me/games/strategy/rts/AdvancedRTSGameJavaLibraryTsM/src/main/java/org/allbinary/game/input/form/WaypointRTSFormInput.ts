
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
        
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { RTSPlayerGameInput } from '../../../../../org/allbinary/game/input/RTSPlayerGameInput.js';
      //not GWT import const RTSPlayerGameInput = globalThis.org.allbinary.game.input.RTSPlayerGameInput;

      
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { AdvancedRTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js';
      //not GWT import const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;

      
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      //not GWT import const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      //not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
import { RTSLayerUtil } from '../../../../../org/allbinary/game/layer/RTSLayerUtil.js';
      //not GWT import const RTSLayerUtil = globalThis.org.allbinary.game.layer.RTSLayerUtil;

      
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { Capital } from '../../../../../org/allbinary/game/layer/capital/Capital.js';
      //not GWT import const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
      //not GWT import const WaypointCellPositionHistory = globalThis.org.allbinary.game.layer.waypoint.WaypointCellPositionHistory;

      
import { WaypointLayer } from '../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
      //not GWT import const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;

      
import { WaypointEventHandlerFactory } from '../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js';
      //not GWT import const WaypointEventHandlerFactory = globalThis.org.allbinary.game.layer.waypoint.event.WaypointEventHandlerFactory;

      
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { GeographicMapCellPositionAreaBase } from '../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js';
      //not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

      
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
      //not GWT import const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;

      
import { NullRTSLayer } from '../../../../../org/allbinary/game/layer/NullRTSLayer.js';
      //not GWT import const NullRTSLayer = globalThis.org.allbinary.game.layer.NullRTSLayer;

      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      //not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      //not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
      //not GWT import const Layer = globalThis.org.allbinary.layer.Layer;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
      //not GWT import const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      //not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      //not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
      //not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

                import { PrimaryWaypointHelper } from './PrimaryWaypointHelper.js';
//not GWT import const PrimaryWaypointHelper = globalThis.org.allbinary.game.input.form.PrimaryWaypointHelper;

                
export class WaypointRTSFormInput extends RTSFormInput {
        

    private readonly WAYPOINT_EVENT: RTSLayerEvent = new RTSLayerEvent(NullRTSLayer.NULL_RTS_LAYER);

    readonly dragToSpotGameNotificationEvent: GameNotificationEvent;

    readonly spotTakenGameNotificationEvent: GameNotificationEvent;

    readonly buildingCollisionGameNotificationEvent: GameNotificationEvent;

    readonly roadCollisionGameNotificationEvent: GameNotificationEvent;

    readonly newWaypointGameNotificationEvent: GameNotificationEvent;

    readonly noMoneyGameNotificationEvent: GameNotificationEvent;

    private isPrimaryWaypointCreator: boolean;

    private stickyAssociatedRtsLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;

public constructor (groupInterface: Group[], isPrimaryWaypointCreator: boolean){
            super(groupInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.isPrimaryWaypointCreator= isPrimaryWaypointCreator;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.dragToSpotGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.DRAG_TO_SPOT, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.spotTakenGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.SPOT_TAKEN, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.buildingCollisionGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING_COLLISION, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.roadCollisionGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.ROAD_COLLISION, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.newWaypointGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NEW_WAYPOINT, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.dragToSpotGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.spotTakenGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.buildingCollisionGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.roadCollisionGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.newWaypointGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Exception.constructor)
            
    public processAtPoint(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){
super.process(layerManager);
    

                        if(this.isStickyItemSelected() || associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    
                        if(this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var x: number = point.getX() +allBinaryTiledLayer!.getXP();;
    

    var y: number = point.getY() +allBinaryTiledLayer!.getYP();;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtXY(x, y)!;;
    
this.processCellPosition(rtsPlayerLayerInterface, layerManager, geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.dragToSpotGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.spotTakenGameNotificationEvent);
    

                                    }
                                

                        }
                            
}


                //@Throws(Exception.constructor)
            
    processCellPosition(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, geographicMapCellPosition: GeographicMapCellPosition){

    var itemIndex: number = this.getSelectedStickyItemIndex()!;;
    

                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, this.getSelectedStickyItem(), geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;;
    

    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;;
    
rtsLayer!.setPosition(cellPoint!.getX(), cellPoint!.getY(), rtsLayer!.getZP());
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = rtsLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
rtsLayer!.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    

                        }
                            
this.attemptBuild(rtsPlayerLayerInterface, layerManager, this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer, itemIndex);
    
}


                //@Throws(Exception.constructor)
            
    public processStickyGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, index: number){
this.logUtil!.putF("Set Sticking Item: " +item, this, "processSticky");
    
this.setSelectedStickyItem(item);
    
this.setSelectedStickyItemIndex(index);
    
this.setStickyItemSelected(true);
    
this.stickyAssociatedRtsLayer= associatedRtsLayer as RTSLayer;
    
this.getHashtable()!.put(Layer.ID, associatedRtsLayer);
    
}


                //@Throws(Exception.constructor)
            
    attemptBuild(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number): boolean{
this.logUtil!.putF("Layer: " +layerInterface, this, "attemptBuild");
    

                        if(layerInterface == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.put("Layer was null", this, "attemptBuild", new Exception());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;;
    

    var list: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    

                        if(DropCellPositionHistory.getInstance()!.anyCellPositionWithDrop(list) || WaypointCellPositionHistory.getInstance()!.anyCellPositionWithDrop(list))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.buildingCollisionGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;;
    

    var geographicMapCellType: GeographicMapCellType;;
    




                        for (
    var index: number = list.size()!;--index >= 0; )
        {
geographicMapCellType= geographicMapInterface!.getCellTypeAt(list.get(index) as GeographicMapCellPosition);
    

                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.roadCollisionGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}


    var cost: number = layerInterface!.getCost()!;;
    

    var capital: Capital = rtsPlayerLayerInterface!.getCapital()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Trying to Build: ");
    
stringBuffer!.append(layerInterface!.getName());
    
stringBuffer!.append(" for: $");
    
stringBuffer!.appendint(cost);
    
stringBuffer!.append(" with ");
    
stringBuffer!.appendint(capital.getTotalMoney());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "attemptBuild");
    

                        if(cost <= capital.getTotalMoney())
                        
                                    {
                                    layerInterface!.construct(rtsPlayerLayerInterface);
    
this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= CollidableDestroyableDamageableLayer.getNullInstance();
    
capital.removeMoney(cost);
    
WaypointCellPositionHistory.getInstance()!.addList(list, layerInterface);
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapInterface!.getCellPositionAtXY(layerInterface!.getXP(), layerInterface!.getYP())!;;
    

    var waypointLayer: WaypointLayer = layerInterface as WaypointLayer;;
    
this.addWayPoint(waypointLayer);
    

    var rtsPlayerGameInput: RTSPlayerGameInput = rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput;;
    
rtsPlayerGameInput!.setSelectedRTSLayer(layerInterface, geographicMapCellPosition);
    

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;;
    
advancedRTSPlayerLayerInterface!.getAdvancedPlayerOwnedRTSLayers()!.addWaypoint(layerInterface);
    
layerManager!.append(layerInterface);
    

    var waypointAvancedRTSGameLayer: AdvancedRTSGameLayer = waypointLayer as AdvancedRTSGameLayer;;
    
rtsPlayerLayerInterface!.add(waypointAvancedRTSGameLayer!.getWaypointBehavior()!.getWaypoint()!.getSound());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.newWaypointGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.noMoneyGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    addWayPoint(layerInterface: WaypointLayer){

    var stickyAssociatedAdvandedRtsLayer: AdvancedRTSGameLayer = this.stickyAssociatedRtsLayer as AdvancedRTSGameLayer;;
    

    var list: BasicArrayList = stickyAssociatedAdvandedRtsLayer!.getWaypointBehavior()!.getOwnedWaypointList()!;;
    
RTSLayerUtil.getInstance()!.destroyAndClear(list);
    
list.add(layerInterface);
    

                        if(this.isPrimaryWaypointCreator)
                        
                                    {
                                    PrimaryWaypointHelper.getInstance()!.setWaypointLayer(layerInterface);
    

                                    }
                                
this.WAYPOINT_EVENT.setRtsLayer(layerInterface);
    
WaypointEventHandlerFactory.getInstance(layerInterface!.getGroupInterface()[0]!)!.fireEvent(this.WAYPOINT_EVENT);
    
}


}



