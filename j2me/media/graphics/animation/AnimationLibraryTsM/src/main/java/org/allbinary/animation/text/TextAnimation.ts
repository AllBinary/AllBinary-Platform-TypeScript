
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

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TextAnimation extends IndexedAnimation {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    textArrayP: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
        
        

    private anchor: number = Anchor.TOP_LEFT;
        
        
public constructor (animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (text: string, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                        //var text = text
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.setText(text);
    
}


                //@Throws(Error::class)
            
    public nextFrame(){
}


    public paint(graphics: Graphics, x: number, y: number){
var graphics = graphics
var x = x
var y = y
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    

    var height: number = this.getHeight()!;
        
        
;
    

    var size: number = this.textArrayP!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
graphics.drawString(this.textArrayP[index]!, x, y +(index *height), anchor);
    
}

}


    public setText(text: string){
var text = text

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

                        if(text != 
                                    null
                                )
                        
                                    {
                                    
    var index: number = 0;
        
        
;
    

    var startIndex: number = 0;
        
        
;
    

    var endIndex: number = 0;
        
        
;
    

        while(index >= 0)
        {
startIndex= index;
    
index= text.indexOf('\n', startIndex);
    
endIndex= index;
    

                        if(index < 0)
                        
                                    {
                                    endIndex= text.length;
    

                                    }
                                
list.add(text.substring(startIndex, endIndex));
    

                        if(index < 0)
                        
                                    {
                                    break;

                    

                                    }
                                
index++;
    
}


                                    }
                                

                        if(list.size() > 0)
                        
                                    {
                                    
    var textArray: string[] = new Array(list.size());
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
textArray[index]= list.get(index);

                         as String;
    
}

this.textArrayP= textArray;
    

                                    }
                                
                        else {
                            this.textArrayP= StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
    

                        }
                            
}


    public getTextArray(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textArrayP;
    
}


    public getHeight(): number{

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myFont!.DEFAULT_CHAR_HEIGHT;
    
}


}
                
            

