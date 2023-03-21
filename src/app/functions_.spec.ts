describe('Functions', () => {
  beforeAll(function () {
    console.log('before all')
  })
  afterAll(function () {
    console.log('after all')
  })
  beforeEach(function () {
    console.log('before each')
  })
  afterEach(function () {
    console.log('after each')
  })
  it('test 1', () => {
    console.log('test 1')
  })
  it('test 2', () => {
    console.log('test 2')
  })
  it('test 3', () => {
    console.log('test 3')
  })
})