
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { FileReader } from '../../../../../../../java/io/FileReader.js';
//not GWT import const FileReader

import { LineNumberReader } from '../../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader

import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LogConfigTypeFactory } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory

import { LogConfigTypes } from '../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes

import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
type FilePathData<T = any, U = any> = typeof FilePathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof FilePathData;

import { SubDirectory } from '../../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { CpuInterface } from '../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/CpuInterface.js';
//not GWT import const CpuInterface

import { HardwareComponentInterface } from '../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
//not GWT import const HardwareComponentInterface

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CpuInfo } from './CpuInfo.js';
//not GWT import - same folder const CpuInfo

export class Cpu
            extends Object
         implements CpuInterface, HardwareComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly CPUFILE: string = "/proc/cpuinfo";

    private cpuHashMap: HashMap<any, any>;

public constructor (filePath: string){

            super();
        this.init(filePath);
    
}


public constructor (){

            super();
        this.init(this.CPUFILE);
    
}

init(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.init$overload1(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'string') return this.init$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: init'); }
  
                //@Throws(Exception.constructor)
            
    init$overload1(filePath: string){

    let lineNumberReader: LineNumberReader = 
                null
            ;;
    

 try { this.init(lineNumberReader, filePath);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.put(new StringMaker().append("Cpu Data: ")!.append(this.toString())!.toString(), this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    init$overload2(lineNumberReader: LineNumberReader, filePath: string){

 try { 
    let fileReader: FileReader = new FileReader(filePath);;
    
lineNumberReader= new LineNumberReader(fileReader);
    
this.cpuHashMap= StdUtil.getInstance()!.createHashMap();
    

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    
    let fileVector: BasicArrayList = SubDirectory.getInstance()!.search(filePath, AbFile.createAbFile(FilePathData.getInstance()!.PATH_START))!;;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Cpu File BasicArrayList Size: ")!.appendint(fileVector!.size())!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                        if(!fileVector!.isEmpty())
                        
                                    {
                                    
    let file: AbFile = fileVector!.get(0) as AbFile;;
    
lineNumberReader= new LineNumberReader(new FileReader(file.getPath()));
    

                                    }
                                

                                    }
                                

                        if(lineNumberReader != 
                                    null
                                )
                        
                                    {
                                    
    let nextLine: string = lineNumberReader!.readLine()!;;
    

        while(lineNumberReader != 
                                    null
                                 && nextLine != 
                                    null
                                )
        {

    let index: number = nextLine!.indexOf(':')!;;
    

                        if(index >= 0)
                        
                                    {
                                    
    let key: string = nextLine!.substring(0, index)!;;
    

    let valueIndex: number = index +1;;
    

    let value: string = nextLine!.substring(valueIndex, nextLine!.length)!;;
    

                        if(key.indexOf(CpuInfo.PROCESSOR.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.PROCESSOR, value)

                        if(key.indexOf(CpuInfo.VENDORID.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.VENDORID, value)

                        if(key.indexOf(CpuInfo.CPUFAMILY.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.CPUFAMILY, value)

                        if(key.indexOf(CpuInfo.MODEL.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.MODEL, value)

                        if(key.indexOf(CpuInfo.MODELNAME.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.MODELNAME, value)

                        if(key.indexOf(CpuInfo.STEPPING.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.STEPPING, value)

                        if(key.indexOf(CpuInfo.CPUMHZ.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.CPUMHZ, value)

                        if(key.indexOf(CpuInfo.CACHESIZE.toString()) >= 0)
                        this.cpuHashMap!.put(CpuInfo.CACHESIZE, value)

                                    }
                                
nextLine= lineNumberReader!.readLine();
    
}


                                    }
                                
 }
 finally { 
                        if(lineNumberReader != 
                                    null
                                )
                        lineNumberReader!.close()
 }
}


    public getProcessor(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.PROCESSOR) as string;
    
}


    public getVendorId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.VENDORID) as string;
    
}


    public getCpuFamily(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.CPUFAMILY) as string;
    
}


    public getModel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.MODEL) as string;
    
}


    public getModelName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.MODELNAME) as string;
    
}


    public getStepping(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.STEPPING) as string;
    
}


    public getCpuSpeed(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.CPUMHZ) as string;
    
}


    public getCacheSize(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuHashMap!.get(CpuInfo.CACHESIZE) as string;
    
}

compareTo(...args: any[]): any {
   
    if (args.length === 1) return this.compareTo$overload1(args[0]);
   
    if (args.length === 1) return this.compareTo$overload2(args[0]);
   
   throw new TypeError('No matching overload: compareTo'); }
  
    public compareTo$overload1(cpuInterface: CpuInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public compareTo$overload2(componentInterface: HardwareComponentInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public toString(): string{

    let commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let stringMaker: StringMaker = new StringMaker();;
    
stringMaker!.append(CpuInfo.PROCESSOR.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getProcessor());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.VENDORID.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getVendorId());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.CPUFAMILY.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getCpuFamily());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.MODEL.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getModel());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.MODELNAME.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getModelName());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.STEPPING.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getStepping());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.CPUMHZ.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getCpuSpeed());
    
stringMaker!.append(commonSeps!.NEW_LINE);
    
stringMaker!.append(CpuInfo.CACHESIZE.toString())!.append(commonLabels!.COLON_SEP)!.append(this.getCacheSize());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringMaker!.toString();;
    
}


}

