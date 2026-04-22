
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HtmlInputData
            extends Object
         {
        

    private static readonly instance: HtmlInputData = new HtmlInputData();
        
        

    public static getInstance(): HtmlInputData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TEXT: string = "text";
        
        

    public readonly RADIO: string = "radio";
        
        

    public readonly CHECKBOX: string = "checkbox";
        
        

    public readonly HIDDEN: string = "hidden";
        
        

    public readonly IMAGE: string = "image";
        
        

    public readonly PASSWORD: string = "password";
        
        

    public readonly RESET: string = "reset";
        
        

    public readonly SUBMIT: string = "submit";
        
        

    public readonly TYPES: string[] = 
                                                        [
                                                            this.TEXT,RADIO,CHECKBOX,HIDDEN,IMAGE,this.PASSWORD,RADIO,RESET,this.SUBMIT
                                                        ];
        
        

}
                
            

