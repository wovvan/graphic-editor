exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 55000,
    specs: ['e2e/*-spec.js'],
    framework: 'jasmine2',
    baseUrl: /*<baseUrl>*/"http://localhost:8081/"/*</baseUrl>*/ 
};
