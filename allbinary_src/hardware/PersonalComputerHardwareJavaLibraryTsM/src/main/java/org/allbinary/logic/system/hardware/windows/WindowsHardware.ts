
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { HardwareInterface } from '../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js';
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;

      
import { ComponentFactory } from '../../../../../../org/allbinary/logic/system/hardware/components/ComponentFactory.js';
//not GWT import const ComponentFactory = globalThis.org.allbinary.logic.system.hardware.components.ComponentFactory;

      
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

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class WindowsHardware
            extends Object
         implements HardwareInterface {
        

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

    private readonly NAME: string = "Windows Hardware Profile";

    private readonly MINHARDWARE: number = 0;

    private readonly componentFactory: ComponentFactory = ComponentFactory.getInstance()!;

public constructor (){

            super();
        
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
    

                        if(this.componentInterfaceVector!.size() < this.MINHARDWARE)
                        
                                    throw new Exception("Not Enough Data For A Valid License On Windows");
                                

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


    getComponentType(component: string): string{

                        if(component.indexOf(this.componentFactory!.ETHERNET.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.ETHERNET.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.BRIDGE.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.BRIDGE.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.IDE.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.IDE.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.MULTIMEDIA.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.MULTIMEDIA.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.SCSI.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.SCSI.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.USB.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.USB.toString();;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.VGA.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.VGA.toString();;
    

                                    }
                                
                             else 
                        if()
                        
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


}



