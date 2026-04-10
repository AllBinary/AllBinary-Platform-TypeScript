
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
        



import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    

export class FormTypeFactory
            extends Object
         {
        

    private static readonly instance: FormTypeFactory = new FormTypeFactory();
        
        

    public static getInstance(): FormTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly UNK: string = "Unknown FormType";
        
        

    public readonly NULL_FORM_TYPE: FormType = new FormType();
        
        

    public readonly TEMP_HORIZONTAL_FORM: FormType = new FormType();
        
        

    public readonly HORIZONTAL_FORM: FormType = new FormType();
        
        

    public readonly VERTICAL_CENTER_FORM: FormType = new FormType();
        
        

    public getFormType(): FormType{

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var formType: FormType


                        if(displayInfo!.isPortrait())
                        
                                    {
                                    formType= this.VERTICAL_CENTER_FORM

                                    }
                                
                        else {
                            formType= this.HORIZONTAL_FORM

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return formType;
    
}


}
                
            

