
        /* Generated Code Do Not Modify */
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CustomItemInterface } from "../../../../org/allbinary/graphics/form/item/CustomItemInterface.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

export class MultipleScrollSelectionHorizontalForm extends ScrollSelectionForm {
        

    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.TRANSPARENT_GREY.toInt()!;
        
        
public constructor (title: string, items: CustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor){

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
                    
}

public constructor (title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var border = border
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public getStartIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSelectedIndex();
    
}


    private logged: boolean = false;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics

        try {
            
    var formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;
        
        


    var start: number = this.getStartIndex()!;
        
        


    var size: number = this.size()!;
        
        


    var dx: number = x;
        
        


    var dy: number = y;
        
        


                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    
                                    }
                                
                        else {
                            graphics.setColor(backgroundColor)
graphics.fillRect(x, y, this.rectangle.getWidth(), this.rectangle.getHeight())

                        }
                            

    var myFont: MyFont = MyFont.getInstance()!;
        
        

graphics.drawString(this.getTitle(), x, y -myFont!.DEFAULT_CHAR_HEIGHT, 0)

    var item: CustomItemInterface





                        for (
    var index: number = start;
        
        
index < size; index++)
        {
item= this.get(index) as CustomItemInterface

                        if(dx >= this.rectangle.getMaxX())
                        
                                    {
                                    
                        if(logged)
                        
                                    {
                                    
                                    }
                                
                        else {
                            logged= true
PreLogUtil.put(StringMaker().
                            append("painting beyond maxx: ")!.appendint(this.rectangle.getMaxX())!.toString(), this, canvasStrings!.PAINT)

                        }
                            

                                    }
                                

                        if(this.formType == formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    
    var dx2: number = this.paintItem(graphics, index, item, dx, dy) +border;
        
        

this.paintable.paint(graphics, index, dx, dy)
dx= dx2

                                    }
                                
                             else 
                        if(this.formType == formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    this.this.paintItem(graphics, index, item, dx, dy)
this.paintable.paint(graphics, index, dx, dy)

                                    }
                                
                        else {
                            


                            throw Error(formTypeFactory!.UNK)

                        }
                            
}

} catch(e: Exception)
            {
PreLogUtil.put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT)
}

}


}
                
            

