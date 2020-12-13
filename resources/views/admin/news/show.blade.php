@extends('layout.main')

@section('title', 'Detail Berita')
@section('title-nav', 'Kelola Berita')

@section('content')
<div class="data-list">
    <div class="container pt-2 py-4">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('admin/news') }}">Kelola Berita</a></li>
                <li class="breadcrumb-item active" aria-current="page">Detail Berita</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-body" style="overflow-x: auto">
                <h3 class="text-success">{{ $data->tema_berita }}</h3>
                <div class="text-secondary">Pembuat: {{ $data->creator->name }}</div>
                <div class="text-secondary">Tanggal: {{ date("d-M-Y H:i:s", strtotime($data->tgl_berita)) }}</div>

                @if ($data->image !== 'default.png')
                <div>
                    <img src="{{ asset('img/news/' . $data->image) }}" alt="" style="width: 150px; height: 150px; object-fit: contain; object-position:"></td>
                </div>                 
                @endif

                <p class="mt-3">{{ $data->isi_berita }}</p>

            </div>
        </div>
    </div>
</div>
@endsection