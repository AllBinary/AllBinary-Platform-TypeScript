
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { RTSPlayerGameInput } from '../../../../../org/allbinary/game/input/RTSPlayerGameInput.js';
      //not GWT import const RTSPlayerGameInput = globalThis.org.allbinary.game.input.RTSPlayerGameInput;

      
import { DemoLockedWithCostLayerInterfaceFactoryInterface } from '../../../../../org/allbinary/game/layer/DemoLockedWithCostLayerInterfaceFactoryInterface.js';
      //not GWT import const DemoLockedWithCostLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.DemoLockedWithCostLayerInterfaceFactoryInterface;

      
import { GeographicMapCellPositionAreaBase } from '../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js';
      //not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

      
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      //not GWT import const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { Capital } from '../../../../../org/allbinary/game/layer/capital/Capital.js';
      //not GWT import const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
import { LayerInterfaceFactoryImageItem } from '../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js';
      //not GWT import const LayerInterfaceFactoryImageItem = globalThis.org.allbinary.game.layer.item.LayerInterfaceFactoryImageItem;

      
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
      //not GWT import const BuildingSound = globalThis.org.allbinary.media.audio.BuildingSound;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { LockedFeatureNotificationUtil } from '../../../../../org/allbinary/logic/system/security/licensing/LockedFeatureNotificationUtil.js';
      //not GWT import const LockedFeatureNotificationUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedFeatureNotificationUtil;

      
import { LockedUtil } from '../../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
      //not GWT import const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
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

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
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

      
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      //not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      //not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
      //not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;

                
export class BuildingRTSFormInput extends RTSFormInput {
        

    private isUnitProducer: boolean;

    private readonly buildOnPathGameNotificationEvent: GameNotificationEvent;

    private readonly spotTakenGameNotificationEvent: GameNotificationEvent;

    private readonly selectBuildSpotGameNotificationEvent: GameNotificationEvent;

    private readonly roadCollisionGameNotificationEvent: GameNotificationEvent;

    private readonly noMoneyGameNotificationEvent: GameNotificationEvent;

    private readonly buildingCollisionGameNotificationEvent: GameNotificationEvent;

    private readonly structureToCloseCollisionGameNotificationEvent: GameNotificationEvent;

    private readonly buildingGameNotificationEvent: GameNotificationEvent;

    private readonly mapEdgeGameNotificationEvent: GameNotificationEvent;

    private readonly dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;

public constructor (groupInterface: Group[], isUnitProducer: boolean){
            super(groupInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.isUnitProducer= isUnitProducer;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.buildOnPathGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILD_ON_PATH, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.spotTakenGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.SPOT_TAKEN, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.selectBuildSpotGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.SELECT_BUILD_SPOT, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.roadCollisionGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.ROAD_COLLISION, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.buildingCollisionGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING_COLLISION, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.structureToCloseCollisionGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.STRUCTURE_TO_CLOSE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.buildingGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.BUILDING, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
this.mapEdgeGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.MAP_EDGE, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.PINK, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.buildOnPathGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.spotTakenGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.selectBuildSpotGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.roadCollisionGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.buildingCollisionGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.structureToCloseCollisionGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.buildingGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.mapEdgeGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Exception.constructor)
            
    public processGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, itemIndex: number){
super.process(layerManager);
    
this.buildFromMotionInput(rtsPlayerLayerInterface, layerManager, item, itemIndex);
    
}


    public isPositionBlocked(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dropCellPositionHistory!.isCellPositionWithDrop(this.getSelectedGeographicCellPosition());;
    
}


