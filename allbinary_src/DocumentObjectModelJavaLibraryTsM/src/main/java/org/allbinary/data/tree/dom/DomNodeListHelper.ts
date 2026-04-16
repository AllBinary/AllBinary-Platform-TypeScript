
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

import { DomNodeHelper } from "./DomNodeHelper.js";

export class DomNodeListHelper
            extends Object
         {
        

    public static getVector(nodeList: NodeList): Vector{
var nodeList = nodeList

    var vector: Vector = new Vector();
        
        
;
    

    var size: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
vector.add(DomNodeHelper.getTextNodeValue(nodeList!.item(index)));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

