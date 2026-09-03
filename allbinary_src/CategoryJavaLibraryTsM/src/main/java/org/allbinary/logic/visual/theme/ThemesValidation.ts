
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { Validation } from '../../../../../org/allbinary/logic/control/validate/Validation.js';
      //not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThemesData } from './ThemesData.js';
//not GWT import const ThemesData = globalThis.org.allbinary.logic.visual.theme.ThemesData;

                
export class ThemesValidation extends Validation implements DomNodeInterface {
        

    private themeVector: BasicArrayList;

public constructor (){

            super();
        this.themeVector= new BasicArrayListD();
    
}


public constructor (node: Node){

            super();
        }


public constructor (hashMap: HashMap<any, any>){

            super();
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(ThemesData.getInstance()!.NAME)!;;
    

    var size: number = this.themeVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var themeDomNodeInterface: DomNodeInterface = this.themeVector!.get(i) as DomNodeInterface;;
    
node.appendChild(themeDomNodeInterface!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



