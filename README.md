# jquery-textcounter

This is very simple text counter plugin to be displayed next to the text or textare in a page.

# Basic configuration

```html
<input type="text" id="text1" data-count-max-length="30" data-count-reverse="true" class="form-control" />
```

```javascript
$("#text1").textcounter({
    maxlength: 50,
    reverse: true
});
```