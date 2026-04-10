
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
this.setName(name)
}

public constructor (name: string, objectFileName: string, objectConfigFileName: string, templateFileName: string, dataFileName: string){

            super();
            var name = name
var objectFileName = objectFileName
var objectConfigFileName = objectConfigFileName
var templateFileName = templateFileName
var dataFileName = dataFileName
this.setName(name)
this.setObjectFile(objectFileName)
this.setObjectConfigFile(objectConfigFileName)
this.setTemplateFile(templateFileName)
this.setDataFile(dataFileName)
}


                @Throws(Exception::class)
            
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
        
        

append("TransformInfo properties overridden for: ")
append(this.getName())
append("\n properties: ")
append(hashMap!.toString())
put(stringBuffer!.toString(), this, "override(HashMap hashMap)")

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
        
        

append(URLGLOBALS.getMainPath())
append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)
append(this.storeName)
append(AbPathData.getInstance()!.SEPARATOR)

    var fileAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    var aObject: string = hashMap!.get(transformInfoData!.OBJECT) as String;
        
        


    
                        if(!stringValidationUtil!.isEmpty(aObject))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("TransformInfo override view Object for: " +this.getName(), this, "override(HashMap hashMap)")

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
                                    put("TransformInfo override ObjectConfig for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                
this.setObjectConfig(hashMap!.get(transformInfoData!.OBJECTCONFIG) as String)

                                    }
                                

    var objectConfigFileName: string = hashMap!.get(transformInfoData!.OBJECTCONFIGFILENAME) as String;
        
        


    
                        if(!stringValidationUtil!.isEmpty(objectConfigFileName))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    put("TransformInfo override ObjectConfig File for: " +this.getName(), this, "override(HashMap hashMap)")

                                    }
                                
this.setObjectConfigFile(objectConfigFileName)

                                    }
                                

    var type: string = hashMap!.get(OutputTypeData.getInstance()!.NAME) as String;
        
        


    
                        if(!stringValidationUtil!.isEmpty(type))
                        
                                    {
                                    
    
                        if(this.getObjectConfigInterface() == 
                                    null
                                )
                        
                                    {
                                    this.setObjectConfigInterface(TransformInfoObjectConfig(this))

                                    }
                                
setOutputTypeName(type)

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
                                    put("TransformInfo override Template for: " +this.getName(), this, "override(HashMap hashMap)")

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
                                    put("TransformInfo override Data for: " +this.getName(), this, "override(HashMap hashMap)")

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
append("Name: ")
append(aName)
append("\nTemp Object File: ")
append(aObject)
append("\nTemp Object Config File: ")
append(this.getObjectConfigFilePath()!.toString())
append("\nTemp Template File: ")
append(aTemplate)
append("\nTemp Data File: ")
append(aData)
append("\nStore Name: ")
append(aStoreName)
append("\nObjectFile: ")
append(this.getObjectFile())
append("->TransformInfo")
put(stringBuffer!.toString(), this, "TransformInfoInterface(HashMap)")

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put(this.log(), this, "override")

                                    }
                                
}


    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Name: ")
append(this.name)
append("\nObject File: ")
append(this.objectFileName)
append("\nObject Config File Path: ")
append(this.getObjectConfigFile())
append("\nTemplate File: ")
append(this.templateFileName)
append("\nData File: ")
append(this.dataFileName)
append("\nStore Name: ")
append(this.storeName)
append(CommonSeps.getInstance()!.NEW_LINE)
append(this.getObjectFile())
append("->TransformInfo")
append("TransformInfoInterface(HashMap)")



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


                @Throws(Exception::class)
            
    setObjectConfigFileName(value: string){
var value = value
this.objectConfigFileName= value
}


                @Throws(Exception::class)
            
    setObjectConfigFile(value: string){
var value = value
this.objectConfigFileName= value
this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(abeClientInformation, this, this.getObjectConfigFilePath()))
}


                @Throws(Exception::class)
            
    setObjectConfig(value: string){
var value = value

    var document: Document = DomDocumentHelper.create(value)!;
        
        

this.setObjectConfigInterface(TransformInfoObjectConfigAndManipulatorFactory.getInstance()!.getInstance(abeClientInformation, this, document))
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


                @Throws(Exception::class)
            
    public getTemplateFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFilePath(this.getTemplateFile());
    
}


                @Throws(Exception::class)
            
    public getObjectConfigFilePath(): AbPath{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFilePath(this.getObjectConfigFile());
    
}


                @Throws(Exception::class)
            
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
                                    put("Data File overriding existing data: " +this.getDataFilePath(), this, "getData()")

                                    }
                                

                                    }
                                
this.data= fileData
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Could Not Load Data from: " +this.getDataFile(), this, "getData()", e)

                                    }
                                
}


                                    }
                                

        try {
            
    
                        if(!stringValidationUtil!.isEmpty(this.data))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Data: " +DomDocumentHelper.toString(DomDocumentHelper.create(data)), this, "getData()")

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Name: ")
append(this.name)
append("\nEmpty Data For: ")
append(dataFileString)
append("\nPath: ")
append(this.getDataFilePath()!.toFileSystemString())

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put(stringBuffer!.toString(), this, "getData()")

                                    }
                                

                                    }
                                

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("Could Not Preview Data: " +this.data, this, "getData()", e)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.data;
    
}


                @Throws(Exception::class)
            
    public getDataDocument(): Document{

    var localData: string = this.getData()!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(stringValidationUtil!.isEmpty(localData))
                        
                                    {
                                    
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    put("No Data So Creating New Document", this, "getDataDocument()")

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
        
        

put(transformInfoData!.NAME, this.name)
put(StoreFrontData.getInstance()!.NAME, this.storeName)
put(transformInfoData!.OBJECTFILENAME, this.objectFileName)
put(transformInfoData!.OBJECT, this.anyType)
put(transformInfoData!.OBJECTCONFIGFILENAME, this.getObjectConfigFile())
put(transformInfoData!.OBJECTCONFIG, Encoder.encode(this.getObjectConfigInterface()!.toString()!.encodeToByteArray()))
put(transformInfoData!.TEMPLATEFILENAME, this.templateFileName)
put(transformInfoData!.TEMPLATE, this.template)
put(transformInfoData!.DATAFILENAME, this.dataFileName)
put(transformInfoData!.DATA, Encoder.encode(this.data.encodeToByteArray()))

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toVector(): java.util.Vector{

    var vector: Vector = new Vector();
        
        

add(this.name)
add(this.storeName)
add(this.objectFileName)
add(this.anyType)
add(this.getObjectConfigFile())
add(Encoder.encode(this.getObjectConfigInterface()!.toString()!.encodeToByteArray()))
add(this.templateFileName)
add(this.template)
add(this.dataFileName)
add(Encoder.encode(this.data.encodeToByteArray()))

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

add(time)
add(time)



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
                
            

