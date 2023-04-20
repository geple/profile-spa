// Generates a screenshot of the site homepage for use in the Readme.md of the github repo

import puppeteer from 'puppeteer';
// import { execSync } from 'child_process';
// import path from 'path';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Emulate dark theme
    await page.emulateMediaFeatures('screen');
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark'}]);

    await page.goto('https://geple.page/');

    await page.screenshot({ path: 'public/homepage.jpg' });
    await browser.close();
    
    // // Push new homepage file to github
    // const repoPath = path.resolve(process.cwd(), '..', '..');
    // console.log('Changing working directory to ${repoPath}');
    // process.chdir(repoPath);

    // execSync('git config user.name "geple"');
    // execSync('git config user.email "gplloyd97@gmail.com"');    
    
    // execSync('git add public/homepage.jpg');
    // execSync('git commit -m "Auto update homepage screenshot"', {stdio: 'inherit'});
    
    // execSync('git push');
})();
