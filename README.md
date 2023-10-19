# Bienvenido a MoviesInc

Esta aplicación de películas se desarrolló con React Native y utiliza el API de The Movie Database (TMDb) para mostrar información sobre películas y actores.

Los usuarios pueden ver la lista resumida de peliculas exibiendose ahora mismo en Republica Dominicana, ver detalles de las mismas y calificarlas.

## Requisitos de Instalación

Para facilitar el proceso de evaluacion las variables de entorno ya estan configuradas en el archivo `src/constants/environment.ts`

- Clona el repositorio de GitHub:

```sh
git clone https://github.com/ldss95/movies-inc.git ./MoviesInc
```

- Navega al directorio de la aplicación:

```sh
cd MoviesInc
```

- Instala las dependencias:

```sh
npm install
```

- Inicia la aplicación:
```sh
npm start
```

- Correr pruebas end-to-end:
```sh
npm run test
```

**Ejecutar en iOS!**

Antes de poder levantar o compilar el proyecto para `iOS` es necesario instalar los `Pods`
```sh
cd ios
pod install
```


### Estructura
  - `App.tsx` (Configuración de Navegación):
  - `src`
    - `types` (Interfaces): Contiene definiciones de interfaces TypeScript.
    - `services` (Solicitudes HTTP)
    - `hooks` (Hooks Personalizados)
  	- `components` (Componentes UI Reutilizables)
    - `screens` (Pantallas UI)
    - `utils/helpers` (Código Reutilizable): Utilizado para almacenar funciones de utilidad, módulos o clases que ofrecen funcionalidades comunes y reutilizables en toda la aplicación.
