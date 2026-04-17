
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
        



import { CategoryComponent } from "../../../../../org/allbinary/business/category/CategoryComponent.js";

    
import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileWriter } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileWriter.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CategoryPrivateTree
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    categoryFactoryInterface: CategoryFactoryInterface
public constructor (categoryFactoryInterface: CategoryFactoryInterface){

            super();
            var categoryFactoryInterface = categoryFactoryInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, "CategoryPrivateTree(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
this.categoryFactoryInterface= categoryFactoryInterface;
    
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    save(categoryInterface: CategoryInterface){
var categoryInterface = categoryInterface

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Saving Category File: " +categoryInterface!.getFilePath(), this, "save()");
    

                                    }
                                

    var document: Document = new CategoryComponent(categoryInterface).
                            toXmlDoc()!;
        
        
;
    

    var cryptFileWriter: CryptFileWriter = new CryptFileWriter(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);
        
        
;
    
cryptFileWriter!.write(categoryInterface!.getFilePath(), document);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("end", this, "save()");
    

                                    }
                                
}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    delete(categoryInterface: CategoryInterface){
var categoryInterface = categoryInterface

                        if(categoryInterface!.isLeaf())
                        
                                    {
                                    
    var categoryFile: AbFile = new AbFile(categoryInterface!.getFilePath());
        
        
;
    

                        if(categoryFile!.delete())
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Removed: " +categoryInterface!.getFilePath(), this, "delete(CategoryInterface)");
    

                                    }
                                

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Not a leaf unable to remove", this, "delete(CategoryInterface)");
    

                                    }
                                

                        }
                            
}


}
                
            

