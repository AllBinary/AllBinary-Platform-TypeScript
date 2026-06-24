
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


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TextChangeListener } from './TextChangeListener.js';

export class TextAnimation extends IndexedAnimation implements UpdateMyFontInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    textArrayP: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;

    private anchor: number = Anchor.TOP_LEFT;

    private fontHeight: number = 0;

    private textChangeListener: TextChangeListener = TextChangeListener.getInstance()!;

public constructor (text: string, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setText(text);
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.textChangeListener!.onMeasure();
    
this.textChangeListener= TextChangeListener.getInstance();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


                //@Throws(Exception.constructor)
            
    public nextFrame(){
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.myFontProcessor!.process(graphics);
    
this.paintXYNoUpdate(graphics, x, y);
    
}


    public paintXYNoUpdate(graphics: Graphics, x: number, y: number){
this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    

    var size: number = this.textArrayP!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
graphics.drawString(this.textArrayP[index]!, x, y +(index *this.fontHeight), this.anchor);
    
}

}


    public setTextWithOnMeasure(text: string, textChangeListener: TextChangeListener){
this.setText(text);
    
this.textChangeListener= textChangeListener;
    
}


    public setText(text: string){

    var list: BasicArrayList = new BasicArrayListD();;
    

                        if(text != 
                                    null
                                 && text.length > 0)
                        
                                    {
                                    
    var index: number = 0;;
    

    var startIndex: number = 0;;
    

    var endIndex: number = 0;;
    

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
                                    
    var textArray: string[] = new Array(list.size());;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
textArray[index]= list.get(index) as string;
    
}

this.textArrayP= textArray;
    

                                    }
                                
                        else {
                            this.textArrayP= StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
    

                        }
                            
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public getTextArray(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textArrayP;
    
}


    public getFontHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fontHeight;
    
}


}
                
            

