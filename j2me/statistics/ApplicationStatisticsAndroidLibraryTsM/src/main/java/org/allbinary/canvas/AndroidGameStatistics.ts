
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

        


            import { Long } from '../../../java/lang/Long.js';
        
import { View } from '../../../android/view/View.js';
//not GWT import const View

import { BaseViewWrapper } from '../../../org/allbinary/android/view/BaseViewWrapper.js';
//not GWT import const BaseViewWrapper

import { ViewWrapper } from '../../../org/allbinary/android/view/ViewWrapper.js';
//not GWT import const ViewWrapper

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseGameStatistics } from './BaseGameStatistics.js';
//sameFolderImports - not GWT import - same folder const BaseGameStatistics

export class AndroidGameStatistics extends BaseGameStatistics {
        

    private view: BaseViewWrapper = BaseViewWrapper.NULL_VIEW_WRAPPER;

    private totalOnDraws: number= 0;

    private readonly ANDROID_STRING_ARRAY: string[] = new Array(14);

public constructor (){

            super();
        
    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    




                        for (
    let index: number = 0;index < this.ANDROID_STRING_ARRAY.length; index++)
        {
this.ANDROID_STRING_ARRAY[index]= stringUtil!.EMPTY_STRING;
    
}

}


    public initView(view: View){
super.init();
    
this.view= new ViewWrapper(view);
    
this.totalOnDraws= 0;
    
}


    public process(){
this.view.postInvalidate();
    
}


    public nextOnDraw(){
this.totalOnDraws++;
    
}


    private readonly TOTAL_ONDRAWS: string = " Total onDraws: ";

    private readonly ONDRAWS_RATE: string = " onDraws(/10) Sec: ";

    public toStringArray(): string[]{

    let stringArray: string[] = super.toStringArray()!;;
    




                        for (
    let index: number = 0;index < stringArray!.length; index++)
        {
this.ANDROID_STRING_ARRAY[index]= stringArray[index]!;
    
}


    let totalTime: number = this.getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (globalThis.Math.trunc(totalTime /10000));
    
this.ANDROID_STRING_ARRAY[10]= this.TOTAL_ONDRAWS;
    
this.ANDROID_STRING_ARRAY[11]= (this.totalOnDraws).toString();
    
this.ANDROID_STRING_ARRAY[12]= this.ONDRAWS_RATE;
    
this.ANDROID_STRING_ARRAY[13]= (globalThis.Math.trunc(this.totalOnDraws /totalTime)).toString();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ANDROID_STRING_ARRAY;
    
}


    public toString(): string{

    let totalTime: number = this.getTimeDelayHelper()!.getElapsed(this.gameTickTimeDelayHelper!.startTime)!;;
    
totalTime= (globalThis.Math.trunc(totalTime /1000));
    

                        if(totalTime > 0)
                        
                                    {
                                    
    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toStringAt(totalTime));
    

                        if(this.totalOnDraws > 0)
                        
                                    {
                                    stringBuffer!.append(this.TOTAL_ONDRAWS);
    
stringBuffer!.append(this.totalOnDraws.toString());
    
stringBuffer!.append(this.ONDRAWS_RATE);
    

    let drawsOverTime: string = (globalThis.Math.trunc(this.totalOnDraws /totalTime)).toString()!;;
    
stringBuffer!.append(drawsOverTime);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NOT;
    

                        }
                            
}


}

