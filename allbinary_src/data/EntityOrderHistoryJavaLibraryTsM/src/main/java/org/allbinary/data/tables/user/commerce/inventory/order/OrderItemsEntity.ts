
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { ListIterator } from "../../../../../../../../java/util/ListIterator.js";

    
import { Set } from "../../../../../../../../java/util/Set.js";

    

//import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { StoreFrontData } from "../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { HistoryDbInitInfo } from "../../../../../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js";

    
import { UserData } from "../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { ShippingAddressData } from "../../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js";

    
import { BasketInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { BasketReview } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js";

    
import { BasicItemData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js";

    
import { Item } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/Item.js";

    
import { ItemInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { OrderData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js";

    
import { OrderHistoryData } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { OrderInterface } from "../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js";

    
import { ShippingMethodData } from "../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { OrderItemIdGenerator } from "../../../../../../../../org/allbinary/data/generator/OrderItemIdGenerator.js";

    
import { TableDataFactory } from "../../../../../../../../org/allbinary/data/tables/TableDataFactory.js";

    
import { InventoryEntity } from "../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class OrderItemsEntity extends AbSqlBean
                , OrderItemsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "orderitems";
        
        
public constructor ()                        

                            : super(HistoryDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName);
    
}


    public insert(userName: string, order: OrderInterface){
var userName = userName
var order = order

    var vector: Vector = new Vector();
        
        
;
    

        try {
            
    var basket: BasketInterface = order.getBasket()!;
        
        
;
    

    var items: Set = basket.getIds()!;
        
        
;
    

    var ZERO_STRING: string = TableDataFactory.getInstance()!.ZERO_STRING;
        
        
;
    

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;
        
        
;
    

    var itemsArray: any[] = items.toArray()!;
        
        
;
    

    var itemsSize: number = itemsArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < itemsSize; i++)
        {

    var item: string = itemsArray[i]! as String;
        
        
;
    

    var itemInterface: ItemInterface = inventoryEntity!.getItem(item)!;
        
        
;
    
vector= Vector();
    
vector.add(OrderItemIdGenerator().
                            getNext());
    
vector.add(order.getId());
    
vector.add(TableDataFactory.getInstance()!.INTEGER_MAX_VALUE_STRING);
    
vector.add(userName);
    
vector.add(order.getStoreName());
    
vector.add(itemInterface!.getId());
    
vector.add(basket.getNumberOf(item)!.toString());
    
vector.add(itemInterface!.getNewOrUsed());
    
vector.add(itemInterface!.getSummary());
    
vector.add(itemInterface!.getDistributor());
    
vector.add(itemInterface!.getIdUsedByDistributor());
    
vector.add(itemInterface!.getProducedBy());
    
vector.add(itemInterface!.getProductionDate());
    
vector.add(itemInterface!.getStartProductionDate());
    
vector.add(itemInterface!.getDescription());
    
vector.add(itemInterface!.getKeywords());
    
vector.add(itemInterface!.getCategory());
    
vector.add(itemInterface!.getType());
    
vector.add(itemInterface!.getSmallImage());
    
vector.add(itemInterface!.getMediumImage());
    
vector.add(itemInterface!.getLargeImage());
    
vector.add(itemInterface!.getWeight());
    
vector.add(itemInterface!.getPrice()!.toString());
    
vector.add(itemInterface!.getComment());
    
vector.add(itemInterface!.getCustoms());
    
vector.add(itemInterface!.getDownloads());
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(EMPTY_STRING);
    
vector.add(ZERO_STRING);
    
vector.add(ZERO_STRING);
    
vector.add(ZERO_STRING);
    
vector.add(ZERO_STRING);
    
this.insert(vector);
    
}


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put("Command Success Added: " +items.length, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put("Command Failed: " +vector.toString(), this, INSERT, e);
    

                                    }
                                
}

}


    public setStatus(orderId: string, groupId: string, status: string){
var orderId = orderId
var groupId = groupId
var status = status

        try {
            
    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var updateHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
whereHashMap!.put(OrderData.ID, orderId);
    
whereHashMap!.put(ShippingMethodData.GROUP, groupId);
    
updateHashMap!.put(OrderHistoryData.STATUS, status);
    
super.updateWhere(whereHashMap, updateHashMap);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "setStatus", e);
    

                                    }
                                
}

}


    public isEverythingShipped(orderId: string): boolean{
var orderId = orderId

        try {
            
    var itemStatusVector: Vector = super.getColumnWhere(OrderHistoryData.STATUS, OrderData.ID, orderId)!;
        
        
;
    

    var itemStatusIter: ListIterator = itemStatusVector!.listIterator()!;
        
        
;
    

        while(itemStatusIter!.hasNext())
        {

    var status: string = itemStatusIter!.next();

                         as String;
        
        
;
    

                        if(status.compareTo(OrderHistoryData.SHIPPED) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "isEverythingShipped", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getBasketReview(orderId: string): BasketReview{
var orderId = orderId

        try {
            
    var basketReview: BasketReview = new BasketReview();
        
        
;
    

    var keyValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keyValues!.put(OrderData.ID, orderId);
    

    var items: Vector = super.getRows(keyValues)!;
        
        
;
    

    var entryData: EntryData = EntryData.getInstance()!;
        
        
;
    

                        if(items != 
                                    null
                                 && items.length > 0)
                        
                                    {
                                    
    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

    var itemsArray: any[] = items.toArray()!;
        
        
;
    

    var itemsSize: number = itemsArray!.length
                ;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < itemsSize; i++)
        {

    var itemHashMap: HashMap<any, any> = itemsArray[i]! as HashMap<any, any>;
        
        
;
    
itemHashMap!.put(BasicItemData.INBASKETS, EMPTY_STRING);
    
itemHashMap!.put(entryData!.ENABLE, EMPTY_STRING);
    
itemHashMap!.put(entryData!.TIMECREATED, EMPTY_STRING);
    
itemHashMap!.put(entryData!.LASTMODIFIED, EMPTY_STRING);
    
itemHashMap!.put(BasicItemData.GROUPS, EMPTY_STRING);
    
itemHashMap!.put(BasicItemData.OPTIONS, EMPTY_STRING);
    
itemHashMap!.put(BasicItemData.PERMISSIONS, EMPTY_STRING);
    
itemHashMap!.put(BasicItemData.SPECIALS, EMPTY_STRING);
    

    var item: Item = new Item(itemHashMap);
        
        
;
    
basketReview!.addItem(item);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basketReview;
    

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
                                    logUtil!.put(this.commonStrings!.FAILURE, this, "getBasketReview", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("CREATE TABLE ");
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(" (");
    
stringBuffer!.append(entryData!.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(OrderData.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(ShippingMethodData.GROUP);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(StoreFrontData.getInstance()!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.NUMBER);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.NEWORUSED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.SUMMARY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.DISTRIBUTOR);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.IDUSEDBYDISTRIBUTOR);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.PRODUCEDBY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.PRODUCTIONDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.STARTPRODUCTIONDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.DESCRIPTION);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(BasicItemData.KEYWORDS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.CATEGORY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.TYPE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.SMALLIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.MEDIUMIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.LARGEIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.WEIGHT);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(BasicItemData.PRICE);
    
stringBuffer!.append(" VARCHAR(20) NOT NULL,");
    
stringBuffer!.append(BasicItemData.COMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(BasicItemData.CUSTOMS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(BasicItemData.DOWNLOADS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(ShippingMethodData.COST);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.TAX);
    
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
    
stringBuffer!.append(entryData!.SPECIAL);
    
stringBuffer!.append(" VARCHAR(255) ,");
    
stringBuffer!.append(OrderHistoryData.STATUS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.CANCELINFO);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.CANCELTYPE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.SHIPPEDDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(OrderHistoryData.ORDERDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(OrderHistoryData.TRANSDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append(OrderHistoryData.CANCELDATE);
    
stringBuffer!.append(" BIGINT(19) UNSIGNED ,");
    
stringBuffer!.append("PRIMARY KEY(");
    
stringBuffer!.append(entryData!.ID);
    
stringBuffer!.append(") )");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());

                        ;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();

                        ;
    
}


}
                
            

