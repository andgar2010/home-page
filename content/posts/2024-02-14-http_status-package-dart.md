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
  "Dart Late keyword"
]
---

# `http_status` Dart Package: A Comprehensive Guide

## Description

* **Constants:** [`http_status`] provides convenient static constants representing all HTTP status codes defined in RFC 1945 (HTTP/1.0), RFC 2616 (HTTP/1.1), and RFC 2518 (WebDAV).
* **Clarity:** Each constant offers a clear name (e.g., `ok`, `notFound`, `forbidden`), making it easy to understand the meaning of a status code at a glance.
* **Information:** Constants also provide a concise description of the status code, which can be helpful in debugging or understanding API responses.

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
   ```

3. **Check Statuses:**

   ```dart
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
   final httpStatus = HttpStatus.fromCode(res.statusCode);
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
