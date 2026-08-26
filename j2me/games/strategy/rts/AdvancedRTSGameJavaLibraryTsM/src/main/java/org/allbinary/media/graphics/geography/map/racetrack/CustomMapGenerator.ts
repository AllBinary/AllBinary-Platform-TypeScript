
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { AdvancedRTSGameLayer } from '../../../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
//not game specific package import { WaypointLayer } from '../../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
      const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;

      
//not game specific package import { CellPosition } from '../../../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
//not game specific package import { DropCellPositionHistory } from '../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomMapGeneratorBase } from './CustomMapGeneratorBase.js';
import { RaceTrackGeographicMap } from './RaceTrackGeographicMap.js';

export class CustomMapGenerator extends CustomMapGeneratorBase {
        

    private readonly customMapArray: number[][];

    private readonly raceTrackGeographicMap: RaceTrackGeographicMap;

    private readonly geographicMapCellTypeFactory: GeographicMapCellTypeFactory;

public constructor (raceTrackGeographicMap: RaceTrackGeographicMap){

            super();
        this.raceTrackGeographicMap= raceTrackGeographicMap;
    
this.geographicMapCellTypeFactory= this.raceTrackGeographicMap!.getGeographicMapCellTypeFactory();
    

    var mapArray: number[][] = raceTrackGeographicMap!.getRaceTrackData()!.getMapArray()!;;
    

    var size2: number = mapArray[0]!.length
                ;;
    
this.customMapArray= new Array(mapArray!.length).fill(null).map(() => new Array(size2).fill(0));
    

                        if(mapArray!.length != this.customMapArray!.length || mapArray[0]!.length != this.customMapArray[0]!.length)
                        
                                    {
                                    


                            throw new Exception("Array Incorrect");
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public copyMapIntoCustomMap(){

    var mapArray: number[][] = this.raceTrackGeographicMap!.getRaceTrackData()!.getMapArray()!;;
    

    var startIndex2: number = mapArray[0]!.length -1;;
    




                        for (
    var index: number = mapArray!.length -1;index >= 0; index--)
        {




                        for (
    var index2: number = startIndex2;index2 >= 0; index2--)
        {
this.customMapArray[index]![index2]= this.getCustomType(index2, index, mapArray[index]![index2]!);
    
}

}

}


    private readonly dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getCustomType(column: number, row: number, currentType: number): number{

    var emptyType: number = this.geographicMapCellTypeFactory!.getEmptyType()!;;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.raceTrackGeographicMap!.getGeographicMapCellPositionFactory()!;;
    

    var cellPosition: CellPosition = geographicMapCellPositionFactory!.getAt(column, row)!;;
    

                        if(this.dropCellPositionHistory!.isCellPositionWithDrop(cellPosition))
                        
                                    {
                                    
    var layer: AllBinaryLayer = this.dropCellPositionHistory!.getLayerInterface(cellPosition)!;;
    

                        if(layer == AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return emptyType;
    

                                    }
                                

    var rtsLayer: AdvancedRTSGameLayer = layer as AdvancedRTSGameLayer;;
    

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
                        return this.customMapArray;
    
}


}
                
            

