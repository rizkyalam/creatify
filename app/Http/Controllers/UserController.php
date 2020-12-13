<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderByDesc('id')->get();
        return view('admin.user.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.user.create');
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
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'image' => 'mimes:jpeg,png,jpg,gif,svg|max:1024',
            'password' => 'required|min:4|max:16|same:password-repeat',
            'password-repeat' => 'required|min:4|max:16|same:password'
        ]);

        if($request->image !== null) :
            $imgName = time() . $request->image->getClientOriginalName();

            $request->image->move(public_path('img/user'), $imgName);
        else :
            $imgName = 'default.jpg';
        endif;

        User::create([
            "name"     => $request->name,
            "email"    => $request->email,
            "level"    => 1, // level 1 adalah admin
            "image"    => $imgName,
            "password" => Hash::make($request->password)
        ]);

        return redirect('admin/user')->with('flash', 'store');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        $user = User::firstWhere('id', $id);

        return view('admin.user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $request->validate([
            'name' => 'required',
            'image' => 'mimes:jpeg,png,jpg,gif,svg|max:1024',
            'password_old' => 'required',            
        ]);

        // jika password lama sesuai
        if(Hash::check($request->password_old, $user->password)) {            

            $request->validate([
                'password_new' => 'min:4|max:16|same:password_repeat',
                'password_repeat' => 'min:4|max:16|same:password_new'
            ]);

            if($request->image !== null) :
                $imgName = time() . $request->image->getClientOriginalName();
    
                $request->image->move(public_path('img/user'), $imgName);                

                // jika foto sebelumnya bukan default
                if ($user->image !== 'default.jpg') :
                    File::delete("img/user/{$user->image}");
                endif;

            else :
                $imgName = $user->image;
            endif;
    
            // ubah data
            $user->update([                
                "name"     => $request->name,
                "image"    => $imgName,
                "password" => Hash::make($request->password_new)
            ]);
    
            return redirect('admin/user')->with('flash', 'update');

        } else {
            return redirect("admin/user/{$id}/edit")->with("flash", "wrong-pwd");
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);        
    
        // jika foto sebelumnya bukan default
        if ($user->image !== 'default.jpg') :
            File::delete("img/user/{$user->image}");
        endif;

        $user->delete();

        return redirect('admin/user')->with('flash', 'destroy');
    }
}
