
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
        
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const ChangedGameFeatureListener

import { Feature } from '../../../../org/allbinary/game/configuration/feature/Feature.js';
//not GWT import const Feature

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//sameFolderImports - not GWT import - same folder const OpenGLFeatureFactory
import { OpenGLFeature } from './OpenGLFeature.js';
//sameFolderImports - not GWT import - same folder const OpenGLFeature

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

    let features: Features = Features.getInstance()!;;
    

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

    let features: Features = Features.getInstance()!;;
    

    let openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

    let modified: boolean = false;;
    

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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
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

