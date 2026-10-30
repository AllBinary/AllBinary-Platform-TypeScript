
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCellPosition } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory

import { PathFindingInfo } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo

import { PathFindingNode } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
//not GWT import const PathFindingNode

import { GeographicMapCellPositionFactoryInitVisitorInterface } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInitVisitorInterface.js';
//not GWT import const GeographicMapCellPositionFactoryInitVisitorInterface

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackRoadsGeographicMapCellHistoryFactory } from './RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//sameFolderImports - not GWT import - same folder const RaceTrackRoadsGeographicMapCellHistoryFactory

export class BasePathFindingInfoFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, mapArray: number[][]){

//inner=true member= isStatic=
class RaceTrackGeographicMapCellPositionFactoryInitVisitor
            extends Object
         implements GeographicMapCellPositionFactoryInitVisitorInterface {
        

    private startLineId: number;

    private finishLineId: number;

public constructor (){

            super();
        
    let raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;;
    
this.startLineId= raceTrackGeographicMapCellTypeFactory!.getStartType();
    
this.finishLineId= raceTrackGeographicMapCellTypeFactory!.getEndType();
    
}


                //@Throws(Exception.constructor)
            
    public visit(tiledLayer: AllBinaryTiledLayer, cellPosition: GeographicMapCellPosition){

    let row: number = cellPosition!.getRow()!;;
    

    let column: number = cellPosition!.getColumn()!;;
    

 try { 
    let cellTypeId: number = mapArray[row]![column]!;;
    

    let geographicCellType: number = geographicMapInterface!.getCellTypeFromMapCellTypeInt(cellTypeId)!;;
    

                        if(geographicCellType == this.startLineId)
                        
                                    {
                                    outer$BasePathFindingInfoFactory.addStartPathFindingNode(pathFindingInfo, cellPosition);
    

                                    }
                                

                        if(geographicCellType == this.finishLineId)
                        
                                    {
                                    
                        if(geographicCellType == this.startLineId)
                        
                                    {
                                    outer$BasePathFindingInfoFactory.addEndPathFindingNode(pathFindingInfo, geographicMapInterface!.getGeographicMapCellPositionFactoryInterface()!.getInstance(geographicMapInterface, cellPosition!.getColumn(), cellPosition!.getRow(), tiledLayer!.getColumns(), tiledLayer!.getRows(), tiledLayer!.getCellWidth(), tiledLayer!.getCellHeight()));
    

                                    }
                                
                        else {
                            outer$BasePathFindingInfoFactory.addEndPathFindingNode(pathFindingInfo, cellPosition);
    

                        }
                            

                                    }
                                

    let raceTrackGeographicMapCellTypeFactory: GeographicMapCellTypeFactory = geographicMapInterface!.getGeographicMapCellTypeFactory()!;;
    

    let geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;;
    

                        if(raceTrackGeographicMapCellTypeFactory!.isPath(geographicMapCellTypeFactory!.get(geographicCellType)))
                        
                                    {
                                    RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance()!.track(cellPosition);
    

                                    }
                                
                        else {
                            
                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    
this.logUtil!.put(new StringMaker().append(commonSeps!.BRACKET_OPEN)!.appendint(row)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(column)!.append("] in [")!.appendint(mapArray!.length)!.append(commonSeps!.BRACKET_CLOSE)!.append(commonSeps!.BRACKET_OPEN)!.appendint(mapArray[0]!.length)!.append(commonSeps!.BRACKET_CLOSE)!.toString(), this, "visit", e);
    



                            throw e;
                    

 }
   }
 
}


}
geographicMapInterface!.getGeographicMapCellPositionFactory()!.visit(new RaceTrackGeographicMapCellPositionFactoryInitVisitor());
    
}


                //@Throws(Exception.constructor)
            
    addStartPathFindingNode(pathFindingInfo: PathFindingInfo, startGeographicMapCellPosition: GeographicMapCellPosition){
pathFindingInfo!.addStartPathFindingNode(new PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, startGeographicMapCellPosition));
    
}


                //@Throws(Exception.constructor)
            
    addEndPathFindingNode(pathFindingInfo: PathFindingInfo, endGeographicMapCellPosition: GeographicMapCellPosition){
pathFindingInfo!.addEndPathFindingNode(new PathFindingNode(NullUtil.getInstance()!.NULL_OBJECT, endGeographicMapCellPosition));
    
}


                //@Throws(Exception.constructor)
            
    public getInstancePathFindingInfo(geographicMapInterface: BasicGeographicMap, graphArray: number[][]): PathFindingInfo{



                            throw new RuntimeException();
                    
}


}

