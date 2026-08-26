
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
        
//not game specific package import { Calendar } from '../../../../../../../../java/util/Calendar.js';
      const Calendar = globalThis.java.util.Calendar;

      
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Random } from '../../../../../../../../java/util/Random.js';
      const Random = globalThis.java.util.Random;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontData } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { StoreFrontFactory } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
      const StoreFrontFactory = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontFactory;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { HistoryDbInitInfo } from '../../../../../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js';
      const HistoryDbInitInfo = globalThis.org.allbinary.business.init.db.HistoryDbInitInfo;

      
//not game specific package import { UserData } from '../../../../../../../../org/allbinary/business/user/UserData.js';
      const UserData = globalThis.org.allbinary.business.user.UserData;

      
//not game specific package import { BillingAddressData } from '../../../../../../../../org/allbinary/business/user/address/BillingAddressData.js';
      const BillingAddressData = globalThis.org.allbinary.business.user.address.BillingAddressData;

      
//not game specific package import { ShippingAddressData } from '../../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js';
      const ShippingAddressData = globalThis.org.allbinary.business.user.address.ShippingAddressData;

      
//not game specific package import { StreetAddress } from '../../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
      const StreetAddress = globalThis.org.allbinary.business.user.address.StreetAddress;

      
//not game specific package import { Basket } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js';
      const Basket = globalThis.org.allbinary.business.user.commerce.inventory.basket.Basket;

      
//not game specific package import { BasketInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
      const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
//not game specific package import { Order } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js';
      const Order = globalThis.org.allbinary.business.user.commerce.inventory.order.Order;

      
//not game specific package import { OrderData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
      const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
//not game specific package import { OrderHistory } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js';
      const OrderHistory = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistory;

      
//not game specific package import { OrderHistoryData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
      const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
//not game specific package import { Money } from '../../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
//not game specific package import { PaymentData } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      const PaymentData = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentData;

      
//not game specific package import { PaymentInterface } from '../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js';
      const PaymentInterface = globalThis.org.allbinary.business.user.commerce.money.payment.PaymentInterface;

      
//not game specific package import { TaxFactory } from '../../../../../../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js';
      const TaxFactory = globalThis.org.allbinary.business.user.commerce.money.tax.TaxFactory;

      
//not game specific package import { ShippingMethodData } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
//not game specific package import { ShippingMethods } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js';
      const ShippingMethods = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethods;

      
//not game specific package import { ShippingInterface } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js';
      const ShippingInterface = globalThis.org.allbinary.business.user.commerce.shipping.modules.ShippingInterface;

      
//not game specific package import { OrderHistoryIdGenerator } from '../../../../../../../../org/allbinary/data/generator/OrderHistoryIdGenerator.js';
      const OrderHistoryIdGenerator = globalThis.org.allbinary.data.generator.OrderHistoryIdGenerator;

      
//not game specific package import { TableDataFactory } from '../../../../../../../../org/allbinary/data/tables/TableDataFactory.js';
      const TableDataFactory = globalThis.org.allbinary.data.tables.TableDataFactory;

      
//not game specific package import { BillingAddressesEntity } from '../../../../../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntity.js';
      const BillingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.billing.BillingAddressesEntity;

      
//not game specific package import { ShippingAddressesEntity } from '../../../../../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js';
      const ShippingAddressesEntity = globalThis.org.allbinary.data.tables.user.address.shipping.ShippingAddressesEntity;

      
//not game specific package import { PaymentEntity } from '../../../../../../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntity.js';
      const PaymentEntity = globalThis.org.allbinary.data.tables.user.commerce.money.payment.PaymentEntity;

      
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

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { ServiceClientInformationInterfaceFactory } from '../../../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderHistoryEntityInterface } from './OrderHistoryEntityInterface.js';

export class OrderHistoryEntity extends AbSqlBean implements OrderHistoryEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "orderhistory";

