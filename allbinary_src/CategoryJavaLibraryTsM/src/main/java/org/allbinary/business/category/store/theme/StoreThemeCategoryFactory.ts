
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { CategoryFactoryInterface } from "../../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { CategoryUtil } from "../../../../../../org/allbinary/business/category/CategoryUtil.js";

    
import { CategoryPropertiesFactory } from "../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactory.js";

    
import { CategoryPropertiesFactoryInterface } from "../../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { RootStoreThemeCategoryPropertiesFactory } from "../../../../../../org/allbinary/business/category/properties/root/store/theme/RootStoreThemeCategoryPropertiesFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class StoreThemeCategoryFactory
            extends Object
        
                , CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.START, this, "StoreCategoryFactory(TransformInfoInterface transformInfoInterface)");
    

                                    }
                                
this.transformInfoInterface= transformInfoInterface;
    
}


    public getRootInstance(): CategoryInterface{

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, 0) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getRootInstance()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRootInstance(categoryAbPath: AbPath): CategoryInterface{
var categoryAbPath = categoryAbPath

        try {
            
    var level: number = CategoryUtil.getPathLevel(categoryAbPath)!;
        
        
;
    

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface, categoryAbPath) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getRootInstance(String)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRootInstanceFromNode(node: Node): CategoryInterface{
var node = node

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreThemeCategoryPropertiesFactory(this.transformInfoInterface, node) as CategoryPropertiesFactoryInterface;
        
        
;
    

    var categoryPath: AbPath = new AbPath(CategoryUtil.getNameFromNode(node));
        
        
;
    

    var level: number = CategoryUtil.getPathLevel(categoryPath)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, node, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getRootInstance(node)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(categoryPath: string, level: number): CategoryInterface{
var categoryPath = categoryPath
var level = level

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPath) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(rootCategoryInterface: CategoryInterface, parentCategoryInterface: CategoryInterface, categoryPath: string): CategoryInterface{
var rootCategoryInterface = rootCategoryInterface
var parentCategoryInterface = parentCategoryInterface
var categoryPath = categoryPath

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPath) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface , String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(node: Node, level: number): CategoryInterface{
var node = node
var level = level

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(Node, int)", e);
    

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
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(node) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, Node, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstance(categoryPropertiesHashMap: HashMap<any, any>, level: number): CategoryInterface{
var categoryPropertiesHashMap = categoryPropertiesHashMap
var level = level

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(HashMap)", e);
    

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
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new CategoryPropertiesFactory(categoryPropertiesHashMap) as CategoryPropertiesFactoryInterface;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StoreThemeCategory(this.transformInfoInterface, rootCategoryInterface, parentCategoryInterface, categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(CategoryInterface, CategoryInterface, HashMap)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

