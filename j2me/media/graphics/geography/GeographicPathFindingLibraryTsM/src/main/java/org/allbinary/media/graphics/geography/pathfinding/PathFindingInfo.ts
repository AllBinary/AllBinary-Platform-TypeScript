
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
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListS } from "../../../../../../org/allbinary/util/BasicArrayListS.js";

    
import { BasicArrayListUtil } from "../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PathFindingInfoInterface } from "./PathFindingInfoInterface.js";

import { PathFindingNodeCostInfoFactoryBase } from "./PathFindingNodeCostInfoFactoryBase.js";

import { GeographicPathFinderBase } from "./GeographicPathFinderBase.js";

import { PathFindingNode } from "./PathFindingNode.js";

export class PathFindingInfo
            extends Object
         implements PathFindingInfoInterface {
        

    public static readonly NULL_PATH_FINDING_INFO: PathFindingInfo = new PathFindingInfo(PathFindingNodeCostInfoFactoryBase.NULL_PATH_FINDING_NODE_COST_INFO_FACTORY_BASE, BasicArrayListUtil.getInstance()!.getImmutableInstance(), BasicArrayListUtil.getInstance()!.getImmutableInstance());
        
        

    private pathFinder: GeographicPathFinderBase = GeographicPathFinderBase.NULL_GEOGRAPHIC_PATH_FINDER_BASE;
        
        

    private readonly startPathFindingNodeList: BasicArrayList

    private readonly endPathFindingNodeList: BasicArrayList

    private readonly pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase
public constructor (pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase, startPathFindingNodeList: BasicArrayList, endPathFindingNodeList: BasicArrayList){

            super();
            //var pathFindingNodeCostInfoFactoryInterface = pathFindingNodeCostInfoFactoryInterface
    //var startPathFindingNodeList = startPathFindingNodeList
    //var endPathFindingNodeList = endPathFindingNodeList
this.pathFindingNodeCostInfoFactoryInterface= pathFindingNodeCostInfoFactoryInterface;
    
this.startPathFindingNodeList= startPathFindingNodeList;
    
this.endPathFindingNodeList= endPathFindingNodeList;
    
}

public constructor (pathFindingNodeCostInfoFactoryInterface: PathFindingNodeCostInfoFactoryBase){

            super();
            //var pathFindingNodeCostInfoFactoryInterface = pathFindingNodeCostInfoFactoryInterface
this.pathFindingNodeCostInfoFactoryInterface= pathFindingNodeCostInfoFactoryInterface;
    
this.startPathFindingNodeList= new BasicArrayListS(1);
    
this.endPathFindingNodeList= new BasicArrayListS(1);
    
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
var startPathFindingNode = startPathFindingNode
this.startPathFindingNodeList!.add(startPathFindingNode);
    
}


    public addEndPathFindingNode(endPathFindingNode: PathFindingNode){
var endPathFindingNode = endPathFindingNode
this.endPathFindingNodeList!.add(endPathFindingNode);
    
}


    public setPathFinder(pathFinder: GeographicPathFinderBase){
var pathFinder = pathFinder
this.pathFinder= pathFinder;
    
}


    public getPathFindingNodeCostInfoFactoryInterface(): PathFindingNodeCostInfoFactoryBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingNodeCostInfoFactoryInterface;
    
}


}
                
            

