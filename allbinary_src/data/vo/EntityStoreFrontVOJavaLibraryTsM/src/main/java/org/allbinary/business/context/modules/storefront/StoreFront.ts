
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
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
            import { Long } from "../../../../../../java/lang/Long.js";
        
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

    
import { BasicArrayListD } from "../../../../../../org/allbinary/util/BasicArrayListD.js";

    
import { StringEscapeUtils } from "../../../../../../org/apache/commons/lang3/StringEscapeUtils.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StoreFrontInterface } from "./StoreFrontInterface.js";
import { StoreFrontData } from "./StoreFrontData.js";

export class StoreFront
            extends Object
         implements StoreFrontInterface {
        

    private static readonly RESOURCES: string = " Resources" +AbPathData.getInstance()!.SEPARATOR;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly directory: Directory = Directory.getInstance()!;

    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private readonly abPathUtil: AbPathUtil = AbPathUtil.getInstance()!;

    private name: string = this.stringUtil!.EMPTY_STRING;

    private basketName: string = this.stringUtil!.EMPTY_STRING;

    private homeHostName: string = this.stringUtil!.EMPTY_STRING;

    private homeHostNamePath: AbPath = this.abPathUtil!.NO_ABPATH;

    private hostName: string = this.stringUtil!.EMPTY_STRING;

    private hostNamePath: AbPath = this.abPathUtil!.NO_ABPATH;

    private testHomeHostName: string = this.stringUtil!.EMPTY_STRING;

    private testHomeHostNamePath: AbPath = this.abPathUtil!.NO_ABPATH;

    private testHostName: string = this.stringUtil!.EMPTY_STRING;

    private testHostNamePath: AbPath = this.abPathUtil!.NO_ABPATH;

    private imagePath: AbPath = this.abPathUtil!.NO_ABPATH;

    private staticPath: AbPath = this.abPathUtil!.NO_ABPATH;

    private categoryPath: AbPath = this.abPathUtil!.NO_ABPATH;

    private inventoryControl: string = this.stringUtil!.EMPTY_STRING;

    private contextConfigurationInterface: ContextConfigurationInterface

    private subStores: string = this.stringUtil!.EMPTY_STRING;

    private tagLocation: string = this.stringUtil!.EMPTY_STRING;

    private packageLocation: string = this.stringUtil!.EMPTY_STRING;

    private ftp: string = this.stringUtil!.EMPTY_STRING;

    private ftpPath: AbPath = this.abPathUtil!.NO_ABPATH;

    private ftpUserName: string = this.stringUtil!.EMPTY_STRING;

    private ftpPassword: string = this.stringUtil!.EMPTY_STRING;

    private testFtp: string = this.stringUtil!.EMPTY_STRING;

    private testFtpPath: AbPath = this.abPathUtil!.NO_ABPATH;

    private testFtpUserName: string = this.stringUtil!.EMPTY_STRING;

    private testFtpPassword: string = this.stringUtil!.EMPTY_STRING;

    private timeCreated: string = this.stringUtil!.EMPTY_STRING;

    private lastModified: string = this.stringUtil!.EMPTY_STRING;

    private readonly MINCHAR: number = 0;

    private readonly MINSTORENAMELENGTH: number = 1;

    private readonly MAXCHAR: number = 255;

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private readonly ONE_EMPTY_STRING_ARRAY: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
public constructor (){

            super();
        this.contextConfigurationInterface= new ContextConfiguration();
    
}

public constructor (request: HttpServletRequest){

            super();
            //var request = request
this.getFormData(new RequestParams(request).
                            toHashMap());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("TWB- needs update for adding and updating context configuration - currently defaults to admin context config", this, "StoreFront");
    

                                    }
                                
this.setContextConfigurationInterface(ContextConfigurationInterfaceFactory.getInstance()!.getInstance("Admin"));
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
            //var hashMap = hashMap
this.getFormData(hashMap);
    

    var domDocumentString: string = hashMap!.get(StoreFrontData.getInstance()!.CONFIGURATION) as string;
;
    

                        if(domDocumentString == 
                                    null
                                )
                        
                                    {
                                    
    var document: Document = DomDocumentHelper.create(domDocumentString)!;
;
    
this.setContextConfigurationInterface(ContextConfigurationInterfaceFactory.getInstance()!.getInstance(document));
    

                                    }
                                
}


    isColumn(columnName: string): boolean{
var columnName = columnName

                        if(columnName!.localeCompare(StoreFrontData.getInstance()!.NAME) == 0 || columnName!.localeCompare(UserData.MAINEMAIL) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    createPath(key: string, hashMap: HashMap<any, any>): AbPath{
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(this.create(this.EMPTY_STRING, key, hashMap));
    
}


                //@Throws(Exception.constructor)
            
    createPath(append: string, key: string, hashMap: HashMap<any, any>): AbPath{
var append = append
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(this.create(append, key, hashMap));
    
}


    get(key: string, hashMap: HashMap<any, any>): string{
var key = key
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.create(this.EMPTY_STRING, key, hashMap);;
    
}


    create(append: string, key: string, hashMap: HashMap<any, any>): string{
var append = append
var key = key
var hashMap = hashMap

    var path: string = hashMap!.get(key as Object) as string;
;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EMPTY_STRING;
    

                                    }
                                
                        else {
                            
                        if(this.isColumn(path))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap!.get(path as Object) as string +append;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    

                        }
                            

                        }
                            
}


                //@Throws(Exception.constructor)
            
    getFormData(storeHashMap: HashMap<any, any>){
var storeHashMap = storeHashMap

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
;
    
this.name= storeHashMap!.get(storeFrontData!.NAME) as string;
    
this.basketName= storeHashMap!.get(storeFrontData!.NAME) as string;
    
this.homeHostName= storeHashMap!.get(storeFrontData!.HOMEHOSTNAME) as string;
    
this.homeHostNamePath= this.createPath(storeFrontData!.HOMEHOSTNAMEPATH, storeHashMap);
    
this.hostName= storeHashMap!.get(storeFrontData!.HOSTNAME) as string;
    
this.hostNamePath= this.createPath(storeFrontData!.HOSTNAMEPATH, storeHashMap);
    
this.testHomeHostName= storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAME) as string;
    
