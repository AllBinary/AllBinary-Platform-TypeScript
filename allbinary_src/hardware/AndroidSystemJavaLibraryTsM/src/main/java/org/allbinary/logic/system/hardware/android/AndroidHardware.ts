
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
      //not GWT import const Closeable = globalThis.java.io.Closeable;

      
import { FileReader } from '../../../../../../java/io/FileReader.js';
      //not GWT import const FileReader = globalThis.java.io.FileReader;

      
import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
      //not GWT import const LineNumberReader = globalThis.java.io.LineNumberReader;

      
import { NullCloseable } from '../../../../../../org/allbinary/logic/io/NullCloseable.js';
      //not GWT import const NullCloseable = globalThis.org.allbinary.logic.io.NullCloseable;

      
//not plain js import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { HardwareInterface } from '../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js';
      //not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

      
import { UnknownHardware } from '../../../../../../org/allbinary/logic/system/hardware/components/android/UnknownHardware.js';
      //not GWT import const UnknownHardware = globalThis.org.allbinary.logic.system.hardware.components.android.UnknownHardware;

      
import { HardwareComponentInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
      //not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;

      
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { ABHashtable } from '../../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
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
    

    var size: number = this.componentInterfaceVector!.size()!;;
    

                        if(size < this.MINHARDWARE)
                        
                                    {
                                    


                            throw new Exception("Not Enough Data For A Valid License On Linux");
                    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    init(filePath: string){

    var lineNumberReader: Closeable = NullCloseable.NULL_CLOSEABLE;;
    

        try {
            lineNumberReader= this.get(filePath);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Hardware Data: " +this.toString(), this, this.commonStrings!.INIT, e);
    



                            throw e;
                    
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
    

    var pciFile: FileReader = new FileReader(filePath);;
    

    var lineNumberReader: LineNumberReader = new LineNumberReader(pciFile);;
    
this.logUtil!.putF("File Found", this, this.commonStrings!.CONSTRUCTOR);
    

    var nextLine: string = lineNumberReader!.readLine()!;;
    

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

    var stringBuilder: StringMaker = new StringMaker();;
    

    var size: number = this.componentInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var componentInterface: HardwareComponentInterface = this.componentInterfaceVector!.get(index) as HardwareComponentInterface;;
    
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


    public difference(hardwareInterface: HardwareInterface): ABHashtable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


}



