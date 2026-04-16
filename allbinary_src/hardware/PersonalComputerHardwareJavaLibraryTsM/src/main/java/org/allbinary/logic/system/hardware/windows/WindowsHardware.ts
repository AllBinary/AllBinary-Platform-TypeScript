
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
        



import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { HardwareInterface } from "../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js";

    
import { ComponentFactory } from "../../../../../../org/allbinary/logic/system/hardware/components/ComponentFactory.js";

    
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

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

import { ETHERNET } from "./ETHERNET.js";

import { BRIDGE } from "./BRIDGE.js";

import { IDE } from "./IDE.js";

import { MULTIMEDIA } from "./MULTIMEDIA.js";

import { SCSI } from "./SCSI.js";

import { USB } from "./USB.js";

import { VGA } from "./VGA.js";

import { VGA } from "./VGA.js";

import { USB } from "./USB.js";

import { SCSI } from "./SCSI.js";

import { MULTIMEDIA } from "./MULTIMEDIA.js";

import { IDE } from "./IDE.js";

import { BRIDGE } from "./BRIDGE.js";

import { ETHERNET } from "./ETHERNET.js";

export class WindowsHardware
            extends Object
        
                , HardwareInterface {
        

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

    private readonly NAME: string = "Windows Hardware Profile";
        
        

    private readonly MINHARDWARE: number = 0;
        
        

    private readonly componentFactory: ComponentFactory = ComponentFactory.getInstance()!;
        
        
public constructor (){

            super();
            
        try {
            componentInterfaceVector= new Vector();
    
videoInterfaceVector= new Vector();
    
hardDriveControllerInterfaceVector= new Vector();
    
cpuInterfaceVector= new Vector();
    
usbInterfaceVector= new Vector();
    
ethernetInterfaceVector= new Vector();
    
multimediaInterfaceVector= new Vector();
    
fireWireInterfaceVector= new Vector();
    
bridgeInterfaceVector= new Vector();
    
hardDriveInterfaceVector= new Vector();
    
macInterfaceVector= new Vector();
    
monitorInterfaceVector= new Vector();
    

                        if(componentInterfaceVector!.length < MINHARDWARE)
                        
                                    throw new Error("Not Enough Data For A Valid License On Windows")

                //: 
} catch(e) 
            {



                            throw e
}

}


    getComponentType(component: string): string{
var component = component

                        if(component.indexOf(this.componentFactory!.ETHERNET.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.ETHERNET.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.BRIDGE.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.BRIDGE.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.IDE.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.IDE.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.MULTIMEDIA.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.MULTIMEDIA.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.SCSI.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.SCSI.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.USB.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.USB.toString();

                        ;
    

                                    }
                                
                             else 
                        if(component.indexOf(this.componentFactory!.VGA.toString()) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.VGA.toString();

                        ;
    

                                    }
                                
                             else 
                        if()
                        
}


    public getMultimedia(index: number): MediaInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return multimediaInterfaceVector!.get(index);

                         as MediaInterface;
    
}


    public getBridge(index: number): BridgeInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bridgeInterfaceVector!.get(index);

                         as BridgeInterface;
    
}


    public getCpu(index: number): CpuInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cpuInterfaceVector!.get(index);

                         as CpuInterface;
    
}


    public getEthernet(index: number): EthernetInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ethernetInterfaceVector!.get(index);

                         as EthernetInterface;
    
}


    public getFireWire(index: number): FireWireInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fireWireInterfaceVector!.get(index);

                         as FireWireInterface;
    
}


    public getHardDriveController(index: number): HardDriveControllerInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardDriveControllerInterfaceVector!.get(index);

                         as HardDriveControllerInterface;
    
}


    public getHardDrive(index: number): HardDriveInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardDriveInterfaceVector!.get(index);

                         as HardDriveInterface;
    
}


    public getMachineAccessControlAddress(index: number): MachineAccessControlAddressInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return macInterfaceVector!.get(index);

                         as MachineAccessControlAddressInterface;
    
}


    public getMonitor(index: number): MonitorInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return monitorInterfaceVector!.get(index);

                         as MonitorInterface;
    
}


    public getUsb(index: number): UsbInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return usbInterfaceVector!.get(index);

                         as UsbInterface;
    
}


    public getVideo(index: number): VideoInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return videoInterfaceVector!.get(index);

                         as VideoInterface;
    
}


    public getComponent(index: number): HardwareComponentInterface{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return componentInterfaceVector!.get(index);

                         as HardwareComponentInterface;
    
}


    public toString(): string{

    var hardwareBuffer: StringMaker = new StringMaker();
        
        
;
    

    var size: number = componentInterfaceVector!.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var componentInterface: HardwareComponentInterface = componentInterfaceVector!.get(index);

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
                
            

