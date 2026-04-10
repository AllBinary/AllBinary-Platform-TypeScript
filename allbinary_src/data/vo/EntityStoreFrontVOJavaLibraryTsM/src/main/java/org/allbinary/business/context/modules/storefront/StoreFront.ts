
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

    
import { HttpServletRequest } from "../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { ContextConfiguration } from "../../../../../../org/allbinary/business/context/configuration/ContextConfiguration.js";

    
import { ContextConfigurationDomDocumentMapping } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationDomDocumentMapping.js";

    
import { ContextConfigurationInterface } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterface.js";

    
import { ContextConfigurationInterfaceFactory } from "../../../../../../org/allbinary/business/context/configuration/ContextConfigurationInterfaceFactory.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../../org/allbinary/business/user/UserData.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { RequestParams } from "../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { Directory } from "../../../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { AbPathUtil } from "../../../../../../org/allbinary/logic/io/path/AbPathUtil.js";

    
import { SpecialCharacterUtil } from "../../../../../../org/allbinary/logic/string/SpecialCharacterUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Replace } from "../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { Tokenizer } from "../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { StringEscapeUtils } from "../../../../../../org/apache/commons/lang3/StringEscapeUtils.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

export class StoreFront
            extends Object
        
                , StoreFrontInterface {
        

    private static readonly RESOURCES: string = " Resources" +AbPathData.getInstance()!.SEPARATOR;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly directory: Directory = Directory.getInstance()!;
        
        

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private readonly abPathUtil: AbPathUtil = AbPathUtil.getInstance()!;
        
        

    private name: string = stringUtil!.EMPTY_STRING;
        
        

    private basketName: string = stringUtil!.EMPTY_STRING;
        
        

    private homeHostName: string = stringUtil!.EMPTY_STRING;
        
        

    private homeHostNamePath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private hostName: string = stringUtil!.EMPTY_STRING;
        
        

    private hostNamePath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private testHomeHostName: string = stringUtil!.EMPTY_STRING;
        
        

    private testHomeHostNamePath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private testHostName: string = stringUtil!.EMPTY_STRING;
        
        

    private testHostNamePath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private imagePath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private staticPath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private categoryPath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private inventoryControl: string = stringUtil!.EMPTY_STRING;
        
        

    private contextConfigurationInterface: ContextConfigurationInterface

    private subStores: string = stringUtil!.EMPTY_STRING;
        
        

    private tagLocation: string = stringUtil!.EMPTY_STRING;
        
        

    private packageLocation: string = stringUtil!.EMPTY_STRING;
        
        

    private ftp: string = stringUtil!.EMPTY_STRING;
        
        

    private ftpPath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private ftpUserName: string = stringUtil!.EMPTY_STRING;
        
        

    private ftpPassword: string = stringUtil!.EMPTY_STRING;
        
        

    private testFtp: string = stringUtil!.EMPTY_STRING;
        
        

    private testFtpPath: AbPath = abPathUtil!.NO_ABPATH;
        
        

    private testFtpUserName: string = stringUtil!.EMPTY_STRING;
        
        

    private testFtpPassword: string = stringUtil!.EMPTY_STRING;
        
        

    private timeCreated: string = stringUtil!.EMPTY_STRING;
        
        

    private lastModified: string = stringUtil!.EMPTY_STRING;
        
        

    private readonly MINCHAR: number = 0;
        
        

    private readonly MINSTORENAMELENGTH: number = 1;
        
        

    private readonly MAXCHAR: number = 255;
        
        

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly ONE_EMPTY_STRING_ARRAY: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
        
        
public constructor (){

            super();
            this.contextConfigurationInterface= ContextConfiguration()
}

public constructor (request: HttpServletRequest){

            super();
                //var request = request
this.getFormData(RequestParams(request).
                            toHashMap())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("TWB- needs update for adding and updating context configuration - currently defaults to admin context config", this, "StoreFront")

                                    }
                                
this.setContextConfigurationInterface(ContextConfigurationInterfaceFactory.getInstance()!.getInstance("Admin"))
}

