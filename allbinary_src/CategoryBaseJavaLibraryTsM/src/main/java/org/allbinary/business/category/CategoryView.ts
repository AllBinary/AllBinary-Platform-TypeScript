
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Vector } from '../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { CategoryPropertiesInterface } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
      const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
//not game specific package import { CategoryPropertiesView } from '../../../../org/allbinary/business/category/properties/CategoryPropertiesView.js';
      const CategoryPropertiesView = globalThis.org.allbinary.business.category.properties.CategoryPropertiesView;

      
//not game specific package import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { InterfaceUtil } from '../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js';
      const InterfaceUtil = globalThis.org.allbinary.logic.java.anyType.InterfaceUtil;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { Document } from '../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryInterface } from './CategoryInterface.js';
import { CategoryData } from './CategoryData.js';

export class CategoryView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private categoryInterface: CategoryInterface;

public constructor (categoryInterface: CategoryInterface){

            super();
        this.categoryInterface= categoryInterface;
    
}


    public getCategoryInterface(): CategoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(CategoryData.getInstance()!.NAME)!;;
    

    var childCategoryVector: Vector = this.categoryInterface!.getChildNodes()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Number Of Children: " +childCategoryVector!.length, this, "toXmlNode");
    

                                    }
                                

    var size: number = childCategoryVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var anyType: any = childCategoryVector!.get(i)!;;
    

    var categoryPropertiesInterface: CategoryPropertiesInterface = 
                null
            ;;
    

                        if(InterfaceUtil.isImplemented("CategoryPropertiesInterface", anyType))
                        
                                    {
                                    categoryPropertiesInterface= anyType as CategoryPropertiesInterface;
    

                                    }
                                
                             else 
                        if(InterfaceUtil.isImplemented("CategoryInterface", anyType))
                        
                                    {
                                    
    var categoryInterface: CategoryInterface = anyType as CategoryInterface;;
    
categoryPropertiesInterface= categoryInterface!.getProperties();
    

                                    }
                                
                        else {
                            
    var isImpl: string = InterfaceUtil.viewAll(anyType!.constructor, CommonSeps.getInstance()!.NEW_LINE)!;;
    



                            throw new Exception("CategoryView found unknown object.\n" +"Show Testing:" +isImpl);
                    

                        }
                            

    var childCategoryNode: Node = new CategoryPropertiesView(categoryPropertiesInterface).toXmlNode(document)!;;
    
node.appendChild(childCategoryNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

