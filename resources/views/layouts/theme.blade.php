<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Turtle-Blog</title>

        <!-- Styles -->
        <link href="{{asset('css/theme.css')}}" rel="stylesheet">
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body>
        <div id="app">@yield('content')</div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
