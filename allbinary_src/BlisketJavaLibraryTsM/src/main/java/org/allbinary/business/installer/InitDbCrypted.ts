
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { InitInfoEntity } from '../../../../org/allbinary/business/init/InitInfoEntity.js';
      const InitInfoEntity = globalThis.org.allbinary.business.init.InitInfoEntity;

      
//not game specific package import { DatabaseConnectionInfoInterface } from '../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js';
      const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;

      
//not game specific package import { DbConnectionInfo } from '../../../../org/allbinary/business/init/db/DbConnectionInfo.js';
      const DbConnectionInfo = globalThis.org.allbinary.business.init.db.DbConnectionInfo;

      
//not game specific package import { HistoryDbInitInfo } from '../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js';
      const HistoryDbInitInfo = globalThis.org.allbinary.business.init.db.HistoryDbInitInfo;

      
//not game specific package import { InventoryDbInitInfo } from '../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js';
      const InventoryDbInitInfo = globalThis.org.allbinary.business.init.db.InventoryDbInitInfo;

      
//not game specific package import { LogDbInitInfo } from '../../../../org/allbinary/business/init/db/LogDbInitInfo.js';
      const LogDbInitInfo = globalThis.org.allbinary.business.init.db.LogDbInitInfo;

      
//not game specific package import { StaticPagesDbInitInfo } from '../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js';
      const StaticPagesDbInitInfo = globalThis.org.allbinary.business.init.db.StaticPagesDbInitInfo;

      
//not game specific package import { UserDbInitInfo } from '../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not game specific package import { StoreFrontsEntityFactory } from '../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js';
      const StoreFrontsEntityFactory = globalThis.org.allbinary.data.tables.context.module.storefronts.StoreFrontsEntityFactory;

      
//not game specific package import { LogTableEntityFactory } from '../../../../org/allbinary/data/tables/log/LogTableEntityFactory.js';
      const LogTableEntityFactory = globalThis.org.allbinary.data.tables.log.LogTableEntityFactory;

      
//not game specific package import { StaticPagesEntityFactory } from '../../../../org/allbinary/data/tables/staticpages/StaticPagesEntityFactory.js';
      const StaticPagesEntityFactory = globalThis.org.allbinary.data.tables.staticpages.StaticPagesEntityFactory;

      
//not game specific package import { TransformInfoEntityBuilder } from '../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js';
      const TransformInfoEntityBuilder = globalThis.org.allbinary.data.tables.transform.info.TransformInfoEntityBuilder;

      
//not game specific package import { UserEntityFactory } from '../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not game specific package import { BillingAddressesEntityFactory } from '../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntityFactory.js';
      const BillingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.billing.BillingAddressesEntityFactory;

      
//not game specific package import { ShippingAddressesEntityFactory } from '../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js';
      const ShippingAddressesEntityFactory = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntityFactory;

      
//not game specific package import { InventoryEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
//not game specific package import { OrderHistoryEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js';
      const OrderHistoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntityFactory;

      
//not game specific package import { OrderItemsEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntityFactory.js';
      const OrderItemsEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderItemsEntityFactory;

      
//not game specific package import { PaymentEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntityFactory.js';
      const PaymentEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.PaymentEntityFactory;

      
//not game specific package import { PaymentGatewayEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js';
      const PaymentGatewayEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.gateway.PaymentGatewayEntityFactory;

      
//not game specific package import { TransactionEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/transaction/TransactionEntityFactory.js';
      const TransactionEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.transaction.TransactionEntityFactory;

      
//not game specific package import { TransactionResultEntityFactory } from '../../../../org/allbinary/data/tables/user/commerce/money/payment/transaction/TransactionResultEntityFactory.js';
      const TransactionResultEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.money.payment.transaction.TransactionResultEntityFactory;

      
