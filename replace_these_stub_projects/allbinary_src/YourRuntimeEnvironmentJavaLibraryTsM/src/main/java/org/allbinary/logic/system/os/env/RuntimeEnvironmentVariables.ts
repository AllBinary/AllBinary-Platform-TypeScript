
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Runtime } from '../../../../../../java/lang/Runtime.js';
        
            import { System } from '../../../../../../java/lang/System.js';
        
import { BufferedReader } from '../../../../../../java/io/BufferedReader.js';
//not GWT import const BufferedReader

//not plain js import { InputStreamReader } 
const InputStreamReader = globalThis.java.io.InputStreamReader;
type InputStreamReader<T = any, U = any> = typeof InputStreamReader extends abstract new (...args: any[]) => infer Instance ? Instance : typeof InputStreamReader;

import { Properties } from '../../../../../../java/util/Properties.js';
//not GWT import const Properties

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { GenericOperatingSystem } from '../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem

import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory

import { OperatingSystems } from '../../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
//not GWT import const OperatingSystems

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Process } from './Process.js';
//sameFolderImports - not GWT import - same folder const Process

export class RuntimeEnvironmentVariables
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }


    public getTest1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.java.home");;
    
}


    public getVariable(var: string): string{

    let environmentVariables: Properties = this.get()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return environmentVariables!.getProperty(var);;
    
}


    public get(): Properties{

 try { 
    let process: Process;;
    

    let environmentVariables: Properties = new Properties();;
    

    let operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

    let osName: string = operatingSystemInterface!.getName()!;;
    

    let linuxCommand: string = "env";;
    

    let windowsCommand: string = "cmd.exe /c set";;
    

    let solarisCommand: string = linuxCommand;;
    

    let operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

                        if(osName!.compareTo(operatingSystems!.LINUX) == 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(linuxCommand);
    

                                    }
                                
                             else 
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(windowsCommand);
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.SOLARIS) == 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(solarisCommand);
    

                                    }
                                
                        else {
                            


                            throw new Exception();
                    

                        }
                            

    let processInputStreamReader: InputStreamReader = new InputStreamReader(process.getInputStream());;
    

    let bufferedReader: BufferedReader = new BufferedReader(processInputStreamReader);;
    

    let keyValuePair: string;;
    

        while((keyValuePair= bufferedReader!.readLine()) != 
                                    null
                                )
        {

    let index: number = keyValuePair!.indexOf('=')!;;
    

    let key: string = keyValuePair!.substring(0, index)!;;
    

    let value: string = keyValuePair!.substring(index +1)!;;
    
environmentVariables!.put(key, value);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return environmentVariables;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "get()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getTempDir(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.io.tmpdir");;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getTempDir()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getLibraryPath(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.library.path");;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getLibraryPath()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getClassPath(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.class.path");;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getClassPath()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public updateLibraryPath(libPath: string){

 try { 
    let existingPath: string = this.getLibraryPath()!;;
    
System.setProperty("java.library.path", libPath +":" +existingPath);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateLibraryPath()", e);
    

                                    }
                                

 }
   }
 
}


    public getUserHome(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("user.home");;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getUserHome()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public getUserDir(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("user.dir");;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getUserDir()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public set(){

 try {  }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "get()", e);
    

                                    }
                                

 }
   }
 
}


    public setVariable(var: string, val: string){

 try { 
    let process: Process;;
    

    let operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

    let operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;;
    

    let osName: string = operatingSystemInterface!.getName()!;;
    

    let windowsCommand: string = "cmd.exe /c set" +var +"=" +val;;
    

                        if(osName!.compareTo(operatingSystems!.LINUX) == 0)
                        
                                    {
                                    


                            throw new Exception();
                    

                                    }
                                
                             else 
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(windowsCommand);
    

                                    }
                                
                             else 
                        if(osName!.compareTo(operatingSystems!.SOLARIS) == 0)
                        
                                    {
                                    


                            throw new Exception();
                    

                                    }
                                
                        else {
                            


                            throw new Exception();
                    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setVariable()", e);
    

                                    }
                                

 }
   }
 
}


}

