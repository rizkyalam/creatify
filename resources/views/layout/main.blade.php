<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/datatables.css') }}">
    <title>@yield('title')</title>
</head>
<body>
    {{-- navigasi untuk admin  --}}
    @include('layout.navbar')

    {{-- sidenav untuk admin --}}
    @include('layout.sidebar')

    {{-- flash data --}}
    @if (session('flash'))
        <span class="flash-msg" data-flash="{{ session('flash') }}"></span>
    @endif
  
    <main class="main-content-admin">
        {{-- content --}}
        @yield('content')
    </main>
    
    {{-- javascript --}}
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/datatables.js') }}"></script>
    <script src="{{ asset('js/bootstrap-datatables.js') }}"></script>    
    <script>        
        $('#data-tables').DataTable();
    </script>
</body>
</html>