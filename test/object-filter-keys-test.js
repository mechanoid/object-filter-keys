import assert from 'assert'
import baretest from 'baretest'

import filterKeys from '../index.js'
const test = baretest(
  'filterKeys(obj, ...keysToKeep) should filter out all keys, not explicitly called for'
)

test('keep a single key', async () => {
  assert.deepEqual(filterKeys({ a: 1, b: 2, c: 3 }, 'a'), { a: 1 })
})

test('keep a list of keys', async () => {
  assert.deepEqual(filterKeys({ a: 1, b: 2, c: 3 }, 'a', 'b'), { a: 1, b: 2 })
})

test('deliver an empty object for no "to keep keys"', async () => {
  assert.deepEqual(filterKeys({ a: 1, b: 2, c: 3 }), {})
})

test('handle not existing keys by ignoring them', async () => {
  assert.deepEqual(filterKeys({ a: 1, b: 2, c: 3 }, 'a', 'x'), { a: 1 })
})

test.run()