this.testHomeHostNamePath= this.createPath(storeFrontData!.TESTHOMEHOSTNAMEPATH, storeHashMap);
    
this.testHostName= storeHashMap!.get(storeFrontData!.TESTHOSTNAME) as string;
    
this.testHostNamePath= this.createPath(storeFrontData!.TESTHOSTNAMEPATH, storeHashMap);
    
this.imagePath= this.createPath(StoreFront.RESOURCES, storeFrontData!.IMAGEPATH, storeHashMap);
    
this.staticPath= this.createPath(" Products" +AbPathData.getInstance()!.SEPARATOR, storeFrontData!.STATICPATH, storeHashMap);
    
this.categoryPath= this.createPath(StoreFront.RESOURCES, storeFrontData!.CATEGORYPATH, storeHashMap);
    
this.inventoryControl= storeHashMap!.get(storeFrontData!.INVENTORYCONTROL) as string;
    
this.subStores= storeHashMap!.get(storeFrontData!.SUBSTORES) as string;
    
this.tagLocation= storeHashMap!.get(storeFrontData!.TAGLOCATION) as string;
    
this.packageLocation= storeHashMap!.get(storeFrontData!.PACKAGELOCATION) as string;
    
this.ftp= storeHashMap!.get(storeFrontData!.FTP) as string;
    
this.ftpPath= this.createPath(storeFrontData!.FTPPATH, storeHashMap);
    
this.ftpUserName= storeHashMap!.get(storeFrontData!.FTPUSERNAME) as string;
    
this.ftpPassword= storeHashMap!.get(storeFrontData!.FTPPASSWORD) as string;
    
this.testFtp= storeHashMap!.get(storeFrontData!.TESTFTP) as string;
    
this.testFtpPath= this.createPath(storeFrontData!.TESTFTPPATH, storeHashMap);
    
this.testFtpUserName= storeHashMap!.get(storeFrontData!.TESTFTPUSERNAME) as string;
    
this.testFtpPassword= storeHashMap!.get(storeFrontData!.TESTFTPPASSWORD) as string;
    
