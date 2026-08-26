
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
        



            import { Exception } from '../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { HttpServletRequest } from '../javax/servlet/http/HttpServletRequest.js';
      const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
//not game specific package import { HttpServletResponse } from '../javax/servlet/http/HttpServletResponse.js';
      const HttpServletResponse = globalThis.javax.servlet.http.HttpServletResponse;

      
//not game specific package import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
//not game specific package import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
//not game specific package import { StoreFrontData } from '../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { StreetAddress } from '../org/allbinary/business/user/address/StreetAddress.js';
      const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
//not game specific package import { BasicItemData } from '../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
//not game specific package import { AcceptableResponseGenerator } from '../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
      const AcceptableResponseGenerator = globalThis.org.allbinary.logic.communication.http.AcceptableResponseGenerator;

      
//not game specific package import { WeblisketSession } from '../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not game specific package import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchParams } from '../org/allbinary/logic/control/search/SearchParams.js';
      const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
//not game specific package import { SearchRequest } from '../org/allbinary/logic/control/search/SearchRequest.js';
      const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not game specific package import { StringUtil } from '../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { TransformInfoData } from '../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { InventoryViewFactory } from '../views/admin/inventory/listings/InventoryViewFactory.js';
      const InventoryViewFactory = globalThis.views.admin.inventory.listings.InventoryViewFactory;

      
//not game specific package import { InventoryViewSearchInterface } from '../views/admin/inventory/listings/InventoryViewSearchInterface.js';
      const InventoryViewSearchInterface = globalThis.views.admin.inventory.listings.InventoryViewSearchInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InventoryHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private response: HttpServletResponse;

    private request: HttpServletRequest;

    private streetAddress: StreetAddress;

    private id: string;

    private searchRequest: SearchRequest;

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.response= pageContext!.getResponse() as HttpServletResponse;
    
this.request= pageContext!.getRequest() as HttpServletRequest;
    

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

    var xslFile: string = propertiesHashMap!.get(TransformInfoData.getInstance()!.TEMPLATEFILENAME) as string;;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(storeName)!;;
    

    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(this.request)!;;
    

    var searchParams: SearchParams = new SearchParams(this.request);;
    
this.searchRequest= new SearchRequest(storeFrontInterface, searchParams, xslFile, contentType, propertiesHashMap, pageContext);
    

                                    }
                                
this.getFormData();
    
}


    getFormData(){
this.id= this.request.getParameter(BasicItemData.ID);
    
}


    public viewSummary(): string{

        try {
            
    var inventoryViewSearchInterface: InventoryViewSearchInterface = InventoryViewFactory.getInstance(this.searchRequest)!;;
    

    var result: string = inventoryViewSearchInterface!.getProduct(this.id)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successfull Inventory View Summary", this, "viewSummary()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to View Summary";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "viewSummary()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br>" +"Exception: " +e +"<br>";
    
}

}


    public search(): string{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    var keywords: string = this.searchRequest!.getParams()!.get()!.get(BasicItemData.KEYWORDS) as string;;
    

                        if(keywords == 
                                    null
                                 || keywords.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a keyword in the search field above the Search button.";
    

                                    }
                                

    var inventoryViewSearchInterface: InventoryViewSearchInterface = InventoryViewFactory.getInstance(this.searchRequest)!;;
    

    var result: string = inventoryViewSearchInterface!.searchSingleDynamicPage()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successful Inventory Dynamic Search", this, "searchSingleDynamicPage()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to search Inventory by keyword";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "searchSingleDynamicPage()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br>" +"Exception: " +e +"<br>";
    
}

}


}
                
            

