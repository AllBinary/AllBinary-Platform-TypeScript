
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
        



import { FileReader } from "../../../../../../../java/io/FileReader.js";

    
import { LineNumberReader } from "../../../../../../../java/io/LineNumberReader.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbFile } from "../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FilePathData } from "../../../../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { SubDirectory } from "../../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CpuInterface } from "../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/CpuInterface.js";

    
import { HardwareComponentInterface } from "../../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { CommonLabels } from "../../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

import { LOGGING } from "./LOGGING.js";

import { LOGGING } from "./LOGGING.js";

import { PROCESSOR } from "./PROCESSOR.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { VENDORID } from "./VENDORID.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CPUFAMILY } from "./CPUFAMILY.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { MODEL } from "./MODEL.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { MODELNAME } from "./MODELNAME.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { STEPPING } from "./STEPPING.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CPUMHZ } from "./CPUMHZ.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CACHESIZE } from "./CACHESIZE.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { CpuInfo } from "./CpuInfo.js";

import { PROCESSOR } from "./PROCESSOR.js";

import { CpuInfo } from "./CpuInfo.js";

import { VENDORID } from "./VENDORID.js";

import { CpuInfo } from "./CpuInfo.js";

import { CPUFAMILY } from "./CPUFAMILY.js";

import { CpuInfo } from "./CpuInfo.js";

import { MODEL } from "./MODEL.js";

import { CpuInfo } from "./CpuInfo.js";

import { MODELNAME } from "./MODELNAME.js";

import { CpuInfo } from "./CpuInfo.js";

import { STEPPING } from "./STEPPING.js";

import { CpuInfo } from "./CpuInfo.js";

import { CPUMHZ } from "./CPUMHZ.js";

import { CpuInfo } from "./CpuInfo.js";

import { CACHESIZE } from "./CACHESIZE.js";

import { CpuInfo } from "./CpuInfo.js";

export class Cpu
            extends Object
        
                , CpuInterface
                , HardwareComponentInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly CPUFILE: string = "/proc/cpuinfo";
        
        

    private cpuHashMap: HashMap<any, any>
public constructor (filePath: string){

            super();
            var filePath = filePath
this.init(filePath);
    
}

public constructor (){

            super();
            this.init(CPUFILE);
    
}


                //@Throws(Error::class)
            
    init(filePath: string){
var filePath = filePath

    var lineNumberReader: LineNumberReader = 
                null
            ;
        
        
;
    

        try {
            init(lineNumberReader, filePath);
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.put(new StringMaker().
                            append("Cpu Data: ")!.append(this.toString())!.toString(), this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    init(lineNumberReader: LineNumberReader, filePath: string){
var lineNumberReader = lineNumberReader
var filePath = filePath

        try {
            
    var fileReader: FileReader = new FileReader(filePath);
        
        
;
    
lineNumberReader= new LineNumberReader(fileReader);
    
cpuHashMap= new HashMap<any, any>();
    

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    
    var fileVector: BasicArrayList = SubDirectory.getInstance()!.search(filePath, new AbFile(FilePathData.getInstance()!.SEPARATOR))!;
        
        
;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append("Cpu File Vector Size: ")!.appendint(fileVector!.size())!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                        if(!fileVector!.isEmpty();

                        )
                        
                                    {
                                    
    var file: AbFile = fileVector!.get(0);

                         as AbFile;
        
        
;
    
lineNumberReader= new LineNumberReader(new FileReader(file.getPath()));
    

                                    }
                                

                                    }
                                

                        if(lineNumberReader != 
                                    null
                                )
                        
                                    {
                                    
    var nextLine: string = lineNumberReader!.readLine()!;
        
        
;
    

        while(lineNumberReader != 
                                    null
                                 && nextLine != 
                                    null
                                )
        {

    var index: number = nextLine!.indexOf(':')!;
        
        
;
    

                        if(index >= 0)
                        
                                    {
                                    
    var key: string = nextLine!.substring(0, index)!;
        
        
;
    

    var valueIndex: number = index +1;
        
        
;
    

    var value: string = nextLine!.substring(valueIndex, nextLine!.length)!;
        
        
;
    

                        if(key.indexOf(CpuInfo.PROCESSOR.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.PROCESSOR, value);

                        

                        if(key.indexOf(CpuInfo.VENDORID.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.VENDORID, value);

                        

                        if(key.indexOf(CpuInfo.CPUFAMILY.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.CPUFAMILY, value);

                        

                        if(key.indexOf(CpuInfo.MODEL.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.MODEL, value);

                        

                        if(key.indexOf(CpuInfo.MODELNAME.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.MODELNAME, value);

                        

                        if(key.indexOf(CpuInfo.STEPPING.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.STEPPING, value);

                        

                        if(key.indexOf(CpuInfo.CPUMHZ.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.CPUMHZ, value);

                        

                        if(key.indexOf(CpuInfo.CACHESIZE.toString()) >= 0)
                        cpuHashMap!.put(CpuInfo.CACHESIZE, value);

                        

                                    }
                                
nextLine= lineNumberReader!.readLine();
    
}


                                    }
                                

         finally {
            
                        if(lineNumberReader != 
                                    null
                                )
                        lineNumberReader!.close();

                        

         }
        
}


    public getProcessor(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.PROCESSOR);

                         as String;
    
}


    public getVendorId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.VENDORID);

                         as String;
    
}


    public getCpuFamily(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.CPUFAMILY);

                         as String;
    
}


    public getModel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.MODEL);

                         as String;
    
}


    public getModelName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.MODELNAME);

                         as String;
    
}


    public getStepping(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.STEPPING);

                         as String;
    
}


    public getCpuSpeed(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.CPUMHZ);

                         as String;
    
}


    public getCacheSize(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuHashMap!.get(CpuInfo.CACHESIZE);

                         as String;
    
}


    public compareTo(cpuInterface: CpuInterface): boolean{
var cpuInterface = cpuInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public compareTo(componentInterface: HardwareComponentInterface): boolean{
var componentInterface = componentInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public toString(): string{

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
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
                        return stringMaker!.toString();

                        ;
    
}


}
                
            

