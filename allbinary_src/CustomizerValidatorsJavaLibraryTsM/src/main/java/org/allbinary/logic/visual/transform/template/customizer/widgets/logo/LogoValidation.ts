
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
        



import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { HttpRequestUtil } from "../../../../../../../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Validation } from "../../../../../../../../../org/allbinary/logic/control/validate/Validation.js";

    
import { FileData } from "../../../../../../../../../org/allbinary/logic/io/file/FileData.js";

    
import { AbPath } from "../../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { FileItem } from "../../../../../../../../../org/apache/commons/fileupload/FileItem.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogoData } from "./LogoData.js";

export class LogoValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private logoFileItem: FileItem

    private logoAbPath: AbPath

    private logoFile: string

    private isFile: boolean
public constructor (){

            super();
        this.isFile= false;
    
this.logoAbPath= 
                                        null
                                    ;
    
this.logoFile= 
                                        null
                                    ;
    
}

public constructor (node: Node){

            super();
        var node = node
this.isFile= false;
    
this.logoAbPath= new AbPath(DomSearchHelper.getNode(LogoData.getInstance()!.IMAGEPATH, node.getChildNodes())!.getNodeValue());
    
this.logoFile= DomSearchHelper.getNode(LogoData.getInstance()!.IMAGEFILENAME, node.getChildNodes())!.getNodeValue();
    
}

public constructor (hashMap: HashMap<any, any>){

            super();
        var hashMap = hashMap
this.isFile= true;
    
this.getFormData(hashMap);
    
}


                //@Throws(Error::class)
            
    public getFormData(hashMap: HashMap<any, any>){
var hashMap = hashMap
this.logoFileItem= hashMap!.get(LogoData.getInstance()!.IMAGE);

                         as FileItem;
    
this.logoAbPath= new AbPath(hashMap!.get(LogoData.getInstance()!.IMAGEPATH);

                         as String);
    

                        if(this.logoFileItem != 
                                    null
                                )
                        
                                    {
                                    this.logoFile= HttpRequestUtil.getInstance()!.generateFileName(this.logoFileItem!.getName());
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("HashMap: ");
    
stringBuffer!.append(hashMap!.toString());
    
stringBuffer!.append("\nLogoFileName: ");
    
stringBuffer!.append(this.logoFile);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getFormData()");
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;
        
        
;
    

    var fileData: FileData = FileData.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("LogoValidation", this, commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.logoAbPath!.toString(), 0, 512);

                        )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("logoPath is invalid: " +this.logoAbPath!.toString(), this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.logoFile, fileData!.MINLEN, fileData!.MAXLEN);

                        )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("logoFile is invalid: " +this.logoFile, this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.isFile)
                        
                                    {
                                    
                        if(this.logoFileItem == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(this.logoFileItem!.getSize() > fileData!.MAXIMAGEFILESIZE || this.logoFileItem!.getSize() < fileData!.MINIMAGEFILESIZE)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Image File Is Not The Right Size. " +fileData!.MINIMAGEFILESIZE +"< > " +fileData!.MAXIMAGEFILESIZE, this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Logo Validation: " +valid, this, commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Logo is not valid.");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

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


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toHashMap(): HashMap<any, any>{

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(LogoData.getInstance()!.IMAGE, stringUtil!.EMPTY_STRING);
    

                        if(this.logoFile != 
                                    null
                                )
                        
                                    {
                                    hashMap!.put(LogoData.getInstance()!.IMAGEPATH, this.logoAbPath!.toString());
    
hashMap!.put(LogoData.getInstance()!.IMAGEFILENAME, this.logoFile);
    

                                    }
                                
                        else {
                            hashMap!.put(LogoData.getInstance()!.IMAGEPATH, 
                            null);
    
hashMap!.put(LogoData.getInstance()!.IMAGEFILENAME, this.logoFile);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.toHashMap()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, LogoData.getInstance()!.NAME, hashMap);

                        ;
    
}


                //@Throws(Error::class)
            
    public processLogoFile(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Processing logoFile: ");
    
stringBuffer!.append(this.logoAbPath!.toString());
    
stringBuffer!.append(this.logoFile);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "processLogoFile()");
    

                                    }
                                
new LogoImageFileUtil(this.logoAbPath, this.logoFile).
                            saveFiles(this.logoFileItem);
    
}


}
                
            

