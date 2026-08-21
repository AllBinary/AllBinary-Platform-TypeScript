
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class KeyValueDrawString
            extends Object
         implements UpdateMyFontInterface {
        

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private readonly LABEL: string;

    private readonly labelX: number;

    private valueX: number= 0;

    private value: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (label: string, x: number){

            super();
        this.LABEL= label;
    
this.labelX= x;
    
}


    public updateMeasurement(graphics: Graphics){

    var labelWidth: number = graphics.getFont()!.stringWidth(this.LABEL) -this.LABEL.length;;
    
this.valueX= labelWidth +this.labelX;
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics, y: number){
this.myFontProcessor!.process(graphics);
    
graphics.drawString(this.LABEL, this.labelX, y, 0);
    
graphics.drawString(this.value, this.valueX, y, 0);
    
}


    public update(value: string){

                        if(value != 
                                    null
                                )
                        
                                    {
                                    this.value= value;
    

                                    }
                                
}


}
                
            

