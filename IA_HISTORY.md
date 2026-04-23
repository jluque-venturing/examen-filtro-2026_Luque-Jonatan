# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Jonatan Daniel Luque
**Fecha:** 23/04/2026

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->

Lo usé al inicio del examen para reemplazar las etiquetas que claramente debían ser cambiadas según el comentario de error que ya tenían describiendolas. 
```

### Lo que le pedí a la IA

```
El archivo index.html está codificado con mala estructuración y sin las etiquetas adecuadas. Quisiera que encuentres todos aquellos divs que tengan class header, nav, etc y los cambies por la etiqueta que corresponde según el nombre de la clase.
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->

La IA hizo exactamente lo que le pedí, pero no como esperaba porque mi prompt no fue suficientemente específico. Cambió la mayoría de los divs por las etiquetas correspondientes, sin equivocarse en los cambios que hizo, pero algunos divs no los cambió porque el nombre de la clase no decía explicitamente qué etiqueta debía ser, lo cual sí se informaba en el comentario que estaba una linea más arriba. 
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->

El error que tuvo fue semántico, porque mi prompt no fue suficientemente específico.
Lo detecté revisando el archivo y notando que aún había divs que no debían serlo, por lo tanto tuve que volver a hacer un prompt para que cambie los divs restantes por las etiquetas correspondientes.
Además no le dije a la IA que mi idea principal era quitar las clases obvias como "footer" o "header" y en su lugar darle estilos directamente a la etiqueta, esto lo hice por desconfianza hacia la IA, para que no se equivoque en algo intentando hacer varias cosas a la vez. Entonces tuve que quitar una a una las clases que no pensaba usar y luego editarlas en el archivo css para que apunten a las etiquetas correspondientes.
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
Durante la edición del archivo CSS, cuando había varios lugares donde se repetía el problema del poco contraste entre colores, le pedí a la IA que termine de resolverlo.
```

### Lo que le pedí a la IA

```
fijate donde dice que hay error de color de poco contraste y pon un color mas claro, excepto los que yo ya corregi   
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->

Corrigió los 3 lugares restantes de forma correcta, no se explayó ni hizo más cambios de lo debido, tampoco omitió lugares donde haría falta hacerlo y no editó los que yo ya había editado.
Cabe aclarar que ubicó correctamente los comentarios que marcaban errores de contraste y a partir de ese enfoque la IA puedo realizar bien su trabajo.
Mayormente el resultado fue el esperado.
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->

No le llamaría error, pero la IA puso todos los colores como #ffffff y no utlizó colores mezclados entre blanco y otro como yo venía haciendo. Por lo tanto tuve que retocar manualmente dos de esos casos para darle un color que yo prefería más.
Detecté este problema cuando actualicé la página y noté que los colores no me convencían.
Fuera de esos mínimos cambios, la IA hizo lo que le pedí.
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
-->

Entre todos los prompts que hice, la IA se fue equivocando obviando u omitiendo cosas, o al contrario queriendo agregar más. 
La IA resolvió bien cuestiones de CSS y orden de las etiquetas de HTML.
La próxima vez pensaría más mis prompts para ser más específico en lo que quiero y que la IA no alucine tanto. Igualmente en tareas pequeñas hizo exactamente lo que yo quería.
```
