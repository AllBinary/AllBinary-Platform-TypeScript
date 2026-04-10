
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
        



import { Calendar } from "../../../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { UserData } from "../../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { OrderData } from "../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { PaymentTransactionKeysFactory } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionKeysFactory.js";

    
import { TransactionResult } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResult.js";

    
import { TransactionResultInterface } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResultInterface.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class TransactionResultEntity extends AbSqlBean
                , TransactionResultEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "vresults";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public remove(userName: string, orderNumber: string){
var userName = userName
var orderNumber = orderNumber

        try {
            
    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(OrderData.ID, orderNumber as String)
put(UserData.USERNAME, userName)
deleteWhere(whereHashMap)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "remove")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "remove", e)

                                    }
                                
}

}


    public add(userName: string, orderNumber: string, transactionResultInterface: TransactionResultInterface){
var userName = userName
var orderNumber = orderNumber
var transactionResultInterface = transactionResultInterface

        try {
            
    var values: Vector = new Vector();
        
        

add(orderNumber)
add(userName)
addAll(transactionResultInterface!.getValues())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = calendar.getTimeInMillis() as Long.
                            toString()!;
        
        

add(time)
add(time)
insert(values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "add")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "add", e)

                                    }
                                
}

}


    public getTransactionResultInterface(orderNumber: string): TransactionResultInterface{
var orderNumber = orderNumber

        try {
            
    var resultHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var updateKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(OrderData.ID, orderNumber)
resultHashMap= super.getRow(updateKeyAndValue)

    
                        if(resultHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var transactionResult: TransactionResult = new TransactionResult(resultHashMap);
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "getTransactionResultInterface")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transactionResult as TransactionResultInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "getTransactionResultInterface", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public createTableStatement(): string{

    var paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(this.sqlTypeStrings!.TWELVE_CHAR_COLUMN_NOT_NULL)
append(this.sqlTypeStrings!.ONE_CHAR_COLUMN_NOT_NULL)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(this.sqlTypeStrings!.TWO_INT_NOT_NULL)
append(this.sqlTypeStrings!.MAX_INT_NOT_NULL)
append(this.sqlTypeStrings!.MAX_INT_NOT_NULL)
append(this.sqlTypeStrings!.THREE_INT_NOT_NULL)
append(paymentTransactionKeysFactory!.REASON3.toString())
append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

