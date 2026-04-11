
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Animation } from "../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { InitUpdatePaintable } from "../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    
import { CommonButtons } from "../../../../org/allbinary/input/motion/button/CommonButtons.js";

    
import { TouchButtonLocationHelper } from "../../../../org/allbinary/input/motion/button/TouchButtonLocationHelper.js";

    
import { PrimitiveLongUtil } from "../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    

export class SelectionHudPaintable extends InitUpdatePaintable {
        

    readonly myFont: MyFont = MyFont.getInstance()!;
        
        

    readonly y: number = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +17;
        
        

    private readonly primitiveLongUtil: PrimitiveLongUtil

    private x: number= 0

    textX: number= 0

    imageX: number= 0

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    private color: number= 0

    private width: number= 0

    private height: number= 0

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private animationInterface: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;
        
        
protected constructor (){

            super();
            this.update();
    
this.primitiveLongUtil= new PrimitiveLongUtil(10000);
    
}


    public update(){

    var touchButtonLocationHelper: TouchButtonLocationHelper = new TouchButtonLocationHelper();
        
        
;
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
this.x= CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +touchButtonLocationHelper!.getColumnsRemainderHalf();
    
this.textX= this.getX() +4;
    
this.width= displayInfoSingleton!.getLastWidth() -this.getX() *2;
    
this.imageX= this.getWidth() +touchButtonLocationHelper!.getColumnsRemainderHalf() -10;
    
this.setHeight(CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE +myFont!.DEFAULT_CHAR_HEIGHT);
    
}


    public updateSelectionInfo(){
}


    public updateInfo(){
}


    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.GREY.toInt()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
graphics.setColor(backgroundColor);
    
graphics.drawRect(this.getX(), y, this.getWidth(), this.getHeight());
    
graphics.setColor(this.getColor());
    
graphics.drawString(getName(), this.textX, y, 0);
    
}


    getPrimitiveLongUtil(): PrimitiveLongUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return primitiveLongUtil;
    
}


    setAnimationInterface(animationInterface: Animation){
var animationInterface = animationInterface
this.animationInterface= animationInterface;
    
}


    getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterface;
    
}


    setName(name: string){
var name = name
this.name= name;
    
}


    getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
this.setColor(basicColor!.toInt());
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    public setColor(color: number){
var color = color
this.color= color;
    
}


    public getColor(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


    getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return width;
    
}


    setHeight(height: number){
var height = height
this.height= height;
    
}


    getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return height;
    
}


    getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


}
                
            

