
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { ValidationInterface } from "../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../org/w3c/dom/NodeList.js";

    

import { CssPropertyData } from "./CssPropertyData.js";

import { CssPropertyValidationFactory } from "./CssPropertyValidationFactory.js";

export class CssPropertiesValidationFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(nodeList: NodeList): Vector{
var nodeList = nodeList

    var propertiesVector: Vector = new Vector();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeName()!.compareTo(CssPropertyData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var cssPropertyValidationInterface: ValidationInterface = CssPropertyValidationFactory.getInstance(node);

                         as ValidationInterface;
        
        
;
    
propertiesVector!.add(cssPropertyValidationInterface);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return propertiesVector;
    
}


    public static getInstance(hashMap: HashMap<any, any>): Vector{
var hashMap = hashMap

    var styles: Vector = new Vector();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}

private constructor (){

            super();
            }


}
                
            

