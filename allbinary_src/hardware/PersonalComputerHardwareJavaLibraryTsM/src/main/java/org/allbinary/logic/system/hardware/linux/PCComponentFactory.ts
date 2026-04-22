
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { ComponentFactory } from "../../../../../../org/allbinary/logic/system/hardware/components/ComponentFactory.js";

    
import { HardwareComponentInterface } from "../../../../../../org/allbinary/logic/system/hardware/components/interfaces/HardwareComponentInterface.js";

    
import { Bridge } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Bridge.js";

    
import { Ethernet } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Ethernet.js";

    
import { HardDriveController } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/HardDriveController.js";

    
import { Media } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Media.js";

    
import { PCI } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/PCI.js";

    
import { Unknown } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Unknown.js";

    
import { Usb } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Usb.js";

    
import { Video } from "../../../../../../org/allbinary/logic/system/hardware/components/linux/Video.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PCComponentFactory
            extends Object
         {
        

    private static readonly instance: PCComponentFactory = new PCComponentFactory();
        
        

    public static getInstance(): PCComponentFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly componentFactory: ComponentFactory = ComponentFactory.getInstance()!;
        
        
private constructor (){

            super();
        }


    public getInstance(component: string, componentData: string): HardwareComponentInterface{
var component = component
var componentData = componentData

        try {
            
                        if(component != 
                                    null
                                )
                        
                                    {
                                    
                        if(component.compareTo(this.componentFactory!.ETHERNET.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Ethernet(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.BRIDGE.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Bridge(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.IDE.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HardDriveController(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.MULTIMEDIA.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Media(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.SCSI.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HardDriveController(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.USB.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Usb(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.VGA.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Video(componentData) as HardwareComponentInterface;
    

                                    }
                                
                             else 
                        if(component.compareTo(this.componentFactory!.PCI.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PCI(componentData) as HardwareComponentInterface;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Unknown(componentData) as HardwareComponentInterface;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Unknown(commonStrings!.EXCEPTION);
    
}

}


    public getComponentType(component: string): string{
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
                        if(component.compareTo(this.componentFactory!.PCI.toString()) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.PCI.toString();

                        ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.componentFactory!.UNKNOWN.toString();

                        ;
    
}


}
                
            

