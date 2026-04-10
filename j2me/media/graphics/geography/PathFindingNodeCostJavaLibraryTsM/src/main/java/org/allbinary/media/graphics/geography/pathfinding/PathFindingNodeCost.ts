
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
        



import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    

export class PathFindingNodeCost extends PathFindingNode
                , Comparable<PathFindingNodeCost> {
        

    public static readonly NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY: PathFindingNodeCost[][] = Array(0) { arrayOfNulls<PathFindingNodeCost?>(0) }
                                                            ;
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    public pathFindingNodeCostInfoP: PathFindingNodeCostInfo
public constructor (parent: any = {}, geographicMapCellPosition: GeographicMapCellPosition, pathFindingNodeCostInfo: PathFindingNodeCostInfo)                        

                            : super(parent, geographicMapCellPosition){

            super();
                //var parent = parent
    //var geographicMapCellPosition = geographicMapCellPosition
    //var pathFindingNodeCostInfo = pathFindingNodeCostInfo


                            //For kotlin this is before the body of the constructor.
                    
this.pathFindingNodeCostInfoP= pathFindingNodeCostInfo

    
                        if(this.geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("No GeographicMapCellPosition")

                                    }
                                

    
                        if(this.getPathFindingNodeCostInfo() == 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("No PathFindingNodeCostInfo")

                                    }
                                
}


    public getPathFindingNodeCostInfo(): PathFindingNodeCostInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pathFindingNodeCostInfoP;
    
}


    public setPathFindingNodeCostInfo(pathFindingNodeCostInfo: PathFindingNodeCostInfo){
var pathFindingNodeCostInfo = pathFindingNodeCostInfo
this.pathFindingNodeCostInfoP= pathFindingNodeCostInfo
}


    public compareTo(pathFindingNodeCost: PathFindingNodeCost): number{
var pathFindingNodeCost = pathFindingNodeCost



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pathFindingNodeCostInfoP!.compareTo(pathFindingNodeCost!.pathFindingNodeCostInfoP);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this::class.toString()!)
append(CommonLabels.getInstance()!.COLON_SEP)
append(this.getPathFindingNodeCostInfo()!.toString())
append(" Path: ")
append(this.geographicMapCellPosition!.toString())

    var pathFindingNode: PathFindingNode = this.parent as PathFindingNode;
        
        


        while(pathFindingNode != 
                                    null
                                )
        {
append(pathFindingNode!.geographicMapCellPosition!.toString())
append(commonSeps!.SPACE)
pathFindingNode= pathFindingNode!.parent as PathFindingNode
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

