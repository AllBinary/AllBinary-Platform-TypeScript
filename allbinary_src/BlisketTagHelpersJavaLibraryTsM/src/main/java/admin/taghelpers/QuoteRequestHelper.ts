
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
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontData } from '../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { StoreFrontFactory } from '../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
import { StoreFrontInterface } from '../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { QuoteRequest } from '../../org/allbinary/business/user/quoterequest/QuoteRequest.js';
//not GWT import const QuoteRequest = globalThis.org.allbinary.business.user.quoterequest.QuoteRequest;

      
import { QuoteRequestEntityFactory } from '../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js';
//not GWT import const QuoteRequestEntityFactory = globalThis.org.allbinary.data.tables.user.quoterequest.QuoteRequestEntityFactory;

      
import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifyTable } from './ModifyTable.js';
//not GWT import - same folder const ModifyTable = globalThis.admin.taghelpers.ModifyTable;

                //TWB - Am I missing the correct Quote Request? Probably not
export class QuoteRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private storeFrontInterface: StoreFrontInterface;

    private quoteRequest: QuoteRequest;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
    var request: HttpServletRequest = pageContext!.getRequest() as HttpServletRequest;;
    
this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
this.quoteRequest= new QuoteRequest(this.weblisketSession!.getUserName(), request);
    

    var storeName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

                        if(storeName != 
                                    null
                                )
                        
                                    {
                                    this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    

                                    }
                                
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.quoteRequest!.isValid();;
    
}


    public validationInfo(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.quoteRequest!.validationInfo();;
    
}


    public insert(): string{

        try {
            
    var values: BasicArrayList = this.quoteRequest!.toVector()!;;
    
QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.insert(values);
    

    var success: string = "New QuoteRequest Successfully added to the QuoteRequest Table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "add()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add QuoteRequest";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "add()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var values: HashMap<any, any> = this.quoteRequest!.toHashMap()!;;
    
QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.update(this.quoteRequest!.getUserName(), values);
    

    var success: string = "New QuoteRequest Successfully updated";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to update QuoteRequest";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commonStrings!.NOT_IMPLEMENTED;
    
}


}



