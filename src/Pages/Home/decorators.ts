// Class Decorator
function addMetadata<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    title = 'Title from Decorator';

    postURL = 'https://medium.com/litslink/typescript-decorators-in-examples-c3afcd3c7ff8';
  };
}

// Parameter Decorators
function bind<T extends Function>(
  target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void {
  console.log(target);
  return {
    configurable: true,
    get(this: T): T {
      const value = descriptor.value?.bind(this);
      Object.defineProperty(this, propertyKey, {
        value,
        configurable: true,
        writable: true,
      });
      return value;
    },
  };
}

export { addMetadata, bind };
