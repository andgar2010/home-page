---
author: "Andrés García"
title: "`http_status` Dart Package: A Comprehensive Guide"
date: "2024-02-14"
description: "`http_status` Dart Package: A Comprehensive Guide"
slug: "Dart Http_Status Package"
tags: [
  "Dart",
  "Http Status",
  "Package",
]
categories: [
  "Dart",
  "Package"
]
series: [
  "Dart",
  "Package"
]
aliases: [
  "Dart package http_status"
]
---

# `http_status` Dart Package: A Comprehensive Guide

## Description

* **Constants:** [`http_status`] provides convenient static constants representing all HTTP status codes defined in RFC 1945 (HTTP/1.0), RFC 2616 (HTTP/1.1), and RFC 2518 (WebDAV).
* **Clarity:** Each constant offers a clear name (e.g., `ok`, `notFound`, `forbidden`), making it easy to understand the meaning of a status code at a glance.
* **Information:** Constants also provide a concise description of the status code, which can be helpful in debugging or understanding API responses.

## Http Status Codes

| Code | Http Status Name                   | Http Status (v1.x - v2.x Deprecated)                                                            | Http Status (v2.x - v3.x)       |
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

A library for debugging and displaying http status codes.
Includes 63 status codes, messages and desciptions sourced from
the official spec [https://tools.ietf.org/html/rfc723](https://tools.ietf.org/html/rfc723) and [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/)

## Key Features

* **Clean API:** The interface is straightforward and intuitive, simplifying the use of status codes in your Dart applications.
* **Readability:** Constant names and descriptions enhance code clarity and maintainability.
* **Type Safety:** Static constants prevent typos and accidental use of incorrect status codes.
* **Completeness:** Extensive coverage of HTTP status codes ensures reliable handling of various response scenarios.

## Installation

Add the following dependency to your Dart project's `pubspec.yaml`:

```yaml
dependencies:
  http_status: <latest_version> # ^2.1.0 is last version compatible with v1.x
```

## Usage

1. **Import:**

   ```dart
   import 'package:http_status/http_status.dart';
   ```

2. **Access Constants:**

   ```dart
   print(HttpStatusCode.ok);          // Output: 200
   print(HttpStatus.ok.name);         // Output: OK
   print(HttpStatus.ok.code);         // Output: 200
   print(HttpStatus.ok.description);  // Output: The request was fulfilled.
   print(HttpStatus.code404NotFound); // Is an alias representing the [HttpStatus.notFound] constant, offering a direct substitute for it to facilitate auto-completion in IDEs.
   // Salida:
   // HttpStatus(
   //    code: 404,
   //    name: 'Not Found',
   //    description: 'The origin server did not find a current representation for '
   //        'the target resource or is not willing to disclose that one exists.',
   //  );`
   ```

3. **Check Statuses:**

   ```dart
    /// Returns true if this ranges between 100 y 199
   res.statusCode.isInformationHttpStatusCode;
   print(HttpStatusCode.processing.isInformationHttpStatusCode); // true
   print(HttpStatusCode.notFound.isInformationHttpStatusCode); // false

   /// Returns true if this ranges between 200 y 299
   res.statusCode.isSuccessfulHttpStatusCode;
   print(200.isSuccessfulHttpStatusCode); // true
   print(400.isSuccessfulHttpStatusCode); // false
   print(HttpStatusCode.accepted.isSuccessfulHttpStatusCode); // true
   print(HttpStatusCode.notFound.isSuccessfulHttpStatusCode); // false

   /// Returns true if this ranges between 300 y 399
   res.statusCode.isRedirectHttpStatusCode;
   print(HttpStatusCode.permanentRedirect.isRedirectHttpStatusCode); // true
   print(HttpStatusCode.notFound.isRedirectHttpStatusCode); // false

    /// Returns true if this ranges between 400 y 499
   res.statusCode.isClientErrorHttpStatusCode;
   print(HttpStatusCode.notFound.isClientErrorHttpStatusCode); // true
   print(HttpStatusCode.processing.isClientErrorHttpStatusCode); // false

   /// Returns true if this ranges between 500 y 599
   res.statusCode.isServerErrorHttpStatusCode;
   print(HttpStatusCode.internalServerError.isServerErrorHttpStatusCode); // true
   print(HttpStatusCode.notFound.isServerErrorHttpStatusCode); // false;

   if (res.statusCode.isSuccessfulHttpStatusCode) {
     // Handle successful response
   } else if (res.statusCode.isClientErrorHttpStatusCode) {
     // Handle client error
   } else {
     // Handle other errors
   }

   ```

4. **Convert from Int:**

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

## Example

```dart
import 'package:http/http.dart' as http;
import 'package:http_status/http_status.dart';

final url = 'https://api.example.com/data';

Future<void> fetchData() async {
  try {
    final response = await http.get(Uri.parse(url));

     if (res.statusCode.isClientErrorHttpStatusCode) { // HTTP status code 400 - 499
       // Handle client error
     } else if (response.statusCode == HttpStatusCode.ok) {
      final data = response.body;
      // Process successful response
    } else {
      print('Error: ${response.statusCode}');
      // Handle errors gracefully
    }
  } catch (error) {
    print('Error: $error');
  }
}

void main() {
  fetchData();
}
```

This code fetches data from an API and checks the HTTP status code of the response. Based on the code, you can take appropriate actions depending on the outcome.

## Additional Tips

* Use meaningful variable names (e.g., `data` instead of `httpStatus.description`).
* Consider using `try-catch` blocks to handle network errors gracefully.
* Refer to the [`http_status`] documentation for the latest information and additional features.

I hope this comprehensive valuable insights into using the [`http_status`] package in your Dart projects!

[`http_status`]: https://github.com/DartForge/http_status
