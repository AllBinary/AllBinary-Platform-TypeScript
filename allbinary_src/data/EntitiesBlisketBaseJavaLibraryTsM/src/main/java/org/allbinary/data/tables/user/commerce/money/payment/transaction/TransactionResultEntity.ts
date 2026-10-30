
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
//not GWT import const Calendar

import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { EntryData } from '../../../../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { UserDbInitInfo } from '../../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo

import { UserData } from '../../../../../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData

import { OrderData } from '../../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
//not GWT import const OrderData

import { PaymentTransactionKeysFactory } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/PaymentTransactionKeysFactory.js';
//not GWT import const PaymentTransactionKeysFactory

import { TransactionResult } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResult.js';
//not GWT import const TransactionResult

import { TransactionResultInterface } from '../../../../../../../../../org/allbinary/business/user/commerce/money/payment/gateway/transaction/TransactionResultInterface.js';
//not GWT import const TransactionResultInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlBean } from '../../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransactionResultEntityInterface } from './TransactionResultEntityInterface.js';
//sameFolderImports - not GWT import - same folder const TransactionResultEntityInterface

export class TransactionResultEntity extends AbSqlBean implements TransactionResultEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "vresults";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public remove(userName: string, orderNumber: string){

 try { 
    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(OrderData.ID, orderNumber as string);
    
whereHashMap!.put(UserData.USERNAME, userName);
    
super.deleteWhere(whereHashMap);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "remove");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "remove", e);
    

                                    }
                                

 }
   }
 
}


    public add(userName: string, orderNumber: string, transactionResultInterface: TransactionResultInterface){

 try { 
    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(orderNumber);
    
values.add(userName);
    
values.addAllList(transactionResultInterface!.getValues());
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString()!;;
    
values.add(time);
    
values.add(time);
    
super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "add");
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "add", e);
    

                                    }
                                

 }
   }
 
}


    public getTransactionResultInterface(orderNumber: string): TransactionResultInterface{

 try { 
    let resultHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let updateKeyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
updateKeyAndValue!.put(OrderData.ID, orderNumber);
    
resultHashMap= super.getRow(updateKeyAndValue);
    

                        if(resultHashMap != 
                                    null
                                )
                        
                                    {
                                    
    let transactionResult: TransactionResult = new TransactionResult(resultHashMap);;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getTransactionResultInterface");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transactionResult as TransactionResultInterface;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "getTransactionResultInterface", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public createTableStatement(): string{

    let paymentTransactionKeysFactory: PaymentTransactionKeysFactory = PaymentTransactionKeysFactory.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(OrderData.ID)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.RESULT.toString())!.append(this.sqlTypeStrings!.MAX_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.PNREF.toString())!.append(this.sqlTypeStrings!.TWELVE_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.RESPMSG.toString())!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(paymentTransactionKeysFactory!.AUTHCODE.toString())!.append(this.sqlTypeStrings!.SIX_CHAR_COLUMN_NOT_NULL)!.append(paymentTransactionKeysFactory!.AVSADDR.toString())!.append(this.sqlTypeStrings!.ONE_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.AVSZIP.toString())!.append(this.sqlTypeStrings!.ONE_CHAR_COLUMN_NOT_NULL)!.append(paymentTransactionKeysFactory!.ORIGRESULT.toString())!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(paymentTransactionKeysFactory!.STATUS.toString())!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.FRAUDCODE.toString())!.append(this.sqlTypeStrings!.TWO_INT_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.FRAUDMSG.toString())!.append(this.sqlTypeStrings!.MAX_INT_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.ERRCODE.toString())!.append(this.sqlTypeStrings!.MAX_INT_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.SCORE.toString())!.append(this.sqlTypeStrings!.THREE_INT_NOT_NULL);
    
stringBuffer!.append(paymentTransactionKeysFactory!.REASON1.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.REASON2.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.REASON3.toString());
    
stringBuffer!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION1.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION2.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION3.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION4.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION5.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION6.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(paymentTransactionKeysFactory!.EXCEPTION7.toString())!.append(this.sqlTypeStrings!.FOUR_INT_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(OrderData.ID)!.append(this.sqlStrings!.END);
    



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

