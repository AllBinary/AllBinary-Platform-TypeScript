
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { ValidationInterface } from '../../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      //not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyData } from './CssPropertyData.js';
//not GWT import const CssPropertyData = globalThis.org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyData;

                import { CssPropertyValidationFactory } from './CssPropertyValidationFactory.js';
//not GWT import const CssPropertyValidationFactory = globalThis.org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyValidationFactory;

                
export class CssPropertiesValidationFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(nodeList: NodeList): BasicArrayList{

    var propertiesVector: BasicArrayList = new BasicArrayListD();;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var node: Node = nodeList!.item(index)!;;
    

                        if(node.getNodeName()!.compareTo(CssPropertyData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var cssPropertyValidationInterface: ValidationInterface = CssPropertyValidationFactory.getInstance(node) as ValidationInterface;;
    
propertiesVector!.add(cssPropertyValidationInterface);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return propertiesVector;
    
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



