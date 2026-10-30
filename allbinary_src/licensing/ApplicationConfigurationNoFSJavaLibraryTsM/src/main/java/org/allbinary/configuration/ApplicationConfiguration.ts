
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Feature } from '../../../org/allbinary/game/configuration/feature/Feature.js';
//not GWT import const Feature

import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ApplicationConfiguration
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): ApplicationConfiguration{

                        if(ApplicationConfiguration.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ApplicationConfiguration.instance= new ApplicationConfiguration();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ApplicationConfiguration.instance as ApplicationConfiguration;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private fullscreen: boolean = true;

    private showTitleBar: boolean = false;

    private progressBarView: boolean = false;

private constructor (){

            super();
        
 try { this.read();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    read(){
this.setFullscreen(true);
    
this.setProgressBarView(false);
    
this.setShowTitleBar(false);
    
this.logUtil!.putF("Read Configuration: " +this.toString(), this, "read");
    
}


                //@Throws(Exception.constructor)
            
    public write(){
}


                //@Throws(Exception.constructor)
            
    public update(gameFeature: Feature){

                        if(gameFeature == MainFeatureFactory.getInstance()!.FULL_SCREEN)
                        
                                    {
                                    
    let features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(!this.isFullscreen())
                        
                                    {
                                    this.setFullscreen(true);
    
this.write();
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(this.isFullscreen())
                        
                                    {
                                    this.setFullscreen(false);
    
this.write();
    

                                    }
                                

                        }
                            

                                    }
                                
}


    public setFullscreen(fullscreen: boolean){
this.fullscreen= fullscreen;
    
}


    public isFullscreen(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fullscreen;
    
}


    public setShowTitleBar(showTitleBar: boolean){
this.showTitleBar= showTitleBar;
    
}


    public isShowTitleBar(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.showTitleBar;
    
}


    public setProgressBarView(progressBarView: boolean){
this.progressBarView= progressBarView;
    
}


    public isProgressBarView(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.progressBarView;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("isFullscreen: ");
    
stringBuffer!.appendboolean(this.isFullscreen());
    
stringBuffer!.append(" isProgressBarView: ");
    
stringBuffer!.appendboolean(this.isProgressBarView());
    
stringBuffer!.append(" isShowTitleBar: ");
    
stringBuffer!.appendboolean(this.isShowTitleBar());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

