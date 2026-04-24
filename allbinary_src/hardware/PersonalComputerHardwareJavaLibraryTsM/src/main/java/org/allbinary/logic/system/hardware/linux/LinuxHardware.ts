
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
        



import { FileReader } from "../../../../../../java/io/FileReader.js";

    
import { LineNumberReader } from "../../../../../../java/io/LineNumberReader.js";

    
import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbFile } from "../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FilePathData } from "../../../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { SubDirectory } from "../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { HardwareInterface } from "../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js";

    
import { BridgeInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/BridgeInterface.js";

    
import { CpuInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/CpuInterface.js";

    
import { EthernetInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/EthernetInterface.js";

    
import { FireWireInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/FireWireInterface.js";

    
import { HardDriveControllerInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveControllerInterface.js";

    
import { HardDriveInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveInterface.js";

    
import { HardwareComponentInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { MachineAccessControlAddressInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MachineAccessControlAddressInterface.js";

    
import { MediaInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MediaInterface.js";

    
import { MonitorInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MonitorInterface.js";

    
import { UsbInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/UsbInterface.js";

    
import { VideoInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/VideoInterface.js";

    
import { Cpu } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Cpu.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PCComponentFactory } from "./PCComponentFactory.js";

export class LinuxHardware
            extends Object
         implements HardwareInterface {
        

    private static readonly PCIFILE: string = "/proc/pci";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private componentInterfaceVector: Vector

    private videoInterfaceVector: Vector

    private hardDriveControllerInterfaceVector: Vector

    private cpuInterfaceVector: Vector

    private usbInterfaceVector: Vector

    private ethernetInterfaceVector: Vector

    private multimediaInterfaceVector: Vector

    private fireWireInterfaceVector: Vector

    private bridgeInterfaceVector: Vector

    private hardDriveInterfaceVector: Vector

    private macInterfaceVector: Vector

    private monitorInterfaceVector: Vector

    private readonly NAME: string = "Linux Hardware Profile";
        
        

    private readonly MINHARDWARE: number = 5;
        
        
public constructor (path: string){

            super();
        var path = path
this.init(path);
    
}

public constructor (){

            super();
        this.init(PCIFILE);
    

                        if(this.componentInterfaceVector!.length < this.MINHARDWARE)
                        
                                    {
                                    


                            throw new Error("Not Enough Data For A Valid License On Linux")

                                    }
                                

    var cpu: Cpu = new Cpu();
        
        
;
    

                        if(cpu != 
                                    null
                                )
                        
                                    {
                                    this.cpuInterfaceVector!.add(cpu);
    
this.componentInterfaceVector!.add(cpu);
    

                                    }
                                

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF("Hardware Data: " +this.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
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
                                    this.logUtil!.put("Hardware Data: " +this.toString(), this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e
}

}


                //@Throws(Error::class)
            
    init(lineNumberReader: LineNumberReader, filePath: string){
var lineNumberReader = lineNumberReader
var filePath = filePath

        try {
            this.componentInterfaceVector= new Vector();
    
this.videoInterfaceVector= new Vector();
    
this.hardDriveControllerInterfaceVector= new Vector();
    
this.cpuInterfaceVector= new Vector();
    
this.usbInterfaceVector= new Vector();
    
this.ethernetInterfaceVector= new Vector();
    
this.multimediaInterfaceVector= new Vector();
    
this.fireWireInterfaceVector= new Vector();
    
this.bridgeInterfaceVector= new Vector();
    
this.hardDriveInterfaceVector= new Vector();
    
this.macInterfaceVector= new Vector();
    
this.monitorInterfaceVector= new Vector();
    

    var pciFile: FileReader = new FileReader(filePath);
        
        
;
    
lineNumberReader= new LineNumberReader(pciFile);
    

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    
    var fileVector: BasicArrayList = SubDirectory.getInstance()!.search(filePath, new AbFile(FilePathData.getInstance()!.SEPARATOR))!;
        
        
;
    

                        if(!fileVector!.isEmpty();)
                        
                                    {
                                    
    var file: AbFile = fileVector!.get(0); as AbFile;
        
        
;
    
lineNumberReader= new LineNumberReader(new FileReader(file.getPath()));
    

                                    }
                                

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("No Linux File Data")

                                    }
                                

                                    }
                                

                        if(lineNumberReader != 
                                    null
                                )
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF("PCI File Found", this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

    var nextLine: string = lineNumberReader!.readLine()!;
        
        
;
    

        while(lineNumberReader != 
                                    null
                                 && nextLine != 
                                    null
                                )
        {

                        if(this.isNextHardware(nextLine))
                        
                                    {
                                    break;

                    

                                    }
                                
nextLine= lineNumberReader!.readLine();
    
}


        while(this.isNextHardware(nextLine))
        {

    var componentData: StringMaker = new StringMaker();
        
        
;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF("Found Hardware Device: " +this.componentInterfaceVector!.length, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
componentData!.append(nextLine);
    
componentData!.append(CommonSeps.getInstance()!.NEW_LINE);
    
nextLine= lineNumberReader!.readLine();
    

    var componentType: string = PCComponentFactory.getInstance()!.java.componentType!;
        
        
;
    

        while(lineNumberReader != 
                                    null
                                )
        {
componentData!.append(nextLine);
    
componentData!.append(CommonSeps.getInstance()!.NEW_LINE);
    
nextLine= lineNumberReader!.readLine();
    

                        if(nextLine == 
                                    null
                                 || this.isNextHardware(nextLine))
                        
                                    {
                                    break;

                    

                                    }
                                
}


    var componentInterface: HardwareComponentInterface = PCComponentFactory.getInstance()!.getInstance(componentType, componentData!.toString())!;
        
        
;
    

                        if(componentInterface != 
                                    null
                                )
                        
                                    {
                                    this.componentInterfaceVector!.add(componentInterface);
    

                                    }
                                
}


                                    }
                                
                        else {
                            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF("Could not load PCI File", this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                        }
                            
lineNumberReader!.close();
    

         finally {
            
                        if(lineNumberReader != 
                                    null
                                )
                        lineNumberReader!.close();

         }
        
}


    public getMultimedia(index: number): MediaInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.multimediaInterfaceVector!.get(index); as MediaInterface;
    
}


    public getBridge(index: number): BridgeInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bridgeInterfaceVector!.get(index); as BridgeInterface;
    
}


    public getCpu(index: number): CpuInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuInterfaceVector!.get(index); as CpuInterface;
    
}


    public getEthernet(index: number): EthernetInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ethernetInterfaceVector!.get(index); as EthernetInterface;
    
}


    public getFireWire(index: number): FireWireInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fireWireInterfaceVector!.get(index); as FireWireInterface;
    
}


    public getHardDriveController(index: number): HardDriveControllerInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardDriveControllerInterfaceVector!.get(index); as HardDriveControllerInterface;
    
}


    public getHardDrive(index: number): HardDriveInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardDriveInterfaceVector!.get(index); as HardDriveInterface;
    
}


    public getMachineAccessControlAddress(index: number): MachineAccessControlAddressInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.macInterfaceVector!.get(index); as MachineAccessControlAddressInterface;
    
}


    public getMonitor(index: number): MonitorInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.monitorInterfaceVector!.get(index); as MonitorInterface;
    
}


    public getUsb(index: number): UsbInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.usbInterfaceVector!.get(index); as UsbInterface;
    
}


    public getVideo(index: number): VideoInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.videoInterfaceVector!.get(index); as VideoInterface;
    
}


    public getComponent(index: number): HardwareComponentInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterfaceVector!.get(index); as HardwareComponentInterface;
    
}


    public toString(): string{

    var hardwareBuffer: StringMaker = new StringMaker();
        
        
;
    

    var size: number = this.componentInterfaceVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var componentInterface: HardwareComponentInterface = this.componentInterfaceVector!.get(index); as HardwareComponentInterface;
        
        
;
    
hardwareBuffer!.append("Component ");
    
hardwareBuffer!.appendint(index);
    
hardwareBuffer!.append(": \n");
    
hardwareBuffer!.append(componentInterface!.toString());
    
hardwareBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardwareBuffer!.toString();;
    
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


    public isNextHardware(nextLine: string): boolean{
var nextLine = nextLine

                        if(nextLine != 
                                    null
                                )
                        
                                    {
                                    
    var index: number = nextLine!.indexOf("Bus")!;
        
        
;
    

                        if(index >= 0 && index < 4)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

