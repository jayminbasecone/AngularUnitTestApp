describe('Mathchers', () => {
  it('toBe and toEqual', () => {
    const a = "hello";
    const b = "hello";
    expect(a).toBe(b);
    expect(a).toEqual(b);
  })
  it('toBe, toBeTrue and toEqual', () => {
    const a = "hello";
    const b = "hello";
    const a_true = true;
    const a_false = false;
    expect(a).toBe(b);
    expect(a_true).toBeTrue();
    expect(a_false).toBeFalse();
    expect(a_true).toBeTruthy();
    expect(undefined).toBeFalsy();
    expect(undefined).toBeFalsy();
  })
  it('toBe, toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan and toEqual', () => {
    const a = 10;
    const b = 10;
    expect(a).toBe(b);
    expect(a).toBeGreaterThan(5);
    expect(a).toBeGreaterThanOrEqual(10);
    expect(a).toBeLessThan(20);
    expect(a).toBeLessThanOrEqual(10);
  })
  it('toMatch', () => {
    const a = "the dotnetoffice";
    const b = "000-587-56-68";
    expect(a).toMatch(/dotnetoffice/);
    expect(a).toMatch(/dotnetoffice/i);
    expect(a).not.toMatch(/dot1/);
    expect(b).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  })

  it('toBeCloseTo', () => {
    const a = 3.14;
    const b = 2.78;
    const c = 3.10;
    expect(a).not.toBeCloseTo(b);
    expect(a).toBeCloseTo(b, 0);//set precision
    expect(a).toBeCloseTo(a);
    expect(a).toBeCloseTo(c, 1);
    expect(a).not.toBeCloseTo(c, 2);
  })


  it('toBeDefined - toBeUndefined', () => {
    const MyObj = {
      foo: "foo"
    };
    const MyFunction = (function () { })();
    const MyVariable = undefined;
    expect("test").toBeDefined();
    expect(MyObj).toBeDefined();
    expect(MyObj.foo).toBeDefined();
    expect(MyFunction).not.toBeDefined();
    expect(MyVariable).not.toBeDefined();

    expect(MyFunction).toBeUndefined();
    expect(MyVariable).toBeUndefined();
  })
  it('toBeNull', () => {
    const nullValue = null;
    const undefinedValue = undefined;
    const notNull = "notNull";
    expect(nullValue).toBeNull();
    expect(undefinedValue).not.toBeNull();
    expect(notNull).not.toBeNull();
  })
  it('toContain', () => {
    const myArray = ["jasmin", "dotnet", "tutorial", 1, 2, 3];
    expect(myArray).toContain(1);
    expect(myArray).not.toContain(5);
    expect(myArray).toContain("jasmin");
    expect(myArray).not.toContain("jasmin1");
  })
  it('toBeNaN', () => {
    expect(0 / 0).toBeNaN();
    expect(0 / 5).not.toBeNaN();
  })

  it('toBePositiveInfinity - toBeNegativeInfinity', () => {
    expect(1 / 0).toBePositiveInfinity();
    expect(-1 / 0).toBeNegativeInfinity();
  })
  it('toBeInstanceOf', () => {
    expect(1).toBeInstanceOf(Number);
  })
})
/* Mathchers  inbuild
  toBe // number, string, boolean (===)
  toEqual // object
  toBeTrue // return true check
  toBeFalse // return false check
  toBeTruthy // any data came as success
  toBeFalsy // return as false data
  toBeGreaterThan // >
  toBeGreaterThanOrEqual // >=
  toBeLessThan // <
  toBeLessThanOrEqual // <=
  toMatch // regex
  toBeCloseTo // close to that number with precision or not
  toBeDefined // it's define or not anything like function, variable,object, etc...
  toBeNull // it check value is null
  toContain //check value exist in array just like filter array get data
  toBeNaN // check return value is null
  toBeInstanceOf // check data type
*/