
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
        
import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
//not GWT import const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
import { CategoryProperties } from '../../../../../org/allbinary/business/category/properties/CategoryProperties.js';
//not GWT import const CategoryProperties = globalThis.org.allbinary.business.category.properties.CategoryProperties;

      
import { CategoryPropertiesInterface } from '../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js';
//not GWT import const CategoryPropertiesInterface = globalThis.org.allbinary.business.category.properties.CategoryPropertiesInterface;

      
import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryModifierTree } from './CategoryModifierTree.js';
//not GWT import - same folder const CategoryModifierTree = globalThis.org.allbinary.data.tree.category.CategoryModifierTree;

                import { CategoryLoaderInterface } from './CategoryLoaderInterface.js';
//not GWT import - same folder const CategoryLoaderInterface = globalThis.org.allbinary.data.tree.category.CategoryLoaderInterface;

                
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



