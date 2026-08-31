
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
        
import { Hashtable } from '../../../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { GroupCommonFactory } from '../../../../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
      //not GWT import const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { Direction } from '../../../../../../../../org/allbinary/direction/Direction.js';
      //not GWT import const Direction = globalThis.org.allbinary.direction.Direction;

      
import { DirectionFactory } from '../../../../../../../../org/allbinary/direction/DirectionFactory.js';
      //not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
import { BasicGroupFactory } from '../../../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      //not GWT import const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
import { Group } from '../../../../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { LayerCoveringCellPositionsUtil } from '../../../../../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js';
      //not GWT import const LayerCoveringCellPositionsUtil = globalThis.org.allbinary.game.layer.geographic.map.LayerCoveringCellPositionsUtil;

      
//not plain js import { GPoint } from '../../../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { AllBinaryLayer } from '../../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { BasicGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      //not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
import { GeographicMapCellPosition } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
import { GeographicMapDirectionUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
      //not GWT import const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;

      
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      //not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
import { DropCellPositionGeneratorInterface } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionGeneratorInterface.js';
      //not GWT import const DropCellPositionGeneratorInterface = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionGeneratorInterface;

      
import { DropCellPositionHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
      //not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;

      
import { BaseRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BaseRaceTrackGeographicMap.js';
      //not GWT import const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;

      
import { RaceTrackGeographicMapCellType } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
      //not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;

      
import { RaceTrackGeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellTypeFactory.js';
      //not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;

      
















                                        
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



