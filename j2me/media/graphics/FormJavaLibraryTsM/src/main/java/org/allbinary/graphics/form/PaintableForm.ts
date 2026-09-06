
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomForm } from './ABCustomForm.js';
//not GWT import - same folder const ABCustomForm = globalThis.org.allbinary.graphics.form.ABCustomForm;

                import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import - same folder const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

                import { FormType } from './FormType.js';
//not GWT import - same folder const FormType = globalThis.org.allbinary.graphics.form.FormType;

                
export class PaintableForm extends ABCustomForm {
        

    private static NULL_PAINTABLE_FORM: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getNullPaintableForm(): PaintableForm{

                        if(PaintableForm.NULL_PAINTABLE_FORM == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    PaintableForm.NULL_PAINTABLE_FORM= new PaintableForm(StringUtil.getInstance()!.EMPTY_STRING, [], BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PaintableForm.NULL_PAINTABLE_FORM as PaintableForm;
    
}


    readonly canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;

    rectangle: Rectangle = RectangleFactory.SINGLETON;

    x: number= 0;

    y: number= 0;

    formType: FormType = FormTypeFactory.getInstance()!.NULL_FORM_TYPE;

public constructor (title: string, items: ABCustomItem[], backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setSelectedIndex(0);
    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle, formType: FormType){
this.rectangle= rectangle;
    

    var point: GPoint = this.rectangle.getPoint()!;;
    
this.x= point.getX();
    
this.y= point.getY();
    
this.formType= formType;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle.getWidth();;
    
}


}



