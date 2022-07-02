import fs from 'fs/promises';
import tools from '..';

describe('isTradeOfferURL()', () => {
  const toTest = [{
    input: 'https://trade.justazul.com',
    expectedResult: false
  },
  {
    input: 'https://steamcommunity.com/tradeoffer/new/?partner=217734041&token=8O2Nj7Jv',
    expectedResult: true
  },
  {
    input: 'https://steamcommunity.com/tradeoffer/new/?partner=217734041&token=8O2Nj7Jv',
    expectedResult: true
  },
  {
    input: 'https://steamcommunity.com/tradeoffer/new/?token=8O2Nj7Jv&partner=217734041',
    expectedResult: true
  },
  {
    input: 'http://steamcommunity.com/tradeoffer/new/?token=8O2Nj7Jv&partner=217734041',
    expectedResult: true
  },
  {
    input: 'http://steamcommunity.com/tradeoffer/new/',
    expectedResult: false
  }];

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].input, async () => {
      expect(
          await tools.isTradeOfferURL(
            toTest[i].input
          )
        )
        .toBe(toTest[i].expectedResult);
    })
  }
})

describe('FastConcat()', () => {
  const defaultArray = [1, 2, 3];
  const toConcat = [4, 5, 6];

  const expectedResult = [
    ...defaultArray,
    ...toConcat
  ];

  test('sync', () => {
    const testArray = [...defaultArray]; // clone

    tools.FastConcat(testArray, toConcat);
    expect(testArray)
      .toEqual(
        expect.objectContaining(expectedResult)
      );

  })

  test('async', async () => {
    const testArray = [...defaultArray]; // clone

    await tools.AsyncFastConcat(testArray, toConcat);
    expect(testArray)
      .toEqual(
        expect.objectContaining(expectedResult)
      );

  })
})

describe('TimeStamp()', () => {
  const generateExpectedResult = (testDate: Date) => {
    return {
      Date: `${testDate.getFullYear()}-${testDate.toLocaleDateString(undefined, {month: '2-digit'})}-${testDate.toLocaleDateString(undefined, {day: '2-digit'})}`,
      Time: `${testDate.toLocaleTimeString(undefined, {hour: '2-digit', hour12: false})}:${testDate.toLocaleTimeString(undefined, {minute: '2-digit'})}:${testDate.toLocaleTimeString(undefined, {second: 'numeric'})}`
    }
  }

  const generateTestCase = (testDate: Date) => {
    return {
      input: testDate,
      expectedResult: generateExpectedResult(testDate)
    }
  }

  const toTest = [
    generateTestCase(new Date()), // current time
    generateTestCase(
      new Date(
        'Sat Jul 02 2022 16:19:59 GMT-0300'
      )
    ),
  ];

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].input.toString(), async () => {
      expect(
          await tools.TimeStamp(toTest[i].input)
        )
        .toEqual(
          expect.objectContaining(
            toTest[i].expectedResult
          )
        )
    })
  }


})

describe('SplitArray()', () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const toTest = [{
      input: 1,
      expectedResult: [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [10],
      ]
    },
    {
      input: 5,
      expectedResult: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ]
    }
  ];

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].input.toString(), async () => {
      const Result = await tools.SplitArray(
        [...testArray],
        toTest[i].input
      );

      expect(Result)
        .toEqual(
          expect.objectContaining(
            toTest[i].expectedResult
          )
        );
    })
  }
})

describe('formatNumber()', () => {
  const toTest = [{
      inputValue: 1,
      expectedResult: '1'
    },
    {
      inputValue: 10,
      expectedResult: '10'
    },
    {
      inputValue: 100,
      expectedResult: '100'
    },
    {
      inputValue: 1000,
      expectedResult: '1,000'
    },
    {
      inputValue: 10000,
      expectedResult: '10,000'
    },
    {
      inputValue: 100000,
      expectedResult: '100,000'
    },
    {
      inputValue: 1000000,
      expectedResult: '1,000,000'
    },
    {
      inputValue: 10000000,
      expectedResult: '10,000,000'
    },
  ];

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].inputValue.toString(), () => {
      expect(tools.formatNumber(toTest[i].inputValue))
        .toBe(toTest[i].expectedResult)
    })
  }

})

test('test sleep timer', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  const timeToWait = parseInt((Math.random() * 1000).toString(), 10); //1 sec
  tools.sleep(timeToWait);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), timeToWait);
})

