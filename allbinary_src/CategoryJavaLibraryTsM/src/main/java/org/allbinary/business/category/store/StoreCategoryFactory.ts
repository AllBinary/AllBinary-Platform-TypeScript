
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
        



import { Category } from "../../../../../org/allbinary/business/category/Category.js";

    
import { CategoryAbstractFactory } from "../../../../../org/allbinary/business/category/CategoryAbstractFactory.js";

    
import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { CategoryUtil } from "../../../../../org/allbinary/business/category/CategoryUtil.js";

    
import { CategoryPropertiesFactoryInterface } from "../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js";

    
import { RootStoreCategoryPropertiesFactory } from "../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryPropertiesFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class StoreCategoryFactory extends CategoryAbstractFactory
                , CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, "StoreCategoryFactory(TransformInfoInterface transformInfoInterface)")

                                    }
                                
this.transformInfoInterface= transformInfoInterface
}


    public getRootInstance(): CategoryInterface{

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = RootStoreCategoryPropertiesFactory(this.transformInfoInterface) as CategoryPropertiesFactoryInterface;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRootInstance(categoryPath: AbPath): CategoryInterface{
var categoryPath = categoryPath

        try {
            
    var level: number = CategoryUtil.getPathLevel(categoryPath)!;
        
        


    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = RootStoreCategoryPropertiesFactory(this.transformInfoInterface, categoryPath) as CategoryPropertiesFactoryInterface;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRootInstanceFromNode(node: Node): CategoryInterface{
var node = node

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = RootStoreCategoryPropertiesFactory(this.transformInfoInterface, node) as CategoryPropertiesFactoryInterface;
        
        


    var categoryPath: AbPath = new AbPath(CategoryUtil.getNameFromNode(node));
        
        


    var level: number = CategoryUtil.getPathLevel(categoryPath)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getInstance(String, int)", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

