export class KeyGen {
  private freedKeys: number[] = [];

  private keys: number[] = [];

  public createKey() {
    if (this.freedKeys.length === 0) {
      const key = this.keys.length;
      this.keys.push(key);
      return key;
    } else {
      const key = this.freedKeys.shift();
      if (key === undefined) throw new Error("No freed keys in the array!");
      this.keys.push(key);
      return key;
    }
  }

  public removeKey(key: number) {
    const index = this.keys.indexOf(key);
    if (index === -1) throw new Error("Key was not found!");
    this.freedKeys.push(key);
    this.keys.splice(index, 1);
  }
}
