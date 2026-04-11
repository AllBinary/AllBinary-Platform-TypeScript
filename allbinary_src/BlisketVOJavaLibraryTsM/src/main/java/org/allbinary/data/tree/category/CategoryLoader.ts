
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
        



import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { CategoryInterface } from "../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { CategoryProperties } from "../../../../../org/allbinary/business/category/properties/CategoryProperties.js";

    
import { CategoryPropertiesInterface } from "../../../../../org/allbinary/business/category/properties/CategoryPropertiesInterface.js";

    
import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CryptFileReader } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../org/w3c/dom/NodeList.js";

    

export class CategoryLoader extends CategoryModifierTree
                , CategoryLoaderInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (categoryFactoryInterface: CategoryFactoryInterface)                        

                            : super(categoryFactoryInterface){

            super();
            var categoryFactoryInterface = categoryFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.CATEGORY))
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, "CategoryLoader(CategoryFactoryInterface categoryFactoryInterface)");
    

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getDoc(categoryInterface: CategoryInterface): Document{
var categoryInterface = categoryInterface

        try {
            
                        if(categoryInterface!.getProperties()!.getPath(categoryInterface!.getHierarchy()) != 
                                    null
                                )
                        
                                    {
                                    
                        if(categoryInterface!.getHierarchy()!.getLevel() == 1)
                        
                                    {
                                    
    var rootAbFile: AbFile = new AbFile(categoryInterface!.getRootFilePath());
        
        
;
    

                        if(!rootAbFile!.isDirectory();

                        )
                        
                                    {
                                    rootAbFile!.mkdirs();
    

                        if(!rootAbFile!.isDirectory();

                        )
                        
                                    {
                                    


                            throw new Error("Could Not Create Directory")

                                    }
                                
this.save(categoryInterface);
    

                                    }
                                

                                    }
                                

    var fileAbPath: AbPath = categoryInterface!.getFilePath()!;
        
        
;
    

    var cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);
        
        
;
    

    var document: Document = DomDocumentHelper.create(cryptFileReader!.get(fileAbPath))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                                    }
                                
                        else {
                            


                            throw new Error("Null Category")

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
logUtil!.put("Could Not Log Category", this, "getDoc", e);
    
}

logUtil!.put(this.commonStrings!.FAILURE, this, "getDoc", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public get(categoryInterface: CategoryInterface): CategoryInterface{
var categoryInterface = categoryInterface

        try {
            
    var document: Document = this.getDoc(categoryInterface)!;
        
        
;
    

    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(categoryInterface, categoryNode!.getChildNodes());

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public get(document: Document): CategoryInterface{
var document = document

        try {
            
    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;
        
        
;
    

    var loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getAll(categoryInterface: CategoryInterface): CategoryInterface{
var categoryInterface = categoryInterface

        try {
            
    var document: Document = this.getDoc(categoryInterface)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getAll(document);

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getAll(document: Document): CategoryInterface{
var document = document

        try {
            
    var categoryNode: Node = DomSearchHelper.getNode(CategoryData.getInstance()!.NAME, document.getChildNodes())!;
        
        
;
    

    var loadedCategoryInterface: CategoryInterface = this.categoryFactoryInterface!.getRootInstanceFromNode(categoryNode)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.addProperties(loadedCategoryInterface, categoryNode!.getChildNodes());

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    getAll(parentCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{
var parentCategoryInterface = parentCategoryInterface
var categoryNodeList = categoryNodeList

        try {
            
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < categoryNodeList!.getLength(); index++)
        {

    var categoryNode: Node = categoryNodeList!.item(index)!;
        
        
;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var categoryInterface: CategoryInterface = this.categoryFactoryInterface!.getInstance(parentCategoryInterface!.getHierarchy()!.getRoot(), parentCategoryInterface, categoryNode);

                         as CategoryInterface;
        
        
;
    
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
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    addProperties(loadedCategoryInterface: CategoryInterface, categoryNodeList: NodeList): CategoryInterface{
var loadedCategoryInterface = loadedCategoryInterface
var categoryNodeList = categoryNodeList

        try {
            
                        if(categoryNodeList != 
                                    null
                                )
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < categoryNodeList!.getLength(); index++)
        {

    var categoryNode: Node = categoryNodeList!.item(index)!;
        
        
;
    

                        if(categoryNode != 
                                    null
                                 && categoryNode!.getNodeName()!.compareTo(CategoryData.getInstance()!.NAME) == 0)
                        
                                    {
                                    
    var categoryPropertiesInterface: CategoryPropertiesInterface = new CategoryProperties(categoryNode) as CategoryPropertiesInterface;
        
        
;
    
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
                                    logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

