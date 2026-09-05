
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Integer } from '../../../java/lang/Integer.js';
        
            import { Long } from '../../../java/lang/Long.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { PrimitiveLongSingleton } 
const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;

      
//not plain js import { ScaleFactorFactory } 
const ScaleFactorFactory = globalThis.org.allbinary.logic.math.ScaleFactorFactory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { GameTickTimeDelayHelper } from '../../../org/allbinary/time/GameTickTimeDelayHelper.js';
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
import { GameTickTimeDelayHelperFactory } from '../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BaseGameStatistics
            extends Object
         {
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);

    private readonly updateDelayHelper: TimeDelayHelper = new TimeDelayHelper(2000);

    private totalRefreshes: number= 0;

    private totalFrames: number= 0;

    readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

public constructor (){

            super();
        }


    public init(){
this.timeDelayHelper!.setStartTimeTNT();
    
this.totalRefreshes= 0;
    
this.totalFrames= 0;
    
}


    public add(string: string){
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

    var elapsed: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    

                        if(elapsed > 1)
                        
                                    {
                                    
    var time: number = (this.totalRefreshes /(elapsed>>this.DEFAULT_SCALE_FACTOR));;
    



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
                                                            " Total Time: ",this.EMPTY_STRING," Total Frames: ",this.EMPTY_STRING," Frames/10 Sec: ",this.EMPTY_STRING," Total Paints: ",this.EMPTY_STRING," Paints/10 Sec: ",this.EMPTY_STRING
                                                        ];

    private readonly SPACE_CHAR: string = ' ';

    private readonly PLUS_CHAR: string = '+';

    private readonly X_CHAR: string = 'X';

    private readonly CHAR_ARRAY: string[][] = 
                                                        [
                                                            ['F','r','a','m','e','s','/','1','0',' ','S','e','c',':'],['X','X'],['P','a','i','n','t','s','/','1','0',' ','S','e','c',':'],['X','X']
                                                        ];

    private readonly primitiveLongSingleton: PrimitiveLongSingleton = PrimitiveLongSingleton.getInstance()!;

    public to2DCharArray(): string[][]{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (totalTime>>this.DEFAULT_SCALE_FACTOR);
    

                        if(totalTime > 0 && this.updateDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    
    var framesPerSec: number = Math.round((this.totalFrames /totalTime));;
    

                        if(framesPerSec < 10)
                        
                                    {
                                    this.CHAR_ARRAY[1]![0]= this.SPACE_CHAR;
    
this.CHAR_ARRAY[1]![1]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[framesPerSec]!;
    

                                    }
                                
                             else 
                        if(framesPerSec < 100)
                        
                                    {
                                    
    var tens: number = framesPerSec /10;;
    

    var removeTens: number = tens *10;;
    
this.CHAR_ARRAY[1]![0]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[tens]!;
    
this.CHAR_ARRAY[1]![1]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[framesPerSec -removeTens]!;
    

                                    }
                                
                        else {
                            this.CHAR_ARRAY[1]![0]= this.PLUS_CHAR;
    
this.CHAR_ARRAY[1]![1]= this.PLUS_CHAR;
    

                        }
                            

    var refreshesPerSec: number = Math.round((this.totalRefreshes /totalTime));;
    

                        if(refreshesPerSec < 10)
                        
                                    {
                                    this.CHAR_ARRAY[3]![0]= this.X_CHAR;
    
this.CHAR_ARRAY[3]![1]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec]!;
    

                                    }
                                
                             else 
                        if(refreshesPerSec < 100)
                        
                                    {
                                    
    var tens: number = refreshesPerSec /10;;
    

    var removeTens: number = tens *10;;
    
this.CHAR_ARRAY[3]![0]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec /10]!;
    
this.CHAR_ARRAY[3]![1]= this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY[refreshesPerSec -removeTens]!;
    

                                    }
                                
                        else {
                            this.CHAR_ARRAY[3]![0]= this.PLUS_CHAR;
    
this.CHAR_ARRAY[3]![1]= this.PLUS_CHAR;
    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.CHAR_ARRAY;
    
}


    public toStringArray(): string[]{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (totalTime /10000);
    

                        if(totalTime > 0)
                        
                                    {
                                    this.STRING_ARRAY[1]= (totalTime).toString();
    
this.STRING_ARRAY[3]= (this.totalFrames).toString();
    
this.STRING_ARRAY[5]= (this.totalFrames /totalTime).toString();
    
this.STRING_ARRAY[7]= (this.totalRefreshes).toString();
    
this.STRING_ARRAY[9]= (this.totalRefreshes /totalTime).toString();
    

                                    }
                                
                        else {
                            
    var string: string = this.EMPTY_STRING;;
    
this.STRING_ARRAY[1]= string;
    
this.STRING_ARRAY[3]= string;
    
this.STRING_ARRAY[5]= string;
    
this.STRING_ARRAY[7]= string;
    
this.STRING_ARRAY[9]= string;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.STRING_ARRAY;
    
}


    public toStringAt(totalTime: number): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.STRING_ARRAY[0]!);
    
stringBuffer!.appendlong(totalTime);
    
stringBuffer!.append(this.STRING_ARRAY[2]!);
    
stringBuffer!.appendlong(this.totalFrames);
    
stringBuffer!.append(this.STRING_ARRAY[4]!);
    
stringBuffer!.appendlong(this.totalFrames /totalTime);
    

                        if(this.totalRefreshes > 0)
                        
                                    {
                                    stringBuffer!.append(this.STRING_ARRAY[6]!);
    
stringBuffer!.appendlong(this.totalRefreshes);
    
stringBuffer!.append(this.STRING_ARRAY[8]!);
    
stringBuffer!.appendlong(this.totalRefreshes /totalTime);
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public toString(): string{

    var totalTime: number = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (totalTime /1000);
    

                        if(totalTime > 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toStringAt(totalTime);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NOT;
    

                        }
                            
}


}



