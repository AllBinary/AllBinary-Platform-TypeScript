
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    

export class BufferedImageInfo
            extends Object
         {
        

    private width: number

    private height: number

    private type: number
public constructor (width: number, height: number, type: number){

            super();
            var width = width
var height = height
var type = type
this.width= width
this.height= height
this.type= type
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return width;
    
}


    public setWidth(width: number){
var width = width
this.width= width
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return height;
    
}


    public setHeight(height: number){
var height = height
this.height= height
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return type;
    
}


    public setType(type: number){
var type = type
this.type= type
}


    public toString(): string{

    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("BufferedImageInfo -")
append(commonLabels!.WIDTH_LABEL)
appendint(this.getWidth())
append(commonLabels!.HEIGHT_LABEL)
appendint(this.getHeight())
append(" Type: ")
appendint(this.getType())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

