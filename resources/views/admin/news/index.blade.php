@extends('layout.main')

@section('title', 'Daftar Berita')
@section('title-nav', 'Kelola Berita')

@section('content')
<div class="data-list">        

    <div class="container pt-2">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Kelola Berita</li>
            </ol>
        </nav>

        {{-- card --}}
        <div class="card col">
            <div class="card-header">
                <a href="{{ url('admin/news/create') }}" class="btn btn-primary">
                    <i class="fas fa-sm fa-plus"></i>
                    <span>Tambah Data</span>
                </a>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <table id="data-tables" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pembuat</th>
                            <th>Tema</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {{-- daftar table --}}
                        @foreach ($datas as $news)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $news->creator->name }}</td>
                                <td>{{ $news->tema_berita }}</td>
                                <td>{{ date("H:i:s d-m-Y", strtotime($news->tgl_berita)) }}</td>
                                <td>
                                    <a href="{{ url("admin/news/{$news->id_berita}") }}" class="btn btn-sm btn-info text-white">Detail</a>
                                    <a href="{{ url("admin/news/{$news->id_berita}/edit") }}" class="btn btn-sm btn-success">Edit</a>

                                    <form action="{{ url("admin/news/{$news->id_berita}") }}" method="post" class="d-inline">
                                        @csrf
                                        @method('delete')
                                        <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Apakah anda yakin ingin menghapus nya?')">Hapus</button>
                                    </form>
                                </td>
                            </tr>                            
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection