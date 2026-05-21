
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../java/lang/Object.js';


        
            import { Exception } from '../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../java/lang/RuntimeException.js';
        
import { InputStream } from '../../java/io/InputStream.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLResources
            extends Object
         {
        

    private static readonly instance: OpenGLResources = new OpenGLResources();

    public static getInstance(): OpenGLResources{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLResources.instance;
    
}


    public init(){
}


    public isExcluded(name: string): boolean{



                            throw new RuntimeException();
                    
}


    public getIdentifier(name: string, defType: string, defPackage: string): number{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public openRawResource(id: number): InputStream{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public openRawResourceFromName(resourceName: string): InputStream{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getResourceAsStream(resourceName: string): InputStream{



                            throw new RuntimeException();
                    
}


    public getPackageName(): string{



                            throw new RuntimeException();
                    
}


}
                
            

