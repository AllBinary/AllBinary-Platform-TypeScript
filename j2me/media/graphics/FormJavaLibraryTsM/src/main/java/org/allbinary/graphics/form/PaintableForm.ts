
        /* Generated Code Do Not Modify */
        



import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { RectangleFactory } from "../../../../org/allbinary/graphics/RectangleFactory.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { CustomItem } from "../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class PaintableForm extends CustomForm {
        

    public static readonly NULL_PAINTABLE_FORM: PaintableForm = new PaintableForm(StringUtil.getInstance()!.EMPTY_STRING, new Array(0), RectangleFactory.SINGLETON, FormTypeFactory.getInstance()!.NULL_FORM_TYPE, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
        
        

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

    rectangle: Rectangle = RectangleFactory.SINGLETON;
        
        

    x: number= 0

    y: number= 0

    formType: FormType = FormTypeFactory.getInstance()!.NULL_FORM_TYPE;
        
        
public constructor (title: string, items: CustomItem[], rectangle: Rectangle, formType: FormType, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(title, items, backgroundBasicColor, foregroundBasicColor){

            super();
                //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.this.setSelectedIndex(0)

        try {
            this.this.init(rectangle, formType)
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


                //@Throws(Error::class)
            
    public init(rectangle: Rectangle, formType: FormType){
    //var rectangle = rectangle
    //var formType = formType
this.rectangle= rectangle

    var point: GPoint = this.rectangle.getPoint()!;
        
        

this.x= point.getX()
this.y= point.getY()
this.formType= formType
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle.getWidth();
    
}


}
                
            

