
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../../../../java/util/Calendar.js';
      //not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontData } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserDbInitInfo } from '../../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      //not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
import { UserData } from '../../../../../../../../../org/allbinary/business/user/UserData.js';
      //not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { PaymentData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      //not GWT import const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
import { PaymentGatewayData } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayData.js';
      //not GWT import const PaymentGatewayData = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayData;

      
import { PaymentGatewayEncryptedMapping } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayEncryptedMapping.js';
      //not GWT import const PaymentGatewayEncryptedMapping = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayEncryptedMapping;

      
import { PaymentGatewayInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
      //not GWT import const PaymentGatewayInterface = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterface;

      
import { PaymentGatewayInterfaceFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactory.js';
      //not GWT import const PaymentGatewayInterfaceFactory = globalThis.org.allbinary.business.user.commerce.money.payment.gateway.PaymentGatewayInterfaceFactory;

      
import { BasicPaymentType } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentType.js';
      //not GWT import const BasicPaymentType = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentType;

      
import { BasicPaymentTypeUtil } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
      //not GWT import const BasicPaymentTypeUtil = globalThis.org.allbinary.business.user.commerce.money.payment.types.BasicPaymentTypeUtil;

      
import { PaymentGatewayIdGenerator } from '../../../../../../../../../org/allbinary/data/generator/PaymentGatewayIdGenerator.js';
      //not GWT import const PaymentGatewayIdGenerator = globalThis.org.allbinary.data.generator.PaymentGatewayIdGenerator;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
import { SuperCrypt } from '../../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js';
      //not GWT import const SuperCrypt = globalThis.org.allbinary.logic.control.crypt.SuperCrypt;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentGatewayEntityInterface } from './PaymentGatewayEntityInterface.js';
//not GWT import const  = globalThis.org.allbinary.data.tables.user.commerce.money.payment.gateway.PaymentGatewayEntityInterface;

                
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

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, "add");
    

                                    }
                                

    var vector: Vector = new Vector();;
    
vector.add(new PaymentGatewayIdGenerator().getNext());
    
vector.addAll(new PaymentGatewayEncryptedMapping(paymentGatewayInterface).toVector());
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
vector.add(time);
    
vector.add(time);
    
super.insert(vector);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.END, this, "add");
    

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

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
paymentGatewayInterface!.setLastModified(time);
    

    var whereKeyValuePairs: HashMap<any, any> = new HashMap<any, any>();;
    
whereKeyValuePairs!.put(StoreFrontData.getInstance()!.NAME.toString(), paymentGatewayInterface!.getStoreName());
    
whereKeyValuePairs!.put(PaymentGatewayData.NAME.toString(), paymentGatewayInterface!.getName());
    

                        if(whereKeyValuePairs!.get(EntryData.getInstance()!.TIMECREATED) != 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Don't update TimeCreated for update");
                    

                                    }
                                

    var updateHashMap: HashMap<any, any> = new PaymentGatewayEncryptedMapping(paymentGatewayInterface).toHashMap()!;;
    
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

        try {
            
    var paymentGatewayHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var whereKeyAndValue: HashMap<any, any> = new HashMap<any, any>();;
    
whereKeyAndValue!.put(StoreFrontData.getInstance()!.NAME.toString(), storeName);
    
whereKeyAndValue!.put(PaymentGatewayData.NAME.toString(), paymentType!.getName());
    
paymentGatewayHashMap= super.getRow(whereKeyAndValue);
    

                        if(paymentGatewayHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var userName: string = paymentGatewayHashMap!.get(UserData.USERNAME.toString()) as string;;
    

    var password: string = paymentGatewayHashMap!.get(UserData.PASSWORD.toString()) as string;;
    

    var special1: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL1.toString()) as string;;
    

    var special2: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL2.toString()) as string;;
    

    var special3: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL3.toString()) as string;;
    

    var special4: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL4.toString()) as string;;
    

    var special5: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL5.toString()) as string;;
    

    var special6: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL6.toString()) as string;;
    

    var special7: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL7.toString()) as string;;
    

    var special8: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL8.toString()) as string;;
    

    var special9: string = paymentGatewayHashMap!.get(PaymentGatewayData.SPECIAL9.toString()) as string;;
    

    var superCrypt: SuperCrypt = new SuperCrypt(PaymentGatewayData.CRYPTNUM);;
    
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
    

    var paymentGatewayInterface: PaymentGatewayInterface = new PaymentGatewayInterfaceFactory().getInstance(paymentGatewayHashMap)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getPaymentGatewayInterface()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentGatewayInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PaymentGatewayInterfaceFactory().getInstance(paymentType);;
    

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

        try {
            
    var paymentGatewayNameVector: Vector = new Vector();;
    
paymentGatewayNameVector= super.getColumnWhere(PaymentGatewayData.NAME.toString(), StoreFrontData.getInstance()!.NAME.toString(), storeName);
    

                        if(paymentGatewayNameVector != 
                                    null
                                )
                        
                                    {
                                    
    var paymentGatewayVector: Vector = new Vector();;
    

    var size: number = paymentGatewayNameVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var paymentTypeString: string = paymentGatewayNameVector!.get(i) as string;;
    

    var paymentType: BasicPaymentType = BasicPaymentTypeUtil.getInstance()!.get(paymentTypeString)!;;
    
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

        try {
            
    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
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

    var stringBuffer: StringMaker = new StringMaker();;
    
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



