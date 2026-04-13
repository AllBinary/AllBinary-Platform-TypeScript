
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

export class Scoreable
            extends Object
        
                , ScoreableInterface {
        

    public ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(3)!;
        
        

    private points: number
public constructor (points: number){

            super();
            var points = points
this.points= points;
    
}


    public addPoints(points: number){
var points = points
this.points += points;
    
}


    public removePoints(points: number){
var points = points
this.points -= points;
    
}


    setPoints(points: number){
var points = points
this.points= points;
    
}


    public getPoints(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


}
                
            

