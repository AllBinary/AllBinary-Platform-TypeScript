
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
//not GWT import const GraphicsDevice = globalThis.java.awt.GraphicsDevice;

      
import { GraphicsEnvironment } from '../../../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment = globalThis.java.awt.GraphicsEnvironment;

      
import { Collection } from '../../../../../java/util/Collection.js';
//not GWT import const Collection = globalThis.java.util.Collection;

      
import { Iterator } from '../../../../../java/util/Iterator.js';
//not GWT import const Iterator = globalThis.java.util.Iterator;

      
import { Set } from '../../../../../java/util/Set.js';
//not GWT import const Set = globalThis.java.util.Set;

      
import { HelpSet } from '../../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet = globalThis.javax.help.HelpSet;

      
import { HelpSetEvent } from '../../../../../javax/help/event/HelpSetEvent.js';
//not GWT import const HelpSetEvent = globalThis.javax.help.event.HelpSetEvent;

      
import { HelpSetListener } from '../../../../../javax/help/event/HelpSetListener.js';
//not GWT import const HelpSetListener = globalThis.javax.help.event.HelpSetListener;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { JavaHelpSetNotifier } from '../../../../../org/allbinary/logic/java/help/JavaHelpSetNotifier.js';
//not GWT import const JavaHelpSetNotifier = globalThis.org.allbinary.logic.java.help.JavaHelpSetNotifier;

      
import { InterfaceUtil } from '../../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js';
//not GWT import const InterfaceUtil = globalThis.org.allbinary.logic.java.anyType.InterfaceUtil;

      
import { SecuredNativeLibraryInterface } from '../../../../../org/allbinary/logic/system/loader/SecuredNativeLibraryInterface.js';
//not GWT import const SecuredNativeLibraryInterface = globalThis.org.allbinary.logic.system.loader.SecuredNativeLibraryInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputRobotInterface } from './InputRobotInterface.js';
//not GWT import - same folder const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

                import { InputRobot } from './InputRobot.js';
//not GWT import - same folder const InputRobot = globalThis.org.allbinary.input.automation.robot.InputRobot;

                
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
            
    public static loadLibraries(collection: Collection){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF("Loading Libraries", "InputRobotFactory", "loadLibraries");
    

    var iterator: Iterator = collection.iterator()!;;
    

        while(iterator.hasNext())
        {
InputRobotFactory.loadLibrary(iterator.next() as InputRobotInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public static loadLibrary(inputRobotInterface: InputRobotInterface){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterface.constructor, inputRobotInterface))
                        
                                    {
                                    logUtil!.putF("Loading Library: " +inputRobotInterface!.getName(), "InputRobotFactory", "loadLibraries");
    

    var securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;;
    
securedNativeLibraryInterface!.load();
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly hashtable: ABHashtable = StdUtil.getInstance()!.createHashtable()!;

    private helpSetListenerInterface: HelpSetListener;

private constructor (){

            super();
        
        try {
            
    var graphenv: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;;
    

    var screens: GraphicsDevice[] = graphenv.getScreenDevices()!;;
    

    var inputRobotInterface: InputRobotInterface;;
    




                        for (
    var i: number = 0;i < screens.length; i++)
        {
inputRobotInterface= new InputRobot(screens[i]!) as InputRobotInterface;
    
this.logUtil!.putF("Adding Robot: " +inputRobotInterface!.getName(), this, "getRobots");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    
}

this.logUtil!.putF("Number Of Robots: " +this.hashtable.size(), this, "getRobots");
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR);
    
}

}


    public addListener(helpSetListenerInterface: HelpSetListener){
this.helpSetListenerInterface= helpSetListenerInterface;
    
}


                //@Throws(Exception.constructor)
            
    public add(inputRobotInterface: InputRobotInterface){
this.logUtil!.putF("Adding InputRobotInterface: " +inputRobotInterface!.getName(), this, "add");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    

    var helpSet: HelpSet = inputRobotInterface!.getHelpSet()!;;
    

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
                                    
    var helpSetEvent: HelpSetEvent = new HelpSetEvent(this, helpSet, HelpSetEvent.HELPSET_ADDED);;
    
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


                //@Throws(Exception.constructor)
            
    public loadLibraries(){

    var set: Set = this.get()!.keySet()!;;
    
this.logUtil!.putF("Loading Libraries", this, "loadLibraries");
    

    var nameArray: any[] = set.toArray()!;;
    

    var size: number = nameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var inputRobotInterface: InputRobotInterface = InputRobotFactory.getInstance()!.get(nameArray[index]! as string)!;;
    
InputRobotFactory.loadLibrary(inputRobotInterface);
    
}

}


                //@Throws(Exception.constructor)
            
    public unloadLibraries(){
this.logUtil!.putF("Unloading Libraries", this, "unloadLibraries");
    

    var set: Set = this.get()!.keySet()!;;
    

    var inputRobotInterface: InputRobotInterface;;
    

    var inputRobotArray: any[] = set.toArray()!;;
    

    var size: number = inputRobotArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
inputRobotInterface= this.get(inputRobotArray[index]! as string);
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterface.constructor, inputRobotInterface))
                        
                                    {
                                    this.logUtil!.putF("Unloading Library: " +inputRobotInterface!.getName(), this, "unloadLibraries");
    

    var securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;;
    
securedNativeLibraryInterface!.unload();
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public get(): ABHashtable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public get(name: string): InputRobotInterface{
this.logUtil!.putF("Getting Robot: " +name, this, "getRobots");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.get(name) as InputRobotInterface;
    
}


}



