
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
//not GWT import const HashMap

import { HttpServletRequest } from '../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { Portion } from '../../org/allbinary/business/installer/Portion.js';
//not GWT import const Portion

import { PaymentGatewayInterface } from '../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterface.js';
//not GWT import const PaymentGatewayInterface

import { PaymentGatewayInterfaceFactory } from '../../org/allbinary/business/user/commerce/money/payment/gateway/PaymentGatewayInterfaceFactory.js';
//not GWT import const PaymentGatewayInterfaceFactory

import { BasicPaymentTypeUtil } from '../../org/allbinary/business/user/commerce/money/payment/types/BasicPaymentTypeUtil.js';
//not GWT import const BasicPaymentTypeUtil

import { PaymentGatewayEntityFactory } from '../../org/allbinary/data/tables/user/commerce/money/payment/gateway/PaymentGatewayEntityFactory.js';
//not GWT import const PaymentGatewayEntityFactory

import { WeblisketSession } from '../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlTableUtil } from '../../org/allbinary/logic/communication/sql/AbSqlTableUtil.js';
//not GWT import const AbSqlTableUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTable } from './BasicTable.js';
//sameFolderImports - not GWT import - same folder const BasicTable

export class PaymentGatewayHelper extends BasicTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private weblisketSession: WeblisketSession;

    private readonly httpServletRequest: HttpServletRequest;

    private readonly portion: Portion;

public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
        
 try { this.weblisketSession= new WeblisketSession(hashMap, pageContext);
    
this.httpServletRequest= pageContext!.getRequest() as HttpServletRequest;
    
this.portion= new Portion(hashMap);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PAYMENTERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


    public insert(): string{

 try { 
    let paymentGatewayInterface: PaymentGatewayInterface = new PaymentGatewayInterfaceFactory().getInstance(this.httpServletRequest)!;;
    
paymentGatewayInterface!.setStoreName(this.weblisketSession!.getStoreName());
    
PaymentGatewayEntityFactory.getInstance()!.add(paymentGatewayInterface);
    

    let success: string = "Successfully Added New Payment Gateway";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "insert()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success +"<br/>";
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to add";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "add()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br>" +"Exception: " +e +"<br>";
    

 }
   }
 
}


    public update(): string{

 try { 
    let paymentGatewayInterface: PaymentGatewayInterface = new PaymentGatewayInterfaceFactory().getInstance(this.httpServletRequest)!;;
    
paymentGatewayInterface!.setStoreName(this.weblisketSession!.getStoreName());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Gateway Name: ");
    
stringBuffer!.append(paymentGatewayInterface!.getName());
    
stringBuffer!.append(" HashMap=");
    
stringBuffer!.append(paymentGatewayInterface!.toHashMap(true)!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "update()");
    

                                    }
                                
PaymentGatewayEntityFactory.getInstance()!.update(paymentGatewayInterface);
    

    let success: string = "Successfully Updated Payment Gateway information";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "update()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success +"<br/>";
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to update payment gateway information";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "update()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br/>" +"Exception: " +e +"<br/>";
    

 }
   }
 
}


    public delete(): string{

 try { 
    let paymentGatewayInterface: PaymentGatewayInterface = new PaymentGatewayInterfaceFactory().getInstance(this.httpServletRequest)!;;
    
paymentGatewayInterface!.setStoreName(this.weblisketSession!.getStoreName());
    

    let storeName: string = paymentGatewayInterface!.getStoreName()!;;
    

    let gatewayName: string = paymentGatewayInterface!.getName()!;;
    
PaymentGatewayEntityFactory.getInstance()!.remove(storeName, BasicPaymentTypeUtil.getInstance()!.get(gatewayName));
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Successfully Removed payment gateway where store name=");
    
stringBuffer!.append(storeName);
    
stringBuffer!.append(" and gateway name=");
    
stringBuffer!.append(gatewayName);
    

    let success: string = stringBuffer!.toString()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "delete()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success +"<br/>";
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to remove payment gateway from table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "remove()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error +"<br/>" +"Exception: " +e +"<br>";
    

 }
   }
 
}


    public drop(): string{

 try { 
    let success: string = PaymentGatewayEntityFactory.getInstance()!.dropTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, this.commonStrings!.DROP);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to drop payment transaction result table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.DROP, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public create(): string{

 try { 
    let success: string = PaymentGatewayEntityFactory.getInstance()!.createTable()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "create()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to create payment transaction result table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "create()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public restore(): string{

 try { 
    let success: string = "Restore Successful";;
    

    let result: string = AbSqlTableUtil.getInstance()!.restoreTable(PaymentGatewayEntityFactory.getInstance(), this.portion)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "restore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to restore backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "restore()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


    public backup(): string{

 try { 
    let success: string = "Restore Successful";;
    

    let result: string = AbSqlTableUtil.getInstance()!.backupTable(PaymentGatewayEntityFactory.getInstance())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    this.logUtil!.putF(success, this, "backup()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let error: string = "Failed to make backup";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "backup()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    

 }
   }
 
}


}

