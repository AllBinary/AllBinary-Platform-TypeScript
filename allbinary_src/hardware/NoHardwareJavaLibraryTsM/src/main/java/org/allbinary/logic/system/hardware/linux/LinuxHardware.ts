
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
        
            import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
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

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LinuxHardware
            extends Object
         implements HardwareInterface {
        

public constructor (){

            super();
        }


    public getMultimedia(index: number): MediaInterface{



                            throw new RuntimeException();
                    
}


    public getBridge(index: number): BridgeInterface{



                            throw new RuntimeException();
                    
}


    public getCpu(index: number): CpuInterface{



                            throw new RuntimeException();
                    
}


    public getEthernet(index: number): EthernetInterface{



                            throw new RuntimeException();
                    
}


    public getFireWire(index: number): FireWireInterface{



                            throw new RuntimeException();
                    
}


    public getHardDriveController(index: number): HardDriveControllerInterface{



                            throw new RuntimeException();
                    
}


    public getHardDrive(index: number): HardDriveInterface{



                            throw new RuntimeException();
                    
}


    public getMachineAccessControlAddress(index: number): MachineAccessControlAddressInterface{



                            throw new RuntimeException();
                    
}


    public getMonitor(index: number): MonitorInterface{



                            throw new RuntimeException();
                    
}


    public getUsb(index: number): UsbInterface{



                            throw new RuntimeException();
                    
}


    public getVideo(index: number): VideoInterface{



                            throw new RuntimeException();
                    
}


    public getComponent(index: number): HardwareComponentInterface{



                            throw new RuntimeException();
                    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
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



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



