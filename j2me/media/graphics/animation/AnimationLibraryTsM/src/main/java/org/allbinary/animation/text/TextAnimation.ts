
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior

import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor

import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface

import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor

import { SWTJOGLProcessor } from '../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
//not GWT import const SWTJOGLProcessor

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TextChangeListener } from './TextChangeListener.js';
//not GWT import - same folder const TextChangeListener

export class TextAnimation extends IndexedAnimation implements UpdateMyFontInterface {
        

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    textArrayP: string[] = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;

    private anchor: number = Anchor.TOP_LEFT;

    private fontHeight: number = 0;

    private offsetY: number = 0;

    private textChangeListener: TextChangeListener = TextChangeListener.getInstance()!;

public constructor (text: string, animationBehavior: AnimationBehavior){
            super(animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setText(text);
    
}


    public updateMeasurement(graphics: Graphics){

    let font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    

    let adjustedFontHeight: number = globalThis.Math.trunc( -(this.fontHeight *2.00));;
    
this.offsetY= (SWTJOGLProcessor.getInstance()!.isJOGL() ? adjustedFontHeight : 0);
    
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
    

    let size: number = this.textArrayP!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
graphics.drawString(this.textArrayP[index]!, x, y +this.offsetY +(index *this.fontHeight), this.anchor);
    
}

}


    public setTextWithOnMeasure(text: string, textChangeListener: TextChangeListener){
this.setText(text);
    
this.textChangeListener= textChangeListener;
    
}


    public setText(text: string){

    let list: BasicArrayList = new BasicArrayListD();;
    

                        if(text != 
                                    null
                                 && text.length > 0)
                        
                                    {
                                    
    let index: number = 0;;
    

    let startIndex: number = 0;;
    

    let endIndex: number = 0;;
    

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
                                    
    let textArray: string[] = new Array(list.size());;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
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

