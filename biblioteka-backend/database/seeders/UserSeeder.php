<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Grad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $valjevo = Grad::where('nazivGrada', 'Valjevo')->first();
        $gradovi = Grad::all();

        $user = User::create([
            'name' => 'Jana',
            'email' => 'jana@gmail.com',
            'password' => bcrypt('jana123'),
            'uloga' => 'admin',
            'gradId' => $valjevo->id,
            'brojTelefona' => '064 777 8998',
            'adresa' => 'Vojvode Stepe 12'
        ]);

        $user2 = User::create([
            'name' => 'Veljko',
            'email' => 'veljko@gmail.com',
            'password' => bcrypt('veljko123'),
            'uloga' => 'bibliotekar',
            'gradId' => $valjevo->id,
            'brojTelefona' => '063 555 8888',
            'adresa' => 'Kneza Mihaila 32'
        ]);

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 12; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('password'),
                'uloga' => 'korisnik',
                'gradId' => $gradovi->random()->id,
                'brojTelefona' => $faker->phoneNumber,
                'adresa' => $faker->address
            ]);
        }
    }
}
