
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HtmlValueInput } from './HtmlValueInput.js';

export class HtmlLengthInput extends HtmlValueInput {
        

    private readonly MAXLENGTH: string = "MAXLENGTH";

    private readonly SIZE: string = "SIZE";

    private length: string

    private size: string
public constructor (before: string, type: string, name: string, value: string, after: string){
            super(before, type, name, value, after);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public setMaxLength(length: Integer){
this.length= length.toString();
    
addAttribute(this.MAXLENGTH, this.length);
    
}


    public setSize(size: Integer){
this.size= size.toString();
    
addAttribute(this.MAXLENGTH, this.size);
    
}


}
                
            

