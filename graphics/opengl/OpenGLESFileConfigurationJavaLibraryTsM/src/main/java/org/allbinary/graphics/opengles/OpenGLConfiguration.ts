
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
        



import { Closeable } from "../../../../java/io/Closeable.js";

    
import { DataInputStream } from "../../../../java/io/DataInputStream.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../java/io/OutputStream.js";

    
import { AbDataOutputStream } from "../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { FileStreamFactory } from "../../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { FileFactory } from "../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { ChangedGameFeatureListener } from "../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { Feature } from "../../../../org/allbinary/game/configuration/feature/Feature.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { MainFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { NullCloseable } from "../../../../org/allbinary/logic/io/NullCloseable.js";

    

export class OpenGLConfiguration
            extends Object
         {
        

    private static readonly instance: OpenGLConfiguration = new OpenGLConfiguration();
        
        

    public static getInstance(): OpenGLConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly FILE: string = "OpenGLConfiguration.dat";
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private opengl: boolean = false;
        
        

    private type: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD;
        
        

    private imageColor: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;
        
        

    private color: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;
        
        

    private versionSelector: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT;
        
        
private constructor (){

            super();
            
        try {
            
    
                        if(FileFactory.getInstance()!.isFile(FILE))
                        
                                    {
                                    this.read()

                                    }
                                
                        else {
                            this.write()

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e)
}

}


                @Throws(Exception::class)
            
    read(){

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        


    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        


    var dataInputStream: DataInputStream = new DataInputStream(fileInputStream);
        
        


    var openGLValue: number = dataInputStream!.readInt()!;
        
        


    
                        if(openGLValue == 0)
                        
                                    {
                                    this.setOpenGL(false)

                                    }
                                
                             else 
    
                        if(openGLValue == 1)
                        
                                    {
                                    this.setOpenGL(true)

                                    }
                                
                        else {
                            


                            throw Exception("Invalid OpenGL Setting")

                        }
                            

    var version: string = dataInputStream!.readUTF()!;
        
        


    
                        if(version.compareTo(openGLFeatureFactory!.OPENGL_AUTO_SELECT.getName()) == 0)
                        
                                    {
                                    this.setVersionSelector(openGLFeatureFactory!.OPENGL_AUTO_SELECT)

                                    }
                                
                             else 
    
                        if(version.compareTo(openGLFeatureFactory!.OPENGL_MINIMUM.getName()) == 0)
                        
                                    {
                                    this.setVersionSelector(openGLFeatureFactory!.OPENGL_MINIMUM)

                                    }
                                
                        else {
                            


                            throw Exception("OpenGLConfiguration: Error reading version selector: " +version)

                        }
                            

    var type: string = dataInputStream!.readUTF()!;
        
        


    
                        if(type.compareTo(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD.getName()) == 0)
                        
                                    {
                                    this.setType(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)

                                    }
                                
                             else 
    
                        if(type.compareTo(openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS.getName()) == 0)
                        
                                    {
                                    this.setType(openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS)

                                    }
                                
                        else {
                            


                            throw Exception("OpenGLConfiguration: Error reading image color")

                        }
                            

    var imageColor: string = dataInputStream!.readUTF()!;
        
        


    
                        if(imageColor!.compareTo(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444)

                                    }
                                
                             else 
    
                        if(imageColor!.compareTo(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444)

                                    }
                                
                             else 
    
                        if(imageColor!.compareTo(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setImageColor(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444)

                                    }
                                
                        else {
                            


                            throw Exception("OpenGLConfiguration: Error reading image color: " +imageColor)

                        }
                            

    var color: string = dataInputStream!.readUTF()!;
        
        


    
                        if(color.compareTo(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444)

                                    }
                                
                             else 
    
                        if(color.compareTo(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565)

                                    }
                                
                             else 
    
                        if(color.compareTo(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888.getName()) == 0)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888)

                                    }
                                
                        else {
                            


                            throw Exception("OpenGLConfiguration: Error reading color: " +color)

                        }
                            
put("Read Configuration: " +this.toString(), this, "read")
}


                @Throws(Exception::class)
            
    public write(){

    var closeable: Closeable = NullCloseable.NULL_CLOSEABLE;
        
        


        try {
            put("Write Configuration: " +this.toString(), this, "write")

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        


    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        


    var dataOutputStream: AbDataOutputStream = new AbDataOutputStream(fileOutputStream);
        
        

closeable= dataOutputStream

    
                        if(this.isOpenGL())
                        
                                    {
                                    writeInt(1)

                                    }
                                
                        else {
                            writeInt(0)

                        }
                            
writeUTF(this.getVersionSelector()!.getName())
writeUTF(this.getType()!.getName())
writeUTF(this.getImageColor()!.getName())
writeUTF(this.getColor()!.getName())
flush()
} catch(e: Exception)
            {



                            throw e
}

         finally {
            close(closeable)

         }
        
}


                @Throws(Exception::class)
            
    public init(){

    var features: Features = Features.getInstance()!;
        
        


    
                        if(ChangedGameFeatureListener.getInstance()!.isChanged(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    
    
                        if(this.isOpenGL())
                        
                                    {
                                    
    
                        if(!features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    put("Turning on OpenGL", this, commonStrings!.INIT)
addDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)
put("Using OpenGL Type Feature: " +this.getType(), this, commonStrings!.INIT)
addDefault(this.getType())
put("Using OpenGL ImageColor Feature: " +this.getImageColor(), this, commonStrings!.INIT)
addDefault(this.getImageColor())
put("Using OpenGL Color Feature: " +this.getColor(), this, commonStrings!.INIT)
addDefault(this.getColor())
put("Using OpenGL Version Selector Feature: " +this.getVersionSelector(), this, commonStrings!.INIT)
addDefault(this.getVersionSelector())

                                    }
                                

                                    }
                                
                        else {
                            put("OpenGL is Off", this, commonStrings!.INIT)

                        }
                            

                                    }
                                
                        else {
                            
    
                        if(this.isOpenGL() && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    put("OpenGL is set but not Enabled since Statics where not cleared (Reboot or Complete exit is Required)", this, commonStrings!.INIT)

                                    }
                                

                        }
                            
put(this.toString(), this, this.commonStrings!.INIT)
}


                @Throws(Exception::class)
            
    public update(gameFeature: Feature, colorLocked: boolean){
    //var gameFeature = gameFeature
    //var colorLocked = colorLocked

    var features: Features = Features.getInstance()!;
        
        


    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        


    var modified: boolean = false;
        
        


    
                        if(gameFeature == openGLFeatureFactory!.OPENGL)
                        
                                    {
                                    
    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
    
                        if(!this.isOpenGL())
                        
                                    {
                                    this.setOpenGL(true)
modified= true

                                    }
                                

                                    }
                                
                        else {
                            
    
                        if(this.isOpenGL())
                        
                                    {
                                    this.setOpenGL(false)
modified= true

                                    }
                                

                        }
                            

                                    }
                                

    
                        if(gameFeature == openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS || gameFeature == openGLFeatureFactory!.OPENGL_AS_GAME_THREAD)
                        
                                    {
                                    
    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
    
                        if(gameFeature != this.getType())
                        
                                    {
                                    this.setType(gameFeature as OpenGLFeature)
modified= true

                                    }
                                

                                    }
                                

                                    }
                                

    
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444 || gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_565 || gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888)
                        
                                    {
                                    
    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
    
                        if(this.getImageColor() != gameFeature)
                        
                                    {
                                    this.setImageColor(gameFeature as OpenGLFeature)

    
                        if(colorLocked)
                        
                                    {
                                    
    
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444)

                                    }
                                
                             else 
    
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_565)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565)

                                    }
                                
                             else 
    
                        if(gameFeature == openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888)
                        
                                    {
                                    this.setColor(openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888)

                                    }
                                

                                    }
                                
