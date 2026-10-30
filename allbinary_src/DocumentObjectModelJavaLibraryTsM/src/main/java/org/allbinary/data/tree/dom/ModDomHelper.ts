
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ClassUtil } from '../../../../../org/allbinary/logic/java/anyType/clazz/ClassUtil.js';
//not GWT import const ClassUtil

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DomData } from './DomData.js';
//sameFolderImports - not GWT import - same folder const DomData

export class ModDomHelper
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static createTextNode(document: Document, name: string, text: string): Node{

    let newValueNode: Node = document.createElement(name)!;;
    

    let newValueTextNode: Node = document.createTextNode(text)!;;
    
newValueNode!.appendChild(newValueTextNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newValueNode;
    
}


                //@Throws(Exception.constructor)
            
    public static createValueNode(document: Document, text: string): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.VALUE, text);;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameNode(document: Document, text: string): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.NAME, text);;
    
}


                //@Throws(Exception.constructor)
            
    public static createIndexNode(document: Document, index: number): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, DomData.INDEX, new Integer(index).toString());;
    
}

static createNameValueNodes(...args: any[]): any {
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') return this.createNameValueNodes$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 3 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.createNameValueNodes$overload2(args[0], args[1], args[2]);
   
    if (args.length === 3 && typeof args[1] === 'string') return this.createNameValueNodes$overload3(args[0], args[1], args[2]);
   
    if (args.length === 3) return this.createNameValueNodes$overload4(args[0], args[1], args[2]);
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.createNameValueNodes$overload5(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: createNameValueNodes'); }
  
                //@Throws(Exception.constructor)
            
    public static createNameValueNodes$overload1(document: Document, elementName: string, nameText: string, valueText: string): Node{

    let newNode: Node = document.createElement(elementName)!;;
    
newNode!.appendChild(ModDomHelper.createNameNode(document, nameText));
    
newNode!.appendChild(ModDomHelper.createValueNode(document, valueText));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameValueNodes$overload2(document: Document, elementNameAndNameText: string, valueText: string): Node{

    let newNode: Node = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, elementNameAndNameText, valueText)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}

static createNameValueIndexNodes(...args: any[]): any {
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'string') return this.createNameValueIndexNodes$overload1(args[0], args[1], args[2], args[3]);
   
    if (args.length === 4 && typeof args[1] === 'string' && typeof args[2] === 'string') return this.createNameValueIndexNodes$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: createNameValueIndexNodes'); }
  
                //@Throws(Exception.constructor)
            
    public static createNameValueIndexNodes$overload1(document: Document, elementNameAndNameText: string, index: number, valueText: string): Node{

    let newNode: Node = ModDomHelper.createNameValueNodes(document, elementNameAndNameText, valueText)!;;
    
newNode!.appendChild(ModDomHelper.createIndexNode(document, index));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameValueNodes$overload3(document: Document, rootNode: string, hashMap: HashMap<any, any>): Node{

    let node: Node = document.createElement(rootNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, node, hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameValueNodes$overload4(document: Document, node: Node, hashMap: HashMap<any, any>): Node{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let keySet: Set = hashMap!.keys()!;;
    

    let keyArray: any[] = keySet!.()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let objectKey: any = keyArray[i]!;;
    

    let name: string = objectKey as string;;
    

    let anyType: any = hashMap!.get(objectKey);;
    

                        if(anyType == 
                                    null
                                )
                        
                                    {
                                    
    let value: string = stringUtil!.EMPTY_STRING;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    

                                    }
                                
                             else 
                        if(((value: any) => typeof value === 'string' || value instanceof String)(anyType))
                        
                                    {
                                    
    let value: string = stringUtil!.getNonNull(anyType as string)!;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    

                                    }
                                
                             else 
                        if(anyType instanceof HashMap)
                        
                                    {
                                    node.appendChild(ModDomHelper.createNameValueNodes(document, name, hashMap));
    

                                    }
                                
                        else {
                            


                            throw new Exception("HashMap value is the wrong instance and is: " +ClassUtil.viewAll(anyType, CommonSeps.getInstance()!.NEW_LINE));
                    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameValueNodes$overload5(document: Document, rootNodeName: string, duplicateNodeName: string, valueVector: BasicArrayList): Node{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let node: Node = document.createElement(rootNodeName)!;;
    

    let size: number = valueVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let value: string = stringUtil!.getNonNull(valueVector!.get(i) as string)!;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, duplicateNodeName, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public static createNameValueIndexNodes$overload2(document: Document, rootNodeName: string, duplicateNodeName: string, valueVector: BasicArrayList): Node{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let node: Node = document.createElement(rootNodeName)!;;
    

    let size: number = valueVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let value: string = stringUtil!.getNonNull(valueVector!.get(index) as string)!;;
    
node.appendChild(ModDomHelper.createNameValueIndexNodes(document, duplicateNodeName, index, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}

static createNodeWithValueNodes(...args: any[]): any {
   
    if (args.length === 3 && typeof args[1] === 'string') return this.createNodeWithValueNodes$overload1(args[0], args[1], args[2]);
   
    if (args.length === 3) return this.createNodeWithValueNodes$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: createNodeWithValueNodes'); }
  
                //@Throws(Exception.constructor)
            
    public static createNodeWithValueNodes$overload1(document: Document, rootNode: string, hashMap: HashMap<any, any>): Node{

    let node: Node = document.createElement(rootNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNodeWithValueNodes(document, node, hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public static createNodeWithValueNodes$overload2(document: Document, node: Node, hashMap: HashMap<any, any>): Node{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let keySet: Set = hashMap!.keys()!;;
    

    let keyArray: any[] = keySet!.()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let name: string = keyArray[i]! as string;;
    

    let anyType: any = hashMap!.get(name);;
    

    let value: string = stringUtil!.getNonNull(anyType as string)!;;
    
node.appendChild(ModDomHelper.createTextNode(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


private constructor (){

            super();
        }


}

