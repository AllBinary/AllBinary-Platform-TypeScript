
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
        



import { AdvancedPlayerOwnedRTSLayers } from "../../../../../org/allbinary/game/layer/AdvancedPlayerOwnedRTSLayers.js";

    
import { AdvancedRTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/AdvancedRTSPlayerLayerInterface.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSLayerEvent } from "../../../../../org/allbinary/game/layer/RTSLayerEvent.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { BuildingEventHandler } from "../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js";

    
import { LocalPlayerBuildingEventHandler } from "../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js";

    
import { WaypointCellPositionHistory } from "../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { NullPathFindingLayer } from "../../../../../org/allbinary/game/layer/NullPathFindingLayer.js";

    
import { NullRTSLayer } from "../../../../../org/allbinary/game/layer/NullRTSLayer.js";

    
import { GameNotificationEvent } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js";

    
import { GameNotificationEventHandler } from "../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { ErrorSound } from "../../../../../org/allbinary/media/audio/ErrorSound.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { DropCellPositionHistory } from "../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    

export class BuildingAdvancedRTSFormInput extends BuildingRTSFormInput {
        

    readonly atLeastOneHouseGameNotificationEvent: GameNotificationEvent
public constructor (groupInterface: Group[], isUnitProducer: boolean)                        

                            : super(groupInterface, isUnitProducer){

            super();
                //var groupInterface = groupInterface
    //var isUnitProducer = isUnitProducer


                            //For kotlin this is before the body of the constructor.
                    

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

this.atLeastOneHouseGameNotificationEvent= GameNotificationEvent(this, "Build At Least One House First", SmallIntegerSingletonFactory.getInstance()!.getInstance(2), basicColorFactory!.WHITE, BooleanFactory.getInstance()!.FALSE)
}


                @Throws(Exception::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
setAllBinaryGameLayerManager(allBinaryGameLayerManager)

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        


    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        

setBasicColorP(geographicMapInterface!.getForegroundBasicColor())
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


                @Throws(Exception::class)
            
    isBuildAttemptValid(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerInterface: RTSLayer): boolean{
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerInterface = layerInterface

    var advancedRTSPlayerLayerInterface: AdvancedRTSPlayerLayerInterface = rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface;
        
        


    var advancedPlayerOwnedRTSLayers: AdvancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface!.getAdvancedPlayerOwnedRTSLayers()!;
        
        


    var totalHouses: number = advancedPlayerOwnedRTSLayers!.getHouseList()!.size()!;
        
        


    
                        if(totalHouses < 1 && layerInterface!.getName()!.indexOf(" House") < 0)
                        
                                    {
                                    add(ErrorSound.getInstance())

    
                        if(!rtsPlayerLayerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    fireEvent(atLeastOneHouseGameNotificationEvent)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface);
    
}


    private readonly BUILD_BUILDING_RTS_LAYER_EVENT: RTSLayerEvent = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);
        
        

                @Throws(Exception::class)
            
    add(rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, layerInterface: RTSLayer){
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var layerInterface = layerInterface
setRtsLayer(layerInterface)
fireEvent(BUILD_BUILDING_RTS_LAYER_EVENT)

    
                        if(
                                    (rtsPlayerLayerInterface as AdvancedRTSPlayerLayerInterface).isLocalPlayer())
                        
                                    {
                                    fireEvent(BUILD_BUILDING_RTS_LAYER_EVENT)

                                    }
                                
add(rtsPlayerLayerInterface, layerManager, layerInterface)
}


}
                
            

