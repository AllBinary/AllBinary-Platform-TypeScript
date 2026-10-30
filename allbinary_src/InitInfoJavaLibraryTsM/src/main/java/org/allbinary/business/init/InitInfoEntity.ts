
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { UserDbInitInfo } from '../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
//not GWT import const UserDbInitInfo

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { LogConfigTypeFactory } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { LogConfigTypes } from '../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InitSql } from './InitSql.js';
//sameFolderImports - not GWT import - same folder const InitSql
import { InitInfo } from './InitInfo.js';
//sameFolderImports - not GWT import - same folder const InitInfo

export class InitInfoEntity extends InitSql {
        

    private readonly NAME: string = "InitInfoEntity";

    private readonly NOTHING: string = "NOTHING";

    private readonly tableName: string = "initdata";

    private readonly tableData: string;

    private readonly NOT_IN_DB: string = "Not In DB";

    private readonly METHOD_GET: string = "get()";

    private readonly METHOD_IS: string = "is()";

    private readonly METHOD_ADD: string = "add()";

    private readonly CREATED_SUCCESS: string = " Created Successfully";

    private readonly FAILED_TO_CREATE: string = "Failed to create ";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.tableName);
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(this.NOTHING);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.TESTING);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.TESTHTMLPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(InitInfo.getInstance()!.MAINPATH);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(this.NOTHING);
    
stringBuffer!.append(this.sqlStrings!.END);
    
this.tableData= stringBuffer!.toString();
    
this.setTable(this.tableName);
    
}


    public get(): boolean{

 try { 
    let keyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keyAndValue!.put(this.NOTHING, this.NOTHING);
    

    let hashMap: HashMap<any, any> = getRow(keyAndValue)!;;
    

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
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public is(): boolean{

 try { 
    let keyAndValue: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keyAndValue!.put(this.NOTHING, this.NOTHING);
    

    let hashMap: HashMap<any, any> = getRow(keyAndValue)!;;
    

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
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_IS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public update(){
updateWhere(NOTHING, NOTHING, InitInfo.getInstance()!.toHashMap());
    
}


    public add(){

 try { 
    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.NOTHING);
    
values.add(InitInfo.getInstance()!.getTesting());
    
values.add(InitInfo.getInstance()!.getTestHtmlPath());
    
values.add(InitInfo.getInstance()!.getMainPath());
    
insert(values);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this.NAME, this.METHOD_ADD, e);
    

                                    }
                                

 }
   }
 
}


    public createTable(): string{

                        if(super.createTable(this.tableData))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tableName +this.CREATED_SUCCESS;
    

                                    }
                                
                        else {
                            
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.FAILED_TO_CREATE);
    
stringBuffer!.append(this.tableData);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                        }
                            
}


}

