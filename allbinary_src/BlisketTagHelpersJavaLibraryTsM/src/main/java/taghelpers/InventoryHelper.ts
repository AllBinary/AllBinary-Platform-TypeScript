
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
        
import { HashMap } from '../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { HttpServletResponse } from '../javax/servlet/http/HttpServletResponse.js';
      //not GWT import const HttpServletResponse = globalThis.javax.servlet.http.HttpServletResponse;

      
import { PageContext } from '../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TagHelper } from '../admin/taghelpers/TagHelper.js';
      //not GWT import const TagHelper = globalThis.admin.taghelpers.TagHelper;

      
import { StoreFrontData } from '../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      //not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { StreetAddress } from '../org/allbinary/business/user/address/StreetAddress.js';
      //not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { BasicItemData } from '../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
      //not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { AcceptableResponseGenerator } from '../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js';
      //not GWT import const AcceptableResponseGenerator = globalThis.org.allbinary.logic.communication.http.AcceptableResponseGenerator;

      
import { WeblisketSession } from '../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SearchParams } from '../org/allbinary/logic/control/search/SearchParams.js';
      //not GWT import const SearchParams = globalThis.org.allbinary.logic.control.search.SearchParams;

      
import { SearchRequest } from '../org/allbinary/logic/control/search/SearchRequest.js';
      //not GWT import const SearchRequest = globalThis.org.allbinary.logic.control.search.SearchRequest;

      
//not plain js import { StringUtil } from '../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { TransformInfoData } from '../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      //not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { InventoryViewFactory } from '../views/admin/inventory/listings/InventoryViewFactory.js';
      //not GWT import const InventoryViewFactory = globalThis.views.admin.inventory.listings.InventoryViewFactory;

      
import { InventoryViewSearchInterface } from '../views/admin/inventory/listings/InventoryViewSearchInterface.js';
      //not GWT import const InventoryViewSearchInterface = globalThis.views.admin.inventory.listings.InventoryViewSearchInterface;

      
















                                        
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



