
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { PathFindingLayerInterface } from "../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventListenerInterface } from "../../../../../org/allbinary/logic/util/event/EventListenerInterface.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { NoSound } from "../../../../../org/allbinary/media/audio/NoSound.js";

    
import { Sound } from "../../../../../org/allbinary/media/audio/Sound.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { MultipassState } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js";

    
import { PathFindingInfo } from "../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WaypointBase
            extends Object
         implements EventListenerInterface {
        

    public NULL_WAYPOINT_BASE: WaypointBase = new WaypointBase(NoSound.getInstance());
        
        

    private readonly connectedWaypointList: BasicArrayList = new BasicArrayListD();
        
        

    private readonly sound: Sound

    allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
        
        
public constructor (sound: Sound){

            super();
            //var sound = sound
this.sound= sound;
    
}


    public getSound(): Sound{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sound;
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager;
    
}


    public getConnectedWaypointList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return connectedWaypointList;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public getPathFindingInfo(geographicMapCellPosition: GeographicMapCellPosition): PathFindingInfo{
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getPathsList(geographicMapCellPosition: GeographicMapCellPosition, pathFindingInfo: PathFindingInfo, multipassState: MultipassState): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition
    //var pathFindingInfo = pathFindingInfo
    //var multipassState = multipassState



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getPathsList(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getPathsListFromCacheOnly(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{
    //var geographicMapCellPosition = geographicMapCellPosition



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public visit(unitLayer: PathFindingLayerInterface){
    //var unitLayer = unitLayer
}


    public reset(){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}
                
            