    isDemoLocked(item: ABCustomItem): boolean{

    var factoryItem: LayerInterfaceFactoryImageItem = item as LayerInterfaceFactoryImageItem;;
    

    var layerInterfaceFactoryInterface: DemoLockedWithCostLayerInterfaceFactoryInterface = factoryItem!.getLayerInterfaceFactoryInterface() as DemoLockedWithCostLayerInterfaceFactoryInterface;;
    

                        if(LockedUtil.getInstance()!.isLocked() && layerInterfaceFactoryInterface!.isDemoLocked())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public buildFromMotionInput(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, itemIndex: number){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, "buildFromMotionInput");
    

                        if(layerManager == 
                                    null
                                )
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

                        if(this.isDemoLocked(item))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    
LockedFeatureNotificationUtil.getInstance()!.fireWithColor(geographicMapInterface!.getForegroundBasicColor());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var geographicMapCellPosition: GeographicMapCellPosition = this.getSelectedGeographicCellPosition()!;;
    

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
                        if(!this.isPositionBlocked())
                        
                                    {
                                    
    var geographicMapCellType: GeographicMapCellType = geographicMapInterface!.getCellTypeAt(geographicMapCellPosition)!;;
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;;
    

                        if(!raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    
                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, item, geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;;
    

    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;;
    
rtsLayer!.setPosition(cellPoint!.getX(), cellPoint!.getY(), cellPoint!.getZ());
    
rtsLayer!.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    

                        }
                            

    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;;
    
this.attemptBuild(rtsPlayerLayerInterface, layerManager, rtsLayer, itemIndex);
    

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.buildOnPathGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.spotTakenGameNotificationEvent);
    

                                    }
                                

                        }
                            

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.selectBuildSpotGameNotificationEvent);
    

                                    }
                                

                        }
                            
}


                //@Throws(Exception.constructor)
            
    attemptBuild(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number): boolean{
this.logUtil!.putF(new StringMaker().append("Layer: ")!.append(StringUtil.getInstance()!.toString(layerInterface))!.toString(), this, "attemptBuild");
    

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    

                        if(!this.isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var geographicMapCellType: GeographicMapCellType;;
    




                        for (
    var index: number = occupyList!.size() -1;index >= 0; index--)
        {

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = layerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
geographicMapCellType= geographicMapInterface!.getCellTypeAt(occupyList!.get(index) as GeographicMapCellPosition);
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;;
    

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
    
this.add(rtsPlayerLayerInterface, layerManager, layerInterface);
    



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
            
    isBuildAttemptValid(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerInterface: RTSLayer): boolean{

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    

                        if(this.dropCellPositionHistory!.anyCellPositionWithDrop(occupyList))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.buildingCollisionGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(this.isUnitProducer && this.dropCellPositionHistory!.anyCellPositionWithDrop(geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.structureToCloseCollisionGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
                        if(this.isSurroundingCellsOffMap(layerInterface))
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.mapEdgeGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    add(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer){

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    
this.dropCellPositionHistory!.addAll(occupyList, layerInterface);
    

    var rtsPlayerGameInput: RTSPlayerGameInput = rtsPlayerLayerInterface!.getPlayerGameInput() as RTSPlayerGameInput;;
    
rtsPlayerGameInput!.setSelectedRTSLayer(layerInterface, this.getSelectedGeographicCellPosition());
    
layerManager!.append(layerInterface);
    
rtsPlayerLayerInterface!.add(BuildingSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.buildingGameNotificationEvent);
    

                                    }
                                
}


    isSurroundingCellsOffMap(layerInterface: RTSLayer): boolean{

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = layerInterface!.geographicMapCellPositionAreaBase;;
    

    var occupyList: BasicArrayList = geographicMapCellPositionArea!.getOccupyingGeographicMapCellPositionList()!;;
    

    var surroundList: BasicArrayList = geographicMapCellPositionArea!.getSurroundingGeographicMapCellPositionList()!;;
    

    var occupySize: number = occupyList!.size()!;;
    

    var surroundSize: number = surroundList!.size()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("occupySize: ");
    
stringBuffer!.appendint(occupySize);
    
stringBuffer!.append(" surroundSize: ");
    
stringBuffer!.appendint(surroundSize);
    
stringBuffer!.append(" surroundList: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(surroundList));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "isSurroundingCellsOffMap");
    

    var isSurroundOffMap: boolean = false;;
    

                        if(occupySize == 1 && surroundSize != 8)
                        
                                    {
                                    isSurroundOffMap= true;
    

                                    }
                                
                             else 
                        if(occupySize == 4 && surroundSize != 12)
                        
                                    {
                                    isSurroundOffMap= true;
    

                                    }
                                

                        if(occupySize == 0 || isSurroundOffMap)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}



