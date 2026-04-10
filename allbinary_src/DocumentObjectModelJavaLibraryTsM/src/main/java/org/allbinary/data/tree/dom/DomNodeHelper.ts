
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

export class DomNodeHelper
            extends Object
         {
        

    public static getFirstChildElement(parentNode: Node): Node{
var parentNode = parentNode

    var node: Node = parentNode!.getFirstChild()!;
        
        


                        if(node != 
                                    null
                                 && node.getNodeType() != Node.ELEMENT_NODE)
                        
                                    {
                                    
    var nodeList: NodeList = parentNode!.getChildNodes()!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {
node= nodeList!.item(index)

                        if(node.getNodeType() == 1)
                        
                                    {
                                    break;

                    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public static getTextNodeValue(node: Node): string{
var node = node

    var nodeTextNode: Node = node.getFirstChild()!;
        
        


                        if(nodeTextNode != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nodeTextNode!.getNodeValue();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public static getTextNodeValue(nodeName: string, nodeList: NodeList): string{
var nodeName = nodeName
var nodeList = nodeList

    var node: Node = DomSearchHelper.getNode(nodeName, nodeList)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomNodeHelper.getTextNodeValue(node);
    
}


    public static getTextNodesValue(node: Node): string{
var node = node

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var nodeList: NodeList = node.getChildNodes()!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var nodeTextNode: Node = nodeList!.item(index)!;
        
        


                        if(nodeTextNode!.getNodeType() == Node.TEXT_NODE)
                        
                                    {
                                    
                        if(nodeTextNode != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(nodeTextNode!.getNodeValue())

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}

private constructor (){

            super();
            }


}
                
            

