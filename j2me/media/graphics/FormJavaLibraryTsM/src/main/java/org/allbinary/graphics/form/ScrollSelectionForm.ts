
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CustomItemInterface } from "../../../../org/allbinary/graphics/form/item/CustomItemInterface.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { RectangleCollisionUtil } from "../../../../org/allbinary/math/RectangleCollisionUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class ScrollSelectionForm extends PaintableForm {
        

    public static readonly NULL_SCROLL_SELECTION_FORM: ScrollSelectionForm = new ScrollSelectionForm(StringUtil.getInstance()!.EMPTY_STRING, new Array(0), RectangleFactory.SINGLETON, FormTypeFactory.getInstance()!.NULL_FORM_TYPE, 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    private static readonly GET_SELECTED_INDEX: string = "getSelectedIndex";
        
        

    private static readonly INSIDE_FORM: string = " inside form";
        
        

    private static readonly IS_IN_FORM: string = "isInForm";
        
        

    private readonly rectangleCollisionUtil: RectangleCollisionUtil = RectangleCollisionUtil.getInstance()!;
        
        

    readonly border: number

    readonly halfBorder: number

    private buttonBasicColor: BasicColor

    paintable: ItemPaintable = ItemPaintableFactory.getInstance()!;
        
        
public constructor (title: string, items: CustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : this(title, items, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var formPaintableFactory = formPaintableFactory
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.paintable= formPaintableFactory!.getInstance(this)
}

public constructor (title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, rectangle, formType, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.buttonBasicColor= foregroundBasicColor
this.border= border
this.halfBorder= (border shr 1)
}


    public append(item: CustomItem): number{
    //var item = item



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.append(item);
    
}


                //@Throws(Error::class)
            
    public getSelectedItem(point: GPoint): CustomItem{
    //var point = point

    var index: number = this.getSelectedIndex(point)!;
        
        


                        if(index !=  -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.get(index);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CustomItem.NULL_CUSTOM_ITEM;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public getItemIndex(item: CustomItem): number{
    //var item = item

    var size: number = this.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextItem: CustomItemInterface = this.get(index) as CustomItemInterface;
        
        


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


                //@Throws(Error::class)
            
    public getSelectedIndex(point: GPoint): number{
    //var point = point

    var start: number = this.getStartIndex()!;
        
        


    var size: number = this.size()!;
        
        


    var dx: number = this.getDx()!;
        
        


    var dy: number = this.getDy()!;
        
        


    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        


    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(commonLabels!.START_LABEL)
stringBuffer!.appendint(start)
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(commonLabels!.TOTAL_LABEL)
stringBuffer!.appendint(size)
logUtil!.put(stringBuffer!.toString(), this, GET_SELECTED_INDEX)

    var item: CustomItemInterface


    var width: number= 0


    var height: number= 0





                        for (
    var index: number = start;
        
        
index < size; index++)
        {
item= this.get(index) as CustomItemInterface
width= item.getMinimumWidth()
height= item.getMinimumHeight()

    var diffX: number = 0;
        
        


                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    diffX= dx -this.halfBorder

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM || this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    diffX= dx +this.getDiffX(item)

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            

                        if(rectangleCollisionUtil!.isInside(diffX, dy -this.halfBorder, diffX +width +this.border, dy +height +this.halfBorder +1, point.getX(), point.getY()))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(commonLabels!.ITEM_LABEL)
stringBuffer!.append(item.getLabel())
stringBuffer!.append(CommonSeps.getInstance()!.SPACE)
stringBuffer!.append(commonLabels!.INDEX_LABEL)
stringBuffer!.appendint(index)
logUtil!.put(stringBuffer!.toString(), this, GET_SELECTED_INDEX)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return index;
    

                                    }
                                

                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    dx= dx +width +border

                        if(dx > this.rectangle.getMaxX())
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    dy= dy +height +border

                        if(dy > this.rectangle.getMaxY())
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


                //@Throws(Error::class)
            
    public processInput(gameKeyCode: number): number{
    //var gameKeyCode = gameKeyCode

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        


                        if(this.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                                    }
                                

    var index: number = this.getSelectedIndex()!;
        
        


                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM || this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    
                        if(gameKeyCode == Canvas.RIGHT)
                        
                                    {
                                    index++

                                    }
                                
                             else 
                        if(gameKeyCode == Canvas.LEFT)
                        
                                    {
                                    index--

                                    }
                                

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    
                        if(gameKeyCode == Canvas.DOWN)
                        
                                    {
                                    index++

                                    }
                                
                             else 
                        if(gameKeyCode == Canvas.UP)
                        
                                    {
                                    index--

                                    }
                                

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            

    var max: number = this.size() -1;
        
        


                        if(index < 0)
                        
                                    {
                                    this.setSelectedIndex(0)

                                    }
                                
                             else 
                        if(index > max)
                        
                                    {
                                    this.setSelectedIndex(max)

                                    }
                                
                        else {
                            this.setSelectedIndex(index)

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    
}


    public isInForm(point: GPoint): boolean{
    //var point = point

                        if(rectangleCollisionUtil!.isInside(x, y -halfBorder, this.rectangle.getMaxX() +border, this.rectangle.getMaxY() +border, point.getX(), point.getY()))
                        
                                    {
                                    logUtil!.put(StringMaker().
                            append(StringUtil.getInstance()!.toString(point))!.append(INSIDE_FORM)!.toString(), this, IS_IN_FORM)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public paintItem(graphics: Graphics, index: number, item: CustomItemInterface, x: number, y: number): number{
    //var graphics = graphics
    //var index = index
    //var item = item
    //var x = x
    //var y = y

    var width: number = item.getMinimumWidth()!;
        
        


    var height: number = item.getMinimumHeight()!;
        
        


    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        

item.paint(graphics, x, y)
graphics.setColor(this.getButtonBasicColor()!.toInt())

    var adjustedBorder: number = 3;
        
        

graphics.drawRect(x -halfBorder -adjustedBorder, y -halfBorder -adjustedBorder, width +border -adjustedBorder, height +border -adjustedBorder)

                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x +width +border;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y +height +border;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            
}


                //@Throws(Error::class)
            
    public paintUnselectedItem(graphics: Graphics, index: number, item: CustomItemInterface, x: number, y: number): number{
    //var graphics = graphics
    //var index = index
    //var item = item
    //var x = x
    //var y = y

    var width: number = item.getMinimumWidth()!;
        
        


    var height: number = item.getMinimumHeight()!;
        
        

graphics.setColor(this.getButtonBasicColor()!.toInt())
item.paintUnselected(graphics, x, y)

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        


                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x +width +border;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y +height +border;
    

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            
}


    getDiffX(item: CustomItemInterface): number{
    //var item = item



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return x;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return y;
    
}


    public setButtonBasicColor(buttonBasicColor: BasicColor){
    //var buttonBasicColor = buttonBasicColor
this.buttonBasicColor= buttonBasicColor
}


    getButtonBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return buttonBasicColor;
    
}


}
                
            

