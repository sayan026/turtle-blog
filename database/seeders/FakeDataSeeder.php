<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FakeDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker::create();
      foreach (range(1, 46) as $index) {
        $user = DB::table('users')->insert([
          'name'            => $faker->name,
          'email'           => $faker->email,
          'password'        => bcrypt('admin#123'),
          'remember_token'  => Str::random(10),
          'created_at'      => date("Y-m-d H:i:s")
        ]);
      }
    }
}
