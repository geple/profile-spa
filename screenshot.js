// Generates a screenshot of the site homepage for use in the Readme.md of the github repo

import puppeteer from 'puppeteer';
import { execSync } from 'child_process';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Emulate dark theme
    await page.emulateMediaFeatures('screen');
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark'}]);

    await page.goto('https://geple.page/');

    await page.screenshot({ path: 'public/homepage.jpg' });
    await browser.close();
    // Push new homepage file to github
    execSync('git config --global user.name "geple"');
    execSync('git config --global user.email "gplloyd97@gmail.com"');
    
    // Check for outstanding changes and create another commit if needed
    const hasChanges = execSync('git status --porcelain').toString().trim() !== '';
    if (hasChanges) {
      execSync('git add .');
      execSync('git commit -m "Auto update homepage screenshot (outstanding)"');
    }
    
    
    execSync('git add public/homepage.jpg');
    execSync(`git commit -m "Auto update homepage screenshot"`);
    
    execSync('git push');
})();
