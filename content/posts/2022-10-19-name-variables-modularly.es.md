+++
author = "Andrés García"
title = "Buenas prácticas para nombrar las variables de forma modular"
date = "2022-10-19"
description = "Buenas prácticas para nombrar las variables de forma modular"
slug = "Buenas prácticas para nombrar las variables de forma modular"
tags = [
  "nombrar las variables",
  "nombramiento las variables",
]
categories = [
  "Lenguaje de programacion",
]
series = [
  "Lenguaje de programacion"
]
aliases = [
  "Lenguaje de programacion"
]
"featuredImage" = "images/posts/best_practices_naming_modular_variables_programming.webp"
+++

# Estándar nombramiento las variables de forma modular

Cuando trabajas con un lenguaje de programación, es necesario aprovechar el poder de las variables. Sin embargo, si creas nombres de variables espontáneamente a medida que programas, lo más probable es que tu convención de nomenclatura carezca de cohesión. Deberías pensar en organizar los nombres de tus variables (y del proyecto en general) de forma modular. Esto aportará estructura y unidad a tu proyecto en su conjunto, lo que facilitará su comprensión y navegación.

## Una sugerencia de nomenclatura

Digamos que necesitas una variable para el color del texto en tu proyecto.
¿Deberías llamarla `text-color` o `color-text`? ¿Cómo se decide?
Elegir uno al azar puede contribuir a la falta de estructura a medida que aumenta el número de variables en tu proyecto. Como se ha comprobado en la práctica, a menudo olvidamos exactamente cómo hemos nombrado las variables para determinados proyectos, lo que puede llevar a la confusión y a métodos de búsqueda y sustitución global de nombres de variables que llevan mucho tiempo.

Lo que necesitamos es una regla para definir y seleccionar nuestros nombres de variables. Una excelente manera de mantener la modularidad en tu proyecto es agrupar las variables que comparten relaciones y puntos en común. Entonces, puedes nombrarlas ordenando las palabras que describen su función de **genérico a específico de izquierda a derecha**.

Por ejemplo, si tienes cuatro variables para cuatro colores de borde diferentes, puedes nombrarlas todas comenzando por `border` (ya que es el término genérico que todas comparten) y ser más específico con una lectura de izquierda a derecha. Agrupar y nombrar las variables de esta manera hace que tu código sea más fácil de leer, comprender y recordar.

### Sin patrón (No debe utilizar este ejemplo)

<table>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// Dart / TypeScript
class Style {
  ...
  var blueBorder;
  var lightBlueBorder;
  var lightestBlueBorder;
  var darkGreenBorder;
  var darkestBorderGreen;
  var redBorder;
  ...
}
```

</td>
<td>

```css
/* CSS */
:root {
  ...
  --blue-border;
  --light-blue-border;
  --lightest-blue-border;
  --dark-green-border;
  --darkest-border-green;
  --red-border;
  ...
}
```

</td>
</tr>
</table>

### Genérico -> Específico (Se recomienda utilizar este ejemplo)

<table>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// Dart / TypeScript
class Style {
  ...
  var borderBlue;
  var borderBlueLight;
  var borderBlueLightest;
  var borderGreenDark;
  var borderGreenDarkest;
  var borderRed;
  ...
}
```

</td>
<td>

```css
/* CSS */
:root {
  ...
  --border-blue;
  --border-blue-light;
  --border-blue-lightest;
  --border-green-dark;
  --border-green-darkest;
  --border-red;
  ...
}
```

</td>
</tr>
</table>

## De lo más general a lo más específico: Un ejemplo

Supongamos que estamos trabajando en un lenguaje de programación y queremos crear una serie de variables que definan la paleta de colores de nuestro proyecto. Si estamos trabajando con un tono de blue (azul), podríamos crear algunas variables como esta

<table>
<tr>
  <td colspan="2">
    <center><strong>Hmmm... no es mejor</strong></center>
  </td>
