
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
        
import { GraphicsDevice } from '../../../../../java/awt/GraphicsDevice.js';
//not GWT import const GraphicsDevice

import { GraphicsEnvironment } from '../../../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment

import { Collection } from '../../../../../java/util/Collection.js';
//not GWT import const Collection

import { Iterator } from '../../../../../java/util/Iterator.js';
//not GWT import const Iterator

import { Set } from '../../../../../java/util/Set.js';
//not GWT import const Set

import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet

import { HelpSetEvent } from '../../../../../javax/help/event/HelpSetEvent.js';
//not GWT import const HelpSetEvent

import { HelpSetListener } from '../../../../../javax/help/event/HelpSetListener.js';
//not GWT import const HelpSetListener

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { JavaHelpSetNotifier } from '../../../../../org/allbinary/logic/java/help/JavaHelpSetNotifier.js';
//not GWT import const JavaHelpSetNotifier

import { InterfaceUtil } from '../../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js';
//not GWT import const InterfaceUtil

import { SecuredNativeLibraryInterface } from '../../../../../org/allbinary/logic/system/loader/SecuredNativeLibraryInterface.js';
//not GWT import const SecuredNativeLibraryInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputRobotInterface } from './InputRobotInterface.js';
//not GWT import - same folder const InputRobotInterface
import { InputRobot } from './InputRobot.js';
//not GWT import - same folder const InputRobot

export class InputRobotFactory
            extends Object
         {
        

    private static readonly inputRobotFactory: InputRobotFactory = new InputRobotFactory();

                //@Throws(Exception.constructor)
            
    public static getInstance(): InputRobotFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputRobotFactory.inputRobotFactory;
    
}


                //@Throws(Exception.constructor)
            
    public static loadLibraries$overload2(collection: Collection){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF("Loading Libraries", "InputRobotFactory", "loadLibraries");
    

    let iterator: Iterator = collection.iterator()!;;
    

        while(iterator.hasNext())
        {
InputRobotFactory.loadLibrary(iterator.next() as InputRobotInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public static loadLibrary(inputRobotInterface: InputRobotInterface){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterfaceinputRobotInterface))
                        
                                    {
                                    logUtil!.putF("Loading Library: " +inputRobotInterface!.getName(), "InputRobotFactory", "loadLibraries");
    

    let securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;;
    
securedNativeLibraryInterface!.load();
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

    private helpSetListenerInterface: HelpSetListener;

private constructor (){

            super();
        
 try { 
    let graphenv: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    let screens: GraphicsDevice[] = graphenv.getScreenDevices()!;;
    

    let inputRobotInterface: InputRobotInterface;;
    




                        for (
    let i: number = 0;i < screens.length; i++)
        {
inputRobotInterface= new InputRobot(screens[i]!) as InputRobotInterface;
    
this.logUtil!.putF("Adding Robot: " +inputRobotInterface!.getName(), this, "getRobots");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    
}

this.logUtil!.putF("Number Of Robots: " +this.hashtable.size(), this, "getRobots");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR);
    

 }
   }
 
}


    public addListener(helpSetListenerInterface: HelpSetListener){
this.helpSetListenerInterface= helpSetListenerInterface;
    
}


                //@Throws(Exception.constructor)
            
    public add(inputRobotInterface: InputRobotInterface){
this.logUtil!.putF("Adding InputRobotInterface: " +inputRobotInterface!.getName(), this, "add");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    

    let helpSet: HelpSet = inputRobotInterface!.getHelpSet()!;;
    

                        if(this.helpSetListenerInterface != 
                                    null
                                )
                        
                                    {
                                    
                        if(helpSet != 
                                    null
                                )
                        
                                    {
                                    
                        if(!JavaHelpSetNotifier.isNotified(helpSet))
                        
                                    {
                                    
    let helpSetEvent: HelpSetEvent = new HelpSetEvent(this, helpSet, HelpSetEvent.HELPSET_ADDED);;
    
this.helpSetListenerInterface!.helpSetAdded(helpSetEvent);
    

                                    }
                                

                                    }
                                
                        else {
                            this.logUtil!.putF("Null HelpSet For: " +inputRobotInterface!.getName(), this, "add");
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("No HelpSet Listener", this, "add");
    

                        }
                            
}

loadLibraries(...args: any[]): any {
   
    if (args.length === 0) return this.loadLibraries$overload1();
   
    if (args.length === 1) return this.loadLibraries$overload2(args[0]);
   
   throw new TypeError('No matching overload: loadLibraries'); }
  
                //@Throws(Exception.constructor)
            
    public loadLibraries$overload1(){

    let set: Set = this.get()!.keySet()!;;
    
this.logUtil!.putF("Loading Libraries", this, "loadLibraries");
    

    let nameArray: any[] = set.toArray()!;;
    

    let size: number = nameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let inputRobotInterface: InputRobotInterface = InputRobotFactory.getInstance()!.get(nameArray[index]! as string)!;;
    
InputRobotFactory.loadLibrary(inputRobotInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public unloadLibraries(){
this.logUtil!.putF("Unloading Libraries", this, "unloadLibraries");
    

    let set: Set = this.get()!.keySet()!;;
    

    let inputRobotInterface: InputRobotInterface;;
    

    let inputRobotArray: any[] = set.toArray()!;;
    

    let size: number = inputRobotArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
inputRobotInterface= this.get(inputRobotArray[index]! as string);
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterfaceinputRobotInterface))
                        
                                    {
                                    this.logUtil!.putF("Unloading Library: " +inputRobotInterface!.getName(), this, "unloadLibraries");
    

    let securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;;
    
securedNativeLibraryInterface!.unload();
    

                                    }
                                
}

}

get(...args: any[]): any {
   
    if (args.length === 0) return this.get$overload1();
   
    if (args.length === 1 && typeof args[0] === 'string') return this.get$overload2(args[0]);
   
   throw new TypeError('No matching overload: get'); }
  
                //@Throws(Exception.constructor)
            
    public get$overload1(): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public get$overload2(name: string): InputRobotInterface{
this.logUtil!.putF("Getting Robot: " +name, this, "getRobots");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.get(name) as InputRobotInterface;
    
}


}

