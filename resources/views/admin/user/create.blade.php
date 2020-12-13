@extends('layout.main')

@section('title', 'Kelola Akun User')
@section('title-nav', 'Kelola User')

@section('content')
<div class="data-list">
    <div class="container pt-2 py-4">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('admin/user') }}">Kelola User</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tambah Akun User</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header py-3">
                <span class="text-success">Tambah akun</span>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <form action="{{ url('admin/user') }}" method="post" enctype="multipart/form-data">
                    @csrf

                    {{-- name --}}
                    <div class="form-group">
                        <label for="name">Nama</label>
                        <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name') }}" placeholder="Masukan nama...">
                        @error('name')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    
                    {{-- Email --}}
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}" placeholder="Masukan email...">
                        @error('email')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    
                    {{-- Gambar --}}
                    <div class="form-group">
                        <label for="image">Gambar</label>
                        <input type="file" class="form-control @error('image') is-invalid @enderror" id="image" name="image">
                        @error('image')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Password --}}
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="Masukan password...">
                        @error('password')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Password Repeat--}}
                    <div class="form-group">
                        <label for="password">Ulangi Password</label>
                        <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password-repeat" placeholder="Ulangi Password diatas...">
                        @error('password-repeat')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>                    
                
            </div>
            <div class="card-footer d-flex justify-content-between justify-content-md-start">
                <a href="{{ url('admin/user') }}" class="btn btn-secondary mr-3">Kembali</a>
                <button type="submit" class="btn btn-primary">Tambah</button>
            </form>
            </div>
        </div>
    </div>
</div>
@endsection