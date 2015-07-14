# simple-test

Dead simple unit tests that make programming easier.

##Usage

Our function:

```javascript
function addOne(i) {
  return i + 1
}
```

Create a new test:

```javascript
tests.addAssert(addOne(1) == 2, 'Add One');
```

Run test(s):

```javascript
tests.results();
```
