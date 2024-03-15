const { spawn } = require('child_process');
const path = require('path');

function runColabScript(dataset) {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', [path.join(__dirname, 'framework.py'), dataset]);

        let outputData = '';

        pythonProcess.stdout.on('data', (data) => {
            outputData += data.toString();
        });

        pythonProcess.stderr.on('data', (error) => {
            reject(error.toString());
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                resolve(outputData);
            } else {
                reject(`Colab script exited with code ${code}`);
            }
        });
    });
}

module.exports = runColabScript;