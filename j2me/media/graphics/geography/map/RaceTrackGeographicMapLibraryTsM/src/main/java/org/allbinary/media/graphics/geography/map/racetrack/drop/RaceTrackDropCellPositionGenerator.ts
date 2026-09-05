
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
import { BaseDropCellPositionGenerator } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/BaseDropCellPositionGenerator.js';
//not GWT import const BaseDropCellPositionGenerator = globalThis.org.allbinary.media.graphics.geography.map.drop.BaseDropCellPositionGenerator;

      
import { BaseRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
//not GWT import const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
import { NullRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/NullRaceTrackGeographicMap.js';
//not GWT import const NullRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.NullRaceTrackGeographicMap;

      
import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
//not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
import { RaceTrackGeographicMapInterface } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapInterface.js';
//not GWT import const RaceTrackGeographicMapInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapInterface;

      
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RaceTrackDropCellPositionGenerator extends BaseDropCellPositionGenerator {
        

    readonly list: BasicArrayList = new BasicArrayListD();

    private readonly timeDelayHelper: TimeDelayHelper;

    private readonly STRAIGHTAWAY: number = 4;

    raceTrackGeographicMap: RaceTrackGeographicMapInterface = NullRaceTrackGeographicMap.NULL_RACE_TRACK_GEOGRAPHIC_MAP;

    raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;

protected constructor (){

            super();
        this.timeDelayHelper= new TimeDelayHelper(10000);
    
}


    init(){
this.list.clear();
    
}


                //@Throws(Exception.constructor)
            
    public isDropAllowedAt(geographicMapCellPosition: GeographicMapCellPosition): boolean{

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = this.raceTrackGeographicMap!.getCellTypeAt(geographicMapCellPosition) as RaceTrackGeographicMapCellType;;
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = this.raceTrackGeographicMapCellTypeFactory as RaceTrackGeographicMapCellTypeFactory;;
    

                        if(raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory!.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE || raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory!.VERTICAL_STRAIGHT_ROAD_CELL_TYPE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
this.init();
    

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = geographicMapInterface as BaseRaceTrackGeographicMap;;
    
this.raceTrackGeographicMap= baseRaceTrackGeographicMap;
    
this.raceTrackGeographicMapCellTypeFactory= baseRaceTrackGeographicMap!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;
    

    var roadGeographicMapCellHistory: GeographicMapCellHistory = RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!;;
    

    var trackedList: BasicArrayList = roadGeographicMapCellHistory!.getTracked()!;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    

    var lastIndex: number = trackedList!.size() -1;;
    

    var total: number= 0;;
    

    var ahead: number= 0;;
    




                        for (
    var index: number = lastIndex;index > 0; index--)
        {
geographicMapCellPosition= trackedList!.get(index) as GeographicMapCellPosition;
    
total= 0;
    
ahead= index;
    

        while(this.isDropAllowedAt(trackedList!.get(ahead) as GeographicMapCellPosition))
        {
total++;
    

                        if(total > this.STRAIGHTAWAY)
                        
                                    {
                                    this.list.add(geographicMapCellPosition);
    
break;

                    

                                    }
                                
ahead++;
    

                        if(ahead > lastIndex)
                        
                                    {
                                    break;

                    

                                    }
                                
}

}


    var size: number = this.list.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
this.drop(allBinaryGameLayerManager, index);
    
}

}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    
    var index: number = this.basicArrayListUtil!.getRandomIndex(this.list)!;;
    
this.drop(allBinaryLayerManager, index);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){



                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    
}


}



