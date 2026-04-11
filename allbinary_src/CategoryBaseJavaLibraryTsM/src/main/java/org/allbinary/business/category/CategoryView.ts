
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
        

//import { Vector } from "../../../../java/util/Vector.js";

    
import { CategoryPropertiesInterface } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { CategoryPropertiesView } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesView.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InterfaceUtil } from "../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class CategoryView
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private categoryInterface: CategoryInterface
public constructor (categoryInterface: CategoryInterface){

            super();
            var categoryInterface = categoryInterface
this.categoryInterface= categoryInterface;
    
}


    public getCategoryInterface(): CategoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(CategoryData.getInstance()!.NAME)!;
        
        
;
    

    var childCategoryVector: Vector = this.categoryInterface!.getChildNodes()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put("Number Of Children: " +childCategoryVector!.length, this, "toXmlNode");
    

                                    }
                                

    var size: number = childCategoryVector!.length!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var anyType: any = {} = childCategoryVector!.get(i)!;
        
        
;
    

    var categoryPropertiesInterface: CategoryPropertiesInterface = 
                null
            ;
        
        
;
    

                        if(InterfaceUtil.isImplemented("CategoryPropertiesInterface", anyType))
                        
                                    {
                                    categoryPropertiesInterface= anyType as CategoryPropertiesInterface;
    

                                    }
                                
                             else 
                        if(InterfaceUtil.isImplemented("CategoryInterface", anyType))
                        
                                    {
                                    
    var categoryInterface: CategoryInterface = anyType as CategoryInterface;
        
        
;
    
categoryPropertiesInterface= categoryInterface!.getProperties();
    

                                    }
                                
                        else {
                            
    var isImpl: string = InterfaceUtil.viewAll(anyType!constructor, CommonSeps.getInstance()!.NEW_LINE)!;
        
        
;
    



                            throw Error("CategoryView found unknown object.\n" +"Show Testing:" +isImpl)

                        }
                            

    var childCategoryNode: Node = CategoryPropertiesView(categoryPropertiesInterface).
                            toXmlNode(document)!;
        
        
;
    
node.appendChild(childCategoryNode);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