public constructor (hashMap: HashMap<Any, Any>){

            super();
                //var hashMap = hashMap
this.getFormData(hashMap)

    var domDocumentString: string = hashMap!.get(StoreFrontData.getInstance()!.CONFIGURATION) as String;
        
        


                        if(domDocumentString == 
                                    null
                                )
                        
                                    {
                                    
    var document: Document = DomDocumentHelper.create(domDocumentString)!;
        
        

this.setContextConfigurationInterface(ContextConfigurationInterfaceFactory.getInstance()!.getInstance(document))

                                    }
                                
}


    isColumn(columnName: string): boolean{
var columnName = columnName

                        if(columnName!.compareTo(StoreFrontData.getInstance()!.NAME) == 0 || columnName!.compareTo(UserData.MAINEMAIL) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Error::class)
            
    createPath(key: string, hashMap: HashMap<Any, Any>): AbPath{
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.create(EMPTY_STRING, key, hashMap));
    
}


                //@Throws(Error::class)
            
    createPath(append: string, key: string, hashMap: HashMap<Any, Any>): AbPath{
var append = append
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbPath(this.create(append, key, hashMap));
    
}


    get(key: string, hashMap: HashMap<Any, Any>): string{
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.create(EMPTY_STRING, key, hashMap);
    
}


    create(append: string, key: string, hashMap: HashMap<Any, Any>): string{
var append = append
var key = key
var hashMap = hashMap

    var path: string = hashMap!.get(key as Object) as String;
        
        


                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_STRING;
    

                                    }
                                
                        else {
                            
                        if(this.isColumn(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap!.get(path as Object) as String +append;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    

                        }
                            

                        }
                            
}


                //@Throws(Error::class)
            
    getFormData(storeHashMap: HashMap<Any, Any>){
var storeHashMap = storeHashMap

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        

this.name= storeHashMap!.get(storeFrontData!.NAME) as String
this.basketName= storeHashMap!.get(storeFrontData!.NAME) as String
this.homeHostName= storeHashMap!.get(storeFrontData!.HOMEHOSTNAME) as String
this.homeHostNamePath= this.createPath(storeFrontData!.HOMEHOSTNAMEPATH, storeHashMap)
this.hostName= storeHashMap!.get(storeFrontData!.HOSTNAME) as String
this.hostNamePath= this.createPath(storeFrontData!.HOSTNAMEPATH, storeHashMap)
this.testHomeHostName= storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAME) as String
this.testHomeHostNamePath= this.createPath(storeFrontData!.TESTHOMEHOSTNAMEPATH, storeHashMap)
this.testHostName= storeHashMap!.get(storeFrontData!.TESTHOSTNAME) as String
this.testHostNamePath= this.createPath(storeFrontData!.TESTHOSTNAMEPATH, storeHashMap)
this.imagePath= this.createPath(RESOURCES, storeFrontData!.IMAGEPATH, storeHashMap)
this.staticPath= this.createPath(" Products" +AbPathData.getInstance()!.SEPARATOR, storeFrontData!.STATICPATH, storeHashMap)
this.categoryPath= this.createPath(RESOURCES, storeFrontData!.CATEGORYPATH, storeHashMap)
this.inventoryControl= storeHashMap!.get(storeFrontData!.INVENTORYCONTROL) as String
this.subStores= storeHashMap!.get(storeFrontData!.SUBSTORES) as String
this.tagLocation= storeHashMap!.get(storeFrontData!.TAGLOCATION) as String
this.packageLocation= storeHashMap!.get(storeFrontData!.PACKAGELOCATION) as String
this.ftp= storeHashMap!.get(storeFrontData!.FTP) as String
this.ftpPath= this.createPath(storeFrontData!.FTPPATH, storeHashMap)
this.ftpUserName= storeHashMap!.get(storeFrontData!.FTPUSERNAME) as String
this.ftpPassword= storeHashMap!.get(storeFrontData!.FTPPASSWORD) as String
this.testFtp= storeHashMap!.get(storeFrontData!.TESTFTP) as String
this.testFtpPath= this.createPath(storeFrontData!.TESTFTPPATH, storeHashMap)
this.testFtpUserName= storeHashMap!.get(storeFrontData!.TESTFTPUSERNAME) as String
this.testFtpPassword= storeHashMap!.get(storeFrontData!.TESTFTPPASSWORD) as String
this.timeCreated= storeHashMap!.get(EntryData.getInstance()!.TIMECREATED) as String
this.lastModified= storeHashMap!.get(EntryData.getInstance()!.LASTMODIFIED) as String
}


    public isNameValid(): Boolean{

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.name, MINSTORENAMELENGTH, MAXCHAR))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var isEscapedCharactersContained: boolean = false;
        
        


    var storeNameEscaped: string = StringEscapeUtils.escapeHtml3(this.name)!;
        
        


                        if(this.name.compareTo(storeNameEscaped) != 0)
                        
                                    {
                                    isEscapedCharactersContained= true

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var isSpacesContained: boolean = false;
        
        


                        if(stringValidationUtil!.containsSpaces(this.name))
                        
                                    {
                                    isSpacesContained= true

                                    }
                                

                        if(isSpacesContained || isEscapedCharactersContained)
                        
                                    {
                                    
    var hashMap: HashMap<Any, Any> = SpecialCharacterUtil.getHashMap()!;
        
        

hashMap!.put(
                                                [
                                                    CommonSeps.getInstance()!.SPACE;
        
        
                                                ], ONE_EMPTY_STRING_ARRAY)
this.name= Replace(hashMap).
                            all(this.name)

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public isValid(): Boolean{

    var valid: Boolean = Boolean.TRUE;
        
        

valid= this.isNameValid()

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(!stringValidationUtil!.isValidRequired(this.basketName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.homeHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.homeHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.imagePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.categoryPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryControl, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.subStores, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.tagLocation, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.packageLocation, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftp, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpUserName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPassword, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtp, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpUserName, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPassword, MINCHAR, MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE

                                    }
                                

                        if(valid == true)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
}


    public nameValidationInfo(): string{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


                        if(!stringValidationUtil!.isValidRequired(this.name, MINCHAR, MAXCHAR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Name is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_STRING;
    
}


    public validationInfo(): string{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(this.nameValidationInfo())

                        if(!stringValidationUtil!.isValidRequired(this.basketName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Basket name is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.homeHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Home host name is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.homeHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Home host name path is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Host name is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Host name path is invalid. Must be < ")
stringBuffer!.appendint(MAXCHAR)
stringBuffer!.append(" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test home host name is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test home host name path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test host name is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostNamePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test host name path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.imagePath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Image path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Static path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.categoryPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Category path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryControl, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Inventory control is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.subStores, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Sub stores is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.tagLocation, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Tag location is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.packageLocation, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Package location is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftp, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpUserName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp username is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPassword, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp password is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtp, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPath!.toString(), MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp Path is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpUserName, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp username is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPassword, MINCHAR, MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp password is invalid. Must be < " +MAXCHAR +" and > 0 characters.<br>")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.URLGLOBALS.getTestHtmlPath() +this.getCurrentHostNamePath();
    
}


    public getCurrentHostName(): string{

    var location: string = EMPTY_STRING;
        
        


                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostName()

                                    }
                                
                        else {
                            location= this.getHostName()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHostNamePath(): string{

    var location: string = EMPTY_STRING;
        
        


                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostNamePath()

                                    }
                                
                        else {
                            location= this.getHostNamePath()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostName(): string{

    var location: string = EMPTY_STRING;
        
        


                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostName()

                                    }
                                
                        else {
                            location= this.getHomeHostName()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostNamePath(): string{

    var location: string = EMPTY_STRING;
        
        


                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostNamePath()

                                    }
                                
                        else {
                            location= this.getHomeHostNamePath()

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getBasketName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basketName;
    
}


    public getHomeHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.homeHostName;
    
}


    public getHomeHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.homeHostNamePath!.toString();
    
}


    public getHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostName;
    
}


    public getHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostNamePath!.toString();
    
}


    public getTestHomeHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostName;
    
}


    public getTestHomeHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostNamePath!.toString();
    
}


    public getTestHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostName;
    
}


    public getTestHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostNamePath!.toString();
    
}


    public getStaticPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.staticPath!.toString();
    
}


    public getCategoryPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPath!.toString();
    
}


    public getInventoryControl(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inventoryControl;
    
}


                //@Throws(Error::class)
            
    public getSubStores(): BasicArrayList{

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SEMICOLON);
        
        


    var subStoreVector: BasicArrayList = tokenizer.getTokens(this.subStores, BasicArrayList())!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subStoreVector;
    
} catch(e: Exception)
            {



                            throw e
}

}


    public getTagLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tagLocation;
    
}


    public getPackageLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.packageLocation;
    
}


    public getFtp(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftp;
    
}


    public getFtpUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpUserName;
    
}


    public getFtpPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPassword;
    
}


    public getTestFtp(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtp;
    
}


    public getTestFtpUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpUserName;
    
}


    public getTestFtpPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpPassword;
    
}


    public getFtpPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPath!.toString();
    
}


    public getTestFtpPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpPath!.toString();
    
}


    public getTimeCreated(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeCreated;
    
}


    public getLastModified(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastModified;
    
}


    public setName(value: string){
var value = value
this.name= value
}


    public setBasketName(value: string){
var value = value
this.basketName= value
}


    public setHomeHostName(value: string){
var value = value
this.homeHostName= value
}


                //@Throws(Error::class)
            
    public setHomeHostNamePath(value: string){
var value = value
this.homeHostNamePath= AbPath(value)
}


    public setHostName(value: string){
var value = value
this.hostName= value
}


                //@Throws(Error::class)
            
    public setHostNamePath(value: string){
var value = value
this.hostNamePath= AbPath(value)
}


    public setTestHomeHostName(value: string){
var value = value
this.testHomeHostName= value
}


                //@Throws(Error::class)
            
    public setTestHomeHostNamePath(value: string){
var value = value
this.testHomeHostNamePath= AbPath(value)
}


    public setTestHostName(value: string){
var value = value
this.testHostName= value
}


                //@Throws(Error::class)
            
    public setTestHostNamePath(value: string){
var value = value
this.testHostNamePath= AbPath(value)
}


                //@Throws(Error::class)
            
    public setImagePath(value: string){
var value = value
this.imagePath= AbPath(value)
}


                //@Throws(Error::class)
            
    public setStaticPath(value: string){
var value = value
this.staticPath= AbPath(value)
}


                //@Throws(Error::class)
            
    public setCategoryPath(value: string){
var value = value
this.categoryPath= AbPath(value)
}


    public setSubStores(value: string){
var value = value
this.subStores= value
}


    public setTagLocation(value: string){
var value = value
this.tagLocation= value
}


    public setPackageLocation(value: string){
var value = value
this.packageLocation= value
}


    public setInventoryControl(value: string){
var value = value
this.inventoryControl= value
}


    public getPackageLocation(value: string){
var value = value
this.packageLocation= value
}


    public setFtp(value: string){
var value = value
this.ftp= value
}


    public setFtpUserName(value: string){
var value = value
this.ftpUserName= value
}


    public setFtpPassword(value: string){
var value = value
this.ftpPassword= value
}


    public setTestFtp(value: string){
var value = value
this.testFtp= value
}


    public setTestFtpUserName(value: string){
var value = value
this.testFtpUserName= value
}


    public setTestFtpPassword(value: string){
var value = value
this.testFtpPassword= value
}


    public setTimeCreated(value: string){
var value = value
this.timeCreated= value
}


    public setLastModified(value: string){
var value = value
this.lastModified= value
}


                //@Throws(Error::class)
            
    public setFtpPath(value: string){
    //var value = value
this.ftpPath= AbPath(value)
}


                //@Throws(Error::class)
            
    public setTestFtpPath(value: string){
    //var value = value
this.testFtpPath= AbPath(value)
}


                //@Throws(Error::class)
            
    createDirectories(): boolean{

    var storeAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.getCurrentHomeHostNamePath());
        
        


                        if(!this.directory.create(storeAbPath))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.directory.create(AbPath(storeAbPath +this.getCategoryPath())))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.directory.create(AbPath(storeAbPath +this.getStaticPath())))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public install(current: number, total: number){
    //var current = current
    //var total = total

        try {
            
                        if(!this.createDirectories())
                        
                                    {
                                    


                            throw Error("Unable to create store directories")

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(URLGLOBALS.getMainPath())
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH)

    var viewPath: string = stringBuffer!.toString()!;
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(viewPath)
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.INSTALLPATH)

    var fromDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(viewPath)
stringBuffer!.append("special")
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var fromSpecialDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(viewPath)
stringBuffer!.append(this.getName())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var toDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


                        if(current == 0)
                        
                                    {
                                    
                        if(!this.directory.create(toDirectoryAbPath))
                        
                                    {
                                    


                            throw Error("Unable to create store view directory: " +toDirectoryAbPath!.toString())

                                    }
                                

                                    }
                                

    var viewTotal: number = (total *85) /100;
        
        


    var installTotal: number = (total *93) /100;
        
        


                        if(current < viewTotal)
                        
                                    {
                                    
    var file: AbFile = new AbFile(fromSpecialDirectoryAbPath);
        
        


                        if(file.isDirectory())
                        
                                    {
                                    
    var halfViewTotal: number = viewTotal /2;
        
        


                        if(current < halfViewTotal)
                        
                                    {
                                    this.installViews(fromSpecialDirectoryAbPath, toDirectoryAbPath, current, halfViewTotal)

                                    }
                                
                             else 
                        if(current < viewTotal)
                        
                                    {
                                    this.installViews(fromDirectoryAbPath, toDirectoryAbPath, current -halfViewTotal, viewTotal -halfViewTotal)

                                    }
                                

                                    }
                                
                        else {
                            this.installViews(fromDirectoryAbPath, toDirectoryAbPath, current, viewTotal)

                        }
                            

                                    }
                                
                             else 
                        if(current < installTotal)
                        
                                    {
                                    this.installResources(fromDirectoryAbPath, current -viewTotal, installTotal -viewTotal)

                                    }
                                
                        else {
                            this.installMedia(fromDirectoryAbPath, current -installTotal, total -installTotal)

                        }
                            
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "install()", e)

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    installViews(fromDirectoryAbPath: AbPath, toDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var toDirectoryAbPath = toDirectoryAbPath
    //var current = current
    //var total = total
FileUtil.getInstance()!.copyDirectoryPortion(fromDirectoryAbPath, toDirectoryAbPath, true, false, current, total)
}


                //@Throws(Error::class)
            
    installResources(fromDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var current = current
    //var total = total

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(fromDirectoryAbPath!.toString())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)
stringBuffer!.append("Resources")
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var installCategoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(URLGLOBALS.getMainPath())
stringBuffer!.append(this.getCurrentHomeHostNamePath())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)
stringBuffer!.append(this.getCategoryPath())

    var categoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        

