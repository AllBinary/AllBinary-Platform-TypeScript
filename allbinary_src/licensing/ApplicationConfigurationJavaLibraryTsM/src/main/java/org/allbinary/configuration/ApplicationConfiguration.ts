
        /* Generated Code Do Not Modify */
        



import { Closeable } from "../../../java/io/Closeable.js";

    
import { InputStream } from "../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../java/io/OutputStream.js";

    
import { Feature } from "../../../org/allbinary/game/configuration/feature/Feature.js";

    
import { Features } from "../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbDataInputStream } from "../../../org/allbinary/logic/io/AbDataInputStream.js";

    
import { AbDataOutputStream } from "../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { FileStreamFactory } from "../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { NullCloseable } from "../../../org/allbinary/logic/io/NullCloseable.js";

    
import { StreamUtil } from "../../../org/allbinary/logic/io/StreamUtil.js";

    
import { FileFactory } from "../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ApplicationConfiguration
            extends Object
         {
        

    private static readonly instance: ApplicationConfiguration = new ApplicationConfiguration();
        
        

    public static getInstance(): ApplicationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private fullscreen: boolean = true;
        
        

    private showTitleBar: boolean = false;
        
        

    private progressBarView: boolean = false;
        
        

    private readonly FILE: string = "ReloadConfiguration.dat";
        
        
private constructor (){

            super();
        
        try {
            
                        if(FileFactory.getInstance()!.isFile(FILE))
                        
                                    {
                                    this.read();
    

                                    }
                                
                        else {
                            this.write();
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Error::class)
            
    read(){

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    

    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        
;
    

    var dataInputStream: AbDataInputStream = new AbDataInputStream(fileInputStream);
        
        
;
    

    var fullScreen: number = dataInputStream!.readInt()!;
        
        
;
    

                        if(fullScreen == 0)
                        
                                    {
                                    this.setFullscreen(false);
    

                                    }
                                
                             else 
                        if(fullScreen == 1)
                        
                                    {
                                    this.setFullscreen(true);
    

                                    }
                                
                        else {
                            


                            throw new Error("Invalid FullScreen ActivityConfiguration")

                        }
                            

    var progressBarView: number = dataInputStream!.readInt()!;
        
        
;
    

                        if(progressBarView == 0)
                        
                                    {
                                    this.setProgressBarView(false);
    

                                    }
                                
                             else 
                        if(progressBarView == 1)
                        
                                    {
                                    this.setProgressBarView(true);
    

                                    }
                                
                        else {
                            


                            throw new Error("Invalid ProgressBarView ActivityConfiguration")

                        }
                            

    var showTitleBar: number = dataInputStream!.readInt()!;
        
        
;
    

                        if(showTitleBar == 0)
                        
                                    {
                                    this.setShowTitleBar(false);
    

                                    }
                                
                             else 
                        if(showTitleBar == 1)
                        
                                    {
                                    this.setShowTitleBar(true);
    

                                    }
                                
                        else {
                            


                            throw new Error("Invalid ShowTitleBar ActivityConfiguration")

                        }
                            
this.logUtil!.putF("Read Configuration: " +this.toString(), this, "read");
    
}


                //@Throws(Error::class)
            
    public write(){

    var closeable: Closeable = NullCloseable.NULL_CLOSEABLE;
        
        
;
    

        try {
            this.logUtil!.putF("Write Configuration: " +this.toString(), this, "write");
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    

    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        
;
    

    var dataOutputStream: AbDataOutputStream = new AbDataOutputStream(fileOutputStream);
        
        
;
    
closeable= dataOutputStream;
    

                        if(this.isFullscreen())
                        
                                    {
                                    dataOutputStream!.writeInt(1);
    

                                    }
                                
                        else {
                            dataOutputStream!.writeInt(0);
    

                        }
                            

                        if(this.isProgressBarView())
                        
                                    {
                                    dataOutputStream!.writeInt(1);
    

                                    }
                                
                        else {
                            dataOutputStream!.writeInt(0);
    

                        }
                            

                        if(this.isShowTitleBar())
                        
                                    {
                                    dataOutputStream!.writeInt(1);
    

                                    }
                                
                        else {
                            dataOutputStream!.writeInt(0);
    

                        }
                            
dataOutputStream!.flush();
    

                //: 
} catch(e) 
            {



                            throw e
}

         finally {
            StreamUtil.getInstance()!.close(closeable);
    

         }
        
}


                //@Throws(Error::class)
            
    public update(gameFeature: Feature){
var gameFeature = gameFeature

                        if(gameFeature == MainFeatureFactory.getInstance()!.FULL_SCREEN)
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(!this.isFullscreen();

                        )
                        
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
var fullscreen = fullscreen
this.fullscreen= fullscreen;
    
}


    public isFullscreen(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fullscreen;
    
}


    public setShowTitleBar(showTitleBar: boolean){
var showTitleBar = showTitleBar
this.showTitleBar= showTitleBar;
    
}


    public isShowTitleBar(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return showTitleBar;
    
}


    public setProgressBarView(progressBarView: boolean){
var progressBarView = progressBarView
this.progressBarView= progressBarView;
    
}


    public isProgressBarView(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return progressBarView;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("isFullscreen: ");
    
stringBuffer!.appendboolean(this.isFullscreen());
    
stringBuffer!.append(" isProgressBarView: ");
    
stringBuffer!.appendboolean(this.isProgressBarView());
    
stringBuffer!.append(" isShowTitleBar: ");
    
stringBuffer!.appendboolean(this.isShowTitleBar());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

