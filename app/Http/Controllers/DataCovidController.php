<?php

namespace App\Http\Controllers;

use App\Models\DataCovid;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Symfony\Component\VarDumper\Cloner\Data;

class DataCovidController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datas = DataCovid::with('wilayah')->orderByDesc('id_data')->get();

        return view('admin.data_covid.index', compact('datas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $wilayahs = Wilayah::all();
        
        return view('admin.data_covid.create', compact('wilayahs'));
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
            'tgl' => 'required',
            'jam' => 'required',
            'wilayah' => 'required',
            'died' => 'required|min:0',
            'odp' => 'required|min:0'
        ]);        

        // total jumlah
        $total = $request->died + $request->odp;

        DataCovid::create([
            'tgl' => $request->tgl,
            'jam' => $request->jam,
            'id_wilayah' => $request->wilayah,
            'jumlah_meninggal' => $request->died,
            'jumlah_odp' => $request->odp,
            'jumlah' => $total
        ]);

        return redirect('admin/data')->with('flash', 'store');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataCovid  $dataCovid
     * @return \Illuminate\Http\Response
     */
    public function show(DataCovid $dataCovid)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataCovid  $dataCovid
     * @return \Illuminate\Http\Response
     */
    public function edit(DataCovid $dataCovid, $id)
    {
        $data = DataCovid::with('wilayah')->find($id);
        $wilayahs = Wilayah::all();        
        
        return view('admin.data_covid.edit', compact('data'), compact('wilayahs'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DataCovid  $dataCovid
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DataCovid $dataCovid, $id)
    {
        $request->validate([
            'tgl' => 'required',
            'jam' => 'required',
            'wilayah' => 'required',
            'died' => 'required|min:0',
            'odp' => 'required|min:0'
        ]);        

        // total jumlah
        $total = $request->died + $request->odp;

        DataCovid::find($id)
        ->update([
            'tgl' => $request->tgl,
            'jam' => $request->jam,
            'id_wilayah' => $request->wilayah,
            'jumlah_meninggal' => $request->died,
            'jumlah_odp' => $request->odp,
            'jumlah' => $total
        ]);

        return redirect('admin/data')->with('flash', 'update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataCovid  $dataCovid
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DataCovid::find($id)->delete();

        return redirect('admin/data')->with('flash', 'destroy');
    }
}
