
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FormType } from './FormType.js';

export class FormTypeFactory
            extends Object
         {
        

    private static readonly instance: FormTypeFactory = new FormTypeFactory();

    public static getInstance(): FormTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FormTypeFactory.instance;
    
}


    public readonly UNK: string = "Unknown FormType";

    public readonly NULL_FORM_TYPE: FormType = new FormType(StringUtil.getInstance()!.NULL_STRING);

    public readonly TEMP_HORIZONTAL_FORM: FormType = new FormType("TempHorizontal");

    public readonly HORIZONTAL_FORM: FormType = new FormType("Horizontal");

    public readonly VERTICAL_CENTER_FORM: FormType = new FormType("Vertical");

    public getFormType(): FormType{

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var formType: FormType;;
    

                        if(displayInfo!.isPortrait())
                        
                                    {
                                    formType= this.VERTICAL_CENTER_FORM;
    

                                    }
                                
                        else {
                            formType= this.HORIZONTAL_FORM;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return formType;
    
}


}



