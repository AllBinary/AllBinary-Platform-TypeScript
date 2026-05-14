
import ArkTsMotionEvent from '@ohos.multimodalInput.touchEvent';

/*actual*/ export class MotionEvent
{

  static AXIS_RTRIGGER: undefined;
  static AXIS_Z: undefined;
  static ACTION_UP: number;
  static ACTION_CANCEL: number;
  static ACTION_MOVE: number;
  static ACTION_DOWN: number;

  getSource(): number {
    throw new Error('Method not implemented.');
  }

  getAxisValue(AXIS_RTRIGGER: undefined): number {
    throw new Error('Method not implemented.');
  }
  getPointerId(pointerIndex: number): number {
    throw new Error('Method not implemented.');
  }
  
  getPointerCount(): number {
    throw new Error('Method not implemented.');
  }

  getDeviceId(): number {
    throw new Error('Method not implemented.');
  }
  getAction(): number {
    throw new Error('Method not implemented.');
  }

  getX();
  getX(pointerIndex: number);
  getX(pointerIndex?: number): number {
    throw new Error('Method not implemented.');
  }

  getY();
  getY(pointerIndex: number);
  getY(pointerIndex?: number): number {
    throw new Error('Method not implemented.');
  }

}

