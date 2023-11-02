const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  ' Hello from React'
);
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am nested h1 tag'),
    React.createElement('h2', {}, 'I am nested h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am nested h1 tag'),
    React.createElement('h2', {}, 'I am nested h2 tag'),
  ]),
]);
console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
