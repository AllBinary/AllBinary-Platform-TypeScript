
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
        
import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
      //not GWT import const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      //not GWT import const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Directory } from '../../../../../org/allbinary/logic/io/file/directory/Directory.js';
      //not GWT import const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryPrivateTree } from './CategoryPrivateTree.js';
import { CategoryModifierTreeInterface } from './CategoryModifierTreeInterface.js';

export class CategoryModifierTree extends CategoryPrivateTree implements CategoryModifierTreeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

public constructor (categoryFactoryInterface: CategoryFactoryInterface){
            super(categoryFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "CategoryModifierTree(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public insert(parentCategoryInterface: CategoryInterface, newChildCategoryInterface: CategoryInterface){

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Inserting", this, "insert()");
    

                                    }
                                

                        if(parentCategoryInterface!.isValid().valueOf())
                        
                                    {
                                    parentCategoryInterface!.addChild(newChildCategoryInterface);
    

    var directoryToBeCreatedAbPath: AbPath = new AbPath(newChildCategoryInterface!.getRootFilePath()!.toString() +newChildCategoryInterface!.getPath()!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    
this.directory.create(directoryToBeCreatedAbPath);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF("Saving", this, "insert()");
    

                                    }
                                
this.save(parentCategoryInterface);
    
this.save(newChildCategoryInterface);
    

                                    }
                                
                             else 
                        if()
                        

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "insert", e);
    

                                    }
                                
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public delete(parentCategoryInterface: CategoryInterface, existingChildCategoryInterface: CategoryInterface){

        try {
            
                        if(parentCategoryInterface!.isValid().valueOf())
                        
                                    {
                                    parentCategoryInterface!.addChild(existingChildCategoryInterface);
    

    var directoryToBeDeletedAbPath: AbPath = new AbPath(existingChildCategoryInterface!.getRootFilePath()!.toString() +existingChildCategoryInterface!.getPath()!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    
this.delete(existingChildCategoryInterface);
    
parentCategoryInterface!.removeChild(existingChildCategoryInterface);
    
this.save(parentCategoryInterface);
    
this.directory.remove(directoryToBeDeletedAbPath);
    

                                    }
                                
                             else 
                        if()
                        

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.delete, e);
    

                                    }
                                
}

}


}



