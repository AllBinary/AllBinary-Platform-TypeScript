
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

    
import { StoreFrontData } from "../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { UserData } from "../../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { PaymentData } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { PaymentGatewayData } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js";

    
import { PaymentGatewayEncryptedMapping } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayEncryptedMapping.js";

    
import { PaymentGatewayInterface } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js";

    
import { PaymentGatewayInterfaceFactory } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactory.js";

    
import { BasicPaymentType } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js";

    
import { BasicPaymentTypeUtil } from "../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js";

    
import { PaymentGatewayIdGenerator } from "../../../../../../../../../org/allbinary/data/generator/PaymentGatewayIdGenerator.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { SuperCrypt } from "../../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class PaymentGatewayEntity extends AbSqlBean
                , PaymentGatewayEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "paymentgateways";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR)

                                    }
                                
}


    public add(paymentGatewayInterface: PaymentGatewayInterface){
var paymentGatewayInterface = paymentGatewayInterface

        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.START, this, "add")

                                    }
                                

    var vector: Vector = new Vector();
        
        

add(PaymentGatewayIdGenerator().
                            getNext())
addAll(PaymentGatewayEncryptedMapping(paymentGatewayInterface).
                            toVector())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(time)
add(time)
insert(vector)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(commonStrings!.END, this, "add")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "add", e)

                                    }
                                
}

}


    public update(paymentGatewayInterface: PaymentGatewayInterface){
var paymentGatewayInterface = paymentGatewayInterface

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

setLastModified(time)

    var whereKeyValuePairs: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME.toString(), paymentGatewayInterface!.getStoreName())
put(PaymentGatewayData.NAME.toString(), paymentGatewayInterface!.getName())

    
                        if(whereKeyValuePairs!.get(EntryData.getInstance()!.TIMECREATED) != 
                                    null
                                )
                        
                                    {
                                    


                            throw Exception("Don't update TimeCreated for update")

                                    }
                                

    var updateHashMap: HashMap<Any, Any> = PaymentGatewayEncryptedMapping(paymentGatewayInterface).
                            toHashMap()!;
        
        

updateWhere(whereKeyValuePairs, updateHashMap)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "update")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "update", e)

                                    }
                                
}

}


    public getPaymentGatewayInterface(storeName: string, paymentType: BasicPaymentType): PaymentGatewayInterface{
var storeName = storeName
var paymentType = paymentType

        try {
            
    var paymentGatewayHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var whereKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME.toString(), storeName)
put(PaymentGatewayData.NAME.toString(), paymentType!.getName())
paymentGatewayHashMap= super.getRow(whereKeyAndValue)

    
                        if(paymentGatewayHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var userName: string = paymentGatewayHashMap!.get(UserData.USERNAME.toString()) as String;
        
        


    var password: string = paymentGatewayHashMap!.get(UserData.PASSWORD.toString()) as String;
        
        


    var special1: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL1.toString()) as String;
        
        


    var special2: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL2.toString()) as String;
        
        


    var special3: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL3.toString()) as String;
        
        


    var special4: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL4.toString()) as String;
        
        


    var special5: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL5.toString()) as String;
        
        


    var special6: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL6.toString()) as String;
        
        


    var special7: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL7.toString()) as String;
        
        


    var special8: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL8.toString()) as String;
        
        


    var special9: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL9.toString()) as String;
        
        


    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
        
        

put(UserData.USERNAME.toString(), superCrypt!.decrypt(userName))
put(UserData.PASSWORD.toString(), superCrypt!.decrypt(password))
put(PaymentGatewayData.SPECIAL1.toString(), superCrypt!.decrypt(special1))
put(PaymentGatewayData.SPECIAL2.toString(), superCrypt!.decrypt(special2))
put(PaymentGatewayData.SPECIAL3.toString(), superCrypt!.decrypt(special3))
put(PaymentGatewayData.SPECIAL4.toString(), superCrypt!.decrypt(special4))
put(PaymentGatewayData.SPECIAL5.toString(), superCrypt!.decrypt(special5))
put(PaymentGatewayData.SPECIAL6.toString(), superCrypt!.decrypt(special6))
put(PaymentGatewayData.SPECIAL7.toString(), superCrypt!.decrypt(special7))
put(PaymentGatewayData.SPECIAL8.toString(), superCrypt!.decrypt(special8))
put(PaymentGatewayData.SPECIAL9.toString(), superCrypt!.decrypt(special9))

    var paymentGatewayInterface: PaymentGatewayInterface = PaymentGatewayInterfaceFactory().
                            getInstance(paymentGatewayHashMap)!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "getPaymentGatewayInterface()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaymentGatewayInterfaceFactory().
                            getInstance(paymentType);
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put("Command Failed for paymentType: " +paymentType!.getName(), this, "getPaymentGatewayInterface", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public findPaymentTypeVectorByStore(storeName: string): Vector{
var storeName = storeName

        try {
            
    var paymentGatewayNameVector: Vector = new Vector();
        
        

paymentGatewayNameVector= super.getColumnWhere(PaymentGatewayData.NAME.toString(), StoreFrontData.getInstance()!.NAME.toString(), storeName)

    
                        if(paymentGatewayNameVector != 
                                    null
                                )
                        
                                    {
                                    
    var paymentGatewayVector: Vector = new Vector();
        
        


    var size: number = paymentGatewayNameVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var paymentTypeString: string = paymentGatewayNameVector!.get(i) as String;
        
        


    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(paymentTypeString)!;
        
        

add(paymentType)
}


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "findPaymentTypeVectorByStore()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayVector;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Vector();
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "findPaymentTypeVectorByStore", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public remove(storeName: string, paymentType: BasicPaymentType){
var storeName = storeName
var paymentType = paymentType

        try {
            
    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME.toString(), storeName)
put(PaymentGatewayData.NAME.toString(), paymentType!.getName())
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


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.CREATE_TABLE)
append(tableName)
append(this.sqlStrings!.START)
append(PaymentGatewayData.ID.toString())
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL)
append(EntryData.getInstance()!.ENABLE)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(StoreFrontData.getInstance()!.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.NAME.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentData.METHOD)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.MODE.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.TESTPROTOCOL.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.TESTSERVER.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.TESTPORT.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.TESTPATH.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SERVERPROTOCOL.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SERVER.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SERVERPORT.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SERVERPATH.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(UserData.USERNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(UserData.PASSWORD)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.TIMEOUT.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYPROTOCOL.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYSERVER.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYPORT.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYPATH.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYUSERNAME.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYPASSWORD.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.PROXYTIMEOUT.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL1.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL2.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL3.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL4.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL5.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL6.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL7.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL8.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentGatewayData.SPECIAL9.toString())
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(EntryData.getInstance()!.LASTMODIFIED)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(EntryData.getInstance()!.TIMECREATED)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(this.sqlStrings!.PRIMARY_KEY)
append(PaymentGatewayData.ID.toString())
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
                
            