</tr>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// Hmmm... no es mejor
// Dart / TypeScript
class Style {
  ...
  var blue;
  var darkBlue;
  var mediumBlue;
  var darkestBlue;
  var lightBlue;
  var lightestBlue;
  ...
}
```

</td>
<td>

```css
/* Hmmm... no es mejor */
/* CSS */
:root {
  ...
  --blue;
  --dark-blue;
  --medium-blue;
  --darkest-blue;
  --light-blue;
  --lightest-blue;
  ...
}
```

</td>
</tr>
</table>

Una mejor manera de nombrar estas variables sería empezar con la palabra genérica que todas tienen en común: **blue**. Luego, podemos ir concretando de izquierda a derecha:

<table>
<tr>
  <td colspan="2">
    <center><strong>Es mejor</strong></center>
  </td>
</tr>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// Es mejor
// Dart / TypeScript
class Style {
  ...
  var blue;
  var blueDark;
  var blueMedium;
  var blueDarkest;
  var blueLight;
  var blueLightest;
  ...
}
```

</td>
<td>

```css
/* Es mejor */
/* CSS */
:root {
  ...
  --blue;
  --blue-dark;
  --blue-medium;
  --blue-darkest;
  --blue-light;
  --blue-lightest;
  ...
}
```

</td>
</tr>
</table>

Esto no solo ayuda a recordar, sino que también permite que el editor de texto (como VSCode, Android Studio, Sublime Text, etc.) sugiera fácilmente los colores. De esta manera, no tienes que memorizar exactamente cómo nombraste tus variables. En su lugar, puedes comenzar con un término genérico y luego ir siendo más específico a medida que el editor de texto te sugiere los nombres de las variables. Todo lo que tienes que recordar es que quieres un color **blue**. Entonces, comienzas a escribir "blue" y puedes obtener una lista de todos los diferentes tonos de **blue** (azul) que has creado.

## Ejemplo de sugerencia

Imagina que estoy trabajando en un gran proyecto y he agrupado todas mis variables que contienen valores de color anteponiéndoles la palabra genérica que todas tienen en común: color.

<table>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
  <td colspan="2">
    <center><strong>Hmmm... no es mejor</strong></center>
  </td>
</tr>
<tr>
<td>

```dart
// Hmmm... no es mejor
// Dart / TypeScript
class Style {
  ...
  var borderColor;
  var darkBorderColor;
  var lightColorBorder;
  var highlight;
  var link;
  var linkDark;
  var text;
  var colorText;
  var linkColorLight;
  var lightestTextColor;
  ...
}
```

</td>
<td>

```css
/* Hmmm... no es mejor */
/* CSS */
:root {
  ...
  --border-color;
  --dark-border-color;
  --light-color-border;
  --highlight;
  --link;
  --link-dark;
  --text;
  --color-text;
  --link-color-light;
  --lightest-text-color;
  ...
}
```

</td>
</tr>
<tr>
  <td colspan="2">
    <center><strong>OK</strong></center>
  </td>
</tr>
<tr>
<td>

```dart
// OK
// Dart / TypeScript
class Style {
  ...
  var colorBorder;
  var colorBorderDark;
  var colorBorderLight;

  var colorHighlight;

  var colorLink;
  var colorLinkDark;
  var colorLinkLight;

  var colorText;
  var colorTextLight;
  var colorTextLightest;

  var colorBackground;
  var colorBackgroundLight;
  var colorBackgroundDark;

  var colorTextStroke;
  var colorTextStrokeLight;
  var colorTextStrokeDark;
  ...
}
```

</td>
<td>

```css
/* OK */
/* CSS */
:root {
  ...
  --color-border;
  --color-border-dark;
  --color-border-light;

  --color-highlight;

  --color-link;
  --color-link-dark;
  --color-link-light;

  --color-text;
  --color-text-light;
  --color-text-lightest;

  --color-background;
  --color-background-light;
  --color-background-dark;

  --color-text-stroke;
  --color-text-stroke-light;
  --color-text-stroke-dark;
  ...
}
```

