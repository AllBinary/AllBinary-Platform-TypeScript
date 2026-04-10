
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

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class ColorAverage
            extends Object
         {
        

    private avgRed: number= 0.0f

    private avgGreen: number= 0.0f

    private avgBlue: number= 0.0f
public constructor (){

            super();
            this.setAvgRed(0)
this.setAvgGreen(0)
this.setAvgBlue(0)
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("getAvgRed(): ")
stringBuffer!.appendfloat(this.getAvgRed())
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE)
stringBuffer!.append("getAvgRed(): ")
stringBuffer!.appendfloat(this.getAvgRed())
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE)
stringBuffer!.append("getAvgGreen(): ")
stringBuffer!.appendfloat(this.getAvgGreen())
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public getAvgRed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return avgRed;
    
}


    public setAvgRed(avgRed: number){
var avgRed = avgRed
this.avgRed= avgRed
}


    public getAvgGreen(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return avgGreen;
    
}


    public setAvgGreen(avgGreen: number){
var avgGreen = avgGreen
this.avgGreen= avgGreen
}


    public getAvgBlue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return avgBlue;
    
}


    public setAvgBlue(avgBlue: number){
var avgBlue = avgBlue
this.avgBlue= avgBlue
}


}
                
            

