# 📅 Uso básico de JavaScript para fechas dinámicas

## 🎯 Objetivo

Mostrar dinámicamente en el footer:

- El año actual (copyright year).
- La fecha de última modificación del documento.

---

# 1️⃣ Obtener el año actual

```js
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;
```

### Explicación

- `new Date()` crea un objeto con la fecha actual.
- `.getFullYear()` obtiene el año (ej: 2026).
- `querySelector("#currentyear")` selecciona el elemento con ese id.
- `.textContent` inserta el texto dentro del elemento.

---

# 2️⃣ Obtener la última modificación

```js
document.querySelector("#lastModified").textContent = document.lastModified;
```

### Explicación

- `document.lastModified` devuelve un string con la fecha y hora de última modificación.
- No necesita transformación adicional.
- Se inserta directamente con `textContent`.

---

# 🔍 querySelector vs getElementById

| Método | Qué selecciona | Flexibilidad | Recomendado |
|---------|---------------|--------------|-------------|
| `getElementById("id")` | Solo por id | Baja | ✔️ Válido |
| `querySelector("#id")` | Cualquier selector CSS | Alta | ⭐ Más moderno |

### Conclusión

Si el curso usa `querySelector`, usalo.  
Es más flexible y completamente correcto.

---

# 🧩 textContent vs innerHTML vs innerText

## textContent (Recomendado)

```js
element.textContent = "Hola";
```

✔ Inserta solo texto  
✔ No interpreta HTML  
✔ Es más seguro  
✔ Es más rápido  

Ejemplo:

```js
element.textContent = "<b>Hola</b>";
```

Resultado:

```
<b>Hola</b>
```

---

## innerHTML

```js
element.innerHTML = "<b>Hola</b>";
```

✔ Inserta HTML real  
⚠ Puede ser inseguro si el contenido viene del usuario  

Resultado:

**Hola**

---

## innerText

```js
element.innerText = "Hola";
```

- Similar a textContent
- Respeta estilos CSS
- Más lento
- Poco utilizado

---

# 📊 Comparación final

| Método | Inserta HTML | Seguro | Uso recomendado |
|----------|-------------|--------|----------------|
| textContent | ❌ No | ✅ Sí | ⭐⭐⭐⭐⭐ |
| innerHTML | ✅ Sí | ⚠ Depende | ⭐⭐ |
| innerText | ❌ No | ✅ Sí | ⭐ |

---

# 🏆 Regla Profesional

- Si solo mostrás datos → usa `textContent`
- Si necesitás insertar estructura HTML → usa `innerHTML`
- Mantené el código simple mientras aprendés

[JavaScript Date Object](https://codepen.io/BYU-Idaho/pen/VYZQRma?editors=0010)