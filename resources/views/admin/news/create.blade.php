@extends('layout.main')

@section('title', 'Daftar Berita')
@section('title-nav', 'Kelola Berita')

@section('content')
<div class="data-list">
    <div class="container pt-2 py-4">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('admin/news') }}">Kelola Berita</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tambah Berita</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header py-3">
                <span class="text-success">Tambah akun</span>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <form action="{{ url('admin/news') }}" method="post" enctype="multipart/form-data">
                    @csrf

                    {{-- tema --}}
                    <div class="form-group">
                        <label for="tema">Tema</label>
                        <input type="text" class="form-control @error('tema') is-invalid @enderror" id="tema" name="tema" value="{{ old('tema') }}" placeholder="Masukan tema...">
                        @error('tema')
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

                    {{-- Isi --}}
                    <div class="form-group">
                        <label for="isi">Isi berita</label>
                        <textarea class="form-control @error('isi') is-invalid @enderror" id="isi" name="isi" placeholder="Isi berita"></textarea>
                        @error('isi')
                            <small class="text-danger">{{ $message }}</small>
                        @enderror
                    </div>                    
                
            </div>
            <div class="card-footer d-flex justify-content-between justify-content-md-start">
                <a href="{{ url('admin/news') }}" class="btn btn-secondary mr-3">Kembali</a>
                <button type="submit" class="btn btn-primary">Tambah</button>
            </form>
            </div>
        </div>
    </div>
</div>
@endsection