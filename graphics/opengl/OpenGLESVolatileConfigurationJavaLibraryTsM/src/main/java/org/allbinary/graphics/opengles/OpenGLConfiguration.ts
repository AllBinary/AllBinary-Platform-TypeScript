
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
        
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      
import { Feature } from '../../../../org/allbinary/game/configuration/feature/Feature.js';
      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
import { OpenGLFeature } from './OpenGLFeature.js';

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

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private opengl: boolean = false;

    private type: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AS_GAME_THREAD;

    private imageColor: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;

    private color: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.IMAGE_COLOR_DEPTH_4444;

    private versionSelector: OpenGLFeature = OpenGLFeatureFactory.getInstance()!.OPENGL_AUTO_SELECT;

private constructor (){

            super();
        }


    public write(){
}


                //@Throws(Exception.constructor)
            
    public init(){

    var features: Features = Features.getInstance()!;;
    

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC))
                        
                                    {
                                    
                        if(this.isOpenGL())
                        
                                    {
                                    
                        if(!features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    this.logUtil!.putF("Turning on OpenGL", this, this.commonStrings!.INIT);
    
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
                            this.logUtil!.putF("OpenGL is Off", this, this.commonStrings!.INIT);
    

                        }
                            

                                    }
                                
                        else {
                            
                        if(this.isOpenGL() && !features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    PreLogUtil.put("OpenGL is set but not Enabled since Statics where not cleared (Reboot or Complete exit is Required)", this, this.commonStrings!.INIT);
    

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
                
            