modified= true

                                    }
                                

                                    }
                                

                                    }
                                

    
                        if(gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_4444 || gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_565 || gameFeature == openGLFeatureFactory!.OPENGL_COLOR_DEPTH_8888)
                        
                                    {
                                    
    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    
    
                        if(this.getColor() != gameFeature)
                        
                                    {
                                    this.setColor(gameFeature as OpenGLFeature)
modified= true

                                    }
                                

                                    }
                                

                                    }
                                

    
                        if(gameFeature == openGLFeatureFactory!.OPENGL_AUTO_SELECT || gameFeature == openGLFeatureFactory!.OPENGL_MINIMUM)
                        
                                    {
                                    
    
                        if(features.isFeature(gameFeature))
                        
                                    {
                                    this.setVersionSelector(gameFeature as OpenGLFeature)

                                    }
                                
modified= true

                                    }
                                

    
                        if(modified)
                        
                                    {
                                    this.write()

                                    }
                                
}


    public setOpenGL(opengl: boolean){
    //var opengl = opengl
this.opengl= opengl
}


    public isOpenGL(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return opengl;
    
}


    public setImageColor(imageColor: OpenGLFeature){
    //var imageColor = imageColor
this.imageColor= imageColor
}


    public getImageColor(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageColor;
    
}


    public setColor(color: OpenGLFeature){
    //var color = color
this.color= color
}


    public getColor(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


    public setVersionSelector(versionSelector: OpenGLFeature){
    //var versionSelector = versionSelector
this.versionSelector= versionSelector
}


    public getVersionSelector(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return versionSelector;
    
}


    public setType(type: OpenGLFeature){
    //var type = type
this.type= type
}


    public getType(): OpenGLFeature{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return type;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

append(" isOpenGL: ")
appendboolean(this.isOpenGL())
append(" VersionSelector: ")
append(stringUtil!.toString(this.getVersionSelector()))
append(" Type: ")
append(stringUtil!.toString(this.getType()))
append(" Image Color: ")
append(stringUtil!.toString(this.getImageColor()))
append(" Color: ")
append(stringUtil!.toString(this.getColor()))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

