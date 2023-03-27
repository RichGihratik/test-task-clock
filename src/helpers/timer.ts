export interface ITimer {
  readonly seconds: number;
  readonly minutes: number;
  readonly hours: number;
  readonly isStarted: boolean;

  start(): void;
  pause(): void;
  reset(): void;
}

export class Timer implements ITimer {
  private _seconds = 0;

  public get seconds() {
    return this._seconds % 60;
  }

  public get minutes() {
    return Math.floor(this._seconds / 60) % 60;
  }

  public get hours() {
    return Math.floor(this._seconds / 3600);
  }

  private timerId: number | null = null;

  public get isStarted(): boolean {
    return this.timerId !== null;
  }

  start() {
    if (this.timerId !== null)
      throw new Error("Timer has been started already!");
    this.timerId = window.setInterval(() => this._seconds++, 1000);
  }

  pause() {
    if (this.timerId === null)
      throw new Error("Timer has not been started yet!");
    window.clearInterval(this.timerId);
    this.timerId = null;
  }

  reset() {
    if (this.timerId !== null) window.clearInterval(this.timerId);
    this.timerId = null;
    this._seconds = 0;
  }
}
