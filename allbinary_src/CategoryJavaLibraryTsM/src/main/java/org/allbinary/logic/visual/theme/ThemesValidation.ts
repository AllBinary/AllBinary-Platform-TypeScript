
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { DomNodeInterface } from "../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { Validation } from "../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

import { Boolean } from "./Boolean.js";

import { ThemesData } from "./ThemesData.js";

export class ThemesValidation extends Validation
                , DomNodeInterface {
        

    private themeVector: Vector
public constructor (){

            super();
            this.themeVector= new Vector();
    
}

public constructor (node: Node){

            super();
            var node = node
}

public constructor (hashMap: HashMap<any, any>){

            super();
            var hashMap = hashMap
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(ThemesData.getInstance()!.NAME)!;
        
        
;
    

    var size: number = themeVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var themeDomNodeInterface: DomNodeInterface = themeVector!.get(i);

                         as DomNodeInterface;
        
        
;
    
node.appendChild(themeDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

