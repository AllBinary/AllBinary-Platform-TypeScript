
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
        



import { HashMap } from "../../../../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ValidationInterface } from "../../../../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { StyleData } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StyleData.js";

    
import { StylesData } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesData.js";

    
import { ColorsView } from "../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/color/ColorsView.js";

    
import { Document } from "../../../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CssStyleValidation } from "./CssStyleValidation.js";

export class EditCssStyleValidation extends CssStyleValidation implements ValidationInterface, DomNodeInterface {
        
public constructor (){

            super();
        }

public constructor (document: Document){
            super(document);
                    var document = document


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (hashMap: HashMap<any, any>){
            super(hashMap);
                    var hashMap = hashMap


                            //For kotlin this is before the body of the constructor.
                    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isValid();

                        ;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.validationInfo();

                        ;
    
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

    var node: Node = document.createElement(StylesData.getInstance()!.NAME)!;
        
        
;
    

    var styleNode: Node = document.createElement(StyleData.getInstance()!.NAME)!;
        
        
;
    
node.appendChild(styleNode);
    
styleNode!.appendChild(new ColorsView().
                            toXmlNode(document));
    

    var size: number = cssStyleElementVector!.size()!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var styleDomNodeInterface: DomNodeInterface = cssStyleElementVector!.get(i);

                         as DomNodeInterface;
        
        
;
    
styleNode!.appendChild(styleDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

