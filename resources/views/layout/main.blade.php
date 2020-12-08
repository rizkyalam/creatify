<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>@yield('title')</title>
</head>
<body>
    {{-- navigasi untuk admin  --}}
    @include('layout.navbar')

    {{-- sidenav untuk admin --}}
    @include('layout.sidebar')

    <main class="main-content-admin">
        {{-- content --}}
        @yield('content')
    </main>

    {{-- javascript --}}
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>