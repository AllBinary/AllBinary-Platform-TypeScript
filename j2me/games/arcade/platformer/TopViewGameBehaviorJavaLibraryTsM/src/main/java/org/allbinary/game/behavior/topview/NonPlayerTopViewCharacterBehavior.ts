
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { MultiGeographicMapBehavior } from '../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js';
//not GWT import const MultiGeographicMapBehavior = globalThis.org.allbinary.media.graphics.geography.map.MultiGeographicMapBehavior;

      
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
import { BasicTerrainInfo } from '../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
//not GWT import const BasicTerrainInfo = globalThis.org.allbinary.game.terrain.BasicTerrainInfo;

      
import { TerrainEvent } from '../../../../../org/allbinary/game/terrain/TerrainEvent.js';
//not GWT import const TerrainEvent = globalThis.org.allbinary.game.terrain.TerrainEvent;

      
import { TerrainEventCircularStaticPool } from '../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
//not GWT import const TerrainEventCircularStaticPool = globalThis.org.allbinary.game.terrain.TerrainEventCircularStaticPool;

      
import { TerrainEventHandler } from '../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
//not GWT import const TerrainEventHandler = globalThis.org.allbinary.game.terrain.TerrainEventHandler;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TopViewCharacterBehavior } from './TopViewCharacterBehavior.js';
//not GWT import - same folder const TopViewCharacterBehavior = globalThis.org.allbinary.game.behavior.topview.TopViewCharacterBehavior;

                
export class NonPlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
        

    private readonly geographicMapBehavior: MultiGeographicMapBehavior = new MultiGeographicMapBehavior();

    private readonly CLIFF: BasicTerrainInfo = new BasicTerrainInfo(AngleFactory.getInstance()!.DOWN);

                //@Throws(Exception.constructor)
            
    public terrainEvent(layer: AllBinaryLayer, direction: Direction, x: number, y: number, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition){

    var maxColumns: number = geographicMapInterfaceArray[0]!.getAllBinaryTiledLayer()!.getColumns()!;;
    

                        if(geographicMapCellPosition!.getColumn() > 0 && geographicMapCellPosition!.getColumn() < maxColumns)
                        
                                    {
                                    
    var nextTerrainGeographicMapCellPosition: GeographicMapCellPosition = 
                null
            ;;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!;;
    

                        if(direction == DirectionFactory.getInstance()!.LEFT)
                        
                                    {
                                    nextTerrainGeographicMapCellPosition= geographicMapCellPositionFactory!.getAt(geographicMapCellPosition!.getColumn() -1, geographicMapCellPosition!.getRow());
    

                                    }
                                
                             else 
                        if(direction == DirectionFactory.getInstance()!.RIGHT)
                        
                                    {
                                    nextTerrainGeographicMapCellPosition= geographicMapCellPositionFactory!.getAt(geographicMapCellPosition!.getColumn() +1, geographicMapCellPosition!.getRow());
    

                                    }
                                
this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, nextTerrainGeographicMapCellPosition);
    

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

                        if(!hasSolidBlock)
                        
                                    {
                                    
    var terrainEvent: TerrainEvent = TerrainEventCircularStaticPool.getInstance()!.getNext(this.CLIFF)!;;
    
TerrainEventHandler.getInstance(layer)!.fireEvent(terrainEvent);
    

                                    }
                                

                                    }
                                
}


    public terrainMove(layer: AllBinaryLayer, geographicMapInterfaceArray: BasicGeographicMap[], x: number, y: number){
layer.moveDXY(x, y);
    
}


}