//not game specific package import { QuoteRequestEntityFactory } from '../../../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js';
      const QuoteRequestEntityFactory = globalThis.org.allbinary.data.tables.user.quoterequest.QuoteRequestEntityFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbDatabaseManagement } from '../../../../org/allbinary/logic/communication/sql/AbDatabaseManagement.js';
      const AbDatabaseManagement = globalThis.org.allbinary.logic.communication.sql.AbDatabaseManagement;

      
//not game specific package import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
//not game specific package import { DataOutputStreamFactory } from '../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
      const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileFactory } from '../../../../org/allbinary/logic/io/file/FileFactory.js';
      const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Warning you must have sql root access
export class InitDbCrypted extends AbDatabaseManagement {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private userDbInitInfo: UserDbInitInfo;

    private inventoryDbInitInfo: InventoryDbInitInfo;

    private historyDbInitInfo: HistoryDbInitInfo;

    private staticpagesDbInitInfo: StaticPagesDbInitInfo;

    private logDbInitInfo: LogDbInitInfo;

    private readonly SQL_FILE: string = "initWeblisket.sql";

public constructor (databaseConnectionInfoInterface: DatabaseConnectionInfoInterface){
            super(databaseConnectionInfoInterface as DbConnectionInfo);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public addUsers(): Boolean{

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.METHOD_ADD_USERS);
    
this.userDbInitInfo= new UserDbInitInfo();
    
this.inventoryDbInitInfo= new InventoryDbInitInfo();
    
this.historyDbInitInfo= new HistoryDbInitInfo();
    
this.staticpagesDbInitInfo= new StaticPagesDbInitInfo();
    
this.logDbInitInfo= new LogDbInitInfo();
    

    var CUSTOMERDB: string = this.userDbInitInfo!.getName()!;;
    

    var CUSTOMERDBUSER: string = this.userDbInitInfo!.getUserName()!;;
    

    var CUSTOMERDBPASSWORD: string = this.userDbInitInfo!.getPassword()!;;
    

                        if(!this.addDbUser(CUSTOMERDB, CUSTOMERDBUSER, CUSTOMERDBPASSWORD))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_USER +CUSTOMERDBUSER, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var INVENTORYDB: string = this.inventoryDbInitInfo!.getName()!;;
    

    var INVENTORYDBUSER: string = this.inventoryDbInitInfo!.getUserName()!;;
    

    var INVENTORYDBPASSWORD: string = this.inventoryDbInitInfo!.getPassword()!;;
    

                        if(!this.addDbUser(INVENTORYDB, INVENTORYDBUSER, INVENTORYDBPASSWORD))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_USER +INVENTORYDBUSER, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var HISTORYDB: string = this.historyDbInitInfo!.getName()!;;
    

    var HISTORYDBUSER: string = this.historyDbInitInfo!.getUserName()!;;
    

    var HISTORYDBPASSWORD: string = this.historyDbInitInfo!.getPassword()!;;
    

                        if(!this.addDbUser(HISTORYDB, HISTORYDBUSER, HISTORYDBPASSWORD))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_USER +HISTORYDBUSER, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var STATICPAGESDB: string = this.staticpagesDbInitInfo!.getName()!;;
    

    var STATICPAGESDBUSER: string = this.staticpagesDbInitInfo!.getUserName()!;;
    

    var STATICPAGESDBPASSWORD: string = this.staticpagesDbInitInfo!.getPassword()!;;
    

                        if(!this.addDbUser(STATICPAGESDB, STATICPAGESDBUSER, STATICPAGESDBPASSWORD))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_USER +STATICPAGESDBUSER, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var LOGDB: string = this.logDbInitInfo!.getName()!;;
    

    var LOGDBUSER: string = this.logDbInitInfo!.getUserName()!;;
    

    var LOGDBPASSWORD: string = this.logDbInitInfo!.getPassword()!;;
    

                        if(!this.addDbUser(LOGDB, LOGDBUSER, LOGDBPASSWORD))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_USER +LOGDBUSER, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
this.logUtil!.putF(this.commonStrings!.END, this, this.METHOD_ADD_USERS);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_USERS, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}

}


    public addDatabases(): Boolean{

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.METHOD_ADD_DATABASES);
    
