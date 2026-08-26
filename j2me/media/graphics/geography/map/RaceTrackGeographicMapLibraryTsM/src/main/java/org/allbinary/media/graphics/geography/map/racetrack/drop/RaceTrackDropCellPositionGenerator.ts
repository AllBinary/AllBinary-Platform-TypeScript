
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
        
//not game specific package import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { BasicArrayListUtil } from '../../../../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
//not game specific package import { BaseDropCellPositionGenerator } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/BaseDropCellPositionGenerator.js';
      const BaseDropCellPositionGenerator = globalThis.org.allbinary.media.graphics.geography.map.drop.BaseDropCellPositionGenerator;

      
//not game specific package import { BaseRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
      const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
//not game specific package import { NullRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/NullRaceTrackGeographicMap.js';
      const NullRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.NullRaceTrackGeographicMap;

      
//not game specific package import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
//not game specific package import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
      const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
//not game specific package import { RaceTrackGeographicMapInterface } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapInterface.js';
      const RaceTrackGeographicMapInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapInterface;

      
//not game specific package import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
      const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
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
                
            

