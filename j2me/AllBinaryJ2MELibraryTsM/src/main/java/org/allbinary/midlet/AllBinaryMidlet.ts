
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
        



            import { Exception } from '../../../java/lang/Exception.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Hashtable } from '../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { Command } from '../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Display } from '../../../javax/microedition/lcdui/Display.js';
      const Display = globalThis.javax.microedition.lcdui.Display;

      
//not plain js import { Displayable } from '../../../javax/microedition/lcdui/Displayable.js';
      const Displayable = globalThis.javax.microedition.lcdui.Displayable;

      
import { NullCanvas } from '../../../javax/microedition/lcdui/NullCanvas.js';
      //not GWT import const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
//not plain js import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
      const MIDlet = globalThis.javax.microedition.midlet.MIDlet;

      
//not plain js import { MIDletStateChangeException } from '../../../javax/microedition/midlet/MIDletStateChangeException.js';
      const MIDletStateChangeException = globalThis.javax.microedition.midlet.MIDletStateChangeException;

      
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { ForcedLogUtil } from '../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Memory } from '../../../org/allbinary/system/Memory.js';
      //not GWT import const Memory = globalThis.org.allbinary.system.Memory;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        // MIDlet methods not overridden are final
export class AllBinaryMidlet extends MIDlet implements CommandListener {
        

    private static NULL_ALLBINARY_MIDLET: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullInstance(): AllBinaryMidlet{

                        if(AllBinaryMidlet.NULL_ALLBINARY_MIDLET == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    AllBinaryMidlet.NULL_ALLBINARY_MIDLET= new AllBinaryMidlet();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryMidlet.NULL_ALLBINARY_MIDLET as AllBinaryMidlet;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly SET_DISPLAY: string = "setDisplay";

    private readonly SETTING_: string = "Setting: ";

    private readonly _DISPLAY_: string = " Display: ";

    private readonly SETTING_NO_TITLE: string = "Setting: No Title, Display: ";

    private hashtable: Hashtable<any, any> = new Hashtable<any, any>();

    private midletDestroyed: boolean= false;

public constructor (){

            super();
        this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, "AllBinaryMidlet::AllBinaryMidlet");
    
}


    setDisplay(newDisplay: Displayable){

    var title: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(newDisplay != NullCanvas.NULL_CANVAS)
                        
                                    {
                                    title= newDisplay!.getTitle();
    

                        if(title != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(this.SETTING_)!.append(title)!.append(this._DISPLAY_)!.append(StringUtil.getInstance()!.toString(newDisplay))!.toString(), this, this.SET_DISPLAY);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append(this.SETTING_NO_TITLE)!.append(StringUtil.getInstance()!.toString(newDisplay))!.toString(), this, this.SET_DISPLAY);
    

                        }
                            

                                    }
                                

    var display: Display = this.getDisplay()!;;
    
display.setCurrent(newDisplay);
    
}


    public getDisplay(): Display{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Display.getDisplay(this);;
    
}


    getCurrentDisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Display.getDisplay(this)!.getCurrent();;
    
}


    public setDestroyed(destroyed: boolean){
this.midletDestroyed= destroyed;
    
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.midletDestroyed;
    
}


                //@Throws(MIDletStateChangeException.constructor)
            
    startApp(){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    pauseApp(){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    destroyAppInRunnable(unconditional: boolean, isProgress: boolean){
}


    destroyApp(unconditional: boolean){

    var METHOD_NAME: string = "AllBinaryMidlet::destroyApp";;
    

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, METHOD_NAME);
    
PreLogUtil.put(Memory.getInfo(), this, METHOD_NAME);
    
this.setDestroyed(true);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, METHOD_NAME, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public setStartStateHashtable(hashtable: Hashtable<any, any>){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, "setStartStateHashtable");
    
this.hashtable= hashtable;
    
}


                //@Throws(Exception.constructor)
            
    public getStartStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(this.hashtable))!.toString(), this, "getStartStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


                //@Throws(Exception.constructor)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF(this.commonStrings!.START, this, "getStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


    public commandAction(command: Command, displayable: Displayable){
}


}



