
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
        
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionForm } from './ScrollSelectionForm.js';
import { ItemIndexDx } from './ItemIndexDx.js';
import { FormTypeFactory } from './FormTypeFactory.js';
//import { VerticalFormProcessor } from './VerticalFormProcessor.js';
//import { VerticalItemIndexDx } from './VerticalItemIndexDx.js';
//import { HorizontalFormProcessor } from './HorizontalFormProcessor.js';
//import { HorizontalItemIndexDx } from './HorizontalItemIndexDx.js';
//import { TempHorizontalFormProcessor } from './TempHorizontalFormProcessor.js';
//import { TempHorizontalItemIndexDx } from './TempHorizontalItemIndexDx.js';
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
import { FormType } from './FormType.js';

export class ScrollCurrentSelectionForm extends ScrollSelectionForm {
        

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
                
            
    private processor: Processor = Processor.getInstance()!;

    private preItemIndexDx: ItemIndexDx = ItemIndexDx.getInstance()!;

    private dx: number= 0;

    private dy: number= 0;

    private maxWidth: number = 0;

public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.moveForSmallScreen= moveForSmallScreen;
    

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
                
            