public constructor (){
            super(new HistoryDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(userName: string, order: Order){

    var vector: Vector = new Vector();;
    

        try {
            
    var paymentInterface: PaymentInterface = new PaymentEntity().getDefault(userName)!;;
    

    var billingAddress: StreetAddress = new BillingAddressesEntity(userName).getDefault()!;;
    

    var shippingAddress: StreetAddress = new ShippingAddressesEntity(userName).getDefault()!;;
    

    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;;
    

    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(order.getStoreName())!;;
    

    var shippingInterface: ShippingInterface = new ShippingMethods(abeClientInformation, storeFrontInterface).getShippingInterface(order.getShippingMethod())!;;
    

    var shippingCost: Money = shippingInterface!.getCost(order)!;;
    

    var basketInterface: BasketInterface = order.getBasket()!;;
    

    var subTotal: Money = basketInterface!.getSubTotal()!;;
    

    var taxRate: number = TaxFactory.getInstance()!.getInstance(abeClientInformation, storeFrontInterface)!.getTaxRate(shippingAddress, storeFrontInterface)!;;
    

    var tax: Money = new Money();;
    

    var total: Money = new Money();;
    
total.add(shippingCost!.toString());
    
total.add(subTotal!.toString());
    
tax.add(total.toString());
    
tax.multiply(taxRate);
    
total.add(tax.toString());
    

    var empty: string = StringUtil.getInstance()!.EMPTY_STRING;;
    
vector.add(new OrderHistoryIdGenerator().getNext());
    

    var ZERO: string = TableDataFactory.getInstance()!.ZERO_STRING;;
    
vector.add(order.getId());
    
vector.add(userName);
    
vector.add(order.getStoreName());
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
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
    

    var random: number = new Random().nextInt(SuperCrypt.KEYMAX)!;;
    
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
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put("Command Failed: " +vector, this, INSERT, e);
    

                                    }
                                
}

}


    public insert(values: Vector){

        try {
            super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                
}

}


    public setStatus(orderId: string, status: string){

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    var updateHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
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
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setStatus", e);
    

                                    }
                                
}

}


    public setPaymentMethod(orderId: string, paymentMethod: string){

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    

    var updateHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
updateHashMap!.put(PaymentData.METHOD, paymentMethod);
    
updateHashMap!.put(OrderHistoryData.TRANSDATE, time);
    
super.updateWhere(OrderData.ID, orderId, updateHashMap);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setPaymentMethod", e);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public getStoreOrders(storeFrontInterface: StoreFrontInterface): Vector{

    var orderReviewVector: Vector = new Vector();;
    

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
whereHashMap!.put(StoreFrontData.getInstance()!.NAME, storeFrontInterface!.getName());
    

    var orderHashMapVector: Vector = super.getRows(whereHashMap)!;;
    

    var size: number = orderHashMapVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(i) as HashMap<any, any>;;
    

    var orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrders(userName: string): Vector{

    var orderReviewVector: Vector = new Vector();;
    

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
whereHashMap!.put(UserData.USERNAME, userName);
    

    var orderHashMapVector: Vector = super.getRows(whereHashMap)!;;
    

    var size: number = orderHashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    var orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrders(status: string, fromDate: string, toDate: string): Vector{

    var orderReviewVector: Vector = new Vector();;
    

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
whereHashMap!.put(OrderHistoryData.STATUS, status);
    

    var orderHashMapVector: Vector = super.getRowsWhereBetween(whereHashMap, OrderHistoryData.ORDERDATE, fromDate, toDate)!;;
    

    var size: number = orderHashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    var orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrders(fromDate: string, toDate: string): Vector{

    var orderReviewVector: Vector = new Vector();;
    

    var orderHashMapVector: Vector = super.getRowsWhereBetween(OrderHistoryData.ORDERDATE, fromDate, toDate)!;;
    

    var size: number = orderHashMapVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var orderReviewHashMap: HashMap<any, any> = orderHashMapVector!.get(index) as HashMap<any, any>;;
    

    var orderReview: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    
orderReviewVector!.add(orderReview);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                //@Throws(Exception.constructor)
            
    public getOrder(id: string): OrderHistory{

    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
whereHashMap!.put(OrderData.ID, id);
    

    var orderReviewHashMap: HashMap<any, any> = super.getRow(whereHashMap)!;;
    

                        if(orderReviewHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var orderHistory: OrderHistory = new OrderHistory(new Basket(), orderReviewHashMap);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderHistory;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
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

        try {
            updateWhere(whereHashMap, orderHashMap);
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


}
                
            

