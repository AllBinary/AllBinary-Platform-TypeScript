
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
        



import { DomDocumentHelper } from "../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { TransformInterface } from "../../../../org/allbinary/logic/visual/transform/TransformInterface.js";

    
import { TransformDocumentInterface } from "../../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js";

    
import { TransformInfoInterface } from "../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CategoryView } from "./CategoryView.js";

import { CategoryInterface } from "./CategoryInterface.js";

export class CategoryComponent extends CategoryView implements TransformInterface {
        
public constructor (categoryInterface: CategoryInterface)                        

                            : super(categoryInterface){

            super();
            var categoryInterface = categoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public NO_TYPE: number = 0;
        
        

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NO_TYPE;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface){
var viewDocumentInterface = viewDocumentInterface
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;
        
        
;
    
document.appendChild(new CategoryView(this.getCategoryInterface()).
                            toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Error::class)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

