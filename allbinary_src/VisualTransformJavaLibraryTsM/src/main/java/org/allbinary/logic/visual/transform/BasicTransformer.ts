
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { InputStream } from '../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      //not GWT import const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
import { BasicUriResolver } from '../../../../../org/allbinary/data/tree/dom/BasicUriResolver.js';
      //not GWT import const BasicUriResolver = globalThis.org.allbinary.data.tree.dom.BasicUriResolver;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbCrypt } from '../../../../../org/allbinary/logic/control/crypt/jcehelper/AbCrypt.js';
      //not GWT import const AbCrypt = globalThis.org.allbinary.logic.control.crypt.jcehelper.AbCrypt;

      
import { KeySpecFactory } from '../../../../../org/allbinary/logic/control/crypt/jcehelper/KeySpecFactory.js';
      //not GWT import const KeySpecFactory = globalThis.org.allbinary.logic.control.crypt.jcehelper.KeySpecFactory;

      
import { AbFileInputStream } from '../../../../../org/allbinary/logic/io/AbFileInputStream.js';
      //not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;

      
import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
      //not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not plain js import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { PathUtil } from '../../../../../org/allbinary/logic/io/path/PathUtil.js';
      //not GWT import const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbKeys } from '../../../../../org/allbinary/logic/system/security/AbKeys.js';
      //not GWT import const AbKeys = globalThis.org.allbinary.logic.system.security.AbKeys;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfoTemplateData } from '../../../../../org/allbinary/logic/visual/transform/info/template/TransformInfoTemplateData.js';
      //not GWT import const TransformInfoTemplateData = globalThis.org.allbinary.logic.visual.transform.info.template.TransformInfoTemplateData;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbTransformer } from './AbTransformer.js';
//not GWT import const AbTransformer = globalThis.org.allbinary.logic.visual.transform.AbTransformer;

                
export class BasicTransformer extends AbTransformer {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface;

public constructor (abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.setTemplateAsInputStream();
    
}


                //@Throws(Exception.constructor)
            
    setEncryptedTemplateFileAsInputStream(file: AbFile){

    var outputStream: ByteArrayOutputStream = 
                null
            ;;
    

    var inputStream: AbFileInputStream = 
                null
            ;;
    

        try {
            outputStream= new ByteArrayOutputStream();
    
inputStream= new AbFileInputStream(file);
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)) as ByteArrayOutputStream;
    

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(this.abeClientInformation, file.getAbsolutePath()));;
    

    var decrypted: number[] = abCrypt!.decrypt(outputStream!.toByteArray())!;;
    

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
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Failed to get Encrypted File: ");
    
stringBuffer!.append(file.getPath());
    
stringBuffer!.append(" \nName:");
    
stringBuffer!.append(file.getName());
    
this.logUtil!.put(stringBuffer!.toString(), this, "setEncryptedTemplateFileAsInputStream()", e);
    

                                    }
                                



                            throw e;
                    
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        
}


                //@Throws(Exception.constructor)
            
    setEncryptedTemplateAsInputStream(){

    var outputStream: ByteArrayOutputStream = 
                null
            ;;
    

    var inputStream: ByteArrayInputStream = 
                null
            ;;
    

        try {
            outputStream= new ByteArrayOutputStream();
    
inputStream= new ByteArrayInputStream(this.getTransformInfoInterface()!.getTemplate()!.getBytes());
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)) as ByteArrayOutputStream;
    

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(this.abeClientInformation, this.getTransformInfoInterface()!.getName()));;
    

    var decrypted: number[] = abCrypt!.decrypt(outputStream!.toByteArray())!;;
    

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
                                



                            throw e;
                    
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        
}


                //@Throws(Exception.constructor)
            
    setTemplateAsInputStream(){

    var inputStream: AbFileInputStream = 
                null
            ;;
    

    var outputStream: ByteArrayOutputStream = 
                null
            ;;
    

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

    var transformInfoTemplateData: TransformInfoTemplateData = TransformInfoTemplateData.getInstance()!;;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;;
    

                        if(this.getTransformInfoInterface()!.getTemplateFilePath() != 
                                    null
                                )
                        
                                    {
                                    
    var extension: string = pathUtil!.getExtensionWithAbPath(this.getTransformInfoInterface()!.getTemplateFilePath())!;;
    

    var filePath: string = pathUtil!.getWithoutExtensionWithAbPath(this.getTransformInfoInterface()!.getTemplateFilePath())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    this.logUtil!.putF(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()");
    

                                    }
                                

                        if(extension.compareTo(transformInfoTemplateData!.UNCRYPTED_EXTENSION) == 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(filePath);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(transformInfoTemplateData!.ENCRYPTED_EXTENSION);
    

    var encFile: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    

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
                            
    var file: AbFile = AbFile.createAbFileFromAbPath(this.getTransformInfoInterface()!.getTemplateFilePath())!;;
    

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
    
outputStream= this.streamUtil!.get(inputStream, outputStream, new Array(16384)) as ByteArrayOutputStream;
    

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
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(filePath);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(transformInfoTemplateData!.ENCRYPTED_EXTENSION);
    

    var file: AbFile = AbFile.createAbFile(stringBuffer!.toString())!;;
    

                        if(file.isFile())
                        
                                    {
                                    this.setEncryptedTemplateFileAsInputStream(file);
    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw new Exception("View Template File Type Is Not Recognized: " +this.getTransformInfoInterface()!.getTemplateFilePath());
                    

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
                                



                            throw e;
                    
}

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        



                            throw new Exception("Error setTemplateAsInputStream()");
                    
}


}



