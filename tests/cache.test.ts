import { Cache } from '..';

describe('test Cache', () => {
    test('Set/Get', () => {
      const key = Math.random().toString();
      const value = Math.random();
  
      Cache.Set(key, value, Number.MAX_SAFE_INTEGER)
  
      expect(
        Cache.Get(key)
      ).toBe(value)
    })
  
    
    test('Set/Get Expiration', () => {
      const key = Math.random().toString();
      const value = Math.random();
  
      const expireTime = parseInt((Math.random() * 1000).toString(), 1000);
  
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
  
      Cache.Set(key, value, expireTime)
  
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), expireTime);

      jest.runAllTimers();
  
      expect(
        Cache.Get(key)
      ).toBe(undefined)
    })
  })