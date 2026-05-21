
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


        
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorAverage
            extends Object
         {
        

    private avgRed: number= 0.0

    private avgGreen: number= 0.0

    private avgBlue: number= 0.0
public constructor (){

            super();
        this.setAvgRed(0);
    
this.setAvgGreen(0);
    
this.setAvgBlue(0);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("getAvgRed(): ");
    
stringBuffer!.appendfloat(this.getAvgRed());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getAvgRed(): ");
    
stringBuffer!.appendfloat(this.getAvgRed());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
stringBuffer!.append("getAvgGreen(): ");
    
stringBuffer!.appendfloat(this.getAvgGreen());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public getAvgRed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.avgRed;
    
}


    public setAvgRed(avgRed: number){
this.avgRed= avgRed;
    
}


    public getAvgGreen(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.avgGreen;
    
}


    public setAvgGreen(avgGreen: number){
this.avgGreen= avgGreen;
    
}


    public getAvgBlue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.avgBlue;
    
}


    public setAvgBlue(avgBlue: number){
this.avgBlue= avgBlue;
    
}


}
                
            

