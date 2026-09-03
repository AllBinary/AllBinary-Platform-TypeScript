
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../java/util/Calendar.js';
      //not GWT import const Calendar = globalThis.java.util.Calendar;

      
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      //not GWT import const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
      //not GWT import const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      //not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Encoder } from '../../../../../../org/allbinary/logic/control/crypt/Encoder.js';
      //not GWT import const Encoder = globalThis.org.allbinary.logic.control.crypt.Encoder;

      
import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      //not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { OutputTypeData } from '../../../../../../org/allbinary/logic/io/OutputTypeData.js';
      //not GWT import const OutputTypeData = globalThis.org.allbinary.logic.io.OutputTypeData;

      
import { AbFilePath } from '../../../../../../org/allbinary/logic/io/path/AbFilePath.js';
      //not GWT import const AbFilePath = globalThis.org.allbinary.logic.io.path.AbFilePath;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { AbeClientInformationInterface } from '../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { ServiceClientInformationInterfaceFactory } from '../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js';
      //not GWT import const ServiceClientInformationInterfaceFactory = globalThis.org.allbinary.logic.system.security.licensing.ServiceClientInformationInterfaceFactory;

      
import { TransformInfoDataData } from '../../../../../../org/allbinary/logic/visual/transform/info/data/TransformInfoDataData.js';
      //not GWT import const TransformInfoDataData = globalThis.org.allbinary.logic.visual.transform.info.data.TransformInfoDataData;

      
import { TransformInfoObjectConfig } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js';
      //not GWT import const TransformInfoObjectConfig = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfig;

      
import { TransformInfoObjectConfigAndManipulatorFactory } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactory.js';
      //not GWT import const TransformInfoObjectConfigAndManipulatorFactory = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigAndManipulatorFactory;

      
import { TransformInfoObjectConfigInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js';
      //not GWT import const TransformInfoObjectConfigInterface = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigInterface;

      
import { TransformInfoTemplateData } from '../../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js';
      //not GWT import const TransformInfoTemplateData = globalThis.org.allbinary.logic.visual.transform.info.template.TransformInfoTemplateData;

      
import { TransformInfoObjectData } from '../../../../../../org/allbinary/logic/visual/transform/info/viewObject/TransformInfoObjectData.js';
      //not GWT import const TransformInfoObjectData = globalThis.org.allbinary.logic.visual.transform.info.viewObject.TransformInfoObjectData;

      
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoInterface } from './TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

                import { TransformInfoData } from './TransformInfoData.js';
//not GWT import const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

                
export class TransformInfo
            extends Object
         implements TransformInfoInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;

    private isChild: boolean = false;

    private name: string;

    private storeName: string;

    private objectFileName: string;

    private anyType: any;

    private objectConfigFileName: string;

    private objectConfigInterface: TransformInfoObjectConfigInterface;

    private template: string;

    private templateFileName: string;

    private dataFileName: string;

    private data: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (){

            super();
        }


public constructor (name: string){

            super();
        this.setName(name);
    
}


public constructor (name: string, objectFileName: string, objectConfigFileName: string, templateFileName: string, dataFileName: string){

            super();
        this.setName(name);
    
this.setObjectFile(objectFileName);
    
this.setObjectConfigFile(objectConfigFileName);
    
this.setTemplateFile(templateFileName);
    
this.setDataFile(dataFileName);
    
}


                //@Throws(Exception.constructor)
            
    public override(hashMap: HashMap<any, any>){

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

    var aName: string = hashMap!.get(transformInfoData!.NAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aName))
                        
                                    {
                                    this.name= aName;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("TransformInfo properties overridden for: ");
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append("\n properties: ");
    
stringBuffer!.append(hashMap!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "override(HashMap hashMap)");
    

                                    }
                                

    var aStoreName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aStoreName))
                        
                                    {
                                    this.storeName= aStoreName;
    

                                    }
                                

    var aObjectFileName: string = hashMap!.get(transformInfoData!.OBJECTFILENAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aObjectFileName))
                        
                                    {
                                    this.objectFileName= aObjectFileName;
    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    
stringBuffer!.append(this.storeName);
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var fileAbPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var aObject: string = hashMap!.get(transformInfoData!.OBJECT) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aObject))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TransformInfo override view Object for: " +this.getName(), this, "override(HashMap hashMap)");
    

                                    }
                                

    var fileDataString: string = new CryptFileReader(TransformInfoObjectData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectData.getInstance()!.ENCRYPTED_EXTENSION).get(new AbPath(fileAbPath!.toString(), aObject))!;;
    

                        if(fileDataString != 
                                    null
                                )
                        
                                    {
                                    this.anyType= fileDataString;
    

                                    }
                                

                                    }
                                

                        if(!stringValidationUtil!.isEmpty(hashMap!.get(transformInfoData!.OBJECTCONFIG) as string))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TransformInfo override ObjectConfig for: " +this.getName(), this, "override(HashMap hashMap)");
    

                                    }
                                