</td>
</tr>
<tr>
  <td colspan="2">
    <center>
    Si existen otros parámetros que no están relacionados en el mismo archivo o clase, no deberían estar allí, ya que esto violaría el principio de responsabilidad única (SRP).
    </center>
  </td>
</tr>
<td>

```dart
// Si existen otros parámetros que no están relacionados en el mismo archivo o clase,
// no deberían estar allí, ya que esto violaría el principio de responsabilidad única (SRP).
// Dart / TypeScript
class Style {
  ...
  var fontFamilyTextLight;
  var fontFamilyTextDark;
  var sizeTextStrokeLight;
  var sizeTextStrokeDark;
  var sizeTextLight;
  var sizeTextDark;
  ...
}
```

</td>
<td>

```css
/* Si existen otros parámetros que no están relacionados en el mismo archivo o clase,
 no deberían estar allí, ya que esto violaría el principio de responsabilidad única (SRP). */
/* CSS */
:root {
  ...
  --font-family-text-light;
  --font-family-text-dark;
  --size-text-stroke-light;
  --size-text-stroke-dark;
  --size-text-light;
  --size-text-dark;
  ...
}
```

</td>
</tr>
</table>

Si una clase o archivo tiene varias responsabilidades con las variables, se debe considerar aplicar otro patrón de diseño: categorización (o tipificación) de lo genérico a lo específico.

<table>
<tr>
  <td colspan="2">
    <center><strong>Es mejor</strong></center>
  </td>
</tr>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// Es mejor
// Dart / TypeScript
class Style {
  ...
  var borderColor;
  var borderColorDark;
  var borderColorLight;

  var highlightColor;

  var linkColor;
  var linkColorDark;
  var linkColorLight;

  var backgroundColor;
  var backgroundColorLight;
  var backgroundColorDark;

  var textColor;
  var textColorLight;
  var textColorLightest;

  var textSize;
  var textSizeLight;
  var textSizeDark;
  var textFontFamily;

  var textStrokeColor;
  var textStrokeColorLight;
  var textStrokeColorDark;
  var textStrokeSize;
  ...
}
```

</td>
<td>

```css
/* Es mejor */
/* CSS */
:root {
  ...
  --border-color;
  --border-color-dark;
  --border-color-light;

  --highlight-color;

  --link-color;
  --link-color-dark;
  --link-color-light;

  --background-color;
  --background-color-light;
  --background-color-dark;

  --text-color;
  --text-color-light;
  --text-color-lightest;

  --text-size;
  --text-sizeLight;
  --text-sizeDark;
  --text-fontFamily;

  --text-stroke-color;
  --text-stroke-color-light;
  --text-stroke-color-dark;
  --text-stroke-size;
  ...
}
```

</td>
</tr>
</table>

Si se utilizan variaciones del mismo tipo en un archivo o en una clase

<table>
<tr>
  <td colspan="2">
    <center><strong>Es mejor</strong></center>
  </td>
</tr>
<tr>
<td align="center"> Dart / TypeScript </td> <td align="center"> CSS </td>
</tr>
<tr>
<td>

```dart
// OK
// Dart / TypeScript
class Style {
  ...
  // Primary
  var primaryIconColorLight;
  var primaryIconColorDisabledLight;
  var primaryIconColorDark;
  var primaryIconColorDisabledDark;
  var primaryTextColorLight;
  var primaryTextColorDisabledLight;
  var primaryTextColorDark;
  var primaryTextColorDisabledDark;
  var primaryBackgroundColorLight;
  var primaryBackgroundColorDisabledLight;
  var primaryBackgroundColorDark;
  var primaryBackgroundColorDisabledDark;

