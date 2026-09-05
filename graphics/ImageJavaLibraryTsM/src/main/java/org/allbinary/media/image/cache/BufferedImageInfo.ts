
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BufferedImageInfo
            extends Object
         {
        

    private width: number;

    private height: number;

    private type: number;

public constructor (width: number, height: number, type: number){

            super();
        this.width= width;
    
this.height= height;
    
this.type= type;
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.width;
    
}


    public setWidth(width: number){
this.width= width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.height;
    
}


    public setHeight(height: number){
this.height= height;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public setType(type: number){
this.type= type;
    
}


    public toString(): string{

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("BufferedImageInfo -");
    
stringBuffer!.append(commonLabels!.WIDTH_LABEL);
    
stringBuffer!.appendint(this.getWidth());
    
stringBuffer!.append(commonLabels!.HEIGHT_LABEL);
    
stringBuffer!.appendint(this.getHeight());
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.appendint(this.getType());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



