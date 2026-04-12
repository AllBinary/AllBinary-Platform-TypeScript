
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
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
        
import { Calendar } from "../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    

export class IdGeneratorEntity extends AbSqlBean
                , IdGeneratorEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly tableName: string = "idgenerator";
        
        

    private readonly tableData: string

    readonly NAME: string = "NAME";
        
        

    readonly VALUE: string = "VALUE";
        
        
public constructor ()                        

                            : super(new UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.tableData= new StringBuilder().
                            append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(VALUE)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(NAME)!.append(this.sqlStrings!.END)!.toString();
    
super.setTableName(tableName);
    
}


                //@Throws(Error::class)
            
    public get(name: string): Long{
var name = name

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keysAndValues!.put(NAME, name);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;
        
        
;
    

                        if(
                                    (get as String).compareTo(name) != 0)
                        
                                    {
                                    


                            throw new Error("results do not match")

                                    }
                                

    var value: string = hashMap!.get(VALUE as Object);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Long.parseLong(value);

                        ;
    
}


    public insert(values: Vector){
var values = values

        try {
            super.insert(values);
    
this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    
}

}


    public delete(value: string){
var value = value

        try {
            super.deleteWhere(NAME, value);
    
this.logUtil!.putF(this.commonStrings!.SUCCESS, this, commonStrings!.delete);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e);
    
}

}


    public update(name: string, value: Long){
var name = name
var value = value

    var map: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
map.put(NAME, name);
    
map.put(VALUE, value.toString());
    
this.update(map);
    
}


    public update(hashMap: HashMap<any, any>){
var hashMap = hashMap
super.updateWhere(NAME, hashMap!.get(NAME as Object);

                         as String, hashMap);
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(tableData)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();

                        ;
    
}


}
                
            

