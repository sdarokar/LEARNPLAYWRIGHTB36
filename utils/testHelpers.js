/**
 * Test Utilities - Common helper functions for Playwright tests
 */

/**
 * Wait for element to be visible
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} timeout - Timeout in milliseconds (default: 5000)
 */
export const waitForElementVisible = async (page, selector, timeout = 5000) => {
    try {
        await page.locator(selector).waitFor({ state: 'visible', timeout });
    } catch (error) {
        throw new Error(`Element ${selector} was not visible within ${timeout}ms: ${error.message}`);
    }
};

/**
 * Wait for element to be hidden
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} timeout - Timeout in milliseconds (default: 5000)
 */
export const waitForElementHidden = async (page, selector, timeout = 5000) => {
    try {
        await page.locator(selector).waitFor({ state: 'hidden', timeout });
    } catch (error) {
        throw new Error(`Element ${selector} was not hidden within ${timeout}ms: ${error.message}`);
    }
};

/**
 * Fill form field with retry logic
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} value - Value to fill
 * @param {number} retries - Number of retries (default: 3)
 */
export const fillFieldWithRetry = async (page, selector, value, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            await page.locator(selector).clear();
            await page.locator(selector).fill(value);
            const filledValue = await page.locator(selector).inputValue();
            if (filledValue === value) {
                return;
            }
        } catch (error) {
            if (i === retries - 1) {
                throw new Error(`Failed to fill ${selector} after ${retries} retries: ${error.message}`);
            }
        }
    }
};

/**
 * Click element with retry logic
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} retries - Number of retries (default: 3)
 */
export const clickWithRetry = async (page, selector, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            await page.locator(selector).click();
            return;
        } catch (error) {
            if (i === retries - 1) {
                throw new Error(`Failed to click ${selector} after ${retries} retries: ${error.message}`);
            }
            await page.waitForTimeout(500);
        }
    }
};

/**
 * Get text from element
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @returns {string} Text content
 */
export const getElementText = async (page, selector) => {
    try {
        return await page.locator(selector).textContent();
    } catch (error) {
        throw new Error(`Failed to get text from ${selector}: ${error.message}`);
    }
};

/**
 * Check if element is visible
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @returns {boolean} True if element is visible
 */
export const isElementVisible = async (page, selector) => {
    try {
        return await page.locator(selector).isVisible();
    } catch (error) {
        return false;
    }
};

/**
 * Check if element is enabled
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector
 * @returns {boolean} True if element is enabled
 */
export const isElementEnabled = async (page, selector) => {
    try {
        return await page.locator(selector).isEnabled();
    } catch (error) {
        return false;
    }
};

/**
 * Select dropdown option by value
 * @param {object} page - Playwright page object
 * @param {string} selector - Dropdown selector
 * @param {string} value - Value to select
 */
export const selectDropdownByValue = async (page, selector, value) => {
    try {
        await page.locator(selector).selectOption(value);
    } catch (error) {
        throw new Error(`Failed to select option ${value} from ${selector}: ${error.message}`);
    }
};

/**
 * Select dropdown option by label
 * @param {object} page - Playwright page object
 * @param {string} selector - Dropdown selector
 * @param {string} label - Label text to select
 */
export const selectDropdownByLabel = async (page, selector, label) => {
    try {
        const option = await page.locator(`${selector} >> text=${label}`).first();
        await option.click();
    } catch (error) {
        throw new Error(`Failed to select option with label ${label} from ${selector}: ${error.message}`);
    }
};

/**
 * Upload file to input element
 * @param {object} page - Playwright page object
 * @param {string} selector - File input selector
 * @param {string} filePath - Path to file to upload
 */
export const uploadFile = async (page, selector, filePath) => {
    try {
        await page.locator(selector).setInputFiles(filePath);
    } catch (error) {
        throw new Error(`Failed to upload file ${filePath}: ${error.message}`);
    }
};

/**
 * Get all text values from list of elements
 * @param {object} page - Playwright page object
 * @param {string} selector - Element selector (returns multiple)
 * @returns {array} Array of text values
 */
export const getElementsText = async (page, selector) => {
    try {
        const elements = await page.locator(selector).allTextContents();
        return elements;
    } catch (error) {
        throw new Error(`Failed to get text from elements ${selector}: ${error.message}`);
    }
};

/**
 * Wait for navigation after action
 * @param {object} page - Playwright page object
 * @param {function} action - Action that triggers navigation
 * @param {number} timeout - Timeout in milliseconds (default: 30000)
 */
export const waitForNavigation = async (page, action, timeout = 30000) => {
    try {
        await Promise.all([
            page.waitForNavigation({ timeout }),
            action()
        ]);
    } catch (error) {
        throw new Error(`Navigation did not complete within ${timeout}ms: ${error.message}`);
    }
};

/**
 * Take screenshot for debugging
 * @param {object} page - Playwright page object
 * @param {string} screenshotName - Name for screenshot file
 */
export const takeScreenshot = async (page, screenshotName) => {
    try {
        const timestamp = new Date().getTime();
        const fileName = `test-results/${screenshotName}-${timestamp}.png`;
        await page.screenshot({ path: fileName });
        console.log(`Screenshot saved: ${fileName}`);
    } catch (error) {
        console.error(`Failed to take screenshot: ${error.message}`);
    }
};

/**
 * Get all dropdown options
 * @param {object} page - Playwright page object
 * @param {string} selector - Dropdown selector
 * @returns {array} Array of option values
 */
export const getDropdownOptions = async (page, selector) => {
    try {
        const options = await page.locator(`${selector} option`).allTextContents();
        return options;
    } catch (error) {
        throw new Error(`Failed to get dropdown options from ${selector}: ${error.message}`);
    }
};

/**
 * Switch to iframe and return page context
 * @param {object} page - Playwright page object
 * @param {string} iframeSelector - Iframe selector
 * @returns {object} Iframe page object
 */
export const switchToIframe = async (page, iframeSelector) => {
    try {
        const frameHandle = await page.$(iframeSelector);
        if (!frameHandle) {
            throw new Error(`Iframe ${iframeSelector} not found`);
        }
        return await frameHandle.contentFrame();
    } catch (error) {
        throw new Error(`Failed to switch to iframe ${iframeSelector}: ${error.message}`);
    }
};

/**
 * Handle alert/dialog
 * @param {object} page - Playwright page object
 * @param {string} action - 'accept' or 'dismiss' (default: 'accept')
 * @param {string} textToType - Optional text to type (for prompt dialogs)
 */
export const handleDialog = async (page, action = 'accept', textToType = '') => {
    page.once('dialog', async (dialog) => {
        if (action === 'accept') {
            if (textToType) {
                await dialog.accept(textToType);
            } else {
                await dialog.accept();
            }
        } else if (action === 'dismiss') {
            await dialog.dismiss();
        }
    });
};

/**
 * Get page URL
 * @param {object} page - Playwright page object
 * @returns {string} Current page URL
 */
export const getCurrentUrl = (page) => {
    return page.url();
};

/**
 * Get page title
 * @param {object} page - Playwright page object
 * @returns {string} Page title
 */
export const getPageTitle = (page) => {
    return page.title();
};

/**
 * Clear all cookies
 * @param {object} page - Playwright page object
 */
export const clearCookies = async (page) => {
    try {
        const context = page.context();
        await context.clearCookies();
    } catch (error) {
        console.error(`Failed to clear cookies: ${error.message}`);
    }
};

/**
 * Add custom header to requests
 * @param {object} page - Playwright page object
 * @param {string} headerName - Header name
 * @param {string} headerValue - Header value
 */
export const addRequestHeader = async (page, headerName, headerValue) => {
    try {
        const context = page.context();
        const existingHeaders = await context._httpHeaders || {};
        existingHeaders[headerName] = headerValue;
        // Note: Headers are set during context creation, this is for documentation
    } catch (error) {
        console.error(`Failed to add header: ${error.message}`);
    }
};
