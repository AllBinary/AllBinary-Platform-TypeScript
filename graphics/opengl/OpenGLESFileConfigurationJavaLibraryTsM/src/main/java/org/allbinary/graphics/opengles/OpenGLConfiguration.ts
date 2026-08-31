
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Closeable } from '../../../../java/io/Closeable.js';
      //not GWT import const Closeable = globalThis.java.io.Closeable;

      
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
      //not GWT import const DataInputStream = globalThis.java.io.DataInputStream;

      
import { InputStream } from '../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { OutputStream } from '../../../../java/io/OutputStream.js';
      //not GWT import const OutputStream = globalThis.java.io.OutputStream;

      
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
import { AbDataOutputStream } from '../../../../org/allbinary/logic/io/AbDataOutputStream.js';
      //not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
import { FileStreamFactory } from '../../../../org/allbinary/logic/io/FileStreamFactory.js';
      //not GWT import const FileStreamFactory = globalThis.org.allbinary.logic.io.FileStreamFactory;

      
import { StreamUtil } from '../../../../org/allbinary/logic/io/StreamUtil.js';
      //not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { FileFactory } from '../../../../org/allbinary/logic/io/file/FileFactory.js';
      //not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      //not GWT import const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
import { Feature } from '../../../../org/allbinary/game/configuration/feature/Feature.js';
      //not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      //not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
import { NullCloseable } from '../../../../org/allbinary/logic/io/NullCloseable.js';
      //not GWT import const NullCloseable = globalThis.org.allbinary.logic.io.NullCloseable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

                import { OpenGLFeature } from './OpenGLFeature.js';
