
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
        



            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Map } from '../../java/util/Map.js';
      const Map = globalThis.java.util.Map;

      
//not game specific package import { Set } from '../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { CategoryComponent } from '../../org/allbinary/business/category/CategoryComponent.js';
      const CategoryComponent = globalThis.org.allbinary.business.category.CategoryComponent;

      
//not game specific package import { CategoryData } from '../../org/allbinary/business/category/CategoryData.js';
      const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
//not game specific package import { CategoryInterface } from '../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { StoreCategoryFactory } from '../../org/allbinary/business/category/store/StoreCategoryFactory.js';
      const StoreCategoryFactory = globalThis.org.allbinary.business.category.store.StoreCategoryFactory;

      
//not game specific package import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { CategoryLoaderFactory } from '../../org/allbinary/data/tree/category/CategoryLoaderFactory.js';
      const CategoryLoaderFactory = globalThis.org.allbinary.data.tree.category.CategoryLoaderFactory;

      
//not game specific package import { CategoryLoaderInterface } from '../../org/allbinary/data/tree/category/CategoryLoaderInterface.js';
      const CategoryLoaderInterface = globalThis.org.allbinary.data.tree.category.CategoryLoaderInterface;

      
//not game specific package import { DomNodeHelper } from '../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { TransformInfoBasic } from '../../org/allbinary/logic/visual/transform/info/TransformInfoBasic.js';
      const TransformInfoBasic = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoBasic;

      
//not game specific package import { TransformInfoInterface } from '../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
//not game specific package import { Document } from '../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';

export class CategoryRequestHelper extends ModifyTable {
        

    private static readonly categoryRequest: string = new StringMaker().append("<")!.append(CategoryData.getInstance()!.REQUEST)!.append(">")!.toString()!;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private pageContext: PageContext;

    private hashMap: HashMap<any, any>;

    private request: HttpServletRequest;

    private categoryLoaderInterface: CategoryLoaderInterface;

    private categoryInterface: CategoryInterface;

    private childCategoryInterface: CategoryInterface;

    private transformInfoInterface: TransformInfoInterface;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
        try {
            this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.pageContext= pageContext;
    
this.hashMap= hashMap;
    
this.getXmlData();
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "CategoryRequestHelper()", e);
    

                                    }
                                
}

}


    public getXmlData(){

        try {
            
    var map: Map = this.request.getParameterMap()!;;
    

    var categoryData: CategoryData = CategoryData.getInstance()!;;
    

    var keys: Set = map.keySet()!;;
    

    var keyArray: any[] = keys.toArray()!;;
    

    var size: number = keyArray!.length
                ;;
    

                        if(size > 0)
                        
                                    {
                                    
    var xmlRequest: string = keyArray[0]! as string;;
    

    var index: number = 1;;
    

        while(index < size && !xmlRequest!.startsWith(CategoryRequestHelper.categoryRequest))
        {
xmlRequest= keyArray[index]! as string;
    

                        if(xmlRequest!.startsWith(CategoryRequestHelper.categoryRequest))
                        
                                    //Otherwise - thenStmt - BreakStmt

}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(xmlRequest, this, "getXmlData()");
    

                                    }
                                

    var document: Document = DomDocumentHelper.create(xmlRequest)!;;
    

    var requestNode: Node = DomSearchHelper.getNode(categoryData!.REQUEST, document.getChildNodes())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF(DomDocumentHelper.toString(document), this, "getXmlData()");
    

                                    }
                                
this.setCategoryLoader(requestNode);
    

    var parentCategoryNode: Node = DomSearchHelper.getNode(categoryData!.PARENT, requestNode!.getChildNodes())!;;
    

    var categoryNode: Node = DomSearchHelper.getNode(categoryData!.NAME, parentCategoryNode!.getChildNodes())!;;
    
this.categoryInterface= new StoreCategoryFactory(this.transformInfoInterface).getRootInstanceFromNode(categoryNode) as CategoryInterface;
    
this.categoryInterface= this.categoryLoaderInterface!.get(this.categoryInterface);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.categoryInterface!.log();
    
this.logUtil!.putF("Loaded Parent Category", this, "getXmlData()");
    

                                    }
                                

    var childCategoryNode: Node = DomSearchHelper.getNodeNoThrow(categoryData!.NAME, requestNode!.getChildNodes())!;;
    

                        if(childCategoryNode != 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPER))
                        
                                    {
                                    this.logUtil!.putF("Loading Child Category", this, "getXmlData()");
    

                                    }
                                
this.childCategoryInterface= new StoreCategoryFactory(this.transformInfoInterface).getInstance(childCategoryNode) as CategoryInterface;
    

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


                //@Throws(Exception.constructor)
            
    setCategoryLoader(requestNode: Node){

    var storeNameNode: Node = DomSearchHelper.getNode(StoreFrontData.getInstance()!.NAME, requestNode!.getChildNodes())!;;
    

                        if(storeNameNode != 
                                    null
                                )
                        
                                    {
                                    
    var storeName: string = DomNodeHelper.getTextNodeValue(storeNameNode)!;;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(storeName)!;;
    
this.transformInfoInterface= new TransformInfoBasic(storeFrontInterface, this.hashMap, this.pageContext) as TransformInfoInterface;
    

                        if(this.transformInfoInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("TransformInfo null");
                    

                                    }
                                

    var storeCategoryFactory: StoreCategoryFactory = new StoreCategoryFactory(this.transformInfoInterface);;
    
this.categoryLoaderInterface= CategoryLoaderFactory.getInstance(storeCategoryFactory);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Store Name Error: " +storeName);
                    

                        }
                            

                                    }
                                
}


    public insert(): string{

        try {
            
    var success: string = "Successfully Added the following to the Category table";;
    

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

    var error: string = "Failed to add item to Category";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "insert()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var success: string = "Successfully Removed " +CategoryData.getInstance()!.NAME +"=" +this.childCategoryInterface!.getPath();;
    

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
            
    var error: string = "Failed to remove category: " +this.childCategoryInterface!.getPath();;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

                //: 
} catch(e2) 
            {

    var error: string = "Failed to remove category and show the path of the failed category";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e2);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}

}


    public viewCategory(): string{

        try {
            
    var document: Document = new CategoryComponent(this.childCategoryInterface).toXmlDoc()!;;
    

    var xmlString: string = DomDocumentHelper.toString(document)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(xmlString, this, "viewCategory()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return xmlString;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to get Category";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "viewCategory()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public viewCategories(): string{

        try {
            
    var success: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "viewCategories()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to view Categories table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "viewCategories()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "New Item Successfully added";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add Item";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



