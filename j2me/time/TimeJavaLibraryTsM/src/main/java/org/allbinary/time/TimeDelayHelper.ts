
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

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    

export class TimeDelayHelper
            extends Object
         {
        

    private startTime: number =  -1;
        
        

    private elapsedTimeAtPause: number = Long.MIN_VALUE;
        
        

    public delay: number
public constructor (delay: number){

            super();
                //var delay = delay
this.delay= delay
this.this.setStartTime()
}


    public isTime(): boolean{

    var currentTime: number = System.currentTimeMillis()!;
        
        


                        if(currentTime -this.startTime > this.delay)
                        
                                    {
                                    this.startTime= currentTime



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isTimeSince(delay: number): boolean{
var delay = delay

    var currentTime: number = System.currentTimeMillis()!;
        
        


                        if(currentTime -this.startTime > delay)
                        
                                    {
                                    this.startTime= currentTime



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isTime(currentTime: number): boolean{
var currentTime = currentTime

                        if(currentTime -this.startTime > this.delay)
                        
                                    {
                                    this.startTime= currentTime



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isTimeWithoutReset(currentTime: number): boolean{
var currentTime = currentTime

                        if(currentTime -this.startTime > this.delay)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isTimeSince(delay: number, currentTime: number): boolean{
var delay = delay
var currentTime = currentTime

                        if(currentTime -this.startTime > this.delay)
                        
                                    {
                                    this.startTime= currentTime



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getElapsed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return System.currentTimeMillis() -this.startTime;
    
}


    public getElapsed(currentTime: number): number{
var currentTime = currentTime



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentTime -this.startTime;
    
}


    public isElapsed(currentTime: number, time: number): boolean{
var currentTime = currentTime
var time = time

                        if(this.getElapsed(currentTime) > time)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isElapsed(time: number): boolean{
var time = time

                        if(this.getElapsed() > time)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public setStartTime(startTime: number){
var startTime = startTime
this.startTime= startTime
}


    public getStartTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startTime;
    
}


    public setStartTime(){
this.startTime= System.currentTimeMillis()
}


    public pause(){
this.elapsedTimeAtPause= this.getElapsed()
this.startTime= Long.MAX_VALUE
}


    public resume(): boolean{

                        if(this.elapsedTimeAtPause != Long.MIN_VALUE)
                        
                                    {
                                    this.startTime= System.currentTimeMillis() +this.elapsedTimeAtPause
this.elapsedTimeAtPause= Long.MIN_VALUE
this.this.setStartTime()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(currentTime: number): string{
var currentTime = currentTime

    var elapsed: number = this.getElapsed(currentTime)!;
        
        


                        if(elapsed > 0)
                        
                                    {
                                    
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        


    var elapsedAsString: string = (elapsed).toString()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(commonLabels!.START)!.appendlong(this.startTime)!.append(commonLabels!.CURRENT)!.appendlong(currentTime)!.append(commonLabels!.ELAPSED)!.append(elapsedAsString)!.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}


    public toString(): string{

    var currentTime: number = System.currentTimeMillis()!;
        
        


    var elapsed: number = this.getElapsed(currentTime)!;
        
        


                        if(elapsed > 0)
                        
                                    {
                                    
    var commonLabels: CommonLabels = CommonLabels.getInstance()!;
        
        


    var elapsedAsString: string = (elapsed).toString()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(commonLabels!.START)!.appendlong(this.startTime)!.append(commonLabels!.CURRENT)!.appendlong(currentTime)!.append(commonLabels!.ELAPSED)!.append(elapsedAsString)!.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                        }
                            
}


}
                
            

