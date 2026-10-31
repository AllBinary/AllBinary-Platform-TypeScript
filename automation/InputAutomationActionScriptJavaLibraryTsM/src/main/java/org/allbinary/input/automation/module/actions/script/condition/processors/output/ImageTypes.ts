
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

        


            import { Object } from '../../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomNodeHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { ModDomHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
//not GWT import const InputImageType

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageActionScriptOutputData } from './ImageActionScriptOutputData.js';
//sameFolderImports - not GWT import - same folder const ImageActionScriptOutputData

export class ImageTypes
            extends Object
         {
        

    public static valueOf(anyType: any[]): ImageTypes{

    let imageTypes: ImageTypes = new ImageTypes();;
    




                        for (
    let index: number = 0;index < anyType!.length; index++)
        {

    let imageType: InputImageType = InputImageType.getInstance(anyType[index]! as string)!;;
    
imageTypes!.getVector()!.add(imageType);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageTypes;
    
}


    private vector: BasicArrayList = new BasicArrayListD();

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        
    }
    
    private constructor$1(node: Node): void {
        
    let nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.TYPE) == 0)
                        
                                    {
                                    
    let nextImageTypeString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.getVector()!.add(InputImageType.getInstance(nextImageTypeString));
    

                                    }
                                
                        else {
                            


                            throw new Exception("ImageTypes Unknown Node");
                    

                        }
                            
}


    }
    
    public getVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let newNode: Node = document.createElement(ImageActionScriptOutputData.TYPES)!;;
    

    let size: number = this.vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let imageType: InputImageType = this.vector.get(index) as InputImageType;;
    
newNode!.appendChild(ModDomHelper.createTextNode(document, ImageActionScriptOutputData.TYPE, imageType!.getName()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("ImageTypes: ");
    

    let size: number = this.vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let imageType: InputImageType = this.vector.get(index) as InputImageType;;
    
stringBuffer!.append(imageType!.getName());
    

                        if(index < size -1)
                        stringBuffer!.append(", ")
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

