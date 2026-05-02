
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../java/lang/Exception.js";
        
            import { RuntimeException } from "../../../../java/lang/RuntimeException.js";
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LifeInterface } from "./LifeInterface.js";

export class Life
            extends Object
         implements LifeInterface {
        

    public static createLife(): Life{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Life(0, 0);
    

                //: 
} catch(e) 
            {



                            throw Error();
                    
}

}


    public static readonly NO_LIFE: Life = Life.createLife()!;

    private lives: number

    private startLives: number

    private maxlives: number
public constructor (lives: number, maxlives: number){

            super();
        var lives = lives
var maxlives = maxlives
this.maxlives= maxlives;
    

                        if(lives > this.maxlives)
                        
                                    {
                                    


                            throw new Exception("To Many Lives");
                    

                                    }
                                
this.lives= lives;
    
this.startLives= lives;
    
}


    public get(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lives;
    
}


    public set(lives: number){
var lives = lives
this.lives= lives;
    
}


    public reset(){
this.lives= this.startLives;
    
}


    public add(lives: number){
var lives = lives

                        if(!this.reachedLimit())
                        
                                    {
                                    
                        if(this.lives +lives <= this.getMaxlives())
                        
                                    {
                                    this.lives= (this.lives +lives);
    

                                    }
                                
                        else {
                            this.lives= this.getMaxlives();
    

                        }
                            

                                    }
                                
}


    public isAlive(): boolean{

                        if(this.lives <= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public getMaxlives(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxlives;
    
}


    reachedLimit(): boolean{

                        if(this.lives > this.maxlives || this.lives < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public deaths(lives: number){
var lives = lives

                        if(!this.reachedLimit())
                        
                                    {
                                    
                        if(this.lives -lives >= 0)
                        
                                    {
                                    this.lives= (this.lives -lives);
    

                                    }
                                
                        else {
                            this.lives= 0;
    

                        }
                            

                                    }
                                
}


    public getStartLives(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startLives;
    
}


    public setStartLives(startLives: number){
var startLives = startLives
this.startLives= startLives;
    
}


}
                
            

