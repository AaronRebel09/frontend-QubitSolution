import { StorageUtil, StorageProvider, StorageOptions, PKCEStorage, CookieOptions, TransactionStorage, StorageManagerOptions, SimpleStorage } from './types';
export default class StorageManager {
    storageManagerOptions: StorageManagerOptions;
    cookieOptions: CookieOptions;
    storageUtil: StorageUtil;
    constructor(storageManagerOptions: StorageManagerOptions, cookieOptions: CookieOptions, storageUtil: StorageUtil);
    getOptionsForSection(sectionName: string, overrideOptions?: StorageOptions): StorageOptions;
    getStorage(options: StorageOptions): SimpleStorage;
    getTransactionStorage(options?: StorageOptions): TransactionStorage;
    getTokenStorage(options?: StorageOptions): StorageProvider;
    getHttpCache(options?: StorageOptions): StorageProvider;
    getLegacyPKCEStorage(options?: StorageOptions): PKCEStorage;
    getLegacyOAuthParamsStorage(options?: StorageOptions): StorageProvider;
}
