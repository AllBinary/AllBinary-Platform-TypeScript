
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

    
import { EntryData } from "../../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { UserData } from "../../../../../../../../org/allbinary/business/user/UserData.js";

    
import { Payment } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js";

    
import { PaymentData } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { PaymentInterface } from "../../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentInterface.js";

    
import { PaymentIdGenerator } from "../../../../../../../../org/allbinary/data/generator/PaymentIdGenerator.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { SuperCrypt } from "../../../../../../../../org/allbinary/logic/control/crypt/SuperCrypt.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class PaymentEntity extends AbSqlBean
                , PaymentEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "payment";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public getLastId(userName: string): string{
var userName = userName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getLargestIntegerInColumnWhere(PaymentData.ID, UserData.USERNAME, userName);
    
}


    public setDefault(userName: string, index: Integer){
var userName = userName
var index = index

        try {
            
    var updateKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var whereKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)

    var paymentInterface: PaymentInterface = getDefault(userName)!;
        
        


    
                        if(paymentInterface != 
                                    null
                                )
                        
                                    {
                                    put(EntryData.getInstance()!.DEFAULT, StringUtil.getInstance()!.EMPTY_STRING)
put(PaymentData.ID, paymentInterface!.getId())
updateWhere(whereKeyAndValue, updateKeyAndValue)

                                    }
                                
put(EntryData.getInstance()!.DEFAULT, EntryData.getInstance()!.DEFAULT)
put(PaymentData.ID, index.toString())
updateWhere(whereKeyAndValue, updateKeyAndValue)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "setDefault")

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, "setDefault", e)

                                    }
                                
}

}


    public get(userName: string): Vector{
var userName = userName

        try {
            
    var paymentVector: Vector = new Vector();
        
        


    var keyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)

    var paymentList: Vector = super.getRows(keyAndValue)!;
        
        


    var size: number = paymentList!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var paymentHashMap: HashMap<Any, Any> = paymentList!.get(index) as HashMap<Any, Any>;
        
        


    var payment: Payment = new Payment(paymentHashMap);
        
        


    
                        if(payment != 
                                    null
                                )
                        
                                    {
                                    add(payment)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paymentVector;
    
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


    public getDefault(userName: string): PaymentInterface{
var userName = userName

        try {
            
    var paymentHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    var updateKeyAndValue: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(EntryData.getInstance()!.DEFAULT, EntryData.getInstance()!.DEFAULT)
put(UserData.USERNAME, userName)
paymentHashMap= super.getRow(updateKeyAndValue)

    
                        if(paymentHashMap != 
                                    null
                                )
                        
                                    {
                                    
    var payment: Payment = new Payment(paymentHashMap);
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, "getDefault")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return payment as PaymentInterface;
    

                                    }
                                
                        else {
                            


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


    public remove(userName: string, index: Integer){
var userName = userName
var index = index

        try {
            
    var whereHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(UserData.USERNAME, userName)
put(PaymentData.ID, index.toString() as String)
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


    public add(userName: string, paymentInterface: PaymentInterface){
var userName = userName
var paymentInterface = paymentInterface

        try {
            
    var vector: Vector = new Vector();
        
        

add(PaymentIdGenerator().
                            getNext())
add(userName)
add(StringUtil.getInstance()!.EMPTY_STRING)
add(paymentInterface!.getName())
add(paymentInterface!.getType())
add(paymentInterface!.getExpiration())

    var random: number = Random().
                            nextInt(SuperCrypt.KEYMAX)!;
        
        

add(SuperCrypt(random).
                            encrypt(paymentInterface!.getNumber()))
add(Integer(random).
                            toString())

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(time)
insert(vector)

    
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


    public createTableStatement(): string{

    var entryData: EntryData = EntryData.getInstance()!;
        
        


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
                
            

