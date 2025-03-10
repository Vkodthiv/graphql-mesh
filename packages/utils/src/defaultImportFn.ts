export async function defaultImportFn(path: string) {
  let module = await import(path);
  if (module.default != null) {
    module = module.default;
  }
  if (typeof module === 'object' && module != null) {
    const prototypeOfObject = Object.getPrototypeOf(module);
    if (prototypeOfObject == null || prototypeOfObject === Object.prototype) {
      const normalizedVal = {};
      for (const key in module) {
        normalizedVal[key] = module[key];
      }
      module = normalizedVal;
    }
  }
  return module;
}
