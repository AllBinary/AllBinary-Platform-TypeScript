
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { DynamicObjectData } from "../../../../../org/allbinary/business/DynamicObjectData.js";

    
import { StoreFrontData } from "../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { DbWorkFlowFactory } from "../../../../../org/allbinary/logic/control/workflow/DbWorkFlowFactory.js";

    
import { WorkFlowData } from "../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js";

    
import { WorkFlowInterface } from "../../../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class WorkFlowEntity extends AbSqlBean
                , WorkFlowEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    readonly tableName: string = "workflows";
        
        

    private readonly METHOD_GET: string = "get()";
        
        

    private readonly METHOD_UPDATE: string = "update";
        
        
public constructor ()                        

                            : super(UserDbInitInfo()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
}


    public insert(values: Vector){
    //var values = values

        try {
            insert(values)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, INSERT)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, INSERT, e)

                                    }
                                
}

}


    public delete(name: string, storeName: string){
    //var name = name
    //var storeName = storeName

        try {
            
    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(WorkFlowData.getInstance()!.NAME, name)
put(StoreFrontData.getInstance()!.NAME, storeName)
deleteWhere(keysAndValues)

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.SUCCESS, this, commonStrings!.delete)

                                    }
                                
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, commonStrings!.delete, e)

                                    }
                                
}

}


                @Throws(Exception::class, LicensingException::class)
            
    public get(name: string, storeName: string): WorkFlowInterface{
    //var name = name
    //var storeName = storeName

        try {
            
    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(WorkFlowData.getInstance()!.NAME, name)
put(StoreFrontData.getInstance()!.NAME, storeName)

    var hashMap: HashMap<Any, Any> = super.getRow(keysAndValues)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DbWorkFlowFactory.getInstance()!.getInstance(abeClientInformation, hashMap) as WorkFlowInterface;
    
} catch(e: LicensingException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, METHOD_GET, e)

                                    }
                                



                            throw e
}
 catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, METHOD_GET, e)

                                    }
                                



                            throw e
}

}


    public get(storeName: string): Vector{
var storeName = storeName

        try {
            
    var workFlowsVector: Vector = new Vector();
        
        


    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(StoreFrontData.getInstance()!.NAME, storeName)

    var hashMapVector: Vector = super.getRows(keysAndValues)!;
        
        


    var size: number = hashMapVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var workFlowHashMap: HashMap<Any, Any> = hashMapVector!.get(i as Object) as HashMap<Any, Any>;
        
        


    
                        if(workFlowHashMap != 
                                    null
                                )
                        
                                    {
                                    add(DbWorkFlowFactory.getInstance()!.getInstance(abeClientInformation, workFlowHashMap))

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return workFlowsVector;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, this.METHOD_GET, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues

        try {
            
    var wherekeysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(WorkFlowData.getInstance()!.NAME, updatedValues!.get(WorkFlowData.getInstance()!.NAME) as String)
put(StoreFrontData.getInstance()!.NAME, updatedValues!.get(StoreFrontData.getInstance()!.NAME) as String)
updateWhere(wherekeysAndValues, updatedValues)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    put(this.commonStrings!.FAILURE, this, METHOD_UPDATE, e)

                                    }
                                
}

}


    public createTableStatement(): string{

    var workFlowData: WorkFlowData = WorkFlowData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

