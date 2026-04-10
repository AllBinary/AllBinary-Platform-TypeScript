
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { InputImageType } from "../../../../../../../../org/allbinary/input/media/image/InputImageType.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class GenericProfileDataWorkerType
            extends Object
        
                , GenericProfileDataWorkerTypeInterface {
        

    private hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

    public SAVED_CAPTURE: GenericProfileDataWorkerType = SavedCaptureGenericProfileDataWorkerType.SAVED_CAPTURE;
        
        

    public SCREEN_CAPTURE: GenericProfileDataWorkerType = new GenericProfileDataWorkerType("Screen " +InputImageType.CAPTURE.getName());
        
        

    public COMPARISON: GenericProfileDataWorkerType = new GenericProfileDataWorkerType(InputImageType.COMPARISON.getName());
        
        

    public MOTION: GenericProfileDataWorkerType = new GenericProfileDataWorkerType(InputImageType.MOTION.getName());
        
        

    public static getInstance(node: Node): GenericProfileDataWorkerType{
var node = node

    var name: string = DomNodeHelper.getTextNodeValue(node)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap!.get(name as Object) as GenericProfileDataWorkerType;
    
}


    private name: string
public constructor (name: string){

            super();
            var name = name
this.setName(name)
put(this.getName(), this)
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createTextNode(document, GenericProfileDataWorkerData.NAME, name)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "GenericProfileDataWorkerType: " +this.getName();
    
}


}
                
            

