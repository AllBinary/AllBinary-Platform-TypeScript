
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
        
//not game specific package import { Hashtable } from '../../../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GroupCommonFactory } from '../../../../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
      const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;

      
//not game specific package import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { Direction } from '../../../../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionFactory } from '../../../../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { BasicGroupFactory } from '../../../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { Group } from '../../../../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { LayerCoveringCellPositionsUtil } from '../../../../../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js';
      const LayerCoveringCellPositionsUtil = globalThis.org.allbinary.game.layer.geographic.map.LayerCoveringCellPositionsUtil;

      
//not game specific package import { GPoint } from '../../../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { GeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
//not game specific package import { GeographicMapDirectionUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
      const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;

      
//not game specific package import { SimpleGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
//not game specific package import { DropCellPositionGeneratorInterface } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionGeneratorInterface.js';
      const DropCellPositionGeneratorInterface = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionGeneratorInterface;

      
//not game specific package import { DropCellPositionHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
//not game specific package import { BaseRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
      const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
//not game specific package import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
//not game specific package import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
      const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';
import { RaceTrackAdjacentDropLayerFactory } from './RaceTrackAdjacentDropLayerFactory.js';

export class RaceTrackAdjacentDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
        

    private static SINGLETON: RaceTrackAdjacentDropCellPositionGenerator = new RaceTrackAdjacentDropCellPositionGenerator();

    public static getInstance(): DropCellPositionGeneratorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RaceTrackAdjacentDropCellPositionGenerator.SINGLETON;
    
}


    private readonly layerCoveringCellPositionsUtil: LayerCoveringCellPositionsUtil = LayerCoveringCellPositionsUtil.getInstance()!;

    private readonly groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;

    private surroundingCellPositions: GeographicMapCellPosition[] = new Array(4);

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    getFirstNonRoadAdjacentCellPosition(column: number, row: number): GeographicMapCellPosition{

    var nonRoadGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = this.raceTrackGeographicMap!.getGeographicMapCellPositionFactory()!;;
    
this.surroundingCellPositions[0]= geographicMapCellPositionFactory!.getAt(column, row -1);
    
this.surroundingCellPositions[1]= geographicMapCellPositionFactory!.getAt(column, row +1);
    
this.surroundingCellPositions[2]= geographicMapCellPositionFactory!.getAt(column -1, row);
    
this.surroundingCellPositions[3]= geographicMapCellPositionFactory!.getAt(column +1, row);
    

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = this.raceTrackGeographicMap as BaseRaceTrackGeographicMap;;
    

    var raceTrackGeographicMapCellTypeFactory: RaceTrackGeographicMapCellTypeFactory = baseRaceTrackGeographicMap!.getGeographicMapCellTypeFactory() as RaceTrackGeographicMapCellTypeFactory;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    

    var raceTrackGeographicMapCellType: RaceTrackGeographicMapCellType;;
    




                        for (
    var index: number = this.surroundingCellPositions!.length
                ;--index >= 0; )
        {
geographicMapCellPosition= this.surroundingCellPositions[index]!;
    
raceTrackGeographicMapCellType= this.raceTrackGeographicMap!.getCellTypeAt(geographicMapCellPosition) as RaceTrackGeographicMapCellType;
    

                        if(!raceTrackGeographicMapCellTypeFactory!.isPath(raceTrackGeographicMapCellType))
                        
                                    {
                                    nonRoadGeographicMapCellPosition= geographicMapCellPosition;
    
break;

                    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nonRoadGeographicMapCellPosition;
    
}


    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();

                //@Throws(Exception.constructor)
            
    public update(allBinaryGameLayerManager: AllBinaryGameLayerManager, geographicMapInterface: BasicGeographicMap){
this.hashtable.put(AllBinaryGameLayerManager.ID, allBinaryGameLayerManager);
    
super.update(allBinaryGameLayerManager, geographicMapInterface);
    
}


    private readonly geographicMapDirectionUtil: GeographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    drop(allBinaryLayerManager: AllBinaryLayerManager, index: number){

    var geographicMapCellPosition: GeographicMapCellPosition = this.list.get(index) as GeographicMapCellPosition;;
    

    var randomGeographicMapCellPosition: GeographicMapCellPosition = this.getFirstNonRoadAdjacentCellPosition(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow())!;;
    

                        if(randomGeographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var dropCellPositionHistory: DropCellPositionHistory = DropCellPositionHistory.getInstance()!;;
    

                        if(!dropCellPositionHistory!.isCellPositionWithDrop(geographicMapCellPosition))
                        
                                    {
                                    
    var direction: Direction = this.geographicMapDirectionUtil!.getDirectionFromCellPositionToAdjacentCellPosition(randomGeographicMapCellPosition, geographicMapCellPosition)!;;
    

    var objectCanBeNull: any = this.hashtable.get(this.groupCommonFactory!.ID);;
    

                        if(objectCanBeNull != 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.hashtable.put(this.groupCommonFactory!.ID, BasicGroupFactory.getInstance()!.NONE_ARRAY);
    

                        }
                            
this.hashtable.put(DirectionFactory.getInstance()!.NAME, direction);
    

    var point: GPoint = randomGeographicMapCellPosition!.getPoint()!;;
    

    var x: number = point.getX()!;;
    

    var y: number = point.getY()!;;
    

    var z: number = point.getZ()!;;
    

    var layerInterface: AllBinaryLayer = RaceTrackAdjacentDropLayerFactory.getInstance()!.getRandomInstance()!.getNextInstance(hashtable, x, y, z)!;;
    

    var baseRaceTrackGeographicMap: BaseRaceTrackGeographicMap = this.raceTrackGeographicMap as BaseRaceTrackGeographicMap;;
    

    var list: BasicArrayList = this.layerCoveringCellPositionsUtil!.getAll(baseRaceTrackGeographicMap, randomGeographicMapCellPosition, layerInterface, new BasicArrayListD())!;;
    

                        if(dropCellPositionHistory!.anyCellPositionWithDrop(list))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var geographicMapCellType: GeographicMapCellType;;
    




                        for (
    var index2: number = list.size()!;--index2 >= 0; )
        {
geographicMapCellType= this.raceTrackGeographicMap!.getCellTypeAt(list.get(index2) as GeographicMapCellPosition);
    

                        if(this.raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellType))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

dropCellPositionHistory!.addAll(list, layerInterface);
    
allBinaryLayerManager!.append(layerInterface);
    

                                    }
                                
}


}



