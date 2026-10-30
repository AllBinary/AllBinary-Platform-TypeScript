
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

        


            import hilog from '@ohos.hilog';
        
            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Closeable } from '../../../../../../java/io/Closeable.js';
//not GWT import const Closeable

import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader

import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader

import { NullCloseable } from '../../../../../../org/allbinary/logic/io/NullCloseable.js';
//not GWT import const NullCloseable

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { HardwareInterface } from '../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js';
//not GWT import const HardwareInterface

import { UnknownHardware } from '../../../../../../org/allbinary/logic/system/hardware/components/android/UnknownHardware.js';
//not GWT import const UnknownHardware

import { HardwareComponentInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
//not GWT import const HardwareComponentInterface

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AndroidHardware
            extends Object
         implements HardwareInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private componentInterfaceVector: BasicArrayList = new BasicArrayListD();

    private readonly PROC_BUS_INPUT_DIRECTORY: string = "/proc/bus/input/";

    private readonly DEVICES: string = this.PROC_BUS_INPUT_DIRECTORY +"devices/";

    private readonly MINHARDWARE: number = 3;

public constructor (){

            super();
        this.init(this.DEVICES);
    

    let size: number = this.componentInterfaceVector!.size()!;;
    

                        if(size < this.MINHARDWARE)
                        
                                    {
                                    


                            throw new Exception("Not Enough Data For A Valid License On Linux");
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    init(filePath: string){

    let lineNumberReader: Closeable = NullCloseable.NULL_CLOSEABLE;;
    

 try { lineNumberReader= this.get(filePath);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Hardware Data: " +this.toString(), this, this.commonStrings!.INIT, e);
    



                            throw e;
                    

 }
   }
 finally { 
                        if(lineNumberReader != 
                                    null
                                )
                        
                                    {
                                    lineNumberReader!.close();
    

                                    }
                                
 }
}


                //@Throws(Exception.constructor)
            
    get(filePath: string): LineNumberReader{
this.componentInterfaceVector= new BasicArrayListD();
    

    let pciFile: FileReader = new FileReader(filePath);;
    

    let lineNumberReader: LineNumberReader = new LineNumberReader(pciFile);;
    
this.logUtil!.putF("File Found", this, this.commonStrings!.CONSTRUCTOR);
    

    let nextLine: string = lineNumberReader!.readLine()!;;
    

        while(nextLine != 
                                    null
                                )
        {
nextLine= lineNumberReader!.readLine();
    
this.componentInterfaceVector!.add(new UnknownHardware(nextLine));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lineNumberReader;
    
}


    public getComponent(index: number): HardwareComponentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterfaceVector!.get(index) as HardwareComponentInterface;
    
}


    public toString(): string{

    let stringBuilder: StringMaker = new StringMaker();;
    

    let size: number = this.componentInterfaceVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let componentInterface: HardwareComponentInterface = this.componentInterfaceVector!.get(index) as HardwareComponentInterface;;
    
stringBuilder!.append(componentInterface!.toString());
    
stringBuilder!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuilder!.toString();;
    
}


    public compareTo(hardwareInterface: HardwareInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public difference(hardwareInterface: HardwareInterface): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


}

