@extends('layout.main')

@section('title', 'Dashboard')
@section('title-nav', 'Dashboard')

@section('content')

{{-- data singkat --}}
<div class="data-list">
    <div class="container py-3">

        {{-- <div class="row ml-auto mb-4">
            <div class="card col-3 ml-1 card-data">
                <div class="card-data__logo">
                    <i class="fas fa-user"></i>
                </div>

                <div class="card-data__ket">
                    <span class="title">Jumlah User</span>
                    <span class="total">2</span>
                </div>
            </div>
        </div> --}}

        <div class="card col col-md-8">
            <div class="card-header">
                <span class="text-success">Berita Terbaru</span>
            </div>
            <div class="card-body p-0">
                <table class="table table-striped table-bordered mb-0">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pembuat</th>
                            <th>Judul</th>
                            <th>Tanggal</th>
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
                            </tr>                            
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <a href="{{ url('admin/news') }}" class="btn btn-info text-white">Lihat Semua</a>
            </div>
        </div>

    </div>
</div>

@endsection