
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Runnable } from '../../../../../../java/lang/Runnable.js';
        
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { NullProgressActivity } from '../../../../../../org/allbinary/android/activity/NullProgressActivity.js';
//not GWT import const NullProgressActivity

import { ProgressActivityInterface } from '../../../../../../org/allbinary/android/activity/ProgressActivityInterface.js';
//not GWT import const ProgressActivityInterface

import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import - same folder const ProgressCanvas
//import { ShowTitleProgressBarRunnable } from './ShowTitleProgressBarRunnable.js';
//not GWT import - same folder const ShowTitleProgressBarRunnable
//import { DismissTitleProgressBarRunnable } from './DismissTitleProgressBarRunnable.js';
//not GWT import - same folder const DismissTitleProgressBarRunnable
//import { TitleProgressBarPortionSetProgressRunnable } from './TitleProgressBarPortionSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarPortionSetProgressRunnable
//import { TitleProgressBarSetProgressRunnable } from './TitleProgressBarSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarSetProgressRunnable
type TitleProgressBarSetProgressRunnable = InstanceType<AndroidTitleProgressBar['TitleProgressBarSetProgressRunnable']>;
type TitleProgressBarPortionSetProgressRunnable = InstanceType<AndroidTitleProgressBar['TitleProgressBarPortionSetProgressRunnable']>;
type ShowTitleProgressBarRunnable = InstanceType<AndroidTitleProgressBar['ShowTitleProgressBarRunnable']>;
type DismissTitleProgressBarRunnable = InstanceType<AndroidTitleProgressBar['DismissTitleProgressBarRunnable']>;

export class AndroidTitleProgressBar extends ProgressCanvas {
        

//inner= member=true isStatic=
TitleProgressBarSetProgressRunnable = (() => { const outer$AndroidTitleProgressBar = this; return class
            extends Object
         implements Runnable {
        

    private readonly androidTitleProgressBar: AndroidTitleProgressBar;

 constructor (androidTitleProgressBar: AndroidTitleProgressBar){

            super();
        this.androidTitleProgressBar= androidTitleProgressBar;
    
}


    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let value: number = globalThis.Math.trunc(this.androidTitleProgressBar!.getValue());;
    
this.androidTitleProgressBar!.progressActivity!.onTitleProgressBarSetProgress(value);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}; })();
//inner= member=true isStatic=
TitleProgressBarPortionSetProgressRunnable = (() => { const outer$AndroidTitleProgressBar = this; return class
            extends Object
         implements Runnable {
        

    private readonly androidTitleProgressBar: AndroidTitleProgressBar;

 constructor (androidTitleProgressBar: AndroidTitleProgressBar){

            super();
        this.androidTitleProgressBar= androidTitleProgressBar;
    
}


    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let value: number = globalThis.Math.trunc((this.androidTitleProgressBar!.getValue() +this.androidTitleProgressBar!.getMaxValue() /this.androidTitleProgressBar!.portion));;
    
this.androidTitleProgressBar!.progressActivity!.onTitleProgressBarSetProgress(value);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}; })();
//inner= member=true isStatic=
ShowTitleProgressBarRunnable = (() => { const outer$AndroidTitleProgressBar = this; return class
            extends Object
         implements Runnable {
        

    private readonly androidTitleProgressBar: AndroidTitleProgressBar;

 constructor (androidTitleProgressBar: AndroidTitleProgressBar){

            super();
        this.androidTitleProgressBar= androidTitleProgressBar;
    
}


    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let maxValue: number = globalThis.Math.trunc(this.androidTitleProgressBar!.getMaxValue());;
    
this.androidTitleProgressBar!.progressActivity!.onShowTitleProgressBar(maxValue, false);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}; })();
//inner= member=true isStatic=
DismissTitleProgressBarRunnable = (() => { const outer$AndroidTitleProgressBar = this; return class
            extends Object
         implements Runnable {
        

    private readonly androidTitleProgressBar: AndroidTitleProgressBar;

 constructor (androidTitleProgressBar: AndroidTitleProgressBar){

            super();
        this.androidTitleProgressBar= androidTitleProgressBar;
    
}


    public run(){

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { this.androidTitleProgressBar!.progressActivity!.onDismissTitleProgressBar();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}


}; })();
    private showTitleProgressBarRunnable = new this.ShowTitleProgressBarRunnable(this);

    private dismissTitleProgressBarRunnable = new this.DismissTitleProgressBarRunnable(this);

    private progressDialogPortionSetProgressRunnable = new this.TitleProgressBarPortionSetProgressRunnable(this);

    private progressDialogSetProgressRunnable = new this.TitleProgressBarSetProgressRunnable(this);

    private progressActivity: ProgressActivityInterface = NullProgressActivity.NULL_PROGRESS_ACTIVITY;

    private portion: number = 0;

protected constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(title, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public init(activity: ProgressActivityInterface){
this.progressActivity= activity;
    
}


    public isInitialized(): boolean{

                        if(this.progressActivity != NullProgressActivity.NULL_PROGRESS_ACTIVITY)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public start(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START_METHOD_NAME);
    
super.start();
    
this.progressActivity!.runOnUiThread(this.showTitleProgressBarRunnable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.START_METHOD_NAME, e);
    

 }
   }
 
}


    public end(){

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME);
    
this.progressActivity!.runOnUiThread(this.dismissTitleProgressBarRunnable);
    
super.end();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.END_METHOD_NAME, e);
    

 }
   }
 
}


    public addPortion(value: number, text: string, index: number){

 try { super.addPortion(value, text, index);
    
this.portion= value;
    
this.progressActivity!.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    

 }
   }
 
}


    public addNormalPortion(value: number, text: string){

 try { super.addNormalPortion(value, text);
    
this.portion= value;
    
this.progressActivity!.runOnUiThread(this.progressDialogPortionSetProgressRunnable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.ADD_PORTION, e);
    

 }
   }
 
}


    setValue(value: number){

 try { super.setValue(value);
    
this.progressActivity!.runOnUiThread(this.progressDialogSetProgressRunnable);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "setValue", e);
    

 }
   }
 
}


    public waitUntilDisplayed(){
}


    public paint(graphics: Graphics){
}


}

