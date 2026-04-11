
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { CategoryPropertiesFactory } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesFactory.js";

    
import { CategoryPropertiesFactoryInterface } from "../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

export class CategoryAbstractFactory
            extends Object
        
                , CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (){

            super();
            }


    public getRootInstance(): CategoryInterface{



                            throw RuntimeException()
}


    public getRootInstance(categoryAbPath: AbPath): CategoryInterface{
var categoryAbPath = categoryAbPath



                            throw RuntimeException()
}


    public getRootInstanceFromNode(node: Node): CategoryInterface{
var node = node



                            throw RuntimeException()
}


    public getInstance(categoryName: string): CategoryInterface{
var categoryName = categoryName

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "getInstance(String)");
    

                                    }
                                

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = CategoryPropertiesFactory(categoryName) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryName: string): CategoryInterface{
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryName = categoryName

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, String)");
    

                                    }
                                

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = CategoryPropertiesFactory(categoryName) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface , String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(node: Node): CategoryInterface{
var node = node

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "getInstance(Node)");
    

                                    }
                                

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(Node, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, node: Node): CategoryInterface{
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var node = node

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, Node)");
    

                                    }
                                

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, Node, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPropertiesHashMap: HashMap<any, any>): CategoryInterface{
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPropertiesHashMap = categoryPropertiesHashMap

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)");
    

                                    }
                                

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

