
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
        



import { Calendar } from "../../../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Random } from "../../../../../../../../java/util/Random.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontData } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontFactory } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js";

    
import { StoreFrontInterface } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { HistoryDbInitInfo } from "../../../../../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js";

    
import { UserData } from "../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { BillingAddressData } from "../../../../../../../../org/allbinary/business/user/address/BillingAddressData.js";

    
import { ShippingAddressData } from "../../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js";

    
import { StreetAddress } from "../../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { Basket } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/Basket.js";

    
import { BasketInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { Order } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/Order.js";

    
import { OrderData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistory } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistory.js";

    
import { OrderHistoryData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { Money } from "../../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { PaymentData } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { PaymentInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js";

    
import { TaxFactory } from "../../../../../../../../org/allbinary/business/user/commerce/money/tax/TaxFactory.js";

    
import { ShippingMethodData } from "../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { ShippingMethods } from "../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethods.js";

    
import { ShippingInterface } from "../../../../../../../../org/allbinary/business/user/commerce/shipping/modules/ShippingInterface.js";

    
import { OrderHistoryIdGenerator } from "../../../../../../../../org/allbinary/data/generator/OrderHistoryIdGenerator.js";

    
import { TableDataFactory } from "../../../../../../../../org/allbinary/data/tables/TableDataFactory.js";

    
import { BillingAddressesEntity } from "../../../../../../../../org/allbinary/data/tables/user/address/billing/BillingAddressesEntity.js";

    
import { ShippingAddressesEntity } from "../../../../../../../../org/allbinary/data/tables/user/address/shipping/ShippingAddressesEntity.js";

    
import { PaymentEntity } from "../../../../../../../../org/allbinary/data/tables/user/commerce/money/payment/PaymentEntity.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { SuperCrypt } from "../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class OrderHistoryEntity extends AbSqlBean
                , OrderHistoryEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "orderhistory";
        
        
public constructor ()                        

                            : super(HistoryDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public insert(userName: string, order: Order){
var userName = userName
var order = order

    var vector: Vector = new Vector();
        
        


        try {
            
    var paymentInterface: PaymentInterface = PaymentEntity().
                            getDefault(userName)!;
        
        


    var billingAddress: StreetAddress = BillingAddressesEntity(userName).
                            getDefault()!;
        
        


    var shippingAddress: StreetAddress = ShippingAddressesEntity(userName).
                            getDefault()!;
        
        


    var abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        


    var storeFrontInterface: StoreFrontInterface = StoreFrontFactory.getInstance(order.getStoreName())!;
        
        


    var shippingInterface: ShippingInterface = ShippingMethods(abeClientInformation, storeFrontInterface).
                            getShippingInterface(order.getShippingMethod())!;
        
        


    var shippingCost: Money = shippingInterface!.getCost(order)!;
        
        


    var basketInterface: BasketInterface = order.getBasket()!;
        
        


    var subTotal: Money = basketInterface!.getSubTotal()!;
        
        


    var taxRate: Float = TaxFactory.getInstance()!.getInstance(abeClientInformation, storeFrontInterface)!.getTaxRate(shippingAddress, storeFrontInterface)!;
        
        


    var tax: Money = new Money();
        
        


    var total: Money = new Money();
        
        

add(shippingCost!.toString())
add(subTotal!.toString())
add(total.toString())
multiply(taxRate)
add(tax.toString())

    var empty: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

add(OrderHistoryIdGenerator().
                            getNext())

    var ZERO: string = TableDataFactory.getInstance()!.ZERO_STRING;
        
        

add(order.getId())
add(userName)
add(order.getStoreName())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(ZERO)
add(time)
add(ZERO)
add(ZERO)
add(OrderHistoryData.PREPROCESSING)
add(order.getPaymentMethod())

    
                        if(paymentInterface != 
                                    null
                                )
                        
                                    {
                                    add(paymentInterface!.getName())
add(paymentInterface!.getType())
add(paymentInterface!.getExpiration())

    var random: number = Random().
                            nextInt(SuperCrypt.KEYMAX)!;
        
        

add(SuperCrypt(random).
                            encrypt(paymentInterface!.getNumber()))
add(Integer(random).
                            toString())

                                    }
                                
                        else {
                            add(empty)
add(empty)
add(empty)
add(empty)
add(ZERO)

                        }
                            

    
                        if(billingAddress != 
                                    null
                                )
                        
                                    {
                                    add(billingAddress!.getName())
add(billingAddress!.getStreet())
add(billingAddress!.getCity())
add(billingAddress!.getState())
add(billingAddress!.getCode())
add(billingAddress!.getCountry())

                                    }
                                
                        else {
                            add(empty)
add(empty)
add(empty)
add(empty)
add(empty)
add(empty)

                        }
                            

    
                        if(shippingAddress != 
                                    null
                                )
                        
                                    {
                                    add(shippingAddress!.getName())
add(shippingAddress!.getStreet())
add(shippingAddress!.getCity())
add(shippingAddress!.getState())
add(shippingAddress!.getCode())
add(shippingAddress!.getCountry())

                                    }
                                
                        else {
                            add(empty)
add(empty)
add(empty)
add(empty)
add(empty)
add(empty)

                        }
                            
add(order.getShippingMethod())
add(subTotal!.toString())
add(shippingCost!.toString())
add(tax.toString())
add(total.toString())
add(order.getSpecial())
add(order.getUserComments())
add(order.getUserCancelComments())
add(order.getStoreComments())
add(order.getStoreCancelComments())
this.insert(vector)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, INSERT)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put("Command Failed: " +vector, this, INSERT, e)

                                    }
                                
}

}


    public insert(values: Vector){
var values = values

        try {
            insert(values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, INSERT)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, INSERT, e)

                                    }
                                
}

}


    public setStatus(orderId: string, status: string){
var orderId = orderId
var status = status

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        


    var updateHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(OrderHistoryData.STATUS, status)

    
                        if(status.compareTo(OrderHistoryData.CANCELLED) == 0)
                        
                                    {
                                    put(OrderHistoryData.CANCELDATE, time)

                                    }
                                
                             else 
    
                        if(status.compareTo(OrderHistoryData.SHIPPED) == 0)
                        
                                    {
                                    put(OrderHistoryData.SHIPPEDDATE, time)

                                    }
                                
updateWhere(OrderData.ID, orderId, updateHashMap)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "setStatus", e)

                                    }
                                
}

}


    public setPaymentMethod(orderId: string, paymentMethod: string){
var orderId = orderId
var paymentMethod = paymentMethod

        try {
            
    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        


    var updateHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(PaymentData.METHOD, paymentMethod)
put(OrderHistoryData.TRANSDATE, time)
updateWhere(OrderData.ID, orderId, updateHashMap)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "setPaymentMethod", e)

                                    }
                                
}

}


                @Throws(Exception::class)
            
    public getStoreOrders(storeFrontInterface: StoreFrontInterface): Vector{
var storeFrontInterface = storeFrontInterface

    var orderReviewVector: Vector = new Vector();
        
        


    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, storeFrontInterface!.getName())

    var orderHashMapVector: Vector = super.getRows(whereHashMap)!;
        
        


    var size: number = orderHashMapVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var orderReviewHashMap: HashMap<Any, Any> = orderHashMapVector!.get(i as Object) as HashMap<Any, Any>;
        
        


    var orderReview: OrderHistory = new OrderHistory(Basket(), orderReviewHashMap);
        
        

