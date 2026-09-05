
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingInfoInterface } from './PathFindingInfoInterface.js';
//not GWT import - same folder const PathFindingInfoInterface = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfoInterface;

                import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
//not GWT import - same folder const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;

                import { GeographicPathFinderBase } from './GeographicPathFinderBase.js';
//not GWT import - same folder const GeographicPathFinderBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.GeographicPathFinderBase;

                import { PathFindingNode } from './PathFindingNode.js';
//not GWT import - same folder const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

                
export class PathFindingInfo
            extends Object
         implements PathFindingInfoInterface {
        

    public static readonly NULL_PATH_FINDING_INFO: PathFindingInfo = new PathFindingInfo(PathFindingNodeCostInfoFactoryBase.NULL_PATH_FINDING_NODE_COST_INFO_FACTORY_BASE, BasicArrayListUtil.getInstance()!.getImmutableInstance(), BasicArrayListUtil.getInstance()!.getImmutableInstance());

    private pathFinder: GeographicPathFinderBase = GeographicPathFinderBase.NULL_GEOGRAPHIC_PATH_FINDER_BASE;

    private readonly startPathFindingNodeList: BasicArrayList;

    private readonly endPathFindingNodeList: BasicArrayList;

    private readonly pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase;

public constructor (pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){

            super();
        this.pathFindingNodeCostInfoFactoryInterface= pathFindingNodeCostInfoFactoryInterface;
    
this.startPathFindingNodeList= startPathFindingNodeList;
    
this.endPathFindingNodeList= endPathFindingNodeList;
    
}


    public getStartPathFindingNodeList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startPathFindingNodeList;
    
}


    public getEndPathFindingNodeList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.endPathFindingNodeList;
    
}


    public getPathFinder(): GeographicPathFinderBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFinder;
    
}


    public addStartPathFindingNode(startPathFindingNode: PathFindingNode){
this.startPathFindingNodeList!.add(startPathFindingNode);
    
}


    public addEndPathFindingNode(endPathFindingNode: PathFindingNode){
this.endPathFindingNodeList!.add(endPathFindingNode);
    
}


    public setPathFinder(pathFinder: GeographicPathFinderBase){
this.pathFinder= pathFinder;
    
}


    public getPathFindingNodeCostInfoFactoryInterface(): PathFindingNodeCostInfoFactoryBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoFactoryInterface;
    
}


}



