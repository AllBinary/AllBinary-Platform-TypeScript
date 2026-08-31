
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
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not plain js import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { RectangleCollisionUtil } from '../../../../org/allbinary/math/RectangleCollisionUtil.js';
      const RectangleCollisionUtil = globalThis.org.allbinary.math.RectangleCollisionUtil;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PaintableForm } from './PaintableForm.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.PaintableForm;

                import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;

                import { ItemIndexPaintable } from './ItemIndexPaintable.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemIndexPaintable;

                import { ItemIndexDx } from './ItemIndexDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemIndexDx;

                import { ItemPaintable } from './ItemPaintable.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ItemPaintable;

                import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.FormTypeFactory;

                //import { ScrollSelectionFormTempHorizontalPaintable } from './ScrollSelectionFormTempHorizontalPaintable.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormTempHorizontalPaintable;

                //import { ScrollSelectionFormTempHorizontalDx } from './ScrollSelectionFormTempHorizontalDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormTempHorizontalDx;

                //import { ScrollSelectionFormVerticalPaintable } from './ScrollSelectionFormVerticalPaintable.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormVerticalPaintable;

                //import { ScrollSelectionFormVericalDx } from './ScrollSelectionFormVericalDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormVericalDx;

                //import { ScrollSelectionFormHorizontalPaintable } from './ScrollSelectionFormHorizontalPaintable.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormHorizontalPaintable;

                //import { ScrollSelectionFormHorizontalDx } from './ScrollSelectionFormHorizontalDx.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.ScrollSelectionFormHorizontalDx;

                import { FormType } from './FormType.js';
//not GWT import const  = globalThis.org.allbinary.graphics.form.FormType;

                
export class ScrollSelectionForm extends PaintableForm {
        

    static createForm(title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): ScrollSelectionForm{

        try {
            
                        if(formPaintableFactory == ItemPaintableFactory.getInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ScrollSelectionForm(title, items, formPaintableFactory, border,  -3, backgroundBasicColor, foregroundBasicColor);
    

                                    }
                                
                        else {
                            


                            throw new RuntimeException();
                    

                        }
                            

                //: 
} catch(e) 
            {



                            throw new RuntimeException();
                    
}

}


