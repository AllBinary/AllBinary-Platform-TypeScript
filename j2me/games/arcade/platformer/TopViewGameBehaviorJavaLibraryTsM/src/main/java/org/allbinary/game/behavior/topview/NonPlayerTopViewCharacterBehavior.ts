
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
        
//not game specific package import { MultiGeographicMapBehavior } from '../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js';
      const MultiGeographicMapBehavior = globalThis.org.allbinary.media.graphics.geography.map.MultiGeographicMapBehavior;

      
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { BasicTerrainInfo } from '../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
      const BasicTerrainInfo = globalThis.org.allbinary.game.terrain.BasicTerrainInfo;

      
//not game specific package import { TerrainEvent } from '../../../../../org/allbinary/game/terrain/TerrainEvent.js';
      const TerrainEvent = globalThis.org.allbinary.game.terrain.TerrainEvent;

      
//not game specific package import { TerrainEventCircularStaticPool } from '../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
      const TerrainEventCircularStaticPool = globalThis.org.allbinary.game.terrain.TerrainEventCircularStaticPool;

      
//not game specific package import { TerrainEventHandler } from '../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
      const TerrainEventHandler = globalThis.org.allbinary.game.terrain.TerrainEventHandler;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TopViewCharacterBehavior } from './TopViewCharacterBehavior.js';

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



