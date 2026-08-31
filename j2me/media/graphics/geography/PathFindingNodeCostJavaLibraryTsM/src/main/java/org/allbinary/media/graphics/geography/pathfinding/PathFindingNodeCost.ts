
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2006 AllBinary
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not plain js import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathFindingNode } from './PathFindingNode.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;

                import { Comparable } from './Comparable.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.pathfinding.Comparable;

                import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';
//not GWT import const  = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfo;

                
export class PathFindingNodeCost extends PathFindingNode implements Comparable<PathFindingNodeCost> {
        

    public static readonly NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY: PathFindingNodeCost[][] = new Array(0).fill(null).map(() => new Array(0).fill(0))
                                                            ;

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    public pathFindingNodeCostInfoP: PathFindingNodeCostInfo;

public constructor (parent: any = {}, geographicMapCellPosition: GeographicMapCellPosition, pathFindingNodeCostInfo: PathFindingNodeCostInfo){
            super(parent, geographicMapCellPosition);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.pathFindingNodeCostInfoP= pathFindingNodeCostInfo;
    

                        if(this.geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No GeographicMapCellPosition");
                    

                                    }
                                

                        if(this.getPathFindingNodeCostInfo() == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No PathFindingNodeCostInfo");
                    

                                    }
                                
}


    public getPathFindingNodeCostInfo(): PathFindingNodeCostInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoP;
    
}


    public setPathFindingNodeCostInfo(pathFindingNodeCostInfo: PathFindingNodeCostInfo){
this.pathFindingNodeCostInfoP= pathFindingNodeCostInfo;
    
}


    public compareTo(pathFindingNodeCost: PathFindingNodeCost): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoP!.compareTo(pathFindingNodeCost!.pathFindingNodeCostInfoP);;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP);
    
stringBuffer!.append(this.getPathFindingNodeCostInfo()!.toString());
    
stringBuffer!.append(" Path: ");
    
stringBuffer!.append(this.geographicMapCellPosition!.toString());
    

    var pathFindingNode: PathFindingNode = this.parent as PathFindingNode;;
    

        while(pathFindingNode != 
                                    null
                                )
        {
stringBuffer!.append(pathFindingNode!.geographicMapCellPosition!.toString());
    
stringBuffer!.append(this.commonSeps!.SPACE);
    
pathFindingNode= pathFindingNode!.parent as PathFindingNode;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



