import ArrayBufferConverter from '../app';
import getBuffer from '../basic';

test('should compare data', () => {
  const buffer = getBuffer();
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(buffer);
  const received = bufferConverter.toString();

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(received).toBe(expected);
});
