
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
import { GL10 } from '../../../javax/microedition/khronos/opengles/GL10.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLGLU
            extends Object
         {
        

    private static readonly instance: OpenGLGLU = new OpenGLGLU();

    public static getInstance(): OpenGLGLU{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLGLU.instance;
    
}


    public gluLookAt(gl: GL10, eyeX: number, eyeY: number, eyeZ: number, centerX: number, centerY: number, centerZ: number, upX: number, upY: number, upZ: number){



                            throw new RuntimeException();
                    
}


    public gluProject(gl: GL10, objX: number, objY: number, objZ: number, model: number[], modelOffset: number, project: number[], projectOffset: number, view: number[], viewOffset: number, win: number[], winOffset: number): number{



                            throw new RuntimeException();
                    
}


    public gluUnProject(gl: GL10, winX: number, winY: number, winZ: number, model: number[], modelOffset: number, project: number[], projectOffset: number, view: number[], viewOffset: number, obj: number[], objOffset: number): number{



                            throw new RuntimeException();
                    
}


    public glFrustumf(gl: GL10, lt: number, rt: number, btm: number, top: number, zNear: number, zFar: number){



                            throw new RuntimeException();
                    
}


}
                
            

