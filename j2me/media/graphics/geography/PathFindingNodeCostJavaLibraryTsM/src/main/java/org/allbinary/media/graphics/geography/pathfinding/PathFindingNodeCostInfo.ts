
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

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Comparable } from "./Comparable.js";

import { PathFindingNodeCostInfoData } from "./PathFindingNodeCostInfoData.js";

export class PathFindingNodeCostInfo
            extends Object
         implements Comparable<PathFindingNodeCostInfo> {
        

    private readonly pathFindingNodeCostInfoData: PathFindingNodeCostInfoData = PathFindingNodeCostInfoData.getInstance()!;
        
        

    public costFromStartP: number

    public costToEndP: number

    public totalCostP: number= 0
public constructor (costFromStart: number, costToGoal: number){

            super();
            //var costFromStart = costFromStart
    //var costToGoal = costToGoal
this.costFromStartP= costFromStart;
    
this.costToEndP= costToGoal;
    
this.setTotalCost();
    
}


    public setCostToEnd(costToEnd: number){
    //var costToEnd = costToEnd
this.costToEndP= costToEnd;
    
}


    public setTotalCost(totalCost: number){
    //var totalCost = totalCost
this.totalCostP= totalCost;
    
}


                //@Throws(Error::class)
            
    public setTotalCost(){
this.totalCostP= this.costFromStartP +this.costToEndP;
    

                        if(this.totalCostP > this.pathFindingNodeCostInfoData!.MAX_NODE_COST)
                        
                                    {
                                    


                            throw new Error("Max Cost Exceeded")

                                    }
                                
}


    public setCostFromStart(cost: number){
    //var cost = cost
this.costFromStartP= cost;
    
}


    public addCostFromStart(cost: number){
    //var cost = cost
this.costFromStartP += cost;
    
}


    public compareTo(pathFindingNodeCostInfo: PathFindingNodeCostInfo): number{
var pathFindingNodeCostInfo = pathFindingNodeCostInfo



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return java.lang.Long.compare(this.totalCostP, pathFindingNodeCostInfo!.totalCostP);;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.constructor.name.toString()!);
    
stringBuffer!.append(CommonLabels.getInstance()!.COLON_SEP);
    
stringBuffer!.append("CostFromStart: ");
    
stringBuffer!.appendlong(this.costFromStartP);
    
stringBuffer!.append(" CostToEnd: ");
    
stringBuffer!.appendlong(this.costToEndP);
    
stringBuffer!.append(" TotalCost: ");
    
stringBuffer!.appendlong(this.totalCostP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

