
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
        



import { HashMap } from "../java/util/HashMap.js";

    
import { HttpServletRequest } from "../javax/servlet/http/HttpServletRequest.js";

    
import { HttpServletResponse } from "../javax/servlet/http/HttpServletResponse.js";

    
import { PageContext } from "../javax/servlet/jsp/PageContext.js";

    
import { TagHelper } from "../admin/taghelpers/TagHelper.js";

    
import { StoreFrontData } from "../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { StreetAddress } from "../org/allbinary/business/user/address/StreetAddress.js";

    
import { BasicItemData } from "../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { AcceptableResponseGenerator } from "../org/allbinary/logic/communication/http/AcceptableResponseGenerator.js";

    
import { WeblisketSession } from "../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SearchParams } from "../org/allbinary/logic/control/search/SearchParams.js";

    
import { SearchRequest } from "../org/allbinary/logic/control/search/SearchRequest.js";

    
import { StringUtil } from "../org/allbinary/logic/string/StringUtil.js";

    
import { TransformInfoData } from "../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { InventoryViewFactory } from "../views/admin/inventory/listings/InventoryViewFactory.js";

    
import { InventoryViewSearchInterface } from "../views/admin/inventory/listings/InventoryViewSearchInterface.js";

    

export class InventoryHelper extends TagHelper {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private weblisketSession: WeblisketSession

    private response: HttpServletResponse

    private request: HttpServletRequest

    private streetAddress: StreetAddress

    private id: string

    private searchRequest: SearchRequest
public constructor (propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext
this.response= pageContext!.getResponse() as HttpServletResponse
this.request= pageContext!.getRequest() as HttpServletRequest

    var storeName: string = propertiesHashMap!.get(StoreFrontData.getInstance()!.NAME) as String;
        
        


    var xslFile: string = propertiesHashMap!.get(TransformInfoData.getInstance()!.TEMPLATEFILENAME) as String;
        
        


                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    
    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(storeName)!;
        
        


    var contentType: string = AcceptableResponseGenerator.getInstance()!.get(this.request)!;
        
        


    var searchParams: SearchParams = new SearchParams(this.request);
        
        

this.searchRequest= SearchRequest(storeFrontInterface, searchParams, xslFile, contentType, propertiesHashMap, pageContext)

                                    }
                                
this.getFormData()
}


    getFormData(){
this.id= this.request.getParameter(BasicItemData.ID)
}


    public viewSummary(): string{

        try {
            
    var inventoryViewSearchInterface: InventoryViewSearchInterface = InventoryViewFactory.getInstance(searchRequest)!;
        
        


    var result: string = inventoryViewSearchInterface!.getProduct(this.id)!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put("Successfull Inventory View Summary", this, "viewSummary()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Failed to View Summary";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "viewSummary()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br>" +"Exception: " +e +"<br>";
    
}

}


    public search(): string{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var keywords: string = this.searchRequest!.getParams()!.get()!.get(BasicItemData.KEYWORDS) as String;
        
        


                        if(keywords == 
                                    null
                                 || keywords.compareTo(stringUtil!.EMPTY_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a keyword in the search field above the Search button.";
    

                                    }
                                

    var inventoryViewSearchInterface: InventoryViewSearchInterface = InventoryViewFactory.getInstance(searchRequest)!;
        
        


    var result: string = inventoryViewSearchInterface!.searchSingleDynamicPage()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    logUtil!.put("Successful Inventory Dynamic Search", this, "searchSingleDynamicPage()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
} catch(e: Exception)
            {

    var error: string = "Failed to search Inventory by keyword";
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "searchSingleDynamicPage()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br>" +"Exception: " +e +"<br>";
    
}

}


}
                
            

