
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
        



import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { Command } from "../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../javax/microedition/lcdui/CommandListener.js";

    
import { Display } from "../../../javax/microedition/lcdui/Display.js";

    
import { Displayable } from "../../../javax/microedition/lcdui/Displayable.js";

    
import { NullCanvas } from "../../../javax/microedition/lcdui/NullCanvas.js";

    
import { MIDlet } from "../../../javax/microedition/midlet/MIDlet.js";

    
import { MIDletStateChangeException } from "../../../javax/microedition/midlet/MIDletStateChangeException.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { ForcedLogUtil } from "../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { EventStrings } from "../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { Memory } from "../../../org/allbinary/system/Memory.js";

    

export class AllBinaryMidlet extends MIDlet
                , CommandListener {
        

    public static readonly NULL_ALLBINARY_MIDLET: AllBinaryMidlet = new AllBinaryMidlet();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly SET_DISPLAY: string = "setDisplay";
        
        

    private readonly SETTING_: string = "Setting: ";
        
        

    private readonly _DISPLAY_: string = " Display: ";
        
        

    private readonly SETTING_NO_TITLE: string = "Setting: No Title, Display: ";
        
        

    private hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

    private destroyed: boolean= false
public constructor (){

            super();
            logUtil!.put(commonStrings!.CONSTRUCTOR, this, "AllBinaryMidlet::AllBinaryMidlet")
}


    setDisplay(newDisplay: Displayable){
    //var newDisplay = newDisplay

    var title: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


                        if(newDisplay != NullCanvas.NULL_CANVAS)
                        
                                    {
                                    title= newDisplay!.getTitle()

                        if(title != 
                                    null
                                )
                        
                                    {
                                    logUtil!.put(StringMaker().
                            append(SETTING_)!.append(title)!.append(_DISPLAY_)!.append(StringUtil.getInstance()!.toString(newDisplay))!.toString(), this, SET_DISPLAY)

                                    }
                                
                        else {
                            logUtil!.put(StringMaker().
                            append(SETTING_NO_TITLE)!.append(StringUtil.getInstance()!.toString(newDisplay))!.toString(), this, SET_DISPLAY)

                        }
                            

                                    }
                                

    var display: Display = getDisplay()!;
        
        

display.setCurrent(newDisplay)
}


    public getDisplay(): Display{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Display.getDisplay(this);
    
}


    getCurrentDisplayable(): Displayable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Display.getDisplay(this)!.getCurrent();
    
}


    public setDestroyed(destroyed: boolean){
var destroyed = destroyed
this.destroyed= destroyed
}


    public isDestroyed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return destroyed;
    
}


                //@Throws(MIDletStateChangeException::class)
            
    startApp(){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    pauseApp(){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    destroyApp(unconditional: boolean, isProgress: boolean){
var unconditional = unconditional
var isProgress = isProgress
}


    destroyApp(unconditional: boolean){
var unconditional = unconditional

    var METHOD_NAME: string = "AllBinaryMidlet::destroyApp";
        
        


        try {
            logUtil!.put(commonStrings!.START, this, METHOD_NAME)
PreLogUtil.put(Memory.getInfo(), this, METHOD_NAME)
this.this.setDestroyed(true)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, METHOD_NAME, e)
}

}


                //@Throws(Error::class)
            
    public setStartStateHashtable(hashtable: Hashtable<Any, Any>){
var hashtable = hashtable
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, "setStartStateHashtable")
this.hashtable= hashtable
}


                //@Throws(Error::class)
            
    public getStartStateHashtable(): Hashtable<Any, Any>{
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, "getStartStateHashtable")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


                //@Throws(Error::class)
            
    public getCurrentStateHashtable(): Hashtable<Any, Any>{
logUtil!.put(commonStrings!.START, this, "getStateHashtable")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_TABLE;
    
}


    public commandAction(command: Command, displayable: Displayable){
var command = command
var displayable = displayable
}


}
                
            

