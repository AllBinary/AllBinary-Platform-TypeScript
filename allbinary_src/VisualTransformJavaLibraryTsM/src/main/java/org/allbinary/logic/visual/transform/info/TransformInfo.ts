
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
        



import { Calendar } from "../../../../../../java/util/Calendar.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Encoder } from "../../../../../../org/allbinary/logic/control/crypt/Encoder.js";

    
import { CryptFileReader } from "../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { OutputTypeData } from "../../../../../../org/allbinary/logic/io/OutputTypeData.js";

    
import { AbFilePath } from "../../../../../../org/allbinary/logic/io/path/AbFilePath.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../../../../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    
import { TransformInfoDataData } from "../../../../../../org/allbinary/logic/visual/transform/info/data/TransformInfoDataData.js";

    
import { TransformInfoObjectConfig } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfig.js";

    
import { TransformInfoObjectConfigAndManipulatorFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigAndManipulatorFactory.js";

    
import { TransformInfoObjectConfigInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigInterface.js";

    
import { TransformInfoTemplateData } from "../../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js";

    
import { TransformInfoObjectData } from "../../../../../../org/allbinary/logic/visual/transform/info/viewObject/TransformInfoObjectData.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

export class TransformInfo
            extends Object
        
                , TransformInfoInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private isChild: boolean = false;
        
        

    private name: string

    private storeName: string

    private objectFileName: string

    private anyType: any = {}

    private objectConfigFileName: string

    private objectConfigInterface: TransformInfoObjectConfigInterface

    private template: string

    private templateFileName: string

    private dataFileName: string

    private data: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (){

            super();
            }

public constructor (name: string){

            super();
            var name = name
this.this.setName(name)
}

public constructor (name: string, objectFileName: string, objectConfigFileName: string, templateFileName: string, dataFileName: string){

            super();
            var name = name
var objectFileName = objectFileName
var objectConfigFileName = objectConfigFileName
var templateFileName = templateFileName
var dataFileName = dataFileName
this.this.setName(name)
this.this.setObjectFile(objectFileName)
this.this.setObjectConfigFile(objectConfigFileName)
this.this.setTemplateFile(templateFileName)
this.this.setDataFile(dataFileName)
}


                //@Throws(Error::class)
            
    public override(hashMap: HashMap<Any, Any>){
var hashMap = hashMap

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var aName: string = hashMap!.get(transformInfoData!.NAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aName))
                        
                                    {
                                    this.name= aName

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("TransformInfo properties overridden for: ")
stringBuffer!.append(this.getName())
stringBuffer!.append("\n properties: ")
stringBuffer!.append(hashMap!.toString())
logUtil!.put(stringBuffer!.toString(), this, "override(HashMap hashMap)")

                                    }
                                

    var aStoreName: string = hashMap!.get(StoreFrontData.getInstance()!.NAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aStoreName))
                        
                                    {
                                    this.storeName= aStoreName

                                    }
                                

    var aObjectFileName: string = hashMap!.get(transformInfoData!.OBJECTFILENAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aObjectFileName))
                        
                                    {
                                    this.objectFileName= aObjectFileName

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(URLGLOBALS.getMainPath())
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
stringBuffer!.append(this.storeName)
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var fileAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    var aObject: string = hashMap!.get(transformInfoData!.OBJECT) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aObject))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TransformInfo override view Object for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                

    var fileDataString: string = CryptFileReader(TransformInfoObjectData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoObjectData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(AbPath(fileAbPath!.toString(), aObject))!;
        
        


                        if(fileDataString != 
                                    null
                                )
                        
                                    {
                                    this.anyType= fileDataString

                                    }
                                

                                    }
                                

                        if(!stringValidationUtil!.isEmpty(hashMap!.get(transformInfoData!.OBJECTCONFIG) as String))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TransformInfo override ObjectConfig for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                
this.this.setObjectConfig(hashMap!.get(transformInfoData!.OBJECTCONFIG) as String)

                                    }
                                

    var objectConfigFileName: string = hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(objectConfigFileName))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TransformInfo override ObjectConfig File for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                
