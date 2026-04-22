
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
        



import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellHistory } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingInfo } from "./PathFindingInfo.js";

import { MultipassState } from "./MultipassState.js";

export class PathGenerator
            extends Object
         {
        

    private static readonly SINGLETON: PathGenerator = new PathGenerator();
        
        

    public static getInstance(): PathGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}

private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public init(geographicMapInterface: any = {}, totalPaths: number){
    //var geographicMapInterface = geographicMapInterface
    //var totalPaths = totalPaths
}


                //@Throws(Error::class)
            
    public getInstanceNoCache(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var totalPaths = totalPaths

    var geographicMapCellPositionBasicArrayList: BasicArrayList = this.create(geographicMapInterface, pathFindingInfo, totalPaths)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Error::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, geographicMapCellHistory: GeographicMapCellHistory, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var geographicMapCellHistory = geographicMapCellHistory
    //var pathFindingInfo = pathFindingInfo
    //var totalPaths = totalPaths



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    create(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var totalPaths = totalPaths

    var startPathFindingNodeList: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;
        
        
;
    

    var endPathFindingNodeList: BasicArrayList = pathFindingInfo!.getEndPathFindingNodeList()!;
        
        
;
    

    var geographicPathFinderInterface: GeographicPathFinderBase = pathFindingInfo!.getPathFinder()!;
        
        
;
    

    var geographicMapCellPositionBasicArrayList: BasicArrayList = geographicPathFinderInterface!.search(startPathFindingNodeList, endPathFindingNodeList, totalPaths)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Error::class)
            
    public createN(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number, multipassState: MultipassState): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var pathFindingInfo = pathFindingInfo
    //var totalPaths = totalPaths
    //var multipassState = multipassState

    var startPathFindingNodeList: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;
        
        
;
    

    var endPathFindingNodeList: BasicArrayList = pathFindingInfo!.getEndPathFindingNodeList()!;
        
        
;
    

    var geographicPathFinderInterface: GeographicPathFinderBase = pathFindingInfo!.getPathFinder()!;
        
        
;
    

    var geographicMapCellPositionBasicArrayList: BasicArrayList = geographicPathFinderInterface!.searchN(startPathFindingNodeList, endPathFindingNodeList, totalPaths, multipassState)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Error::class)
            
    isValid(pathList: BasicArrayList, geographicMapCellHistory: GeographicMapCellHistory): boolean{
    //var pathList = pathList
    //var geographicMapCellHistory = geographicMapCellHistory



                            throw new RuntimeException()
}


}
                
            

