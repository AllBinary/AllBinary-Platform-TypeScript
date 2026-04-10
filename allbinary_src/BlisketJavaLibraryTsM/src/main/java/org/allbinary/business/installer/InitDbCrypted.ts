
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
        



import { InitInfoEntity } from "../../../../org/allbinary/business/init/InitInfoEntity.js";

    
import { DatabaseConnectionInfoInterface } from "../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { DbConnectionInfo } from "../../../../org/allbinary/business/init/db/DbConnectionInfo.js";

    
import { HistoryDbInitInfo } from "../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js";

    
import { InventoryDbInitInfo } from "../../../../org/allbinary/business/init/db/InventoryDbInitInfo.js";

    
import { LogDbInitInfo } from "../../../../org/allbinary/business/init/db/LogDbInitInfo.js";

    
import { StaticPagesDbInitInfo } from "../../../../org/allbinary/business/init/db/StaticPagesDbInitInfo.js";

    
import { UserDbInitInfo } from "../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { StoreFrontsEntityFactory } from "../../../../org/allbinary/data/tables/context/module/storefronts/StoreFrontsEntityFactory.js";

    
import { LogTableEntityFactory } from "../../../../org/allbinary/data/tables/log/LogTableEntityFactory.js";

    
import { StaticPagesEntityFactory } from "../../../../org/allbinary/data/tables/staticpages/StaticPagesEntityFactory.js";

    
import { TransformInfoEntityBuilder } from "../../../../org/allbinary/data/tables/transform/info/TransformInfoEntityBuilder.js";

    
import { UserEntityFactory } from "../../../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { BillingAddressesEntityFactory } from "../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntityFactory.js";

    
import { ShippingAddressesEntityFactory } from "../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntityFactory.js";

    
import { InventoryEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { OrderHistoryEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntityFactory.js";

    
import { OrderItemsEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderItemsEntityFactory.js";

    
import { PaymentEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntityFactory.js";

    
import { PaymentGatewayEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js";

    
import { TransactionEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/transaction/TransactionEntityFactory.js";

    
import { TransactionResultEntityFactory } from "../../../../org/allbinary/data/tables/user/commerce/money/payment/transaction/TransactionResultEntityFactory.js";

    
import { QuoteRequestEntityFactory } from "../../../../org/allbinary/data/tables/user/quoterequest/QuoteRequestEntityFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbDatabaseManagement } from "../../../../org/allbinary/logic/communication/sql/AbDatabaseManagement.js";

    
import { AbDataOutputStream } from "../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { DataOutputStreamFactory } from "../../../../org/allbinary/logic/io/DataOutputStreamFactory.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileFactory } from "../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class InitDbCrypted extends AbDatabaseManagement {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private userDbInitInfo: UserDbInitInfo

    private inventoryDbInitInfo: InventoryDbInitInfo

    private historyDbInitInfo: HistoryDbInitInfo

    private staticpagesDbInitInfo: StaticPagesDbInitInfo

    private logDbInitInfo: LogDbInitInfo

    private readonly SQL_FILE: string = "initWeblisket.sql";
        
        
public constructor (databaseConnectionInfoInterface: DatabaseConnectionInfoInterface)                        

                            : super(databaseConnectionInfoInterface as DbConnectionInfo){

            super();
            var databaseConnectionInfoInterface = databaseConnectionInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}


    public addUsers(): Boolean{

        try {
            put(this.commonStrings!.START, this, this.METHOD_ADD_USERS)
userDbInitInfo= UserDbInitInfo()
inventoryDbInitInfo= InventoryDbInitInfo()
historyDbInitInfo= HistoryDbInitInfo()
staticpagesDbInitInfo= StaticPagesDbInitInfo()
logDbInitInfo= LogDbInitInfo()

    var CUSTOMERDB: string = userDbInitInfo!.getName()!;
        
        


    var CUSTOMERDBUSER: string = userDbInitInfo!.getUserName()!;
        
        


    var CUSTOMERDBPASSWORD: string = userDbInitInfo!.getPassword()!;
        
        


    
                        if(!this.addDbUser(CUSTOMERDB, CUSTOMERDBUSER, CUSTOMERDBPASSWORD))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_USER +CUSTOMERDBUSER, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var INVENTORYDB: string = inventoryDbInitInfo!.getName()!;
        
        


    var INVENTORYDBUSER: string = inventoryDbInitInfo!.getUserName()!;
        
        


    var INVENTORYDBPASSWORD: string = inventoryDbInitInfo!.getPassword()!;
        
        


    
                        if(!this.addDbUser(INVENTORYDB, INVENTORYDBUSER, INVENTORYDBPASSWORD))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_USER +INVENTORYDBUSER, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var HISTORYDB: string = historyDbInitInfo!.getName()!;
        
        


    var HISTORYDBUSER: string = historyDbInitInfo!.getUserName()!;
        
        


    var HISTORYDBPASSWORD: string = historyDbInitInfo!.getPassword()!;
        
        


    
                        if(!this.addDbUser(HISTORYDB, HISTORYDBUSER, HISTORYDBPASSWORD))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_USER +HISTORYDBUSER, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var STATICPAGESDB: string = staticpagesDbInitInfo!.getName()!;
        
        


    var STATICPAGESDBUSER: string = staticpagesDbInitInfo!.getUserName()!;
        
        


    var STATICPAGESDBPASSWORD: string = staticpagesDbInitInfo!.getPassword()!;
        
        


    
                        if(!this.addDbUser(STATICPAGESDB, STATICPAGESDBUSER, STATICPAGESDBPASSWORD))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_USER +STATICPAGESDBUSER, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var LOGDB: string = logDbInitInfo!.getName()!;
        
        


    var LOGDBUSER: string = logDbInitInfo!.getUserName()!;
        
        


    var LOGDBPASSWORD: string = logDbInitInfo!.getPassword()!;
        
        


    
                        if(!this.addDbUser(LOGDB, LOGDBUSER, LOGDBPASSWORD))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_USER +LOGDBUSER, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
put(this.commonStrings!.END, this, this.METHOD_ADD_USERS)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_USERS, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}

}


    public addDatabases(): Boolean{

        try {
            put(this.commonStrings!.START, this, this.METHOD_ADD_DATABASES)
userDbInitInfo= UserDbInitInfo()
inventoryDbInitInfo= InventoryDbInitInfo()
historyDbInitInfo= HistoryDbInitInfo()
staticpagesDbInitInfo= StaticPagesDbInitInfo()
logDbInitInfo= LogDbInitInfo()

    var CUSTOMERDB: string = userDbInitInfo!.getName()!;
        
        


    
                        if(!this.addDb(CUSTOMERDB))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_DATABASE +CUSTOMERDB, this, this.METHOD_ADD_DATABASES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var INVENTORYDB: string = inventoryDbInitInfo!.getName()!;
        
        


    
                        if(!this.addDb(INVENTORYDB))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_DATABASE +INVENTORYDB, this, this.METHOD_ADD_DATABASES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var HISTORYDB: string = historyDbInitInfo!.getName()!;
        
        


    
                        if(!this.addDb(HISTORYDB))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_DATABASE +HISTORYDB, this, this.METHOD_ADD_DATABASES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var STATICPAGESDB: string = staticpagesDbInitInfo!.getName()!;
        
        


    
                        if(!this.addDb(STATICPAGESDB))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_DATABASE +STATICPAGESDB, this, this.METHOD_ADD_DATABASES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var LOGDB: string = logDbInitInfo!.getName()!;
        
        


    
                        if(!this.addDb(LOGDB))
                        
                                    {
                                    put(this.UNABLE_TO_CREATE_DATABASE +LOGDB, this, this.METHOD_ADD_DATABASES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

    var file: AbFile = FileFactory.getInstance()!.getInstance(SQL_FILE)!;
        
        

createNewFile()

    var idOutData: AbDataOutputStream = DataOutputStreamFactory.getInstance()!.getInstance(file)!;
        
        

writeBytes(this.sqlCommandLog!.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_DATABASES, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}

}


    public addTables(): Boolean{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

put(commonStrings!.START, this, this.METHOD_ADD_TABLES)
append(UserEntityFactory.getInstance()!.createTable())
append(StoreFrontsEntityFactory.getInstance()!.getStoreFrontsEntityInstance()!.createTable())
append(BillingAddressesEntityFactory.getInstance()!.getInstance(this.stringUtil!.EMPTY_STRING)!.createTable())
append(ShippingAddressesEntityFactory.getInstance()!.getInstance(this.stringUtil!.EMPTY_STRING)!.createTable())
append(PaymentEntityFactory.getInstance()!.getPaymentEntityInstance()!.createTable())
append(QuoteRequestEntityFactory.getInstance()!.getQuoteRequestEntityInstance()!.createTable())
append(OrderHistoryEntityFactory.getInstance()!.createTable())
append(OrderItemsEntityFactory.getInstance()!.createTable())
append(TransactionEntityFactory.getInstance()!.getTransactionEntityInstance()!.createTable())
append(TransactionResultEntityFactory.getInstance()!.getTransactionResultEntityInstance()!.createTable())
append(PaymentGatewayEntityFactory.getInstance()!.createTable())
append(InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!.createTable())
append(InitInfoEntity().
                            createTable())
append(LogTableEntityFactory.getInstance()!.getLogTableEntityInstance()!.createTable())
append(StaticPagesEntityFactory.getInstance()!.getStaticPagesEntityInstance()!.createTable())
append(TransformInfoEntityBuilder.getInstance()!.createTable())
put(ADD_TABLES_RESULTS_LABEL +stringBuffer!.toString(), this, this.METHOD_ADD_TABLES)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.METHOD_ADD_TABLES, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


}
                
            

