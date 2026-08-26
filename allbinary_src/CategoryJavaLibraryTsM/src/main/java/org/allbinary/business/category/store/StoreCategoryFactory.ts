
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Category } from '../../../../../org/allbinary/business/category/Category.js';
      const Category = globalThis.org.allbinary.business.category.Category;

      
//not game specific package import { CategoryAbstractFactory } from '../../../../../org/allbinary/business/category/CategoryAbstractFactory.js';
      const CategoryAbstractFactory = globalThis.org.allbinary.business.category.CategoryAbstractFactory;

      
//not game specific package import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
      const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
//not game specific package import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { CategoryUtil } from '../../../../../org/allbinary/business/category/CategoryUtil.js';
      const CategoryUtil = globalThis.org.allbinary.business.category.CategoryUtil;

      
//not game specific package import { CategoryPropertiesFactoryInterface } from '../../../../../org/allbinary/business/category/properties/CategoryPropertiesFactoryInterface.js';
      const CategoryPropertiesFactoryInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesFactoryInterface;

      
//not game specific package import { RootStoreCategoryPropertiesFactory } from '../../../../../org/allbinary/business/category/properties/root/store/RootStoreCategoryPropertiesFactory.js';
      const RootStoreCategoryPropertiesFactory = globalThis.org.allbinary.business.category.properties.root.store.RootStoreCategoryPropertiesFactory;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StoreCategoryFactory extends CategoryAbstractFactory implements CategoryFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "StoreCategoryFactory(TransformInfoInterface transformInfoInterface)");
    

                                    }
                                
this.transformInfoInterface= transformInfoInterface;
    
}


    public getRootInstance(): CategoryInterface{

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getRootInstance(categoryPath: AbPath): CategoryInterface{

        try {
            
    var level: number = CategoryUtil.getPathLevel(categoryPath)!;;
    

    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface, categoryPath) as CategoryPropertiesFactoryInterface;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

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


    public getRootInstanceFromNode(node: Node): CategoryInterface{

        try {
            
    var categoryPropertiesFactoryInterface: CategoryPropertiesFactoryInterface = new RootStoreCategoryPropertiesFactory(this.transformInfoInterface, node) as CategoryPropertiesFactoryInterface;;
    

    var categoryPath: AbPath = new AbPath(CategoryUtil.getNameFromNode(node), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var level: number = CategoryUtil.getPathLevel(categoryPath)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Category(categoryPropertiesFactoryInterface, level) as CategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.ENTITYFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getInstance(String, int)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

