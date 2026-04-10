
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserDbInitInfo } from "../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlBean } from "../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js";

    
import { Encoder } from "../../../../../../org/allbinary/logic/control/crypt/Encoder.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformInfoData } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoFactoryInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoFactoryInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigAndManipulatorFactoryBase } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactoryBase.js";

    
import { TransformInfoObjectConfigGeneratorFactoryInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactoryInterface.js";

    

export class TransformInfoEntity extends AbSqlBean
                , TransformInfoEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly tableName: string = "transforminfo";
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private readonly transformInfoFactoryInterface: TransformInfoFactoryInterface

    private readonly transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase

    private readonly transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface
public constructor (transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase, transformInfoFactoryInterface: TransformInfoFactoryInterface)                        

                            : super(UserDbInitInfo()){

            super();
            var transformInfoObjectConfigGeneratorFactoryInterface = transformInfoObjectConfigGeneratorFactoryInterface
var transformInfoObjectConfigAndManipulatorFactoryInterface = transformInfoObjectConfigAndManipulatorFactoryInterface
var transformInfoFactoryInterface = transformInfoFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(tableName)
this.transformInfoObjectConfigGeneratorFactoryInterface= transformInfoObjectConfigGeneratorFactoryInterface
this.transformInfoObjectConfigAndManipulatorFactoryInterface= transformInfoObjectConfigAndManipulatorFactoryInterface
this.transformInfoFactoryInterface= transformInfoFactoryInterface
}


    public insert(values: Vector){
var values = values

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


    public delete(value: string){
var value = value

        try {
            deleteWhere(TransformInfoData.getInstance()!.NAME, value)

    
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


                @Throws(Exception::class)
            
    public get(name: string, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext): TransformInfoInterface{
var name = name
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        


    var keysAndValues: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(transformInfoData!.NAME, name)

    var hashMap: HashMap<Any, Any> = super.getRow(keysAndValues)!;
        
        


    
                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    
    var anyType: any = {} = hashMap!.get(transformInfoData!.OBJECTCONFIG)!;
        
        


    
                        if(anyType != 
                                    null
                                )
                        
                                    {
                                    
    var string: string = anyType as String;
        
        

put(transformInfoData!.OBJECTCONFIG, decode.toCharArray())

                                    }
                                

    var objectData: any = {} = hashMap!.get(transformInfoData!.DATA)!;
        
        


    
                        if(objectData != 
                                    null
                                )
                        
                                    {
                                    
    var string: string = objectData as String;
        
        

put(transformInfoData!.DATA, decode.toCharArray())

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoFactoryInterface!.getInstance(hashMap, propertiesHashMap, pageContext);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


                @Throws(Exception::class)
            
    public getObjectConfigs(storeName: string): Vector{
var storeName = storeName

    var objectConfigVector: Vector = new Vector();
        
        


    var objectConfigColumnVector: Vector = this.getColumnWhere(TransformInfoData.getInstance()!.OBJECTCONFIG, StoreFrontData.getInstance()!.NAME, storeName)!;
        
        


    var size: number = objectConfigColumnVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var objectConfigString: string = objectConfigColumnVector!.get(i) as String;
        
        

objectConfigString= decode.toCharArray()
add(this.transformInfoObjectConfigAndManipulatorFactoryInterface!.getInstance(abeClientInformation, this as TransformInfoInterface, DomDocumentHelper.create(objectConfigString)))
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectConfigVector;
    
}


                @Throws(Exception::class)
            
    public getNames(storeName: string): Vector{
var storeName = storeName

    var viewNameVector: Vector = new Vector();
        
        


    var columnVector: Vector = this.getColumnWhere(TransformInfoData.getInstance()!.NAME, StoreFrontData.getInstance()!.NAME, storeName)!;
        
        


    var size: number = columnVector!.length!;
        
        





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var viewNameString: string = columnVector!.get(i) as String;
        
        

add(viewNameString)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewNameVector;
    
}


    public createTableStatement(): string{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.sqlStrings!.CREATE_TABLE)
append(tableName)
append(this.sqlStrings!.START)
append(transformInfoData!.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(StoreFrontData.getInstance()!.NAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(transformInfoData!.OBJECTFILENAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(transformInfoData!.OBJECT)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(transformInfoData!.OBJECTCONFIGFILENAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(transformInfoData!.OBJECTCONFIG)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(transformInfoData!.TEMPLATEFILENAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(transformInfoData!.TEMPLATE)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(transformInfoData!.DATAFILENAME)
append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL)
append(transformInfoData!.DATA)
append(this.sqlTypeStrings!.BLOB_NOT_NULL)
append(EntryData.getInstance()!.LASTMODIFIED)
append(EntryData.getInstance()!.TIMECREATED)
append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL)
append(this.sqlStrings!.PRIMARY_KEY)
append(transformInfoData!.NAME)
append(this.sqlStrings!.END)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());
    
}


    public update(updatedValues: HashMap<Any, Any>){
var updatedValues = updatedValues
updateWhere(TransformInfoData.getInstance()!.NAME, updatedValues!.get(TransformInfoData.getInstance()!.NAME) as String, updatedValues)
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();
    
}


}
                
            

