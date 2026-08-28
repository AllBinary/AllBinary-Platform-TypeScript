
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AdvancedPlayerOwnedRTSLayers } from '../../../../../org/allbinary/game/layer/AdvancedPlayerOwnedRTSLayers.js';
      const AdvancedPlayerOwnedRTSLayers = globalThis.org.allbinary.game.layer.AdvancedPlayerOwnedRTSLayers;

      
//not game specific package import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
//not game specific package import { AdvancedRTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js';
      const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;

      
//not game specific package import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
      const RTSGameStrings = globalThis.org.allbinary.game.layer.RTSGameStrings;

      
//not game specific package import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
//not game specific package import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
//not game specific package import { Capital } from '../../../../../org/allbinary/game/layer/capital/Capital.js';
      const Capital = globalThis.org.allbinary.game.layer.capital.Capital;

      
//not game specific package import { UnitLayer } from '../../../../../org/allbinary/game/layer/unit/UnitLayer.js';
      const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;

      
//not game specific package import { WorkWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js';
      const WorkWaypoint = globalThis.org.allbinary.game.layer.waypoint.WorkWaypoint;

      
//not game specific package import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
      const BuildingSound = globalThis.org.allbinary.media.audio.BuildingSound;

      
//not game specific package import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { GeographicMapCellPositionAreaBase } from '../../../../../org/allbinary/game/layer/GeographicMapCellPositionAreaBase.js';
      const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;

      
//not game specific package import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
      const Layer = globalThis.org.allbinary.layer.Layer;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
      const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';
import { AssignWaypointsUtil } from './AssignWaypointsUtil.js';
import { PlayersSingletonFactory } from './PlayersSingletonFactory.js';

export class UnitRTSFormInput extends RTSFormInput {
        

    public static readonly DECAL_ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(23)!;

    readonly noMoneyGameNotificationEvent: GameNotificationEvent;

    readonly newUnitGameNotificationEvent: GameNotificationEvent;

public constructor (groupInterface: Group[]){
            super(groupInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.noMoneyGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NO_MONEY, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.newUnitGameNotificationEvent= new GameNotificationEvent(this, RTSGameStrings.getInstance()!.NEW_UNIT, smallIntegerSingletonFactory!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
this.getHashtable()!.put(WorkWaypoint.ID, smallIntegerSingletonFactory!.getAt(50));
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.noMoneyGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
this.newUnitGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


                //@Throws(Exception.constructor)
            
    public processGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, itemIndex: number){
super.process(layerManager);
    

    var associatedRtsLayer2: RTSLayer = associatedRtsLayer as RTSLayer;;
    

    var geographicMapCellPositionArea: GeographicMapCellPositionAreaBase = associatedRtsLayer2!.geographicMapCellPositionAreaBase;;
    

    var geographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPositionArea!.getNextSurroundingGeographicMapCellPosition()!;;
    
this.getHashtable()!.put(Layer.ID, associatedRtsLayer);
    
this.getHashtable()!.put(UnitRTSFormInput.DECAL_ID, (rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface).getDecalBasicColor());
    

                        if(this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    this.newUnconstructedRTSLayerInterfaceArray[itemIndex]= this.getInstance(layerManager, item, geographicMapCellPosition);
    

                                    }
                                
                        else {
                            
    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;;
    

    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;;
    
rtsLayer!.setPosition(cellPoint!.getX(), cellPoint!.getY(), rtsLayer!.getZP());
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = rtsLayer!.allBinaryGameLayerManagerP as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
rtsLayer!.geographicMapCellPositionAreaBase!.update(geographicMapInterface);
    

                        }
                            

    var cellPoint: GPoint = geographicMapCellPosition!.getMidPoint()!;;
    

    var rtsLayer: RTSLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex]! as RTSLayer;;
    
rtsLayer!.setPosition(cellPoint!.getX() -rtsLayer!.getHalfWidth(), cellPoint!.getY() -rtsLayer!.getHalfHeight(), rtsLayer!.getZP());
    
this.attemptBuild(associatedRtsLayer2, rtsPlayerLayerInterface, layerManager, rtsLayer as RTSLayer, itemIndex);
    
}


                //@Throws(Exception.constructor)
            
    attemptBuild(associatedRtsLayer: RTSLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer, itemIndex: number){

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
    
rtsPlayerLayerInterface!.add(BuildingSound.getInstance());
    
capital.removeMoney(cost);
    
AssignWaypointsUtil.getInstance()!.set(layerInterface as UnitLayer, associatedRtsLayer as AdvancedRTSGameLayer);
    
layerManager!.appendAt(layerInterface, PlayersSingletonFactory.total);
    

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;;
    

    var advancedPlayerOwnedRTSLayers: AdvancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface!.getAdvancedPlayerOwnedRTSLayers()!;;
    
advancedPlayerOwnedRTSLayers!.addUnit(layerInterface);
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.newUnitGameNotificationEvent);
    

                                    }
                                

                                    }
                                
                        else {
                            rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.noMoneyGameNotificationEvent);
    

                                    }
                                

                        }
                            
}


}



