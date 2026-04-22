
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
        



import { Vector } from "../../../../../../../../../../java/util/Vector.js";

    
import { DomNodeHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { InputImageType } from "../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js";

    
import { StringMaker } from "../../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Document } from "../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../../org/w3c/dom/NodeList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageActionScriptOutputData } from "./ImageActionScriptOutputData.js";

export class ImageTypes
            extends Object
         {
        

    public static valueOf(anyType: any[]): ImageTypes{
var anyType = anyType

    var imageTypes: ImageTypes = new ImageTypes();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < anyType!.length; index++)
        {

    var imageType: InputImageType = InputImageType.getInstance(anyType[index]! as String)!;
        
        
;
    
imageTypes!.getVector()!.add(imageType);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageTypes;
    
}


    private vector: Vector = new Vector();
        
        
public constructor (){

            super();
        }

public constructor (node: Node){

            super();
        var node = node

    var nodeList: NodeList = node.getChildNodes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.TYPE) == 0)
                        
                                    {
                                    
    var nextImageTypeString: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getVector()!.add(InputImageType.getInstance(nextImageTypeString));
    

                                    }
                                
                        else {
                            


                            throw new Error("ImageTypes Unknown Node")

                        }
                            
}

}


    public getVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var newNode: Node = document.createElement(ImageActionScriptOutputData.TYPES)!;
        
        
;
    

    var size: number = this.vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var imageType: InputImageType = this.vector.get(index);

                         as InputImageType;
        
        
;
    
newNode!.appendChild(ModDomHelper.createTextNode(document, ImageActionScriptOutputData.TYPE, imageType!.getName()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("ImageTypes: ");
    

    var size: number = this.vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var imageType: InputImageType = this.vector.get(index);

                         as InputImageType;
        
        
;
    
stringBuffer!.append(imageType!.getName());
    

                        if(index < size -1)
                        stringBuffer!.append(", ");

                        
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

