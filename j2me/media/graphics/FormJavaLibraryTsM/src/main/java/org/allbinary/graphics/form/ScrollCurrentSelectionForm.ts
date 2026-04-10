
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CustomItemInterface } from "../../../../org/allbinary/graphics/form/item/CustomItemInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class ScrollCurrentSelectionForm extends ScrollSelectionForm {
        

    private dx: number= 0

    private dy: number= 0

    private maxWidth: number = 0;
        
        

    private readonly moveForSmallScreen: boolean
public constructor (title: string, items: CustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor){

            super();
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
                    
this.moveForSmallScreen= moveForSmallScreen
this.init()
}

public constructor (title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, border: number, moveForSmallScreen: boolean, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var moveForSmallScreen = moveForSmallScreen
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.moveForSmallScreen= moveForSmallScreen
this.init()
}


                @Throws(Exception::class)
            
    public init(rectangle: Rectangle, formType: FormType){
    //var rectangle = rectangle
    //var formType = formType
init(rectangle, formType)
this.init()
}


    public init(){

    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        


    
                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    dx= x -30 +(this.rectangle.getWidth() shr 1)
dy= y

                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    
    var size: number = this.size()!;
        
        


    var totalWidth: number = 0;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: CustomItemInterface = this.get(index) as CustomItemInterface;
        
        

totalWidth += item.getMinimumWidth() +border
}

dx= x +(this.rectangle.getWidth() shr 1) -(totalWidth shr 1)
dy= y +(this.rectangle.getHeight() shr 1)

    
                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;
        
        


    
                        if(dy < maxTitleHeight)
                        
                                    {
                                    dy= maxTitleHeight

                                    }
                                

                                    }
                                

                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    
    var totalHeight: number = 0;
        
        


    var size: number = this.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item2: CustomItem = this.get(index)!;
        
        


    
                        if(maxWidth < item2.getMinimumWidth())
                        
                                    {
                                    maxWidth= item2.getMinimumWidth()

                                    }
                                
totalHeight += item2.getMinimumHeight() +border
}

dx= ((this.rectangle.getWidth() -maxWidth) /2)

    
                        if(this.size() > 0)
                        
                                    {
                                    dy= y +((this.rectangle.getHeight() -totalHeight) /2)

    
                        if(this.moveForSmallScreen)
                        
                                    {
                                    
    var maxTitleHeight: number = 175;
        
        


    
                        if(dy < maxTitleHeight)
                        
                                    {
                                    dy= maxTitleHeight

                                    }
                                

                                    }
                                

                                    }
                                
                        else {
                            dy= y

                        }
                            

                                    }
                                
                        else {
                            put(formTypeFactory!.UNK, this, commonStrings!.INIT)

                        }
                            
}


    public paint(graphics: Graphics){
    //var graphics = graphics

        try {
            
    var delta: number = 0;
        
        


    var deltaX: number = getDx()!;
        
        


    var deltaY: number = getDy()!;
        
        


    var size: number = this.size()!;
        
        


    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: CustomItemInterface = this.get(index) as CustomItemInterface;
        
        


    var diffX: number = 0;
        
        


    
                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    diffX= this.getDiffX(item)

                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    diffX= this.getDiffX(item) +this.halfBorder

                                    }
                                
                        else {
                            


                            throw Exception(formTypeFactory!.UNK)

                        }
                            

    
                        if(index == this.getSelectedIndex())
                        
                                    {
                                    delta= this.paintItem(graphics, index, item, deltaX +diffX, deltaY)
paint(graphics, index, deltaX +diffX, deltaY)

                                    }
                                
                        else {
                            delta= this.paintUnselectedItem(graphics, index, item, deltaX +diffX, deltaY)
paint(graphics, index, deltaX +diffX, deltaY)

                        }
                            

    
                        if(this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM)
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    deltaX= delta

                                    }
                                
                             else 
    
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    deltaY= delta

                                    }
                                
                        else {
                            


                            throw Exception(formTypeFactory!.UNK)

                        }
                            
}

} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e)
}

}


    getDiffX(item: CustomItemInterface): number{
var item = item



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ((maxWidth -item.getMinimumWidth()) shr 1);
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dy;
    
}


}
                
            

