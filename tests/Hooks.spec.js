import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log('This is before all hook');
});

test.afterAll(async () => {
    console.log('This is after all hook');
});

test.beforeEach(async () => {
    console.log('This is before each hook');
});

test.afterEach(async () => {
    console.log('This is after each hook');
});

test.describe('Group1', () => {
    
    test('Test case 1', async ({page}) => {
        console.log('This is test case 1');
    });

    test('Test case 2', async ({page}) => {
        console.log('This is test case 2');
    });
     
    test('Test case 3', async ({page}) => {
        console.log('This is test case 3');
    });

    test.describe('Group 2', () => {
        
        test('Test case 4', async ({page}) => {
            console.log('This is test case 4');
        });

        test('Test case 5', async ({page}) => {
            console.log('This is test case 5');
        });
         
        test('Test case 6', async ({page}) => {
            console.log('This is test case 6');
        });

    });

});
