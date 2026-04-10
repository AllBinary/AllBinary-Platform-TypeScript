
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
        



import { FileInputStream } from "../../../../../java/io/FileInputStream.js";

    
import { IOException } from "../../../../../java/io/IOException.js";

    
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Map } from "../../../../../java/util/Map.js";

    
import { LogBuffer } from "../../../../../org/allbinary/logic/communication/log/LogBuffer.js";

    
import { LogFactory } from "../../../../../org/allbinary/logic/communication/log/LogFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbCryptUtil } from "../../../../../org/allbinary/logic/system/security/AbCryptUtil.js";

    

export class AbeClassLoader extends ClassLoader {
        

    private classes: Map = new HashMap<Any, Any>();
        
        

    private PATH: string

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abCryptUtil: AbCryptUtil = AbCryptUtil.getInstance()!;
        
        

    private readonly ENCRYPTED_EXTENSION: string = AbPathData.getInstance()!.EXTENSION_SEP +"abc";
        
        

    private key: string
public constructor (parent: ClassLoader, key: string)                        

                            : super(parent){

            super();
            var parent = parent
var key = key


                            //For kotlin this is before the body of the constructor.
                    
this.key= key
this.PATH= org.allbinary.globals.URLGLOBALS.getWebappPath() +"WEB-INF/classes/"
}


    findLoadedClass1(name: string): KClass<*>{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return classes.get(name) as Class<*>;
    
}


                @Throws(ClassNotFoundException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public loadClass(name: string): KClass<*>{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loadClass(name, false);
    
}


                @Throws(ClassNotFoundException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public loadClass(name: string, resolve: boolean): KClass<*>{
var name = name
var resolve = resolve

    var loadedWith: string = "findLoadedClass1";
        
        


    var logBuffer: LogBuffer = new LogBuffer();
        
        


        try {
            
    var myClass: KClass<*> = this.findLoadedClass1(name)!;
        
        


    
                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    
        try {
            loadedWith= "super.loadClass"

    var normalClass: KClass<*> = super.loadClass(name, resolve)!;
        
        


    
                        if(normalClass != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
    

                                    }
                                
} catch(e: ClassNotFoundException)
            {
add(LogFactory.getInstance("Failed to Load Class: " +name +"\nwith: " +loadedWith, this, "loadClass", e))
}
 catch(e: Exception)
            {
add(LogFactory.getInstance("Failed to Load Class: " +name +"\nwith: " +loadedWith, this, "loadClass", e))
}
 catch(e: NoClassDefFoundError)
            {
add(LogFactory.getInstance("NoClassDefFoundError Failed Loaded Class: " +name +"\nwith: " +loadedWith, this, "loadClass"))
}


    var classBytes: ByteArray = this.loadClassBytesFromFile(name)!;
        
        


    
                        if(classBytes == 
                                    null
                                )
                        
                                    {
                                    


                            throw ClassNotFoundException("My Bytes not loaded for: " +name +"\nwith: " +"loadClassBytes")

                                    }
                                
myClass= defineClass(name, classBytes, 0, classBytes!.length)

    
                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    


                            throw ClassNotFoundException("My Class Not Defineable for: " +name +"\nwith: " +"loadClassBytes")

                                    }
                                
put(name, myClass::class.java)

                                    }
                                
                        else {
                            add(LogFactory.getInstance("Already Loaded: " +name +"\nwith: " +loadedWith, this, "loadClass"))

                        }
                            
resolveClass(myClass::class.java)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myClass;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logAll()
put("Failure loading: " +name +"\nwith: " +loadedWith, this, "loadClass", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    loadClassBytesFromFile(name: string): ByteArray{
var name = name

    var in: FileInputStream = 
                null
            ;
        
        


    var cname: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


        try {
            cname= PATH +name.replace('.', AbPathData.getInstance()!.SEPARATORCHAR) +ENCRYPTED_EXTENSION
in= FileInputStream(cname)

    var decrypted: ByteArray = this.abCryptUtil!.decrypt(in, this.key)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return decrypted;
    
} catch(e: IOException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    put("(Before LogBuffer Output) Failure loading Encrypted: " +name +" File: " +cname, "AbeClassLoader", "loadClassBytes", e)

                                    }
                                
close(in)
}
 catch(e: Exception)
            {

    var loadedWith: string = "loadClassBytes";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    put("(Before LogBuffer Output) Failed to Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes", e)

                                    }
                                
}
 catch(e: NoClassDefFoundError)
            {

    var loadedWith: string = "loadClassBytes";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    put("(Before LogBuffer Output) NoClassDefFoundError Failed Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes")

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                @Throws(ClassNotFoundException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public oldLoadClass(name: string, resolve: boolean): KClass<*>{
var name = name
var resolve = resolve

    var loadedWith: string = "findLoadedClass1";
        
        


        try {
            
    var myClass: KClass<*> = this.findLoadedClass1(name)!;
        
        


    
                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    
        try {
            loadedWith= "super.loadClass"

    var normalClass: KClass<*> = super.loadClass(name, resolve)!;
        
        


    
                        if(normalClass != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
    

                                    }
                                
} catch(e: ClassNotFoundException)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    put("Failed Loaded Class: " +name +" with: " +loadedWith, this, "loadClass")

                                    }
                                
}
 catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    put("Failed Loaded Class: " +name +" with: " +loadedWith, this, "loadClass")

                                    }
                                
}
 catch(e: NoClassDefFoundError)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    put("Failed Loaded Class: " +name +" with: " +loadedWith, this, "loadClass")

                                    }
                                
}

loadedWith= "loadClassBytes"

    var classBytes: ByteArray = this.loadClassBytesFromFile(name)!;
        
        


    
                        if(classBytes == 
                                    null
                                )
                        
                                    {
                                    


                            throw ClassNotFoundException("Bytes not loaded for: " +name)

                                    }
                                
myClass= defineClass(name, classBytes, 0, classBytes!.length)

    
                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    


                            throw ClassNotFoundException("Class Not Defineable for: " +name)

                                    }
                                
put(name, myClass::class.java)

                                    }
                                
                        else {
                            
    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    put("Already Loaded: " +name +" with: " +loadedWith, this, "loadClass")

                                    }
                                

                        }
                            
resolveClass(myClass::class.java)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myClass;
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    put("Failure loading: " +name, "AbeClassLoader", "loadClass", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

