<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'John Doe',
                'email' => 'john@mail.com',
                'password' => bcrypt('john@123'),
                'remember_token' => Str::random(10)
            ],
            [
                'name' => 'Steve Jobs',
                'email' => 'steve@mail.com',
                'password' => bcrypt('apple@123'),
                'remember_token' => Str::random(10)
            ]
        ]);
    }
}
