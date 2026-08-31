
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      //not GWT import const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlBean } from '../../../../../../org/allbinary/logic/communication/sql/AbSqlBean.js';
      //not GWT import const AbSqlBean = globalThis.org.allbinary.logic.communication.sql.AbSqlBean;

      
import { Encoder } from '../../../../../../org/allbinary/logic/control/crypt/Encoder.js';
      //not GWT import const Encoder = globalThis.org.allbinary.logic.control.crypt.Encoder;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { TransformInfoData } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      //not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
import { TransformInfoFactoryInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoFactoryInterface.js';
      //not GWT import const TransformInfoFactoryInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoFactoryInterface;

      
import { TransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfoObjectConfigAndManipulatorFactoryBase } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactoryBase.js';
      //not GWT import const TransformInfoObjectConfigAndManipulatorFactoryBase = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigAndManipulatorFactoryBase;

      
import { TransformInfoObjectConfigGeneratorFactoryInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactoryInterface.js';
      //not GWT import const TransformInfoObjectConfigGeneratorFactoryInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGeneratorFactoryInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoEntityInterface } from './TransformInfoEntityInterface.js';

export class TransformInfoEntity extends AbSqlBean implements TransformInfoEntityInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "transforminfo";

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private readonly transformInfoFactoryInterface: TransformInfoFactoryInterface;

    private readonly transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase;

    private readonly transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface;

public constructor (transformInfoObjectConfigGeneratorFactoryInterface: TransformInfoObjectConfigGeneratorFactoryInterface, transformInfoObjectConfigAndManipulatorFactoryInterface: TransformInfoObjectConfigAndManipulatorFactoryBase, transformInfoFactoryInterface: TransformInfoFactoryInterface){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTableName(this.tableName);
    
this.transformInfoObjectConfigGeneratorFactoryInterface= transformInfoObjectConfigGeneratorFactoryInterface;
    
this.transformInfoObjectConfigAndManipulatorFactoryInterface= transformInfoObjectConfigAndManipulatorFactoryInterface;
    
this.transformInfoFactoryInterface= transformInfoFactoryInterface;
    
}


    public insert(values: Vector){

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


    public delete(value: string){

        try {
            super.deleteWhere(TransformInfoData.getInstance()!.NAME, value);
    

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


                //@Throws(Exception.constructor)
            
    public get(name: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    
keysAndValues!.put(transformInfoData!.NAME, name);
    

    var hashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    

                        if(hashMap != 
                                    null
                                )
                        
                                    {
                                    
    var anyType: any = hashMap!.get(transformInfoData!.OBJECTCONFIG)!;;
    

                        if(anyType != 
                                    null
                                )
                        
                                    {
                                    
    var string: string = anyType as string;;
    
hashMap!.put(transformInfoData!.OBJECTCONFIG, decode.toCharArray());
    

                                    }
                                

    var objectData: any = hashMap!.get(transformInfoData!.DATA)!;;
    

                        if(objectData != 
                                    null
                                )
                        
                                    {
                                    
    var string: string = objectData as string;;
    
hashMap!.put(transformInfoData!.DATA, decode.toCharArray());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoFactoryInterface!.getInstance(hashMap, propertiesHashMap, pageContext);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getObjectConfigs(storeName: string): Vector{

    var objectConfigVector: Vector = new Vector();;
    

    var objectConfigColumnVector: Vector = this.getColumnWhere(TransformInfoData.getInstance()!.OBJECTCONFIG, StoreFrontData.getInstance()!.NAME, storeName)!;;
    

    var size: number = objectConfigColumnVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var objectConfigString: string = objectConfigColumnVector!.get(i) as string;;
    
objectConfigString= decode.toCharArray();
    
objectConfigVector!.add(this.transformInfoObjectConfigAndManipulatorFactoryInterface!.getInstance(this.abeClientInformation, this as TransformInfoInterface, DomDocumentHelper.create(objectConfigString)));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectConfigVector;
    
}


                //@Throws(Exception.constructor)
            
    public getNames(storeName: string): Vector{

    var viewNameVector: Vector = new Vector();;
    

    var columnVector: Vector = this.getColumnWhere(TransformInfoData.getInstance()!.NAME, StoreFrontData.getInstance()!.NAME, storeName)!;;
    

    var size: number = columnVector!.length!;;
    




                        for (
    var i: number = 0;i < size; i++)
        {

    var viewNameString: string = columnVector!.get(i) as string;;
    
viewNameVector!.add(viewNameString);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return viewNameVector;
    
}


    public createTableStatement(): string{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.sqlStrings!.CREATE_TABLE);
    
stringBuffer!.append(this.tableName);
    
stringBuffer!.append(this.sqlStrings!.START);
    
stringBuffer!.append(transformInfoData!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(StoreFrontData.getInstance()!.NAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.OBJECTFILENAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.OBJECT);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.OBJECTCONFIGFILENAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.OBJECTCONFIG);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.TEMPLATEFILENAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.TEMPLATE);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.DATAFILENAME);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_CHAR_COLUMN_NOT_NULL);
    
stringBuffer!.append(transformInfoData!.DATA);
    
stringBuffer!.append(this.sqlTypeStrings!.BLOB_NOT_NULL);
    
stringBuffer!.append(EntryData.getInstance()!.LASTMODIFIED);
    
stringBuffer!.append(EntryData.getInstance()!.TIMECREATED);
    
stringBuffer!.append(this.sqlTypeStrings!.MAX_BIG_INT_UNSIGNED_NOT_NULL);
    
stringBuffer!.append(this.sqlStrings!.PRIMARY_KEY);
    
stringBuffer!.append(transformInfoData!.NAME);
    
stringBuffer!.append(this.sqlStrings!.END);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public createTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.createTable(this.createTableStatement());;
    
}


    public update(updatedValues: HashMap<any, any>){
super.updateWhere(TransformInfoData.getInstance()!.NAME, updatedValues!.get(TransformInfoData.getInstance()!.NAME) as string, updatedValues);
    
}


    public dropTable(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.dropTable();;
    
}


}



