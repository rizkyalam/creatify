<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datas = News::with('creator')->orderByDesc('id_berita')->get();        

        return view('admin.news.index', compact('datas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.news.create');
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
            'tema' => 'required',
            'image' => 'mimes:jpeg,png,jpg,gif,svg|max:1024',
            'isi' => 'required',
        ]);

        if($request->image !== null) :
            $imgName = time() . $request->image->getClientOriginalName();

            $request->image->move(public_path('img/news'), $imgName);
        else :
            $imgName = 'default.png';
        endif;

        News::create([
            'id_user' => 1,
            'image' => $imgName,
            'tgl_berita' => date('Y-m-d H:i:s'),
            'tema_berita' => $request->tema,
            'isi_berita' => $request->isi
        ]);

        return redirect('admin/news')->with('flash', 'store');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        $data = News::with('creator')->find($news->id_berita);

        return view('admin.news.show', compact('data'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        $data = News::find($news->id_berita);
        return view('admin.news.edit', compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $data = News::find($news->id_berita);

        $request->validate([
            'tema' => 'required',
            'image' => 'mimes:jpeg,png,jpg,gif,svg|max:1024',
            'isi' => 'required',
        ]);

        if($request->image !== null) :
            $imgName = time() . $request->image->getClientOriginalName();

            $request->image->move(public_path('img/news'), $imgName);                

            // jika foto sebelumnya bukan default
            if ($data->image !== 'default.png') :
                File::delete("img/news/{$data->image}");
            endif;

        else :
            $imgName = $data->image;
        endif;

        $data->update([
            'image' => $imgName,
            'tema_berita' => $request->tema,
            'isi_berita' => $request->isi
        ]);

        return redirect('admin/news')->with('flash', 'store');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        $data = News::find($news->id_berita);        
    
        // jika foto sebelumnya bukan default
        if ($data->image !== 'default.png') :
            File::delete("img/news/{$data->image}");
        endif;

        $data->delete();

        return redirect('admin/news')->with('flash', 'destroy');
    }
}
