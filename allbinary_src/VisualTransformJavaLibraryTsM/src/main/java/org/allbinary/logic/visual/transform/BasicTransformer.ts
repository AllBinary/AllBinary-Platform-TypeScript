
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
        



import { ByteArrayInputStream } from "../../../../../java/io/ByteArrayInputStream.js";

    
import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { BasicUriResolver } from "../../../../../org/allbinary/data/tree/dom/BasicUriResolver.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbCrypt } from "../../../../../org/allbinary/logic/control/crypt/jcehelper/AbCrypt.js";

    
import { KeySpecFactory } from "../../../../../org/allbinary/logic/control/crypt/jcehelper/KeySpecFactory.js";

    
import { AbFileInputStream } from "../../../../../org/allbinary/logic/io/AbFileInputStream.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { PathUtil } from "../../../../../org/allbinary/logic/io/path/PathUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbKeys } from "../../../../../org/allbinary/logic/system/security/AbKeys.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoTemplateData } from "../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AbTransformer } from "./AbTransformer.js";

export class BasicTransformer extends AbTransformer {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface
public constructor (abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                        //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setTemplateAsInputStream();
    
}


                //@Throws(Error::class)
            
    setEncryptedTemplateFileAsInputStream(file: AbFile){
    //var file = file

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        
;
    

    var inputStream: AbFileInputStream = 
                null
            ;
        
        
;
    

        try {
            outputStream= new ByteArrayOutputStream();
    
inputStream= new AbFileInputStream(file);
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)); as ByteArrayOutputStream;
    

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(this.abeClientInformation, file.getAbsolutePath()));
        
        
;
    

    var decrypted: number[] = abCrypt!.decrypt(outputStream!.toByteArray())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Decrypted Template: \n" +
                                    //Otherwise - right - ObjectCreationExpr
, this, "setEncryptedTemplateFileAsInputStream(file)");
    

                                    }
                                
this.setInputStream(new ByteArrayInputStream(decrypted) as InputStream);
    
this.setURIResolver(new BasicUriResolver(TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION) as URIResolver);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Failed to get Encrypted File: ");
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(" \nName:");
    
stringBuffer!.append(file.getName());
    
this.logUtil!.put(stringBuffer!.toString(), this, "setEncryptedTemplateFileAsInputStream()", e);
    

                                    }
                                



                            throw e
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        
}


                //@Throws(Error::class)
            
    setEncryptedTemplateAsInputStream(){

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        
;
    

    var inputStream: ByteArrayInputStream = 
                null
            ;
        
        
;
    

        try {
            outputStream= new ByteArrayOutputStream();
    
inputStream= new ByteArrayInputStream(this.getTransformInfoInterface()!.getTemplate()!.encodeToByteArray());
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)); as ByteArrayOutputStream;
    

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(this.abeClientInformation, this.getTransformInfoInterface()!.getName()));
        
        
;
    

    var decrypted: number[] = abCrypt!.decrypt(outputStream!.toByteArray())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Decrypted Template: \n" +decrypted.toString(), this, "setEncryptedTemplateAsInputStream()");
    

                                    }
                                
this.setInputStream(new ByteArrayInputStream(decrypted) as InputStream);
    
this.setURIResolver(new BasicUriResolver(TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION) as URIResolver);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to set with template: " +this.getTransformInfoInterface()!.getTemplateFilePath(), this, "setEncryptedTemplateFileAsInputStream()", e);
    

                                    }
                                



                            throw e
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        
}


                //@Throws(Error::class)
            
    setTemplateAsInputStream(){

    var inputStream: AbFileInputStream = 
                null
            ;
        
        
;
    

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        
;
    

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

    var transformInfoTemplateData: TransformInfoTemplateData = TransformInfoTemplateData.getInstance()!;
        
        
;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        
;
    

                        if(this.getTransformInfoInterface()!.getTemplateFilePath() != 
                                    null
                                )
                        
                                    {
                                    
    var extension: string = pathUtil!.getExtension(this.getTransformInfoInterface()!.getTemplateFilePath())!;
        
        
;
    

    var filePath: string = pathUtil!.getWithoutExtension(this.getTransformInfoInterface()!.getTemplateFilePath())!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(extension.compareTo(transformInfoTemplateData!.UNCRYPTED_EXTENSION) == 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(filePath);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(transformInfoTemplateData!.ENCRYPTED_EXTENSION);
    

    var encFile: AbFile = new AbFile(stringBuffer!.toString());
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    stringBuffer= new StringMaker();
    
stringBuffer!.append("Encrypted Template File isFile=");
    
stringBuffer!.appendboolean(encFile!.isFile());
    
stringBuffer!.append("\nEncTemplateFilePath: ");
    
stringBuffer!.append(encFile!.getPath());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(encFile!.isFile())
                        
                                    {
                                    this.setEncryptedTemplateFileAsInputStream(encFile);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
    var file: AbFile = new AbFile(this.getTransformInfoInterface()!.getTemplateFilePath());
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Template File isFile=" +file.isFile(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(file.isFile())
                        
                                    {
                                    inputStream= new AbFileInputStream(file);
    
outputStream= new ByteArrayOutputStream();
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)); as ByteArrayOutputStream;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF("Template: " +outputStream!.toString(), this, "getTemplateAsInputStream()");
    

                                    }
                                
this.setInputStream(new ByteArrayInputStream(outputStream!.toByteArray()) as InputStream);
    
this.setURIResolver(new BasicUriResolver(transformInfoTemplateData!.UNCRYPTED_EXTENSION) as URIResolver);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
                        if(extension.compareTo(transformInfoTemplateData!.ENCRYPTED_EXTENSION) == 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(filePath);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(transformInfoTemplateData!.ENCRYPTED_EXTENSION);
    

    var file: AbFile = new AbFile(stringBuffer!.toString());
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    this.setEncryptedTemplateFileAsInputStream(file);
    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw new Error("View Template File Type Is Not Recognized: " +this.getTransformInfoInterface()!.getTemplateFilePath())

                        }
                            

                                    }
                                
                        else {
                            this.setEncryptedTemplateAsInputStream();
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to get Template Data", this, "setTemplateAsInputStream()", e);
    

                                    }
                                



                            throw e
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        



                            throw new Error("Error setTemplateAsInputStream()")
}


}
                
            