this.setObjectConfig(hashMap!.get(transformInfoData!.OBJECTCONFIG) as string);
    

                                    }
                                

    var objectConfigFileName: string = hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(objectConfigFileName))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TransformInfo override ObjectConfig File for: " +this.getName(), this, "override(HashMap hashMap)");
    

                                    }
                                
this.setObjectConfigFile(objectConfigFileName);
    

                                    }
                                

    var type: string = hashMap!.get(OutputTypeData.getInstance()!.NAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(type))
                        
                                    {
                                    
                        if(this.getObjectConfigInterface() == 
                                    null
                                )
                        
                                    {
                                    this.setObjectConfigInterface(new TransformInfoObjectConfig(this));
    

                                    }
                                
this.getObjectConfigInterface()!.setOutputTypeName(type);
    

                                    }
                                

    var aTemplateFileName: string = hashMap!.get(transformInfoData!.TEMPLATEFILENAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aTemplateFileName))
                        
                                    {
                                    this.templateFileName= aTemplateFileName;
    

                                    }
                                

    var aTemplate: string = hashMap!.get(transformInfoData!.TEMPLATE) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aTemplate))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TransformInfo override Template for: " +this.getName(), this, "override(HashMap hashMap)");
    

                                    }
                                

    var fileDataString: string = new CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).get(new AbPath(fileAbPath!.toString(), aTemplate))!;;
    

                        if(!stringValidationUtil!.isEmpty(fileDataString))
                        
                                    {
                                    this.template= fileDataString;
    

                                    }
                                

                                    }
                                

    var aDataFileName: string = hashMap!.get(transformInfoData!.DATAFILENAME) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aDataFileName))
                        
                                    {
                                    this.dataFileName= aDataFileName;
    

                                    }
                                

    var aData: string = hashMap!.get(transformInfoData!.DATA) as string;;
    

                        if(!stringValidationUtil!.isEmpty(aData))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TransformInfo override Data for: " +this.getName(), this, "override(HashMap hashMap)");
    

                                    }
                                

    var fileDataString: string = new CryptFileReader(TransformInfoDataData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoDataData.getInstance()!.ENCRYPTED_EXTENSION).get(new AbPath(fileAbPath!.toString(), aData))!;;
    

                        if(!stringValidationUtil!.isEmpty(fileDataString))
                        
                                    {
                                    this.data= fileDataString;
    

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer= new StringMaker();
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(aName);
    
stringBuffer!.append("\nTemp Object File: ");
    
stringBuffer!.append(aObject);
    
stringBuffer!.append("\nTemp Object Config File: ");
    
stringBuffer!.append(this.getObjectConfigFilePath()!.toString());
    
stringBuffer!.append("\nTemp Template File: ");
    
stringBuffer!.append(aTemplate);
    
stringBuffer!.append("\nTemp Data File: ");
    
stringBuffer!.append(aData);
    
stringBuffer!.append("\nStore Name: ");
    
stringBuffer!.append(aStoreName);
    
stringBuffer!.append("\nObjectFile: ");
    
stringBuffer!.append(this.getObjectFile());
    
stringBuffer!.append("->TransformInfo");
    
this.logUtil!.putF(stringBuffer!.toString(), this, "TransformInfoInterface(HashMap)");
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.log(), this, "override");
    

                                    }
                                
}


    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(this.name);
    
stringBuffer!.append("\nObject File: ");
    
stringBuffer!.append(this.objectFileName);
    
stringBuffer!.append("\nObject Config File Path: ");
    
stringBuffer!.append(this.getObjectConfigFile());
    
stringBuffer!.append("\nTemplate File: ");
    
stringBuffer!.append(this.templateFileName);
    
stringBuffer!.append("\nData File: ");
    
stringBuffer!.append(this.dataFileName);
    
stringBuffer!.append("\nStore Name: ");
    
stringBuffer!.append(this.storeName);
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append(this.getObjectFile());
    
stringBuffer!.append("->TransformInfo");
    
