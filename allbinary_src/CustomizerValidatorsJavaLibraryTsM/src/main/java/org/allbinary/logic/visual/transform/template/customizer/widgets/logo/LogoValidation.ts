
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { HttpRequestUtil } from '../../../../../../../../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js';
//not GWT import const HttpRequestUtil = globalThis.org.allbinary.logic.communication.http.request.HttpRequestUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
//not GWT import const Validation = globalThis.org.allbinary.logic.control.validate.Validation;

      
import { FileData } from '../../../../../../../../../org/allbinary/logic/io/file/FileData.js';
//not GWT import const FileData = globalThis.org.allbinary.logic.io.file.FileData;

      
import { AbPath } from '../../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { FileItem } from '../../../../../../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LogoData } from './LogoData.js';
//not GWT import - same folder const LogoData = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.logo.LogoData;

                import { LogoImageFileUtil } from './LogoImageFileUtil.js';
//not GWT import - same folder const LogoImageFileUtil = globalThis.org.allbinary.logic.visual.transform.template.customizer.widgets.logo.LogoImageFileUtil;

                
export class LogoValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private logoFileItem: FileItem;

    private logoAbPath: AbPath;

    private logoFile: string;

    private isFile: boolean;

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
        this.isFile= false;
    
this.logoAbPath= new AbPath(DomSearchHelper.getNode(LogoData.getInstance()!.IMAGEPATH, node.getChildNodes())!.getNodeValue(), StringUtil.getInstance()!.EMPTY_STRING);
    
this.logoFile= DomSearchHelper.getNode(LogoData.getInstance()!.IMAGEFILENAME, node.getChildNodes())!.getNodeValue();
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.isFile= true;
    
this.getFormData(hashMap);
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(hashMap: HashMap<any, any>){
this.logoFileItem= hashMap!.get(LogoData.getInstance()!.IMAGE) as FileItem;
    
this.logoAbPath= new AbPath(hashMap!.get(LogoData.getInstance()!.IMAGEPATH) as string, StringUtil.getInstance()!.EMPTY_STRING);
    

                        if(this.logoFileItem != 
                                    null
                                )
                        
                                    {
                                    this.logoFile= HttpRequestUtil.getInstance()!.generateFileName(this.logoFileItem!.getName());
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("HashMap: ");
    
stringBuffer!.append(hashMap!.toString());
    
stringBuffer!.append("\nLogoFileName: ");
    
stringBuffer!.append(this.logoFile);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "getFormData()");
    

                                    }
                                
}


    public isValid(): Boolean{

        try {
            
    var valid: Boolean = Boolean.TRUE;;
    

    var fileData: FileData = FileData.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("LogoValidation", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.logoAbPath!.toString(), 0, 512))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("logoPath is invalid: " +this.logoAbPath!.toString(), this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.logoFile, fileData!.MINLEN, fileData!.MAXLEN))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("logoFile is invalid: " +this.logoFile, this, this.commonStrings!.IS_VALID);
    

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
                                    this.logUtil!.putF("Image File Is Not The Right Size. " +fileData!.MINIMAGEFILESIZE +"< > " +fileData!.MAXIMAGEFILESIZE, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Logo Validation: " +valid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Logo is not valid.");
    



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


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toHashMap(): HashMap<any, any>{

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = this.toHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, LogoData.getInstance()!.NAME, hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public processLogoFile(){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Processing logoFile: ");
    
stringBuffer!.append(this.logoAbPath!.toString());
    
stringBuffer!.append(this.logoFile);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "processLogoFile()");
    

                                    }
                                
new LogoImageFileUtil(this.logoAbPath, this.logoFile).saveFiles(this.logoFileItem);
    
}


}