FileUtil.getInstance()!.copyDirectoryPortion(installCategoryAbPath, categoryAbPath, true, false, current, total)
}


                //@Throws(Error::class)
            
    installMedia(fromDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var current = current
    //var total = total

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(fromDirectoryAbPath!.toString())
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.TEMPLATEPATH)
stringBuffer!.append("images")
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR)

    var viewStoreImagesDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    var storeAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.getCurrentHomeHostNamePath());
        
        

FileUtil.getInstance()!.copyDirectoryPortion(viewStoreImagesDirectoryAbPath, storeAbPath, true, false, current, total)
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var dataVector: Vector = new Vector();
        
        

dataVector!.add(this.name)
dataVector!.add(this.homeHostName)
dataVector!.add(this.homeHostNamePath!.toString())
dataVector!.add(this.hostName)
dataVector!.add(this.hostNamePath!.toString())
dataVector!.add(this.testHomeHostName)
dataVector!.add(this.testHomeHostNamePath!.toString())
dataVector!.add(this.testHostName)
dataVector!.add(this.testHostNamePath!.toString())
dataVector!.add(this.imagePath!.toString())
dataVector!.add(this.staticPath!.toString())
dataVector!.add(this.categoryPath!.toString())
dataVector!.add(this.inventoryControl)

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());
        
        

