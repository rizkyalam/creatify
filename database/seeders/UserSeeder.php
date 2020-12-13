<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas = [
            [
                'name' => 'admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('adminganteng123'),
                'level' => 1,
                'image' => 'default.jpg'
            ],
            [
                'name' => 'genji',
                'email' => 'genji@suzuran.sch.id',
                'password' => Hash::make('genji'),
                'level' => 1,
                'image' => 'genji.jpg'
            ],
        ];

        foreach($datas as $data) :
            DB::table('users')->insert([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password'],
                'level' => $data['level'],
                'image' => $data['image'],
            ]);
        endforeach;
    }
}
