
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader = globalThis.java.io.FileReader;

      
import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader = globalThis.java.io.LineNumberReader;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
import { SubDirectory } from '../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory = globalThis.org.allbinary.logic.io.file.directory.SubDirectory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { HardwareInterface } from '../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js';
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

      
import { BridgeInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/BridgeInterface.js';
//not GWT import const BridgeInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.BridgeInterface;

      
import { CpuInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/CpuInterface.js';
//not GWT import const CpuInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.CpuInterface;

      
import { EthernetInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/EthernetInterface.js';
//not GWT import const EthernetInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.EthernetInterface;

      
import { FireWireInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/FireWireInterface.js';
//not GWT import const FireWireInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.FireWireInterface;

      
import { HardDriveControllerInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveControllerInterface.js';
//not GWT import const HardDriveControllerInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardDriveControllerInterface;

      
import { HardDriveInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveInterface.js';
//not GWT import const HardDriveInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardDriveInterface;

      
import { HardwareComponentInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
//not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;

      
import { MachineAccessControlAddressInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MachineAccessControlAddressInterface.js';
//not GWT import const MachineAccessControlAddressInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MachineAccessControlAddressInterface;

      
import { MediaInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MediaInterface.js';
//not GWT import const MediaInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MediaInterface;

      
import { MonitorInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MonitorInterface.js';
//not GWT import const MonitorInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MonitorInterface;

      
import { UsbInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/UsbInterface.js';
//not GWT import const UsbInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.UsbInterface;

      
import { VideoInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/VideoInterface.js';
//not GWT import const VideoInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.VideoInterface;

      
import { Cpu } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Cpu.js';
//not GWT import const Cpu = globalThis.org.allbinary.logic.system.hardware.components.linux.Cpu;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PCComponentFactory } from './PCComponentFactory.js';
//not GWT import - same folder const PCComponentFactory = globalThis.org.allbinary.logic.system.hardware.linux.PCComponentFactory;

                
export class LinuxHardware
            extends Object
         implements HardwareInterface {
        

    private static readonly PCIFILE: string = "/proc/pci";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private componentInterfaceVector: BasicArrayList;

    private videoInterfaceVector: BasicArrayList;

    private hardDriveControllerInterfaceVector: BasicArrayList;

    private cpuInterfaceVector: BasicArrayList;

    private usbInterfaceVector: BasicArrayList;

    private ethernetInterfaceVector: BasicArrayList;

    private multimediaInterfaceVector: BasicArrayList;

    private fireWireInterfaceVector: BasicArrayList;

    private bridgeInterfaceVector: BasicArrayList;

    private hardDriveInterfaceVector: BasicArrayList;

    private macInterfaceVector: BasicArrayList;

    private monitorInterfaceVector: BasicArrayList;

    private readonly NAME: string = "Linux Hardware Profile";

    private readonly MINHARDWARE: number = 5;

public constructor (path: string){

            super();
        this.init(path);
    
}


public constructor (){

            super();
        this.init(PCIFILE);
    

                        if(this.componentInterfaceVector!.size() < this.MINHARDWARE)
                        
                                    {
                                    


                            throw new Exception("Not Enough Data For A Valid License On Linux");
                    

                                    }
                                

    var cpu: Cpu = new Cpu();;
    

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


                //@Throws(Exception.constructor)
            
    init(filePath: string){

    var lineNumberReader: LineNumberReader = 
                null
            ;;
    

        try {
            this.init(lineNumberReader, filePath);
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.put("Hardware Data: " +this.toString(), this, this.commonStrings!.CONSTRUCTOR, e);
    

                                    }
                                



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    init(lineNumberReader: LineNumberReader, filePath: string){

        try {
            this.componentInterfaceVector= new BasicArrayListD();
    
this.videoInterfaceVector= new BasicArrayListD();
    
this.hardDriveControllerInterfaceVector= new BasicArrayListD();
    
this.cpuInterfaceVector= new BasicArrayListD();
    
this.usbInterfaceVector= new BasicArrayListD();
    
this.ethernetInterfaceVector= new BasicArrayListD();
    
this.multimediaInterfaceVector= new BasicArrayListD();
    
this.fireWireInterfaceVector= new BasicArrayListD();
    
this.bridgeInterfaceVector= new BasicArrayListD();
    
this.hardDriveInterfaceVector= new BasicArrayListD();
    
this.macInterfaceVector= new BasicArrayListD();
    
this.monitorInterfaceVector= new BasicArrayListD();
    

    var pciFile: FileReader = new FileReader(filePath);;
    
lineNumberReader= new LineNumberReader(pciFile);
    

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    
    var fileVector: BasicArrayList = SubDirectory.getInstance()!.search(filePath, AbFile.createAbFile(FilePathData.getInstance()!.PATH_START))!;;
    

                        if(!fileVector!.isEmpty())
                        
                                    {
                                    
    var file: AbFile = fileVector!.get(0) as AbFile;;
    
lineNumberReader= new LineNumberReader(new FileReader(file.getPath()));
    

                                    }
                                

                        if(lineNumberReader == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Linux File Data");
                    

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
                                

    var nextLine: string = lineNumberReader!.readLine()!;;
    

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

    var componentData: StringMaker = new StringMaker();;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.OS))
                        
                                    {
                                    this.logUtil!.putF("Found Hardware Device: " +this.componentInterfaceVector!.size(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
componentData!.append(nextLine);
    
componentData!.append(CommonSeps.getInstance()!.NEW_LINE);
    
nextLine= lineNumberReader!.readLine();
    

    var componentType: string = PCComponentFactory.getInstance()!.java.componentType!;;
    

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


    var componentInterface: HardwareComponentInterface = PCComponentFactory.getInstance()!.getInstance(componentType, componentData!.toString())!;;
    

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
                        lineNumberReader!.close()

         }
        
}


    public getMultimedia(index: number): MediaInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.multimediaInterfaceVector!.get(index) as MediaInterface;
    
}


    public getBridge(index: number): BridgeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bridgeInterfaceVector!.get(index) as BridgeInterface;
    
}


    public getCpu(index: number): CpuInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cpuInterfaceVector!.get(index) as CpuInterface;
    
}


    public getEthernet(index: number): EthernetInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ethernetInterfaceVector!.get(index) as EthernetInterface;
    
}


    public getFireWire(index: number): FireWireInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fireWireInterfaceVector!.get(index) as FireWireInterface;
    
}


    public getHardDriveController(index: number): HardDriveControllerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardDriveControllerInterfaceVector!.get(index) as HardDriveControllerInterface;
    
}


    public getHardDrive(index: number): HardDriveInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardDriveInterfaceVector!.get(index) as HardDriveInterface;
    
}


    public getMachineAccessControlAddress(index: number): MachineAccessControlAddressInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.macInterfaceVector!.get(index) as MachineAccessControlAddressInterface;
    
}


    public getMonitor(index: number): MonitorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.monitorInterfaceVector!.get(index) as MonitorInterface;
    
}


    public getUsb(index: number): UsbInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.usbInterfaceVector!.get(index) as UsbInterface;
    
}


    public getVideo(index: number): VideoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.videoInterfaceVector!.get(index) as VideoInterface;
    
}


    public getComponent(index: number): HardwareComponentInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentInterfaceVector!.get(index) as HardwareComponentInterface;
    
}


    public toString(): string{

    var hardwareBuffer: StringMaker = new StringMaker();;
    

    var size: number = this.componentInterfaceVector!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var componentInterface: HardwareComponentInterface = this.componentInterfaceVector!.get(index) as HardwareComponentInterface;;
    
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public difference(hardwareInterface: HardwareInterface): ABHashtable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StdUtil.getInstance()!.NULL_TABLE;
    
}


    public isNextHardware(nextLine: string): boolean{

                        if(nextLine != 
                                    null
                                )
                        
                                    {
                                    
    var index: number = nextLine!.indexOf("Bus")!;;
    

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



