
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StdUtil } from '../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { ValidationInterface } from '../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      //not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssElementValidationFactory } from './CssElementValidationFactory.js';
//not GWT import const CssElementValidationFactory = globalThis.org.allbinary.logic.visual.dhtml.style.css.CssElementValidationFactory;

                
export class CssElementsValidationFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(cssElementStyleNodeList: BasicArrayList): BasicArrayList{

    var styles: BasicArrayList = new BasicArrayListD();;
    

    var size: number = cssElementStyleNodeList!.size()!;;
    

    var cssElementStyleNode: Node;;
    

    var cssValidationInterface: ValidationInterface;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
cssElementStyleNode= cssElementStyleNodeList!.get(index) as Node;
    
cssValidationInterface= CssElementValidationFactory.getInstance(cssElementStyleNode) as ValidationInterface;
    
styles.add(cssValidationInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}


    public static getInstance(hashMap: HashMap<any, any>): BasicArrayList{

    var styles: BasicArrayList = new BasicArrayListD();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}


private constructor (){

            super();
        }


}



