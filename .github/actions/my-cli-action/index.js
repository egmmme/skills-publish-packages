const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
    try {
        const version = core.getInput('version') || 'latest';
        const dryRun = process.env.MYCLI_DRY_RUN === '1';

        console.log(`Installing MyCLI version: ${version}...`);

        if (dryRun) {
            console.log('Dry-run enabled: skipping remote install and simulating success.');
        } else {
            execSync(`curl -fsSL https://cli.example.com/install.sh | sh`, { stdio: 'inherit' });
            console.log('MyCLI installed successfully.');
        }
    } catch (error) {
        core.setFailed(`Installation failed: ${error.message}`);
    }
}

run();