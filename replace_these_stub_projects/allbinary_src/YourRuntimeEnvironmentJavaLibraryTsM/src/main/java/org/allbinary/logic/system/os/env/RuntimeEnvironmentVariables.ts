
        /* Generated Code Do Not Modify */
        



import { BufferedReader } from "../../../../../../java/io/BufferedReader.js";

    
import { InputStreamReader } from "../../../../../../java/io/InputStreamReader.js";

    
import { Properties } from "../../../../../../java/util/Properties.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GenericOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystemFactory } from "../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { OperatingSystems } from "../../../../../../org/allbinary/logic/system/os/OperatingSystems.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

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
                        return System.getProperty("java.java.home");
    
}


    public getVariable(var: string): string{
var var = var

    var environmentVariables: Properties = this.get()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return environmentVariables!.getProperty(var);
    
}


    public get(): Properties{

        try {
            
    var process: Process


    var environmentVariables: Properties = new Properties();
        
        


    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        


    var osName: string = operatingSystemInterface!.getName()!;
        
        


    var linuxCommand: string = "env";
        
        


    var windowsCommand: string = "cmd.exe /c set";
        
        


    var solarisCommand: string = linuxCommand;
        
        


    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;
        
        


    
                        if(osName!.compareTo(operatingSystems!.LINUX) == 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(linuxCommand)

                                    }
                                
                             else 
    
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(windowsCommand)

                                    }
                                
                             else 
    
                        if(osName!.compareTo(operatingSystems!.SOLARIS) == 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(solarisCommand)

                                    }
                                
                        else {
                            


                            throw Exception()

                        }
                            

    var processInputStreamReader: InputStreamReader = new InputStreamReader(process.getInputStream());
        
        


    var bufferedReader: BufferedReader = new BufferedReader(processInputStreamReader);
        
        


    var keyValuePair: string


        while((keyValuePair= bufferedReader!.readLine()) != 
                                    null
                                )
        {

    var index: number = keyValuePair!.indexOf('=')!;
        
        


    var key: string = keyValuePair!.substring(0, index)!;
        
        


    var value: string = keyValuePair!.substring(index +1)!;
        
        

put(key, value)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return environmentVariables;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "get()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getTempDir(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.io.tmpdir");
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getTempDir()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getLibraryPath(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.library.path");
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getLibraryPath()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getClassPath(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("java.class.path");
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getClassPath()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public updateLibraryPath(libPath: string){
var libPath = libPath

        try {
            
    var existingPath: string = this.getLibraryPath()!;
        
        

setProperty("java.library.path", libPath +":" +existingPath)
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "updateLibraryPath()", e)

                                    }
                                
}

}


    public getUserHome(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("user.home");
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getUserHome()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getUserDir(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.getProperty("user.dir");
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getUserDir()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public set(){

        try {
            } catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "get()", e)

                                    }
                                
}

}


    public setVariable(var: string, val: string){
var var = var
var val = val

        try {
            
    var process: Process


    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        


    var operatingSystems: OperatingSystems = OperatingSystems.getInstance()!;
        
        


    var osName: string = operatingSystemInterface!.getName()!;
        
        


    var windowsCommand: string = "cmd.exe /c set" +var +"=" +val;
        
        


    
                        if(osName!.compareTo(operatingSystems!.LINUX) == 0)
                        
                                    {
                                    


                            throw Exception()

                                    }
                                
                             else 
    
                        if(osName!.indexOf(operatingSystems!.WINDOWS) >= 0)
                        
                                    {
                                    process= Runtime.getRuntime()!.exec(windowsCommand)

                                    }
                                
                             else 
    
                        if(osName!.compareTo(operatingSystems!.SOLARIS) == 0)
                        
                                    {
                                    


                            throw Exception()

                                    }
                                
                        else {
                            


                            throw Exception()

                        }
                            
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.OSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "setVariable()", e)

                                    }
                                
}

}


}
                
            

