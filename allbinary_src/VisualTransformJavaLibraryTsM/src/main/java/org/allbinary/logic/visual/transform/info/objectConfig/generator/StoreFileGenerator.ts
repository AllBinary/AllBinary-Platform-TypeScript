
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
        



import { ByteArrayInputStream } from "../../../../../../../../java/io/ByteArrayInputStream.js";

    
import { InputStream } from "../../../../../../../../java/io/InputStream.js";

    
import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { URLGLOBALS } from "../../../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { WeblisketSession } from "../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { InputOutputTypeData } from "../../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js";

    
import { AbFile } from "../../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { AbPath } from "../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringMaker } from "../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Replace } from "../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { TransformInfoHttpInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js";

    
import { TransformInfoHttpStoreInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfosData } from "../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js";

    
import { CommonSeps } from "../../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class StoreFileGenerator extends TransformInfoObjectConfigGenerator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly output: string

    private readonly fileAbPath: AbPath

    private readonly file: AbFile
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface

    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;
        
        
;
    

    var weblisketSession: WeblisketSession = new WeblisketSession(httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext());
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(weblisketSession!.getStoreName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString());
        
        
;
    

    var fileName: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(InputOutputTypeData.getInstance()!.FILE);

                         as String;
        
        
;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(fileName))
                        
                                    {
                                    
    var transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = transformInfoInterface as TransformInfoHttpStoreInterface;
        
        
;
    
fileName= transformInfoInterface!.getName()!.substring(transformInfoHttpStoreInterface!.getStoreName()!.length() +1);
    

    var outputMappingHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
outputMappingHashMap!.put(TransformInfosData.getInstance()!.PREVIEW, "Preview");
    
outputMappingHashMap!.put(TransformInfosData.getInstance()!.SMALL_PREVIEW, "SmallPreview");
    
outputMappingHashMap!.put(CommonSeps.getInstance()!.SPACE, StringUtil.getInstance()!.EMPTY_STRING);
    

    var replace: Replace = new Replace(outputMappingHashMap);
        
        
;
    
fileName= replace.all(fileName);
    

                                    }
                                

                        if(stringValidationUtil!.isEmpty(fileName))
                        
                                    {
                                    


                            throw Error("TransformInfoObjectConfigGenerator FileName Not Specified")

                                    }
                                

    var tempOutput: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(InputOutputTypeData.getInstance()!.NAME);

                         as String;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(tempOutput))
                        
                                    {
                                    tempOutput= InputOutputTypeData.getInstance()!.DEFAULT;
    

                                    }
                                
this.output= tempOutput;
    

                        if(stringValidationUtil!.isEmpty(this.output))
                        
                                    {
                                    


                            throw Error("TransformInfoObjectConfigGenerator Output=extension Not Specified")

                                    }
                                
stringBuffer= StringMaker();
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(this.output);
    
abPath= AbPath(abPath!.toString(), stringBuffer!.toString());
    
this.fileAbPath= abPath;
    
this.file= AbFile(this.fileAbPath);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("File: " +this.fileAbPath!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public process(input: string): string{
var input = input

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Processing", this, commonStrings!.PROCESS);
    

                                    }
                                

                        if(!this.file.exists();

                        )
                        
                                    {
                                    this.file.createNewFile();
    

                                    }
                                

                        if(this.file.exists())
                        
                                    {
                                    
    var inputStream: InputStream = new ByteArrayInputStream(input.encodeToByteArray());
        
        
;
    
FileUtil.getInstance()!.write(inputStream, this.file);
    

                                    }
                                
                        else {
                            


                            throw Error("Could Not Create: " +this.fileAbPath!.toString())

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Processed", this, commonStrings!.PROCESS);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}
                
            

