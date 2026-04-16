
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { PrimitiveLongSingleton } from "../../../org/allbinary/logic/math/PrimitiveLongSingleton.js";

    
import { ScaleFactorFactory } from "../../../org/allbinary/logic/math/ScaleFactorFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { GameTickTimeDelayHelper } from "../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../org/allbinary/time/TimeDelayHelper.js";

    

import { Long } from "./Long.js";

import { Long } from "./Long.js";

import { Long } from "./Long.js";

import { Long } from "./Long.js";

import { Long } from "./Long.js";

export class BaseGameStatistics
            extends Object
         {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);
        
        

    private readonly updateDelayHelper: TimeDelayHelper = new TimeDelayHelper(2000);
        
        

    private totalRefreshes: number= 0

    private totalFrames: number= 0

    readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        
public constructor (){

            super();
            }


    public init(){
this.timeDelayHelper!.setStartTime();
    
this.totalRefreshes= 0;
    
this.totalFrames= 0;
    
}


    public add(string: string){
var string = string
}


    public process(){
}


    public nextFrame(){
this.totalFrames++;
    
}


    public nextRefresh(){
this.totalRefreshes++;
    
}


    private readonly DEFAULT_SCALE_FACTOR: number = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
        
        

    public getRefreshRate(): number{

    var elapsed: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    

                        if(elapsed > 1)
                        
                                    {
                                    
    var time: number = (this.totalRefreshes /(elapsed shr DEFAULT_SCALE_FACTOR)).toShort();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return time;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                        }
                            
}


    getTimeDelayHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeDelayHelper;
    
}


    readonly NOT: string = "Not enough Time to Calculate";
        
        

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly STRING_ARRAY: string[] = 
                                                        [
                                                            " Total Time: ",EMPTY_STRING," Total Frames: ",EMPTY_STRING," Frames/10 Sec: ",EMPTY_STRING," Total Paints: ",EMPTY_STRING," Paints/10 Sec: ",EMPTY_STRING
                                                        ];
        
        

    private readonly SPACE_CHAR: string = 
                ' '
            ;
        
        

    private readonly PLUS_CHAR: string = 
                '+'
            ;
        
        

    private readonly X_CHAR: string = 
                'X'
            ;
        
        

    private readonly CHAR_ARRAY: string[][] = 
                                                        [
                                                            charArrayOf('F','r','a','m','e','s','/','1','0',' ','S','e','c',':'),charArrayOf('X','X'),charArrayOf('P','a','i','n','t','s','/','1','0',' ','S','e','c',':'),charArrayOf('X','X')
                                                        ];
        
        

    private readonly primitiveLongSingleton: PrimitiveLongSingleton = PrimitiveLongSingleton.getInstance()!;
        
        

    public toCharArray(): string[][]{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    
totalTime= (totalTime shr DEFAULT_SCALE_FACTOR);
    

                        if(totalTime > 0 && updateDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    
    var framesPerSec: number = (this.totalFrames /totalTime).toInt();
        
        
;
    

                        if(framesPerSec < 10)
                        
                                    {
                                    CHAR_ARRAY[1]![0]= SPACE_CHAR;
    
CHAR_ARRAY[1]![1]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[framesPerSec]!;
    

                                    }
                                
                             else 
                        if(framesPerSec < 100)
                        
                                    {
                                    
    var tens: number = framesPerSec /10;
        
        
;
    

    var removeTens: number = tens *10;
        
        
;
    
CHAR_ARRAY[1]![0]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[tens]!;
    
CHAR_ARRAY[1]![1]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[framesPerSec -removeTens]!;
    

                                    }
                                
                        else {
                            CHAR_ARRAY[1]![0]= PLUS_CHAR;
    
CHAR_ARRAY[1]![1]= PLUS_CHAR;
    

                        }
                            

    var refreshesPerSec: number = (this.totalRefreshes /totalTime).toInt();
        
        
;
    

                        if(refreshesPerSec < 10)
                        
                                    {
                                    CHAR_ARRAY[3]![0]= X_CHAR;
    
CHAR_ARRAY[3]![1]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec]!;
    

                                    }
                                
                             else 
                        if(refreshesPerSec < 100)
                        
                                    {
                                    
    var tens: number = refreshesPerSec /10;
        
        
;
    

    var removeTens: number = tens *10;
        
        
;
    
CHAR_ARRAY[3]![0]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec /10]!;
    
CHAR_ARRAY[3]![1]= primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec -removeTens]!;
    

                                    }
                                
                        else {
                            CHAR_ARRAY[3]![0]= PLUS_CHAR;
    
CHAR_ARRAY[3]![1]= PLUS_CHAR;
    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CHAR_ARRAY;
    
}


    public toStringArray(): string[]{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    
totalTime= (totalTime /10000);
    

                        if(totalTime > 0)
                        
                                    {
                                    STRING_ARRAY[1]= (totalTime).toString();
    
STRING_ARRAY[3]= (this.totalFrames).toString();
    
STRING_ARRAY[5]= (this.totalFrames /totalTime).toString();
    
STRING_ARRAY[7]= (this.totalRefreshes).toString();
    
STRING_ARRAY[9]= (this.totalRefreshes /totalTime).toString();
    

                                    }
                                
                        else {
                            
    var string: string = EMPTY_STRING;
        
        
;
    
STRING_ARRAY[1]= string;
    
STRING_ARRAY[3]= string;
    
STRING_ARRAY[5]= string;
    
STRING_ARRAY[7]= string;
    
STRING_ARRAY[9]= string;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return STRING_ARRAY;
    
}


    public toString(totalTime: number): string{
var totalTime = totalTime

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(STRING_ARRAY[0]!);
    
stringBuffer!.appendlong(totalTime);
    
stringBuffer!.append(STRING_ARRAY[2]!);
    
stringBuffer!.appendlong(this.totalFrames);
    
stringBuffer!.append(STRING_ARRAY[4]!);
    
stringBuffer!.appendlong(this.totalFrames /totalTime);
    

                        if(this.totalRefreshes > 0)
                        
                                    {
                                    stringBuffer!.append(STRING_ARRAY[6]!);
    
stringBuffer!.appendlong(this.totalRefreshes);
    
stringBuffer!.append(STRING_ARRAY[8]!);
    
stringBuffer!.appendlong(this.totalRefreshes /totalTime);
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public toString(): string{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;
        
        
;
    
totalTime= (totalTime /1000);
    

                        if(totalTime > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toString(totalTime);

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NOT;
    

                        }
                            
}


}
                
            

