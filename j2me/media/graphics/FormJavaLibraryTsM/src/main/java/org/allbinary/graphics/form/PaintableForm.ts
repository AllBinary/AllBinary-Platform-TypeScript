
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
      const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABCustomForm } from './ABCustomForm.js';
import { FormTypeFactory } from './FormTypeFactory.js';
import { FormType } from './FormType.js';

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
                
            

