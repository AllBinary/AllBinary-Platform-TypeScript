
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { DomHelper } from '../../../../../org/allbinary/dom/DomHelper.js';
//not GWT import const DomHelper

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WorkAreaDom
            extends Object
         {
        

    public static readonly WORKAREA: string = "workArea";

    public static readonly NAME: string = "name";

    public static readonly FRAMES: string = "frames";

    private name: string;

    private canvasNodeList: BasicArrayList;

public constructor (document: Document){

            super();
        
    let workAreaNodeList: NodeList = document.getElementsByTagName(this.WORKAREA)!;;
    

                        if(workAreaNodeList != 
                                    null
                                )
                        
                                    {
                                    
    let numberOfworkAreas: number = workAreaNodeList!.getLength()!;;
    

                        if(numberOfworkAreas == 1)
                        
                                    {
                                    
    let numberOfNodes: number = workAreaNodeList!.getLength()!;;
    

    let nameNode: Node = DomHelper.getInstance()!.searchNodeList(this.NAME, workAreaNodeList!.item(0)!.getChildNodes())!;;
    

    let nameTextNode: Node = nameNode!.getFirstChild()!;;
    
this.name= nameTextNode!.getNodeValue();
    

                                    }
                                
                        else {
                            


                            throw new Exception("Wrong Number of WorkAreas: " +numberOfworkAreas);
                    

                        }
                            
this.canvasNodeList= DomHelper.getInstance()!.getChildrenWithoutTextNodes(WorkAreaDom.FRAMES, workAreaNodeList!.item(0)!.getChildNodes());
    

                                    }
                                
                        else {
                            


                            throw new Exception("workArea Node Not Found");
                    

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

