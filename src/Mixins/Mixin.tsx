// eslint-disable-next-line max-classes-per-file
class Youtube {
  Begin() {
    console.log('Hi, Welcome to my channel!');
  }
  Ending() {
    console.log('Thank you for watching my video!');
  }
}
class Subscribe {
  Remind() {
    console.log('Remember to subscribe to my channel');
  }
}
// export class Recording extends Youtube, Subscribe{}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as PropertyDescriptor
      );
    });
  });
}

export class Recording {}
export interface Recording extends Youtube, Subscribe {}
applyMixins(Recording, [Youtube, Subscribe]);
const recording = new Recording();
recording.Remind();
recording.Ending();