add(orderReview)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                @Throws(Exception::class)
            
    public getOrders(userName: string): Vector{
var userName = userName

    var orderReviewVector: Vector = new Vector();
        
        


    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)

    var orderHashMapVector: Vector = super.getRows(whereHashMap)!;
        
        


    var size: number = orderHashMapVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderReviewHashMap: HashMap<Any, Any> = orderHashMapVector!.get(index as Object) as HashMap<Any, Any>;
        
        


    var orderReview: OrderHistory = new OrderHistory(Basket(), orderReviewHashMap);
        
        

add(orderReview)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                @Throws(Exception::class)
            
    public getOrders(status: string, fromDate: string, toDate: string): Vector{
var status = status
var fromDate = fromDate
var toDate = toDate

    var orderReviewVector: Vector = new Vector();
        
        


    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(OrderHistoryData.STATUS, status)

    var orderHashMapVector: Vector = super.getRowsWhereBetween(whereHashMap, OrderHistoryData.ORDERDATE, fromDate, toDate)!;
        
        


    var size: number = orderHashMapVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderReviewHashMap: HashMap<Any, Any> = orderHashMapVector!.get(index as Object) as HashMap<Any, Any>;
        
        


    var orderReview: OrderHistory = new OrderHistory(Basket(), orderReviewHashMap);
        
        

add(orderReview)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                @Throws(Exception::class)
            
    public getOrders(fromDate: string, toDate: string): Vector{
var fromDate = fromDate
var toDate = toDate

    var orderReviewVector: Vector = new Vector();
        
        


    var orderHashMapVector: Vector = super.getRowsWhereBetween(OrderHistoryData.ORDERDATE, fromDate, toDate)!;
        
        


    var size: number = orderHashMapVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var orderReviewHashMap: HashMap<Any, Any> = orderHashMapVector!.get(index as Object) as HashMap<Any, Any>;
        
        


    var orderReview: OrderHistory = new OrderHistory(Basket(), orderReviewHashMap);
        
        

add(orderReview)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderReviewVector;
    
}


                @Throws(Exception::class)
            
    public getOrder(id: string): OrderHistory{
var id = id

    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(OrderData.ID, id)

    var orderReviewHashMap: HashMap<Any, Any> = super.getRow(whereHashMap)!;
        
        


    
                        if(orderReviewHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var orderHistory: OrderHistory = new OrderHistory(Basket(), orderReviewHashMap);
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderHistory;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("CREATE TABLE ")
append(tableName)
append(" (")
append(entryData!.ID)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(OrderData.ID)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(UserData.USERNAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(StoreFrontData.getInstance()!.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(OrderHistoryData.SHIPPEDDATE)
append(" BIGINT(19) UNSIGNED ,")
append(OrderHistoryData.ORDERDATE)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(OrderHistoryData.TRANSDATE)
append(" BIGINT(19) UNSIGNED ,")
append(OrderHistoryData.CANCELDATE)
append(" BIGINT(19) UNSIGNED ,")
append(OrderHistoryData.STATUS)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentData.METHOD)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(PaymentData.NAME)
append(" VARCHAR(255) ,")
append(PaymentData.TYPE)
append(" VARCHAR(255) ,")
append(PaymentData.EXPIRATION)
append(" VARCHAR(255) ,")
append(PaymentData.NUMBER)
append(" VARCHAR(255) ,")
append(entryData!.ENCRYPTION)
append(" BIGINT(19) UNSIGNED ,")
append(BillingAddressData.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(BillingAddressData.STREET)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(BillingAddressData.CITY)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(BillingAddressData.STATE)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(BillingAddressData.CODE)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(BillingAddressData.COUNTRY)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.STREET)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.CITY)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.STATE)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.CODE)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingAddressData.COUNTRY)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(ShippingMethodData.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(OrderHistoryData.SUBTOTAL)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(OrderHistoryData.SHIPPINGCOST)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(OrderHistoryData.TAX)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(OrderHistoryData.TOTAL)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(entryData!.SPECIAL)
append(" VARCHAR(255) ,")
append(OrderData.CUSTOMERCOMMENT)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(OrderData.CUSTOMERCANCELCOMMENT)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(OrderData.STORECOMMENT)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(OrderData.STORECANCELCOMMENT)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append("PRIMARY KEY(")
append(entryData!.ID)
append(") )")



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


                @Throws(Exception::class)
            
    public update(whereHashMap: HashMap<Any, Any>, orderHashMap: HashMap<Any, Any>){
var whereHashMap = whereHashMap
var orderHashMap = orderHashMap

        try {
            updateWhere(whereHashMap, orderHashMap)
} catch(e: Exception)
            {



                            throw e
}

}


}
                
            

