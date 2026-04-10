
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
        



import { DomHelper } from "../../../../../org/allbinary/dom/DomHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

export class WorkAreaDom
            extends Object
         {
        

    public static readonly WORKAREA: string = "workArea";
        
        

    public static readonly NAME: string = "name";
        
        

    public static readonly FRAMES: string = "frames";
        
        

    private name: string

    private canvasNodeList: BasicArrayList
public constructor (document: Document){

            super();
            var document = document

    var workAreaNodeList: NodeList = document.getElementsByTagName(this.WORKAREA)!;
        
        


    
                        if(workAreaNodeList != 
                                    null
                                )
                        
                                    {
                                    
    var numberOfworkAreas: number = workAreaNodeList!.getLength()!;
        
        


    
                        if(numberOfworkAreas == 1)
                        
                                    {
                                    
    var numberOfNodes: number = workAreaNodeList!.getLength()!;
        
        


    var nameNode: Node = DomHelper.getInstance()!.searchNodeList(this.NAME, workAreaNodeList!.item(0)!.getChildNodes())!;
        
        


    var nameTextNode: Node = nameNode!.getFirstChild()!;
        
        

this.name= nameTextNode!.getNodeValue()

                                    }
                                
                        else {
                            


                            throw Exception("Wrong Number of WorkAreas: " +numberOfworkAreas)

                        }
                            
this.canvasNodeList= DomHelper.getInstance()!.getChildrenWithoutTextNodes(this.FRAMES, workAreaNodeList!.item(0)!.getChildNodes())

                                    }
                                
                        else {
                            


                            throw Exception("workArea Node Not Found")

                        }
                            
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getCanvasNodes(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.canvasNodeList;
    
}


}
                
            

