---
author: "Andrés García"
title: "`http_status` Paquete de Dart: Una Guía Completa"
date: "2024-02-14"
description: "`http_status` Paquete de Dart: Una Guía Completa"
slug: "Dart Http_Status Package"
tags: [
  "Dart",
  "Http Status",
  "Paquete",
]
categories: [
  "Dart",
  "Paquete"
]
series: [
  "Dart",
  "Paquete"
]
aliases: [
  "Dart package http_status"
]
---

# [`http_status`] Paquete de Dart: Una Guía Completa

## Descripción

* **Constantes:** [`http_status`] proporciona constantes estáticas que representan todos los códigos de estado HTTP definidos en RFC 1945 (HTTP/1.0), RFC 2616 (HTTP/1.1), y RFC 2518 (WebDAV).
* **Claridad:** Cada constante ofrece un nombre claro (por ejemplo, `ok`, `notFound`, `forbidden`), facilitando la comprensión del significado de un código de estado de un vistazo.
* **Información:** Las constantes también ofrecen una descripción concisa del código de estado, que puede ser útil para depurar o entender las respuestas de la API.

## Códigos de estado HTTP

| Code | Nombre de estado HTTP              | [`http_status` v1.x - v2.x Deprecated (obsoleto)]                                               | [`http_status` (v2.x - v3.x)]   |
| ---- | ---------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------- |
| 100  | Continue                           | Continue                                  / CONTINUE                                            | continue_                       |
| 101  | Switching Protocols                | Switching_Protocols                       / SWITCHING_PROTOCOLS                                 | switchingProtocols              |
| 102  | Processing                         | Processing                                / PROCESSING                                          | processing                      |
| 103  | Early Hints                        | -                                                                                               | earlyHints                      |
| 200  | OK                                 | Ok                                        / OK                                                  | ok                              |
| 201  | Created                            | Created                                   / CREATED                                             | created                         |
| 202  | Accepted                           | Accepted                                  / ACCEPTED                                            | accepted                        |
| 203  | Non Authoritative Information      | NonAuthoritative_Information              / NON_AUTHORITATIVE_INFORMATION                       | nonAuthoritativeInformation     |
| 204  | No Content                         | No_Content                                / NO_CONTENT                                          | noContent                       |
| 205  | Reset Content                      | Reset_Content                             / RESET_CONTENT                                       | resetContent                    |
| 206  | Partial Content                    | Partial_Content                           / PARTIAL_CONTENT                                     | partialContent                  |
| 207  | Multi-Status                       | MultiStatus                               / MULTISTATUS                                         | multiStatus                     |
| 208  | Already Reported                   | Already_Reported                          / ALREADY_REPORTED                                    | alreadyReported                 |
| 226  | I'M Used                           | IM_Used                                   / IM_USED                                             | imUsed                          |
| 300  | Multiple Choices                   | Multiple_Choices                          / MULTIPLE_CHOICES                                    | multipleChoices                 |
| 301  | Moved Permanently                  | Moved_Permanently                         / MOVED_PERMANENTLY                                   | movedPermanently                |
| 302  | Found  /  Moved Temporarily        | Found  /  Moved_Temporarily               / FOUND  /  MOVED_TEMPORARILY                         | found  /  movedTemporarily      |
| 303  | See Other                          | See_Other                                 / SEE_OTHER                                           | seeOther                        |
| 304  | Not Modified                       | Not_Modified                              / NOT_MODIFIED                                        | notModified                     |
| 305  | Use Proxy                          | Use_Proxy                                 / USE_PROXY                                           | useProxy                        |
| 307  | Temporary Redirect                 | Temporary_Redirect                        / TEMPORARY_REDIRECT                                  | temporaryRedirect               |
| 308  | Permanent Redirect                 | Permanent_Redirect                        / PERMANENT_REDIRECT                                  | permanentRedirect               |
| 400  | Bad Request                        | Bad_Request                               / BAD_REQUEST                                         | badRequest                      |
| 401  | Unauthorized                       | Unauthorized                              / UNAUTHORIZED                                        | unauthorized                    |
| 402  | Payment Required                   | Payment_Required                          / PAYMENT_REQUIRED                                    | paymentRequired                 |
| 403  | Forbidden                          | Forbidden                                 / FORBIDDEN                                           | forbidden                       |
| 404  | Not Found                          | Not_Found                                 / NOT_FOUND                                           | notFound                        |
| 405  | Method Not Allowed                 | Method_Not_Allowed                        / METHOD_NOT_ALLOWED                                  | methodNotAllowed                |
| 406  | Not Acceptable                     | Not_Acceptable                            / NOT_ACCEPTABLE                                      | notAcceptable                   |
| 407  | Proxy Authentication Required      | Proxy_Authentication_Required             / PROXY_AUTHENTICATION_REQUIRED                       | proxyAuthenticationRequired     |
| 408  | Request Timeout                    | Request_Timeout                           / REQUEST_TIMEOUT                                     | requestTimeout                  |
| 409  | Conflict                           | Conflict                                  / CONFLICT                                            | conflict                        |
| 410  | Gone                               | Gone                                      / GONE                                                | gone                            |
| 411  | Length Required                    | Length_Required                           / LENGTH_REQUIRED                                     | lengthRequired                  |
| 412  | Precondition Failed                | Precondition_Failed                       / PRECONDITION_FAILED                                 | preconditionFailed              |
| 413  | Request Entity Too Large           | Payload_Too_Large / PAYLOAD_TOO_LARGE     / Request_Entity_Too_Large / REQUEST_ENTITY_TOO_LARGE | requestEntityTooLarge           |
| 414  | Request-URI Too Long               | RequestURI_Too_Long / REQUESTURI_TOO_LONG / Request_Uri_Too_Long / REQUEST_URI_TOO_LONG         | requestUriTooLong               |
| 415  | Unsupported Media Type             | Unsupported_Media_Type                    / UNSUPPORTED_MEDIA_TYPE                              | unsupportedMediaType            |
| 416  | Requested Range Not Satisfiable    | Requested_Range_Not_Satisfiable           / REQUESTED_RANGE_NOT_SATISFIABLE                     | requestedRangeNotSatisfiable    |
| 417  | Expectation Failed                 | Expectation_Failed                        / EXPECTATION_FAILED                                  | expectationFailed               |
| 418  | I'm a teapot                       | -                                                                                               | imATeapot                       |
| 419  | Insufficient Space on Resource     | -                                                                                               | insufficientSpaceOnResource     |
| 420  | Method Failure                     | -                                                                                               | methodFailure                   |
| 421  | Misdirected Request                | Misdirected_Request                       / MISDIRECTED_REQUEST                                 | misdirectedRequest              |
| 422  | Unprocessable Entity               | Unprocessable_Entity                      / UNPROCESSABLE_ENTITY                                | unprocessableEntity             |
| 423  | Locked                             | Locked                                    / LOCKED                                              | locked                          |
| 424  | Failed Dependency                  | Failed_Dependency                         / FAILED_DEPENDENCY                                   | failedDependency                |
| 426  | Upgrade Required                   | Upgrade_Required                          / UPGRADE_REQUIRED                                    | upgradeRequired                 |
| 428  | Precondition Required              | Precondition_Required                     / PRECONDITION_REQUIRED                               | preconditionRequired            |
| 429  | Too Many Requests                  | Too_Many_Requests                         / TOO_MANY_REQUESTS                                   | tooManyRequests                 |
| 431  | Request Header Fields Too Large    | Request_Header_Fields_Too_Large           / REQUEST_HEADER_FIELDS_TOO_LARGE                     | requestHeaderFieldsTooLarge     |
| 444  | Connection Closed Without Response | Connection_Closed_Without_Response        / CONNECTION_CLOSED_WITHOUT_RESPONSE                  | connectionClosedWithoutResponse |
| 451  | Unavailable For Legal Reasons      | Unavailable_For_Legal_Reasons             / UNAVAILABLE_FOR_LEGAL_REASONS                       | unavailableForLegalReasons      |
| 499  | Client Closed Request              | Client_Closed_Request                     / CLIENT_CLOSED_REQUEST                               | clientClosedRequest             |
| 500  | Internal Server Error              | Internal_Server_Error                     / INTERNAL_SERVER_ERROR                               | internalServerError             |
| 501  | Not Implemented                    | Not_Implemented                           / NOT_IMPLEMENTED                                     | notImplemented                  |
| 502  | Bad Gateway                        | Bad_Gateway                               / BAD_GATEWAY                                         | badGateway                      |
| 503  | Service Unavailable                | Service_Unavailable                       / SERVICE_UNAVAILABLE                                 | serviceUnavailable              |
| 504  | Gateway Timeout                    | Gateway_Timeout                           / GATEWAY_TIMEOUT                                     | gatewayTimeout                  |
| 505  | HTTP Version Not Supported         | HTTP_Version_Not_Supported                / HTTP_VERSION_NOT_SUPPORTED                          | httpVersionNotSupported         |
| 506  | Variant Also Negotiates            | Variant_Also_Negotiates                   / VARIANT_ALSO_NEGOTIATES                             | variantAlsoNegotiates           |
| 507  | Insufficient Storage               | Insufficient_Storage                      / INSUFFICIENT_STORAGE                                | insufficientStorage             |
| 508  | Loop Detected                      | Loop_Detected                             / LOOP_DETECTED                                       | loopDetected                    |
| 510  | Not Extended                       | Not_Extended                              / NOT_EXTENDED                                        | notExtended                     |
| 511  | Network Authentication Required    | Network_Authentication_Required           / NETWORK_AUTHENTICATION_REQUIRED                     | networkAuthenticationRequired   |
| 599  | Network Connect Timeout Error      | Network_Connect_Timeout_Error             / NETWORK_CONNECT_TIMEOUT_ERROR                       | networkConnectTimeoutError      |

