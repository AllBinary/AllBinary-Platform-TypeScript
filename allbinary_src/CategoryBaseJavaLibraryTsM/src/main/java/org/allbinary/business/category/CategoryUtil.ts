
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { DomNodeHelper } from '../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringUtils } from '../../../../org/apache/commons/lang3/StringUtils.js';
      //not GWT import const StringUtils = globalThis.org.apache.commons.lang3.StringUtils;

      
import { Attr } from '../../../../org/w3c/dom/Attr.js';
      //not GWT import const Attr = globalThis.org.w3c.dom.Attr;

      
import { NamedNodeMap } from '../../../../org/w3c/dom/NamedNodeMap.js';
      //not GWT import const NamedNodeMap = globalThis.org.w3c.dom.NamedNodeMap;

      
import { Node } from '../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryData } from './CategoryData.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryData;

                
export class CategoryUtil
            extends Object
         {
        
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getPathLevel(categoryPath: AbPath): number{

    var count: number = StringUtils.countMatches(categoryPath!.toString(), AbPathData.getInstance()!.SEPARATOR)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return count;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getNameFromNode(node: Node): string{

    var attributes: NamedNodeMap = node.getAttributes()!;;
    

    var attrNode: Attr = attributes.getNamedItem(CategoryData.getInstance()!.LABEL) as Attr;;
    

                        if(attrNode != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return attrNode!.getValue();;
    

                                    }
                                
                        else {
                            
    var labelNode: Node = DomSearchHelper.getNodeNoThrow(CategoryData.getInstance()!.LABEL, node.getChildNodes())!;;
    

                        if(labelNode != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(labelNode);;
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


private constructor (){

            super();
        }


}



