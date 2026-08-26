
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { CategoryComponent } from '../../../../../org/allbinary/business/category/CategoryComponent.js';
      const CategoryComponent = globalThis.org.allbinary.business.category.CategoryComponent;

      
//not game specific package import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
      const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
//not game specific package import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CryptFileWriter } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileWriter.js';
      const CryptFileWriter = globalThis.org.allbinary.logic.control.crypt.file.CryptFileWriter;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CategoryPrivateTree
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    categoryFactoryInterface: CategoryFactoryInterface;

public constructor (categoryFactoryInterface: CategoryFactoryInterface){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, "CategoryPrivateTree(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
this.categoryFactoryInterface= categoryFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    save(categoryInterface: CategoryInterface){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Saving Category File: " +categoryInterface!.getFilePath(), this, "save()");
    

                                    }
                                

    var document: Document = new CategoryComponent(categoryInterface).toXmlDoc()!;;
    

    var cryptFileWriter: CryptFileWriter = new CryptFileWriter(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);;
    
cryptFileWriter!.write(categoryInterface!.getFilePath(), document);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("end", this, "save()");
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    delete(categoryInterface: CategoryInterface){

                        if(categoryInterface!.isLeaf())
                        
                                    {
                                    
    var categoryFile: AbFile = AbFile.createAbFileFromAbPath(categoryInterface!.getFilePath())!;;
    

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
                
            

