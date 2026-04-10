
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { TextField } from "../../../../javax/microedition/lcdui/TextField.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class GameConfigurationTextInput
            extends Object
         {
        

    private hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        

    public SIMULATOR_IP: GameConfigurationTextInput = new GameConfigurationTextInput("IP: ", "192.168.1.3");
        
        

    public SIMULATOR_PORT: GameConfigurationTextInput = new GameConfigurationTextInput("Port: ", "8010");
        
        

    public static update(textField: TextField){
var textField = textField

    var anyType: any = {} = textField!.getLabel() as Object;
        
        


    var gameConfigurationTextInput: GameConfigurationTextInput = hashtable.get(anyType as Object) as GameConfigurationTextInput;
        
        

gameConfigurationTextInput!.setText(textField!.getString())
}


    public static getHashtable(): Hashtable<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    private label: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private text: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (label: string, text: string){

            super();
            var label = label
var text = text
this.setText(text)
this.setLabel(label)
hashtable.put(this.getLabel(), this)
}


    public setText(text: string){
var text = text
this.text= text
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return text;
    
}


    public setLabel(label: string){
var label = label
this.label= label
}


    public getLabel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return label;
    
}


}
                
            

