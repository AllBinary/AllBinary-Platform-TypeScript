
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
        



import { Node } from "../../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PointsDomUtil } from "./PointsDomUtil.js";

import { GraphicItemInterface } from "./GraphicItemInterface.js";

export class GraphicItemBuilder
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(node: Node): GraphicItemInterface{
var node = node

    var graphicItemName: string = node.getNodeName()!;
        
        
;
    

                        if(graphicItemName!.compareTo(PointsDomUtil.getInstance()!.LINES) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LinesGraphicItem(node);
    

                                    }
                                
                        else {
                            


                            throw new Error("Graphic Item Does Not Exist: " +graphicItemName)

                        }
                            
}

private constructor (){

            super();
            }


}
                
            

