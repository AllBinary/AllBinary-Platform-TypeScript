
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLFeatureFactory
            extends Object
         {
        

    private static readonly instance: OpenGLFeatureFactory = new OpenGLFeatureFactory();
        
        

    public static getInstance(): OpenGLFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly OPENGL_OPTIONS: OpenGLFeature = new OpenGLFeature("OpenGL Options");
        
        

    public readonly OPENGL: OpenGLFeature = new OpenGLFeature("OpenGL");
        
        

    public readonly OPENGL_SURFACE_VIEW: OpenGLFeature = new OpenGLFeature("GLSurfaceView");
        
        

    public readonly OPENGL_2D: OpenGLFeature = new OpenGLFeature("OpenGL 2D");
        
        

    public readonly OPENGL_3D: OpenGLFeature = new OpenGLFeature("OpenGL 3D");
        
        

    public readonly OPENGL_2D_AND_3D: OpenGLFeature = new OpenGLFeature("OpenGL 2D/3D");
        
        

    public readonly OPENGL_AUTO_SELECT: OpenGLFeature = new OpenGLFeature("Auto Select");
        
        

    public readonly OPENGL_MINIMUM: OpenGLFeature = new OpenGLFeature("Minimum");
        
        

    public readonly OPENGL_AS_GAME_THREAD: OpenGLFeature = new OpenGLFeature("As game thread");
        
        

    public readonly OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS: OpenGLFeature = new OpenGLFeature("As different threads");
        
        

    public readonly IMAGE_COLOR_DEPTH_4444: OpenGLFeature = new OpenGLFeature("4444");
        
        

    public readonly IMAGE_COLOR_DEPTH_8888: OpenGLFeature = new OpenGLFeature("8888");
        
        

    public readonly IMAGE_COLOR_DEPTH_565: OpenGLFeature = new OpenGLFeature("565");
        
        

    public readonly OPENGL_COLOR_DEPTH_4444: OpenGLFeature = new OpenGLFeature("4444");
        
        

    public readonly OPENGL_COLOR_DEPTH_8888: OpenGLFeature = new OpenGLFeature("8888");
        
        

    public readonly OPENGL_COLOR_DEPTH_565: OpenGLFeature = new OpenGLFeature("565");
        
        

    public readonly OPENGL_DRAW_TEXTURE: OpenGLFeature = new OpenGLFeature("GL_OES_draw_texture");
        
        

    public readonly OPENGL_VERTEX_BUFFER_OBJECT: OpenGLFeature = new OpenGLFeature("vertex_buffer_object");
        
        

    public readonly OPENGL_SIMPLE_OBJECT3D_PROCESSOR: OpenGLFeature = new OpenGLFeature("Simple Object3d Processor");
        
        

    public readonly OPENGL_COMPLEX_OBJECT3D_PROCESSOR: OpenGLFeature = new OpenGLFeature("Complex Object3d Processor");
        
        

    public readonly OPENGL_SIMPLE_TEXTURE_PROCESSOR: OpenGLFeature = new OpenGLFeature("Simple Texture Processor");
        
        

    public readonly OPENGL_COMPLEX_TEXTURE_PROCESSOR: OpenGLFeature = new OpenGLFeature("Complex Texture Processor");
        
        

}
                
            

