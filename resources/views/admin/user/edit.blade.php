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
                <li class="breadcrumb-item active" aria-current="page">Edit Akun User</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header py-3">
                <span class="text-success">Edit akun</span>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <form action="{{ url("admin/user/{$user->id}") }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('put')

                    {{-- Name --}}
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $user->name ?? old('name') }}">
                        @error('name')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                                        
                    {{-- Gambar --}}
                    <div class="form-group">
                        <label for="image">Gambar baru</label>
                        <div>
                            <img src="{{ asset('img/user/' . $user->image) }}" alt="" style="width: 150px; height: 150px; object-fit: cover; object-position:"></td>
                        </div>
                        <input type="file" class="form-control @error('image') is-invalid @enderror mt-1" id="image" name="image">
                        @error('image')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Password Old--}}
                    <div class="form-group">
                        <label for="password">Password Lama</label>
                        <input type="password" class="form-control @error('password_old') is-invalid @enderror" id="password" name="password_old">
                        @error('password_old')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Password New--}}
                    <div class="form-group">
                        <label for="password">Password Baru</label>
                        <input type="password" class="form-control @error('password_new') is-invalid @enderror" id="password" name="password_new">
                        @error('password_new')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    {{-- Password Repeat--}}
                    <div class="form-group">
                        <label for="password">Ulangi Password Baru</label>
                        <input type="password" class="form-control @error('password_repeat') is-invalid @enderror" id="password" name="password_repeat">
                        @error('password_repeat')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>                    

                </div>
            <div class="card-footer d-flex justify-content-between justify-content-md-start">
                <a href="{{ url('admin/user') }}" class="btn btn-secondary mr-3">Kembali</a>
                <button type="submit" class="btn btn-success">Ubah</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection