import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Load test data from JSON file
 * @param {string} fileName - Name of the JSON file in testdata folder
 * @returns {object} Parsed JSON data
 */
export const loadTestData = (fileName) => {
    const filePath = path.join(__dirname, '../testdata', fileName);
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to load test data from ${fileName}: ${error.message}`);
    }
};

/**
 * Generate random email
 * @returns {string} Random email address
 */
export const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser${randomString}@test.com`;
};

/**
 * Generate random username
 * @param {string} prefix - Optional prefix for username
 * @returns {string} Random username
 */
export const generateRandomUsername = (prefix = 'user') => {
    const randomNum = Math.floor(Math.random() * 10000);
    return `${prefix}${randomNum}`;
};

/**
 * Generate random password
 * @param {number} length - Length of password (default: 8)
 * @returns {string} Random password with alphanumeric and special characters
 */
export const generateRandomPassword = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};

/**
 * Generate random phone number (Indian format)
 * @param {string} format - Format type: 'standard' (10 digits), 'with-country' (with +91), or 'hyphenated' (XXX-XXXXX-XXXX)
 * @returns {string} Random Indian phone number
 */
export const generateRandomPhoneNumber = (format = 'standard') => {
    // First digit: 6, 7, 8, or 9 (valid for Indian mobile numbers)
    const firstDigit = [6, 7, 8, 9][Math.floor(Math.random() * 4)];
    
    // Generate remaining 9 digits
    let phoneNumber = firstDigit.toString();
    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    
    // Format based on requirement
    switch (format) {
        case 'with-country':
            return `${phoneNumber}`;
        case 'hyphenated':
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 8)}-${phoneNumber.slice(8)}`;
        case 'standard':
        default:
            return phoneNumber;
    }
};

/**
 * Merge test data with custom values
 * @param {object} baseData - Base test data
 * @param {object} customData - Custom data to override/extend
 * @returns {object} Merged data
 */
export const mergeTestData = (baseData, customData) => {
    return {
        ...baseData,
        ...customData
    };
};

/**
 * Create login test data
 * @param {string} username - Username
 * @param {string} password - Password
 * @param {object} additionalData - Any additional fields
 * @returns {object} Login test data
 */
export const createLoginTestData = (username, password, additionalData = {}) => {
    return {
        username,
        password,
        ...additionalData
    };
};

/**
 * Create user form test data
 * @param {object} customData - Custom user data
 * @returns {object} User form test data
 */
export const createUserFormTestData = (customData = {}) => {
    const defaultData = {
        fullname: generateRandomUsername('User'),
        emailaddress: generateRandomEmail(),
        currentaddress: '123 Test Street, Test City',
        parmanentaddress: '456 Permanent Ave, Permanent City'
    };
    return mergeTestData(defaultData, customData);
};

/**
 * Create employee test data
 * @param {object} customData - Custom employee data
 * @returns {object} Employee test data
 */
export const createEmployeeTestData = (customData = {}) => {
    const defaultData = {
        firstName: generateRandomUsername('First'),
        lastName: generateRandomUsername('Last'),
        email: generateRandomEmail(),
        phone: generateRandomPhoneNumber(),
        department: 'Engineering',
        position: 'QA Engineer',
        salary: 50000,
        startDate: new Date().toISOString().split('T')[0]
    };
    return mergeTestData(defaultData, customData);
};

/**
 * Create multiple test data records
 * @param {string} dataType - Type of data ('user', 'employee', 'login')
 * @param {number} count - Number of records to create
 * @param {array} customDataArray - Array of custom data objects for each record
 * @returns {array} Array of test data records
 */
export const createMultipleTestData = (dataType, count, customDataArray = []) => {
    const records = [];
    for (let i = 0; i < count; i++) {
        const customData = customDataArray[i] || {};
        switch (dataType.toLowerCase()) {
            case 'user':
                records.push(createUserFormTestData(customData));
                break;
            case 'employee':
                records.push(createEmployeeTestData(customData));
                break;
            case 'login':
                records.push(createLoginTestData(
                    generateRandomUsername(),
                    generateRandomPassword(),
                    customData
                ));
                break;
            default:
                throw new Error(`Unknown data type: ${dataType}`);
        }
    }
    return records;
};

/**
 * Validate required fields in test data
 * @param {object} data - Test data to validate
 * @param {array} requiredFields - Array of required field names
 * @returns {boolean} True if all required fields exist
 */
export const validateTestData = (data, requiredFields = []) => {
    for (const field of requiredFields) {
        if (!(field in data) || data[field] === null || data[field] === undefined) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
    return true;
};

/**
 * Get test data by scenario
 * @param {string} scenario - Scenario name ('validLogin', 'invalidLogin', 'newUser', etc.)
 * @returns {object} Test data for the scenario
 */
export const getTestDataByScenario = (scenario) => {
    const scenarios = {
        validLogin: createLoginTestData('Admin', 'admin123'),
        invalidLogin: createLoginTestData('invalidUser', 'invalidPass'),
        newUser: createUserFormTestData({}),
        newEmployee: createEmployeeTestData({}),
        adminUser: createLoginTestData('admin', 'admin123', { role: 'admin' }),
        standardUser: createLoginTestData('user', 'pass123', { role: 'user' })
    };

    if (!scenarios[scenario]) {
        throw new Error(`Unknown scenario: ${scenario}`);
    }

    return scenarios[scenario];
};

/**
 * Reset test data (remove sensitive information)
 * @param {object} data - Test data
 * @returns {object} Sanitized test data
 */
export const sanitizeTestData = (data) => {
    const sanitized = { ...data };
    const sensitiveFields = ['password', 'apiKey', 'token', 'secret'];
    
    sensitiveFields.forEach(field => {
        if (field in sanitized) {
            sanitized[field] = '***REDACTED***';
        }
    });
    
    return sanitized;
};
