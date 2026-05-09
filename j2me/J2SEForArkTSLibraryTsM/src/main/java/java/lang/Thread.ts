import { Runnable } from "./Runnable";

/*actual*/ export class Thread
            extends Object
{

    public static NORM_PRIORITY: number = 5; //5 = Thread.NORM_PRIORITY

    public constructor(task: Runnable);
    public constructor(task: Runnable, name: string);
    public constructor(task: Runnable, name?: string) {
        super();
        throw new Error('Method not implemented.');
    }

    public start() {
        throw new Error('Method not implemented.');
    }

    public join() {
        throw Error();
    }

    public isAlive(): boolean {
        //return false;
        throw Error();
    }

    public static sleep(time: number) {
        throw Error();
    }

}
                
            
