const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com",
    "video":false,
    //testlerin videolarini kaydetmiyor
    //"video":true testlerin videolarini kaydeder
    //default olarak "video":true 'dur.

    //"retries":2
    //TEST FAIL OLDUGUNDA onu kac kere daha calistirmasi gerektigini belirtiyoruz
    //"retries":2 => 1 kere calistirip hata aldiginda 2 kere daha dene
  },
});
