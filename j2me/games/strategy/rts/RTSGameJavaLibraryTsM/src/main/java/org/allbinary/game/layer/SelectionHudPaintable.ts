
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

        


//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { InitUpdatePaintable } from '../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
import { CommonButtons } from '../../../../org/allbinary/input/motion/button/CommonButtons.js';
//not GWT import const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;

      
import { TouchButtonLocationHelper } from '../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js';
//not GWT import const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;

      
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SelectionHudPaintable extends InitUpdatePaintable implements UpdateMyFontInterface {
        

    readonly y: number = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +17;

    private readonly primitiveLongUtil: PrimitiveLongUtil;

    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = updateMyFontProcessor;

    private x: number= 0;

    textX: number= 0;

    imageX: number= 0;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private color: number= 0;

    private width: number= 0;

    private height: number= 0;

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;

    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.GREY.intValue()!;

protected constructor (){

            super();
        this.update();
    
this.primitiveLongUtil= PrimitiveLongUtil.createPowerOfTen(10000);
    
}


    public updateMeasurement(graphics: Graphics){

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    

    var font: Font = graphics.getFont()!;;
    
this.setHeight(commonButtons!.STANDARD_BUTTON_SIZE +font.getHeight());
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public update(){

    var commonButtons: CommonButtons = CommonButtons.getInstance()!;;
    

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();;
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
this.x= commonButtons!.STANDARD_BUTTON_SIZE +touchButtonLocationHelper!.getColumnsRemainderHalf();
    
this.textX= this.getX() +4;
    
this.width= displayInfoSingleton!.getLastWidth() -this.getX() *2;
    
this.imageX= this.getWidth() +touchButtonLocationHelper!.getColumnsRemainderHalf() -10;
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public updateSelectionInfo(){
}


    public updateInfo(){
}


    getPrimitiveLongUtil(): PrimitiveLongUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.primitiveLongUtil;
    
}


    setAnimationInterface(animationInterface: Animation){
this.animationInterface= animationInterface;
    
}


    getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


    setName(name: string){
this.name= name;
    
}


    getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
this.setColor(basicColor!.intValue());
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


    public setColor(color: number){
this.color= color;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.color;
    
}


    getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.width;
    
}


    setHeight(height: number){
this.height= height;
    
}


    getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.height;
    
}


    getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.x;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.backgroundColor);
    
graphics.drawRect(this.getX(), this.y, this.getWidth(), this.getHeight());
    
graphics.setColor(this.getColor());
    
graphics.drawString(this.getName(), this.textX, this.y, 0);
    
}


}



