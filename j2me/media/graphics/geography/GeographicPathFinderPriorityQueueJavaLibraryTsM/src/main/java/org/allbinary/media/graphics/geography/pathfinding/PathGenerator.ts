
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      
import { GeographicMapCellHistory } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathGeneratorInterface } from './PathGeneratorInterface.js';
import { PathFindingInfo } from './PathFindingInfo.js';
import { GeographicPathFinderBase } from './GeographicPathFinderBase.js';
import { MultipassState } from './MultipassState.js';

export class PathGenerator
            extends Object
         implements PathGeneratorInterface {
        

    private static readonly SINGLETON: PathGenerator = new PathGenerator();

    public static getInstance(): PathGenerator{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PathGenerator.SINGLETON;
    
}

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: any = {}, totalPaths: number){
}


                //@Throws(Exception.constructor)
            
    public getInstanceNoCache(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{

    var geographicMapCellPositionBasicArrayList: BasicArrayList = this.create(geographicMapInterface, pathFindingInfo, totalPaths)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    public createList(geographicMapInterface: BasicGeographicMap, geographicMapCellHistory: GeographicMapCellHistory, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    create(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{

    var startPathFindingNodeList: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;
;
    

    var endPathFindingNodeList: BasicArrayList = pathFindingInfo!.getEndPathFindingNodeList()!;
;
    

    var geographicPathFinderInterface: GeographicPathFinderBase = pathFindingInfo!.getPathFinder()!;
;
    

    var geographicMapCellPositionBasicArrayList: BasicArrayList = geographicPathFinderInterface!.searchTotalPath(startPathFindingNodeList, endPathFindingNodeList, totalPaths)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    public createN(geographicMapInterface: BasicGeographicMap, pathFindingInfo: PathFindingInfo, totalPaths: number, multipassState: MultipassState): BasicArrayList{

    var startPathFindingNodeList: BasicArrayList = pathFindingInfo!.getStartPathFindingNodeList()!;
;
    

    var endPathFindingNodeList: BasicArrayList = pathFindingInfo!.getEndPathFindingNodeList()!;
;
    

    var geographicPathFinderInterface: GeographicPathFinderBase = pathFindingInfo!.getPathFinder()!;
;
    

    var geographicMapCellPositionBasicArrayList: BasicArrayList = geographicPathFinderInterface!.searchTotalPathN(startPathFindingNodeList, endPathFindingNodeList, totalPaths, multipassState)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionBasicArrayList;
    
}


                //@Throws(Exception.constructor)
            
    isValid(pathList: BasicArrayList, geographicMapCellHistory: GeographicMapCellHistory): boolean{



                            throw new RuntimeException();
                    
}


}
                
            

