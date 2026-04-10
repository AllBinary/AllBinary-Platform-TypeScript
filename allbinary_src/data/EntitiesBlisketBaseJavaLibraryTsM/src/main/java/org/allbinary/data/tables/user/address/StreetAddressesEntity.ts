
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

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (userName: string)                        

                            : super(UserDbInitInfo()){

            super();
            var userName = userName


                            //For kotlin this is before the body of the constructor.
                    
this.userName= userName
}


    public remove(index: Integer){
var index = index

        try {
            
    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)
put(StreetAddressData.ID, index.toString() as String)
deleteWhere(whereHashMap)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "remove")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "remove", e)

                                    }
                                
}

}


    public add(address: StreetAddress){
var address = address
this.add(address, TableDataFactory.getInstance()!.INTEGER_MAX_VALUE_STRING)
}


    add(address: StreetAddress, index: string){
var address = address
var index = index

        try {
            
    var values: Vector = new Vector();
        
        

add(index)
add(userName)
add(StringUtil.getInstance()!.EMPTY_STRING)
add(address.getName())
add(address.getStreet())
add(address.getCity())
add(address.getState())
add(address.getCode())
add(address.getCountry())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(time)
insert(values)
this.setDefault(getLastId())

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "add")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "add", e)

                                    }
                                
}

}


    public update(address: StreetAddress){
var address = address

        try {
            
    var addressHashMap: HashMap<Any, Any> = address.toHashMap()!;
        
        


    var whereKeyValuePairs: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StreetAddressData.ID, address.getId())
put(UserData.USERNAME, this.userName)
updateWhere(whereKeyValuePairs, addressHashMap)
this.setDefault(address.getId())

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "update")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "add", e)

                                    }
                                
}

}


    public getLastId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getLargestIntegerInColumnWhere(StreetAddressData.ID, UserData.USERNAME, userName);
    
}


    public get(): Vector{

        try {
            
    var streetAddressVector: Vector = new Vector();
        
        


    var keyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)

    var addressList: Vector = super.getRows(keyAndValue)!;
        
        


    var size: number = addressList!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var addressHashMap: HashMap<Any, Any> = addressList!.get(index) as HashMap<Any, Any>;
        
        


    var streetAddress: StreetAddress = new StreetAddress(addressHashMap);
        
        


    
                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    add(streetAddress)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddressVector;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public get(index: Integer): StreetAddress{
var index = index

        try {
            
    var keyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)
put(StreetAddressData.ID, index.toString())

    var addressHashMap: HashMap<Any, Any> = super.getRow(keyAndValue)!;
        
        


    
                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StreetAddress(addressHashMap);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, commonStrings!.GET, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getDefault(): StreetAddress{

        try {
            
    var addressHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var updateKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT)
put(UserData.USERNAME, userName)
addressHashMap= super.getRow(updateKeyAndValue)

    
                        if(addressHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var streetAddress: StreetAddress = new StreetAddress(addressHashMap);
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "getDefault")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return streetAddress;
    

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put("No Default Address Found", this, "getDefault")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "getDefault", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public setDefault(value: string){
var value = value

        try {
            
    var updateKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var whereKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)

    var streetAddress: StreetAddress = getDefault()!;
        
        


    
                        if(streetAddress != 
                                    null
                                )
                        
                                    {
                                    put(StreetAddressData.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING)
put(StreetAddressData.ID, streetAddress!.getId())
updateWhere(whereKeyAndValue, updateKeyAndValue)

                                    }
                                
put(StreetAddressData.ID, value)
put(StreetAddressData.DEFAULT, StreetAddressData.DEFAULT)
updateWhere(whereKeyAndValue, updateKeyAndValue)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "setDefault")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "setShippingAddress", e)

                                    }
                                
}

}


    getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public createTableStatement(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public drop(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

