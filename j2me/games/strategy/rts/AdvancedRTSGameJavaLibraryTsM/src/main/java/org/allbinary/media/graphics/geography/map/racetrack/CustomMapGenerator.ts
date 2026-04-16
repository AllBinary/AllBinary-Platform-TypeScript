
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { AdvancedRTSGameLayer } from "../../../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { WaypointLayer } from "../../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js";

    
import { CellPosition } from "../../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { AllBinaryLayer } from "../../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { DropCellPositionHistory } from "../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js";

    

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

import {  } from "./.js";

export class CustomMapGenerator extends CustomMapGeneratorBase {
        

    private readonly customMapArray: number[][]

    private readonly raceTrackGeographicMap: RaceTrackGeographicMap

    private readonly geographicMapCellTypeFactory: GeographicMapCellTypeFactory
public constructor (raceTrackGeographicMap: RaceTrackGeographicMap){

            super();
                //var raceTrackGeographicMap = raceTrackGeographicMap
this.raceTrackGeographicMap= raceTrackGeographicMap;
    
this.geographicMapCellTypeFactory= this.raceTrackGeographicMap!.getGeographicMapCellTypeFactory();
    

    var mapArray: number[][] = raceTrackGeographicMap!.getRaceTrackData()!.getMapArray()!;
        
        
;
    

    var size2: number = mapArray[0]!.length
                ;
        
        
;
    
this.customMapArray= new Array(mapArray!.length) [size2];
    

                        if(mapArray!.length != this.customMapArray!.length || mapArray[0]!.length != this.customMapArray[0]!.length)
                        
                                    {
                                    


                            throw new Error("Array Incorrect")

                                    }
                                
}


                //@Throws(Error::class)
            
    public copyMapIntoCustomMap(){

    var mapArray: number[][] = raceTrackGeographicMap!.getRaceTrackData()!.getMapArray()!;
        
        
;
    

    var startIndex2: number = mapArray[0]!.length -1;
        
        
;
    




                        for (
    var index: number = mapArray!.length -1;
        
        
index >= 0; index--)
        {




                        for (
    var index2: number = startIndex2;
        
        
index2 >= 0; index2--)
        {
this.customMapArray[index]![index2]= this.getCustomType(index2, index, mapArray[index]![index2]!);
    
}

}

}


    private readonly dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getCustomType(column: number, row: number, currentType: number): number{
    //var column = column
    //var row = row
    //var currentType = currentType

    var emptyType: number = geographicMapCellTypeFactory!.getEmptyType()!;
        
        
;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.raceTrackGeographicMap!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var cellPosition: CellPosition = geographicMapCellPositionFactory!.getInstance(column, row)!;
        
        
;
    

                        if(dropCellPositionHistory!.isCellPositionWithDrop(cellPosition))
                        
                                    {
                                    
    var layer: AllBinaryLayer = dropCellPositionHistory!.getLayerInterface(cellPosition)!;
        
        
;
    

                        if(layer == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyType;
    

                                    }
                                

    var rtsLayer: AdvancedRTSGameLayer = layer as AdvancedRTSGameLayer;
        
        
;
    

                        if(!(rtsLayer!.getType() == WaypointLayer.getStaticType()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyType;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentType;
    
}


    public getCustomMapArray(): number[][]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customMapArray;
    
}


}
                
            

