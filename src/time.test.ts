test('time should work as normal', () => {
  // require('./timemachine')
  const d = new Date()
  console.log(d)
  expect(d.getFullYear()).toBeGreaterThan(2018)
  // timemachine.reset()
})
