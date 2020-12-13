@extends('layout.main')

@section('title', 'Kelola Akun User')
@section('title-nav', 'Kelola User')

@section('content')
<div class="data-list">        

    <div class="container pt-2">
        
        {{-- bread crumb --}}
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Kelola User</li>
            </ol>
        </nav>

        {{-- card --}}
        <div class="card col">
            <div class="card-header">
                <a href="{{ url('admin/user/create') }}" class="btn btn-primary">
                    <i class="fas fa-sm fa-plus"></i>
                    <span>Tambah Akun</span>
                </a>
            </div>
            <div class="card-body" style="overflow-x: auto">
                <table id="data-tables" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Gambar</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {{-- daftar table --}}
                        @foreach ($users as $user)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td><img src="{{ asset('img/user/' . $user->image) }}" alt="" style="width: 150px; height: 150px; object-fit: cover; object-position:"></td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->email }}</td>
                                <td>
                                    <a href="{{ url("admin/user/{$user->id}/edit") }}" class="btn btn-sm btn-success">Edit</a>

                                    <form action="{{ url("admin/user/{$user->id}") }}" method="post" class="d-inline">
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