this.userDbInitInfo= new UserDbInitInfo();
    
this.inventoryDbInitInfo= new InventoryDbInitInfo();
    
this.historyDbInitInfo= new HistoryDbInitInfo();
    
this.staticpagesDbInitInfo= new StaticPagesDbInitInfo();
    
this.logDbInitInfo= new LogDbInitInfo();
    

    var CUSTOMERDB: string = this.userDbInitInfo!.getName()!;;
    

                        if(!this.addDb(CUSTOMERDB))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_DATABASE +CUSTOMERDB, this, this.METHOD_ADD_DATABASES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var INVENTORYDB: string = this.inventoryDbInitInfo!.getName()!;;
    

                        if(!this.addDb(INVENTORYDB))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_DATABASE +INVENTORYDB, this, this.METHOD_ADD_DATABASES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var HISTORYDB: string = this.historyDbInitInfo!.getName()!;;
    

                        if(!this.addDb(HISTORYDB))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_DATABASE +HISTORYDB, this, this.METHOD_ADD_DATABASES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var STATICPAGESDB: string = this.staticpagesDbInitInfo!.getName()!;;
    

                        if(!this.addDb(STATICPAGESDB))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_DATABASE +STATICPAGESDB, this, this.METHOD_ADD_DATABASES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var LOGDB: string = this.logDbInitInfo!.getName()!;;
    

                        if(!this.addDb(LOGDB))
                        
                                    {
                                    this.logUtil!.putF(this.UNABLE_TO_CREATE_DATABASE +LOGDB, this, this.METHOD_ADD_DATABASES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var file: AbFile = FileFactory.getInstance()!.getInstance(this.SQL_FILE)!;;
    
file.createNewFile();
    

    var idOutData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(file)!;;
    
idOutData!.writeBytes(this.sqlCommandLog!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_DATABASES, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}

}


    public addTables(): Boolean{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
this.logUtil!.putF(this.commonStrings!.START, this, this.METHOD_ADD_TABLES);
    
stringBuffer!.append(UserEntityFactory.getInstance()!.createTable());
    
stringBuffer!.append(StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.createTable());
    
stringBuffer!.append(BillingAddressesEntityFactory.getInstance()!.getInstance(this.stringUtil!.EMPTY_STRING)!.createTable());
    
stringBuffer!.append(ShippingAddressesEntityFactory.getInstance()!.getInstance(this.stringUtil!.EMPTY_STRING)!.createTable());
    
stringBuffer!.append(PaymentEntityFactory.getInstance()!.getPaymentEntityInstance()!.createTable());
    
stringBuffer!.append(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.createTable());
    
stringBuffer!.append(OrderHistoryEntityFactory.getInstance()!.createTable());
    
stringBuffer!.append(OrderItemsEntityFactory.getInstance()!.createTable());
    
stringBuffer!.append(TransactionEntityFactory.getInstance()!.getTransactionEntityInstance()!.createTable());
    
stringBuffer!.append(TransactionResultEntityFactory.getInstance()!.getTransactionResultEntityInstance()!.createTable());
    
stringBuffer!.append(PaymentGatewayEntityFactory.getInstance()!.createTable());
    
stringBuffer!.append(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.createTable());
    
stringBuffer!.append(new InitInfoEntity().createTable());
    
stringBuffer!.append(LogTableEntityFactory.getInstance()!.getLogTableEntityInstance()!.createTable());
    
stringBuffer!.append(StaticPagesEntityFactory.getInstance()!.getStaticPagesEntityInstance()!.createTable());
    
stringBuffer!.append(TransformInfoEntityBuilder.getInstance()!.createTable());
    
this.logUtil!.putF(ADD_TABLES_RESULTS_LABEL +stringBuffer!.toString(), this, this.METHOD_ADD_TABLES);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_TABLES, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

