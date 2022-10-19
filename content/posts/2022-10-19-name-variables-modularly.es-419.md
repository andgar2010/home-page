+++
author = "Andrés García"
title = "Buenas prácticas para nombrar los variables de forma modular"
date = "2022-10-19"
description = "Buenas prácticas para nombrar los variables de forma modular"
slug = "Buenas prácticas para nombrar los variables de forma modular"
tags = [
  "nombrar los variables",
  "nombramiento las variables",
]
categories = [
  "Programming Language",
]
series = [
  "Programming Language"
]
aliases = [
  "Programming Language"
]
+++

# Estándar nombramiento las variables de forma modular

Cuando trabajas con un lenguaje de programación vas a aprovechar el poder de las variables. Sin embargo, si creas espontáneamente los nombres de las variables a medida que codificas, lo más probable es que tu convención de nomenclatura carezca de cohesión. Deberías pensar en organizar los nombres de tus variables (y del proyecto en general) de forma modular. Esto traerá estructura y unidad a tu proyecto como un todo, haciendo más fácil la comprensión y la navegación de todo el asunto.

## Una sugerencia de nomenclatura

Digamos que necesitas una variable para el color del texto en tu proyecto.
¿Podrías llamarla `text-color`, o deberías llamarla `color-text`? ¿Cómo se decide?
Elegir una al azar puede contribuir a la falta de estructura a medida que aumenta el número de variables en tu proyecto. Como muestra la experiencia, a menudo olvidamos exactamente cómo nombramos las variables para determinados proyectos. Esto lleva a la confusión y a métodos de búsqueda y sustitución global de nombres de variables que llevan mucho tiempo.

Lo que necesitamos es una regla para definir y seleccionar nuestros nombres de variables. Una gran manera de mantener el modularidad en su proyecto es agrupar las variables que comparten relaciones y puntos en común. Entonces puedes nombrarlas ordenando las palabras que describen su función de **genérico a específico de izquierda a derecha**.

Por ejemplo, si tengo cuatro variables para cuatro colores de borde diferentes, puedo nombrarlas todas empezando por `border` (ya que ese es el término genérico que todas comparten) y ser más específico con una lectura de izquierda a derecha. Agrupar y nombrar las variables de esta manera hace que tu código sea más fácil de leer, comprender y recordar.

### Sin patrón (No debe utilizar este ejemplo)

```dart
var blue-border;
var light-blue-border;
var lightest-blue-border;
var dark-green-border;
var darkest-border-green;
var red-border;
```

### Genérico -> Específico (Se recomienda utilizar este ejemplo)

```dart
var border-blue;
var border-blue-light;
var border-blue-lightest;
var border-green-dark;
var border-green-darkest;
var border-red;
```

## De lo genérico a lo específico: Un ejemplo

Supongamos que estamos trabajando en un lenguaje de programación y queremos crear una serie de variables que definan la paleta de colores de nuestro proyecto. Si estamos trabajando con un tono de blue, podríamos crear algunas variables como esta:

```dart
var blue;
var dark-blue;
var medium-blue;
var darkest-blue;
var light-blue;
var lightest-blue;
```

Una mejor manera de nombrar estas variables sería empezar con la palabra genérica que todas tienen en común: **blue**. Luego podemos ir concretando de izquierda a derecha:

```dart
var blue;
var blue-dark;
var blue-medium;
var blue-darkest;
var blue-light;
var blue-lightest;
```

Esto no sólo ayuda a recordar, sino que permitirá a un editor de texto (como VSCode, Android Studio, Sublime Text, etc.) sugerir fácilmente los colores. De esta manera no tiene que memorizar exactamente cómo nombró sus variables. Más bien, puedes empezar de forma genérica y ser más específico a medida que el editor de texto auto-sugiere los nombres de las variables. Todo lo que tienes que recordar es que quieres un color **blue**. Así que empiezas a escribir `blue` y puedes obtener una lista de todos los diferentes **blue**es que has creado.

## Ejemplo de sugerencia

Imagina que estoy trabajando en un gran proyecto y he agrupado todas mis variables que contienen valores de color anteponiéndoles la palabra genérica que todas tienen en común: color.

```dart
// Hmmm... no es mejor
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
```

```dart
// Ok
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

// No debe estar en este mismo archivo porque principio de responsabilidad única (SRP)
// por un archivo o un clase.
var fontFamilyTextLight;
var fontFamilyTextDark;
var sizeTextStrokeLight;
var sizeTextStrokeDark;
var sizeTextLight;
var sizeTextDark;
```

Si tiene varias responsabilidades de los variables en un archivo o una clase. 

Da otra forma de patrón: **la categoría (o tipo) a lo genérico a lo específico**.

```dart
// Mejor
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
var textStrokeColorLight;
var textStrokeColorDark;
var textStrokeSize;

```

Si se utilizan los variaciones del mismo un archivo o de una clase

```dart
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
```

<!-- // WIP
Entonces, digamos que necesito un color para un borde. Empiezo a escribir border: 1px solid $color y mi editor de texto puede sugerir todas las variables de color que he definido para mi proyecto.

![image.png](https://cdn.tutsplus.com/cdn-cgi/image/width=577/webdesign/uploads/2013/07/var-color-.png)

Quizás tengo muchos colores en mi proyecto, pero sólo quiero colores de borde. Podría predefinir algunas variables con mis colores de borde deseados. Luego, al codificar, puedo simplemente seguir acotando la especificidad de mi nombre de variable border 1px solid $color-borde y mi editor de texto me auto-sugerirá cualquier variable que tenga con ese prefijo. ¡Todo lo que tengo que hacer es elegir la que quiero!

![image.png](https://cdn.tutsplus.com/cdn-cgi/image/width=568/webdesign/uploads/2013/07/var-color-border.png)

Incluso si no tuvieras sugerencias de código, ésta seguiría siendo una forma efectiva de nombrar tus variables. Te ayuda a recordar fácilmente lo que has nombrado a las variables porque las variables que comparten relaciones comparten prefijos. 
-->

## Conclusión

Nombrar tus variables de esta manera modular te ayudará a entender tu proyecto conceptualmente antes de codificar, mientras codificas y después de codificar. Es una situación en la que todos ganan.
