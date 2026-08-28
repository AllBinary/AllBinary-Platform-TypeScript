
        /* Generated Code Do Not Modify */
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScrollSelectionForm } from './ScrollSelectionForm.js';
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
import { FormType } from './FormType.js';
import { ItemIndexPaintable } from './ItemIndexPaintable.js';
import { FormTypeFactory } from './FormTypeFactory.js';
//import { MultipleScrollSelectionFormVerticalPaintable } from './MultipleScrollSelectionFormVerticalPaintable.js';
//import { MultipleScrollSelectionFormHorizontalPaintable } from './MultipleScrollSelectionFormHorizontalPaintable.js';

export class MultipleScrollSelectionForm extends ScrollSelectionForm implements UpdateMyFontInterface {
        

                //@Throws(Exception.constructor)
            
    public static createForm(title: string, items: ABCustomItem[], rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): MultipleScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new MultipleScrollSelectionForm(title, items, ItemPaintableFactory.getInstance(), rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
    
}


//inner= member=true isStatic=
MultipleScrollSelectionFormHorizontalPaintable = class extends ItemIndexPaintable {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly multipleScrollSelectionForm: MultipleScrollSelectionForm;

 constructor (multipleScrollSelectionForm: MultipleScrollSelectionForm){

            super();
        this.multipleScrollSelectionForm= multipleScrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public paint(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.multipleScrollSelectionForm!.paintHorizontal(graphics, index, item, dx, dy);;
    
}


}


//inner= member=true isStatic=
MultipleScrollSelectionFormVerticalPaintable = class extends ItemIndexPaintable {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly multipleScrollSelectionForm: MultipleScrollSelectionForm;

 constructor (multipleScrollSelectionForm: MultipleScrollSelectionForm){

            super();
        this.multipleScrollSelectionForm= multipleScrollSelectionForm;
    
}


                //@Throws(Exception.constructor)
            
    public paint(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.multipleScrollSelectionForm!.paintVertical(graphics, index, item, dx, dy);;
    
}


}


    private readonly formTypeFactory: FormTypeFactory = FormTypeFactory.getInstance()!;

    private formTypeItemIndexPaintable: ItemIndexPaintable = ItemIndexPaintable.getInstance()!;

    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.TRANSPARENT_GREY.intValue()!;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private logged: boolean = false;

    private fontHeight: number = 0;

public constructor (title: string, items: ABCustomItem[], formPaintableFactory: ItemPaintableFactory, rectangle: Rectangle, formType: FormType, border: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(formType == this.formTypeFactory!.HORIZONTAL_FORM)
                        
                                    {
                                    this.formTypeItemIndexPaintable= new this.MultipleScrollSelectionFormHorizontalPaintable(this);
    

                                    }
                                
                             else 
                        if(formType == this.formTypeFactory!.VERTICAL_CENTER_FORM)
                        
                                    {
                                    this.formTypeItemIndexPaintable= new this.MultipleScrollSelectionFormVerticalPaintable(this);
    

                                    }
                                
                             else 
                        if(formType == this.formTypeFactory!.NULL_FORM_TYPE)
                        
                                    {
                                    
                                    }
                                
                        else {
                            


                            throw new Exception(this.formTypeFactory!.UNK);
                    

                        }
                            
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeight= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


                //@Throws(Exception.constructor)
            
    paintHorizontal(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{

    var dx2: number = this.paintItem(graphics, index, item, dx, dy) +this.border;;
    
this.paintable.paint(graphics, index, dx, dy);
    
dx= dx2;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


                //@Throws(Exception.constructor)
            
    paintVertical(graphics: Graphics, index: number, item: ABCustomItem, dx: number, dy: number): number{
this.paintItem(graphics, index, item, dx, dy);
    
this.paintable.paint(graphics, index, dx, dy);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


    public getStartIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getSelectedIndex();;
    
}


    public paint(graphics: Graphics){

        try {
            this.myFontProcessor!.process(graphics);
    

    var start: number = this.getStartIndex()!;;
    

    var size: number = this.size()!;;
    

    var dx: number = this.x;;
    

    var dy: number = this.y;;
    

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    
                                    }
                                
                        else {
                            graphics.setColor(this.backgroundColor);
    
graphics.fillRect(this.x, this.y, this.rectangle.getWidth(), this.rectangle.getHeight());
    

                        }
                            
graphics.drawString(this.getTitle(), this.x, this.y -this.fontHeight, 0);
    

    var item: ABCustomItem;;
    




                        for (
    var index: number = start;index < size; index++)
        {
item= this.get(index);
    

                        if(dx >= this.rectangle.getMaxX())
                        
                                    {
                                    
                        if(this.logged)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.logged= true;
    
PreLogUtil.put(new StringMaker().append("painting beyond maxx: ")!.appendint(this.rectangle.getMaxX())!.toString(), this, this.canvasStrings!.PAINT);
    

                        }
                            

                                    }
                                
dx= this.formTypeItemIndexPaintable!.paint(graphics, index, item, dx, dy);
    
}


                //: 
} catch(e) 
            {
PreLogUtil.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT);
    
}

}


}



