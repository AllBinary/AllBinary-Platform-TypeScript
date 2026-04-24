
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { Map } from "../../java/util/Map.js";

    
import { Set } from "../../java/util/Set.js";

    
import { HttpServletRequest } from "../../javax/servlet/http/HttpServletRequest.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { CategoryComponent } from "../../org/allbinary/business/category/CategoryComponent.js";

    
import { CategoryData } from "../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryInterface } from "../../org/allbinary/business/category/CategoryInterface.js";

    
import { StoreCategoryFactory } from "../../org/allbinary/business/category/store/StoreCategoryFactory.js";

    
import { StoreFrontData } from "../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { CategoryLoaderFactory } from "../../org/allbinary/data/tree/category/CategoryLoaderFactory.js";

    
import { CategoryLoaderInterface } from "../../org/allbinary/data/tree/category/CategoryLoaderInterface.js";

    
import { DomNodeHelper } from "../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    
import { TransformInfoBasic } from "../../org/allbinary/logic/visual/transform/info/TransformInfoBasic.js";

    
import { TransformInfoInterface } from "../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../org/w3c/dom/Document.js";

    
import { Node } from "../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ModifyTable } from "./ModifyTable.js";

export class CategoryRequestHelper extends ModifyTable {
        

    private static readonly categoryRequest: string = new StringMaker().
                            append("<")!.append(CategoryData.getInstance()!.REQUEST)!.append(">")!.toString()!;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private pageContext: PageContext

    private hashMap: HashMap<any, any>

    private request: HttpServletRequest

    private categoryLoaderInterface: CategoryLoaderInterface

    private categoryInterface: CategoryInterface

    private childCategoryInterface: CategoryInterface

    private transformInfoInterface: TransformInfoInterface
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        var hashMap = hashMap
var pageContext = pageContext

        try {
            this.request= pageContext!.getRequest(); as HttpServletRequest;
    
this.pageContext= pageContext;
    
this.hashMap= hashMap;
    
this.getXmlData();
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "CategoryRequestHelper()", e);
    

                                    }
                                
}

}


    public getXmlData(){

        try {
            
    var map: Map = this.request.getParameterMap()!;
        
        
;
    

    var categoryData: CategoryData = CategoryData.getInstance()!;
        
        
;
    

    var keys: Set = map.keySet()!;
        
        
;
    

    var keyArray: any[] = keys.toArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

                        if(size > 0)
                        
                                    {
                                    
    var xmlRequest: string = keyArray[0]! as String;
        
        
;
    

    var index: number = 1;
        
        
;
    

        while(index < size && !xmlRequest!.startsWith(categoryRequest);)
        {
xmlRequest= keyArray[index]! as String;
    

                        if(xmlRequest!.startsWith(categoryRequest))
                        
                                    //Otherwise - thenStmt - BreakStmt

}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(xmlRequest, this, "getXmlData()");
    

                                    }
                                

    var document: Document = DomDocumentHelper.create(xmlRequest)!;
        
        
;
    

    var requestNode: Node = DomSearchHelper.getNode(categoryData!.REQUEST, document.getChildNodes())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(DomDocumentHelper.toString(document), this, "getXmlData()");
    

                                    }
                                
this.setCategoryLoader(requestNode);
    

    var parentCategoryNode: Node = DomSearchHelper.getNode(categoryData!.PARENT, requestNode!.getChildNodes())!;
        
        
;
    

    var categoryNode: Node = DomSearchHelper.getNode(categoryData!.NAME, parentCategoryNode!.getChildNodes())!;
        
        
;
    
this.categoryInterface= new StoreCategoryFactory(this.transformInfoInterface).
                            getRootInstanceFromNode(categoryNode); as CategoryInterface;
    
this.categoryInterface= this.categoryLoaderInterface!.get(this.categoryInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.categoryInterface!.log();
    
this.logUtil!.putF("Loaded Parent Category", this, "getXmlData()");
    

                                    }
                                

    var childCategoryNode: Node = DomSearchHelper.getNodeNoThrow(categoryData!.NAME, requestNode!.getChildNodes())!;
        
        
;
    

                        if(childCategoryNode != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Loading Child Category", this, "getXmlData()");
    

                                    }
                                
this.childCategoryInterface= new StoreCategoryFactory(this.transformInfoInterface).
                            getInstance(childCategoryNode); as CategoryInterface;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.childCategoryInterface!.log();
    
this.logUtil!.putF("Loaded Child Category", this, "getXmlData()");
    

                                    }
                                

                                    }
                                
                        else {
                            this.childCategoryInterface= this.categoryInterface;
    

                        }
                            

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "getXmlData()", e);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    setCategoryLoader(requestNode: Node){
var requestNode = requestNode

    var storeNameNode: Node = DomSearchHelper.getNode(StoreFrontData.getInstance()!.NAME, requestNode!.getChildNodes())!;
        
        
;
    

                        if(storeNameNode != 
                                    null
                                )
                        
                                    {
                                    
    var storeName: string = DomNodeHelper.getTextNodeValue(storeNameNode)!;
        
        
;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(storeName)!;
        
        
;
    
this.transformInfoInterface= new TransformInfoBasic(storeFrontInterface, hashMap, pageContext) as TransformInfoInterface;
    

                        if(this.transformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("TransformInfo null")

                                    }
                                

    var storeCategoryFactory: StoreCategoryFactory = new StoreCategoryFactory(this.transformInfoInterface);
        
        
;
    
this.categoryLoaderInterface= CategoryLoaderFactory.getInstance(storeCategoryFactory);
    

                                    }
                                
                        else {
                            


                            throw new Error("Store Name Error: " +storeName)

                        }
                            

                                    }
                                
}


    public insert(): string{

        try {
            
    var success: string = "Successfully Added the following to the Category table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("inserting", this, "insert()");
    

                                    }
                                
this.categoryLoaderInterface!.insert(this.categoryInterface, this.childCategoryInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add item to Category";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var success: string = "Successfully Removed " +CategoryData.getInstance()!.NAME +"=" +this.childCategoryInterface!.getPath();
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Deleting", this, "delete()");
    

                                    }
                                
this.categoryLoaderInterface!.delete(this.categoryInterface, this.childCategoryInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

        try {
            
    var error: string = "Failed to remove category: " +this.childCategoryInterface!.getPath();
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

                //: 
} catch(e2) 
            {

    var error: string = "Failed to remove category and show the path of the failed category";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "delete()", e2);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}

}


    public viewCategory(): string{

        try {
            
    var document: Document = new CategoryComponent(this.childCategoryInterface).
                            toXmlDoc()!;
        
        
;
    

    var xmlString: string = DomDocumentHelper.toString(document)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(xmlString, this, "viewCategory()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xmlString;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to get Category";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "viewCategory()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public viewCategories(): string{

        try {
            
    var success: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "viewCategories()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Categories table";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "viewCategories()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "New Item Successfully added";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add Item";
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

