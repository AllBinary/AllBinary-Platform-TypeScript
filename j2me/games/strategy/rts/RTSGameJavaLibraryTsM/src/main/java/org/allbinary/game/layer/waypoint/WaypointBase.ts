
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { PathFindingLayerInterface } from '../../../../../org/allbinary/game/layer/PathFindingLayerInterface.js';
      //not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;

      
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventListenerInterface } from '../../../../../org/allbinary/logic/util/event/EventListenerInterface.js';
      //not GWT import const EventListenerInterface = globalThis.org.allbinary.logic.util.event.EventListenerInterface;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
      //not GWT import const NoSound = globalThis.org.allbinary.media.audio.NoSound;

      
import { Sound } from '../../../../../org/allbinary/media/audio/Sound.js';
      //not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { MultipassState } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js';
      //not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;

      
import { PathFindingInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      //not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WaypointBase
            extends Object
         implements EventListenerInterface {
        

    public static NULL_WAYPOINT_BASE: WaypointBase = new WaypointBase(NoSound.getInstance());

    private readonly connectedWaypointList: BasicArrayList = new BasicArrayListD();

    private readonly sound: Sound;

    allBinaryGameLayerManagerP: AllBinaryGameLayerManager = AllBinaryGameLayerManager.getNullInstance()!;

public constructor (sound: Sound){

            super();
        this.sound= sound;
    
}


    public getSound(): Sound{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.sound;
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
this.allBinaryGameLayerManagerP= allBinaryGameLayerManager;
    
}


    public getConnectedWaypointList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.connectedWaypointList;
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public getPathFindingInfo(geographicMapCellPosition: GeographicMapCellPosition): PathFindingInfo{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getPathsList(geographicMapCellPosition: GeographicMapCellPosition, pathFindingInfo: PathFindingInfo, multipassState: MultipassState): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getPathsListRunnable(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getPathsListFromCacheOnly(geographicMapCellPosition: GeographicMapCellPosition): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public visit(unitLayer: PathFindingLayerInterface){
}


    public reset(){
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


}



