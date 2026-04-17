
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { Calendar } from "../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { UserData } from "../../../../../../org/allbinary/business/user/UserData.js";

    
import { StreetAddress } from "../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { StreetAddressData } from "../../../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { TableDataFactory } from "../../../../../../org/allbinary/data/tables/TableDataFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class StreetAddressesEntity extends AbSqlBean
                , StreetAddressesEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private userName: string
public constructor ()                        

                            : super(new UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (userName: string)                        

                            : super(new UserDbInitInfo()){

            super();
            var userName = userName


                            //For kotlin this is before the body of the constructor.
                    
this.userName= userName;
    
}


    public remove(index: Integer){
var index = index

        try {
            
    var whereHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
whereHashMap!.put(UserData.USERNAME, userName);
    
whereHashMap!.put(StreetAddressData.ID, index.toString();

                         as String);
    
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


    public add(address: StreetAddress){
var address = address
this.add(address, TableDataFactory.getInstance()!.INTEGER_MAX_VALUE_STRING);
    
}


    add(address: StreetAddress, index: string){
var address = address
var index = index

        try {
            
    var values: Vector = new Vector();
        
        
;
    
values.add(index);
    
values.add(userName);
    
values.add(StringUtil.getInstance()!.EMPTY_STRING);
    
values.add(address.getName());
    
values.add(address.getStreet());
    
values.add(address.getCity());
    
values.add(address.getState());
    
values.add(address.getCode());
    
values.add(address.getCountry());
    

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var time: string = calendar.getTimeInMillis() as Long.
                            toString();
        
        
;
    
values.add(time);
    
super.insert(values);
    
this.setDefault(getLastId());
    

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


    public update(address: StreetAddress){
var address = address

        try {
            
    var addressHashMap: HashMap<any, any> = address.toHashMap()!;
        
        
;
    

    var whereKeyValuePairs: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
whereKeyValuePairs!.put(StreetAddressData.ID, address.getId());
    
whereKeyValuePairs!.put(UserData.USERNAME, this.userName);
    
super.updateWhere(whereKeyValuePairs, addressHashMap);
    
this.setDefault(address.getId());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "update");
    

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


    public getLastId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getLargestIntegerInColumnWhere(StreetAddressData.ID, UserData.USERNAME, userName);

                        ;
    
}


    public get(): Vector{

        try {
            
    var streetAddressVector: Vector = new Vector();
        
        
;
    

    var keyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keyAndValue!.put(UserData.USERNAME, userName);
    

    var addressList: Vector = super.getRows(keyAndValue)!;
        
        
;
    

    var size: number = addressList!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var addressHashMap: HashMap<any, any> = addressList!.get(index);

                         as HashMap<any, any>;
        
        
;
    

    var streetAddress: StreetAddress = new StreetAddress(addressHashMap);
        
        
;
    

                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    streetAddressVector!.add(streetAddress);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddressVector;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public get(index: Integer): StreetAddress{
var index = index

        try {
            
    var keyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keyAndValue!.put(UserData.USERNAME, userName);
    
keyAndValue!.put(StreetAddressData.ID, index.toString());
    

    var addressHashMap: HashMap<any, any> = super.getRow(keyAndValue)!;
        
        
;
    

                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StreetAddress(addressHashMap);
    

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
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getDefault(): StreetAddress{

        try {
            
    var addressHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var updateKeyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
updateKeyAndValue!.put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT);
    
updateKeyAndValue!.put(UserData.USERNAME, userName);
    
addressHashMap= super.getRow(updateKeyAndValue);
    

                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var streetAddress: StreetAddress = new StreetAddress(addressHashMap);
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, "getDefault");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddress;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("No Default Address Found", this, "getDefault");
    

                                    }
                                



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


    public setDefault(value: string){
var value = value

        try {
            
    var updateKeyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var whereKeyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
whereKeyAndValue!.put(UserData.USERNAME, userName);
    

    var streetAddress: StreetAddress = getDefault()!;
        
        
;
    

                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    updateKeyAndValue!.put(StreetAddressData.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING);
    
whereKeyAndValue!.put(StreetAddressData.ID, streetAddress!.getId());
    
super.updateWhere(whereKeyAndValue, updateKeyAndValue);
    

                                    }
                                
whereKeyAndValue!.put(StreetAddressData.ID, value);
    
updateKeyAndValue!.put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT);
    
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
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "setShippingAddress", e);
    

                                    }
                                
}

}


    getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(this.getTableName())!.append(this.sqlStrings!.START)!.append(StreetAddressData.ID)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_AUTO_INCREMENT_NOT_NULL)!.append(UserData.USERNAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.DEFAULT)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StreetAddressData.STREET)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.CITY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.STATE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.CODE)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(StreetAddressData.COUNTRY)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(StreetAddressData.ID)!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());

                        ;
    
}


    public drop(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();

                        ;
    
}


}
                
            

