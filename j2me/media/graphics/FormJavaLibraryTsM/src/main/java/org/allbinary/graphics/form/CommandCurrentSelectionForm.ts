
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { RectangleAdjustedAnimation } from '../../../../org/allbinary/animation/vector/RectangleAdjustedAnimation.js';
      //not GWT import const RectangleAdjustedAnimation = globalThis.org.allbinary.animation.vector.RectangleAdjustedAnimation;

      
import { RectangleFilledAdjustedAnimation } from '../../../../org/allbinary/animation/vector/RectangleFilledAdjustedAnimation.js';
      //not GWT import const RectangleFilledAdjustedAnimation = globalThis.org.allbinary.animation.vector.RectangleFilledAdjustedAnimation;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { CommandTextItem } from '../../../../org/allbinary/graphics/form/item/CommandTextItem.js';
      //not GWT import const CommandTextItem = globalThis.org.allbinary.graphics.form.item.CommandTextItem;

      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollCurrentSelectionForm } from './ScrollCurrentSelectionForm.js';
//not GWT import const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;

                import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

                
export class CommandCurrentSelectionForm extends ScrollCurrentSelectionForm implements UpdateMyFontInterface {
        

    readonly selectedAnimationArray: Animation[] = new Array(16);

    readonly unSelectedAnimationArray: Animation[] = new Array(16);

public constructor (title: string, items: ABCustomItem[], border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, ItemPaintableFactory.getInstance(), border,  -3, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.initAnimations();
    
this.addAll(items);
    
}


    public updateMeasurement(graphics: Graphics){
this.updateAll(graphics, getAllitems());
    
super.updateMeasurement(graphics);
    
}


    initAnimations(){

    var nullAnimation: Animation = NullAnimationFactory.getFactoryInstance()!.getInstance(0)!;;
    




                        for (
    var index: number = this.selectedAnimationArray!.length
                ;--index >= 0; )
        {
this.selectedAnimationArray[index]= nullAnimation;
    
}





                        for (
    var index: number = this.unSelectedAnimationArray!.length
                ;--index >= 0; )
        {
this.unSelectedAnimationArray[index]= nullAnimation;
    
}

}


    addAll(items: ABCustomItem[]){




                        for (
    var index: number = items.length
                ;--index >= 0; )
        {
this.addAt(index, items[index]!);
    
}

}


    addAt(index: number, item: ABCustomItem){

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    

    var buttonColor: BasicColor = basicColorFactory!.TRANSPARENT_GREY;;
    

    var selectedButtonColor: BasicColor = basicColorFactory!.TRANSPARENT_RED;;
    

    var width: number = item.getMinimumWidth()!;;
    

    var height: number = item.getMinimumHeight()!;;
    

    var adjustedBorder: number = 3;;
    

    var offset: number =  -(this.halfBorder +adjustedBorder);;
    

    var rectWidth: number = width +this.border -adjustedBorder;;
    

    var rectHeight: number = height +this.border -adjustedBorder;;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    this.selectedAnimationArray[index]= new RectangleAdjustedAnimation(rectWidth, rectHeight, offset, offset, selectedButtonColor);
    

                                    }
                                
