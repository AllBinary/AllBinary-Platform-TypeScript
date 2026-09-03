
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { DynamicObjectData } from '../../../../../org/allbinary/business/DynamicObjectData.js';
      //not GWT import const DynamicObjectData = globalThis.org.allbinary.business.DynamicObjectData;

      
import { StoreFrontData } from '../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserDbInitInfo } from '../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      //not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
import { DbWorkFlowFactory } from '../../../../../org/allbinary/logic/control/workflow/DbWorkFlowFactory.js';
      //not GWT import const DbWorkFlowFactory = globalThis.org.allbinary.logic.control.workflow.DbWorkFlowFactory;

      
import { WorkFlowData } from '../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
      //not GWT import const WorkFlowData = globalThis.org.allbinary.logic.control.workflow.WorkFlowData;

      
import { WorkFlowInterface } from '../../../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js';
      //not GWT import const WorkFlowInterface = globalThis.org.allbinary.logic.control.workflow.WorkFlowInterface;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { LicensingException } from '../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      //not GWT import const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
import { ServiceClientInformationInterfaceFactory } from '../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WorkFlowEntityInterface } from './WorkFlowEntityInterface.js';
//not GWT import const WorkFlowEntityInterface = globalThis.org.allbinary.data.tables.workflow.WorkFlowEntityInterface;

                
export class WorkFlowEntity extends AbSqlBean implements WorkFlowEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    readonly tableName: string = "workflows";

    private readonly METHOD_GET: string = "get()";

    private readonly METHOD_UPDATE: string = "update";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
}


    public insert(values: BasicArrayList){

        try {
            super.insert(values);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, INSERT);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, INSERT, e);
    

                                    }
                                
}

}


    public delete(name: string, storeName: string){

        try {
            
    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(WorkFlowData.getInstance()!.NAME, name);
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    
super.deleteWhere(keysAndValues);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.SUCCESS, this, this.commonStrings!.delete);
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.commonStrings!.delete, e);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor, LicensingException.constructor)
            
    public get(name: string, storeName: string): WorkFlowInterface{

        try {
            
    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(WorkFlowData.getInstance()!.NAME, name);
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DbWorkFlowFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap) as WorkFlowInterface;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_GET, e);
    

                                    }
                                



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_GET, e);
    

                                    }
                                



                            throw e;
                    
}
*/
}


    public get(storeName: string): BasicArrayList{

        try {
            
    var workFlowsVector: BasicArrayList = new BasicArrayListD();;
    

    var keysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, storeName);
    

    var hashMapVector: BasicArrayList = super.getRows(keysAndValues)!;;
    

    var size: number = hashMapVector!.size()!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var workFlowHashMap: HashMap<any, any> = hashMapVector!.get(i) as HashMap<any, any>;;
    

                        if(workFlowHashMap != 
                                    null
                                )
                        
                                    {
                                    workFlowsVector!.add(DbWorkFlowFactory.getInstance()!.getInstance(abeClientInformation, workFlowHashMap));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return workFlowsVector;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, this.METHOD_GET, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public update(updatedValues: HashMap<any, any>){

        try {
            
    var wherekeysAndValues: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
wherekeysAndValues!.put(WorkFlowData.getInstance()!.NAME, updatedValues!.get(WorkFlowData.getInstance()!.NAME) as string);
    
wherekeysAndValues!.put(StoreFrontData.getInstance()!.NAME, updatedValues!.get(StoreFrontData.getInstance()!.NAME) as string);
    
super.updateWhere(wherekeysAndValues, updatedValues);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, METHOD_UPDATE, e);
    

                                    }
                                
}

}


    public createTableStatement(): string{

    var workFlowData: WorkFlowData = WorkFlowData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE)!.append(tableName)!.append(this.sqlStrings!.START)!.append(workFlowData!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(StoreFrontData.getInstance()!.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(DynamicObjectData.NAME)!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)!.append(workFlowData!.DATA)!.append(this.sqlTypeStrings!.BLOB_NOT_NULL)!.append(EntryData.getInstance()!.TIMECREATED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(EntryData.getInstance()!.LASTMODIFIED)!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)!.append(this.sqlStrings!.PRIMARY_KEY)!.append(workFlowData!.NAME)!.append(this.sqlStrings!.END);
    



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



