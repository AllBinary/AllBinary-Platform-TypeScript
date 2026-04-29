
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PaymentGatewayEntityInterface } from "./PaymentGatewayEntityInterface.js";

export class PaymentGatewayEntity extends AbSqlBean implements PaymentGatewayEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "paymentgateways";
public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public add(paymentGatewayInterface: PaymentGatewayInterface){
var paymentGatewayInterface = paymentGatewayInterface

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "add");
    

                                    }
                                

    var vector: Vector = new Vector();
;
    
vector.add(new PaymentGatewayIdGenerator().
                            getNext());
    
vector.addAll(new PaymentGatewayEncryptedMapping(paymentGatewayInterface).
                            toVector());
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString();
;
    
vector.add(time);
    
vector.add(time);
    
super.insert(vector);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.END, this, "add");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "add", e);
    

                                    }
                                
}

}


    public update(paymentGatewayInterface: PaymentGatewayInterface){
var paymentGatewayInterface = paymentGatewayInterface

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString();
;
    
paymentGatewayInterface!.setLastModified(time);
    

    var whereKeyValuePairs: HashMap = new HashMap();
;
    
whereKeyValuePairs!.put(StoreFrontData.getInstance()!.NAME.toString(), paymentGatewayInterface!.getStoreName());
    
whereKeyValuePairs!.put(PaymentGatewayData.NAME.toString(), paymentGatewayInterface!.getName());
    

                        if(whereKeyValuePairs!.get(EntryData.getInstance()!.TIMECREATED) != 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Don't update TimeCreated for update");
                    

                                    }
                                

    var updateHashMap: HashMap = new PaymentGatewayEncryptedMapping(paymentGatewayInterface).
                            toHashMap()!;
;
    
super.updateWhere(whereKeyValuePairs, updateHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "update");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "update", e);
    

                                    }
                                
}

}


    public getPaymentGatewayInterface(storeName: string, paymentType: BasicPaymentType): PaymentGatewayInterface{
var storeName = storeName
var paymentType = paymentType

        try {
            
    var paymentGatewayHashMap: HashMap = new HashMap();
;
    

    var whereKeyAndValue: HashMap = new HashMap();
;
    
whereKeyAndValue!.put(StoreFrontData.getInstance()!.NAME.toString(), storeName);
    
whereKeyAndValue!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    
paymentGatewayHashMap= super.getRow(whereKeyAndValue);
    

                        if(paymentGatewayHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var userName: string =  as StringpaymentGatewayHashMap!.get(UserData.USERNAME.toString());;
;
    

    var password: string =  as StringpaymentGatewayHashMap!.get(UserData.PASSWORD.toString());;
;
    

    var special1: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL1.toString());;
;
    

    var special2: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL2.toString());;
;
    

    var special3: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL3.toString());;
;
    

    var special4: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL4.toString());;
;
    

    var special5: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL5.toString());;
;
    

    var special6: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL6.toString());;
;
    

    var special7: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL7.toString());;
;
    

    var special8: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL8.toString());;
;
    

    var special9: string =  as StringpaymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL9.toString());;
;
    

    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);
;
    
paymentGatewayHashMap!.put(UserData.USERNAME.toString(), superCrypt!.decrypt(userName));
    
paymentGatewayHashMap!.put(UserData.PASSWORD.toString(), superCrypt!.decrypt(password));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL1.toString(), superCrypt!.decrypt(special1));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL2.toString(), superCrypt!.decrypt(special2));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL3.toString(), superCrypt!.decrypt(special3));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL4.toString(), superCrypt!.decrypt(special4));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL5.toString(), superCrypt!.decrypt(special5));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL6.toString(), superCrypt!.decrypt(special6));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL7.toString(), superCrypt!.decrypt(special7));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL8.toString(), superCrypt!.decrypt(special8));
    
paymentGatewayHashMap!.put(PaymentGatewayData.SPECIAL9.toString(), superCrypt!.decrypt(special9));
    

    var paymentGatewayInterface: PaymentGatewayInterface = new PaymentGatewayInterfaceFactory().
                            getInstance(paymentGatewayHashMap)!;
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getPaymentGatewayInterface()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewayInterfaceFactory().
                            getInstance(paymentType);;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put("Command Failed for paymentType: " +paymentType!.getName(), this, "getPaymentGatewayInterface", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public findPaymentTypeVectorByStore(storeName: string): Vector{
var storeName = storeName

        try {
            
    var paymentGatewayNameVector: Vector = new Vector();
;
    
paymentGatewayNameVector= super.getColumnWhere(PaymentGatewayData.NAME.toString(), StoreFrontData.getInstance()!.NAME.toString(), storeName);
    

                        if(paymentGatewayNameVector != 
                                    null
                                )
                        
                                    {
                                    
    var paymentGatewayVector: Vector = new Vector();
;
    

    var size: number = paymentGatewayNameVector!.length!;
;
    




                        for (
    var i: number = 0;
i < size; i++)
        {

    var paymentTypeString: string =  as StringpaymentGatewayNameVector!.get(i);;
;
    

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(paymentTypeString)!;
;
    
paymentGatewayVector!.add(paymentType);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "findPaymentTypeVectorByStore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayVector;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Vector();
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "findPaymentTypeVectorByStore", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public remove(storeName: string, paymentType: BasicPaymentType){
var storeName = storeName
var paymentType = paymentType

        try {
            
    var whereHashMap: HashMap = new HashMap();
;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME.toString(), storeName);
    
whereHashMap!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    
super.deleteWhere(whereHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "remove");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "remove", e);
    

                                    }
                                
}

}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.tableName);
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(PaymentGatewayData.ID.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.ENABLE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(StoreFrontData.getInstance()!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.NAME.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentData.METHOD);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.MODE.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.TESTPROTOCOL.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.TESTSERVER.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.TESTPORT.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.TESTPATH.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SERVERPROTOCOL.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SERVER.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SERVERPORT.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SERVERPATH.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(UserData.PASSWORD);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.TIMEOUT.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYPROTOCOL.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYSERVER.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYPORT.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYPATH.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYUSERNAME.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYPASSWORD.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.PROXYTIMEOUT.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL1.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL2.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL3.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL4.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL5.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL6.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL7.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL8.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentGatewayData.SPECIAL9.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.LASTMODIFIED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.TIMECREATED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(PaymentGatewayData.ID.toString());
    
stringBuffer!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}
                
            

