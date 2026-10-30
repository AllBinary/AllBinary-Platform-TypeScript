
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
        
            import { Float } from '../../../../../../../../java/lang/Float.js';
        
import { Calendar } from '../../../../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Random } from '../../../../../../../../java/util/Random.js';
//not GWT import const Random

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontData } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { HistoryDbInitInfo } from '../../../../../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js';
//not GWT import const HistoryDbInitInfo

import { UserData } from '../../../../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData

import { BillingAddressData } from '../../../../../../../../org/allbinary/business/user/address/BillingAddressData.js';
//not GWT import const BillingAddressData

import { ShippingAddressData } from '../../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js';
//not GWT import const ShippingAddressData

import { StreetAddress } from '../../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
//not GWT import const StreetAddress

import { Basket } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
//not GWT import const Basket

import { BasketInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
//not GWT import const BasketInterface

import { Order } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
//not GWT import const Order

import { OrderData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
//not GWT import const OrderData

import { OrderHistory } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
//not GWT import const OrderHistory

import { OrderHistoryData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
//not GWT import const OrderHistoryData

import { Money } from '../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { PaymentData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
//not GWT import const PaymentData

import { PaymentInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js';
//not GWT import const PaymentInterface

import { TaxFactory } from '../../../../../../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
//not GWT import const TaxFactory

import { ShippingMethodData } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
//not GWT import const ShippingMethodData

import { ShippingMethods } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js';
//not GWT import const ShippingMethods

import { ShippingInterface } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
//not GWT import const ShippingInterface

import { OrderHistoryIdGenerator } from '../../../../../../../../org/allbinary/data/generator/OrderHistoryIdGenerator.js';
//not GWT import const OrderHistoryIdGenerator

import { TableDataFactory } from '../../../../../../../../org/allbinary/data/tables/TableDataFactory.js';
//not GWT import const TableDataFactory

import { BillingAddressesEntity } from '../../../../../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntity.js';
//not GWT import const BillingAddressesEntity

import { ShippingAddressesEntity } from '../../../../../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
//not GWT import const ShippingAddressesEntity

import { PaymentEntity } from '../../../../../../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntity.js';
//not GWT import const PaymentEntity

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbSqlBean } from '../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean

import { SuperCrypt } from '../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js';
//not GWT import const SuperCrypt

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { ServiceClientInformationInterfaceFactory } from '../../../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
//not GWT import const ServiceClientInformationInterfaceFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderHistoryEntityInterface } from './OrderHistoryEntityInterface.js';
//not GWT import - same folder const OrderHistoryEntityInterface

export class OrderHistoryEntity extends AbSqlBean implements OrderHistoryEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "orderhistory";

public constructor (){
            super(new HistoryDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}

insert(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string') return this.insert$overload1(args[0], args[1]);
   
    if (args.length === 1) return this.insert$overload2(args[0]);
   
   throw new TypeError('No matching overload: insert'); }
  
    public insert$overload1(userName: string, order: Order){

    let vector: BasicArrayList = new BasicArrayListD();;
    

 try { 
    let paymentInterface: PaymentInterface = new PaymentEntity().getDefault(userName)!;;
    

    let billingAddress: StreetAddress = new BillingAddressesEntity(userName).getDefault()!;;
    

    let shippingAddress: StreetAddress = new ShippingAddressesEntity(userName).getDefault()!;;
    

    let abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    let storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(order.getStoreName())!;;
    

    let shippingInterface: ShippingInterface = new ShippingMethods(abeClientInformation, storeFrontInterface).getShippingInterface(order.getShippingMethod())!;;
    

    let shippingCost: Money = shippingInterface!.getCost(order)!;;
    

    let basketInterface: BasketInterface = order.getBasket()!;;
    

    let subTotal: Money = basketInterface!.getSubTotal()!;;
    

    let taxRate: number = TaxFactory.getInstance()!.getInstance(abeClientInformation, storeFrontInterface)!.getTaxRate(shippingAddress, storeFrontInterface)!;;
    

    let tax: Money = new Money();;
    

    let total: Money = new Money();;
    
total.add(shippingCost!.toString());
    
total.add(subTotal!.toString());
    
tax.add(total.toString());
    
tax.multiply(taxRate);
    
total.add(tax.toString());
    

    let empty: string = StringUtil.getInstance()!.EMPTY_STRING;;
    
vector.add(new OrderHistoryIdGenerator().getNext());
    

    let ZERO: string = TableDataFactory.getInstance()!.ZERO_STRING;;
    
vector.add(order.getId());
    
vector.add(userName);
    
vector.add(order.getStoreName());
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
vector.add(ZERO);
    
vector.add(time);
    
vector.add(ZERO);
    
vector.add(ZERO);
    
vector.add(OrderHistoryData.PREPROCESSING);
    
vector.add(order.getPaymentMethod());
    

                        if(paymentInterface != 
                                    null
                                )
                        
                                    {
                                    vector.add(paymentInterface!.getName());
    
vector.add(paymentInterface!.getType());
    
vector.add(paymentInterface!.getExpiration());
    

    let random: number = new Random().nextInt(SuperCrypt.KEYMAX)!;;
    
vector.add(new SuperCrypt(random).encrypt(paymentInterface!.getNumber()));
    
vector.add(new Integer(random).toString());
    

                                    }
                                
                        else {
                            vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(ZERO);
    

                        }
                            

                        if(billingAddress != 
                                    null
                                )
                        
                                    {
                                    vector.add(billingAddress!.getName());
    
vector.add(billingAddress!.getStreet());
    
vector.add(billingAddress!.getCity());
    
vector.add(billingAddress!.getState());
    
vector.add(billingAddress!.getCode());
    
vector.add(billingAddress!.getCountry());
    

                                    }
                                
                        else {
                            vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    

                        }
                            

                        if(shippingAddress != 
                                    null
                                )
                        
                                    {
                                    vector.add(shippingAddress!.getName());
    
vector.add(shippingAddress!.getStreet());
    
vector.add(shippingAddress!.getCity());
    
vector.add(shippingAddress!.getState());
    
vector.add(shippingAddress!.getCode());
    
vector.add(shippingAddress!.getCountry());
    

                                    }
                                
                        else {
                            vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    
vector.add(empty);
    

                        }
                            
vector.add(order.getShippingMethod());
    
vector.add(subTotal!.toString());
    
vector.add(shippingCost!.toString());
    
vector.add(tax.toString());
    
vector.add(total.toString());
    
vector.add(order.getSpecial());
    
vector.add(order.getUserComments());
    
vector.add(order.getUserCancelComments());
    
vector.add(order.getStoreComments());
    
vector.add(order.getStoreCancelComments());
    
this.insert(vector);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put("Command Failed: " +vector, this, INSERT, e);
    

                                    }
                                

 }
   }
 
}


    public insert$overload2(values: BasicArrayList){

 try { super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                

 }
   }
 
}


    public setStatus(orderId: string, status: string){

 try { 
    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    let updateHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
updateHashMap!.put(OrderHistoryData.STATUS, status);
    

                        if(status.compareTo(OrderHistoryData.CANCELLED) == 0)
                        
                                    {
                                    updateHashMap!.put(OrderHistoryData.CANCELDATE, time);
    

                                    }
                                
                             else 
                        if(status.compareTo(OrderHistoryData.SHIPPED) == 0)
                        
                                    {
                                    updateHashMap!.put(OrderHistoryData.SHIPPEDDATE, time);
    

                                    }
                                
super.updateWhere(OrderData.ID, orderId, updateHashMap);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setStatus", e);
    

                                    }
                                

 }
   }
 
}


    public setPaymentMethod(orderId: string, paymentMethod: string){

 try { 
    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    let updateHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
updateHashMap!.put(PaymentData.METHOD, paymentMethod);
    
updateHashMap!.put(OrderHistoryData.TRANSDATE, time);
    
super.updateWhere(OrderData.ID, orderId, updateHashMap);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setPaymentMethod", e);
    

                                    }
                                

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public getStoreOrders(storeFrontInterface: StoreFrontInterface): BasicArrayList{

    let orderReviewVector: BasicArrayList = new BasicArrayListD();;
    

    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME, storeFrontInterface!.getName());
    

    let orderHashMapVector: BasicArrayList = super.getRows(whereHashMap)!;;
    

    let size: number = orderHashMapVector!.size()!;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(i) as HashMap<any, any>;;
    

    let orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}