Una librería para debuguear y mostrar códigos de estado http.
Incluye 63 códigos de estado, mensajes y descripciones extraídos de las especificaciones oficiales [https://tools.ietf.org/html/rfc723](https://tools.ietf.org/html/rfc723) y [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/)

## Características principales

* API limpia: La interfaz es sencilla e intuitiva, simplificando el uso de códigos de estado en sus aplicaciones Dart.
* Legibilidad: Los nombres y descripciones de las constantes mejoran la claridad del código y su mantenimiento.
* Seguridad tipográfica: Las constantes estáticas evitan errores tipográficos y el uso accidental de códigos de estado incorrectos.
* Completitud: Una amplia cobertura de los códigos de estado HTTP asegura un manejo fiable de varios escenarios de respuesta.

## Instalación

Añade la siguiente dependencia al `pubspec.yaml` de tu proyecto Dart:

```yaml
dependencias:
  http_status: <latest_version> # ^2.1.0 es la última versión compatible con v1.x
```

## Uso

1. **Import:**

   ```dart
   import 'package:http_status/http_status.dart';
   ```

2. **Constantes de acceso:**

   ```dart
   print(HttpStatusCode.ok); // Salida: 200
   print(HttpStatus.ok.name); // Salida: OK
   print(HttpStatus.ok.code); // Salida: 200
   print(HttpStatus.ok.description); // Salida: The request was fulfilled.
   print(HttpStatus.code404NotFound); // es un alias que representa la constante [HttpStatus.notFound], ofreciendo un sustituto directo de la misma para facilitar el autocompletado en los IDE.
   // Salida:
   // HttpStatus(
   //    code: 404,
   //    name: 'Not Found',
   //    description: 'The origin server did not find a current representation for '
   //        'the target resource or is not willing to disclose that one exists.',
   //  );`
   ```

3. **Comprobar estados:**

   ```dart
   /// Devuelve true si está entre 100 y 199
   res.statusCode.isInformationHttpStatusCode;
   print(HttpStatusCode.processing.isInformationHttpStatusCode); // true
   print(HttpStatusCode.notFound.isInformationHttpStatusCode); // false

   /// Devuelve true si el código está entre 200 y 299
   res.statusCode.isSuccessfulHttpStatusCode;
   print(200.isSuccessfulHttpStatusCode); // true
   print(400.isSuccessfulHttpStatusCode); // false
   print(HttpStatusCode.accepted.isSuccessfulHttpStatusCode); // true
   print(HttpStatusCode.notFound.isSuccessfulHttpStatusCode); // false

   /// Devuelve true si el código está entre 300 y 399
   res.statusCode.isRedirectHttpStatusCode;
   print(HttpStatusCode.permanentRedirect.isRedirectHttpStatusCode); // true
   print(HttpStatusCode.notFound.isRedirectHttpStatusCode); // false

   /// Devuelve true si está entre 400 y 499
   res.statusCode.isClientErrorHttpStatusCode;
   print(HttpStatusCode.notFound.isClientErrorHttpStatusCode); // true
   print(HttpStatusCode.processing.isClientErrorHttpStatusCode); // false

   /// Devuelve true si el código está entre 500 y 599
   res.statusCode.isServerErrorHttpStatusCode;
   print(HttpStatusCode.internalServerError.isServerErrorHttpStatusCode); // true
   print(HttpStatusCode.notFound.isServerErrorHttpStatusCode); // false;

   if (res.statusCode.isSuccessfulHttpStatusCode) { // Código de estado HTTP 200 - 299
     // Manejar respuesta exitosa
   } else if (res.statusCode.isClientErrorHttpStatusCode) { // Código de estado HTTP 400 - 499
     // Gestionar el error del cliente
   } else {
     // Gestionar otros códigos o errores
   }
   ```

4. **Convertir desde Int:**

   ```dart
   final httpStatus = HttpStatus.fromCode(res.statusCode); // res.statusCode = 404

   print(httpStatus);
   // Salida:
   // HttpStatus(
   //    code: 404,
   //    name: 'Not Found',
   //    description: 'The origin server did not find a current representation for '
   //        'the target resource or is not willing to disclose that one exists.',
   //  );
   ```

## Ejemplo

```dart
import 'paquete:http/http.dart' as http;
import 'package:http_status/http_status.dart';

final url = 'https://api.example.com/data';

Future<void> fetchData() async {
  try {
    final response = await http.get(Uri.parse(url));

     if (res.statusCode.isClientErrorHttpStatusCode) { // Código de estado HTTP 400 - 499
       // Gestionar el error del cliente
     } else if (response.statusCode == HttpStatusCode.ok) {
      final data = response.body;
      // Procesar respuesta correcta
    } else {
      print('Error: ${response.statusCode}');
      // Manejar los errores con elegancia
    }
  } catch (error) {
    print('Error: $error');
  }
}

void main() {
  fetchData();
}
```

Este código obtiene datos de una API y comprueba el código de estado HTTP de la respuesta. Basado en el código, puedes tomar las acciones apropiadas dependiendo del resultado.

## Consejos adicionales

* Utiliza nombres de variables significativos (por ejemplo, `data` en lugar de `httpStatus.description`).
* Considere el uso de bloques `try-catch` para manejar errores de red con gracia.
* Consulte la documentación de [`http_status`] para obtener la última información y características adicionales.

Espero que esta exhaustiva información valiosa sobre el uso del paquete [`http_status`] en tus proyectos Dart.

[`http_status`]: https://github.com/DartForge/http_status
[`http_status` (v2.x - v3.x)]: https://github.com/DartForge/http_status
[`http_status` v1.x - v2.x Deprecated (obsoleto)]: https://github.com/DartForge/http_status/tree/2.1.0
