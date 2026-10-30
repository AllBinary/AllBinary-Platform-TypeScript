
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

        


            import { Class } from '../../../../../java/lang/Class.js';
        
            import { ClassLoader } from '../../../../../java/lang/ClassLoader.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { ClassNotFoundException } from '../../../../../java/lang/ClassNotFoundException.js';
        
import { FileInputStream } from '../../../../../java/io/FileInputStream.js';
//not GWT import const FileInputStream

import { IOException } from '../../../../../java/io/IOException.js';
//not GWT import const IOException

import { Map } from '../../../../../java/util/Map.js';
//not GWT import const Map

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { LogBuffer } from '../../../../../org/allbinary/logic/communication/log/LogBuffer.js';
//not GWT import const LogBuffer

//not plain js import { LogFactory } 
const LogFactory = globalThis.org.allbinary.logic.communication.log.LogFactory;
type LogFactory<T = any, U = any> = typeof LogFactory extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogFactory;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { StreamUtil } from '../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbCryptUtil } from '../../../../../org/allbinary/logic/system/security/AbCryptUtil.js';
//not GWT import const AbCryptUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoClassDefFoundError } from './NoClassDefFoundError.js';
//sameFolderImports - not GWT import - same folder const NoClassDefFoundError

export class AbeClassLoader extends ClassLoader {
        

    private static classes: Map = StdUtil.getInstance()!.createHashMap()!;

    private static PATH: string;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abCryptUtil: AbCryptUtil = AbCryptUtil.getInstance()!;

    private readonly LOAD_CLASS: string = "loadClass";

    private readonly ENCRYPTED_EXTENSION: string = AbPathData.getInstance()!.EXTENSION_SEP +"abc";

    private key: string;

public constructor (parent: ClassLoader, key: string){
            super(parent);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.key= key;
    
AbeClassLoader.PATH= org.allbinary.globals.URLGLOBALS.getWebappPath() +"WEB-INF/classes/";
    
}


    findLoadedClass1(name: string): Function{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbeClassLoader.classes.get(name) as Class<any>;
    
}

loadClass(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.loadClass$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'boolean') return this.loadClass$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: loadClass'); }
  
                //@Throws(ClassNotFoundException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public loadClass$overload1(name: string): Function{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loadClass(name, false);;
    
}


                //@Throws(ClassNotFoundException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public loadClass$overload2(name: string, resolve: boolean): Function{

    let loadedWith: string = "findLoadedClass1";;
    

    let logBuffer: LogBuffer = new LogBuffer();;
    

 try { 
    let myClass: Function = this.findLoadedClass1(name)!;;
    

                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    
 try { loadedWith= "super.loadClass";
    

    let normalClass: Function = super.loadClass(name, resolve)!;;
    

                        if(normalClass != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof ClassNotFoundException) {
  const e = caught;
  
logBuffer!.add(LogFactory.getInstance("Failed to Load Class: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS, e));
    

 }
  else {
  const e = caught;
  
logBuffer!.add(LogFactory.getInstance("Failed to Load Class: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS, e));
    

 }
  else if (caught instanceof NoClassDefFoundError) {
  const e = caught;
  
logBuffer!.add(LogFactory.getInstanceF("NoClassDefFoundError Failed Loaded Class: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS));
    

 }
  else { throw caught; } }
 

    let classBytes: number[] = this.loadClassBytesFromFile(name)!;;
    

                        if(classBytes == 
                                    null
                                )
                        
                                    {
                                    


                            throw new ClassNotFoundException("My Bytes not loaded for: " +name +"\nwith: " +"loadClassBytes");
                    

                                    }
                                
myClass= defineClass(name, classBytes, 0, classBytes!.length);
    

                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    


                            throw new ClassNotFoundException("My Class Not Defineable for: " +name +"\nwith: " +"loadClassBytes");
                    

                                    }
                                
AbeClassLoader.classes.put(name, myClass.prototype.constructor);
    

                                    }
                                
                        else {
                            logBuffer!.add(LogFactory.getInstanceF("Already Loaded: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS));
    

                        }
                            
resolveClass(myClass.prototype.constructor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myClass;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logBuffer!.logAll();
    
this.logUtil!.put("Failure loading: " +name +"\nwith: " +loadedWith, this, this.LOAD_CLASS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    loadClassBytesFromFile(name: string): number[]{

    let in: FileInputStream = 
                null
            ;;
    

    let cname: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

 try { cname= AbeClassLoader.PATH +name.replace('.', AbPathData.getInstance()!.SEPARATORCHAR) +this.ENCRYPTED_EXTENSION;
    
in= new FileInputStream(cname);
    

    let decrypted: number[] = this.abCryptUtil!.decrypt(in, this.key)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return decrypted;
    
 }
 catch (caught: any) {
 if (caught instanceof IOException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    this.logUtil!.put("(Before LogBuffer Output) Failure loading Encrypted: " +name +" File: " +cname, "AbeClassLoader", "loadClassBytes", e);
    

                                    }
                                
StreamUtil.getInstance()!.close(in);
    

 }
  else {
  const e = caught;
  

    let loadedWith: string = "loadClassBytes";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    this.logUtil!.put("(Before LogBuffer Output) Failed to Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes", e);
    

                                    }
                                

 }
  else if (caught instanceof NoClassDefFoundError) {
  const e = caught;
  

    let loadedWith: string = "loadClassBytes";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    this.logUtil!.putF("(Before LogBuffer Output) NoClassDefFoundError Failed Loaded Class: " +name +" File: " +cname +"\nwith: " +loadedWith, this, "loadClassBytes");
    

                                    }
                                

 }
  else { throw caught; } }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(ClassNotFoundException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public oldLoadClass(name: string, resolve: boolean): Function{

    let loadedWith: string = "findLoadedClass1";;
    

 try { 
    let myClass: Function = this.findLoadedClass1(name)!;;
    

                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    
 try { loadedWith= "super.loadClass";
    

    let normalClass: Function = super.loadClass(name, resolve)!;;
    

                        if(normalClass != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return normalClass;
    

                                    }
                                
 }
 catch (caught: any) {
 if (caught instanceof ClassNotFoundException) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    this.logUtil!.putF("Failed Loaded Class: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
    

                                    }
                                

 }
  else {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    this.logUtil!.putF("Failed Loaded Class: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
    

                                    }
                                

 }
  else if (caught instanceof NoClassDefFoundError) {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    this.logUtil!.putF("Failed Loaded Class: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
    

                                    }
                                

 }
  else { throw caught; } }
 
loadedWith= "loadClassBytes";
    

    let classBytes: number[] = this.loadClassBytesFromFile(name)!;;
    

                        if(classBytes == 
                                    null
                                )
                        
                                    {
                                    


                            throw new ClassNotFoundException("Bytes not loaded for: " +name);
                    

                                    }
                                
myClass= defineClass(name, classBytes, 0, classBytes!.length);
    

                        if(myClass == 
                                    null
                                )
                        
                                    {
                                    


                            throw new ClassNotFoundException("Class Not Defineable for: " +name);
                    

                                    }
                                
AbeClassLoader.classes.put(name, myClass.prototype.constructor);
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADER))
                        
                                    {
                                    this.logUtil!.putF("Already Loaded: " +name +" with: " +loadedWith, this, this.LOAD_CLASS);
    

                                    }
                                

                        }
                            
resolveClass(myClass.prototype.constructor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myClass;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    this.logUtil!.put("Failure loading: " +name, "AbeClassLoader", this.LOAD_CLASS, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

