
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class KeyValueDrawString
            extends Object
         {
        

    private readonly LABEL: string

    private readonly labelWidth: number

    private readonly labelX: number

    private valueX: number

    private value: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (label: string, x: number){

            super();
            var label = label
var x = x
this.LABEL= label
this.labelWidth= MyFont.getInstance()!.stringWidth(LABEL) -LABEL.length
this.labelX= x
this.valueX= this.labelWidth +x
}


    public paint(graphics: Graphics, y: number){
    //var graphics = graphics
    //var y = y
drawString(this.LABEL, this.labelX, y, 0)
drawString(this.value, this.valueX, y, 0)
}


    public update(value: string){
var value = value

    
                        if(value != 
                                    null
                                )
                        this.value= value
}


}
                
            