  // Secondary
  var secondaryIconColorLight;
  var secondaryIconColorDisabledLight;
  var secondaryIconColorDark;
  var secondaryIconColorDisabledDark;
  var secondaryTextColorLight;
  var secondaryTextColorDisabledLight;
  var secondaryTextColorDark;
  var secondaryTextColorDisabledDark;
  var secondaryBackgroundColorLight;
  var secondaryBackgroundColorDisabledLight;
  var secondaryBackgroundColorDark;
  var secondaryBackgroundColorDisabledDark;

  // Tertiary
  var tertiaryIconColorLight;
  var tertiaryIconColorDisabledLight;
  var tertiaryIconColorDark;
  var tertiaryIconColorDisabledDark;
  var tertiaryTextColorLight;
  var tertiaryTextColorDisabledLight;
  var tertiaryTextColorDark;
  var tertiaryTextColorDisabledDark;
  var tertiaryBackgroundColorLight;
  var tertiaryBackgroundColorDisabledLight;
  var tertiaryBackgroundColorDark;
  var tertiaryBackgroundColorDisabledDark;
  ...
}
```

</td>
<td>

```css
/* OK */
/* CSS */
:root {
  ...
  /* Primary */
  --primary-icon-color-light;
  --primary-icon-color--disabled-light;
  --primary-icon-color-dark;
  --primary-icon-color--disabled-dark;
  --primary-text-color-light;
  --primary-text-color-disabled-light;
  --primary-text-color-dark;
  --primary-text-color-disabled-dark;
  --primary-background-color-light;
  --primary-background-color-disabled-light;
  --primary-background-color-dark;
  --primary-background-color-disabled-dark;

  /* Secondary */
  --secondary-icon-color-light;
  --secondary-icon-color--disabled-light;
  --secondary-icon-color-dark;
  --secondary-icon-color--disabled-dark;
  --secondary-text-color-light;
  --secondary-text-color-disabled-light;
  --secondary-text-color-dark;
  --secondary-text-color-disabled-dark;
  --secondary-background-color-light;
  --secondary-background-color-disabled-light;
  --secondary-background-color-dark;
  --secondary-background-color-disabled-dark;

  /* Tertiary */
  --tertiary-icon-color-light;
  --tertiary-icon-color--disabled-light;
  --tertiary-icon-color-dark;
  --tertiary-icon-color--disabled-dark;
  --tertiary-text-color-light;
  --tertiary-text-color-disabled-light;
  --tertiary-text-color-dark;
  --tertiary-text-color-disabled-dark;
  --tertiary-background-color-light;
  --tertiary-background-color-disabled-light;
  --tertiary-background-color-dark;
  --tertiary-background-color-disabled-dark;
  ...
}
```

</td>
</tr>
</table>

<!-- // WIP
Entonces, digamos que necesito un color para un borde. Empiezo a escribir border: 1px solid $color y mi editor de texto puede sugerir todas las variables de color que he definido para mi proyecto.

![image.png](https://cdn.tutsplus.com/cdn-cgi/image/width=577/webdesign/uploads/2013/07/var-color-.png)

Quizás tengo muchos colores en mi proyecto, pero sólo quiero colores de borde. Podría predefinir algunas variables con mis colores de borde deseados. Luego, al codificar, puedo simplemente seguir acotando la especificidad de mi nombre de variable border 1px solid $color-borde y mi editor de texto me auto-sugerirá cualquier variable que tenga con ese prefijo. ¡Todo lo que tengo que hacer es elegir la que quiero!

![image.png](https://cdn.tutsplus.com/cdn-cgi/image/width=568/webdesign/uploads/2013/07/var-color-border.png)

Incluso si no tuvieras sugerencias de código, ésta seguiría siendo una forma efectiva de nombrar tus variables. Te ayuda a recordar fácilmente lo que has nombrado a las variables porque las variables que comparten relaciones comparten prefijos. 
-->

## Conclusión

Nombrar tus variables de esta manera modular te ayudará a entender tu proyecto conceptualmente antes de codificar, mientras codificas y después de codificar. Es una situación en la que todos ganan.
