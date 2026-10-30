
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoHardware } from './NoHardware.js';
//sameFolderImports - not GWT import - same folder const NoHardware
import { HardwareInterface } from './HardwareInterface.js';
//sameFolderImports - not GWT import - same folder const HardwareInterface
import { HardwareFactory } from './HardwareFactory.js';
//sameFolderImports - not GWT import - same folder const HardwareFactory

export class SystemHardwareFactory
            extends Object
         {
        

    private static readonly instance: SystemHardwareFactory = new SystemHardwareFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): SystemHardwareFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SystemHardwareFactory.instance;
    
}


    public static static_toString(): string{

    let systemHardwareFactory: SystemHardwareFactory = SystemHardwareFactory.getInstance()!;;
    

    let osBuffer: StringMaker = new StringMaker();;
    
osBuffer!.append("Hardware Info: \n");
    

                        if(systemHardwareFactory!.hardwareInterface != 
                                    null
                                )
                        
                                    {
                                    osBuffer!.append(systemHardwareFactory!.hardwareInterface!.toString());
    

                                    }
                                
                        else {
                            osBuffer!.append(StringUtil.getInstance()!.NULL_STRING);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private hardwareInterface: HardwareInterface = NoHardware.getInstance()!;

private constructor (){

            super();
        }


    public getInstance$overload2(operatingSystemInterface: GenericOperatingSystem): HardwareInterface{

 try { 
                        if(this.hardwareInterface == NoHardware.getInstance())
                        
                                    {
                                    this.hardwareInterface= HardwareFactory.getInstance()!.getInstance(operatingSystemInterface);
    

                                    }
                                
this.logUtil!.putF("Found Hardware", this, this.commonStrings!.CONSTRUCTOR);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hardwareInterface;
    
}


}

