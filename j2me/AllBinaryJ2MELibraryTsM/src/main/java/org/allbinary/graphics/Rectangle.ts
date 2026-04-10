
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    

export class Rectangle
            extends Object
         {
        

    private point: GPoint

    private width: number

    private height: number
public constructor (point: GPoint, width: number, height: number){

            super();
            var point = point
var width = width
var height = height
this.point= point
this.width= width
this.height= height
}


    public getPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public setPoint(point: GPoint){
    //var point = point
this.point= point
}


    public getMaxX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.point.getX() +this.width;
    
}


    public getMaxY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.point.getY() +this.height;
    
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


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.getPoint()!.toString())
append(CommonSeps.getInstance()!.SPACE)
append(CommonLabels.getInstance()!.WIDTH_LABEL)
appendint(this.getWidth())
append(CommonSeps.getInstance()!.SPACE)
append(CommonLabels.getInstance()!.HEIGHT_LABEL)
appendint(this.getHeight())
append(" MaxX: ")
appendint(this.getMaxX())
append(" MaxY: ")
appendint(this.getMaxY())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

