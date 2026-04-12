
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
        



            import Hashtable from "@ohos.util.HashMap";
        
import { Closeable } from "../../../../../../java/io/Closeable.js";

    
import { FileReader } from "../../../../../../java/io/FileReader.js";

    
import { LineNumberReader } from "../../../../../../java/io/LineNumberReader.js";

    

//import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { NullCloseable } from "../../../../../../org/allbinary/logic/io/NullCloseable.js";

    
import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { HardwareInterface } from "../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js";

    
import { UnknownHardware } from "../../../../../../org/allbinary/logic/system/hardware/components/android/UnknownHardware.js";

    
import { HardwareComponentInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class AndroidHardware
            extends Object
        
                , HardwareInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private componentInterfaceVector: BasicArrayList = new BasicArrayList();
        
        

    private readonly PROC_BUS_INPUT_DIRECTORY: string = "/proc/bus/input/";
        
        

    private readonly DEVICES: string = PROC_BUS_INPUT_DIRECTORY +"devices/";
        
        

    private readonly MINHARDWARE: number = 3;
        
        
public constructor (){

            super();
            this.init(DEVICES);
    

                        if(componentInterfaceVector!.size() < MINHARDWARE)
                        
                                    {
                                    


                            throw new Error("Not Enough Data For A Valid License On Linux")

                                    }
                                
}


                //@Throws(Error::class)
            
    init(filePath: string){
    //var filePath = filePath

    var lineNumberReader: Closeable = NullCloseable.NULL_CLOSEABLE;
        
        
;
    

        try {
            lineNumberReader= this.get(filePath);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Hardware Data: " +this.toString(), this, commonStrings!.INIT, e);
    



                            throw e
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


                //@Throws(Error::class)
            
    get(filePath: string): LineNumberReader{
    //var filePath = filePath
componentInterfaceVector= new BasicArrayList();
    

    var pciFile: FileReader = new FileReader(filePath);
        
        
;
    

    var lineNumberReader: LineNumberReader = new LineNumberReader(pciFile);
        
        
;
    
this.logUtil!.putF("File Found", this, commonStrings!.CONSTRUCTOR);
    

    var nextLine: string = lineNumberReader!.readLine()!;
        
        
;
    

        while(nextLine != 
                                    null
                                )
        {
nextLine= lineNumberReader!.readLine();
    
componentInterfaceVector!.add(new UnknownHardware(nextLine));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lineNumberReader;
    
}


    public getComponent(index: number): HardwareComponentInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentInterfaceVector!.get(index);

                         as HardwareComponentInterface;
    
}


    public toString(): string{

    var hardwareBuffer: StringBuilder = new StringBuilder();
        
        
;
    

    var size: number = this.componentInterfaceVector!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var componentInterface: HardwareComponentInterface = this.componentInterfaceVector!.get(index);

                         as HardwareComponentInterface;
        
        
;
    
hardwareBuffer!.append(componentInterface!.toString());
    
hardwareBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardwareBuffer!.toString();

                        ;
    
}


    public compareTo(hardwareInterface: HardwareInterface): boolean{
var hardwareInterface = hardwareInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public difference(hardwareInterface: HardwareInterface): Hashtable<any, any>{
var hardwareInterface = hardwareInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


}
                
            

