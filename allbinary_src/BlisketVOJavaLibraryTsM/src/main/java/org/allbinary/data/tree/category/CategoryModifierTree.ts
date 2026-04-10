
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
        



import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Directory } from "../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class CategoryModifierTree extends CategoryPrivateTree
                , CategoryModifierTreeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        
public constructor (categoryFactoryInterface: CategoryFactoryInterface)                        

                            : super(categoryFactoryInterface){

            super();
            var categoryFactoryInterface = categoryFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, "CategoryModifierTree(CategoryFactoryInterface categoryFactoryInterface)")

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public insert(parentCategoryInterface: CategoryInterface, newChildCategoryInterface: CategoryInterface){
var parentCategoryInterface = parentCategoryInterface
var newChildCategoryInterface = newChildCategoryInterface

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put("Inserting", this, "insert()")

                                    }
                                

                        if(parentCategoryInterface!.isValid())
                        
                                    {
                                    parentCategoryInterface!.addChild(newChildCategoryInterface)

    var directoryToBeCreatedAbPath: AbPath = new AbPath(newChildCategoryInterface!.getRootFilePath()!.toString() +newChildCategoryInterface!.getPath()!.toString());
        
        

this.directory.create(directoryToBeCreatedAbPath)

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put("Saving", this, "insert()")

                                    }
                                
this.this.save(parentCategoryInterface)
this.this.save(newChildCategoryInterface)

                                    }
                                
                             else 
                        if()
                        
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "insert", e)

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public delete(parentCategoryInterface: CategoryInterface, existingChildCategoryInterface: CategoryInterface){
var parentCategoryInterface = parentCategoryInterface
var existingChildCategoryInterface = existingChildCategoryInterface

        try {
            
                        if(parentCategoryInterface!.isValid())
                        
                                    {
                                    parentCategoryInterface!.addChild(existingChildCategoryInterface)

    var directoryToBeDeletedAbPath: AbPath = new AbPath(existingChildCategoryInterface!.getRootFilePath()!.toString() +existingChildCategoryInterface!.getPath()!.toString());
        
        

this.this.delete(existingChildCategoryInterface)
parentCategoryInterface!.removeChild(existingChildCategoryInterface)
this.this.save(parentCategoryInterface)
this.directory.remove(directoryToBeDeletedAbPath)

                                    }
                                
                             else 
                        if()
                        
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e)

                                    }
                                
}

}


}
                
            

