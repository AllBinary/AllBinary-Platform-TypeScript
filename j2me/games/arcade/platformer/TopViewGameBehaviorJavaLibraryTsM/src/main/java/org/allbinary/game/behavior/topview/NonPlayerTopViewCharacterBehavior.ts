
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
        



import { MultiGeographicMapBehavior } from "../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { BasicTerrainInfo } from "../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js";

    
import { TerrainEvent } from "../../../../../org/allbinary/game/terrain/TerrainEvent.js";

    
import { TerrainEventCircularStaticPool } from "../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js";

    
import { TerrainEventHandler } from "../../../../../org/allbinary/game/terrain/TerrainEventHandler.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AngleFactory } from "../../../../../org/allbinary/math/AngleFactory.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    

export class NonPlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
        

    private readonly geographicMapBehavior: MultiGeographicMapBehavior = new MultiGeographicMapBehavior();
        
        

    private readonly CLIFF: BasicTerrainInfo = new BasicTerrainInfo(AngleFactory.getInstance()!.DOWN);
        
        

                //@Throws(Error::class)
            
    public terrainEvent(layer: AllBinaryLayer, direction: Direction, x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition){
    //var layer = layer
    //var direction = direction
    //var x = x
    //var y = y
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var geographicMapCellPosition = geographicMapCellPosition

    var maxColumns: number = geographicMapInterfaceArray[0]!.getAllBinaryTiledLayer()!.getColumns()!;
        
        


                        if(geographicMapCellPosition!.getColumn() > 0 && geographicMapCellPosition!.getColumn() < maxColumns)
                        
                                    {
                                    
    var nextTerrainGeographicMapCellPosition: GeographicMapCellPosition = 
                null
            ;
        
        


    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!;
        
        


                        if(direction == DirectionFactory.getInstance()!.LEFT)
                        
                                    {
                                    nextTerrainGeographicMapCellPosition= geographicMapCellPositionFactory!.getInstance(geographicMapCellPosition!.getColumn() -1, geographicMapCellPosition!.getRow())

                                    }
                                
                             else 
                        if(direction == DirectionFactory.getInstance()!.RIGHT)
                        
                                    {
                                    nextTerrainGeographicMapCellPosition= geographicMapCellPositionFactory!.getInstance(geographicMapCellPosition!.getColumn() +1, geographicMapCellPosition!.getRow())

                                    }
                                
geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, nextTerrainGeographicMapCellPosition)

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;
        
        


                        if(!hasSolidBlock)
                        
                                    {
                                    
    var terrainEvent: TerrainEvent = TerrainEventCircularStaticPool.getInstance()!.getInstance(this.CLIFF)!;
        
        

TerrainEventHandler.getInstance(layer)!.fireEvent(terrainEvent)

                                    }
                                

                                    }
                                
}


    public terrainMove(layer: AllBinaryLayer, geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){
    //var layer = layer
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var x = x
    //var y = y
layer.move(x, y)
}


}
                
            

