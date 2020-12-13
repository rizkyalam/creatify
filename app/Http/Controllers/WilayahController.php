<?php

namespace App\Http\Controllers;

use App\Models\Wilayah;
use Illuminate\Http\Request;

class WilayahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wilayahs = Wilayah::orderByDesc('id_wilayah')->get();

        return view('admin.wilayah.index', compact('wilayahs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.wilayah.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'penduduk' => 'required|min:0',
            'letak' => 'required',
            'luas' => 'required',
            'data' => 'required',
            'ket' => 'required',
        ]);

        Wilayah::create([
            'nama_wilayah' => $request->nama,
            'jumlah_penduduk' => $request->penduduk,
            'letak_wilayah' => $request->letak,
            'luas_wilayah' => $request->luas,
            'data_wilayah' => $request->data,
            'keterangan' => $request->ket
        ]);

        return redirect('admin/wilayah')->with('flash', 'store');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wilayah  $wilayah
     * @return \Illuminate\Http\Response
     */
    public function show(Wilayah $wilayah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wilayah  $wilayah
     * @return \Illuminate\Http\Response
     */
    public function edit(Wilayah $wilayah)
    {
        $data = Wilayah::find($wilayah->id_wilayah);
        
        return view('admin.wilayah.edit', compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wilayah  $wilayah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Wilayah $wilayah)
    {
        $request->validate([
            'nama' => 'required',
            'penduduk' => 'required|min:0',
            'letak' => 'required',
            'luas' => 'required',
            'data' => 'required',
            'ket' => 'required',
        ]);

        Wilayah::find($wilayah->id_wilayah)
        ->update([
            'nama_wilayah' => $request->nama,
            'jumlah_penduduk' => $request->penduduk,
            'letak_wilayah' => $request->letak,
            'luas_wilayah' => $request->luas,
            'data_wilayah' => $request->data,
            'keterangan' => $request->ket
        ]);

        return redirect('admin/wilayah')->with('flash', 'update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wilayah  $wilayah
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wilayah $wilayah)
    {
        Wilayah::find($wilayah->id_wilayah)->delete();

        return redirect('admin/wilayah')->with('flash', 'destroy');
    }
}
