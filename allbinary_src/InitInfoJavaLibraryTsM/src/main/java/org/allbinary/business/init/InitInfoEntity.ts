
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { UserDbInitInfo } from "../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbPathData } from "../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

import { InitInfo } from "./InitInfo.js";

export class InitInfoEntity extends InitSql {
        

    private readonly NAME: string = "InitInfoEntity";
        
        

    private readonly NOTHING: string = "NOTHING";
        
        

    private readonly tableName: string = "initdata";
        
        

    private readonly tableData: string

    private readonly NOT_IN_DB: string = "Not In DB";
        
        

    private readonly METHOD_GET: string = "get()";
        
        

    private readonly METHOD_IS: string = "is()";
        
        

    private readonly METHOD_ADD: string = "add()";
        
        

    private readonly CREATED_SUCCESS: string = " Created Successfully";
        
        

    private readonly FAILED_TO_CREATE: string = "Failed to create ";
        
        
public constructor ()                        

                            : super(new UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(tableName);
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(NOTHING);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.TESTING);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.TESTHTMLPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.MAINPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(NOTHING);
    
stringBuffer!.append(this.sqlStrings!.END);
    
this.tableData= stringBuffer!.toString();
    
this.setTable(this.tableName);
    
}


    public get(): boolean{

        try {
            
    var keyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keyAndValue!.put(NOTHING, NOTHING);
    

    var hashMap: HashMap<any, any> = getRow(keyAndValue)!;
        
        
;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    InitInfo.getInstance()!.set(hashMap);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put(this.NOT_IN_DB, NAME, this.METHOD_GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public is(): boolean{

        try {
            
    var keyAndValue: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
keyAndValue!.put(NOTHING, NOTHING);
    

    var hashMap: HashMap<any, any> = getRow(keyAndValue)!;
        
        
;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put(this.NOT_IN_DB, this.NAME, this.METHOD_IS);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_IS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public update(){
updateWhere(NOTHING, NOTHING, InitInfo.getInstance()!.toHashMap());
    
}


    public add(){

        try {
            
    var values: Vector = new Vector();
        
        
;
    
values.add(NOTHING);
    
values.add(InitInfo.getInstance()!.getTesting());
    
values.add(InitInfo.getInstance()!.getTestHtmlPath());
    
values.add(InitInfo.getInstance()!.getMainPath());
    
insert(values);
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_ADD, e);
    

                                    }
                                
}

}


    public createTable(): string{

                        if(super.createTable(tableData))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tableName +CREATED_SUCCESS;
    

                                    }
                                
                        else {
                            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(FAILED_TO_CREATE);
    
stringBuffer!.append(tableData);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                        }
                            
}


}
                
            

