
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { DomDocumentHelper } from '../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { TransformInterface } from '../../../../org/allbinary/logic/visual/transform/TransformInterface.js';
      //not GWT import const TransformInterface = globalThis.org.allbinary.logic.visual.transform.TransformInterface;

      
import { TransformDocumentInterface } from '../../../../org/allbinary/logic/visual/transform/data/TransformDocumentInterface.js';
      //not GWT import const TransformDocumentInterface = globalThis.org.allbinary.logic.visual.transform.data.TransformDocumentInterface;

      
import { TransformInfoInterface } from '../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { Document } from '../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryView } from './CategoryView.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryView;

                import { CategoryInterface } from './CategoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.business.category.CategoryInterface;

                
export class CategoryComponent extends CategoryView implements TransformInterface {
        

public constructor (categoryInterface: CategoryInterface){
            super(categoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public NO_TYPE: number = 0;

    public getTypeId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NO_TYPE;
    
}


    public getTransformDocumentInterface(): TransformDocumentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public setTransformDocumentInterface(viewDocumentInterface: TransformDocumentInterface){
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;;
    
document.appendChild(new CategoryView(this.getCategoryInterface()).toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}