                        else {
                            this.selectedAnimationArray[index]= new RectangleFilledAdjustedAnimation(rectWidth, rectHeight, offset, offset, selectedButtonColor);
    

                        }
                            
adjustedBorder= 4;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    this.unSelectedAnimationArray[index]= new RectangleAdjustedAnimation(rectWidth, rectHeight, offset, offset, buttonColor);
    

                                    }
                                
                        else {
                            this.unSelectedAnimationArray[index]= new RectangleFilledAdjustedAnimation(rectWidth, rectHeight, offset, offset, buttonColor);
    

                        }
                            
}


    updateAll(graphics: Graphics, items: ABCustomItem[]){




                        for (
    var index: number = items.length
                ;--index >= 0; )
        {
items[index]!.preMeasurement(graphics);
    
this.updateAt(index, items[index]!);
    
}

}


    updateAt(index: number, item: ABCustomItem){

    var basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;;
    

    var buttonColor: BasicColor = basicColorFactory!.TRANSPARENT_GREY;;
    

    var selectedButtonColor: BasicColor = basicColorFactory!.TRANSPARENT_RED;;
    

    var width: number = item.getMinimumWidth()!;;
    

    var height: number = item.getMinimumHeight()!;;
    

    var adjustedBorder: number = 3;;
    

    var offset: number =  -(this.halfBorder +adjustedBorder);;
    

    var rectWidth: number = width +this.border -adjustedBorder;;
    

    var rectHeight: number = height +this.border -adjustedBorder;;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    
    var rectangleAdjustedAnimation: RectangleAdjustedAnimation = this.selectedAnimationArray[index]! as RectangleAdjustedAnimation;;
    
rectangleAdjustedAnimation!.setWidth(rectWidth);
    
rectangleAdjustedAnimation!.setHeight(rectHeight);
    
rectangleAdjustedAnimation!.setOffsetX(offset);
    
rectangleAdjustedAnimation!.setOffsetY(offset);
    
rectangleAdjustedAnimation!.setBasicColorP(selectedButtonColor);
    

                                    }
                                
                        else {
                            
    var rectangleAdjustedAnimation: RectangleFilledAdjustedAnimation = this.selectedAnimationArray[index]! as RectangleFilledAdjustedAnimation;;
    
rectangleAdjustedAnimation!.setWidth(rectWidth);
    
rectangleAdjustedAnimation!.setHeight(rectHeight);
    
rectangleAdjustedAnimation!.setOffsetX(offset);
    
rectangleAdjustedAnimation!.setOffsetY(offset);
    
rectangleAdjustedAnimation!.setBasicColorP(selectedButtonColor);
    

                        }
                            
adjustedBorder= 4;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    
    var rectangleAdjustedAnimation: RectangleAdjustedAnimation = this.unSelectedAnimationArray[index]! as RectangleAdjustedAnimation;;
    
rectangleAdjustedAnimation!.setWidth(rectWidth);
    
rectangleAdjustedAnimation!.setHeight(rectHeight);
    
rectangleAdjustedAnimation!.setOffsetX(offset);
    
rectangleAdjustedAnimation!.setOffsetY(offset);
    
rectangleAdjustedAnimation!.setBasicColorP(buttonColor);
    

                                    }
                                
                        else {
                            
    var rectangleAdjustedAnimation: RectangleFilledAdjustedAnimation = this.unSelectedAnimationArray[index]! as RectangleFilledAdjustedAnimation;;
    
rectangleAdjustedAnimation!.setWidth(rectWidth);
    
rectangleAdjustedAnimation!.setHeight(rectHeight);
    
rectangleAdjustedAnimation!.setOffsetX(offset);
    
rectangleAdjustedAnimation!.setOffsetY(offset);
    
rectangleAdjustedAnimation!.setBasicColorP(buttonColor);
    

                        }
                            
}


    public getSelectedCommand(): Command{

    var index: number = super.getSelectedIndex()!;;
    

    var commandTextItem: CommandTextItem = this.get(index) as unknown as CommandTextItem;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandTextItem!.getCommand();;
    
}


    public append(item: ABCustomItem): number{

    var result: number = super.append(item)!;;
    
this.addAt(result, item);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public delete(itemNum: number){
super.delete(itemNum);
    
}


    public deleteAll(){
this.initAnimations();
    
super.deleteAll();
    
}


    public insert(itemNum: number, item: ABCustomItem){
super.insert(itemNum, item);
    
}


    public set(itemNum: number, item: ABCustomItem){
super.set(itemNum, item);
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
super.paint(graphics);
    
}


                //@Throws(Exception.constructor)
            
    public paintItem(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{
this.selectedAnimationArray[index]!.paintXY(graphics, x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.paintItem(graphics, index, item, x, y);;
    
}


                //@Throws(Exception.constructor)
            
    public paintUnselectedItem(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{
this.unSelectedAnimationArray[index]!.paintXY(graphics, x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.paintUnselectedItem(graphics, index, item, x, y);;
    
}


}



