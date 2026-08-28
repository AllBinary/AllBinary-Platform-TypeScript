
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
        
//not game specific package import { FileReader } from '../../../../../../java/io/FileReader.js';
      const FileReader = globalThis.java.io.FileReader;

      
//not game specific package import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
      const LineNumberReader = globalThis.java.io.LineNumberReader;

      
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
      const LogConfigTypeFactory = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory;

      
//not game specific package import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
      const LogConfigTypes = globalThis.org.allbinary.logic.communication.log.config.type.LogConfigTypes;

      
//not game specific package import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FilePathData } from '../../../../../../org/allbinary/logic/io/file/FilePathData.js';
      const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;

      
//not game specific package import { SubDirectory } from '../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
      const SubDirectory = globalThis.org.allbinary.logic.io.file.directory.SubDirectory;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { HardwareInterface } from '../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js';
      const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

      
//not game specific package import { BridgeInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/BridgeInterface.js';
      const BridgeInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.BridgeInterface;

      
//not game specific package import { CpuInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/CpuInterface.js';
      const CpuInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.CpuInterface;

      
//not game specific package import { EthernetInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/EthernetInterface.js';
      const EthernetInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.EthernetInterface;

      
//not game specific package import { FireWireInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/FireWireInterface.js';
      const FireWireInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.FireWireInterface;

      
//not game specific package import { HardDriveControllerInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveControllerInterface.js';
      const HardDriveControllerInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardDriveControllerInterface;

      
//not game specific package import { HardDriveInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardDriveInterface.js';
      const HardDriveInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardDriveInterface;

      
//not game specific package import { HardwareComponentInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js';
      const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;

      
//not game specific package import { MachineAccessControlAddressInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MachineAccessControlAddressInterface.js';
      const MachineAccessControlAddressInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MachineAccessControlAddressInterface;

      
//not game specific package import { MediaInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MediaInterface.js';
      const MediaInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MediaInterface;

      
//not game specific package import { MonitorInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/MonitorInterface.js';
      const MonitorInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.MonitorInterface;

      
//not game specific package import { UsbInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/UsbInterface.js';
      const UsbInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.UsbInterface;

      
//not game specific package import { VideoInterface } from '../../../../../../org/allbinary/logic/system/hardware/components/interfaces/VideoInterface.js';
      const VideoInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.VideoInterface;

      
//not game specific package import { Cpu } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Cpu.js';
      const Cpu = globalThis.org.allbinary.logic.system.hardware.components.linux.Cpu;

      
//not game specific package import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PCComponentFactory } from './PCComponentFactory.js';

export class LinuxHardware
            extends Object
         implements HardwareInterface {
        

    private static readonly PCIFILE: string = "/proc/pci";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private componentInterfaceVector: Vector;

    private videoInterfaceVector: Vector;

    private hardDriveControllerInterfaceVector: Vector;

    private cpuInterfaceVector: Vector;

    private usbInterfaceVector: Vector;

    private ethernetInterfaceVector: Vector;

    private multimediaInterfaceVector: Vector;

    private fireWireInterfaceVector: Vector;

    private bridgeInterfaceVector: Vector;

    private hardDriveInterfaceVector: Vector;

    private macInterfaceVector: Vector;

    private monitorInterfaceVector: Vector;

    private readonly NAME: string = "Linux Hardware Profile";

    private readonly MINHARDWARE: number = 5;

public constructor (path: string){

            super();
        this.init(path);
    
}


public constructor (){

            super();
        this.init(PCIFILE);
    

                        if(this.componentInterfaceVector!.length < this.MINHARDWARE)
                        
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
                                    this.logUtil!.putF("Found Hardware Device: " +this.componentInterfaceVector!.length, this, this.commonStrings!.CONSTRUCTOR);
    

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
    

    var size: number = this.componentInterfaceVector!.length!;;
    




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


    public difference(hardwareInterface: HardwareInterface): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
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



