
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
        
//not game specific package import { AdvancedPlayerOwnedRTSLayers } from '../../../../../org/allbinary/game/layer/AdvancedPlayerOwnedRTSLayers.js';
      const AdvancedPlayerOwnedRTSLayers = globalThis.org.allbinary.game.layer.AdvancedPlayerOwnedRTSLayers;

      
//not game specific package import { AdvancedRTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js';
      const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;

      
//not game specific package import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
//not game specific package import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
      const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;

      
//not game specific package import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
//not game specific package import { BuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
      const BuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.BuildingEventHandler;

      
//not game specific package import { LocalPlayerBuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js';
      const LocalPlayerBuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.LocalPlayerBuildingEventHandler;

      
//not game specific package import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
      const WaypointCellPositionHistory = globalThis.org.allbinary.game.layer.waypoint.WaypointCellPositionHistory;

      
//not game specific package import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
      const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;

      
//not game specific package import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
      const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
      const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not game specific package import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BuildingRTSFormInput } from './BuildingRTSFormInput.js';

export class BuildingAdvancedRTSFormInput extends BuildingRTSFormInput {
        

    readonly atLeastOneHouseGameNotificationEvent: GameNotificationEvent;

public constructor (groupInterface: Group[], isUnitProducer: boolean){
            super(groupInterface, isUnitProducer);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    
this.atLeastOneHouseGameNotificationEvent= new GameNotificationEvent(this, "Build At Least One House First", SmallIntegerSingletonFactory.getInstance()!.getAt(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.atLeastOneHouseGameNotificationEvent!.setBasicColorP(geographicMapInterface!.getForegroundBasicColor());
    
}


    public isPositionBlocked(): boolean{

                        if(DropCellPositionHistory.getInstance()!.isCellPositionWithDrop(this.getSelectedGeographicCellPosition()) || WaypointCellPositionHistory.getInstance()!.isCellPositionWithDrop(this.getSelectedGeographicCellPosition()))
                        
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
            
    isBuildAttemptValid(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerInterface: RTSLayer): boolean{

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;;
    

    var advancedPlayerOwnedRTSLayers: AdvancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface!.getAdvancedPlayerOwnedRTSLayers()!;;
    

    var totalHouses: number = advancedPlayerOwnedRTSLayers!.getHouseList()!.size()!;;
    

                        if(totalHouses < 1 && layerInterface!.getName()!.indexOf(" House") < 0)
                        
                                    {
                                    rtsPlayerLayerInterface!.add(ErrorSound.getInstance());
    

                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    GameNotificationEventHandler.getInstance()!.fireEvent(this.atLeastOneHouseGameNotificationEvent);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface);;
    
}


    private readonly BUILD_BUILDING_RTS_LAYER_EVENT: RTSLayerEvent = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);

                //@Throws(Exception.constructor)
            
    add(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer){
this.BUILD_BUILDING_RTS_LAYER_EVENT.setRtsLayer(layerInterface);
    
BuildingEventHandler.getInstance()!.fireEvent(this.BUILD_BUILDING_RTS_LAYER_EVENT);
    

                        if((rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface).isLocalPlayer())
                        
                                    {
                                    LocalPlayerBuildingEventHandler.getInstance()!.fireEvent(this.BUILD_BUILDING_RTS_LAYER_EVENT);
    

                                    }
                                
super.add(rtsPlayerLayerInterface, layerManager, layerInterface);
    
}


}
                
            

