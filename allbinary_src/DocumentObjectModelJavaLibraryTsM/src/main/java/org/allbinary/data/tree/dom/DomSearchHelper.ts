
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

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DomSearchHelper
            extends Object
         {
        

    public static getNodeNoThrow(nodeName: string, nodeList: NodeList): Node{
var nodeName = nodeName
var nodeList = nodeList

    var numberOfNodes: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public static getNode(nodeName: string, nodeList: NodeList): Node{
var nodeName = nodeName
var nodeList = nodeList

    var node: Node = DomSearchHelper.getNodeNoThrow(nodeName, nodeList)!;
        
        
;
    

                        if(node != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                                    }
                                
                        else {
                            


                            throw new Error(nodeName +" Node Not Found in search")

                        }
                            
}


                //@Throws(Error::class)
            
    public static getChildNodeList(nodeName: string, nodeList: NodeList): NodeList{
var nodeName = nodeName
var nodeList = nodeList

    var node: Node = DomSearchHelper.getNode(nodeName, nodeList)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node.getChildNodes();;
    
}


                //@Throws(Error::class)
            
    public static getAllNodes(nodeName: string, nodeList: NodeList): Vector{
var nodeName = nodeName
var nodeList = nodeList

    var vector: Vector = DomSearchHelper.getAllNodesNoThrow(nodeName, nodeList)!;
        
        
;
    

                        if(vector == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error(nodeName +" Node Not Found in search")

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    

                        }
                            
}


    public static getAllNodesNoThrow(nodeName: string, nodeList: NodeList): Vector{
var nodeName = nodeName
var nodeList = nodeList

    var nodeVector: Vector = new Vector();
        
        
;
    

    var numberOfNodes: number = nodeList!.getLength()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < numberOfNodes; index++)
        {

    var node: Node = nodeList!.item(index)!;
        
        
;
    

                        if(node.getNodeName()!.compareTo(nodeName) == 0)
                        
                                    {
                                    nodeVector!.add(node);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nodeVector;
    
}

private constructor (){

            super();
        }


}
                
            