describe('isSteamID64()', () => {
  const toTest = [{
      inputValue: '6544654',
      expectedResult: false
    },
    {
      inputValue: '/76561198358742001',
      expectedResult: false
    },
    {
      inputValue: '76561198358742001',
      expectedResult: true
    },
    {
      inputValue: '76561198358742001/',
      expectedResult: false
    },
    {
      inputValue: '7656119835874200',
      expectedResult: false
    },
    {
      inputValue: 'https://steamcommunity.com/id/bluelvlup',
      expectedResult: false
    },
    {
      inputValue: 'https://steamcommunity.com/profiles/76561198358742001',
      expectedResult: false
    },
    {
      inputValue: 'http://steamcommunity.com/profiles/76561198358742001',
      expectedResult: false
    },
    {
      inputValue: 'http://steamcommunity.com/id/bluelvlup',
      expectedResult: false
    },
  ]

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].inputValue, async () => {
      expect(
          await tools.isSteamID64(toTest[i].inputValue)
        )
        .toBe(toTest[i].expectedResult);
    })
  }

})

describe('isURL()', () => {
  const toTest = [{
      inputValue: 'steamcommunity.com/id/bluelvlup',
      expectedResult: true
    },
    {
      inputValue: '://steamcommunity.com/id/bluelvlup',
      expectedResult: true
    },
    {
      inputValue: 'https://steamcommunity.com/id/bluelvlup',
      expectedResult: true
    },
    {
      inputValue: 'http://steamcommunity.com/id/bluelvlup',
      expectedResult: true
    },
    {
      inputValue: 'https://steamcommunity.com/id/76561198358742001',
      expectedResult: true
    },
    {
      inputValue: 'http://steamcommunity.com/id/76561198358742001',
      expectedResult: true
    },
    {
      inputValue: '://76561198358742001',
      expectedResult: false
    },
    {
      inputValue: '76561198358742001/',
      expectedResult: false
    },
    {
      inputValue: '76561198358742001',
      expectedResult: false
    },
    {
      inputValue: '/76561198358742001',
      expectedResult: false
    },
  ]

  for (let i = 0; i < toTest.length; i++) {
    test(toTest[i].inputValue, async () => {
      expect(
          await tools.isURL(toTest[i].inputValue)
        )
        .toBe(toTest[i].expectedResult);
    })
  }

})

describe('test store/read json file', () => {
  const randomJSON = {
    [Math.random().toString()]: Math.random(),
  };

  const filename = parseInt((Math.random() * 1000).toString(), 10);
  const targetPath = `./${filename}.json`;

  test('store json file', async () => {
    await tools.storeFile(targetPath, JSON.stringify(randomJSON))
  })

  describe('read json file', () => {
    test('async', async () => {
      const readResult = await tools.readJSON(targetPath);

      expect(readResult)
        .toEqual(randomJSON);
    })

    test('sync', async () => {
      const readResult = await tools.readJSONSync(targetPath);

      expect(readResult)
        .toEqual(randomJSON);
    })
  })

  test('delete test file', async () => {
    await fs.unlink(targetPath);
  })
})

describe('test folder creation', () => {
  const targetPath = `./tests/${(Math.random() * 100).toString()}`;
  const targetSubFolder = `./${(Math.random() * 100).toString()}/${(Math.random() * 100).toString()}/${(Math.random() * 100).toString()}`;

  const doesFolderExists = async (targetPath: string): Promise < boolean > => {
    try {
      await fs.stat(targetPath);
      return true;
    } catch {
      return false;
    }
  }

  describe('folder that does not exists', () => {
    test('folder should not exist', async () => {
      expect(
          await doesFolderExists(targetPath)
        )
        .toBeFalsy();
    })

    test('create folder', async () => {
      await tools.createPath(targetPath);
    })

    test('folder should exist', async () => {
      expect(
          await doesFolderExists(targetPath)
        )
        .toBeTruthy();
    });

  });

  describe('folder that exists', () => {
    test('folder should exist', async () => {
      expect(
          await doesFolderExists(targetPath)
        )
        .toBeTruthy();
    })

    test('create folder without error', async () => {
      await tools.createPath(targetPath);
    })
  })


  describe('create subsequent folders', () => {
    test('folder not should exist', async () => {
      expect(
          await doesFolderExists(targetSubFolder)
        )
        .toBeFalsy();
    })

    test('create folder', async () => {
      await tools.createPath(targetSubFolder);;
    })

    test('folder should exist', async () => {
      expect(
          await doesFolderExists(targetSubFolder)
        )
        .toBeTruthy();
    })
  })

  describe('delete test folders', () => {
    test('delete test folder', async () => {
      await fs.rmdir(targetPath);
    })

    test('test folder should not exist', async () => {
      expect(
          await doesFolderExists(targetPath)
        )
        .toBeFalsy();
    })

    test('delete subsequent test folders', async () => {
      const paths = targetSubFolder
        .split("/")
        .filter((value) => value !== '.')
        .reverse();

      let toDeletePath = targetSubFolder;

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];

        await fs.rmdir(toDeletePath);
        toDeletePath = toDeletePath.replace(`/${path}`, '');
      }

    })

    test('subsequent test folders should not exist', async () => {
      const mainPath = targetSubFolder.split('./')[1];

      expect(
          await doesFolderExists(mainPath)
        )
        .toBeFalsy();
    })
  })
})