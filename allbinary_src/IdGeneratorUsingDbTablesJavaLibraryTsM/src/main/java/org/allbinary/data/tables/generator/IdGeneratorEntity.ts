
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
//not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IdGeneratorEntityInterface } from './IdGeneratorEntityInterface.js';
//not GWT import - same folder const IdGeneratorEntityInterface = globalThis.org.allbinary.data.tables.generator.IdGeneratorEntityInterface;

                
export class IdGeneratorEntity extends AbSqlBean implements IdGeneratorEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "idgenerator";

    private readonly tableData: string;

    readonly NAME: string = "NAME";

    readonly VALUE: string = "VALUE";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.tableData= new StringMaker().append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(VALUE)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(NAME)!.append(this.sqlStrings!.END)!.toString();
    
super.setTableName(this.tableName);
    
}


                //@Throws(Exception.constructor)
            
    public get(name: string): Long{

    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(this.NAME, name);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    

                        if((get as string).compareTo(name) != 0)
                        
                                    {
                                    


                            throw new Exception("results do not match");
                    

                                    }
                                

    var value: string = hashMap!.get(this.VALUE) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Long.parseLong(value);;
    
}


    public insert(values: BasicArrayList){

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

        try {
            super.deleteWhere(this.NAME, value);
    
this.logUtil!.putF(this.commonStrings!.SUCCESS, this, this.commonStrings!.delete);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.delete, e);
    
}

}


    public update(name: string, value: Long){

    var map: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
map.put(this.NAME, name);
    
map.put(this.VALUE, value.toString());
    
this.update(map);
    
}


    public update(hashMap: HashMap<any, any>){
super.updateWhere(this.NAME, hashMap!.get(this.NAME) as string, hashMap);
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(tableData)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}



