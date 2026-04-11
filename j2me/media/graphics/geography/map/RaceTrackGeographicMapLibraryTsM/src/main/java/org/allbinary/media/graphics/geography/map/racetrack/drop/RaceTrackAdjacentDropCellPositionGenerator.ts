
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Direction } from "../../../../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { BasicGroupFactory } from "../../../../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { Group } from "../../../../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { LayerCoveringCellPositionsUtil } from "../../../../../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js";

    
import { GPoint } from "../../../../../../../../org/allbinary/graphics/GPoint.js";

    
import { AllBinaryLayer } from "../../../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapDirectionUtil } from "../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    
import { DropCellPositionGeneratorInterface } from "../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionGeneratorInterface.js";

    
import { DropCellPositionHistory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    
import { BaseRaceTrackGeographicMap } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { RaceTrackGeographicMapCellTypeFactory } from "../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js";

    

export class RaceTrackAdjacentDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
        

    private SINGLETON: RaceTrackAdjacentDropCellPositionGenerator = new RaceTrackAdjacentDropCellPositionGenerator();
        
        

    public static getInstance(): DropCellPositionGeneratorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private readonly layerCoveringCellPositionsUtil: LayerCoveringCellPositionsUtil = LayerCoveringCellPositionsUtil.getInstance()!;
        
        

    private surroundingCellPositions: GeographicMapCellPosition[] = new Array(4);
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    getFirstNonRoadAdjacentCellPosition(column: number, row: number): GeographicMapCellPosition{
    //var column = column
    //var row = row

    var nonRoadGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        
;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.raceTrackGeographicMap!.getGeographicMapCellPositionFactory()!;
        
        
;
    
surroundingCellPositions[0]= geographicMapCellPositionFactory!.getInstance(column, row -1);
    
surroundingCellPositions[1]= geographicMapCellPositionFactory!.getInstance(column, row +1);
    
surroundingCellPositions[2]= geographicMapCellPositionFactory!.getInstance(column -1, row);
    
surroundingCellPositions[3]= geographicMapCellPositionFactory!.getInstance(column +1, row);
    

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = this.raceTrackGeographicMap as BaseRaceTrackGeographicMap;
        
        
;
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = baseRaceTrackGeographicMap!.getGeographicMapCellTypeFactory();

                         as RaceTrackGeographicMapCellTypeFactory;
        
        
;
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType
;
    




                        for (
    var index: number = surroundingCellPositions!.length
                ;
        
        
--index >= 0; )
        {
geographicMapCellPosition= surroundingCellPositions[index]!;
    
raceTrackGeographicMapCellType= raceTrackGeographicMap!.getCellTypeAt(geographicMapCellPosition);

                         as RaceTrackGeographicMapCellType;
    

                        if(!raceTrackGeographicMapCellTypeFactory!.isPath(raceTrackGeographicMapCellType);

                        )
                        
                                    {
                                    nonRoadGeographicMapCellPosition= geographicMapCellPosition;
    
break;

                    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nonRoadGeographicMapCellPosition;
    
}


    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

                //@Throws(Error::class)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var geographicMapInterface = geographicMapInterface
hashtable.put(AllBinaryGameLayerManager.ID, allBinaryGameLayerManager);
    
super.update(allBinaryGameLayerManager, geographicMapInterface);
    
}


    private readonly geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){
    //var allBinaryLayerManager = allBinaryLayerManager
    //var index = index

    var geographicMapCellPosition: GeographicMapCellPosition = this.list.get(index);

                         as GeographicMapCellPosition;
        
        
;
    

    var randomGeographicMapCellPosition: GeographicMapCellPosition = this.getFirstNonRoadAdjacentCellPosition(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow())!;
        
        
;
    

                        if(randomGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;
        
        
;
    

                        if(!dropCellPositionHistory!.isCellPositionWithDrop(geographicMapCellPosition);

                        )
                        
                                    {
                                    
    var direction: Direction = geographicMapDirectionUtil!.getDirectionFromCellPositionToAdjacentCellPosition(randomGeographicMapCellPosition, geographicMapCellPosition)!;
        
        
;
    

    var objectCanBeNull: any? = this.hashtable.get(Group.ID);
        
        
;
    

                        if(objectCanBeNull != 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.hashtable.put(Group.ID, BasicGroupFactory.getInstance()!.NONE_ARRAY);
    

                        }
                            
this.hashtable.put(DirectionFactory.getInstance()!.NAME, direction);
    

    var point: GPoint = randomGeographicMapCellPosition!.getPoint()!;
        
        
;
    

    var x: number = point.getX()!;
        
        
;
    

    var y: number = point.getY()!;
        
        
;
    

    var z: number = point.getZ()!;
        
        
;
    

    var layerInterface: AllBinaryLayer = RaceTrackAdjacentDropLayerFactory.getInstance()!.getRandomInstance()!.getInstance(hashtable, x, y, z)!;
        
        
;
    

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = this.raceTrackGeographicMap as BaseRaceTrackGeographicMap;
        
        
;
    

    var list: BasicArrayList = layerCoveringCellPositionsUtil!.getAll(baseRaceTrackGeographicMap, randomGeographicMapCellPosition, layerInterface, new BasicArrayList())!;
        
        
;
    

                        if(dropCellPositionHistory!.anyCellPositionWithDrop(list))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var geographicMapCellType: GeographicMapCellType
;
    




                        for (
    var index2: number = list.size()!;
        
        
--index2 >= 0; )
        {
geographicMapCellType= this.raceTrackGeographicMap!.getCellTypeAt(list.get(index2);

                         as GeographicMapCellPosition);
    

                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

dropCellPositionHistory!.add(list, layerInterface);
    
allBinaryLayerManager!.append(layerInterface);
    

                                    }
                                
}


}
                
            