dataVector!.add(contextConfigurationDomDocumentMapping!.toDomDocumentString())
dataVector!.add(this.subStores)
dataVector!.add(this.tagLocation)
dataVector!.add(this.packageLocation)
dataVector!.add(this.ftp)
dataVector!.add(this.ftpPath!.toString())
dataVector!.add(this.ftpUserName)
dataVector!.add(this.ftpPassword)
dataVector!.add(this.testFtp)
dataVector!.add(this.testFtpPath!.toString())
dataVector!.add(this.testFtpUserName)
dataVector!.add(this.testFtpPassword)

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

dataVector!.add(time)
dataVector!.add(time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dataVector;
    
}


                //@Throws(Error::class)
            
    public toHashMap(): HashMap<Any, Any>{

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        


    var dataHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

dataHashMap!.put(storeFrontData!.NAME, this.name)
dataHashMap!.put(storeFrontData!.HOMEHOSTNAME, this.homeHostName)
dataHashMap!.put(storeFrontData!.HOMEHOSTNAMEPATH, this.homeHostNamePath!.toString())
dataHashMap!.put(storeFrontData!.HOSTNAME, this.hostName)
dataHashMap!.put(storeFrontData!.HOSTNAMEPATH, this.hostNamePath!.toString())
dataHashMap!.put(storeFrontData!.TESTHOMEHOSTNAME, this.testHomeHostName)
dataHashMap!.put(storeFrontData!.TESTHOMEHOSTNAMEPATH, this.testHomeHostNamePath!.toString())
dataHashMap!.put(storeFrontData!.TESTHOSTNAME, this.testHostName)
dataHashMap!.put(storeFrontData!.TESTHOSTNAMEPATH, this.testHostNamePath!.toString())
dataHashMap!.put(storeFrontData!.IMAGEPATH, this.imagePath!.toString())
dataHashMap!.put(storeFrontData!.STATICPATH, this.staticPath!.toString())
dataHashMap!.put(storeFrontData!.CATEGORYPATH, this.categoryPath!.toString())
dataHashMap!.put(storeFrontData!.INVENTORYCONTROL, this.inventoryControl)

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());
        
        

