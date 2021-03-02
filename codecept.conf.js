const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://automationpractice.com/index.php',
      show: false,
      windowSize: '1366x830'
    }
  },
  include: {
    I: './steps_file.js',
    signinpage: './Pages/userreg.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-gittests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}