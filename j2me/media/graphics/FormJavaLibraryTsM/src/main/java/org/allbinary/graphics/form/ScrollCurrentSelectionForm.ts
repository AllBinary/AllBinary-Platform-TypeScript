
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

    
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';

    
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';

    
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionForm } from './ScrollSelectionForm.js';
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
import { FormType } from './FormType.js';
import { FormTypeFactory } from './FormTypeFactory.js';

export class ScrollCurrentSelectionForm extends ScrollSelectionForm {
        

    private dx: number= 0

    private dy: number= 0

    private maxWidth: number = 0;

    private readonly moveForSmallScreen: boolean
public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
                        //var title = title
    //var items = items
    //var formPaintableFactory = formPaintableFactory
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var moveForSmallScreen = moveForSmallScreen
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.moveForSmallScreen= moveForSmallScreen;
    
this.initForm();
    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle, formType: FormType){
    //var rectangle = rectangle
    //var formType = formType
super.init(rectangle, formType);
    
this.initForm();
    
}


    public initForm(){

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
;
    

                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    this.dx= x -30 +(this.rectangle.getWidth()>>1);
    
this.dy= y;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    
    var size: number = this.size()!;
;
    

    var totalWidth: number = 0;
;
    

    var item: ABCustomItem
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
item= this.get(index);
    
totalWidth += item.getMinimumWidth() +border;
    
}

this.dx= x +(this.rectangle.getWidth()>>1) -(totalWidth>>1);
    
this.dy= y +(this.rectangle.getHeight()>>1);
    

                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;
;
    

                        if(this.dy < maxTitleHeight)
                        
                                    {
                                    this.dy= maxTitleHeight;
    

                                    }
                                

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    
    var totalHeight: number = 0;
;
    

    var size: number = this.size()!;
;
    

    var item2: ABCustomItem
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
item2= this.get(index);
    

                        if(this.maxWidth < item2.getMinimumWidth())
                        
                                    {
                                    this.maxWidth= item2.getMinimumWidth();
    

                                    }
                                
totalHeight += item2.getMinimumHeight() +border;
    
}

this.dx= ((this.rectangle.getWidth() -this.maxWidth) /2);
    

                        if(this.size() > 0)
                        
                                    {
                                    this.dy= y +((this.rectangle.getHeight() -totalHeight) /2);
    

                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;
;
    

                        if(this.dy < maxTitleHeight)
                        
                                    {
                                    this.dy= maxTitleHeight;
    

                                    }
                                

                                    }
                                

                                    }
                                
                        else {
                            this.dy= y;
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF(formTypeFactory!.UNK, this, commonStrings!.INIT);
    

                        }
                            
}


    public paint(graphics: Graphics){
    //var graphics = graphics

        try {
            
    var delta: number = 0;
;
    

    var deltaX: number = this.getDx()!;
;
    

    var deltaY: number = this.getDy()!;
;
    

    var size: number = this.size()!;
;
    

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
;
    

    var item: ABCustomItem
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
item= this.get(index);
    

    var diffX: number = 0;
;
    

                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    diffX= this.getDiffX(item);
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    diffX= this.getDiffX(item) +this.halfBorder;
    

                                    }
                                
                        else {
                            


                            throw new Exception(formTypeFactory!.UNK);
                    

                        }
                            

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
this.logUtil!.put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e);
    
}

}


    getDiffX(item: ABCustomItem): number{
var item = item



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


}
                
            

