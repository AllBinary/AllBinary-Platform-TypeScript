
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

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionForm } from './ScrollSelectionForm.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

                import { ItemIndexDx } from './ItemIndexDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemIndexDx;

                import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

                import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.FormTypeFactory;

                //import { VerticalFormProcessor } from './VerticalFormProcessor.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.VerticalFormProcessor;

                //import { VerticalItemIndexDx } from './VerticalItemIndexDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.VerticalItemIndexDx;

                //import { HorizontalFormProcessor } from './HorizontalFormProcessor.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.HorizontalFormProcessor;

                //import { HorizontalItemIndexDx } from './HorizontalItemIndexDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.HorizontalItemIndexDx;

                //import { TempHorizontalFormProcessor } from './TempHorizontalFormProcessor.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.TempHorizontalFormProcessor;

                //import { TempHorizontalItemIndexDx } from './TempHorizontalItemIndexDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.TempHorizontalItemIndexDx;

                import { FormType } from './FormType.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.FormType;

                
export class ScrollCurrentSelectionForm extends ScrollSelectionForm implements UpdateMyFontInterface {
        

    private readonly moveForSmallScreen: boolean;

//inner= member=true isStatic=
TempHorizontalFormProcessor = class extends Processor {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.scrollCurrentSelectionForm!.processTempHorizontalForm();
    
this.scrollCurrentSelectionForm!.processor= Processor.getInstance();
    
}


}


//inner= member=true isStatic=
HorizontalFormProcessor = class extends Processor {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.scrollCurrentSelectionForm!.processHorizontalForm();
    
this.scrollCurrentSelectionForm!.processor= Processor.getInstance();
    
}


}


//inner= member=true isStatic=
VerticalFormProcessor = class extends Processor {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.scrollCurrentSelectionForm!.processVerticalForm();
    
this.scrollCurrentSelectionForm!.processor= Processor.getInstance();
    
}


}


//inner= member=true isStatic=
TempHorizontalItemIndexDx = class extends ItemIndexDx {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollCurrentSelectionForm!.getXTempHorizontalForm(index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
HorizontalItemIndexDx = class extends ItemIndexDx {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollCurrentSelectionForm!.getXHorizontalForm(index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
VerticalItemIndexDx = class extends ItemIndexDx {
        

    private readonly scrollCurrentSelectionForm: ScrollCurrentSelectionForm;

 constructor (scrollCurrentSelectionForm: ScrollCurrentSelectionForm){

            super();
        this.scrollCurrentSelectionForm= scrollCurrentSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollCurrentSelectionForm!.getXVerticalForm(index, item, dx, dy);;
    
}


}


    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    private processor: Processor = Processor.getInstance()!;

    private preItemIndexDx: ItemIndexDx = ItemIndexDx.getInstance()!;

    private dx: number= 0;

    private dy: number= 0;

    private maxWidth: number = 0;

public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, border: number, adjustedExtraBorder: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, formPaintableFactory, border, adjustedExtraBorder, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.moveForSmallScreen= moveForSmallScreen;
    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle, formType: FormType){
super.init(rectangle, formType);
    

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

                        if(formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    this.processor= new this.TempHorizontalFormProcessor(this);
    
this.preItemIndexDx= new this.TempHorizontalItemIndexDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    this.processor= new this.HorizontalFormProcessor(this);
    
this.preItemIndexDx= new this.HorizontalItemIndexDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    this.processor= new this.VerticalFormProcessor(this);
    
this.preItemIndexDx= new this.VerticalItemIndexDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.NULL_FORM_TYPE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.logUtil!.putF(formTypeFactory!.UNK, this, this.commonStrings!.INIT);
    

                        }
                            
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public updateMeasurement(graphics: Graphics){
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    processTempHorizontalForm(){
this.dx= this.x -30 +(this.rectangle.getWidth()>>1);
    
this.dy= this.y;
    
}


    processHorizontalForm(){

    var size: number = this.size()!;;
    

    var totalWidth: number = 0;;
    

    var item: ABCustomItem;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
item= this.get(index);
    
totalWidth += item.getMinimumWidth() +this.border;
    
}

this.dx= this.x +(this.rectangle.getWidth()>>1) -(totalWidth>>1);
    
this.dy= this.y +(this.rectangle.getHeight()>>1);
    

                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;;
    

                        if(this.dy < maxTitleHeight)
                        
                                    {
                                    this.dy= maxTitleHeight;
    

                                    }
                                

                                    }
                                
}


    processVerticalForm(){

    var totalHeight: number = 0;;
    

    var size: number = this.size()!;;
    

    var item2: ABCustomItem;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
item2= this.get(index);
    

                        if(this.maxWidth < item2.getMinimumWidth())
                        
                                    {
                                    this.maxWidth= item2.getMinimumWidth();
    

                                    }
                                
totalHeight += item2.getMinimumHeight() +this.border;
    
}

this.dx= ((this.rectangle.getWidth() -this.maxWidth) /2);
    

                        if(this.size() > 0)
                        
                                    {
                                    this.dy= this.y +((this.rectangle.getHeight() -totalHeight) /2);
    

                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;;
    

                        if(this.dy < maxTitleHeight)
                        
                                    {
                                    this.dy= maxTitleHeight;
    

                                    }
                                

                                    }
                                

                                    }
                                
                        else {
                            this.dy= this.y;
    

                        }
                            
}


    getXTempHorizontalForm(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getDiffX(item);;
    
}


    getXHorizontalForm(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    getXVerticalForm(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getDiffX(item) +this.halfBorder;
    
}


    getDiffX(item: ABCustomItem): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((this.maxWidth -item.getMinimumWidth())>>1);
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dx;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.dy;
    
}


    public paint(graphics: Graphics){

        try {
            this.processor.process();
    

    var delta: number = 0;;
    

    var deltaX: number = this.getDx()!;;
    

    var deltaY: number = this.getDy()!;;
    

    var size: number = this.size()!;;
    

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

    var item: ABCustomItem;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
item= this.get(index);
    

    var diffX: number = this.preItemIndexDx!.getDx(index, item, this.dx, this.dy)!;;
    

                        if(index == this.getSelectedIndex())
                        
                                    {
                                    delta= this.paintItem(graphics, index, item, deltaX +diffX, deltaY);
    
this.paintable.paint(graphics, index, deltaX +diffX, deltaY);
    

                                    }
                                
                        else {
                            delta= this.paintUnselectedItem(graphics, index, item, deltaX +diffX, deltaY);
    
this.paintable.paint(graphics, index, deltaX +diffX, deltaY);
    

                        }
                            

                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    deltaX= delta;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    deltaY= delta;
    

                                    }
                                
                        else {
                            


                            throw new Exception(formTypeFactory!.UNK);
                    

                        }
                            
}


                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT, e);
    
}

}


}



