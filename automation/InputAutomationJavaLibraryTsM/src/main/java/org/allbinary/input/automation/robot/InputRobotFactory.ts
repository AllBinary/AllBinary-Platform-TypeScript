
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
        



import { awt } from "../../../../../java/awt.js";

    
import { Collection } from "../../../../../java/util/Collection.js";

    
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Iterator } from "../../../../../java/util/Iterator.js";

    
import { Set } from "../../../../../java/util/Set.js";

    
import { HelpSet } from "../../../../../javax/help/HelpSet.js";

    
import { HelpSetEvent } from "../../../../../javax/help/event/HelpSetEvent.js";

    
import { HelpSetListener } from "../../../../../javax/help/event/HelpSetListener.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { JavaHelpSetNotifier } from "../../../../../org/allbinary/logic/java/help/JavaHelpSetNotifier.js";

    
import { InterfaceUtil } from "../../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js";

    
import { SecuredNativeLibraryInterface } from "../../../../../org/allbinary/logic/system/loader/SecuredNativeLibraryInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GraphicsEnvironment } from "./GraphicsEnvironment.js";

import { InputRobotInterface } from "./InputRobotInterface.js";

export class InputRobotFactory
            extends Object
         {
        

    private static readonly inputRobotFactory: InputRobotFactory = new InputRobotFactory();
        
        

                //@Throws(Error::class)
            
    public static getInstance(): InputRobotFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputRobotFactory;
    
}


                //@Throws(Error::class)
            
    public static loadLibraries(collection: Collection){
var collection = collection

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    
logUtil!.putF("Loading Libraries", "InputRobotFactory", "loadLibraries");
    

    var iterator: Iterator = collection.iterator()!;
        
        
;
    

        while(iterator.hasNext())
        {
loadLibrary(iterator.next();

                         as InputRobotInterface);
    
}

}


                //@Throws(Error::class)
            
    public static loadLibrary(inputRobotInterface: InputRobotInterface){
    //var inputRobotInterface = inputRobotInterface

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterface::class, inputRobotInterface))
                        
                                    {
                                    logUtil!.putF("Loading Library: " +inputRobotInterface!.getName(), "InputRobotFactory", "loadLibraries");
    

    var securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;
        
        
;
    
securedNativeLibraryInterface!.load();
    

                                    }
                                
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    private helpSetListenerInterface: HelpSetListener
private constructor (){

            super();
            
        try {
            
    var graphenv: GraphicsEnvironment = GraphicsEnvironment.getLocalGraphicsEnvironment()!;
        
        
;
    

    var screens: GraphicsDevice[] = graphenv.getScreenDevices()!;
        
        
;
    

    var inputRobotInterface: InputRobotInterface
;
    




                        for (
    var i: number = 0;
        
        
i < screens.length; i++)
        {
inputRobotInterface= new InputRobot(screens[i]!) as InputRobotInterface;
    
this.logUtil!.putF("Adding Robot: " +inputRobotInterface!.getName(), this, "getRobots");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    
}

this.logUtil!.putF("Number Of Robots: " +this.hashtable.length, this, "getRobots");
    

                //: 
} catch(e) 
            {
this.logUtil!.putF(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR);
    
}

}


    public addListener(helpSetListenerInterface: HelpSetListener){
    //var helpSetListenerInterface = helpSetListenerInterface
this.helpSetListenerInterface= helpSetListenerInterface;
    
}


                //@Throws(Error::class)
            
    public add(inputRobotInterface: InputRobotInterface){
    //var inputRobotInterface = inputRobotInterface
this.logUtil!.putF("Adding InputRobotInterface: " +inputRobotInterface!.getName(), this, "add");
    
this.get()!.put(inputRobotInterface!.getName(), inputRobotInterface);
    

    var helpSet: HelpSet = inputRobotInterface!.getHelpSet()!;
        
        
;
    

                        if(this.helpSetListenerInterface != 
                                    null
                                )
                        
                                    {
                                    
                        if(helpSet != 
                                    null
                                )
                        
                                    {
                                    
                        if(!JavaHelpSetNotifier.isNotified(helpSet);

                        )
                        
                                    {
                                    
    var helpSetEvent: HelpSetEvent = new HelpSetEvent(this, helpSet, HelpSetEvent.HELPSET_ADDED);
        
        
;
    
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


                //@Throws(Error::class)
            
    public loadLibraries(){

    var set: Set = this.get()!.keySet()!;
        
        
;
    
this.logUtil!.putF("Loading Libraries", this, "loadLibraries");
    

    var nameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = nameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var inputRobotInterface: InputRobotInterface = InputRobotFactory.getInstance()!.get(nameArray[index]! as String)!;
        
        
;
    
loadLibrary(inputRobotInterface);
    
}

}


                //@Throws(Error::class)
            
    public unloadLibraries(){
this.logUtil!.putF("Unloading Libraries", this, "unloadLibraries");
    

    var set: Set = this.get()!.keySet()!;
        
        
;
    

    var inputRobotInterface: InputRobotInterface
;
    

    var inputRobotArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = inputRobotArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
inputRobotInterface= this.get(inputRobotArray[index]! as String);
    

                        if(InterfaceUtil.isImplemented(SecuredNativeLibraryInterface::class, inputRobotInterface))
                        
                                    {
                                    this.logUtil!.putF("Unloading Library: " +inputRobotInterface!.getName(), this, "unloadLibraries");
    

    var securedNativeLibraryInterface: SecuredNativeLibraryInterface = inputRobotInterface as SecuredNativeLibraryInterface;
        
        
;
    
securedNativeLibraryInterface!.unload();
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public get(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public get(name: string): InputRobotInterface{
    //var name = name
this.logUtil!.putF("Getting Robot: " +name, this, "getRobots");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.get(name as Object);

                         as InputRobotInterface;
    
}


}
                
            

