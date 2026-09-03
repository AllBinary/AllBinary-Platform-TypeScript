
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { ByteArrayInputStream } from '../../../../../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { InputStream } from '../../../../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { URLGLOBALS } from '../../../../../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { WeblisketSession } from '../../../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
      //not GWT import const WeblisketSession = globalThis.org.allbinary.logic.communication.http.request.session.WeblisketSession;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { InputOutputTypeData } from '../../../../../../../../org/allbinary/logic/io/InputOutputTypeData.js';
      //not GWT import const InputOutputTypeData = globalThis.org.allbinary.logic.io.InputOutputTypeData;

      
import { AbFile } from '../../../../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { FileUtil } from '../../../../../../../../org/allbinary/logic/io/file/FileUtil.js';
      //not GWT import const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
import { AbPath } from '../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } from '../../../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      //not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { Replace } from '../../../../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      //not GWT import const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
import { TransformInfoHttpInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpInterface.js';
      //not GWT import const TransformInfoHttpInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpInterface;

      
import { TransformInfoHttpStoreInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoHttpStoreInterface.js';
      //not GWT import const TransformInfoHttpStoreInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpStoreInterface;

      
import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfosData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
      //not GWT import const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;

      
//not plain js import { CommonSeps } from '../../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigGenerator } from './TransformInfoObjectConfigGenerator.js';
//not GWT import const TransformInfoObjectConfigGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGenerator;

                
export class StoreFileGenerator extends TransformInfoObjectConfigGenerator {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly output: string;

    private readonly fileAbPath: AbPath;

    private readonly file: AbFile;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        
    var httpTransformInfoInterface: TransformInfoHttpInterface = transformInfoInterface as TransformInfoHttpInterface;;
    

    var weblisketSession: WeblisketSession = new WeblisketSession(httpTransformInfoInterface!.getPropertiesHashMap(), httpTransformInfoInterface!.getPageContext());;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(weblisketSession!.getStoreName());
    
stringBuffer!.append(AbPathData.getInstance()!.SEPARATOR);
    

    var abPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var fileName: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(InputOutputTypeData.getInstance()!.FILE) as string;;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(stringValidationUtil!.isEmpty(fileName))
                        
                                    {
                                    
    var transformInfoHttpStoreInterface: TransformInfoHttpStoreInterface = transformInfoInterface as TransformInfoHttpStoreInterface;;
    
fileName= transformInfoInterface!.getName()!.substring(transformInfoHttpStoreInterface!.getStoreName()!.length() +1);
    

    var outputMappingHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
outputMappingHashMap!.put(TransformInfosData.getInstance()!.PREVIEW, "Preview");
    
outputMappingHashMap!.put(TransformInfosData.getInstance()!.SMALL_PREVIEW, "SmallPreview");
    
outputMappingHashMap!.put(CommonSeps.getInstance()!.SPACE, StringUtil.getInstance()!.EMPTY_STRING);
    

    var replace: Replace = new Replace(outputMappingHashMap);;
    
fileName= replace.all(fileName);
    

                                    }
                                

                        if(stringValidationUtil!.isEmpty(fileName))
                        
                                    {
                                    


                            throw new Exception("TransformInfoObjectConfigGenerator FileName Not Specified");
                    

                                    }
                                

    var tempOutput: string = httpTransformInfoInterface!.getPropertiesHashMap()!.get(InputOutputTypeData.getInstance()!.NAME) as string;;
    

                        if(stringValidationUtil!.isEmpty(tempOutput))
                        
                                    {
                                    tempOutput= InputOutputTypeData.getInstance()!.DEFAULT;
    

                                    }
                                
this.output= tempOutput;
    

                        if(stringValidationUtil!.isEmpty(this.output))
                        
                                    {
                                    


                            throw new Exception("TransformInfoObjectConfigGenerator Output=extension Not Specified");
                    

                                    }
                                
stringBuffer= new StringMaker();
    
stringBuffer!.append(fileName);
    
stringBuffer!.append(AbPathData.getInstance()!.EXTENSION_SEP);
    
stringBuffer!.append(this.output);
    
abPath= new AbPath(abPath!.toString(), stringBuffer!.toString());
    
this.fileAbPath= abPath;
    
this.file= AbFile.createAbFileFromAbPath(this.fileAbPath);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("File: " +this.fileAbPath!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public process(input: string): string{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Processing", this, this.commonStrings!.PROCESS);
    

                                    }
                                

                        if(!this.file.exists())
                        
                                    {
                                    this.file.createNewFile();
    

                                    }
                                

                        if(this.file.exists())
                        
                                    {
                                    
    var inputStream: InputStream = new ByteArrayInputStream(input.getBytes());;
    
FileUtil.getInstance()!.write(inputStream, this.file);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Could Not Create: " +this.fileAbPath!.toString());
                    

                        }
                            

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Processed", this, this.commonStrings!.PROCESS);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


}



