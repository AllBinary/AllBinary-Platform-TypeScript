
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
        



import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Directory } from "../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { TransformInterface } from "../../../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformDocumentFactory } from "../../../../../org/allbinary/logic/visual/transform/data/TransformDocumentFactory.js";

    
import { TransformDocumentInterface } from "../../../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DirectoryDataModel
            extends Object
         implements DomNodeInterface, TransformInterface {
        

    private readonly fileBasicArrayList: BasicArrayList

    private transformDocumentInterface: TransformDocumentInterface
public constructor (file: AbFile){

            super();
                //var file = file
this.fileBasicArrayList= Directory.getInstance()!.search(file);
    
this.transformDocumentInterface= TransformDocumentFactory.getInstance();

                         as TransformDocumentInterface;
    
}


    public NO_TYPE: number = 0;
        
        

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_TYPE;
    
}


                //@Throws(Error::class)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setTransformDocumentInterface(transformDocumentInterface: TransformDocumentInterface){
var transformDocumentInterface = transformDocumentInterface
this.transformDocumentInterface= transformDocumentInterface;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformDocumentInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
    //var document = document

    var dirNode: Node = document.createElement("dir")!;
        
        
;
    

    var size: number = this.fileBasicArrayList!.size()!;
        
        
;
    

    var nextFile: AbFile
;
    

    var fileNode: Node
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextFile= this.fileBasicArrayList!.get(index);

                         as AbFile;
    
fileNode= new FileDomDataModel(nextFile).
                            toXmlNode(document);
    
dirNode!.appendChild(fileNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dirNode;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getTransformDocumentInterface()!.getDoc();

                        ;
    
}


                //@Throws(Error::class)
            
    public view(): string{

    var node: Node = this.toXmlNode(this.getTransformDocumentInterface()!.getDoc())!;
        
        
;
    
this.getTransformDocumentInterface()!.getBaseNode()!.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.toString(this.getTransformDocumentInterface()!.getDoc());

                        ;
    
}


}
                
            

