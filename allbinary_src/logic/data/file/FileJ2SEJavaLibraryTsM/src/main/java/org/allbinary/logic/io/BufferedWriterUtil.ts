
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
        
import { BufferedWriter } from '../../../../java/io/BufferedWriter.js';
//not GWT import const BufferedWriter

import { FileWriter } from '../../../../java/io/FileWriter.js';
//not GWT import const FileWriter

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
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

    private readonly REMOVING_OLD: string = "Remove old for overwriting: ";
overwrite(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.overwrite$overload1(args[0], args[1]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.overwrite$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: overwrite'); }
  
                //@Throws(Exception.constructor)
            
    public overwrite$overload1(path: string, data: string){

    let abFile: AbFile = AbFile.createAbFile(path)!;;
    

                        if(abFile!.exists())
                        
                                    {
                                    this.logUtil!.putF(this.REMOVING_OLD +path, this, this.commonStrings!.CREATE);
    
abFile!.delete();
    

                                    }
                                
                        else {
                            
    let name: string = AbPathData.getInstance()!.removeNameFromPath(path)!;;
    

    let abFileDirectory: AbFile = AbFile.createAbFile(name)!;;
    

                        if(abFileDirectory!.exists())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let stringBuilder: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)!.toString(), this, this.commonStrings!.CREATE);
    

    let result: boolean = abFileDirectory!.mkdirs()!;;
    
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)!.toString(), this, this.commonStrings!.CREATE);
    

                        }
                            

                        }
                            
this.write(abFile, data);
    
}


                //@Throws(Exception.constructor)
            
    public overwrite$overload2(abFile: AbFile, data: string){

                        if(abFile!.exists())
                        
                                    {
                                    this.logUtil!.putF(this.REMOVING_OLD +abFile!.getPath(), this, this.commonStrings!.CREATE);
    
abFile!.delete();
    

                                    }
                                
                        else {
                            
    let name: string = AbPathData.getInstance()!.removeNameFromPath(abFile!.getAbsolutePath())!;;
    

    let abFileDirectory: AbFile = AbFile.createAbFile(name)!;;
    

                        if(abFileDirectory!.exists())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    let stringBuilder: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringBuilder!.append(this.commonStrings!.CREATE)!.append(this.commonLabels!.COLON_SEP)!.append(name)!.toString(), this, this.commonStrings!.CREATE);
    

    let result: boolean = abFileDirectory!.mkdirs()!;;
    
stringBuilder!.delete(0, stringBuilder!.length());
    
this.logUtil!.putF(stringBuilder!.append(this.commonLabels!.RESULT_)!.appendboolean(result)!.toString(), this, this.commonStrings!.CREATE);
    

                        }
                            

                        }
                            
this.write(abFile, data);
    
}


                //@Throws(Exception.constructor)
            
    public write(abFile: AbFile, data: string){

    let fileOut: BufferedWriter = new BufferedWriter(new FileWriter(AbFileNativeUtil.get(abFile)));;
    
fileOut!.write(data, 0, data.length);
    
fileOut!.newLine();
    
fileOut!.flush();
    
}


}

