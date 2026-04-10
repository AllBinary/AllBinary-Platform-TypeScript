
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
        



import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { AllBinaryGameLayerManager } from "../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { AllBinaryLayerManager } from "../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellHistory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { BaseDropCellPositionGenerator } from "../../../../../../../../org/allbinary/media/graphics/geography/map/drop/BaseDropCellPositionGenerator.js";

    
import { BaseRaceTrackGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js";

    
import { NullRaceTrackGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/NullRaceTrackGeographicMap.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { RaceTrackGeographicMapCellTypeFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js";

    
import { RaceTrackGeographicMapInterface } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapInterface.js";

    
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class RaceTrackDropCellPositionGenerator extends BaseDropCellPositionGenerator {
        

    readonly list: BasicArrayList = new BasicArrayList();
        
        

    private readonly timeDelayHelper: TimeDelayHelper

    private readonly STRAIGHTAWAY: number = 4;
        
        

    raceTrackGeographicMap: RaceTrackGeographicMapInterface = NullRaceTrackGeographicMap.NULL_RACE_TRACK_GEOGRAPHIC_MAP;
        
        

    raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;
        
        
protected constructor (){

            super();
            timeDelayHelper= TimeDelayHelper(10000)
}


    init(){
clear()
}


                @Throws(Exception::class)
            
    public isDropAllowedAt(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType = raceTrackGeographicMap!.getCellTypeAt(geographicMapCellPosition) as RaceTrackGeographicMapCellType;
        
        


    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = this.raceTrackGeographicMapCellTypeFactory as RaceTrackGeographicMapCellTypeFactory;
        
        


    
                        if(raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory!.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE || raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory!.VERTICAL_STRAIGHT_ROAD_CELL_TYPE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var geographicMapInterface = geographicMapInterface
this.init()

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = geographicMapInterface as BaseRaceTrackGeographicMap;
        
        

this.raceTrackGeographicMap= baseRaceTrackGeographicMap
this.raceTrackGeographicMapCellTypeFactory= baseRaceTrackGeographicMap!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory

    var roadGeographicMapCellHistory: GeographicMapCellHistory = RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!;
        
        


    var trackedList: BasicArrayList = roadGeographicMapCellHistory!.getTracked()!;
        
        


    var geographicMapCellPosition: GeographicMapCellPosition


    var lastIndex: number = trackedList!.size() -1;
        
        


    var total: number= 0


    var ahead: number= 0





                        for (
    var index: number = lastIndex;
        
        
index > 0; index--)
        {
geographicMapCellPosition= trackedList!.get(index) as GeographicMapCellPosition
total= 0
ahead= index

        while(this.isDropAllowedAt(trackedList!.get(ahead) as GeographicMapCellPosition))
        {
total++

    
                        if(total > STRAIGHTAWAY)
                        
                                    {
                                    add(geographicMapCellPosition)
break;

                    

                                    }
                                
ahead++

    
                        if(ahead > lastIndex)
                        
                                    {
                                    break;

                    

                                    }
                                
}

}


    var size: number = this.list.size()!;
        
        





                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
this.drop(allBinaryGameLayerManager, index)
}

}


    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager

    
                        if(timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime))
                        
                                    {
                                    
    var index: number = basicArrayListUtil!.getRandomIndex(this.list)!;
        
        

this.drop(allBinaryLayerManager, index)

                                    }
                                
}


                @Throws(Exception::class)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){
    //var allBinaryLayerManager = allBinaryLayerManager
    //var index = index



                            throw Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED)
}


}
                
            

