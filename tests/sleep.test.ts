import { sleep } from '..';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('test sleep timer', () => {

    const timeToWait = parseInt((Math.random() * 1000).toString(), 10);
    sleep(timeToWait);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeToWait);
})