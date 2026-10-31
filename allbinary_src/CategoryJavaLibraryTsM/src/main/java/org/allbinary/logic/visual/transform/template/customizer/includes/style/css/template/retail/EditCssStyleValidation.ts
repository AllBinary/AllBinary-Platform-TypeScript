
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

        


            import { Exception } from '../../../../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { DomNodeInterface } from '../../../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { ValidationInterface } from '../../../../../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface

import { StyleData } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StyleData.js';
//not GWT import const StyleData

import { StylesData } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/StylesData.js';
//not GWT import const StylesData

import { ColorsView } from '../../../../../../../../../../../../org/allbinary/logic/visual/dhtml/style/color/ColorsView.js';
//not GWT import const ColorsView

import { Document } from '../../../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssStyleValidation } from './CssStyleValidation.js';
//sameFolderImports - not GWT import - same folder const CssStyleValidation

export class EditCssStyleValidation extends CssStyleValidation implements ValidationInterface, DomNodeInterface {
        

    public constructor(...args: any[]) {
        if(args.length === 0) {
            super();
            this.constructor$0();
            
        }
        else if(args.length === 1 && args[0] instanceof Document) {
            const document = args[0];
            super(document);
            this.constructor$1(document);
            
        }
        else if(args.length === 1) {
            const hashMap = args[0];
            super(hashMap);
            this.constructor$2(hashMap);
            
        }
        
    }
    
    private constructor$0(): void {
        
    }
    
    private constructor$1(document: Document): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$2(hashMap: HashMap<any, any>): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isValid();;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.validationInfo();;
    
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(StylesData.getInstance()!.NAME)!;;
    

    let styleNode: Node = document.createElement(StyleData.getInstance()!.NAME)!;;
    
node.appendChild(styleNode);
    
styleNode!.appendChild(new ColorsView().toXmlNode(document));
    

    let size: number = this.cssStyleElementVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let styleDomNodeInterface: DomNodeInterface = cssStyleElementVector!.get(i) as DomNodeInterface;;
    
styleNode!.appendChild(styleDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