    private static NULL_SCROLL_SELECTION_FORM: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullScrollSelectionForm(): ScrollSelectionForm{

                        if(ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM= ScrollSelectionForm.createForm(StringUtil.getInstance()!.EMPTY_STRING, [], ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM as ScrollSelectionForm;
    
}


    private static NULL_SCROLL_SELECTION_HORIZONTAL_FORM: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullScrollSelectionFormHorizontal(): ScrollSelectionForm{

                        if(ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM= ScrollSelectionForm.createForm(StringUtil.getInstance()!.EMPTY_STRING, [], ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM as ScrollSelectionForm;
    
}


    private static readonly INSIDE_FORM: string = " inside form";

    private static readonly IS_IN_FORM: string = "isInForm";

    private static readonly GET_SELECTED_INDEX: string = "getSelectedIndexForPoint";

//inner= member=true isStatic=
ScrollSelectionFormHorizontalPaintable = class extends ItemIndexPaintable {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (scrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= scrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public paint(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.paintItemHorizontal(graphics, index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
ScrollSelectionFormVerticalPaintable = class extends ItemIndexPaintable {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (scrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= scrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public paint(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.paintItemVertical(graphics, index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
ScrollSelectionFormTempHorizontalPaintable = class extends ItemIndexPaintable {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (scrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= scrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public paint(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.paintItemTempHorizontal(graphics, index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
ScrollSelectionFormHorizontalDx = class extends ItemIndexDx {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (multipleScrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= multipleScrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.getSelectedIndexForPointHorizontalDx(index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
ScrollSelectionFormVericalDx = class extends ItemIndexDx {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (multipleScrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= multipleScrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.getSelectedIndexForPointVerticalDx(index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
ScrollSelectionFormTempHorizontalDx = class extends ItemIndexDx {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly scrollSelectionForm: ScrollSelectionForm;

 constructor (multipleScrollSelectionForm: ScrollSelectionForm){

            super();
        this.scrollSelectionForm= multipleScrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public getDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionForm!.getSelectedIndexForPointTempHorizontalDx(index, item, dx, dy);;
    
}


}


    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;

    readonly border: number;

    readonly halfBorder: number;

    private buttonBasicColor: BasicColor;

    scrollSelectionFormFormTypeItemIndexPaintable: ItemIndexPaintable = ItemIndexPaintable.getInstance()!;

    private formTypeItemIndexDx: ItemIndexDx = ItemIndexDx.getInstance()!;

    paintable: ItemPaintable = ItemPaintableFactory.getInstance()!;

    private readonly adjustedExtraBorder: number;

public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, border: number, adjustedExtraBorder: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.adjustedExtraBorder= adjustedExtraBorder;
    
this.buttonBasicColor= foregroundBasicColor;
    
this.border= border;
    
this.halfBorder= (border>>1);
    
this.paintable= formPaintableFactory!.getInstanceItemPaintable(this);
    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle, formType: FormType){
super.init(rectangle, formType);
    

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

                        if(formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    this.scrollSelectionFormFormTypeItemIndexPaintable= new this.ScrollSelectionFormHorizontalPaintable(this);
    
this.formTypeItemIndexDx= new this.ScrollSelectionFormHorizontalDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    this.scrollSelectionFormFormTypeItemIndexPaintable= new this.ScrollSelectionFormVerticalPaintable(this);
    
this.formTypeItemIndexDx= new this.ScrollSelectionFormVericalDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    this.scrollSelectionFormFormTypeItemIndexPaintable= new this.ScrollSelectionFormTempHorizontalPaintable(this);
    
this.formTypeItemIndexDx= new this.ScrollSelectionFormTempHorizontalDx(this);
    

                                    }
                                
                             else 
                        if(formType == formTypeFactory!.NULL_FORM_TYPE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Exception(formTypeFactory!.UNK);
                    

                        }
                            
}


    public paintItemHorizontal(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{

    var width: number = item.getMinimumWidth()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x +width +this.border;
    
}


    public paintItemVertical(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{

    var height: number = item.getMinimumHeight()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y +height +this.border;
    
}


    public paintItemTempHorizontal(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getSelectedIndexForPointHorizontalDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx -this.halfBorder;
    
}


    public getSelectedIndexForPointVerticalDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx +this.getDiffX(item);
    
}


    public getSelectedIndexForPointTempHorizontalDx(index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx +this.getDiffX(item);
    
}


    public append(item: ABCustomItem): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.append(item);;
    
}


                //@Throws(Exception.constructor)
            
    public getSelectedItem(point: GPoint): ABCustomItem{

    var index: number = this.getSelectedIndexForPoint(point)!;;
    

                        if(index !=  -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(index);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ABCustomItem.getNullInstance();;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public getItemIndex(item: ABCustomItem): number{

    var nextItem: ABCustomItem;;
    

    var size: number = this.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
nextItem= this.get(index) as ABCustomItem;
    

                        if(nextItem == item)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public getStartIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


                //@Throws(Exception.constructor)
            
    public getSelectedIndexForPoint(point: GPoint): number{

    var start: number = this.getStartIndex()!;;
    

    var size: number = this.size()!;;
    

    var dx: number = this.getDx()!;;
    

    var dy: number = this.getDy()!;;
    

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(commonLabels!.START_LABEL);
    
stringBuffer!.appendint(start);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(commonLabels!.TOTAL_LABEL);
    
stringBuffer!.appendint(size);
    
this.logUtil!.putF(stringBuffer!.toString(), this, ScrollSelectionForm.GET_SELECTED_INDEX);
    

    var item: ABCustomItem;;
    

    var width: number= 0;;
    

    var height: number= 0;;
    

    var diffX: number= 0;;
    




                        for (
    var index: number = start;index < size; index++)
        {
item= this.get(index);
    
width= item.getMinimumWidth();
    
height= item.getMinimumHeight();
    
diffX= this.formTypeItemIndexDx!.getDx(index, item, dx, dy);
    

                        if(this.rectangleCollisionUtil!.isInside(diffX, dy -this.halfBorder, diffX +width +this.border, dy +height +this.halfBorder +1, point.getX(), point.getY()))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(commonLabels!.ITEM_LABEL);
    
stringBuffer!.append(item.getLabel());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(commonLabels!.INDEX_LABEL);
    
stringBuffer!.appendint(index);
    
this.logUtil!.putF(stringBuffer!.toString(), this, ScrollSelectionForm.GET_SELECTED_INDEX);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                

                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    dx= dx +width +this.border;
    

                        if(dx > this.rectangle.getMaxX())
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    dy= dy +height +this.border;
    

                        if(dy > this.rectangle.getMaxY())
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.NULL_FORM_TYPE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Exception(formTypeFactory!.UNK);
                    

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


                //@Throws(Exception.constructor)
            
    public processInputKey(gameKeyCode: number): number{

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;;
    

                        if(this.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                                    }
                                

    var index: number = this.getSelectedIndex()!;;
    

                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM || this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    
                        if(gameKeyCode == Canvas.RIGHT)
                        
                                    {
                                    index++;
    

                                    }
                                
                             else 
                        if(gameKeyCode == Canvas.LEFT)
                        
                                    {
                                    index--;
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    
                        if(gameKeyCode == Canvas.DOWN)
                        
                                    {
                                    index++;
    

                                    }
                                
                             else 
                        if(gameKeyCode == Canvas.UP)
                        
                                    {
                                    index--;
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.NULL_FORM_TYPE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Exception(formTypeFactory!.UNK);
                    

                        }
                            

    var max: number = this.size() -1;;
    

                        if(index < 0)
                        
                                    {
                                    this.setSelectedIndex(0);
    

                                    }
                                
                             else 
                        if(index > max)
                        
                                    {
                                    this.setSelectedIndex(max);
    

                                    }
                                
                        else {
                            this.setSelectedIndex(index);
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public isInForm(point: GPoint): boolean{

                        if(this.rectangleCollisionUtil!.isInside(this.x, this.y -this.halfBorder, this.rectangle.getMaxX() +this.border, this.rectangle.getMaxY() +this.border, point.getX(), point.getY()))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(StringUtil.getInstance()!.toString(point))!.append(ScrollSelectionForm.INSIDE_FORM)!.toString(), this, ScrollSelectionForm.IS_IN_FORM);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public paintItem(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{
item.paintXY(graphics, x, y);
    

    var width: number = item.getMinimumWidth()!;;
    

    var height: number = item.getMinimumHeight()!;;
    
graphics.setColor(this.getButtonBasicColor()!.intValue());
    

    var adjustedBorder: number = 3;;
    
graphics.drawRect(x -this.halfBorder -adjustedBorder, y -this.halfBorder -adjustedBorder, width +this.border +this.adjustedExtraBorder, height +this.border +this.adjustedExtraBorder);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionFormFormTypeItemIndexPaintable!.paint(graphics, index, item, x, y);;
    
}


                //@Throws(Exception.constructor)
            
    public paintUnselectedItem(graphics: Graphics, index: number, item: ABCustomItem, x: number, y: number): number{
graphics.setColor(this.getButtonBasicColor()!.intValue());
    
item.paintUnselected(graphics, x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scrollSelectionFormFormTypeItemIndexPaintable!.paint(graphics, index, item, x, y);;
    
}


    getDiffX(item: ABCustomItem): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.x;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.y;
    
}


    public setButtonBasicColor(buttonBasicColor: BasicColor){
this.buttonBasicColor= buttonBasicColor;
    
}


    getButtonBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.buttonBasicColor;
    
}


}



