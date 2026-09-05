
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { ListIterator } from '../../../../../../../../java/util/ListIterator.js';
//not GWT import const ListIterator = globalThis.java.util.ListIterator;

      
import { Set } from '../../../../../../../../java/util/Set.js';
//not GWT import const Set = globalThis.java.util.Set;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontData } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { HistoryDbInitInfo } from '../../../../../../../../org/allbinary/business/init/db/HistoryDbInitInfo.js';
//not GWT import const HistoryDbInitInfo = globalThis.org.allbinary.business.init.db.HistoryDbInitInfo;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { UserData } from '../../../../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData = globalThis.org.allbinary.business.user.UserData;

      
import { ShippingAddressData } from '../../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js';
//not GWT import const ShippingAddressData = globalThis.org.allbinary.business.user.address.ShippingAddressData;

      
import { BasketInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
//not GWT import const BasketInterface = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketInterface;

      
import { BasketReview } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketReview.js';
//not GWT import const BasketReview = globalThis.org.allbinary.business.user.commerce.inventory.basket.BasketReview;

      
import { BasicItemData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/BasicItemData.js';
//not GWT import const BasicItemData = globalThis.org.allbinary.business.user.commerce.inventory.item.BasicItemData;

      
import { Item } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/Item.js';
//not GWT import const Item = globalThis.org.allbinary.business.user.commerce.inventory.item.Item;

      
import { ItemInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface = globalThis.org.allbinary.business.user.commerce.inventory.item.ItemInterface;

      
import { OrderData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderData.js';
//not GWT import const OrderData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderData;

      
import { OrderHistoryData } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
//not GWT import const OrderHistoryData = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderHistoryData;

      
import { OrderInterface } from '../../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderInterface.js';
//not GWT import const OrderInterface = globalThis.org.allbinary.business.user.commerce.inventory.order.OrderInterface;

      
import { ShippingMethodData } from '../../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
//not GWT import const ShippingMethodData = globalThis.org.allbinary.business.user.commerce.shipping.ShippingMethodData;

      
import { OrderItemIdGenerator } from '../../../../../../../../org/allbinary/data/generator/OrderItemIdGenerator.js';
//not GWT import const OrderItemIdGenerator = globalThis.org.allbinary.data.generator.OrderItemIdGenerator;

      
import { TableDataFactory } from '../../../../../../../../org/allbinary/data/tables/TableDataFactory.js';
//not GWT import const TableDataFactory = globalThis.org.allbinary.data.tables.TableDataFactory;

      
import { InventoryEntity } from '../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntity;

      
import { InventoryEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory = globalThis.org.allbinary.data.tables.user.commerce.inventory.item.InventoryEntityFactory;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OrderItemsEntityInterface } from './OrderItemsEntityInterface.js';
//not GWT import - same folder const OrderItemsEntityInterface = globalThis.org.allbinary.data.tables.user.commerce.inventory.order.OrderItemsEntityInterface;

                
export class OrderItemsEntity extends AbSqlBean implements OrderItemsEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicItemData: BasicItemData = BasicItemData.getInstance()!;

    readonly tableName: string = "orderitems";

public constructor (){
            super(new HistoryDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(userName: string, order: OrderInterface){

    var vector: BasicArrayList = new BasicArrayListD();;
    

        try {
            
    var basket: BasketInterface = order.getBasket()!;;
    

    var items: Set = basket.getIds()!;;
    

    var ZERO_STRING: string = TableDataFactory.getInstance()!.ZERO_STRING;;
    

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    var inventoryEntity: InventoryEntity = InventoryEntityFactory.getInstance()!.getInventoryEntityInstance()!;;
    

    var itemsArray: any[] = items.toArray()!;;
    

    var itemsSize: number = itemsArray!.length
                ;;
    




                        for (
    var i: number = 0;i < itemsSize; i++)
        {

    var item: string = itemsArray[i]! as string;;
    

    var itemInterface: ItemInterface = inventoryEntity!.getItem(item)!;;
    
vector= new BasicArrayListD();
    
vector.add(new OrderItemIdGenerator().getNext());
    
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
                                    this.logUtil!.putF("Command Success Added: " +items.size(), this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put("Command Failed: " +vector.toString(), this, INSERT, e);
    

                                    }
                                
}

}


    public setStatus(orderId: string, groupId: string, status: string){

        try {
            
    var whereHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    var updateHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
whereHashMap!.put(OrderData.ID, orderId);
    
whereHashMap!.put(ShippingMethodData.GROUP, groupId);
    
updateHashMap!.put(OrderHistoryData.STATUS, status);
    
super.updateWhere(whereHashMap, updateHashMap);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setStatus", e);
    

                                    }
                                
}

}


    public isEverythingShipped(orderId: string): boolean{

        try {
            
    var itemStatusVector: BasicArrayList = super.getColumnWhere(OrderHistoryData.STATUS, OrderData.ID, orderId)!;;
    

    var size: number = itemStatusVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var status: string = itemStatusVector!.get(index) as string;;
    

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
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "isEverythingShipped", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getBasketReview(orderId: string): BasketReview{

        try {
            
    var basketReview: BasketReview = new BasketReview();;
    

    var keyValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keyValues!.put(OrderData.ID, orderId);
    

    var items: BasicArrayList = super.getRows(keyValues)!;;
    

    var entryData: EntryData = EntryData.getInstance()!;;
    

                        if(items != 
                                    null
                                 && items.size() > 0)
                        
                                    {
                                    
    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    var itemsArray: any[] = items.toArray()!;;
    

    var itemsSize: number = itemsArray!.length
                ;;
    




                        for (
    var i: number = 0;i < itemsSize; i++)
        {

    var itemHashMap: HashMap<any, any> = itemsArray[i]! as HashMap<any, any>;;
    
itemHashMap!.put(basicItemData!.INBASKETS, EMPTY_STRING);
    
itemHashMap!.put(entryData!.ENABLE, EMPTY_STRING);
    
itemHashMap!.put(entryData!.TIMECREATED, EMPTY_STRING);
    
itemHashMap!.put(entryData!.LASTMODIFIED, EMPTY_STRING);
    
itemHashMap!.put(basicItemData!.GROUPS, EMPTY_STRING);
    
itemHashMap!.put(basicItemData!.OPTIONS, EMPTY_STRING);
    
itemHashMap!.put(basicItemData!.PERMISSIONS, EMPTY_STRING);
    
itemHashMap!.put(basicItemData!.SPECIALS, EMPTY_STRING);
    

    var item: Item = new Item(itemHashMap);;
    
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
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "getBasketReview", e);
    

                                    }
                                



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
    
stringBuffer!.append(ShippingMethodData.GROUP);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(UserData.USERNAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(StoreFrontData.getInstance()!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.ID);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.NUMBER);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.NEWORUSED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.SUMMARY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.DISTRIBUTOR);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.IDUSEDBYDISTRIBUTOR);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.PRODUCEDBY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.PRODUCTIONDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.STARTPRODUCTIONDATE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.DESCRIPTION);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(basicItemData!.KEYWORDS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.CATEGORY);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.TYPE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.SMALLIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.MEDIUMIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.LARGEIMAGE);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.WEIGHT);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(basicItemData!.PRICE);
    
stringBuffer!.append(" VARCHAR(20) NOT NULL,");
    
stringBuffer!.append(basicItemData!.COMMENT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(basicItemData!.CUSTOMS);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(basicItemData!.DOWNLOADS);
    
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