//not GWT import const  = globalThis.org.allbinary.graphics.opengles.OpenGLFeature;

                
export class OpenGLConfiguration
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): OpenGLConfiguration{

                        if(OpenGLConfiguration.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    OpenGLConfiguration.instance= new OpenGLConfiguration();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLConfiguration.instance as OpenGLConfiguration;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly FILE: string = "OpenGLConfiguration.dat";

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private opengl: boolean = false;

    private type: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD;

    private imageColor: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;

    private color: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;

    private versionSelector: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT;

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
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Exception.constructor)
            
    read(){

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    

    var dataInputStream: DataInputStream = new DataInputStream(fileInputStream);;
    

    var openGLValue: number = dataInputStream!.readInt()!;;
    

                        if(openGLValue == 0)
                        
                                    {
                                    this.setOpenGL(false);
    

                                    }
                                
                             else 
                        if(openGLValue == 1)
                        
                                    {
                                    this.setOpenGL(true);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Invalid OpenGL Setting");
                    

                        }
                            

    var version: string = dataInputStream!.readUTF()!;;
    

                        if(this.tsUtil!.compareTo(version, openGLFeatureFactory!.OPENGL_AUTO_SELECT.getName()) == 0)
                        
                                    {
                                    this.setVersionSelector(openGLFeatureFactory!.OPENGL_AUTO_SELECT);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(version, openGLFeatureFactory!.OPENGL_MINIMUM.getName()) == 0)
                        
                                    {
                                    this.setVersionSelector(openGLFeatureFactory!.OPENGL_MINIMUM);
    

                                    }
                                
                        else {
                            


                            throw new Exception("OpenGLConfiguration: Error reading version selector: " +version);
                    

                        }
                            

    var type: string = dataInputStream!.readUTF()!;;
    

                        if(this.tsUtil!.compareTo(type, openGLFeatureFactory!.OPENGL_AS_GAME_THREAD.getName()) == 0)
                        
                                    {
                                    this.setType(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(type, openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS.getName()) == 0)
                        
                                    {
                                    this.setType(openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS);
    

                                    }
                                
                        else {
                            


                            throw new Exception("OpenGLConfiguration: Error reading image color");
                    

                        }
                            

    var imageColor: string = dataInputStream!.readUTF()!;;
    

                        if(this.tsUtil!.compareTo(imageColor, openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(imageColor, openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(imageColor, openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444);
    

                                    }
                                
                        else {
                            


                            throw new Exception("OpenGLConfiguration: Error reading image color: " +imageColor);
                    

                        }
                            

    var color: string = dataInputStream!.readUTF()!;;
    

                        if(this.tsUtil!.compareTo(color, openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(color, openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(color, openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888);
    

                                    }
                                
                        else {
                            


                            throw new Exception("OpenGLConfiguration: Error reading color: " +color);
                    

                        }
                            
PreLogUtil.put("Read Configuration: " +this.toString(), this, "read");
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    var closeable: Closeable = NullCloseable.NULL_CLOSEABLE;;
    

        try {
            PreLogUtil.put("Write Configuration: " +this.toString(), this, "write");
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    

    var dataOutputStream: AbDataOutputStream = new AbDataOutputStream(fileOutputStream);;
    
closeable= dataOutputStream;
    

                        if(this.isOpenGL())
                        
                                    {
                                    dataOutputStream!.writeInt(1);
    

                                    }
                                
                        else {
                            dataOutputStream!.writeInt(0);
    

                        }
                            
dataOutputStream!.writeUTF(this.getVersionSelector()!.getName());
    
dataOutputStream!.writeUTF(this.getType()!.getName());
    
dataOutputStream!.writeUTF(this.getImageColor()!.getName());
    
dataOutputStream!.writeUTF(this.getColor()!.getName());
    
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
            
    public init(){

    var features: Features = Features.getInstance()!;;
    

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    
    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(this.isOpenGL())
                        
                                    {
                                    
                        if(features.isFeature(openGLFeatureFactory!.OPENGL_2D) || features.isFeature(openGLFeatureFactory!.OPENGL_3D) || features.isFeature(openGLFeatureFactory!.OPENGL_2D_AND_3D))
                        
                                    {
                                    
                        if(!features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    this.logUtil!.putF("Turning on OpenGL as Default", this, this.commonStrings!.INIT);
    
features.addDefault(OpenGLFeatureFactory.getInstance()!.OPENGL);
    
this.logUtil!.putF("Using OpenGL Type Feature: " +this.getType(), this, this.commonStrings!.INIT);
    
features.addDefault(this.getType());
    
this.logUtil!.putF("Using OpenGL ImageColor Feature: " +this.getImageColor(), this, this.commonStrings!.INIT);
    
features.addDefault(this.getImageColor());
    
this.logUtil!.putF("Using OpenGL Color Feature: " +this.getColor(), this, this.commonStrings!.INIT);
    
features.addDefault(this.getColor());
    
this.logUtil!.putF("Using OpenGL Version Selector Feature: " +this.getVersionSelector(), this, this.commonStrings!.INIT);
    
features.addDefault(this.getVersionSelector());
    

                                    }
                                

                                    }
                                
                        else {
                            this.logUtil!.putF("OpenGL is enabled, but this game does not support OpenGL (Probably from installing with the same package name from a game that had OpenGL available)", this, this.commonStrings!.INIT);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("OpenGL is Off", this, this.commonStrings!.INIT);
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(this.isOpenGL() && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    PreLogUtil.put("OpenGL is set but not Enabled since statics where not cleared (Reboot or Complete exit is Required)", this, this.commonStrings!.INIT);
    

                                    }
                                

                        }
                            
PreLogUtil.put(this.toString(), this, this.commonStrings!.INIT);
    
}


                //@Throws(Exception.constructor)
            
    public update(gameFeature: Feature, colorLocked: boolean){

    var features: Features = Features.getInstance()!;;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

    var modified: boolean = false;;
    

                        if(gameFeature == openGLFeatureFactory!.OPENGL)
                        
                                    {
                                    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(!this.isOpenGL())
                        
                                    {
                                    this.setOpenGL(true);
    
modified= true;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(this.isOpenGL())
                        
                                    {
                                    this.setOpenGL(false);
    
modified= true;
    

                                    }
                                

                        }
                            

                                    }
                                

                        if(gameFeature == openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS || gameFeature == openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)
                        
                                    {
                                    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(gameFeature != this.getType())
                        
                                    {
                                    this.setType(gameFeature as OpenGLFeature);
    
modified= true;
    

                                    }
                                

                                    }
                                

                                    }
                                

                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444 || gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_565 || gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888)
                        
                                    {
                                    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(this.getImageColor() != gameFeature)
                        
                                    {
                                    this.setImageColor(gameFeature as OpenGLFeature);
    

                        if(colorLocked)
                        
                                    {
                                    
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444);
    

                                    }
                                
                             else 
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_565)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565);
    

                                    }
                                
                             else 
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888);
    

                                    }
                                

                                    }
                                
modified= true;
    

                                    }
                                

                                    }
                                

                                    }
                                

                        if(gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444 || gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565 || gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888)
                        
                                    {
                                    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
                        if(this.getColor() != gameFeature)
                        
                                    {
                                    this.setColor(gameFeature as OpenGLFeature);
    
modified= true;
    

                                    }
                                

                                    }
                                

                                    }
                                

                        if(gameFeature == openGLFeatureFactory!.OPENGL_AUTO_SELECT || gameFeature == openGLFeatureFactory!.OPENGL_MINIMUM)
                        
                                    {
                                    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    this.setVersionSelector(gameFeature as OpenGLFeature);
    

                                    }
                                
modified= true;
    

                                    }
                                

                        if(modified)
                        
                                    {
                                    this.write();
    

                                    }
                                
}


    public setOpenGL(opengl: boolean){
this.opengl= opengl;
    
}


    public isOpenGL(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.opengl;
    
}


    public setImageColor(imageColor: OpenGLFeature){
this.imageColor= imageColor;
    
}


    public getImageColor(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageColor;
    
}


    public setColor(color: OpenGLFeature){
this.color= color;
    
}


    public getColor(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.color;
    
}


    public setVersionSelector(versionSelector: OpenGLFeature){
this.versionSelector= versionSelector;
    
}


    public getVersionSelector(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.versionSelector;
    
}


    public setType(type: OpenGLFeature){
this.type= type;
    
}


    public getType(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.type;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append(" isOpenGL: ");
    
stringBuffer!.appendboolean(this.isOpenGL());
    
stringBuffer!.append(" VersionSelector: ");
    
stringBuffer!.append(stringUtil!.toString(this.getVersionSelector()));
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.append(stringUtil!.toString(this.getType()));
    
stringBuffer!.append(" Image Color: ");
    
stringBuffer!.append(stringUtil!.toString(this.getImageColor()));
    
stringBuffer!.append(" Color: ");
    
stringBuffer!.append(stringUtil!.toString(this.getColor()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



