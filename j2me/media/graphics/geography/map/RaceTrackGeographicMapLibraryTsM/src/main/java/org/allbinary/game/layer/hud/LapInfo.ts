
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LapInfo
            extends Object
         {
        

    public NULL_LAP_INFO: LapInfo = new LapInfo( -1);
        
        

    private numberOfLaps: number

    private totalLaps: number
public constructor (totalLaps: number){

            super();
        var totalLaps = totalLaps
this.totalLaps= totalLaps;
    
this.numberOfLaps= 1;
    
}


    public add(){
this.numberOfLaps++;
    
}


    public getCurrentLap(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.numberOfLaps;
    
}


    public getTotalLaps(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.totalLaps;
    
}


    public isDone(): boolean{

                        if(this.numberOfLaps >= this.totalLaps)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("isDone: ");
    
stringBuffer!.appendboolean(this.isDone());
    
stringBuffer!.append(" CurrentLap: ");
    
stringBuffer!.appendint(this.getCurrentLap());
    
stringBuffer!.append(" Total Laps: ");
    
stringBuffer!.appendint(this.getTotalLaps());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

