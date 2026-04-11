
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
        



import { PrimitiveLongSingleton } from "../../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js";

    
import { PrimitiveLongUtil } from "../../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js";

    
import { GameTickTimeDelayHelper } from "../../../../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    

export class Timer
            extends Object
         {
        

    private startTime: number =  -1;
        
        

    private hundredthTime: number= 0

    private maxTime: number

    private modifier: number= 0

    private hundrethsString: string[] = PrimitiveLongSingleton.getInstance()!.ZERO;
        
        

    private totalDigits: number = 1;
        
        

    private primitiveLongUtil: PrimitiveLongUtil

    private readonly MAX: string[] = charArrayOf('L','O','L');
        
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        
public constructor (maxTime: number){

            super();
            var maxTime = maxTime
this.primitiveLongUtil= new PrimitiveLongUtil(maxTime);
    
this.maxTime= maxTime.toLong();
    
}


    public start(){
this.hundredthTime= 0;
    
this.startTime= this.gameTickTimeDelayHelper!.startTime;
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hundredthTime;
    
}


    public update(){

    var lastLowerTime: number = this.hundredthTime;
        
        
;
    

    var currentTime: number = ((this.modifier +this.gameTickTimeDelayHelper!.startTime) -this.startTime);
        
        
;
    

                        if(currentTime < 0)
                        
                                    {
                                    currentTime= 0;
    

                                    }
                                
this.hundredthTime= currentTime /100;
    

                        if(this.hundredthTime >= this.maxTime)
                        
                                    {
                                    
                        if(this.startTime > 0)
                        
                                    {
                                    this.hundrethsString= MAX;
    

                                    }
                                

                                    }
                                
                             else 
                        if(lastLowerTime != this.hundredthTime)
                        
                                    {
                                    this.hundrethsString= primitiveLongUtil!.getCharArray(this.hundredthTime.toInt());
    
this.totalDigits= this.primitiveLongUtil!.getCurrentTotalDigits();
    

                                    }
                                
}


    public reduce(value: number){
var value = value
this.modifier -= value;
    
}


    public add(value: number){
var value = value
this.modifier += value;
    
}


    public getTimeChars(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hundrethsString;
    
}


    public getCurrentTotalDigits(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalDigits;
    
}


}
                
            

