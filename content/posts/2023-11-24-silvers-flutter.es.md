# Desplazamiento en Flutter: Slivers y Más

Flutter utiliza 'slivers' para el desplazamiento, donde un 'sliver' es una unidad de cualquier área desplazable. Las pantallas desplazables son colecciones de 'slivers'.

**Transformación de Widgets No-Desplazables a Desplazables:**
Convierte elementos no-desplazables en desplazables.

**SingleChildScrollview vs ListView:**
- **ListView:** Para múltiples widgets desplazables.
  ```dart
  ListView(
    children: <Widget>[
      Text('Item 1'),
      Text('Item 2'),
      // Más widgets
    ],
  )
  ```
- **SingleChildScrollview:** Para un único widget, manejando múltiples desplazamientos internos.
  ```dart
  SingleChildScrollView(
    child: Column(
      children: <Widget>[
        Text('Largo contenido aquí'),
        // Más widgets
      ],
    ),
  )
  ```

**NestedScrollView vs CustomScrollView:**
- **NestedScrollView:** Combina múltiples widgets desplazables en una sola pantalla.
  ```dart
  NestedScrollView(
    headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
      return <Widget>[
        SliverAppBar(
          title: Text('Título'),
          pinned: true,
          floating: true,
        ),
        // Más Slivers si es necesario
      ];
    },
    body: Center(
      child: Text('Contenido aquí'),
    ),
  )
  ```
- **CustomScrollView:** Similar al NestedScrollView, pero más personalizable.
  ```dart
  CustomScrollView(
    slivers: <Widget>[
      SliverAppBar(
        expandedHeight: 200.0,
        flexibleSpace: FlexibleSpaceBar(
          title: Text('Título'),
        ),
      ),
      SliverList(
        delegate: SliverChildBuilderDelegate(
          (BuildContext context, int index) {
            return Text('Ítem $index');
          },
          childCount: 100,
        ),
      ),
      // Más Slivers si es necesario
    ],
  )
  ```

**PageView:**
Utilizado para desplazamiento horizontal entre pantallas.
```dart
PageView(
  children: <Widget>[
    Container(color: Colors.red),
    Container(color: Colors.blue),
    // Más pantallas/containers
  ],
)
```

**GridView:**
Para crear una cuadrícula de elementos.
```dart
GridView.count(
  crossAxisCount: 2,
  children: <Widget>[
    Text('Ítem 1'),
    Text('Ítem 2'),
    // Más widgets
  ],
)
```

**Reorderable Listview:**
Permite reordenar elementos en una lista.
```dart
ReorderableListView(
  children: <Widget>[
    ListTile(key: Key('1'), title: Text('Ítem 1')),
    ListTile(key: Key('2'), title: Text('Ítem 2')),
    // Más ListTiles
  ],
  onReorder: (int oldIndex, int newIndex) {
    // Implementar la lógica de reordenamiento
  },
)
```

Estos ejemplos proporcionan una comprensión clara de cómo se implementan estos widgets en Flutter, cada uno adecuado para diferentes necesidades de la interfaz de usuario.