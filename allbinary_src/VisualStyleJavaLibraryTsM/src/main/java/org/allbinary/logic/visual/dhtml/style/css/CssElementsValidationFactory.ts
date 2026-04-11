
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { ValidationInterface } from "../../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

export class CssElementsValidationFactory
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getInstance(cssElementStyleNodeList: Vector): Vector{
    //var cssElementStyleNodeList = cssElementStyleNodeList

    var styles: Vector = new Vector();
        
        
;
    

    var size: number = cssElementStyleNodeList!.length!;
        
        
;
    

    var cssElementStyleNode: Node
;
    

    var cssValidationInterface: ValidationInterface
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
cssElementStyleNode= cssElementStyleNodeList!.get(index);

                         as Node;
    
cssValidationInterface= CssElementValidationFactory.getInstance(cssElementStyleNode);

                         as ValidationInterface;
    
styles.add(cssValidationInterface);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}


    public static getInstance(hashMap: HashMap<any, any>): Vector{
    //var hashMap = hashMap

    var styles: Vector = new Vector();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return styles;
    
}

private constructor (){

            super();
            }


}
                
            

