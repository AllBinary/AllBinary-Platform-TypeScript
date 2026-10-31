
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
        
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssProperty } from './CssProperty.js';
//sameFolderImports - not GWT import - same folder const CssProperty

export class CssPropertyView
            extends Object
         implements DomNodeInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private cssProperty: CssProperty;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && typeof args[0] === 'string') {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(name: string): void {
        this.cssProperty= new CssProperty(name);
    

    }
    
    private constructor$1(node: Node): void {
        this.cssProperty= new CssProperty(node);
    

    }
    
    public getProperty(): CssProperty{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cssProperty;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cssProperty!.toXmlNode(document);;
    
}


}

