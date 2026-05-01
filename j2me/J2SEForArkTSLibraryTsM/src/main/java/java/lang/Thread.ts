/*actual*/ export class Thread
            extends Object
{
    public static NORM_PRIORITY: number = 5; //5 = Thread.NORM_PRIORITY

    public join() {
        throw Error();
    }

    public isAlive(): boolean {
        //return false;
        throw Error();
    }

}
                
            

