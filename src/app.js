console.log('test app.js');

var divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
divWrapper.append(textArea);
