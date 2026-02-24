# Why is the `defer` boolean attribute important?

When you add a normal script like this:

```html
<script src="script.js"></script>
```

The browser:

1. Stops parsing the HTML  
2. Downloads the JS  
3. Executes it  
4. Then continues reading the HTML  

That **blocks rendering** — this is called a render-blocking resource.

---

## What `defer` does

```html
<script src="script.js" defer></script>
```

Now the browser:

1. Keeps parsing the HTML  
2. Downloads the JS in parallel  
3. Executes the JS after the HTML is fully parsed  
4. Before `DOMContentLoaded` fires  

So:

- Faster initial rendering  
- DOM is fully available  
- Better performance metrics (like LCP)  

That’s why it’s important — it moves JavaScript out of the critical rendering path.

---

# How else can we successfully reference and use JavaScript?

There are several ways — each has a purpose.

---

## 1. Inline script (inside HTML)

```html
<script>
  console.log("Hello");
</script>
```

Good for small tests  
Not good for scalability  

---

## 2. External file (best practice)

```html
<script src="app.js"></script>
```

Clean  
Cacheable  
Maintainable  

Usually placed:

- At the bottom of `<body>`
- Or in `<head>` with `defer`

---

## 3. Using `async`

```html
<script src="app.js" async></script>
```

`async`:

- Downloads in parallel  
- Executes as soon as it’s ready  
- Does NOT guarantee execution order  
- Can execute before HTML is fully parsed  

Good for:

- Analytics  
- Ads  
- Independent scripts  

Not good when:

- Script depends on DOM  
- Script order matters  

---

## 4. ES Modules (`type="module"`)

```html
<script type="module" src="main.js"></script>
```

Modules:

- Automatically deferred  
- Use `import` / `export`  
- Have their own scope  
- Work great for modern apps  

This is the modern standard approach.

---

## 5. Dynamic script loading

```javascript
const script = document.createElement("script");
script.src = "app.js";
document.body.appendChild(script);
```

Used when:

- Loading scripts conditionally  
- Lazy loading features  
- Injecting third-party scripts  

---

# Quick Comparison

| Method | Blocks HTML? | Keeps Order? | DOM Safe? |
|--------|--------------|--------------|-----------|
| Normal `<script>` | Yes | Yes | Maybe |
| `defer` | No | Yes | Yes |
| `async` | No | No | Maybe |
| `module` | No | Yes | Yes |

---

# Senior-level mental model

HTML builds structure  
CSS styles it  
JS enhances it  

You usually want JS to run after the structure exists — that’s why `defer` (or modules) is so important.