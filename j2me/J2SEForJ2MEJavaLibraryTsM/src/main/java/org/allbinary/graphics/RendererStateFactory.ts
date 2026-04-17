
        /* Generated Code Do Not Modify */
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RendererStateFactory
            extends Object
         {
        

    private static readonly instance: RendererStateFactory = new RendererStateFactory();
        
        

    public static getInstance(): RendererStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private loaded: boolean = false;
        
        

    private surfaceChanged: boolean = false;
        
        

    public setLoaded(loaded: boolean){
var loaded = loaded
this.loaded= loaded;
    
}


    public isLoaded(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loaded;
    
}


    public setSurfaceChanged(initialized: boolean){
var initialized = initialized
surfaceChanged= initialized;
    
}


    public isSurfaceChanged(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return surfaceChanged;
    
}


}
                
            

