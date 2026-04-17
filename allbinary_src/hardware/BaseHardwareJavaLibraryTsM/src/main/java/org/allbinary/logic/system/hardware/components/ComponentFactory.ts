
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
        



import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ComponentFactory
            extends Object
         {
        

    private static readonly instance: ComponentFactory = new ComponentFactory();
        
        

    public static getInstance(): ComponentFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly VGA: Component = new Component("VGA");
        
        

    public readonly IDE: Component = new Component("IDE");
        
        

    public readonly SCSI: Component = new Component("SCSI");
        
        

    public readonly BRIDGE: Component = new Component("bridge");
        
        

    public readonly ETHERNET: Component = new Component("Ethernet");
        
        

    public readonly USB: Component = new Component("USB");
        
        

    public readonly MULTIMEDIA: Component = new Component("Multimedia");
        
        

    public readonly PCI: Component = new Component("PCI");
        
        

    public readonly RAID: Component = new Component("RAID");
        
        

    public readonly SMBUS: Component = new Component("SMBus");
        
        

    public readonly PIC: Component = new Component("PIC");
        
        

    public readonly Class: Component = new Component("Class");
        
        

    public readonly UNKNOWN: Component = new Component(CommonStrings.getInstance()!.UNKNOWN);
        
        

}
                
            

