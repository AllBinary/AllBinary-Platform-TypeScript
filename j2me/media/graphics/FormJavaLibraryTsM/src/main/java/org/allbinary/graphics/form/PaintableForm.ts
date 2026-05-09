
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';

    
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';

    
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';

    
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';

    
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';

    
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';

    
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';

    
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomForm } from './ABCustomForm.js';
import { FormTypeFactory } from './FormTypeFactory.js';
import { FormType } from './FormType.js';

export class PaintableForm extends ABCustomForm {
        

    public static readonly NULL_PAINTABLE_FORM: PaintableForm = new PaintableForm(StringUtil.getInstance()!.EMPTY_STRING, [], RectangleFactory.SINGLETON, FormTypeFactory.getInstance()!.NULL_FORM_TYPE, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);

    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    rectangle: Rectangle = RectangleFactory.SINGLETON;

    x: number= 0

    y: number= 0

    formType: FormType = FormTypeFactory.getInstance()!.NULL_FORM_TYPE;
public constructor (title: string, items: ABCustomItem[], rectangle: Rectangle, formType: FormType, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, backgroundBasicColor, foregroundBasicColor);
                        //var title = title
    //var items = items
    //var rectangle = rectangle
    //var formType = formType
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.setSelectedIndex(0);
    

        try {
            this.init(rectangle, formType);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle, formType: FormType){
    //var rectangle = rectangle
    //var formType = formType
this.rectangle= rectangle;
    

    var point: GPoint = this.rectangle.getPoint()!;
;
    
this.x= point.getX();
    
this.y= point.getY();
    
this.formType= formType;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle.getWidth();;
    
}


}
                
            

