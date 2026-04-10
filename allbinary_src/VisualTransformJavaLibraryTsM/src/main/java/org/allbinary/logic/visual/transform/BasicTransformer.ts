
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

    

export class BasicTransformer extends AbTransformer {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface
public constructor (abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface)                        

                            : super(transformInfoInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation
this.setTemplateAsInputStream()
}


                @Throws(Exception::class)
            
    setEncryptedTemplateFileAsInputStream(file: AbFile){
    //var file = file

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        


    var inputStream: AbFileInputStream = 
                null
            ;
        
        


        try {
            outputStream= ByteArrayOutputStream()
inputStream= AbFileInputStream(file)
outputStream= this.streamUtil!.get(inputStream, outputStream, ByteArray(16384)) as ByteArrayOutputStream

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(abeClientInformation, file.getAbsolutePath()));
        
        


    var decrypted: ByteArray = abCrypt!.decrypt(outputStream!.toByteArray())!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Decrypted Template: \n" +
                                    //Otherwise - right - ObjectCreationExpr
, this, "setEncryptedTemplateFileAsInputStream(file)")

                                    }
                                
this.setInputStream(ByteArrayInputStream(decrypted) as InputStream)
this.setURIResolver(BasicUriResolver(TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION) as URIResolver)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Failed to get Encrypted File: ")
append(file.getPath())
append(" \nName:")
append(file.getName())
put(stringBuffer!.toString(), this, "setEncryptedTemplateFileAsInputStream()", e)

                                    }
                                



                            throw e
}

         finally {
            close(outputStream)
close(inputStream)

         }
        
}


                @Throws(Exception::class)
            
    setEncryptedTemplateAsInputStream(){

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        


    var inputStream: ByteArrayInputStream = 
                null
            ;
        
        


        try {
            outputStream= ByteArrayOutputStream()
inputStream= ByteArrayInputStream(this.getTransformInfoInterface()!.getTemplate()!.encodeToByteArray())
outputStream= this.streamUtil!.get(inputStream, outputStream, ByteArray(16384)) as ByteArrayOutputStream

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.DESEDE, AbKeys.getInstance()!.getKey(abeClientInformation, this.getTransformInfoInterface()!.getName()));
        
        


    var decrypted: ByteArray = abCrypt!.decrypt(outputStream!.toByteArray())!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Decrypted Template: \n" +decrypted.toString(), this, "setEncryptedTemplateAsInputStream()")

                                    }
                                
this.setInputStream(ByteArrayInputStream(decrypted) as InputStream)
this.setURIResolver(BasicUriResolver(TransformInfoTemplateData.getInstance()!.ENCRYPTED_EXTENSION) as URIResolver)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    put("Failed to set with template: " +this.getTransformInfoInterface()!.getTemplateFilePath(), this, "setEncryptedTemplateFileAsInputStream()", e)

                                    }
                                



                            throw e
}

         finally {
            close(outputStream)
close(inputStream)

         }
        
}


                @Throws(Exception::class)
            
    setTemplateAsInputStream(){

    var inputStream: AbFileInputStream = 
                null
            ;
        
        


    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        


        try {
            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()")

                                    }
                                

    var transformInfoTemplateData: TransformInfoTemplateData = TransformInfoTemplateData.getInstance()!;
        
        


    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        


    
                        if(this.getTransformInfoInterface()!.getTemplateFilePath() != 
                                    null
                                )
                        
                                    {
                                    
    var extension: string = pathUtil!.getExtension(this.getTransformInfoInterface()!.getTemplateFilePath())!;
        
        


    var filePath: string = pathUtil!.getWithoutExtension(this.getTransformInfoInterface()!.getTemplateFilePath())!;
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()")

                                    }
                                

    
                        if(extension.compareTo(transformInfoTemplateData!.UNCRYPTED_EXTENSION) == 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(filePath)
append(AbPathData.getInstance()!.EXTENSION_SEP)
append(transformInfoTemplateData!.ENCRYPTED_EXTENSION)

    var encFile: AbFile = new AbFile(stringBuffer!.toString());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()")

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    stringBuffer= StringMaker()
append("Encrypted Template File isFile=")
appendboolean(encFile!.isFile())
append("\nEncTemplateFilePath: ")
append(encFile!.getPath())
put(stringBuffer!.toString(), this, "setTemplateAsInputStream()")

                                    }
                                

    
                        if(encFile!.isFile())
                        
                                    {
                                    this.setEncryptedTemplateFileAsInputStream(encFile)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
                        else {
                            
    var file: AbFile = new AbFile(this.getTransformInfoInterface()!.getTemplateFilePath());
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put(this.getTransformInfoInterface()!.log(), this, "setTemplateAsInputStream()")

                                    }
                                

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Template File isFile=" +file.isFile(), this, "setTemplateAsInputStream()")

                                    }
                                

    
                        if(file.isFile())
                        
                                    {
                                    inputStream= AbFileInputStream(file)
outputStream= ByteArrayOutputStream()
outputStream= this.streamUtil!.get(inputStream, outputStream, ByteArray(16384)) as ByteArrayOutputStream

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORY))
                        
                                    {
                                    put("Template: " +outputStream!.toString(), this, "getTemplateAsInputStream()")

                                    }
                                
this.setInputStream(ByteArrayInputStream(outputStream!.toByteArray()) as InputStream)
this.setURIResolver(BasicUriResolver(transformInfoTemplateData!.UNCRYPTED_EXTENSION) as URIResolver)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

                        }
                            

                                    }
                                
                             else 
    
                        if(extension.compareTo(transformInfoTemplateData!.ENCRYPTED_EXTENSION) == 0)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(filePath)
append(AbPathData.getInstance()!.EXTENSION_SEP)
append(transformInfoTemplateData!.ENCRYPTED_EXTENSION)

    var file: AbFile = new AbFile(stringBuffer!.toString());
        
        


    
                        if(file.isFile())
                        
                                    {
                                    this.setEncryptedTemplateFileAsInputStream(file)

                                    }
                                

                                    }
                                
                        else {
                            


                            throw Exception("View Template File Type Is Not Recognized: " +this.getTransformInfoInterface()!.getTemplateFilePath())

                        }
                            

                                    }
                                
                        else {
                            this.setEncryptedTemplateAsInputStream()

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERFACTORYERROR))
                        
                                    {
                                    put("Failed to get Template Data", this, "setTemplateAsInputStream()", e)

                                    }
                                



                            throw e
}

         finally {
            close(outputStream)
close(inputStream)

         }
        



                            throw Exception("Error setTemplateAsInputStream()")
}


}
                
            

