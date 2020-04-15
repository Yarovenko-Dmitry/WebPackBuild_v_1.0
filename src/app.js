console.log('test app.js');

const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
divWrapper.append(textArea);
