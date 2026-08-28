
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
        
//not game specific package import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
      const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
//not game specific package import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { CategoryProperties } from '../../../../../org/allbinary/business/category/properties/CategoryProperties.js';
      const CategoryProperties = globalThis.org.allbinary.business.category.properties.CategoryProperties;

      
//not game specific package import { CategoryPropertiesInterface } from '../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
      const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
//not game specific package import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryModifierTree } from './CategoryModifierTree.js';
import { CategoryLoaderInterface } from './CategoryLoaderInterface.js';

export class CategoryLoader extends CategoryModifierTree implements CategoryLoaderInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (categoryFactoryInterface: CategoryFactoryInterface){
            super(categoryFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "CategoryLoader(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getDoc(categoryInterface: CategoryInterface): Document{

        try {
            
                        if(categoryInterface!.getProperties()!.getPath(categoryInterface!.getHierarchy()) != 
                                    null
                                )
                        
                                    {
                                    
                        if(categoryInterface!.getHierarchy()!.getLevel() == 1)
                        
                                    {
                                    
    var rootAbFile: AbFile = AbFile.createAbFileFromAbPath(categoryInterface!.getRootFilePath())!;;
    

                        if(!rootAbFile!.isDirectory())
                        
                                    {
                                    rootAbFile!.mkdirs();
    

                        if(!rootAbFile!.isDirectory())
                        
                                    {
                                    


                            throw new Exception("Could Not Create Directory");
                    

                                    }
                                
this.save(categoryInterface);
    

                                    }
                                

                                    }
                                

    var fileAbPath: AbPath = categoryInterface!.getFilePath()!;;
    

    var cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);;
    

    var document: Document = DomDocumentHelper.create(cryptFileReader!.get(fileAbPath))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Null Category");
                    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    
        try {
            categoryInterface!.log();
    

                //: 
} catch(e2) 
            {
this.logUtil!.put("Could Not Log Category", this, "getDoc", e);
    
}

this.logUtil!.put(this.commonStrings!.FAILURE, this, "getDoc", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public get(categoryInterface: CategoryInterface): CategoryInterface{

        try {
            
    var document: Document = this.getDoc(categoryInterface)!;;
    

    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(categoryInterface, categoryNode!.getChildNodes());;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public get(document: Document): CategoryInterface{

        try {
            
    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    

    var loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getAll(categoryInterface: CategoryInterface): CategoryInterface{

        try {
            
    var document: Document = this.getDoc(categoryInterface)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAll(document);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getAll(document: Document): CategoryInterface{

        try {
            
    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;;
    

    var loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    getAll(parentCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{

        try {
            
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < categoryNodeList!.getLength(); index++)
        {

    var categoryNode: Node = categoryNodeList!.item(index)!;;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var categoryInterface: CategoryInterface = this.categoryFactoryInterface!.getInstance(parentCategoryInterface!.getHierarchy()!.getRoot(), parentCategoryInterface, categoryNode) as CategoryInterface;;
    
parentCategoryInterface!.addChild(categoryInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return parentCategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    addProperties(loadedCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{

        try {
            
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;index < categoryNodeList!.getLength(); index++)
        {

    var categoryNode: Node = categoryNodeList!.item(index)!;;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var categoryPropertiesInterface: CategoryPropertiesInterface = new CategoryProperties(categoryNode) as CategoryPropertiesInterface;;
    
loadedCategoryInterface!.addChildProperty(categoryPropertiesInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loadedCategoryInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}



