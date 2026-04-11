
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
        



import { awt } from "../../../../../java/awt.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class ColorRange
            extends Object
        
                , ColorRangeInterface {
        

    private minRed: number

    private maxRed: number

    private minGreen: number

    private maxGreen: number

    private minBlue: number

    private maxBlue: number
public constructor (){

            super();
            this.minRed= 0;
    
this.maxRed= 0;
    
this.minGreen= 0;
    
this.maxGreen= 0;
    
this.minBlue= 0;
    
this.maxBlue= 0;
    
}


    public getMinRed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minRed;
    
}


    public setMinRed(minRed: number){
var minRed = minRed
this.minRed= minRed;
    
}


    public getMaxRed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxRed;
    
}


    public setMaxRed(maxRed: number){
var maxRed = maxRed
this.maxRed= maxRed;
    
}


    public getMinGreen(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minGreen;
    
}


    public setMinGreen(minGreen: number){
var minGreen = minGreen
this.minGreen= minGreen;
    
}


    public getMaxGreen(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxGreen;
    
}


    public setMaxGreen(maxGreen: number){
var maxGreen = maxGreen
this.maxGreen= maxGreen;
    
}


    public getMinBlue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minBlue;
    
}


    public setMinBlue(minBlue: number){
var minBlue = minBlue
this.minBlue= minBlue;
    
}


    public getMaxBlue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxBlue;
    
}


    public setMaxBlue(maxBlue: number){
var maxBlue = maxBlue
this.maxBlue= maxBlue;
    
}


    public isInRange(color: Color): boolean{
var color = color

                        if(color.getRed() >= this.getMinRed() && color.getRed() <= this.getMaxRed() && color.getGreen() >= this.getMinGreen() && color.getGreen() <= this.getMaxGreen() && color.getBlue() >= this.getMinBlue() && color.getBlue() <= this.getMaxBlue())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("getMinRed(): ");
    
stringBuffer!.appendint(this.getMinRed());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getMaxRed(): ");
    
stringBuffer!.appendint(this.getMaxRed());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getMinGreen(): ");
    
stringBuffer!.appendint(this.getMinGreen());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getMaxGreen(): ");
    
stringBuffer!.appendint(this.getMaxGreen());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getMinBlue(): ");
    
stringBuffer!.appendint(this.getMinGreen());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getMaxBlue(): ");
    
stringBuffer!.appendint(this.getMaxBlue());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