stringBuffer!.append("TransformInfoInterface(HashMap)");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public setName(value: string){
this.name= value;
    
}


    public setStoreName(value: string){
this.storeName= value;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public setObject(anyType: Object){
this.anyType= anyType;
    
}


    public setObjectFile(value: string){
this.objectFileName= value;
    
}


    public setTemplate(value: string){
this.template= value;
    
}


    public setTemplateFile(value: string){
this.templateFileName= value;
    
}


                //@Throws(Exception.constructor)
            
    setObjectConfigFileName(value: string){
this.objectConfigFileName= value;
    
}


                //@Throws(Exception.constructor)
            
    setObjectConfigFile(value: string){
this.objectConfigFileName= value;
    
this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(this.abeClientInformation, this, this.getObjectConfigFilePath()));
    
}


                //@Throws(Exception.constructor)
            
    setObjectConfig(value: string){

    var document: Document = DomDocumentHelper.create(value)!;;
    
this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(this.abeClientInformation, this, document));
    
}


    public setDataFile(value: string){
this.dataFileName= value;
    
}


    public setData(value: string){
this.data= value;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getObject(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.anyType;
    
}


    public getObjectFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectFileName;
    
}


    public getTemplate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.template;
    
}


    public getTemplateFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.templateFileName;
    
}


                //@Throws(Exception.constructor)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFilePath(this.getTemplateFile());
    
}


                //@Throws(Exception.constructor)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFilePath(this.getObjectConfigFile());
    
}


                //@Throws(Exception.constructor)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFilePath(this.getDataFile());
    
}


    public getObjectConfigFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectConfigFileName;
    
}


    getData(): string{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

    var dataFileString: string = this.getDataFile()!;;
    

                        if(!stringValidationUtil!.isEmpty(dataFileString))
                        
                                    {
                                    
        try {
            
    var fileData: string = new CryptFileReader(TransformInfoDataData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoDataData.getInstance()!.ENCRYPTED_EXTENSION).get(this.getDataFilePath())!;;
    

                        if(!stringValidationUtil!.isEmpty(this.data))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Data File overriding existing data: " +this.getDataFilePath(), this, "getData()");
    

                                    }
                                

                                    }
                                
this.data= fileData;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Load Data from: " +this.getDataFile(), this, "getData()", e);
    

                                    }
                                
}


                                    }
                                

        try {
            
                        if(!stringValidationUtil!.isEmpty(this.data))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("Data: " +DomDocumentHelper.toString(DomDocumentHelper.create(data)), this, "getData()");
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(this.name);
    
stringBuffer!.append("\nEmpty Data For: ");
    
stringBuffer!.append(dataFileString);
    
stringBuffer!.append("\nPath: ");
    
stringBuffer!.append(this.getDataFilePath()!.toFileSystemString());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF(stringBuffer!.toString(), this, "getData()");
    

                                    }
                                

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Could Not Preview Data: " +this.data, this, "getData()", e);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.data;
    
}


                //@Throws(Exception.constructor)
            
    public getDataDocument(): Document{

    var localData: string = this.getData()!;;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(localData))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("No Data So Creating New Document", this, "getDataDocument()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.create();;
    

                                    }
                                
                        else {
                            
    var document: Document = DomDocumentHelper.create(localData)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                        }
                            
}


    public getDataFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dataFileName;
    
}


    public toHashMap(): HashMap<any, any>{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;;
    

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(transformInfoData!.NAME, this.name);
    
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
hashMap!.put(transformInfoData!.OBJECTFILENAME, this.objectFileName);
    
hashMap!.put(transformInfoData!.OBJECT, this.anyType);
    
hashMap!.put(transformInfoData!.OBJECTCONFIGFILENAME, this.getObjectConfigFile());
    
hashMap!.put(transformInfoData!.OBJECTCONFIG, Encoder.encode(this.getObjectConfigInterface()!.toString()!.getBytes()));
    
hashMap!.put(transformInfoData!.TEMPLATEFILENAME, this.templateFileName);
    
hashMap!.put(transformInfoData!.TEMPLATE, this.template);
    
hashMap!.put(transformInfoData!.DATAFILENAME, this.dataFileName);
    
hashMap!.put(transformInfoData!.DATA, Encoder.encode(this.data.getBytes()));
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.name);
    
vector.add(this.storeName);
    
vector.add(this.objectFileName);
    
vector.add(this.anyType);
    
vector.add(this.getObjectConfigFile());
    
vector.add(Encoder.encode(this.getObjectConfigInterface()!.toString()!.getBytes()));
    
vector.add(this.templateFileName);
    
vector.add(this.template);
    
vector.add(this.dataFileName);
    
vector.add(Encoder.encode(this.data.getBytes()));
    

    var calendar: Calendar = Calendar.getInstance()!;;
    

    var time: string = new Long(calendar.getTimeInMillis()).toString();;
    
vector.add(time);
    
vector.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();
    
}


    public setChild(){
this.isChild= true;
    
}


    public isChild(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isChild;
    
}


    public getObjectConfigInterface(): TransformInfoObjectConfigInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectConfigInterface;
    
}


    public setObjectConfigInterface(objectConfigInterface: Object){
this.objectConfigInterface= objectConfigInterface;
    
}


}



