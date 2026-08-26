
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
        
//not game specific package import { Vector } from '../../../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { InputImageType } from '../../../../../../../../../../org/allbinary/input/media/image/InputImageType.js';
      const InputImageType = globalThis.org.allbinary.input.media.image.InputImageType;

      
//not game specific package import { StringMaker } from '../../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageActionScriptOutputData } from './ImageActionScriptOutputData.js';

export class ImageTypes
            extends Object
         {
        

    public static valueOf(anyType: any[]): ImageTypes{

    var imageTypes: ImageTypes = new ImageTypes();;
    




                        for (
    var index: number = 0;index < anyType!.length; index++)
        {

    var imageType: InputImageType = InputImageType.getInstance(anyType[index]! as string)!;;
    
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
        
    var nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.TYPE) == 0)
                        
                                    {
                                    
    var nextImageTypeString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.getVector()!.add(InputImageType.getInstance(nextImageTypeString));
    

                                    }
                                
                        else {
                            


                            throw new Exception("ImageTypes Unknown Node");
                    

                        }
                            
}

}


    public getVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vector;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var newNode: Node = document.createElement(ImageActionScriptOutputData.TYPES)!;;
    

    var size: number = this.vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var imageType: InputImageType = this.vector.get(index) as InputImageType;;
    
newNode!.appendChild(ModDomHelper.createTextNode(document, ImageActionScriptOutputData.TYPE, imageType!.getName()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newNode;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("ImageTypes: ");
    

    var size: number = this.vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var imageType: InputImageType = this.vector.get(index) as InputImageType;;
    
stringBuffer!.append(imageType!.getName());
    

                        if(index < size -1)
                        stringBuffer!.append(", ")
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