getOrders(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getOrders$overload1(args[0]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getOrders$overload2(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.getOrders$overload3(args[0], args[1]);
   
   throw new TypeError('No matching overload: getOrders'); }
  
                //@Throws(Exception.constructor)
            
    public getOrders$overload1(userName: string): BasicArrayList{

    let orderReviewVector: BasicArrayList = new BasicArrayListD();;
    

    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(UserData.USERNAME, userName);
    

    let orderHashMapVector: BasicArrayList = super.getRows(whereHashMap)!;;
    

    let size: number = orderHashMapVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    let orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrders$overload2(status: string, fromDate: string, toDate: string): BasicArrayList{

    let orderReviewVector: BasicArrayList = new BasicArrayListD();;
    

    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(OrderHistoryData.STATUS, status);
    

    let orderHashMapVector: BasicArrayList = super.getRowsWhereBetween(whereHashMap, OrderHistoryData.ORDERDATE, fromDate, toDate)!;;
    

    let size: number = orderHashMapVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    let orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrders$overload3(fromDate: string, toDate: string): BasicArrayList{

    let orderReviewVector: BasicArrayList = new BasicArrayListD();;
    

    let orderHashMapVector: BasicArrayList = super.getRowsWhereBetween(OrderHistoryData.ORDERDATE, fromDate, toDate)!;;
    

    let size: number = orderHashMapVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    let orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrder(id: string): OrderHistory{

    let whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(OrderData.ID, id);
    

    let orderReviewHashMap: HashMap<any, any> = super.getRow(whereHashMap)!;;
    

                        if(orderReviewHashMap != 
                                    null
                                )
                        
                                    {
                                    
    let orderHistory: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderHistory;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public createTableStatement(): string{

    let entryData: EntryData = EntryData.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("CREATE TABLE ");
    
stringBuffer!.append(this.tableName);
    
stringBuffer!.append(" (");
    
stringBuffer!.append(entryData!.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(OrderData.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(StoreFrontData.getInstance()!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.SHIPPEDDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(OrderHistoryData.ORDERDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.TRANSDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(OrderHistoryData.CANCELDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(OrderHistoryData.STATUS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentData.METHOD);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(PaymentData.NAME);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(PaymentData.TYPE);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(PaymentData.EXPIRATION);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(PaymentData.NUMBER);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(entryData!.ENCRYPTION);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(BillingAddressData.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BillingAddressData.STREET);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BillingAddressData.CITY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BillingAddressData.STATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BillingAddressData.CODE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BillingAddressData.COUNTRY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.STREET);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.CITY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.STATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.CODE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingAddressData.COUNTRY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(ShippingMethodData.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.SUBTOTAL);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.SHIPPINGCOST);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.TAX);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.TOTAL);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(entryData!.SPECIAL);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(OrderData.CUSTOMERCOMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(OrderData.CUSTOMERCANCELCOMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(OrderData.STORECOMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(OrderData.STORECANCELCOMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append("PRIMARY KEY(");
    
stringBuffer!.append(entryData!.ID);
    
stringBuffer!.append(") )");
    



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


                //@Throws(Exception.constructor)
            
    public update(whereHashMap: HashMap<any, any>, orderHashMap: HashMap<any, any>){

 try { updateWhere(whereHashMap, orderHashMap);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


}

