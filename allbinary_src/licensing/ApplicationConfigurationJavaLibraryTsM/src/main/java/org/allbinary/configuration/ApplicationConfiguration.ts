
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
import { Closeable } from '../../../java/io/Closeable.js';
      //not GWT import const Closeable = globalThis.java.io.Closeable;

      
import { InputStream } from '../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { OutputStream } from '../../../java/io/OutputStream.js';
      //not GWT import const OutputStream = globalThis.java.io.OutputStream;

      
import { Feature } from '../../../org/allbinary/game/configuration/feature/Feature.js';
      //not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

      
import { Features } from '../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { MainFeatureFactory } from '../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      //not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbDataInputStream } from '../../../org/allbinary/logic/io/AbDataInputStream.js';
      //not GWT import const AbDataInputStream = globalThis.org.allbinary.logic.io.AbDataInputStream;

      
import { AbDataOutputStream } from '../../../org/allbinary/logic/io/AbDataOutputStream.js';
      //not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
import { FileStreamFactory } from '../../../org/allbinary/logic/io/FileStreamFactory.js';
      //not GWT import const FileStreamFactory = globalThis.org.allbinary.logic.io.FileStreamFactory;

      
import { NullCloseable } from '../../../org/allbinary/logic/io/NullCloseable.js';
      //not GWT import const NullCloseable = globalThis.org.allbinary.logic.io.NullCloseable;

      
import { StreamUtil } from '../../../org/allbinary/logic/io/StreamUtil.js';
      //not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { FileFactory } from '../../../org/allbinary/logic/io/file/FileFactory.js';
      //not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;

      
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
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

    private readonly FILE: string = "ReloadConfiguration.dat";

private constructor (){

            super();
        
        try {
            
                        if(FileFactory.getInstance()!.isFile(this.FILE))
                        
                                    {
                                    this.read();
    

                                    }
                                
                        else {
                            this.write();
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Exception.constructor)
            
    read(){

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    

    var dataInputStream: AbDataInputStream = new AbDataInputStream(fileInputStream);;
    

    var fullScreen: number = dataInputStream!.readInt()!;;
    

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
                            


                            throw new Exception("Invalid FullScreen ActivityConfiguration");
                    

                        }
                            

    var progressBarView: number = dataInputStream!.readInt()!;;
    

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
                            


                            throw new Exception("Invalid ProgressBarView ActivityConfiguration");
                    

                        }
                            

    var showTitleBar: number = dataInputStream!.readInt()!;;
    

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
                            


                            throw new Exception("Invalid ShowTitleBar ActivityConfiguration");
                    

                        }
                            
this.logUtil!.putF("Read Configuration: " +this.toString(), this, "read");
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    var closeable: Closeable = NullCloseable.NULL_CLOSEABLE;;
    

        try {
            this.logUtil!.putF("Write Configuration: " +this.toString(), this, "write");
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    

    var dataOutputStream: AbDataOutputStream = new AbDataOutputStream(fileOutputStream);;
    
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



                            throw e;
                    
}

         finally {
            StreamUtil.getInstance()!.close(closeable);
    

         }
        
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



