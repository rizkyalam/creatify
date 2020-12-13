@extends('layout.main')

@section('title', 'Kelola Data Covid')
@section('title-nav', 'Kelola Data Covid')

@section('content')
<div class="data-list">        

    <div class="container pt-2">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Kelola Data Covid</li>
            </ol>
        </nav>

        <div class="card col">
            <div class="card-header">
                <a href="{{ url('admin/data/create') }}" class="btn btn-primary">
                    <i class="fas fa-sm fa-plus"></i>
                    <span>Tambah Data</span>
                </a>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <table id="data-tables" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Jam</th>
                            <th>Wilayah</th>
                            <th>Jumlah Meninggal</th>
                            <th>Jumlah ODP</th>
                            <th>Jumlah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($datas as $data)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ date('d-m-Y', strtotime($data->tgl)) }}</td>
                                <td>{{ date('H:i', strtotime($data->jam)) }}</td>
                                <td>{{ $data->wilayah->nama_wilayah }}</td>
                                <td>{{ $data->jumlah_meninggal }}</td>
                                <td>{{ $data->jumlah_odp }}</td>
                                <td>{{ $data->jumlah }}</td>
                                <td>
                                    {{-- ubah data --}}
                                    <a href="{{ url("admin/data/{$data->id_data}/edit") }}" class="btn btn-sm btn-success">Edit</a>
                                    {{-- deleted data --}}
                                    <form action="{{ url("admin/data/{$data->id_data}") }}" method="post" class="d-inline">
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