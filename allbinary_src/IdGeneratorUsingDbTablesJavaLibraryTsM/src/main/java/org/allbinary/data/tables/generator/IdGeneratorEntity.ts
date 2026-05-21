
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      
import { Vector } from '../../../../../java/util/Vector.js';
      
import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IdGeneratorEntityInterface } from './IdGeneratorEntityInterface.js';

export class IdGeneratorEntity extends AbSqlBean implements IdGeneratorEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tableName: string = "idgenerator";

    private readonly tableData: string

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

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();
;
    
keysAndValues!.put(this.NAME, name);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;
;
    

                        if(

                                    (get as string).compareTo(name) != 0)
                        
                                    {
                                    


                            throw new Exception("results do not match");
                    

                                    }
                                

    var value: string = hashMap!.get(this.VALUE) as string;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Long.parseLong(value);;
    
}


    public insert(values: Vector){

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

    var map: HashMap<any, any> = new HashMap<any, any>();
;
    
map.put(this.NAME, name);
    
map.put(this.VALUE, value.toString());
    
this.update(map);
    
}


    public update(hashMap: HashMap<any, any>){
super.updateWhere(this.NAME, hashMap!.get(this.NAME) as string, hashMap);
    
}


    public createTable(): string{

    var returnStr: string = super.createTable(tableData)!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnStr;
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}
                
            