this.timeCreated= storeHashMap!.get(EntryData.getInstance()!.TIMECREATED) as string;
    
this.lastModified= storeHashMap!.get(EntryData.getInstance()!.LASTMODIFIED) as string;
    
}


    public isNameValid(): Boolean{

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.name, this.MINSTORENAMELENGTH, this.MAXCHAR))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                
                        else {
                            
    var isEscapedCharactersContained: boolean = false;
;
    

    var storeNameEscaped: string = StringEscapeUtils.escapeHtml3(this.name)!;
;
    

                        if(this.name.localeCompare(storeNameEscaped) != 0)
                        
                                    {
                                    isEscapedCharactersContained= true;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

    var isSpacesContained: boolean = false;
;
    

                        if(stringValidationUtil!.containsSpaces(this.name))
                        
                                    {
                                    isSpacesContained= true;
    

                                    }
                                

                        if(isSpacesContained || isEscapedCharactersContained)
                        
                                    {
                                    
    var hashMap: HashMap<any, any> = SpecialCharacterUtil.getHashMap()!;
;
    
hashMap!.put(
                                                [
                                                    CommonSeps.getInstance()!.SPACE;
                                                ], this.ONE_EMPTY_STRING_ARRAY);
    
this.name= new Replace(hashMap).
                            all(this.name);
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public isValid(): Boolean{

    var valid: Boolean = Boolean.TRUE;
;
    
valid= this.isNameValid();
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

                        if(!stringValidationUtil!.isValidRequired(this.basketName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.homeHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.homeHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.imagePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.categoryPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryControl, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.subStores, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.tagLocation, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.packageLocation, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftp, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpUserName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPassword, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtp, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpUserName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPassword, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    valid= Boolean.FALSE;
    

                                    }
                                

                        if(valid.valueOf() == true)
                        
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
;
    

                        if(!stringValidationUtil!.isValidRequired(this.name, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Name is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EMPTY_STRING;
    
}


    public validationInfo(): string{

        try {
            
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
;
    

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(this.nameValidationInfo());
    

                        if(!stringValidationUtil!.isValidRequired(this.basketName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Basket name is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.homeHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Home host name is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.homeHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Home host name path is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Host name is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.hostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Host name path is invalid. Must be < ");
    
stringBuffer!.appendint(this.MAXCHAR);
    
stringBuffer!.append(" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test home host name is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHomeHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test home host name path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test host name is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testHostNamePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test host name path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.imagePath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Image path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.staticPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Static path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.categoryPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Category path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.inventoryControl, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Inventory control is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.subStores, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Sub stores is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.tagLocation, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Tag location is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidRequired(this.packageLocation, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Package location is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftp, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpUserName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp username is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.ftpPassword, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Ftp password is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtp, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPath!.toString(), this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp Path is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpUserName, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp username is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                

                        if(!stringValidationUtil!.isValidNotRequired(this.testFtpPassword, this.MINCHAR, this.MAXCHAR))
                        
                                    {
                                    stringBuffer!.append("Test ftp password is invalid. Must be < " +this.MAXCHAR +" and > 0 characters.<br>");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

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

    var location: string = this.EMPTY_STRING;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostName();
    

                                    }
                                
                        else {
                            location= this.getHostName();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHostNamePath(): string{

    var location: string = this.EMPTY_STRING;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostNamePath();
    

                                    }
                                
                        else {
                            location= this.getHostNamePath();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostName(): string{

    var location: string = this.EMPTY_STRING;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostName();
    

                                    }
                                
                        else {
                            location= this.getHomeHostName();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostNamePath(): string{

    var location: string = this.EMPTY_STRING;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostNamePath();
    

                                    }
                                
                        else {
                            location= this.getHomeHostNamePath();
    

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
                        return this.homeHostNamePath!.toString();;
    
}


    public getHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostName;
    
}


    public getHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostNamePath!.toString();;
    
}


    public getTestHomeHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostName;
    
}


    public getTestHomeHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostNamePath!.toString();;
    
}


    public getTestHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostName;
    
}


    public getTestHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostNamePath!.toString();;
    
}


    public getStaticPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.staticPath!.toString();;
    
}


    public getCategoryPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPath!.toString();;
    
}


    public getInventoryControl(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inventoryControl;
    
}


                //@Throws(Exception.constructor)
            
    public getSubStores(): BasicArrayList{

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SEMICOLON);
;
    

    var subStoreVector: BasicArrayList = tokenizer.getTokens(this.subStores, new BasicArrayListD())!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subStoreVector;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
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
                        return this.ftpPath!.toString();;
    
}


    public getTestFtpPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpPath!.toString();;
    
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
this.name= value;
    
}


    public setBasketName(value: string){
var value = value
this.basketName= value;
    
}


    public setHomeHostName(value: string){
var value = value
this.homeHostName= value;
    
}


                //@Throws(Exception.constructor)
            
    public setHomeHostNamePath(value: string){
var value = value
this.homeHostNamePath= new AbPath(value);
    
}


    public setHostName(value: string){
var value = value
this.hostName= value;
    
}


                //@Throws(Exception.constructor)
            
    public setHostNamePath(value: string){
var value = value
this.hostNamePath= new AbPath(value);
    
}


    public setTestHomeHostName(value: string){
var value = value
this.testHomeHostName= value;
    
}


                //@Throws(Exception.constructor)
            
    public setTestHomeHostNamePath(value: string){
var value = value
this.testHomeHostNamePath= new AbPath(value);
    
}


    public setTestHostName(value: string){
var value = value
this.testHostName= value;
    
}


                //@Throws(Exception.constructor)
            
    public setTestHostNamePath(value: string){
var value = value
this.testHostNamePath= new AbPath(value);
    
}


                //@Throws(Exception.constructor)
            
    public setImagePath(value: string){
var value = value
this.imagePath= new AbPath(value);
    
}


                //@Throws(Exception.constructor)
            
    public setStaticPath(value: string){
var value = value
this.staticPath= new AbPath(value);
    
}


                //@Throws(Exception.constructor)
            
    public setCategoryPath(value: string){
var value = value
this.categoryPath= new AbPath(value);
    
}


    public setSubStores(value: string){
var value = value
this.subStores= value;
    
}


    public setTagLocation(value: string){
var value = value
this.tagLocation= value;
    
}


    public setPackageLocation(value: string){
var value = value
this.packageLocation= value;
    
}


    public setInventoryControl(value: string){
var value = value
this.inventoryControl= value;
    
}


    public getPackageLocation(value: string){
var value = value
this.packageLocation= value;
    
}


    public setFtp(value: string){
var value = value
this.ftp= value;
    
}


    public setFtpUserName(value: string){
var value = value
this.ftpUserName= value;
    
}


    public setFtpPassword(value: string){
var value = value
this.ftpPassword= value;
    
}


    public setTestFtp(value: string){
var value = value
this.testFtp= value;
    
}


    public setTestFtpUserName(value: string){
var value = value
this.testFtpUserName= value;
    
}


    public setTestFtpPassword(value: string){
var value = value
this.testFtpPassword= value;
    
}


    public setTimeCreated(value: string){
var value = value
this.timeCreated= value;
    
}


    public setLastModified(value: string){
var value = value
this.lastModified= value;
    
}


                //@Throws(Exception.constructor)
            
    public setFtpPath(value: string){
    //var value = value
this.ftpPath= new AbPath(value);
    
}


                //@Throws(Exception.constructor)
            
    public setTestFtpPath(value: string){
    //var value = value
this.testFtpPath= new AbPath(value);
    
}


                //@Throws(Exception.constructor)
            
    createDirectories(): boolean{

    var storeAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.getCurrentHomeHostNamePath());
;
    

                        if(!this.directory.create(storeAbPath))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.directory.create(new AbPath(storeAbPath +this.getCategoryPath())))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.directory.create(new AbPath(storeAbPath +this.getStaticPath())))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public install(current: number, total: number){
    //var current = current
    //var total = total

        try {
            
                        if(!this.createDirectories())
                        
                                    {
                                    


                            throw new Exception("Unable to create store directories");
                    

                                    }
                                

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.XSLPATH);
    

    var viewPath: string = stringBuffer!.toString()!;
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(viewPath);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.INSTALLPATH);
    

    var fromDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(viewPath);
    
stringBuffer!.append("special");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var fromSpecialDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(viewPath);
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var toDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    

                        if(current == 0)
                        
                                    {
                                    
                        if(!this.directory.create(toDirectoryAbPath))
                        
                                    {
                                    


                            throw new Exception("Unable to create store view directory: " +toDirectoryAbPath!.toString());
                    

                                    }
                                

                                    }
                                

    var viewTotal: number = (total *85) /100;
;
    

    var installTotal: number = (total *93) /100;
;
    

                        if(current < viewTotal)
                        
                                    {
                                    
    var file: AbFile = new AbFile(fromSpecialDirectoryAbPath);
;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    var halfViewTotal: number = viewTotal /2;
;
    

                        if(current < halfViewTotal)
                        
                                    {
                                    this.installViews(fromSpecialDirectoryAbPath, toDirectoryAbPath, current, halfViewTotal);
    

                                    }
                                
                             else 
                        if(current < viewTotal)
                        
                                    {
                                    this.installViews(fromDirectoryAbPath, toDirectoryAbPath, current -halfViewTotal, viewTotal -halfViewTotal);
    

                                    }
                                

                                    }
                                
                        else {
                            this.installViews(fromDirectoryAbPath, toDirectoryAbPath, current, viewTotal);
    

                        }
                            

                                    }
                                
                             else 
                        if(current < installTotal)
                        
                                    {
                                    this.installResources(fromDirectoryAbPath, current -viewTotal, installTotal -viewTotal);
    

                                    }
                                
                        else {
                            this.installMedia(fromDirectoryAbPath, current -installTotal, total -installTotal);
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "install()", e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    installViews(fromDirectoryAbPath: AbPath, toDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var toDirectoryAbPath = toDirectoryAbPath
    //var current = current
    //var total = total
FileUtil.getInstance()!.copyDirectoryPortion(fromDirectoryAbPath, toDirectoryAbPath, true, false, current, total);
    
}


                //@Throws(Exception.constructor)
            
    installResources(fromDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var current = current
    //var total = total

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(fromDirectoryAbPath!.toString());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append("Resources");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var installCategoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(this.getCurrentHomeHostNamePath());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(this.getCategoryPath());
    

    var categoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    
FileUtil.getInstance()!.copyDirectoryPortion(installCategoryAbPath, categoryAbPath, true, false, current, total);
    
}


                //@Throws(Exception.constructor)
            
    installMedia(fromDirectoryAbPath: AbPath, current: number, total: number){
    //var fromDirectoryAbPath = fromDirectoryAbPath
    //var current = current
    //var total = total

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append(fromDirectoryAbPath!.toString());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    
stringBuffer!.append(FREEBLISKET_PATH_GLOBALS.getInstance()!.TEMPLATEPATH);
    
stringBuffer!.append("images");
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var viewStoreImagesDirectoryAbPath: AbPath = new AbPath(stringBuffer!.toString());
;
    

    var storeAbPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +this.getCurrentHomeHostNamePath());
;
    
FileUtil.getInstance()!.copyDirectoryPortion(viewStoreImagesDirectoryAbPath, storeAbPath, true, false, current, total);
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): Vector{

    var dataVector: Vector = new Vector();
;
    
dataVector!.add(this.name);
    
dataVector!.add(this.homeHostName);
    
dataVector!.add(this.homeHostNamePath!.toString());
    
dataVector!.add(this.hostName);
    
dataVector!.add(this.hostNamePath!.toString());
    
dataVector!.add(this.testHomeHostName);
    
dataVector!.add(this.testHomeHostNamePath!.toString());
    
dataVector!.add(this.testHostName);
    
dataVector!.add(this.testHostNamePath!.toString());
    
dataVector!.add(this.imagePath!.toString());
    
dataVector!.add(this.staticPath!.toString());
    
dataVector!.add(this.categoryPath!.toString());
    
dataVector!.add(this.inventoryControl);
    

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());
;
    
dataVector!.add(contextConfigurationDomDocumentMapping!.toDomDocumentString());
    
dataVector!.add(this.subStores);
    
dataVector!.add(this.tagLocation);
    
dataVector!.add(this.packageLocation);
    
dataVector!.add(this.ftp);
    
dataVector!.add(this.ftpPath!.toString());
    
dataVector!.add(this.ftpUserName);
    
dataVector!.add(this.ftpPassword);
    
dataVector!.add(this.testFtp);
    
dataVector!.add(this.testFtpPath!.toString());
    
dataVector!.add(this.testFtpUserName);
    
dataVector!.add(this.testFtpPassword);
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString();
;
    
dataVector!.add(time);
    
dataVector!.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dataVector;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
;
    

    var dataHashMap: HashMap<any, any> = new HashMap<any, any>();
;
    
dataHashMap!.put(storeFrontData!.NAME, this.name);
    
dataHashMap!.put(storeFrontData!.HOMEHOSTNAME, this.homeHostName);
    
dataHashMap!.put(storeFrontData!.HOMEHOSTNAMEPATH, this.homeHostNamePath!.toString());
    
dataHashMap!.put(storeFrontData!.HOSTNAME, this.hostName);
    
dataHashMap!.put(storeFrontData!.HOSTNAMEPATH, this.hostNamePath!.toString());
    
dataHashMap!.put(storeFrontData!.TESTHOMEHOSTNAME, this.testHomeHostName);
    
dataHashMap!.put(storeFrontData!.TESTHOMEHOSTNAMEPATH, this.testHomeHostNamePath!.toString());
    
dataHashMap!.put(storeFrontData!.TESTHOSTNAME, this.testHostName);
    
dataHashMap!.put(storeFrontData!.TESTHOSTNAMEPATH, this.testHostNamePath!.toString());
    
dataHashMap!.put(storeFrontData!.IMAGEPATH, this.imagePath!.toString());
    
dataHashMap!.put(storeFrontData!.STATICPATH, this.staticPath!.toString());
    
dataHashMap!.put(storeFrontData!.CATEGORYPATH, this.categoryPath!.toString());
    
dataHashMap!.put(storeFrontData!.INVENTORYCONTROL, this.inventoryControl);
    

    var contextConfigurationDomDocumentMapping: ContextConfigurationDomDocumentMapping = new ContextConfigurationDomDocumentMapping(this.getContextConfigurationInterface());
;
    
dataHashMap!.put(storeFrontData!.CONFIGURATION, contextConfigurationDomDocumentMapping!.toDomDocumentString());
    
dataHashMap!.put(storeFrontData!.SUBSTORES, this.subStores);
    
dataHashMap!.put(storeFrontData!.TAGLOCATION, this.tagLocation);
    
dataHashMap!.put(storeFrontData!.PACKAGELOCATION, this.packageLocation);
    
dataHashMap!.put(storeFrontData!.FTP, this.ftp);
    
dataHashMap!.put(storeFrontData!.FTPPATH, this.ftpPath!.toString());
    
dataHashMap!.put(storeFrontData!.FTPUSERNAME, this.ftpUserName);
    
dataHashMap!.put(storeFrontData!.FTPPASSWORD, this.ftpPassword);
    
dataHashMap!.put(storeFrontData!.TESTFTP, this.testFtp);
    
dataHashMap!.put(storeFrontData!.TESTFTPPATH, this.testFtpPath!.toString());
    
dataHashMap!.put(storeFrontData!.TESTFTPUSERNAME, this.testFtpUserName);
    
dataHashMap!.put(storeFrontData!.TESTFTPPASSWORD, this.testFtpPassword);
    

    var calendar: Calendar = Calendar.getInstance()!;
;
    

    var time: string = calendar.getTimeInMillis().
                            toString();
;
    
dataHashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dataHashMap;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName() as Object;
    
}


    public getContextConfigurationInterface(): ContextConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contextConfigurationInterface;
    
}


    public setContextConfigurationInterface(contextConfigurationInterface: ContextConfigurationInterface){
    //var contextConfigurationInterface = contextConfigurationInterface
this.contextConfigurationInterface= contextConfigurationInterface;
    
}


}
                
            

