
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { ValidationInterface } from '../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyData } from './CssPropertyData.js';
//sameFolderImports - not GWT import - same folder const CssPropertyData
import { CssPropertyValidationFactory } from './CssPropertyValidationFactory.js';
//sameFolderImports - not GWT import - same folder const CssPropertyValidationFactory

export class CssPropertiesValidationFactory
            extends Object
         {
        
static getInstance(...args: any[]): any {
   
    if (args.length === 1) return this.getInstance$overload1(args[0]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public static getInstance$overload1(nodeList: NodeList): BasicArrayList{

    let propertiesVector: BasicArrayList = new BasicArrayListD();;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let node: Node = nodeList!.item(index)!;;
    

                        if(node.getNodeName()!.compareTo(CssPropertyData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    let cssPropertyValidationInterface: ValidationInterface = CssPropertyValidationFactory.getInstance(node) as ValidationInterface;;
    
propertiesVector!.add(cssPropertyValidationInterface);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return propertiesVector;
    
}


    public static getInstance$overload2(hashMap: HashMap<any, any>): BasicArrayList{

    let styles: BasicArrayList = new BasicArrayListD();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}


private constructor (){

            super();
        }


}

