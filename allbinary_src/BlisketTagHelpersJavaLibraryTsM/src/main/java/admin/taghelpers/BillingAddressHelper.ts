
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
        
            import { Integer } from '../../java/lang/Integer.js';
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { Portion } from '../../org/allbinary/business/installer/Portion.js';
//not GWT import const Portion = globalThis.org.allbinary.business.installer.Portion;

      
import { UserData } from '../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { StreetAddress } from '../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
import { BillingAddressesEntity } from '../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntity.js';
//not GWT import const BillingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.billing.BillingAddressesEntity;

      
import { BillingAddressesEntityFactory } from '../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntityFactory.js';
//not GWT import const BillingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.billing.BillingAddressesEntityFactory;

      
import { ShippingAddressesEntityFactory } from '../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js';
//not GWT import const ShippingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntityFactory;

      
import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
import { WeblisketSessionData } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSessionData.js';
//not GWT import const WeblisketSessionData = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSessionData;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
//not GWT import const AbSqlTableUtil = globalThis.org.allbinary.logic.communication.sql.AbSqlTableUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Table } from './Table.js';
//not GWT import - same folder const Table = globalThis.admin.taghelpers.Table;

                
export class BillingAddressHelper extends Table {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private request: HttpServletRequest;

    private userName: string;

    private streetAddress: StreetAddress;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        this.request= pageContext!.getRequest() as HttpServletRequest;
    
this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
this.portion= new Portion(hashMap);
    
this.getAddressForm();
    
}


    getAddressForm(){
this.userName= this.request.getParameter(UserData.USERNAME);
    

                        if(this.userName == 
                                    null
                                )
                        
                                    {
                                    this.userName= this.request.getParameter(WeblisketSessionData.REMOVABLEUSERNAME);
    

                                    }
                                
this.streetAddress= new StreetAddress(this.request);
    
}


    public drop(): string{

        try {
            
    var success: string = new BillingAddressesEntity(this.stringUtil!.EMPTY_STRING).drop()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to drop Admin table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public create(): string{

        try {
            
    var success: string = new BillingAddressesEntity(this.stringUtil!.EMPTY_STRING).createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to create user table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public restore(): string{

        try {
            
    var success: string = "Restore Successful";;
    

    var billingAddressesEntity: BillingAddressesEntity = new BillingAddressesEntity(StringUtil.getInstance()!.EMPTY_STRING);;
    

    var result: string = AbSqlTableUtil.getInstance()!.restoreTable(billingAddressesEntity, this.portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public backup(): string{

        try {
            
    var success: string = "Backup Successful";;
    

    var result: string = AbSqlTableUtil.getInstance()!.backupTable(new BillingAddressesEntity(StringUtil.getInstance()!.EMPTY_STRING))!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public insert(): string{

        try {
            
    var success: string = "Successfully Added Billing Address";;
    
BillingAddressesEntityFactory.getInstance()!.getInstance(this.weblisketSession!.getUserName())!.add(this.streetAddress);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "add()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to add Billing Address";;
    

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
            
    var success: string = "Successfully Updated Billing Address";;
    
BillingAddressesEntityFactory.getInstance()!.getInstance(this.weblisketSession!.getUserName())!.update(this.streetAddress);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF("Successfull update of a user Billing Address table", this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed update of a User Billing Address Table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    setToShippingAddress(): string{

        try {
            
    var shippingAddressesEntityFactory: ShippingAddressesEntityFactory = ShippingAddressesEntityFactory.getInstance()!;;
    

    var streetAddress: StreetAddress = shippingAddressesEntityFactory!.getInstance(this.weblisketSession!.getUserName())!.getDefault()!;;
    

                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    shippingAddressesEntityFactory!.getInstance(this.weblisketSession!.getUserName())!.add(streetAddress);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "No Shipping Address";
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to Set Billing address to Shipping Address";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setToShippingAddress()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public delete(): string{

        try {
            
    var success: string = "Successfully Removed Billing Address";;
    
BillingAddressesEntityFactory.getInstance()!.getInstance(this.weblisketSession!.getUserName())!.remove(new Integer(this.streetAddress!.getId()));
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to remove Billing Address";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "delete()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public set(): string{

        try {
            
    var success: string = "Successfully Set Billing Address";;
    
BillingAddressesEntityFactory.getInstance()!.getInstance(this.weblisketSession!.getUserName())!.setDefault(this.streetAddress!.getId());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "set()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    

                //: 
} catch(e) 
            {

    var error: string = "Failed to set billing Address";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "set()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}