dataHashMap!.put(storeFrontData!.CONFIGURATION, contextConfigurationDomDocumentMapping!.toDomDocumentString())
dataHashMap!.put(storeFrontData!.SUBSTORES, this.subStores)
dataHashMap!.put(storeFrontData!.TAGLOCATION, this.tagLocation)
dataHashMap!.put(storeFrontData!.PACKAGELOCATION, this.packageLocation)
dataHashMap!.put(storeFrontData!.FTP, this.ftp)
dataHashMap!.put(storeFrontData!.FTPPATH, this.ftpPath!.toString())
dataHashMap!.put(storeFrontData!.FTPUSERNAME, this.ftpUserName)
dataHashMap!.put(storeFrontData!.FTPPASSWORD, this.ftpPassword)
dataHashMap!.put(storeFrontData!.TESTFTP, this.testFtp)
dataHashMap!.put(storeFrontData!.TESTFTPPATH, this.testFtpPath!.toString())
dataHashMap!.put(storeFrontData!.TESTFTPUSERNAME, this.testFtpUserName)
dataHashMap!.put(storeFrontData!.TESTFTPPASSWORD, this.testFtpPassword)

    var calendar: Calendar = Calendar.getInstance()!;
        
        


    var time: string = new calendar.getTimeInMillis() as Long.
                            toString().toCharArray().concatToString()
                                ;
        
        

dataHashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dataHashMap;
    
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName() as Object;
    
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return contextConfigurationInterface;
    
}


    public setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface){
    //var contextConfigurationInterface = contextConfigurationInterface
this.contextConfigurationInterface= contextConfigurationInterface
}


}
                
            

