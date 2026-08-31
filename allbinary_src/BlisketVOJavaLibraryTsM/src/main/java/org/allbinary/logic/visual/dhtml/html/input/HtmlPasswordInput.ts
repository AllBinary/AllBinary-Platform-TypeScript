
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

        


            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HtmlLengthInput } from './HtmlLengthInput.js';
//not GWT import const HtmlLengthInput = globalThis.org.allbinary.logic.visual.dhtml.html.input.HtmlLengthInput;

                import { HtmlInputData } from './HtmlInputData.js';
//not GWT import const HtmlInputData = globalThis.org.allbinary.logic.visual.dhtml.html.input.HtmlInputData;

                
export class HtmlPasswordInput extends HtmlLengthInput {
        

public constructor (before: string, name: string, value: string, after: string){
            super(before, HtmlInputData.getInstance()!.PASSWORD, name, value, after);
                    

                            //For kotlin this is before the body of the constructor.
                    
setSize(new Integer(32));
    
setMaxLength(new Integer(128));
    
}


}



