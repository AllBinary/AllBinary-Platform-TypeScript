
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
      const BufferedWriter = globalThis.java.io.BufferedWriter;

      
//not game specific package import { FileWriter } from '../../../../java/io/FileWriter.js';
      const FileWriter = globalThis.java.io.FileWriter;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
//not game specific package import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BufferedWriterUtil
            extends Object
         {
        

    private static readonly instance: BufferedWriterUtil = new BufferedWriterUtil();

    public static getInstance(): BufferedWriterUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BufferedWriterUtil.instance;
    
}


    private readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly commonLabels: CommonLabels = CommonLabels.getInstance()!;

    private readonly REMOVING_OLD: string = "Remove old for overwritting: ";

                //@Throws(Exception.constructor)
            
    public overwrite(path: string, data: string){

    var abFile: AbFile = AbFile.createAbFile(path)!;;
    

                        if(abFile!.exists())
                        
                                    {
                                    this.logUtil!.putF(this.REMOVING_OLD +path, this, this.commonStrings!.CREATE);
    
abFile!.delete();
    

                                    }
                                
                        else {
                            
    var name: string = AbPathData.getInstance()!.removeNameFromPath(path)!;;
    

    var abFileDirectory: AbFile = AbFile.createAbFile(name)!;;
    

                        if(abFileDirectory!.exists())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var stringBuilder: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)!.toString(), this, this.commonStrings!.CREATE);
    

    var result: boolean = abFileDirectory!.mkdirs()!;;
    
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)!.toString(), this, this.commonStrings!.CREATE);
    

                        }
                            

                        }
                            
this.write(abFile, data);
    
}


                //@Throws(Exception.constructor)
            
    public overwrite(abFile: AbFile, data: string){

                        if(abFile!.exists())
                        
                                    {
                                    this.logUtil!.putF(this.REMOVING_OLD +abFile!.getPath(), this, this.commonStrings!.CREATE);
    
abFile!.delete();
    

                                    }
                                
                        else {
                            
    var name: string = AbPathData.getInstance()!.removeNameFromPath(abFile!.getAbsolutePath())!;;
    

    var abFileDirectory: AbFile = AbFile.createAbFile(name)!;;
    

                        if(abFileDirectory!.exists())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var stringBuilder: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)!.toString(), this, this.commonStrings!.CREATE);
    

    var result: boolean = abFileDirectory!.mkdirs()!;;
    
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)!.toString(), this, this.commonStrings!.CREATE);
    

                        }
                            

                        }
                            
this.write(abFile, data);
    
}


                //@Throws(Exception.constructor)
            
    public write(abFile: AbFile, data: string){

    var fileOut: BufferedWriter = new BufferedWriter(new FileWriter(AbFileNativeUtil.get(abFile)));;
    
fileOut!.write(data, 0, data.length);
    
fileOut!.newLine();
    
fileOut!.flush();
    
}


}



