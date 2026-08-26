
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../../java/lang/Long.js';
        
//not game specific package import { Calendar } from '../../../../../../../../java/util/Calendar.js';
      const Calendar = globalThis.java.util.Calendar;

      
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Random } from '../../../../../../../../java/util/Random.js';
      const Random = globalThis.java.util.Random;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { UserDbInitInfo } from '../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not game specific package import { UserData } from '../../../../../../../../org/allbinary/business/user/UserData.js';
      const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not game specific package import { Payment } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
      const Payment = globalThis.org.allbinary.business.user.commerce.money.payment.Payment;

      
//not game specific package import { PaymentData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
//not game specific package import { PaymentInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js';
      const PaymentInterface = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentInterface;

      
//not game specific package import { PaymentIdGenerator } from '../../../../../../../../org/allbinary/data/generator/PaymentIdGenerator.js';
      const PaymentIdGenerator = globalThis.org.allbinary.data.generator.PaymentIdGenerator;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbSqlBean } from '../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not game specific package import { SuperCrypt } from '../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js';
      const SuperCrypt = globalThis.org.allbinary.logic.control.crypt.SuperCrypt;

      
//not game specific package import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaymentEntityInterface } from './PaymentEntityInterface.js';

export class PaymentEntity extends AbSqlBean implements PaymentEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "payment";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public getLastId(userName: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getLargestIntegerInColumnWhere(PaymentData.ID, UserData.USERNAME, userName);;
    
}


    public setDefault(userName: string, index: Integer){

        try {
            
    var updateKeyAndValue: HashMap<any, any> = new HashMap<any, any>();;
    

    var whereKeyAndValue: HashMap<any, any> = new HashMap<any, any>();;
    
whereKeyAndValue!.put(UserData.USERNAME, userName);
    

    var paymentInterface: PaymentInterface = this.getDefault(userName)!;;
    

                        if(paymentInterface != 
                                    null
                                )
                        
                                    {
                                    updateKeyAndValue!.put(EntryData.getInstance()!.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING);
    
whereKeyAndValue!.put(PaymentData.ID, paymentInterface!.getId());
    
super.updateWhere(whereKeyAndValue, updateKeyAndValue);
    

                                    }
                                
updateKeyAndValue!.put(EntryData.getInstance()!.DEFAULT, EntryData.getInstance()!.DEFAULT);
    
whereKeyAndValue!.put(PaymentData.ID, index.toString());
    
super.updateWhere(whereKeyAndValue, updateKeyAndValue);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "setDefault");
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setDefault", e);
    

                                    }
                                
}

}


    public get(userName: string): Vector{

        try {
            
    var paymentVector: Vector = new Vector();;
    

    var keyAndValue: HashMap<any, any> = new HashMap<any, any>();;
    
keyAndValue!.put(UserData.USERNAME, userName);
    

    var paymentList: Vector = super.getRows(keyAndValue)!;;
    

    var size: number = paymentList!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var paymentHashMap: HashMap<any, any> = paymentList!.get(index) as HashMap<any, any>;;
    

    var payment: Payment = new Payment(paymentHashMap);;
    

                        if(payment != 
                                    null
                                )
                        
                                    {
                                    paymentVector!.add(payment);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentVector;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getDefault(userName: string): PaymentInterface{

        try {
            
    var paymentHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var updateKeyAndValue: HashMap<any, any> = new HashMap<any, any>();;
    
updateKeyAndValue!.put(EntryData.getInstance()!.DEFAULT, EntryData.getInstance()!.DEFAULT);
    
updateKeyAndValue!.put(UserData.USERNAME, userName);
    
paymentHashMap= super.getRow(updateKeyAndValue);
    

                        if(paymentHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var payment: Payment = new Payment(paymentHashMap);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getDefault");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return payment as PaymentInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "getDefault", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public remove(userName: string, index: Integer){

        try {
            
    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
whereHashMap!.put(UserData.USERNAME, userName);
    
whereHashMap!.put(PaymentData.ID, index.toString() as string);
    
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


    public add(userName: string, paymentInterface: PaymentInterface){

        try {
            
    var vector: Vector = new Vector();;
    
vector.add(new PaymentIdGenerator().getNext());
    
vector.add(userName);
    
vector.add(StringUtil.getInstance()!.EMPTY_STRING);
    
vector.add(paymentInterface!.getName());
    
vector.add(paymentInterface!.getType());
    
vector.add(paymentInterface!.getExpiration());
    

    var random: number = new Random().nextInt(SuperCrypt.KEYMAX)!;;
    
vector.add(new SuperCrypt(random).encrypt(paymentInterface!.getNumber()));
    
vector.add(new Integer(random).toString());
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
vector.add(time);
    
super.insert(vector);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "add");
    

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


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(PaymentData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(entryData!.DEFAULT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(PaymentData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(PaymentData.TYPE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(PaymentData.EXPIRATION)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(PaymentData.NUMBER)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(entryData!.ENCRYPTION)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(entryData!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(PaymentData.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public drop(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}
                
            

