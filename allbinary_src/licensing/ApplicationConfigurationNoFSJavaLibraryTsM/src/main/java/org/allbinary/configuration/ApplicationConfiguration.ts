
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Feature } from '../../../org/allbinary/game/configuration/feature/Feature.js';
      
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
      
import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      
















                                        
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
        
        try {
            this.read();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
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
                                    
    var features: Features = Features.getInstance()!;;
    

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

    var stringBuffer: StringMaker = new StringMaker();;
    
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
                
            