this.this.setObjectConfigFile(objectConfigFileName)

                                    }
                                

    var type: string = hashMap!.get(OutputTypeData.getInstance()!.NAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(type))
                        
                                    {
                                    
                        if(this.getObjectConfigInterface() == 
                                    null
                                )
                        
                                    {
                                    this.this.setObjectConfigInterface(TransformInfoObjectConfig(this))

                                    }
                                
this.getObjectConfigInterface()!.setOutputTypeName(type)

                                    }
                                

    var aTemplateFileName: string = hashMap!.get(transformInfoData!.TEMPLATEFILENAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aTemplateFileName))
                        
                                    {
                                    this.templateFileName= aTemplateFileName

                                    }
                                

    var aTemplate: string = hashMap!.get(transformInfoData!.TEMPLATE) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aTemplate))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TransformInfo override Template for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                

    var fileDataString: string = CryptFileReader(TransformInfoTemplateData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(AbPath(fileAbPath!.toString(), aTemplate))!;
        
        


                        if(!stringValidationUtil!.isEmpty(fileDataString))
                        
                                    {
                                    this.template= fileDataString

                                    }
                                

                                    }
                                

    var aDataFileName: string = hashMap!.get(transformInfoData!.DATAFILENAME) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aDataFileName))
                        
                                    {
                                    this.dataFileName= aDataFileName

                                    }
                                

    var aData: string = hashMap!.get(transformInfoData!.DATA) as String;
        
        


                        if(!stringValidationUtil!.isEmpty(aData))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("TransformInfo override Data for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                

    var fileDataString: string = CryptFileReader(TransformInfoDataData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoDataData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(AbPath(fileAbPath!.toString(), aData))!;
        
        


                        if(!stringValidationUtil!.isEmpty(fileDataString))
                        
                                    {
                                    this.data= fileDataString

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    stringBuffer= StringMaker()
stringBuffer!.append("Name: ")
stringBuffer!.append(aName)
stringBuffer!.append("\nTemp Object File: ")
stringBuffer!.append(aObject)
stringBuffer!.append("\nTemp Object Config File: ")
stringBuffer!.append(this.getObjectConfigFilePath()!.toString())
stringBuffer!.append("\nTemp Template File: ")
stringBuffer!.append(aTemplate)
stringBuffer!.append("\nTemp Data File: ")
stringBuffer!.append(aData)
stringBuffer!.append("\nStore Name: ")
stringBuffer!.append(aStoreName)
stringBuffer!.append("\nObjectFile: ")
stringBuffer!.append(this.getObjectFile())
stringBuffer!.append("->TransformInfo")
logUtil!.put(stringBuffer!.toString(), this, "TransformInfoInterface(HashMap)")

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    logUtil!.put(this.log(), this, "override")

                                    }
                                
}


    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Name: ")
stringBuffer!.append(this.name)
stringBuffer!.append("\nObject File: ")
stringBuffer!.append(this.objectFileName)
stringBuffer!.append("\nObject Config File Path: ")
stringBuffer!.append(this.getObjectConfigFile())
stringBuffer!.append("\nTemplate File: ")
stringBuffer!.append(this.templateFileName)
stringBuffer!.append("\nData File: ")
stringBuffer!.append(this.dataFileName)
stringBuffer!.append("\nStore Name: ")
stringBuffer!.append(this.storeName)
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE)
stringBuffer!.append(this.getObjectFile())
stringBuffer!.append("->TransformInfo")
stringBuffer!.append("TransformInfoInterface(HashMap)")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public setName(value: string){
var value = value
this.name= value
}


    public setStoreName(value: string){
var value = value
this.storeName= value
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public setObject(anyType: Object){
var anyType = anyType
this.anyType= anyType
}


    public setObjectFile(value: string){
var value = value
this.objectFileName= value
}


    public setTemplate(value: string){
var value = value
this.template= value
}


    public setTemplateFile(value: string){
var value = value
this.templateFileName= value
}


                //@Throws(Error::class)
            
    setObjectConfigFileName(value: string){
var value = value
this.objectConfigFileName= value
}


                //@Throws(Error::class)
            
    setObjectConfigFile(value: string){
var value = value
this.objectConfigFileName= value
this.this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(abeClientInformation, this, this.getObjectConfigFilePath()))
}


                //@Throws(Error::class)
            
    setObjectConfig(value: string){
var value = value

    var document: Document = DomDocumentHelper.create(value)!;
        
        

this.this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(abeClientInformation, this, document))
}


    public setDataFile(value: string){
var value = value
this.dataFileName= value
}


    public setData(value: string){
var value = value
this.data= value
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getObject(): any = {}{



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


                //@Throws(Error::class)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFilePath(this.getTemplateFile());
    
}


                //@Throws(Error::class)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFilePath(this.getObjectConfigFile());
    
}


                //@Throws(Error::class)
            
    public getDataFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFilePath(this.getDataFile());
    
}


    public getObjectConfigFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectConfigFileName;
    
}


    getData(): string{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var dataFileString: string = this.getDataFile()!;
        
        


                        if(!stringValidationUtil!.isEmpty(dataFileString))
                        
                                    {
                                    
        try {
            
    var fileData: string = CryptFileReader(TransformInfoDataData.getInstance()!.UNCRYPTED_EXTENSION, TransformInfoDataData.getInstance()!.ENCRYPTED_EXTENSION).
                            get(this.getDataFilePath())!;
        
        


                        if(!stringValidationUtil!.isEmpty(this.data))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Data File overriding existing data: " +this.getDataFilePath(), this, "getData()")

                                    }
                                

                                    }
                                
this.data= fileData
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Could Not Load Data from: " +this.getDataFile(), this, "getData()", e)

                                    }
                                
}


                                    }
                                

        try {
            
                        if(!stringValidationUtil!.isEmpty(this.data))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Data: " +DomDocumentHelper.toString(DomDocumentHelper.create(data)), this, "getData()")

                                    }
                                

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Name: ")
stringBuffer!.append(this.name)
stringBuffer!.append("\nEmpty Data For: ")
stringBuffer!.append(dataFileString)
stringBuffer!.append("\nPath: ")
stringBuffer!.append(this.getDataFilePath()!.toFileSystemString())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(stringBuffer!.toString(), this, "getData()")

                                    }
                                

                                    }
                                

                        }
                            
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Could Not Preview Data: " +this.data, this, "getData()", e)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.data;
    
}


                //@Throws(Error::class)
            
    public getDataDocument(): Document{

    var localData: string = this.getData()!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(stringValidationUtil!.isEmpty(localData))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("No Data So Creating New Document", this, "getDataDocument()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DomDocumentHelper.create();
    

                                    }
                                
                        else {
                            
    var document: Document = DomDocumentHelper.create(localData)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    

                        }
                            
}


    public getDataFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dataFileName;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var transformInfoData: TransformInfoData = TransformInfoData.getInstance()!;
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(transformInfoData!.NAME, this.name)
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName)
hashMap!.put(transformInfoData!.OBJECTFILENAME, this.objectFileName)
hashMap!.put(transformInfoData!.OBJECT, this.anyType)
hashMap!.put(transformInfoData!.OBJECTCONFIGFILENAME, this.getObjectConfigFile())
hashMap!.put(transformInfoData!.OBJECTCONFIG, Encoder.encode(this.getObjectConfigInterface()!.toString()!.encodeToByteArray()))
hashMap!.put(transformInfoData!.TEMPLATEFILENAME, this.templateFileName)
hashMap!.put(transformInfoData!.TEMPLATE, this.template)
hashMap!.put(transformInfoData!.DATAFILENAME, this.dataFileName)
hashMap!.put(transformInfoData!.DATA, Encoder.encode(this.data.encodeToByteArray()))

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): java.util.Vector{

    var vector: Vector = new Vector();
        
        

vector.add(this.name)
vector.add(this.storeName)
vector.add(this.objectFileName)
vector.add(this.anyType)
vector.add(this.getObjectConfigFile())
vector.add(Encoder.encode(this.getObjectConfigInterface()!.toString()!.encodeToByteArray()))
vector.add(this.templateFileName)
vector.add(this.template)
vector.add(this.dataFileName)
vector.add(Encoder.encode(this.data.encodeToByteArray()))

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

vector.add(time)
vector.add(time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName() as Object;
    
}


    public setChild(){
this.isChild= true
}


    public isChild(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isChild;
    
}


    public getObjectConfigInterface(): TransformInfoObjectConfigInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectConfigInterface;
    
}


    public setObjectConfigInterface(objectConfigInterface: Object){
var objectConfigInterface = objectConfigInterface
this.objectConfigInterface= objectConfigInterface
}


}
                
            

