
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
        



import { DomNodeHelper } from "../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringUtils } from "../../../../org/apache/commons/lang3/StringUtils.js";

    
import { Attr } from "../../../../org/w3c/dom/Attr.js";

    
import { NamedNodeMap } from "../../../../org/w3c/dom/NamedNodeMap.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class CategoryUtil
            extends Object
         {
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getPathLevel(categoryPath: AbPath): number{
var categoryPath = categoryPath

    var count: number = StringUtils.countMatches(categoryPath!.toString(), AbPathData.getInstance()!.SEPARATOR)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return count;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getNameFromNode(node: Node): string{
var node = node

    var attributes: NamedNodeMap = node.getAttributes()!;
        
        


    var attrNode: Attr = attributes.getNamedItem(CategoryData.getInstance()!.LABEL) as Attr;
        
        


                        if(attrNode != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return attrNode!.getValue();
    

                                    }
                                
                        else {
                            
    var labelNode: Node = DomSearchHelper.getNodeNoThrow(CategoryData.getInstance()!.LABEL, node.getChildNodes())!;
        
        


                        if(labelNode != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(labelNode);
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}

private constructor (){

            super();
            }


}
                
            

