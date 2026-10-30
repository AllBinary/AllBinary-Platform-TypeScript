
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor

import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor

import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface

import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor

import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionForm } from './ScrollSelectionForm.js';
//not GWT import - same folder const ScrollSelectionForm
import { ItemIndexDx } from './ItemIndexDx.js';
//not GWT import - same folder const ItemIndexDx
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import - same folder const ItemPaintableFactory
import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import - same folder const FormTypeFactory
//import { VerticalFormProcessor } from './VerticalFormProcessor.js';
//not GWT import - same folder const VerticalFormProcessor
//import { VerticalItemIndexDx } from './VerticalItemIndexDx.js';
//not GWT import - same folder const VerticalItemIndexDx
//import { HorizontalFormProcessor } from './HorizontalFormProcessor.js';
//not GWT import - same folder const HorizontalFormProcessor
//import { HorizontalItemIndexDx } from './HorizontalItemIndexDx.js';
//not GWT import - same folder const HorizontalItemIndexDx
//import { TempHorizontalFormProcessor } from './TempHorizontalFormProcessor.js';
//not GWT import - same folder const TempHorizontalFormProcessor
//import { TempHorizontalItemIndexDx } from './TempHorizontalItemIndexDx.js';
//not GWT import - same folder const TempHorizontalItemIndexDx
import { FormType } from './FormType.js';
//not GWT import - same folder const FormType
type TempHorizontalFormProcessor = InstanceType<ScrollCurrentSelectionForm['TempHorizontalFormProcessor']>;
type HorizontalFormProcessor = InstanceType<ScrollCurrentSelectionForm['HorizontalFormProcessor']>;
type VerticalFormProcessor = InstanceType<ScrollCurrentSelectionForm['VerticalFormProcessor']>;
type TempHorizontalItemIndexDx = InstanceType<ScrollCurrentSelectionForm['TempHorizontalItemIndexDx']>;
type HorizontalItemIndexDx = InstanceType<ScrollCurrentSelectionForm['HorizontalItemIndexDx']>;
type VerticalItemIndexDx = InstanceType<ScrollCurrentSelectionForm['VerticalItemIndexDx']>;

export class ScrollCurrentSelectionForm extends ScrollSelectionForm implements UpdateMyFontInterface {
        

//inner= member=true isStatic=
TempHorizontalFormProcessor = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends Processor {
        

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


}; })();
//inner= member=true isStatic=
HorizontalFormProcessor = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends Processor {
        

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


}; })();
//inner= member=true isStatic=
VerticalFormProcessor = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends Processor {
        

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


}; })();
//inner= member=true isStatic=
TempHorizontalItemIndexDx = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends ItemIndexDx {
        

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


}; })();
//inner= member=true isStatic=
HorizontalItemIndexDx = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends ItemIndexDx {
        

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


}; })();
//inner= member=true isStatic=
VerticalItemIndexDx = (() => { const outer$ScrollCurrentSelectionForm = this; return class extends ItemIndexDx {
        

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


}; })();
    private readonly moveForSmallScreen: boolean;

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
    

    let formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

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

    let size: number = this.size()!;;
    

    let totalWidth: number = 0;;
    

    let item: ABCustomItem;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
item= this.get(index);
    
totalWidth += item.getMinimumWidth() +this.border;
    
}

this.dx= this.x +(this.rectangle.getWidth()>>1) -(totalWidth>>1);
    
this.dy= this.y +(this.rectangle.getHeight()>>1);
    

                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    let maxTitleHeight: number = 175;;
    

                        if(this.dy < maxTitleHeight)
                        
                                    {
                                    this.dy= maxTitleHeight;
    

                                    }
                                

                                    }
                                
}


    processVerticalForm(){

    let totalHeight: number = 0;;
    

    let size: number = this.size()!;;
    

    let item2: ABCustomItem;;
    




                        for (
    let index: number = 0;index < size; index++)
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
                                    
    let maxTitleHeight: number = 175;;
    

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

 try { this.processor.process();
    

    let delta: number = 0;;
    

    let deltaX: number = this.getDx()!;;
    

    let deltaY: number = this.getDy()!;;
    

    let size: number = this.size()!;;
    

    let formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

    let item: ABCustomItem;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
item= this.get(index);
    

    let diffX: number = this.preItemIndexDx!.getDx(index, item, this.dx, this.dy)!;;
    

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

 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT, e);
    

 }
   }
 
}


}

