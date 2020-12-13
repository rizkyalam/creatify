@extends('layout.main')

@section('title', 'Kelola Data Wilayah')
@section('title-nav', 'Kelola Wilayah')

@section('content')
<div class="data-list">        

    <div class="container pt-2">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Kelola Data Wilayah</li>
            </ol>
        </nav>

        {{-- card --}}
        <div class="card col">
            <div class="card-header">
                <a href="{{ url('admin/wilayah/create') }}" class="btn btn-primary">
                    <i class="fas fa-sm fa-plus"></i>
                    <span>Tambah Data</span>
                </a>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <table id="data-tables" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Wilayah</th>
                            <th>Jumlah Penduduk</th>
                            <th>Letak Wilayah</th>
                            <th>Luas Wilayah</th>
                            <th>Data Wilayah</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($wilayahs as $wilayah)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $wilayah->nama_wilayah }}</td>
                                <td>{{ $wilayah->jumlah_penduduk }} Orang</td>
                                <td>{{ $wilayah->letak_wilayah }}</td>
                                <td>{{ $wilayah->luas_wilayah }}</td>
                                <td>{{ $wilayah->data_wilayah }}</td>
                                <td>{{ $wilayah->keterangan }}</td>
                                <td>
                                    <a href="{{ url("admin/wilayah/{$wilayah->id_wilayah}/edit") }}" class="btn btn-sm btn-success">Edit</a>

                                    <form action="{{ url("admin/wilayah/{$wilayah->id_wilayah}") }}" method="post" class="d-inline">
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