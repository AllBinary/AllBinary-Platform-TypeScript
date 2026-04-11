
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
        




export class HtmlLengthInput extends HtmlValueInput {
        

    private readonly MAXLENGTH: string = "MAXLENGTH";
        
        

    private readonly SIZE: string = "SIZE";
        
        

    private length: string

    private size: string
public constructor (before: string, type: string, name: string, value: string, after: string)                        

                            : super(before, type, name, value, after){

            super();
            var before = before
var type = type
var name = name
var value = value
var after = after


                            //For kotlin this is before the body of the constructor.
                    
}


    public setMaxLength(length: Integer){
var length = length
this.length= length.toString();
    
addAttribute(MAXLENGTH, this.length);
    
}


    public setSize(size: Integer){
var size = size
this.size= size.toString();
    
addAttribute(MAXLENGTH, this.size);
    
}


}
                
            

